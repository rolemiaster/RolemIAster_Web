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


if __name__ == '__main__': unittest.main()
