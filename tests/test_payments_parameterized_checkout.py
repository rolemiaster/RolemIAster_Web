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
    query = urlencode(params, doseq=True)
    harness = r'''
const fs = require("fs");
const vm = require("vm");
const i18n = fs.readFileSync(process.argv[1], "utf8");
const script = fs.readFileSync(process.argv[2], "utf8");
let redirectedTo = null;
let fetchCalls = 0;
const element = () => ({ textContent: "", classList: { add() {}, remove() {} } });
const elements = new Map([["page-title", element()], ["checkout-description", element()], ["checkout-state", element()], ["checkout-status", element()]]);
const sandbox = {
  URL, URLSearchParams, console,
  document: { getElementById(id) { return elements.get(id) ?? element(); }, querySelector() { return element(); }, documentElement: { lang: "es", dir: "ltr" }, querySelectorAll() { return []; } },
  navigator: { languages: ["es-ES"] },
  fetch() { fetchCalls += 1; throw new Error("No debe usarse fetch"); },
};
sandbox.window = { location: { search: process.argv[3], replace(value) { redirectedTo = value; } }, PaymentEntryI18n: null };
vm.runInNewContext(i18n, sandbox, { filename: process.argv[1] });
sandbox.window.PaymentEntryI18n = sandbox.window.PaymentEntryI18n || sandbox.PaymentEntryI18n;
vm.runInNewContext(script, sandbox, { filename: process.argv[2] });
process.stdout.write(JSON.stringify({ redirectedTo, fetchCalls, title: elements.get("page-title").textContent, description: elements.get("checkout-description").textContent, stateTitle: elements.get("checkout-state").textContent, status: elements.get("checkout-status").textContent }));
'''
    completed = subprocess.run(["node", "-e", harness, str(I18N), str(SCRIPT), f"?{query}" if query else ""], cwd=ROOT, check=True, capture_output=True, text=True)
    return json.loads(completed.stdout)


class PaymentsAgnosticCheckoutTest(unittest.TestCase):
    def base(self, **overrides):
        data = {
            "originId": "emulaitor",
            "originLabel": "EmulAItor",
            "paymentId": "license-42",
            "amountUsdt": "8",
            "network": "devnet",
            "assetCode": "USDT",
            "lang": "es",
        }
        data.update(overrides)
        return data

    def test_redirects_without_fetch_and_preserves_the_agnostic_contract(self):
        result = run_payments_script(self.base(customerReference="account-42", returnUrl="emulaitor://payment-result"))
        self.assertEqual(result["fetchCalls"], 0)
        parsed = urlparse(result["redirectedTo"])
        self.assertEqual(f"{parsed.scheme}://{parsed.netloc}{parsed.path}", "https://universo-rolemiaster-pagos-dev.rolemiaster.workers.dev/pay")
        values = parse_qs(parsed.query)
        self.assertEqual(values["originId"], ["emulaitor"])
        self.assertEqual(values["originLabel"], ["EmulAItor"])
        self.assertEqual(values["paymentId"], ["license-42"])
        self.assertEqual(values["amountUsdt"], ["8"])
        self.assertNotIn("projectCode", values)

    def test_routes_mainnet_to_the_production_gateway(self):
        result = run_payments_script(self.base(network="mainnet-beta", paymentId="mainnet-8"))
        self.assertTrue(result["redirectedTo"].startswith("https://pay.rolemiaster.com/pay?"))

    def test_rejects_missing_duplicate_and_unsupported_fields(self):
        missing = run_payments_script({"originId": "a"})
        duplicate = run_payments_script(self.base(originId=["a", "b"]))
        unsupported = run_payments_script({**self.base(), "projectCode": "legacy"})
        self.assertIsNone(missing["redirectedTo"])
        self.assertIsNone(duplicate["redirectedTo"])
        self.assertIsNone(unsupported["redirectedTo"])

    def test_idle_page_does_not_offer_an_editable_form(self):
        result = run_payments_script({})
        html = PAGE.read_text(encoding="utf-8")
        self.assertIsNone(result["redirectedTo"])
        self.assertNotIn("<form", html.lower())
        self.assertNotIn("<input", html.lower())

    def test_translations_are_complete_for_all_checkout_languages(self):
        harness = r'''
const fs = require("fs"), vm = require("vm");
const source = fs.readFileSync(process.argv[1], "utf8");
const sandbox = { window: {}, URLSearchParams };
vm.runInNewContext(source, sandbox);
const api = sandbox.window.PaymentEntryI18n;
process.stdout.write(JSON.stringify({ locales: api.supportedLocaleCodes, missing: Object.fromEntries(api.supportedLocaleCodes.map(locale => [locale, api.missingKeys(locale)])) }));
'''
        completed = subprocess.run(["node", "-e", harness, str(I18N)], cwd=ROOT, check=True, capture_output=True, text=True)
        result = json.loads(completed.stdout)
        self.assertEqual(result["locales"], ["es", "en", "ru", "it", "pt", "fr", "de", "ar", "hi", "zh-CN", "ja", "ko"])
        self.assertEqual(result["missing"], {locale: [] for locale in result["locales"]})

    def test_page_versions_its_assets_and_blocks_automatic_translation(self):
        html = PAGE.read_text(encoding="utf-8")
        self.assertIn('payments.css?v=20260824-03', html)
        self.assertIn('payments-i18n.js?v=20260824-03', html)
        self.assertIn('payments.js?v=20260824-03', html)
        self.assertIn('translate="no"', html)
        self.assertIn('name="google" content="notranslate"', html)


if __name__ == "__main__":
    unittest.main()
