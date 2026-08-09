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

    def test_english_product_overview_is_a_primary_video_watch_page(self):
        import html as html_module
        from urllib.parse import parse_qs, urlparse

        page = EMULAITOR / "product-overview.html"
        self.assertTrue(page.is_file(), "missing English product-overview watch page")
        html = page.read_text(encoding="utf-8")
        StrictHTMLParser().feed(html)
        self.assertIn('<html lang="en">', html)
        self.assertIn('<link rel="canonical" href="https://rolemiaster.com/emulaitor/product-overview.html">', html)
        self.assertIn('<video controls playsinline', html)
        self.assertIn('src="assets/videos/emulaitor-product-overview-en-1920x1080.mp4"', html)
        self.assertIn('Online retro rooms', html)
        self.assertIn('Up to four phones', html)
        self.assertIn('Google Drive', html)
        self.assertIn('NAS/SMB', html)
        self.assertIn('20+ classic systems', html)

        blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S)
        payloads = [json.loads(block) for block in blocks]
        video = next((item for item in payloads if item.get('@type') == 'VideoObject'), None)
        self.assertIsNotNone(video, 'missing VideoObject')
        self.assertEqual(video['duration'], 'PT27S')
        self.assertEqual(video['contentUrl'], 'https://rolemiaster.com/emulaitor/assets/videos/emulaitor-product-overview-en-1920x1080.mp4')
        thumbnail_name = 'emulaitor-product-overview-thumbnail-en.png'
        thumbnail = EMULAITOR / 'assets' / 'imagenes' / thumbnail_name
        self.assertTrue(thumbnail.is_file(), thumbnail)
        self.assertGreater(thumbnail.stat().st_size, 1_000_000)
        from PIL import Image
        with Image.open(thumbnail) as image:
            self.assertLess(abs((image.width / image.height) - (16 / 9)), 0.002)
        thumbnail_url = f'https://rolemiaster.com/emulaitor/assets/imagenes/{thumbnail_name}'
        self.assertEqual(video['thumbnailUrl'], thumbnail_url)
        self.assertIn(f'poster="assets/imagenes/{thumbnail_name}"', html)

        match = re.search(r'<a class="cta primary" href="([^"]*play\.google\.com[^"]*)"', html)
        self.assertIsNotNone(match, 'missing attributed Google Play CTA')
        outer = parse_qs(urlparse(html_module.unescape(match.group(1))).query)
        referrer = parse_qs(outer['referrer'][0])
        self.assertEqual(referrer['utm_source'], ['rolemiaster.com'])
        self.assertEqual(referrer['utm_medium'], ['video'])
        self.assertEqual(referrer['utm_campaign'], ['emulaitor_product_overview'])
        self.assertEqual(referrer['utm_content'], ['watch_page_cta'])

    def test_video_watch_page_is_linked_and_published_in_video_sitemap(self):
        watch_url = 'https://rolemiaster.com/emulaitor/product-overview.html'
        landing = (EMULAITOR / 'index.html').read_text(encoding='utf-8')
        press = (EMULAITOR / 'press-kit.html').read_text(encoding='utf-8')
        sitemap = (EMULAITOR / 'sitemap.xml').read_text(encoding='utf-8')
        self.assertIn('href="product-overview.html"', landing)
        self.assertIn('href="product-overview.html"', press)
        self.assertIn('xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"', sitemap)
        self.assertIn(f'<loc>{watch_url}</loc>', sitemap)
        self.assertIn('<video:content_loc>https://rolemiaster.com/emulaitor/assets/videos/emulaitor-product-overview-en-1920x1080.mp4</video:content_loc>', sitemap)
        self.assertIn('<video:thumbnail_loc>https://rolemiaster.com/emulaitor/assets/imagenes/emulaitor-product-overview-thumbnail-en.png</video:thumbnail_loc>', sitemap)
        self.assertIn('href="assets/imagenes/emulaitor-product-overview-thumbnail-en.png"', press)

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


class LocalizedPressKitsTest(unittest.TestCase):
    KITS = {
        "en": ("press-kit.html", "https://rolemiaster.com/emulaitor/press-kit.html", ["Official Press Kit", "Rewarded play time when available"]),
        "es": ("press-kit-es.html", "https://rolemiaster.com/emulaitor/press-kit-es.html", ["Kit de prensa oficial", "anuncios bonificados cuando estén disponibles"]),
        "pt-BR": ("press-kit-pt-BR.html", "https://rolemiaster.com/emulaitor/press-kit-pt-BR.html", ["Kit de imprensa oficial", "anúncios recompensados, quando disponíveis"]),
        "de": ("press-kit-de.html", "https://rolemiaster.com/emulaitor/press-kit-de.html", ["Offizielles Presse-Kit", "Spielzeit über Rewarded Ads, sofern verfügbar"]),
        "ja": ("press-kit-ja.html", "https://rolemiaster.com/emulaitor/press-kit-ja.html", ["公式プレスキット", "リワード広告でプレイ時間を獲得できる無料モード"]),
    }

    def test_press_kits_are_separate_localized_pages_with_self_canonical_and_hreflang(self):
        urls = {lang: canonical for lang, (_, canonical, _) in self.KITS.items()}
        for lang, (filename, canonical, required) in self.KITS.items():
            with self.subTest(lang=lang):
                page = EMULAITOR / filename
                self.assertTrue(page.is_file(), f"missing localized press kit {filename}")
                html = page.read_text(encoding="utf-8")
                StrictHTMLParser().feed(html)
                self.assertIn(f'<html lang="{lang}">', html)
                self.assertIn(f'<link rel="canonical" href="{canonical}">', html)
                for alternate_lang, alternate_url in urls.items():
                    self.assertIn(
                        f'<link rel="alternate" hreflang="{alternate_lang}" href="{alternate_url}">',
                        html,
                    )
                self.assertIn(
                    f'<link rel="alternate" hreflang="x-default" href="{urls["en"]}">',
                    html,
                )
                for phrase in required + ["EmulAItor Hub", "Android TV", "Google Drive", "NAS/SMB", "20+"]:
                    self.assertIn(phrase, html)
                self.assertIn('assets/videos/emulaitor-product-overview-en-1920x1080.mp4', html)
                self.assertIn('play.google.com/store/apps/details?id=com.rolemiaster.emulaitor', html)

    def test_press_kit_master_and_localizations_do_not_mix_visible_language_blocks(self):
        english = (EMULAITOR / "press-kit.html").read_text(encoding="utf-8")
        self.assertNotIn("<h2>Resumen en español</h2>", english)
        localized_markers = {
            "press-kit-es.html": ["Product in one paragraph", "公式プレスキット"],
            "press-kit-pt-BR.html": ["Resumen en español", "Offizielles Presse-Kit", "公式プレスキット"],
            "press-kit-de.html": ["Resumen en español", "Kit de imprensa oficial", "公式プレスキット"],
            "press-kit-ja.html": ["Resumen en español", "Kit de imprensa oficial", "Offizielles Presse-Kit"],
        }
        for filename, forbidden in localized_markers.items():
            html = (EMULAITOR / filename).read_text(encoding="utf-8")
            for marker in forbidden:
                self.assertNotIn(marker, html, f"{filename}: mixed-language marker {marker}")

    def test_localized_press_kit_play_ctas_have_locale_specific_earned_media_attribution(self):
        import html as html_module
        from urllib.parse import parse_qs, urlparse

        for lang, (filename, _, _) in self.KITS.items():
            with self.subTest(lang=lang):
                source = (EMULAITOR / filename).read_text(encoding="utf-8")
                match = re.search(r'<a class="cta primary" href="([^"]*play\.google\.com[^"]*)"', source)
                self.assertIsNotNone(match, f"missing primary Play CTA in {filename}")
                outer = parse_qs(urlparse(html_module.unescape(match.group(1))).query)
                self.assertEqual(outer["id"], ["com.rolemiaster.emulaitor"])
                referrer = parse_qs(outer["referrer"][0])
                self.assertEqual(referrer["utm_source"], ["rolemiaster.com"])
                self.assertEqual(referrer["utm_medium"], ["earned_media"])
                self.assertEqual(referrer["utm_campaign"], [f"emulaitor_press_kit_{lang}"])

    def test_localized_press_kits_are_in_sitemap(self):
        sitemap = (EMULAITOR / "sitemap.xml").read_text(encoding="utf-8")
        for _, canonical, _ in self.KITS.values():
            self.assertIn(f"<loc>{canonical}</loc>", sitemap)


if __name__ == "__main__":
    unittest.main()
