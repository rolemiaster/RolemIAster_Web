import json
import re
import subprocess
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / 'emulaitor' / 'index.html'
ROOT_INDEX = ROOT / 'index.html'


class EmulaitorGlobalLandingLanguageTest(unittest.TestCase):
    def test_rolemiaster_home_crosspromo_is_current_truthful_and_measurable(self):
        html = ROOT_INDEX.read_text(encoding='utf-8')
        self.assertNotIn('Sin anuncios, sin rastreo', html)
        self.assertNotIn('No ads, no tracking', html)
        self.assertIn('EmulAItor Hub', html)
        self.assertIn('hasta cuatro móviles', html)
        self.assertIn('up to four phones', html)
        self.assertIn('Google Drive', html)
        self.assertIn('20+ systems', html)
        self.assertIn(
            'href="emulaitor/?utm_source=rolemiaster_home&amp;utm_medium=owned&amp;utm_campaign=emulaitor_crosspromo"',
            html,
        )

    def test_x_default_metadata_is_english(self):
        html = INDEX.read_text(encoding='utf-8')
        self.assertIn('<html lang="en">', html)
        self.assertIn('<title>EmulAItor — Online retro rooms, Android TV and 20+ systems</title>', html)
        self.assertIn('<meta property="og:locale" content="en_US">', html)
        self.assertIn('Create rooms with EmulAItor Hub', html)

    def test_visible_video_matches_global_english_video_object(self):
        html = INDEX.read_text(encoding='utf-8')
        blocks = re.findall(
            r'<script type="application/ld\+json">(.*?)</script>',
            html,
            re.S,
        )
        payloads = [json.loads(block) for block in blocks]
        video = next((item for item in payloads if item.get('@type') == 'VideoObject'), None)
        self.assertIsNotNone(video, 'missing VideoObject')
        source_match = re.search(
            r'<video[^>]+poster="assets/imagenes/emulaitor-product-overview-thumbnail-en\.png"[^>]*>\s*<source src="([^"]+)" type="video/mp4">',
            html,
            re.S,
        )
        self.assertIsNotNone(source_match, 'missing visible 16:9 self-hosted product overview')
        relative = source_match.group(1)
        self.assertEqual('assets/videos/emulaitor-product-overview-en-1920x1080.mp4', relative)
        self.assertEqual(
            'https://rolemiaster.com/emulaitor/' + relative,
            video['contentUrl'],
        )
        self.assertEqual('PT27S', video['duration'])
        self.assertEqual(
            'https://rolemiaster.com/emulaitor/assets/imagenes/emulaitor-product-overview-thumbnail-en.png',
            video['thumbnailUrl'],
        )
        self.assertIn('aspect-ratio: 16 / 9;', html)
        self.assertRegex(
            html,
            r'\.video-container video,\s*\.video-container iframe \{[^}]*height: auto;',
        )
        self.assertNotIn('youtube-nocookie.com/embed/BTLio1X5MbA', html)
        self.assertNotIn('UTIzr3AmCHE', html)

    def test_language_resolution_prioritizes_explicit_then_campaign_then_preference(self):
        html = INDEX.read_text(encoding='utf-8')
        match = re.search(r'function resolveInitialLanguage\(search, storedLanguage\) \{.*?\n        \}', html, re.S)
        self.assertIsNotNone(match, 'missing resolveInitialLanguage')
        cases = [
            ['?lang=es&utm_source=x', 'en'],
            ['?lang=en', 'es'],
            ['?lang=pt-BR', 'en'],
            ['?lang=de', 'en'],
            ['?lang=ja', 'en'],
            ['?utm_source=x', 'pt-BR'],
            ['?utm_campaign=hub_global', 'de'],
            ['', 'pt-BR'],
            ['', 'de'],
            ['', 'ja'],
            ['', 'es'],
            ['', None],
        ]
        script = match.group(0) + '\nconsole.log(JSON.stringify(' + json.dumps(cases) + '.map(([q,s]) => resolveInitialLanguage(q,s))));'
        result = subprocess.run(['node', '-e', script], text=True, capture_output=True, check=True)
        self.assertEqual(
            ['es', 'en', 'pt-BR', 'de', 'ja', 'en', 'en', 'pt-BR', 'de', 'ja', 'es', 'en'],
            json.loads(result.stdout),
        )

    def test_current_language_uses_resolver(self):
        html = INDEX.read_text(encoding='utf-8')
        self.assertIn("resolveInitialLanguage(window.location.search, localStorage.getItem('rolemiaster_lang'))", html)

    def test_top_revenue_markets_have_complete_separate_localizations(self):
        html = INDEX.read_text(encoding='utf-8')
        for lang in ('pt-BR', 'de', 'ja'):
            self.assertIn(f'id="btn-{lang}"', html)

        match = re.search(r'const translations = (\{.*?\n        \});', html, re.S)
        self.assertIsNotNone(match, 'missing translations object')
        script = (
            'const translations = ' + match.group(1) + ';\n'
            'console.log(JSON.stringify(Object.fromEntries('
            'Object.entries(translations).map(([lang, values]) => [lang, Object.keys(values).sort()]))));'
        )
        result = subprocess.run(['node', '-e', script], text=True, capture_output=True, check=True)
        keys = json.loads(result.stdout)
        self.assertEqual({'es', 'en', 'pt-BR', 'de', 'ja'}, set(keys))
        for lang in ('es', 'pt-BR', 'de', 'ja'):
            self.assertEqual(keys['en'], keys[lang], f'incomplete translation: {lang}')

        self.assertIn('Jogue aventuras retrô', html)
        self.assertIn('Spiele Retro-Abenteuer', html)
        self.assertIn('レトロの冒険', html)
        self.assertIn('html[lang="ja"] .hero-tagline', html)
        self.assertEqual(1, html.count('<meta property="og:locale:alternate" content="es_ES">'))

    def test_localized_canonical_is_self_referencing_and_strips_campaign_parameters(self):
        html = INDEX.read_text(encoding='utf-8')
        match = re.search(r'function buildLocalizedCanonicalUrl\(lang\) \{.*?\n        \}', html, re.S)
        self.assertIsNotNone(match, 'missing localized canonical builder')
        script = match.group(0) + "\nconsole.log(JSON.stringify(['en','es','pt-BR','de','ja'].map(buildLocalizedCanonicalUrl)));"
        result = subprocess.run(['node', '-e', script], text=True, capture_output=True, check=True)
        self.assertEqual(
            [
                'https://rolemiaster.com/emulaitor/?lang=en',
                'https://rolemiaster.com/emulaitor/?lang=es',
                'https://rolemiaster.com/emulaitor/?lang=pt-BR',
                'https://rolemiaster.com/emulaitor/?lang=de',
                'https://rolemiaster.com/emulaitor/?lang=ja',
            ],
            json.loads(result.stdout),
        )
        self.assertIn("document.querySelector('link[rel=\"canonical\"]')", html)
        self.assertIn("document.querySelector('meta[property=\"og:url\"]')", html)

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
        self.assertNotIn('<h2>Resumen en español</h2>', html)
        self.assertIn('press-kit-es.html', html)
        self.assertIn('press-kit-pt-BR.html', html)
        self.assertIn('press-kit-de.html', html)
        self.assertIn('press-kit-ja.html', html)

    def test_press_kit_publishes_downloadable_english_product_overview(self):
        html = (ROOT / 'emulaitor' / 'press-kit.html').read_text(encoding='utf-8')
        relative = 'assets/videos/emulaitor-product-overview-en-1920x1080.mp4'
        asset = ROOT / 'emulaitor' / relative
        self.assertTrue(asset.is_file(), asset)
        self.assertGreater(asset.stat().st_size, 1_000_000)
        self.assertIn(f'href="{relative}"', html)
        self.assertIn('Download the 16:9 English product overview', html)

    def test_press_kit_play_cta_has_earned_media_referrer(self):
        import html as html_module
        from urllib.parse import parse_qs, urlparse

        html = (ROOT / 'emulaitor' / 'press-kit.html').read_text(encoding='utf-8')
        match = re.search(r'<a class="cta primary" href="([^"]*play\.google\.com[^"]*)"', html)
        self.assertIsNotNone(match)
        outer = parse_qs(urlparse(html_module.unescape(match.group(1))).query)
        referrer = parse_qs(outer['referrer'][0])
        self.assertEqual(referrer['utm_source'], ['rolemiaster.com'])
        self.assertEqual(referrer['utm_medium'], ['earned_media'])
        self.assertEqual(referrer['utm_campaign'], ['emulaitor_press_kit_en'])

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
        self.assertIn('"embedUrl": "https://rolemiaster.com/emulaitor/product-overview.html"', html)
        self.assertNotIn('"name": "¿Se puede jugar online con EmulAItor?"', html)


if __name__ == '__main__': unittest.main()
