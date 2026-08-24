import json
import subprocess
import unittest
from pathlib import Path
from urllib.parse import parse_qs, urlencode, urlparse


ROOT = Path(__file__).resolve().parents[1]
PAGE = ROOT / "payments" / "index.html"
SCRIPT = ROOT / "payments" / "payments.js"
I18N = ROOT / "payments" / "payments-i18n.js"


def run_payments_script(params):
    query = urlencode(params)
    harness = r"""
const fs = require("fs");
const vm = require("vm");
const i18n = fs.existsSync(process.argv[1]) ? fs.readFileSync(process.argv[1], "utf8") : "";
const script = fs.readFileSync(process.argv[2], "utf8");
const query = process.argv[3];
let redirectedTo = null;
let fetchCalls = 0;
const element = () => ({
  textContent: "",
  classList: { add() {}, remove() {} },
});
const elements = new Map([
  ["page-title", element()],
  ["checkout-description", element()],
  ["checkout-state", element()],
  ["checkout-status", element()],
]);
const sandbox = {
  URL,
  URLSearchParams,
  console,
  document: {
    getElementById(id) { return elements.get(id) ?? element(); },
    querySelector() { return element(); },
    documentElement: { lang: "es", dir: "ltr" },
    querySelectorAll() { return []; },
  },
  navigator: { languages: ["es-ES"] },
  window: {
    location: {
      search: `?${query}`,
      pathname: "/payments/",
      replace(value) { redirectedTo = String(value); },
    },
    history: { replaceState() {} },
  },
  fetch: async () => {
    fetchCalls += 1;
    return { ok: true, status: 201, json: async () => ({ checkoutUrl: "https://legacy.invalid/checkout" }) };
  },
  setTimeout,
  clearTimeout,
};
sandbox.window.window = sandbox.window;
if (i18n) vm.runInNewContext(i18n, sandbox, { filename: process.argv[1] });
vm.runInNewContext(script, sandbox, { filename: process.argv[2] });
setTimeout(() => process.stdout.write(JSON.stringify({
  redirectedTo,
  fetchCalls,
  lang: sandbox.document.documentElement.lang,
  title: elements.get("page-title").textContent,
  description: elements.get("checkout-description").textContent,
  stateTitle: elements.get("checkout-state").textContent,
  status: elements.get("checkout-status").textContent,
})), 20);
"""
    completed = subprocess.run(
        ["node", "-e", harness, str(I18N), str(SCRIPT), query],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
        encoding="utf-8",
    )
    return json.loads(completed.stdout)


class ParameterizedPaymentsPageTest(unittest.TestCase):
    def test_page_does_not_expose_any_editable_payment_fields(self):
        html = PAGE.read_text(encoding="utf-8")
        self.assertNotIn('<form', html)
        self.assertNotIn('<input', html)
        self.assertNotIn('<select', html)
        self.assertNotIn('asset-choice', html)
        self.assertIn('id="checkout-status"', html)

    def test_page_reads_preestablished_url_values_and_opens_the_generic_pay_contract(self):
        script = SCRIPT.read_text(encoding="utf-8")
        self.assertIn('new URLSearchParams(window.location.search)', script)
        self.assertIn('/pay', script)
        self.assertNotIn('/api/v1/checkouts', script)
        for field in ('projectCode', 'externalOrderId', 'customerReference', 'title', 'description', 'localizedContent', 'network', 'assetCode', 'amount', 'lang'):
            self.assertIn(field, script)
        self.assertNotIn('/api/orders', script)
        self.assertNotIn('productCode', script)
        self.assertIn('entryIdleState', script)
        self.assertIn('PaymentEntryI18n', script)

    def test_mainnet_url_preserves_localized_content_and_redirects_to_the_generic_pay_contract(self):
        localized = json.dumps({
            locale: {"title": "EmulAItor lifetime", "description": "Permanent access"}
            for locale in ("es", "en", "ru", "it", "pt", "fr", "de", "ar", "hi", "zh-CN", "ja", "ko")
        }, ensure_ascii=False)
        result = run_payments_script({
            "projectCode": "emulaitor",
            "externalOrderId": "emulaitor-mainnet-8-usdt-001",
            "customerReference": "license-profile-42",
            "title": "EmulAItor · Licencia permanente",
            "description": "Acceso permanente a EmulAItor.",
            "localizedContent": localized,
            "network": "mainnet-beta",
            "assetCode": "USDT",
            "amount": "8",
            "lang": "ru",
        })

        self.assertEqual(result["fetchCalls"], 0)
        target = urlparse(result["redirectedTo"])
        self.assertEqual(f"{target.scheme}://{target.netloc}{target.path}", "https://pay.rolemiaster.com/pay")
        query = parse_qs(target.query)
        self.assertEqual(query["network"], ["mainnet-beta"])
        self.assertEqual(query["assetCode"], ["USDT"])
        self.assertEqual(query["amount"], ["8"])
        self.assertEqual(query["lang"], ["ru"])
        self.assertEqual(query["localizedContent"], [localized])
    def test_invalid_russian_link_shows_a_fully_localized_error(self):
        result = run_payments_script({"lang": "ru", "unexpected": "value"})

        self.assertIsNone(result["redirectedTo"])
        self.assertEqual(result["fetchCalls"], 0)
        self.assertEqual(result["lang"], "ru")
        self.assertEqual(result["title"], "Не удалось открыть страницу оплаты")
        self.assertEqual(result["description"], "Проверьте ссылку и попробуйте снова.")
        self.assertEqual(result["stateTitle"], "Недействительная ссылка на оплату")
        self.assertEqual(result["status"], "Ссылка содержит параметр, который не поддерживается платёжным шлюзом.")

    def test_entry_page_has_complete_translations_for_the_twelve_checkout_languages(self):
        self.assertTrue(I18N.exists(), "Falta el módulo de idiomas de la página pública")
        harness = r"""
const fs = require("fs");
const vm = require("vm");
const source = fs.readFileSync(process.argv[1], "utf8");
const sandbox = { window: {}, URLSearchParams };
vm.runInNewContext(source, sandbox, { filename: process.argv[1] });
const api = sandbox.window.PaymentEntryI18n;
process.stdout.write(JSON.stringify({ locales: api.supportedLocaleCodes, missing: Object.fromEntries(api.supportedLocaleCodes.map(locale => [locale, api.missingKeys(locale)])) }));
"""
        completed = subprocess.run(
            ["node", "-e", harness, str(I18N)],
            cwd=ROOT,
            check=True,
            capture_output=True,
            text=True,
        )
        result = json.loads(completed.stdout)
        self.assertEqual(result["locales"], ["es", "en", "ru", "it", "pt", "fr", "de", "ar", "hi", "zh-CN", "ja", "ko"])
        self.assertEqual(result["missing"], {locale: [] for locale in result["locales"]})

    def test_page_versions_its_static_assets_so_browsers_do_not_reuse_the_removed_form_logic(self):
        html = PAGE.read_text(encoding="utf-8")
        self.assertIn('href="payments.css?v=20260824-02"', html)
        self.assertIn('src="payments-i18n.js?v=20260824-02"', html)
        self.assertIn('src="payments.js?v=20260824-02"', html)
        self.assertIn('translate="no"', html)
        self.assertIn('name="google" content="notranslate"', html)
    def test_page_explains_that_only_the_calling_app_or_link_defines_the_purchase(self):
        html = PAGE.read_text(encoding="utf-8")
        i18n = I18N.read_text(encoding="utf-8")
        self.assertIn('payments-i18n.js', html)
        self.assertIn('data-i18n="loadingTitle"', html)
        self.assertIn('entryIdleDescription', i18n)
        self.assertIn('entryOpeningDescription', i18n)



if __name__ == "__main__":
    unittest.main()
