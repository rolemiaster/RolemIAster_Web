"""Contratos de presentación de la web estática, sin dependencias externas."""
import hashlib
import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EXCLUDED = {"emulaitor/community-chat.html", "emulaitor/tiktok/index.html", "rolemiaster/response_hannah.html"}
PAGES = sorted(p for p in ROOT.rglob("*.html") if not any(part.startswith(".") for part in p.relative_to(ROOT).parts) and p.relative_to(ROOT).as_posix() not in EXCLUDED)

class WebPresentationTest(unittest.TestCase):
    def test_every_presentation_page_loads_the_shared_stylesheet(self):
        for page in PAGES:
            with self.subTest(page=page.relative_to(ROOT)):
                text = page.read_text(encoding="utf-8")
                self.assertRegex(text, r'<link[^>]+href="(?:\.\./)?assets/site\.css\?v=[a-f0-9]{12}"')
                self.assertRegex(text, r'<body\b[^>]*data-site="[a-z]+"[^>]*data-page="[a-z-]+"')

    def test_shared_assets_have_content_based_cache_versions(self):
        for name in ("site.css", "site.js"):
            asset = ROOT / "assets" / name
            self.assertTrue(asset.is_file(), f"Falta {asset}")
            digest = hashlib.sha256(asset.read_text(encoding="utf-8").encode("utf-8")).hexdigest()[:12]
            for page in PAGES:
                if name == "site.js" and page.parent.name == "payments":
                    continue
                with self.subTest(asset=name, page=page.relative_to(ROOT)):
                    self.assertTrue(f"assets/{name}?v={digest}" in page.read_text(encoding="utf-8"), f"Versión desactualizada de {name} en {page.relative_to(ROOT)}; esperada {digest}")

    def test_portal_has_no_decorative_animation_engine(self):
        text = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertFalse("requestAnimationFrame" in text, "El portal conserva el bucle de estrellas")
        self.assertFalse("createParticles" in text, "El portal conserva partículas")
        self.assertNotRegex(text, r'<canvas\b')

    def test_portal_preserves_the_requested_star_background(self):
        css = (ROOT / "assets/site.css").read_text(encoding="utf-8")
        self.assertIn("background-image: url('stars.svg')", css)
        self.assertTrue((ROOT / "assets/stars.svg").is_file())

    def test_social_links_do_not_depend_on_remote_favicons(self):
        for page in PAGES:
            with self.subTest(page=page.relative_to(ROOT)):
                self.assertFalse("favicon.ico" in page.read_text(encoding="utf-8"), "Favicon remoto en " + str(page.relative_to(ROOT)))

    def test_reviews_are_not_duplicated_for_an_infinite_carousel(self):
        text = (ROOT / "emulaitor/index.html").read_text(encoding="utf-8")
        self.assertEqual(text.count("reviews.forEach(r => htmlContent += renderCard(r))"), 1)

    def test_rolemiaster_hero_video_is_content_not_autoplay_decoration(self):
        text = (ROOT / "rolemiaster/index.html").read_text(encoding="utf-8")
        video = re.search(r'<video\b[^>]*class="hero-video-bg"[^>]*>', text).group()
        self.assertIn("controls", video)
        self.assertNotIn("autoplay", video)
        self.assertNotRegex(video, r'\bloop\b')

    def test_embedded_chat_and_checkout_logic_do_not_load_presentation_script(self):
        for name in ("emulaitor/community-chat.html", "payments/index.html"):
            self.assertNotIn("assets/site.js", (ROOT/name).read_text(encoding="utf-8"))

if __name__ == "__main__":
    unittest.main()
