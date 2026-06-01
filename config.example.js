// =============================================
// BajaFish — local runtime config (TEMPLATE)
// =============================================
// 1. Copy this file to `config.js`  (config.js is gitignored — NEVER commit real keys).
// 2. Paste a NEWLY ROTATED OpenWeatherMap key below.
//    The previous key was exposed in git history and must be rotated:
//    https://home.openweathermap.org/api_keys
// 3. For production, prefer a serverless proxy that keeps the key server-side
//    (see .claude/overhaul/MVP_ROADMAP.md → P0.5) instead of shipping any key to the browser.
//
// Leaving owmKey as '' is safe: the app degrades gracefully (Open-Meteo marine/forecast
// and USNO moon data are keyless; only OWM-sourced visibility/sky/humidity are skipped).
window.BAJAFISH_CONFIG = {
  owmKey: '' // <-- your rotated OpenWeatherMap API key
};
