import json
import re
import subprocess
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / 'emulaitor' / 'index.html'


class EmulaitorGlobalLandingLanguageTest(unittest.TestCase):
    def test_x_default_metadata_is_english(self):
        html = INDEX.read_text(encoding='utf-8')
        self.assertIn('<html lang="en">', html)
        self.assertIn('<title>EmulAItor — Online retro rooms, Android TV and 20+ systems</title>', html)
        self.assertIn('<meta property="og:locale" content="en_US">', html)
        self.assertIn('Create rooms with EmulAItor Hub', html)

    def test_language_resolution_prioritizes_explicit_then_campaign_then_preference(self):
        html = INDEX.read_text(encoding='utf-8')
        match = re.search(r'function resolveInitialLanguage\(search, storedLanguage\) \{.*?\n        \}', html, re.S)
        self.assertIsNotNone(match, 'missing resolveInitialLanguage')
        cases = [
            ['?lang=es&utm_source=x', 'en'],
            ['?lang=en', 'es'],
            ['?utm_source=x', 'es'],
            ['?utm_campaign=hub_global', 'es'],
            ['', 'es'],
            ['', None],
        ]
        script = match.group(0) + '\nconsole.log(JSON.stringify(' + json.dumps(cases) + '.map(([q,s]) => resolveInitialLanguage(q,s))));'
        result = subprocess.run(['node', '-e', script], text=True, capture_output=True, check=True)
        self.assertEqual(['es', 'en', 'en', 'en', 'es', 'en'], json.loads(result.stdout))

    def test_current_language_uses_resolver(self):
        html = INDEX.read_text(encoding='utf-8')
        self.assertIn("resolveInitialLanguage(window.location.search, localStorage.getItem('rolemiaster_lang'))", html)

    def test_play_store_links_preserve_social_attribution_in_referrer(self):
        from urllib.parse import parse_qs, urlparse

        html = INDEX.read_text(encoding='utf-8')
        match = re.search(r'function buildPlayStoreUrl\(search\) \{.*?\n        \}', html, re.S)
        self.assertIsNotNone(match, 'missing buildPlayStoreUrl')
        cases = [
            '?utm_source=tiktok&utm_medium=organic_social&utm_campaign=hub_global&utm_content=profile_link',
            '?utm_source=x&utm_campaign=hub_global',
            '',
        ]
        script = match.group(0) + '\nconsole.log(JSON.stringify(' + json.dumps(cases) + '.map(buildPlayStoreUrl)));'
        result = subprocess.run(['node', '-e', script], text=True, capture_output=True, check=True)
        urls = json.loads(result.stdout)

        first = parse_qs(urlparse(urls[0]).query)
        self.assertEqual(first['id'], ['com.rolemiaster.emulaitor'])
        first_referrer = parse_qs(first['referrer'][0])
        self.assertEqual(first_referrer['utm_source'], ['tiktok'])
        self.assertEqual(first_referrer['utm_medium'], ['organic_social'])
        self.assertEqual(first_referrer['utm_campaign'], ['hub_global'])
        self.assertEqual(first_referrer['utm_content'], ['profile_link'])

        second_referrer = parse_qs(parse_qs(urlparse(urls[1]).query)['referrer'][0])
        self.assertEqual(second_referrer['utm_source'], ['x'])
        self.assertEqual(second_referrer['utm_medium'], ['organic_social'])
        self.assertEqual(second_referrer['utm_campaign'], ['hub_global'])

        fallback_referrer = parse_qs(parse_qs(urlparse(urls[2]).query)['referrer'][0])
        self.assertEqual(fallback_referrer['utm_source'], ['rolemiaster.com'])
        self.assertEqual(fallback_referrer['utm_medium'], ['organic'])
        self.assertEqual(fallback_referrer['utm_campaign'], ['emulaitor_landing'])
        self.assertEqual(2, len(re.findall(r'<a[^>]*data-play-store-link', html)))
        self.assertIn("document.querySelectorAll('[data-play-store-link]')", html)

    def test_press_kit_is_english_first_and_commercially_current(self):
        html = (ROOT / 'emulaitor' / 'press-kit.html').read_text(encoding='utf-8')
        self.assertIn('<html lang="en">', html)
        self.assertIn('Official EmulAItor press kit', html)
        self.assertIn('Online rooms with EmulAItor Hub', html)
        self.assertIn('Up to four phones as Android TV controllers', html)
        self.assertIn('Rewarded play time when available', html)
        self.assertIn('Monthly subscription', html)
        self.assertIn('Lifetime unlock', html)
        self.assertIn('https://youtube.com/shorts/BTLio1X5MbA', html)
        self.assertIn('<h2>Resumen en español</h2>', html)

    def test_press_kit_play_cta_has_earned_media_referrer(self):
        import html as html_module
        from urllib.parse import parse_qs, urlparse

        html = (ROOT / 'emulaitor' / 'press-kit.html').read_text(encoding='utf-8')
        match = re.search(r'<a class="cta" href="([^"]*play\.google\.com[^"]*)"', html)
        self.assertIsNotNone(match)
        outer = parse_qs(urlparse(html_module.unescape(match.group(1))).query)
        referrer = parse_qs(outer['referrer'][0])
        self.assertEqual(referrer['utm_source'], ['rolemiaster.com'])
        self.assertEqual(referrer['utm_medium'], ['earned_media'])
        self.assertEqual(referrer['utm_campaign'], ['emulaitor_press_kit'])

    def test_global_hero_uses_textless_asset(self):
        from PIL import Image
        asset_name = 'hero-global-textless-1920x1080.webp'
        asset = ROOT / 'emulaitor' / 'assets' / 'imagenes' / asset_name
        self.assertTrue(asset.is_file())
        with Image.open(asset) as image:
            self.assertEqual((1920, 1080), image.size)
        index = INDEX.read_text(encoding='utf-8')
        press = (ROOT / 'emulaitor' / 'press-kit.html').read_text(encoding='utf-8')
        self.assertIn(asset_name, index)
        self.assertIn(asset_name, press)
        self.assertNotIn('banner1920x1080.jpg', index)
        self.assertNotIn('banner1920x1080.jpg', press)

    def test_static_x_default_content_and_structured_data_are_english(self):
        html = INDEX.read_text(encoding='utf-8')
        self.assertIn('id="btn-es" class="btn-lang"', html)
        self.assertIn('id="btn-en" class="btn-lang active"', html)
        self.assertIn('data-i18n="hero_tagline">Thousands of retro adventures. Every screen. Your way to play.</', html)
        self.assertIn('"name": "Can I play online with EmulAItor?"', html)
        self.assertIn('"@type": "VideoObject"', html)
        self.assertIn('"embedUrl": "https://www.youtube.com/embed/BTLio1X5MbA"', html)
        self.assertNotIn('"name": "¿Se puede jugar online con EmulAItor?"', html)


if __name__ == '__main__': unittest.main()
