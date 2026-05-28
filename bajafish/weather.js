// =============================================
// BAJAFISH — Live Weather & Ocean Conditions
// Sources:
//   • Open-Meteo Marine API       (free, no key)
//   • Open-Meteo Forecast API     (free, no key)
//   • USNO Astronomical API       (free, no key) — precise moon phases
//   • OpenWeatherMap Current API  (free, API key required)
//     → visibility, sky description, humidity, sunrise/sunset
// Cache: localStorage, 1-hour TTL for conditions, 24-hour for moon
// =============================================

// ── OpenWeatherMap API Key ───────────────────
// Get your free key at: https://openweathermap.org/api
// Paste it below (new keys activate within ~2 hours of signup)
const OWM_API_KEY = '29c6bd1f342f774aae0fff47863d4d88';

const WEATHER_CACHE_KEY = 'baja-conditions-v3';  // bumped version to bust old cache
const WEATHER_CACHE_TTL = 60 * 60 * 1000;       // 1 hour

const MOON_CACHE_KEY    = 'baja-moon-phases';
const MOON_CACHE_TTL    = 24 * 60 * 60 * 1000;  // 24 hours

// ─── Helpers ────────────────────────────────

function degToCompass(deg) {
  if (deg == null || isNaN(deg)) return '';
  const dirs = ['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW'];
  return dirs[Math.round(deg / 22.5) % 16];
}

function cToF(c)    { return c  != null ? Math.round(c * 9 / 5 + 32) : null; }
function mToFt(m)   { return m  != null ? (m  * 3.28084).toFixed(1)  : null; }
function msToKts(v) { return v  != null ? (v  * 1.94384).toFixed(1)  : null; }

// ─── USNO Moon Data ─────────────────────────

const PHASE_ICONS = {
  'New Moon':      '🌑',
  'First Quarter': '🌓',
  'Full Moon':     '🌕',
  'Last Quarter':  '🌗',
};

const PHASE_ORDER = ['New Moon', 'First Quarter', 'Full Moon', 'Last Quarter'];

// Fetch full year of moon phases from USNO (one call, cached 24h)
async function fetchUSNOMoonPhases() {
  // Check cache
  try {
    const cached = JSON.parse(localStorage.getItem(MOON_CACHE_KEY) || 'null');
    if (cached && (Date.now() - cached.fetchedAt) < MOON_CACHE_TTL) {
      return cached.phases;
    }
  } catch (_) {}

  const year = new Date().getFullYear();
  const url  = `https://aa.usno.navy.mil/api/moon/phases/year?year=${year}`;

  console.log('[Moon] Fetching USNO moon phases for', year);
  const res  = await fetch(url);
  if (!res.ok) throw new Error('USNO API error');

  const data   = await res.json();
  const phases = data.phasedata.map(p => ({
    date:  new Date(p.year, p.month - 1, p.day, ...p.time.split(':').map(Number)),
    phase: p.phase,
    icon:  PHASE_ICONS[p.phase] || '🌙',
  }));

  // Cache it
  try {
    localStorage.setItem(MOON_CACHE_KEY, JSON.stringify({ fetchedAt: Date.now(), phases }));
  } catch (_) {}

  return phases;
}

// Calculate moon illumination % from phase position (0–100)
function calcIllumination(daysSinceNew) {
  // Approximation: illumination follows a cosine curve over 29.53 days
  const lunarCycle = 29.53058867;
  const angle = (daysSinceNew / lunarCycle) * 360;
  return Math.round((1 - Math.cos(angle * Math.PI / 180)) / 2 * 100);
}

// Build a rich moon info object from USNO phase list
function buildMoonInfo(phases) {
  const now = new Date();

  // Sort phases by date ascending
  const sorted = [...phases].sort((a, b) => new Date(a.date) - new Date(b.date));

  // Find the most recent phase (last one that already passed)
  let lastPhase = null;
  let nextPhase = null;

  for (let i = 0; i < sorted.length; i++) {
    const phaseDate = new Date(sorted[i].date);
    if (phaseDate <= now) {
      lastPhase = sorted[i];
    } else {
      nextPhase = sorted[i];
      break;
    }
  }

  if (!lastPhase || !nextPhase) {
    // Fallback if something goes wrong
    return { icon: '🌙', name: 'Moon', illumination: null, nextName: null, nextDays: null, label: '🌙 Moon' };
  }

  const lastDate   = new Date(lastPhase.date);
  const nextDate   = new Date(nextPhase.date);
  const daysSince  = Math.floor((now - lastDate) / 86400000);
  const daysUntil  = Math.ceil((nextDate - now) / 86400000);

  // Determine the descriptive phase name (what we're IN, between two events)
  const lastIdx = PHASE_ORDER.indexOf(lastPhase.phase);
  const betweenNames = [
    'Waxing Crescent',   // after New Moon
    'Waxing Gibbous',    // after First Quarter
    'Waning Gibbous',    // after Full Moon
    'Waning Crescent',   // after Last Quarter
  ];
  const betweenIcons = ['🌒', '🌔', '🌖', '🌘'];

  // If we're right on a phase event (within 12 hours), show that phase
  const hoursAgo = (now - lastDate) / 3600000;
  let phaseName, phaseIcon;
  if (hoursAgo < 12) {
    phaseName = lastPhase.phase;
    phaseIcon = lastPhase.icon;
  } else if (daysUntil === 0) {
    phaseName = nextPhase.phase;
    phaseIcon = nextPhase.icon;
  } else {
    phaseName = betweenNames[lastIdx] || 'Waxing Crescent';
    phaseIcon = betweenIcons[lastIdx] || '🌒';
  }

  // Illumination — find last New Moon for calculation
  let lastNew = sorted.slice().reverse().find(p => p.phase === 'New Moon' && new Date(p.date) <= now);
  let daysSinceNew = lastNew ? Math.floor((now - new Date(lastNew.date)) / 86400000) : 0;
  const illumination = calcIllumination(daysSinceNew);

  // Build the next phase string
  const nextLabel = daysUntil === 0
    ? `${nextPhase.icon} ${nextPhase.phase} tonight`
    : daysUntil === 1
    ? `${nextPhase.icon} ${nextPhase.phase} tomorrow`
    : `${nextPhase.icon} ${nextPhase.phase} in ${daysUntil} days`;

  return {
    icon:         phaseIcon,
    name:         phaseName,
    illumination,
    nextName:     nextPhase.phase,
    nextDays:     daysUntil,
    nextLabel,
    daysSince,
    label:        `${phaseIcon} ${phaseName} · ${illumination}% lit`,
    sublabel:     `Next: ${nextLabel}`,
  };
}

// Module-level cache so we only call USNO once per page load
let _moonInfoCache = null;

async function getMoonInfo() {
  if (_moonInfoCache) return _moonInfoCache;
  try {
    const phases   = await fetchUSNOMoonPhases();
    _moonInfoCache = buildMoonInfo(phases);
  } catch (err) {
    console.warn('[Moon] USNO fetch failed, falling back to computed phase:', err.message);
    // Fallback: simple computed phase
    _moonInfoCache = { icon: '🌙', name: 'Moon', illumination: null, nextName: null, nextDays: null, label: '🌙 Moon', sublabel: null };
  }
  return _moonInfoCache;
}

// ─── OpenWeatherMap ──────────────────────────

function metersToMiles(m) {
  if (m == null) return null;
  const mi = m / 1609.34;
  return mi >= 10 ? '10+ mi' : `${mi.toFixed(1)} mi`;
}

function formatTime(unixUtc, tzOffsetSeconds) {
  const ms = (unixUtc + tzOffsetSeconds) * 1000;
  const d  = new Date(ms);
  const h  = d.getUTCHours();
  const m  = String(d.getUTCMinutes()).padStart(2, '0');
  const ampm = h >= 12 ? 'PM' : 'AM';
  return `${h % 12 || 12}:${m} ${ampm}`;
}

async function fetchOWMConditions(lat, lng) {
  if (!OWM_API_KEY) return null;   // skip gracefully if no key yet

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${OWM_API_KEY}&units=imperial`;
  const res  = await fetch(url);
  if (!res.ok) {
    if (res.status === 401) console.warn('[OWM] Key not yet active — check back in ~2 hours after signup');
    throw new Error(`OWM ${res.status}`);
  }
  const d = await res.json();

  const tz       = d.timezone || 0;
  const visStr   = metersToMiles(d.visibility);
  const desc     = d.weather?.[0]?.description ?? null;
  const humidity = d.main?.humidity != null ? `${d.main.humidity}%` : null;
  const sunrise  = d.sys?.sunrise ? formatTime(d.sys.sunrise, tz) : null;
  const sunset   = d.sys?.sunset  ? formatTime(d.sys.sunset,  tz) : null;

  return { visStr, desc, humidity, sunrise, sunset };
}

// ─── Tide placeholder ───────────────────────
function getTidePlaceholder() { return '— (coming soon)'; }

// ─── Fetch one zone ─────────────────────────

async function fetchZoneConditions(zoneKey, zone) {
  const { lat, lng } = zone;

  const marineParams = [
    'wave_height', 'wave_direction',
    'swell_wave_height', 'swell_wave_period', 'swell_wave_direction',
    'ocean_current_velocity', 'ocean_current_direction',
    'sea_surface_temperature',
  ].join(',');

  const weatherParams = [
    'temperature_2m', 'wind_speed_10m', 'wind_direction_10m', 'wind_gusts_10m',
  ].join(',');

  const marineUrl  = `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lng}&current=${marineParams}`;
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=${weatherParams}&wind_speed_unit=mph&temperature_unit=fahrenheit`;

  // Fire Open-Meteo (2 calls) + OWM (1 call if key set) all in parallel
  const [marineRes, weatherRes, owmData] = await Promise.all([
    fetch(marineUrl),
    fetch(weatherUrl),
    fetchOWMConditions(lat, lng).catch(() => null),  // OWM failure never breaks the zone
  ]);

  if (!marineRes.ok || !weatherRes.ok) throw new Error('API error');

  const marine  = await marineRes.json();
  const weather = await weatherRes.json();
  const mc = marine.current  || {};
  const wc = weather.current || {};

  // Water temp
  const waterTempF = cToF(mc.sea_surface_temperature);

  // Air temp
  const airTempF = wc.temperature_2m != null ? Math.round(wc.temperature_2m) : null;

  // Wind
  const windSpeedRaw = wc.wind_speed_10m  != null ? Math.round(wc.wind_speed_10m)  : null;
  const gustRaw      = wc.wind_gusts_10m  != null ? Math.round(wc.wind_gusts_10m)  : null;
  const windDirStr   = degToCompass(wc.wind_direction_10m);
  let windStr = windSpeedRaw != null ? `${windSpeedRaw} mph ${windDirStr}` : '—';
  if (gustRaw) windStr += ` (gusts ${gustRaw})`;

  // Swell
  const swellFt  = mToFt(mc.swell_wave_height);
  const swellSec = mc.swell_wave_period != null ? Math.round(mc.swell_wave_period) : null;
  const swellDir = degToCompass(mc.swell_wave_direction);
  const swellStr = swellFt != null ? `${swellFt} ft @ ${swellSec}s ${swellDir}` : '—';

  // Currents
  const currentKnots = msToKts(mc.ocean_current_velocity);
  const currentDir   = degToCompass(mc.ocean_current_direction);
  const currentStr   = currentKnots != null ? `${currentKnots} kts ${currentDir}` : '—';

  // OWM data (visibility, sky description, humidity, sunrise/sunset)
  const visibility = owmData?.visStr   ?? '—';
  const skyDesc    = owmData?.desc     ?? null;
  const humidity   = owmData?.humidity ?? null;
  const sunrise    = owmData?.sunrise  ?? null;
  const sunset     = owmData?.sunset   ?? null;

  return {
    zone:      zoneKey,
    waterTemp: waterTempF != null ? `${waterTempF}°F` : '—',
    airTemp:   airTempF   != null ? `${airTempF}°F`   : '—',
    wind:      windStr,
    swell:     swellStr,
    current:   currentStr,
    visibility,
    skyDesc,
    humidity,
    sunrise,
    sunset,
    tide:      getTidePlaceholder(),
    fetchedAt: Date.now(),
    // Raw numerics for fishing score computation
    _waterTempF:  waterTempF   ?? null,
    _windMph:     windSpeedRaw ?? null,
    _swellFt:     swellFt      ?? null,
    _swellPeriod: swellSec     ?? null,
  };
}

// ─── Fetch all zones (parallel + cached) ────

async function fetchAllConditions(zones) {
  // Check cache
  try {
    const cached = JSON.parse(localStorage.getItem(WEATHER_CACHE_KEY) || 'null');
    if (cached && (Date.now() - cached.fetchedAt) < WEATHER_CACHE_TTL) {
      console.log('[Weather] Using cached conditions (age:', Math.round((Date.now() - cached.fetchedAt) / 60000), 'min)');
      return cached.data;
    }
  } catch (_) {}

  console.log('[Weather] Fetching live conditions for', Object.keys(zones).length, 'zones…');
  const start = Date.now();

  const entries = Object.entries(zones);
  const settled = await Promise.allSettled(
    entries.map(([key, zone]) => fetchZoneConditions(key, zone))
  );

  const data = {};
  let ok = 0, fail = 0;
  settled.forEach((result, i) => {
    const key = entries[i][0];
    if (result.status === 'fulfilled') { data[key] = result.value; ok++; }
    else { fail++; console.warn('[Weather] Failed for zone', key, result.reason?.message); }
  });

  console.log(`[Weather] Done in ${Date.now() - start}ms — ${ok} ok, ${fail} failed`);

  if (ok > 0) {
    try { localStorage.setItem(WEATHER_CACHE_KEY, JSON.stringify({ fetchedAt: Date.now(), data })); } catch (_) {}
  }

  return data;
}

// ─── Force refresh ───────────────────────────
function clearConditionsCache() {
  localStorage.removeItem(WEATHER_CACHE_KEY);
  localStorage.removeItem(MOON_CACHE_KEY);
  _moonInfoCache = null;
}

// ─── Public API ──────────────────────────────
window.BajaWeather = { fetchAllConditions, getMoonInfo, clearConditionsCache };
