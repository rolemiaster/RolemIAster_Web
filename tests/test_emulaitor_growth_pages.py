import json
import re
import unittest
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EMULAITOR = ROOT / "emulaitor"

GUIDE_PAIRS = {
    "hub": {
        "es": ("hub-juego-online.html", "https://rolemiaster.com/emulaitor/hub-juego-online.html", ["EmulAItor Hub", "código", "controles", "voz opcional"]),
        "en": ("play-retro-online.html", "https://rolemiaster.com/emulaitor/play-retro-online.html", ["EmulAItor Hub", "room code", "controls", "optional voice"]),
    },
    "tv": {
        "es": ("android-tv-moviles-mando.html", "https://rolemiaster.com/emulaitor/android-tv-moviles-mando.html", ["Android TV", "cuatro", "QR", "Wi-Fi"]),
        "en": ("android-tv-phone-controllers.html", "https://rolemiaster.com/emulaitor/android-tv-phone-controllers.html", ["Android TV", "four", "QR", "Wi-Fi"]),
    },
    "homebrew": {
        "es": ("homebrew-biblioteca-retro.html", "https://rolemiaster.com/emulaitor/homebrew-biblioteca-retro.html", ["homebrew", "carátulas", "metadatos", "NAS/SMB"]),
        "en": ("homebrew-retro-library.html", "https://rolemiaster.com/emulaitor/homebrew-retro-library.html", ["homebrew", "cover art", "metadata", "NAS/SMB"]),
    },
    "cloud": {
        "es": ("partidas-guardadas-google-drive.html", "https://rolemiaster.com/emulaitor/partidas-guardadas-google-drive.html", ["Google Drive", "Android TV", "estados seleccionados", "vistas previas"]),
        "en": ("cloud-saves-google-drive.html", "https://rolemiaster.com/emulaitor/cloud-saves-google-drive.html", ["Google Drive", "Android TV", "selected states", "previews"]),
    },
    "nas": {
        "es": ("biblioteca-retro-nas-smb.html", "https://rolemiaster.com/emulaitor/biblioteca-retro-nas-smb.html", ["NAS/SMB", "red local", "carátulas", "metadatos"]),
        "en": ("nas-smb-retro-library.html", "https://rolemiaster.com/emulaitor/nas-smb-retro-library.html", ["NAS/SMB", "local network", "cover art", "metadata"]),
    },
}


class StrictHTMLParser(HTMLParser):
    def error(self, message):  # pragma: no cover - API compatibility
        raise AssertionError(message)


class GrowthPagesTest(unittest.TestCase):
    def test_guides_have_search_conversion_and_language_contract(self):
        for pair_name, pair in GUIDE_PAIRS.items():
            es_name, es_url, _ = pair["es"]
            en_name, en_url, _ = pair["en"]
            for lang in ("es", "en"):
                name, canonical, required = pair[lang]
                with self.subTest(pair=pair_name, lang=lang):
                    path = EMULAITOR / name
                    self.assertTrue(path.is_file(), f"missing {name}")
                    html = path.read_text(encoding="utf-8")
                    StrictHTMLParser().feed(html)
                    self.assertIn(f'<html lang="{lang}">', html)
                    self.assertIn(f'<link rel="canonical" href="{canonical}">', html)
                    self.assertRegex(html, r'<meta name="description" content="[^"]{80,160}">')
                    self.assertIn(f'<link rel="alternate" hreflang="es" href="{es_url}">', html)
                    self.assertIn(f'<link rel="alternate" hreflang="en" href="{en_url}">', html)
                    self.assertIn('hreflang="x-default"', html)
                    self.assertIn('application/ld+json', html)
                    self.assertIn('play.google.com/store/apps/details?id=com.rolemiaster.emulaitor', html)
                    for text in required:
                        self.assertIn(text, html)

    def test_guide_ctas_pass_page_attribution_through_play_referrer(self):
        import html as html_module
        from urllib.parse import parse_qs, urlparse

        for pair_name, pair in GUIDE_PAIRS.items():
            for lang in ("es", "en"):
                name = pair[lang][0]
                with self.subTest(pair=pair_name, lang=lang):
                    source = (EMULAITOR / name).read_text(encoding="utf-8")
                    match = re.search(r'<a class="cta" href="([^"]*play\.google\.com[^"]*)"', source)
                    self.assertIsNotNone(match, f"missing Play CTA in {name}")
                    outer = parse_qs(urlparse(html_module.unescape(match.group(1))).query)
                    self.assertEqual(outer['id'], ['com.rolemiaster.emulaitor'])
                    self.assertIn('referrer', outer)
                    referrer = parse_qs(outer['referrer'][0])
                    self.assertEqual(referrer['utm_source'], ['rolemiaster.com'])
                    self.assertEqual(referrer['utm_medium'], ['organic_search'])
                    self.assertTrue(referrer['utm_campaign'][0])
                    self.assertEqual(referrer['utm_content'], [f'guide_{lang}'])

    def test_main_landing_routes_guides_by_language(self):
        html = (EMULAITOR / "index.html").read_text(encoding="utf-8")
        for pair in GUIDE_PAIRS.values():
            es_name = pair["es"][0]
            en_name = pair["en"][0]
            self.assertIn(f'data-href-es="{es_name}"', html)
            self.assertIn(f'data-href-en="{en_name}"', html)
        self.assertIn("el.setAttribute('href', localizedHref)", html)

    def test_sitemap_and_robots_publish_all_guides(self):
        sitemap = (EMULAITOR / "sitemap.xml").read_text(encoding="utf-8")
        for pair in GUIDE_PAIRS.values():
            for _, canonical, _ in pair.values():
                self.assertIn(canonical, sitemap)
        robots = (ROOT / "robots.txt").read_text(encoding="utf-8")
        self.assertIn("Sitemap: https://rolemiaster.com/emulaitor/sitemap.xml", robots)

    def test_tiktok_short_route_is_measurable_and_not_indexed(self):
        route = EMULAITOR / "tiktok" / "index.html"
        self.assertTrue(route.is_file())
        html = route.read_text(encoding="utf-8")
        StrictHTMLParser().feed(html)
        self.assertIn('<html lang="en">', html)
        self.assertIn('name="robots" content="noindex, nofollow"', html)
        self.assertIn('utm_source=tiktok', html)
        self.assertIn('utm_medium=organic_social', html)
        self.assertIn('utm_campaign=emulaitor_tiktok', html)
        self.assertIn('utm_content=profile_link', html)
        sitemap = (EMULAITOR / "sitemap.xml").read_text(encoding="utf-8")
        self.assertNotIn('/emulaitor/tiktok/', sitemap)

    def test_indexnow_key_is_publishable_and_valid(self):
        key_file = EMULAITOR / "indexnow-key.txt"
        self.assertTrue(key_file.is_file(), "missing IndexNow ownership key")
        key = key_file.read_text(encoding="utf-8").strip()
        self.assertRegex(key, r"^[A-Za-z0-9-]{8,128}$")
        self.assertEqual(key_file.read_text(encoding="utf-8"), key + "\n")

    def test_all_json_ld_blocks_are_valid(self):
        block = re.compile(r'<script type="application/ld\+json">(.*?)</script>', re.S)
        for pair in GUIDE_PAIRS.values():
            for name, _, _ in pair.values():
                with self.subTest(name=name):
                    html = (EMULAITOR / name).read_text(encoding="utf-8")
                    payloads = block.findall(html)
                    self.assertGreaterEqual(len(payloads), 2)
                    for payload in payloads:
                        json.loads(payload)


if __name__ == "__main__":
    unittest.main()
