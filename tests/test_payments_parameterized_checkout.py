import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PAGE = ROOT / "payments" / "index.html"
SCRIPT = ROOT / "payments" / "payments.js"


class ParameterizedPaymentsPageTest(unittest.TestCase):
    def test_page_does_not_expose_any_editable_payment_fields(self):
        html = PAGE.read_text(encoding="utf-8")
        self.assertNotIn('<form', html)
        self.assertNotIn('<input', html)
        self.assertNotIn('<select', html)
        self.assertNotIn('asset-choice', html)
        self.assertIn('id="checkout-status"', html)

    def test_page_reads_preestablished_url_values_and_creates_the_checkout_automatically(self):
        script = SCRIPT.read_text(encoding="utf-8")
        self.assertIn('new URLSearchParams(window.location.search)', script)
        self.assertIn('/api/v1/checkouts', script)
        self.assertIn('window.history.replaceState', script)
        self.assertIn('window.location.replace(body.checkoutUrl)', script)
        for field in ('projectCode', 'externalOrderId', 'customerReference', 'title', 'description', 'network', 'assetCode', 'amount'):
            self.assertIn(field, script)
        self.assertNotIn('/api/orders', script)
        self.assertNotIn('productCode', script)
        self.assertIn('No hay ningún checkout pendiente', script)

    def test_page_explains_that_only_the_calling_app_or_link_defines_the_purchase(self):
        html = PAGE.read_text(encoding="utf-8")
        normalized = html.lower()
        self.assertIn('aplicación o enlace', normalized)
        self.assertIn('no se pueden editar', normalized)
        self.assertIn('checkout seguro', normalized)


if __name__ == "__main__":
    unittest.main()
