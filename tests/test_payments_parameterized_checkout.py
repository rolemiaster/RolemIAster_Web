import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PAGE = ROOT / "payments" / "index.html"
SCRIPT = ROOT / "payments" / "payments.js"


class ParameterizedPaymentsPageTest(unittest.TestCase):
    def test_page_collects_purchase_data_instead_of_selecting_a_fixed_catalog_product(self):
        html = PAGE.read_text(encoding="utf-8")
        self.assertIn('id="checkout-form"', html)
        self.assertIn('id="checkout-title"', html)
        self.assertIn('id="checkout-amount"', html)
        self.assertIn('name="assetCode"', html)
        self.assertNotIn('data-product=', html)
        self.assertNotIn('La pasarela fijará el importe', html)

    def test_browser_uses_the_parameterized_gateway_contract_and_not_the_legacy_catalog(self):
        script = SCRIPT.read_text(encoding="utf-8")
        self.assertIn('/api/v1/checkouts', script)
        self.assertIn('projectCode: "universo-dev"', script)
        for field in ('externalOrderId:', 'customerReference:', 'title:', 'description:', 'network:', 'assetCode:', 'amount:'):
            self.assertIn(field, script)
        self.assertNotIn('/api/orders', script)
        self.assertNotIn('productCode', script)

    def test_page_explains_that_the_gateway_keeps_the_secure_payment_route_internally(self):
        html = PAGE.read_text(encoding="utf-8")
        self.assertIn('ruta segura', html)
        self.assertIn('concepto', html)
        self.assertIn('importe', html)


if __name__ == "__main__":
    unittest.main()
