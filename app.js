// =============================================
// BAJAFISH v2.0 — App Logic
// Mobile-first · 4-tier membership · Premium UX
// =============================================

(function () {
  'use strict';

  // ═══════════════════════════════════════════
  // 1. AUTH & MEMBERSHIP CONFIG
  // ═══════════════════════════════════════════

  const TEST_ACCOUNTS = {
    'free@bajafish.test':      { password: 'BajaFish123!', tier: 'free',      accountType: 'consumer' },
    'scout@bajafish.test':     { password: 'BajaFish123!', tier: 'scout',     accountType: 'consumer' },
    'pro@bajafish.test':       { password: 'BajaFish123!', tier: 'pro',       accountType: 'consumer' },
    'unlimited@bajafish.test': { password: 'BajaFish123!', tier: 'unlimited', accountType: 'consumer' },
  };

  const PLAN_CONFIG = {
    free: {
      name: 'Free', label: 'Starter access', color: '#5C6E7D',
      captainSlots: 1, delayedDays: 3, reportLimit: 3,
      canSeeDelayedReportsOnly: true,
      canSeeLiveReports: false,
      canSeeTopHotspots: false,
      canSeeTopCaptains: false,
      canUseHeatMaps: false,
      canUseLiveHeatMaps: false,
      canBrowseCaptains: true,
      canSeeAllCaptains: false,
      canContactCaptains: false,
      canBookCaptains: false,
      canBrowseFishermen: false,
      canSearchFishermen: false,
      canUseCommunity: false,
      canUseForums: false,
      canUseMeetups: false,
      canUseAdvancedFilters: false,
      canSeePremiumInsights: false,
      canSubmitReports: true,
      canViewCaptainPerformance: false,
      canViewPredictions: false,
      canUseCatchValidation: false,
      canUseHuntMap: false,
    },
    scout: {
      name: 'Scout', label: 'Social + entry intelligence', color: '#4A90D9',
      captainSlots: 3, delayedDays: 1, reportLimit: 8,
      canSeeDelayedReportsOnly: false,
      canSeeLiveReports: true,
      canSeeTopHotspots: false,
      canSeeTopCaptains: false,
      canUseHeatMaps: true,
      canUseLiveHeatMaps: false,
      canBrowseCaptains: true,
      canSeeAllCaptains: false,
      canContactCaptains: false,
      canBookCaptains: false,
      canBrowseFishermen: true,
      canSearchFishermen: false,
      canUseCommunity: true,
      canUseForums: true,
      canUseMeetups: true,
      canUseAdvancedFilters: false,
      canSeePremiumInsights: true,
      canSubmitReports: true,
      canViewCaptainPerformance: false,
      canViewPredictions: false,
      canUseCatchValidation: true,
      canUseHuntMap: false,
    },
    pro: {
      name: 'Pro', label: 'Captain access + full intelligence', color: '#FFC72C',
      captainSlots: 999, delayedDays: 0, reportLimit: 999,
      canSeeDelayedReportsOnly: false,
      canSeeLiveReports: true,
      canSeeTopHotspots: true,
      canSeeTopCaptains: true,
      canUseHeatMaps: true,
      canUseLiveHeatMaps: true,
      canBrowseCaptains: true,
      canSeeAllCaptains: true,
      canContactCaptains: true,
      canBookCaptains: true,
      canBrowseFishermen: false,
      canSearchFishermen: false,
      canUseCommunity: true,
      canUseForums: true,
      canUseMeetups: true,
      canUseAdvancedFilters: true,
      canSeePremiumInsights: true,
      canSubmitReports: true,
      canViewCaptainPerformance: true,
      canViewPredictions: false,
      canUseCatchValidation: true,
      canUseHuntMap: false,
    },
    unlimited: {
      name: 'Unlimited', label: 'Full Baja ecosystem', color: '#FFC72C',
      captainSlots: 999, delayedDays: 0, reportLimit: 999,
      canSeeDelayedReportsOnly: false,
      canSeeLiveReports: true,
      canSeeTopHotspots: true,
      canSeeTopCaptains: true,
      canUseHeatMaps: true,
      canUseLiveHeatMaps: true,
      canBrowseCaptains: true,
      canSeeAllCaptains: true,
      canContactCaptains: true,
      canBookCaptains: true,
      canBrowseFishermen: true,
      canSearchFishermen: true,
      canUseCommunity: true,
      canUseForums: true,
      canUseMeetups: true,
      canUseAdvancedFilters: true,
      canSeePremiumInsights: true,
      canSubmitReports: true,
      canViewCaptainPerformance: true,
      canViewPredictions: true,
      canUseCatchValidation: true,
      canUseHuntMap: true,
    },
  };

  // CONAPESCA legal bag limits (10-point system, max 10pts/angler/day)
  // Points: 1pt = 5/day, 2.5pt = 2/day, 5pt = 1/day
  const BAG_LIMITS = {
    'blue-marlin':    { points: 5,   limit: 1,  note: 'CONAPESCA: 1/day (5 pts)' },
    'striped-marlin': { points: 5,   limit: 1,  note: 'CONAPESCA: 1/day (5 pts)' },
    'yellowfin':      { points: 2.5, limit: 2,  note: 'CONAPESCA: 2/day (2.5 pts each)' },
    'bluefin-tuna':   { points: 2.5, limit: 2,  note: 'CONAPESCA: 2/day (2.5 pts each)' },
    'bonito':         { points: 1,   limit: 5,  note: 'CONAPESCA: 5/day (1 pt each)' },
    'dorado':         { points: 2.5, limit: 2,  note: 'CONAPESCA: 2/day (2.5 pts each)' },
    'wahoo':          { points: 2.5, limit: 2,  note: 'CONAPESCA: 2/day (2.5 pts each)' },
    'yellowtail':     { points: 1,   limit: 5,  note: 'CONAPESCA: 5/day (1 pt each)' },
    'jack-crevalle':  { points: 1,   limit: 5,  note: 'CONAPESCA: 5/day (1 pt each)' },
    'amberjack':      { points: 1,   limit: 5,  note: 'CONAPESCA: 5/day (1 pt each)' },
    'roosterfish':    { points: 2.5, limit: 2,  note: 'CONAPESCA: 2/day (2.5 pts each)' },
    'snook':          { points: 2.5, limit: 2,  note: 'CONAPESCA: 2/day (2.5 pts each)' },
    'black-snook':    { points: 2.5, limit: 2,  note: 'CONAPESCA: 2/day (2.5 pts each)' },
    'cabrilla':       { points: 1,   limit: 5,  note: 'CONAPESCA: 5/day (1 pt each)' },
    'grouper':        { points: 1,   limit: 5,  note: 'CONAPESCA: 5/day (1 pt each)' },
    'golden-grouper': { points: 2.5, limit: 2,  note: 'CONAPESCA: 2/day (2.5 pts each)' },
    'calico-bass':    { points: 1,   limit: 5,  note: 'CONAPESCA: 5/day (1 pt each)' },
    'lingcod':        { points: 1,   limit: 5,  note: 'CONAPESCA: 5/day (1 pt each)' },
    'pargo':          { points: 1,   limit: 5,  note: 'CONAPESCA: 5/day (1 pt each)' },
    'corvina':        { points: 1,   limit: 5,  note: 'CONAPESCA: 5/day (1 pt each)' },
    'white-seabass':  { points: 2.5, limit: 2,  note: 'CONAPESCA: 2/day (2.5 pts each)' },
    'sierra':         { points: 1,   limit: 5,  note: 'CONAPESCA: 5/day (1 pt each)' },
    'halibut':        { points: 1,   limit: 5,  note: 'CONAPESCA: 5/day (1 pt each)' },
    'triggerfish':    { points: 1,   limit: 5,  note: 'CONAPESCA: 5/day (1 pt each)' },
  };

  // ═══════════════════════════════════════════
  // 2. AUTH STATE
  // ═══════════════════════════════════════════

  const BajaAuth = {
    tier: localStorage.getItem('baja_tier') || null,
    email: localStorage.getItem('baja_email') || null,
    accountType: localStorage.getItem('baja_account_type') || 'consumer',
    isLoggedIn() { return !!this.tier; },
    isCaptain()  { return this.accountType === 'captain'; },
    set(tier, email, accountType = 'consumer') {
      this.tier        = (accountType === 'captain') ? 'captain' : (PLAN_CONFIG[tier] ? tier : 'free');
      this.email       = email || null;
      this.accountType = accountType;
      localStorage.setItem('baja_tier', this.tier);
      localStorage.setItem('baja_account_type', this.accountType);
      if (email) localStorage.setItem('baja_email', email);
    },
    logout() {
      this.tier        = null;
      this.email       = null;
      this.accountType = 'consumer';
      localStorage.removeItem('baja_tier');
      localStorage.removeItem('baja_email');
      localStorage.removeItem('baja_account_type');
      showLoginScreen();
    },
    // PREVIEW: paywalls disabled — every feature unlocked for all tiers, no report delay.
    // Revert to ship monetization: return PLAN_CONFIG[this.tier] || PLAN_CONFIG.free;
    get plan() {
      const base = PLAN_CONFIG[this.tier] || PLAN_CONFIG.unlimited;
      const p = Object.assign({}, PLAN_CONFIG.unlimited, base);
      Object.keys(p).forEach(k => { if (k.indexOf('can') === 0 && typeof p[k] === 'boolean') p[k] = true; });
      p.canSeeDelayedReportsOnly = false;
      p.delayedDays = 0; p.reportLimit = 999; p.captainSlots = 999;
      return p;
    },
    can(permission) { return !!this.plan[permission]; },
  };

  // ═══════════════════════════════════════════
  // 3. APP STATE
  // ═══════════════════════════════════════════

  let activeScreen = 'home';
  let activeRating = 'all';
  let mapInstance = null;
  let heatMapActive = false;
  let submitStep = 1;
  let selectedSpecies = new Set();
  let crewFilter = 'all';

  // ── Live weather state (populated by initLiveWeather after login) ──
  let zoneConditions  = {};
  let moonInfo        = null;
  let weatherLoading  = false;
  let weatherFetchedAt = null;

  const capState = {
    zone: 'all', sort: 'rated', search: '',
    species: 'all', rating: 0, specialty: 'all', bsPending: 'all',
  };

  // ═══════════════════════════════════════════
  // 4. HELPERS
  // ═══════════════════════════════════════════

  function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = String(str || '');
    return d.innerHTML;
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function toast(msg, type = 'premium') {
    const el = document.createElement('div');
    el.className = `toast toast--${type}`;
    el.textContent = msg;
    document.getElementById('toast-container').appendChild(el);
    requestAnimationFrame(() => el.classList.add('toast--show'));
    setTimeout(() => { el.classList.remove('toast--show'); setTimeout(() => el.remove(), 400); }, 3000);
  }

  function lockCard(title, body, cta = 'See Plans →', ghostRows = 3) {
    const ghosts = Array.from({ length: ghostRows }, () =>
      `<div class="lock-ghost-row"><div class="lock-ghost-bar lock-ghost-bar--wide"></div><div class="lock-ghost-bar"></div></div>`
    ).join('');
    return `<div class="lock-module">
      <div class="lock-ghost-content">${ghosts}</div>
      <div class="lock-module-overlay">
        <div class="lock-module-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
        <div class="lock-module-title">${title}</div>
        <div class="lock-module-body">${body}</div>
        <button class="lock-module-cta" data-open-upgrade>${cta}</button>
      </div>
    </div>`;
  }

  // ═══════════════════════════════════════════
  // 5. APP STATE MACHINE
  // ═══════════════════════════════════════════

  // Track whether DOM listeners have been wired (only wire once)
  let _appWired = false;

  // Show only the login screen, hide everything else
  function showLoginScreen() {
    document.getElementById('login-screen').classList.remove('hidden');
    document.getElementById('app-shell').classList.add('hidden');
    const fab = document.getElementById('fab-submit');
    if (fab) fab.classList.add('hidden');
  }

  // Show the app shell, hide login screen
  function showAppShell() {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('app-shell').classList.remove('hidden');
    const fab = document.getElementById('fab-submit');
    if (fab) fab.classList.remove('hidden');
  }

  // Wire all static DOM listeners exactly once
  function wireApp() {
    if (_appWired) return;
    _appWired = true;

    populateZoneDropdowns();
    normalizeSeedReportDates();
    loadUserReports();
    initNav();
    initReportFilters();
    initReportsScreen();
    initCrewSection();
    initCommunityTabs();
    initMapLayers();
    initSubmitModal();
    initUpgradeModal();
    initLogout();
    initTheme();
    initStatButtons();
    // initHuntMap wired after renderHuntMap populates the DOM

    // B1: home preview cards route to the Reports screen (handler referenced by
    // buildPreviewCard's inline onclick — previously undefined, making cards dead)
    window._goReports = () => { switchScreen('reports'); renderReportsScreen(); };

    // Global upgrade button delegation
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-open-upgrade]');
      if (btn) openUpgradeModal();
    });
  }

  // Render all data for current auth state
  function renderApp() {
    updateMembershipUI();          // Always run first — updates top chip
    renderHub();
    renderHomePreview();
    renderHuntMap();
    renderCrewTrips();
    renderCommunityContent();
    updateStats();
    switchScreen('home');
  }

  // Full login flow — wire once, render once, show app
  function enterApp() {
    wireApp();
    renderApp();
    showAppShell();
    initLiveWeather(); // non-blocking background fetch
  }

  // ── Live weather initialisation ────────────────────────────────────
  function initLiveWeather() {
    if (!window.BajaWeather) {
      console.warn('[BajaFish] window.BajaWeather unavailable — using stub conditions');
      return;
    }
    weatherLoading = true;
    Promise.all([
      window.BajaWeather.getMoonInfo().catch(() => null),
      window.BajaWeather.fetchAllConditions(ZONES).catch(() => ({})),
    ]).then(([moon, conditions]) => {
      moonInfo         = moon || null;
      zoneConditions   = conditions || {};
      weatherLoading   = false;
      weatherFetchedAt = Date.now();
    });
  }

  function weatherAgeLabel() {
    if (!weatherFetchedAt) return null;
    const mins = Math.round((Date.now() - weatherFetchedAt) / 60000);
    if (mins < 2)  return 'Just updated';
    if (mins < 60) return `Updated ${mins} min ago`;
    return `Updated ${Math.round(mins / 60)}h ago`;
  }


  // ── Account storage (local/mock auth) ───────────────────────────────
  function getUserAccounts() {
    try { return JSON.parse(localStorage.getItem('baja_user_accounts') || '{}'); } catch { return {}; }
  }
  function saveUserAccount(email, account) {
    const accounts = getUserAccounts();
    accounts[email.toLowerCase()] = account;
    localStorage.setItem('baja_user_accounts', JSON.stringify(accounts));
  }
  function lookupAccount(email, password) {
    const e = email.toLowerCase();
    if (TEST_ACCOUNTS[e] && TEST_ACCOUNTS[e].password === password) return TEST_ACCOUNTS[e];
    const accounts = getUserAccounts();
    if (accounts[e] && accounts[e].password === password) return accounts[e];
    return null;
  }
  function signInAs(account, email) {
    BajaAuth.tier        = (account.accountType === 'captain') ? 'captain' : (PLAN_CONFIG[account.tier] ? account.tier : 'free');
    BajaAuth.email       = email;
    BajaAuth.accountType = account.accountType || 'consumer';
    localStorage.setItem('baja_tier',         BajaAuth.tier);
    localStorage.setItem('baja_account_type', BajaAuth.accountType);
    localStorage.setItem('baja_email',        BajaAuth.email);
    enterApp();
  }

  function initLoginScreen() {
    const tierEmails = {
      free:'free@bajafish.test', scout:'scout@bajafish.test',
      pro:'pro@bajafish.test',   unlimited:'unlimited@bajafish.test',
    };

    // ── Mode tabs (Sign In / Create Account) ──
    let activeMode = 'signin';
    function setMode(mode) {
      activeMode = mode;
      document.querySelectorAll('.ls-mode-tab').forEach(t =>
        t.classList.toggle('ls-mode-tab--active', t.dataset.lsMode === mode));
      document.querySelectorAll('.ls-panel').forEach(p => p.classList.remove('active'));
      document.getElementById('ls-panel-' + mode)?.classList.add('active');
    }
    document.querySelectorAll('.ls-mode-tab, .ls-switch-link').forEach(btn =>
      btn.addEventListener('click', () => setMode(btn.dataset.lsMode)));

    // ── Dev QA collapse ──
    document.getElementById('ls-dev-toggle')?.addEventListener('click', () => {
      document.getElementById('ls-dev-body')?.classList.toggle('hidden');
      document.querySelector('.ls-dev-chevron')?.classList.toggle('ls-dev-chevron--open');
    });

    // ── Dev tier pills: auto-fill sign-in ──
    document.querySelectorAll('.ls-tier-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.ls-tier-pill').forEach(p => p.classList.remove('ls-tier-pill--active'));
        pill.classList.add('ls-tier-pill--active');
        setMode('signin');
        const emailEl = document.getElementById('login-email');
        const passEl  = document.getElementById('login-password');
        if (emailEl) emailEl.value = tierEmails[pill.dataset.tier] || '';
        if (passEl)  passEl.value  = 'BajaFish123!';
      });
    });

    // ── Sign In submit ──
    document.getElementById('login-form')?.addEventListener('submit', e => {
      e.preventDefault();
      const email    = (document.getElementById('login-email')?.value || '').trim().toLowerCase();
      const password = (document.getElementById('login-password')?.value || '').trim();
      const account  = lookupAccount(email, password);
      const errEl    = document.getElementById('login-error');
      if (!account) { errEl?.classList.remove('hidden'); return; }
      errEl?.classList.add('hidden');
      signInAs(account, email);
    });

    // ── Tier selector buttons on angler signup form ──
    document.querySelectorAll('[data-signup-tier]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-signup-tier]').forEach(b => b.classList.remove('ls-tier-select-btn--active'));
        btn.classList.add('ls-tier-select-btn--active');
      });
    });

    // ── Create Angler submit ──
    document.getElementById('create-angler-form')?.addEventListener('submit', e => {
      e.preventDefault();
      const name     = document.getElementById('ca-name')?.value.trim()     || '';
      const email    = (document.getElementById('ca-email')?.value || '').trim().toLowerCase();
      const password = document.getElementById('ca-password')?.value.trim() || '';
      const region   = document.getElementById('ca-region')?.value.trim()   || '';
      const selectedTierBtn = document.querySelector('[data-signup-tier].ls-tier-select-btn--active');
      const tier     = selectedTierBtn?.dataset.signupTier || 'free';
      const errEl    = document.getElementById('create-angler-error');
      if (!name || !email || password.length < 6) {
        if (errEl) errEl.classList.remove('hidden');
        return;
      }
      // Direct email ownership check — catches existing test accounts regardless of password
      if (TEST_ACCOUNTS[email] || getUserAccounts()[email]) {
        if (errEl) { errEl.textContent = 'Email already in use. Try signing in.'; errEl.classList.remove('hidden'); }
        return;
      }
      errEl?.classList.add('hidden');
      const account = { password, tier, accountType: 'consumer' };
      saveUserAccount(email, account);
      // Pre-populate user profile
      try {
        const existing = JSON.parse(localStorage.getItem('baja_user_profile_' + email) || '{}');
        localStorage.setItem('baja_user_profile_' + email, JSON.stringify({
          ...existing, displayName: name, homeRegion: region,
          memberSince: new Date().toISOString().slice(0,10),
        }));
      } catch {}
      toast(`${PLAN_CONFIG[tier]?.name || tier} account created! Welcome to BajaFish.`, 'premium');
      signInAs(account, email);
    });

    // ── Pre-fill from existing session (resume flow) ──
    const sessionEmail = localStorage.getItem('baja_email');
    if (sessionEmail) {
      const emailEl = document.getElementById('login-email');
      if (emailEl && !emailEl.value) emailEl.value = sessionEmail;
    }

    // ── Set initial visible state ──
    // Both ls-panels start with display:none via CSS.
    // Must call setMode here to make the sign-in panel visible immediately.
    setMode('signin');
  }





  // ═══════════════════════════════════════════
  // 6. NAVIGATION
  // ═══════════════════════════════════════════

  function switchScreen(name) {
    activeScreen = name;

    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.bnav-item').forEach(b => b.classList.remove('active'));

    const screen = document.getElementById('screen-' + name);
    if (screen) screen.classList.add('active');

    // Mark nav active — home also highlights when on hotspots sub-section
    const navTarget = name === 'hotspots' ? 'home' : name;
    document.querySelectorAll(`.bnav-item[data-screen="${navTarget}"]`).forEach(b => b.classList.add('active'));

    // FAB shows on home screen
    const fab = document.getElementById('fab-submit');
    if (fab) fab.classList.toggle('hidden', name !== 'home');

    // Lazy init map
    if (name === 'maps') setTimeout(() => initMap(), 100);

    // Render reports browser when navigating to it
    if (name === 'reports') renderReportsScreen();

    if (screen) screen.scrollTop = 0;
  }

  // ── Hub / Home render ──────────────────────────────────────────────────────

  function renderHub() {
    // Live badge label
    const hubLiveLabel = document.getElementById('hub-live-label');
    if (hubLiveLabel) {
      hubLiveLabel.textContent = BajaAuth.can('canSeeLiveReports')
        ? 'Live Intelligence'
        : `Delayed · ${BajaAuth.plan.delayedDays}-day reports`;
    }

    // Note: hub-plan-label removed from grid (profile card removed)

    // Upgrade nudge
    const nudge     = document.getElementById('hub-upgrade-nudge');
    const nudgeText = document.getElementById('hub-nudge-text');
    if (nudge) {
      if (BajaAuth.tier === 'unlimited') {
        nudge.classList.add('hidden');
      } else {
        nudge.classList.remove('hidden');
        const msgs = {
          free:  'Upgrade to Scout — unlock maps, heat data & community.',
          scout: 'Upgrade to Pro — full captain access & live intelligence.',
          pro:   'Upgrade to Unlimited — full community, forums & all features.',
        };
        if (nudgeText) nudgeText.textContent = msgs[BajaAuth.tier] || '';
      }
    }

    // Wire action row buttons — lock state, active state, click routing
    const grid = document.getElementById('hub-grid');
    if (!grid) return;

    grid.querySelectorAll('.hub-action-btn, .hub-card').forEach(card => {
      const dest     = card.dataset.hubDest;
      const requires = card.dataset.requires;
      const lockEl   = card.querySelector('.hub-card-lock');
      const allowed  = !requires || BajaAuth.can(requires);

      // Support both new action buttons and old hub-card elements
      card.classList.toggle('hub-action-btn--locked', !allowed);
      card.classList.toggle('hub-action-btn--active',  allowed);
      card.classList.toggle('hub-card--locked', !allowed);
      if (lockEl) lockEl.classList.toggle('hidden', allowed);

      const fresh = card.cloneNode(true);
      card.parentNode.replaceChild(fresh, card);

      fresh.addEventListener('click', () => {
        if (fresh.id === 'hub-submit-btn') { openSubmitModal(); return; }
        if (!allowed) { openUpgradeModal(); return; }
        if (dest === 'hotspots') {
          const el = document.getElementById('hotspots-module');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        switchScreen(dest);
        if (dest === 'reports') renderReportsScreen();
      });
    });
  }

  function initNav() {
    // Event delegation on the nav container — survives any DOM re-renders
    const nav = document.querySelector('.bottom-nav');
    if (!nav) return;
    nav.addEventListener('click', e => {
      const btn = e.target.closest('.bnav-item');
      if (!btn) return;
      const dest = btn.dataset.screen;
      if (dest) switchScreen(dest);
    });
  }

  // ═══════════════════════════════════════════
  // 7. MEMBERSHIP UI
  // ═══════════════════════════════════════════

  // ── User Profile + Membership system ────────────────────────────────────

  const USER_PROFILE_DEFAULTS = {
    displayName: '', homeRegion: '', bio: '', fishingStyle: '',
    favoriteSpecies: [],
    verifiedTrips: 0, proximityVerified: false,
    reportsSubmitted: 0, captainsRated: 0, memberSince: null,
  };

  function getUserProfile(email) {
    const saved = localStorage.getItem('baja_user_profile_' + email);
    const base  = { ...USER_PROFILE_DEFAULTS, memberSince: new Date().toISOString().slice(0,10) };
    if (!saved) return base;
    try { return { ...base, ...JSON.parse(saved) }; } catch { return base; }
  }

  function saveUserProfile(email, edits) {
    const existing = JSON.parse(localStorage.getItem('baja_user_profile_' + email) || '{}');
    localStorage.setItem('baja_user_profile_' + email, JSON.stringify({ ...existing, ...edits }));
  }

  function renderUserProfile() {
    const email   = BajaAuth.email || '';
    const profile = getUserProfile(email);
    const plan    = BajaAuth.plan;
    const tier    = BajaAuth.tier;
    const initials = profile.displayName
      ? profile.displayName.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase()
      : (email[0] || '?').toUpperCase();

    // Hero
    const heroEl = document.getElementById('profile-hero');
    if (heroEl) {
      heroEl.innerHTML = `
        <div class="prof-avatar-wrap">
          <div class="profile-avatar prof-avatar--large">${initials}</div>
        </div>
        <div class="prof-identity">
          <div class="prof-display-name">${escapeHtml(profile.displayName || 'Your Name')}</div>
          <div class="profile-email" id="profile-email-display">${escapeHtml(email)}</div>
          <div class="profile-plan-badge" id="profile-plan-badge" data-plan="${tier}">
            <span class="profile-plan-name" id="profile-plan-name">${plan.name}</span>
          </div>
        </div>
        ${profile.homeRegion ? `<div class="prof-region">${ICON('pin')} ${escapeHtml(profile.homeRegion)}</div>` : ''}
      `;
    }

    // Trust strip
    const trustEl = document.getElementById('profile-trust');
    if (trustEl) {
      trustEl.innerHTML = `
        <div class="prof-trust-row">
          <div class="prof-trust-stat"><span class="prof-trust-num">${profile.reportsSubmitted}</span><span class="prof-trust-lbl">Reports</span></div>
          <div class="prof-trust-div"></div>
          <div class="prof-trust-stat"><span class="prof-trust-num">${profile.verifiedTrips}</span><span class="prof-trust-lbl">Verified Trips</span></div>
          <div class="prof-trust-div"></div>
          <div class="prof-trust-stat"><span class="prof-trust-num">${profile.captainsRated}</span><span class="prof-trust-lbl">Captains Rated</span></div>
        </div>`;
    }

    // Edit form with favorite species chips
    const editEl = document.getElementById('profile-edit-form');
    if (!editEl) return;
    const allSpecies  = Object.entries(SPECIES_INFO).slice(0, 20);
    const favSelected = new Set(profile.favoriteSpecies || []);
    const favChips    = allSpecies.map(([key, info]) => {
      const on = favSelected.has(key);
      return `<button class="cdash-species-chip${on?' cdash-species-chip--on':''}" data-sp="${key}">
        ${info.img ? `<img src="${info.img}" alt="" loading="lazy">` : ''}
        <span>${escapeHtml(info.name)}</span>
        ${on ? '<span class="cdash-species-chip-check">✓</span>' : ''}
      </button>`;
    }).join('');
    const styleLabels = {
      'light-tackle':'Light Tackle','deep-sea':'Deep Sea',
      'fly':'Fly Fishing','mixed':'Mixed Bag','inshore':'Inshore',
    };
    editEl.innerHTML = `
      <div class="prof-section-head">Your Angler Identity</div>
      <label class="cdash-edit-label">Display Name</label>
      <input id="prof-edit-name" class="cdash-edit-input" type="text" value="${escapeHtml(profile.displayName)}" placeholder="Your name or handle" maxlength="40">
      <label class="cdash-edit-label">Home Region</label>
      <input id="prof-edit-region" class="cdash-edit-input" type="text" value="${escapeHtml(profile.homeRegion)}" placeholder="e.g. San Diego, CA" maxlength="60">
      <label class="cdash-edit-label">Fishing Style</label>
      <select id="prof-edit-style" class="cdash-edit-input">
        <option value="">Select…</option>
        ${Object.entries(styleLabels).map(([v,l])=>`<option value="${v}"${profile.fishingStyle===v?' selected':''}>${l}</option>`).join('')}
      </select>
      <label class="cdash-edit-label">Bio <span class="cdash-edit-hint">Visible to other anglers</span></label>
      <textarea id="prof-edit-bio" class="cdash-edit-input cdash-edit-textarea" rows="3" maxlength="300" placeholder="What do you fish for? Where do you go?">${escapeHtml(profile.bio)}</textarea>
      <label class="cdash-edit-label">Target Species <span class="cdash-edit-hint">Up to 5</span></label>
      <div class="cdash-species-chips-grid" id="prof-species-grid">${favChips}</div>
      <div class="cdash-species-count-note" id="prof-species-note">${favSelected.size}/5 selected</div>
      <button id="prof-save-btn" class="cdash-save-btn" style="margin-top:1rem">Save Profile</button>`;

    editEl.querySelector('#prof-save-btn')?.addEventListener('click', () => {
      const selSp = [...editEl.querySelectorAll('.cdash-species-chip--on')].map(c => c.dataset.sp);
      saveUserProfile(email, {
        displayName:     document.getElementById('prof-edit-name')?.value.trim()   || '',
        homeRegion:      document.getElementById('prof-edit-region')?.value.trim() || '',
        fishingStyle:    document.getElementById('prof-edit-style')?.value         || '',
        bio:             document.getElementById('prof-edit-bio')?.value.trim()    || '',
        favoriteSpecies: selSp,
      });
      toast('Profile saved ✓', 'premium');
      renderUserProfile();
    });

    editEl.querySelector('#prof-species-grid')?.addEventListener('click', e => {
      const chip = e.target.closest('.cdash-species-chip');
      if (!chip) return;
      const selected = editEl.querySelectorAll('.cdash-species-chip--on');
      if (!chip.classList.contains('cdash-species-chip--on') && selected.length >= 5) return;
      chip.classList.toggle('cdash-species-chip--on');
      const isOn    = chip.classList.contains('cdash-species-chip--on');
      const existing = chip.querySelector('.cdash-species-chip-check');
      if (isOn && !existing) chip.insertAdjacentHTML('beforeend','<span class="cdash-species-chip-check">✓</span>');
      if (!isOn && existing) existing.remove();
      const note = editEl.querySelector('#prof-species-note');
      if (note) note.textContent = `${editEl.querySelectorAll('.cdash-species-chip--on').length}/5 selected`;
    });
  }

  function renderMembershipFlow() {
    const el = document.getElementById('profile-membership-flow');
    if (!el) return;
    const currentTier = BajaAuth.tier;
    const tierOrder   = ['free','scout','pro','unlimited'];
    const plans = [
      { key:'free',      name:'Free',      price:'$0',  period:'',    desc:'Delayed data, basic zone map, 1 captain profile' },
      { key:'scout',     name:'Scout',     price:'$9',  period:'/mo', desc:'Live reports, heat maps, community & meetups' },
      { key:'pro',       name:'Pro',       price:'$19', period:'/mo', desc:'All captains + contact, full intelligence, bookings' },
      { key:'unlimited', name:'Unlimited', price:'$29', period:'/mo', desc:'Everything — full community, hunt map, all tools' },
    ];
    el.innerHTML = `
      <div class="prof-section-head" style="margin-top:0.25rem">Membership</div>
      <div class="memb-plans">
        ${plans.map(p => {
          const isCurrent = p.key === currentTier;
          const isUpgrade = tierOrder.indexOf(p.key) > tierOrder.indexOf(currentTier);
          return `<div class="memb-plan${isCurrent?' memb-plan--current':''}">
            <div class="memb-plan-top">
              <div class="memb-plan-name">${p.name}</div>
              <div class="memb-plan-price">${p.price}<span class="memb-plan-period">${p.period}</span></div>
            </div>
            <div class="memb-plan-desc">${p.desc}</div>
            ${isCurrent
              ? `<div class="memb-plan-badge">Current Plan</div>`
              : `<button class="memb-activate-btn${isUpgrade?' memb-activate-btn--gold':''}" data-activate-tier="${p.key}">
                  ${isUpgrade ? '↑ Upgrade to' : '↓ Switch to'} ${p.name}
                </button>`}
          </div>`;
        }).join('')}
      </div>
      <p class="memb-note">Simulated — real billing coming soon.</p>`;

    el.querySelectorAll('[data-activate-tier]').forEach(btn => {
      btn.addEventListener('click', () => {
        const t = btn.dataset.activateTier;
        const tierEmails = { free:'free@bajafish.test', scout:'scout@bajafish.test', pro:'pro@bajafish.test', unlimited:'unlimited@bajafish.test' };
        BajaAuth.set(t, tierEmails[t] || BajaAuth.email, 'consumer');
        toast(`Switched to ${PLAN_CONFIG[t]?.name || t} ✓`, 'premium');
        updateMembershipUI();
      });
    });
  }

  function updateMembershipUI() {
    const plan      = BajaAuth.plan;
    const tier      = BajaAuth.tier;

    document.documentElement.setAttribute('data-plan', tier);

    // Top bar chip
    const chipName = document.getElementById('plan-chip-name');
    if (chipName) chipName.textContent = plan.name;
    const chip = document.getElementById('plan-chip');
    if (chip) chip.setAttribute('data-plan', tier);

    // Profile screen
    const profileEmail = document.getElementById('profile-email-display');
    if (profileEmail) profileEmail.textContent = BajaAuth.email || '—';

    const profileAvatar = document.getElementById('profile-avatar');
    if (profileAvatar) profileAvatar.textContent = (BajaAuth.email || '?')[0].toUpperCase();

    const profilePlanName = document.getElementById('profile-plan-name');
    if (profilePlanName) profilePlanName.textContent = plan.name;

    const profileBadge = document.getElementById('profile-plan-badge');
    if (profileBadge) profileBadge.setAttribute('data-plan', tier);

    renderProfilePlanDetail();
    renderProfilePermissions();
    renderPlanComparison();
    renderUserProfile();
    renderMembershipFlow();

    const upgradeBtn = document.getElementById('profile-upgrade-btn');
    if (upgradeBtn) upgradeBtn.classList.toggle('hidden', tier === 'unlimited');

    // Re-render membership modules
    renderMembershipModules();
  }

  function renderMembershipModules() {
    renderHotspots();
    renderCommunityContent();
    renderMapLockState();
  }

  function renderHotspots() {
    const el = document.getElementById('hotspots-content');
    if (!el) return;
    if (!BajaAuth.can('canSeeTopHotspots')) {
      el.innerHTML = lockCard(
        'Top 5 Hot Spots — Pro+',
        'See exactly where the bite is concentrating across Baja right now, ranked by recent report activity.',
        'Unlock Hot Spots', 4
      );
      bindUpgradeButtons(el);
      return;
    }
    const rows = getHotspotRankings();
    if (!rows.length) { el.innerHTML = '<div class="empty-state"><p>No reports this week.</p></div>'; return; }
    const max = rows[0].count;
    el.innerHTML = rows.map((row, i) => {
      const coastCls = row.info.coast === 'Pacific' ? 'ir-coast--pac' : 'ir-coast--cor';
      const barW = Math.round((row.count / max) * 100);
      const medals = [ICON('medal','ow-ico--gold'), ICON('medal','ow-ico--gold'), ICON('medal','ow-ico--gold')];
      return `
        <div class="intel-row">
          <span class="intel-rank">${medals[i] || i + 1}</span>
          <div class="intel-row-info">
            <div class="intel-row-primary">${escapeHtml(row.info.name)}</div>
            <div class="intel-row-bar"><div class="intel-row-bar-fill" style="width:${barW}%"></div></div>
          </div>
          <div class="intel-row-right">
            <span class="intel-count">${row.count}</span>
            <span class="intel-coast-pill ${coastCls}">${row.info.coast === 'Pacific' ? 'Pac' : 'Cor'}</span>
          </div>
        </div>`;
    }).join('');
  }

  function renderTopCaptains() {
    const el = document.getElementById('top-captains-content');
    if (!el) return;
    if (!BajaAuth.can('canSeeTopCaptains')) {
      el.innerHTML = lockCard(
        'Hottest Captains — Pro+',
        'See which captains are producing the most trips this week and where they\'re fishing.',
        'Unlock Captain Rankings', 3
      );
      bindUpgradeButtons(el);
      return;
    }
    const rows = getCaptainRankings();
    if (!rows.length) { el.innerHTML = '<div class="empty-state"><p>No captain data this week.</p></div>'; return; }
    el.innerHTML = rows.slice(0, 5).map((row, i) => {
      const clean = row.name.replace(/Capit[aá]n\s*/i, '');
      const initials = clean.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
      const isHot = row.count >= 3;
      return `
        <div class="intel-captain-row">
          <span class="intel-rank">${i + 1}</span>
          <div class="intel-captain-avatar">${initials}</div>
          <div class="intel-row-info">
            <div class="intel-row-primary">${escapeHtml(clean)}</div>
          </div>
          <div class="intel-captain-badge ${isHot ? 'intel-captain-badge--hot' : ''}">
            ${isHot ? ICON('flame','ow-ico--gold') : ''} ${row.count} trip${row.count !== 1 ? 's' : ''}
          </div>
        </div>`;
    }).join('');
  }

  function renderMapLockState() {
    const overlay = document.getElementById('map-lock-overlay');
    if (!overlay) return;
    // Show lock overlay when heat map layer is active and user can't use it
    // Default zones view is always unlocked — handled in map layer clicks
  }

  function renderProfilePlanDetail() {
    const el = document.getElementById('profile-plan-detail');
    if (!el) return;
    const plan = BajaAuth.plan;
    const tier = BajaAuth.tier;
    const features = {
      free:      { included: ['Zone map (basic)', 'Delayed reports (3-day lag)', '2 captain profiles'], locked: ['Live reports', 'Heat maps', 'Hot spots', 'Captain contact'] },
      scout:     { included: ['Live reports', 'Heat maps', 'Community + meetups', '6 captain profiles'], locked: ['Captain contact & booking', 'Full hot spots', 'Forums', 'Search fishermen'] },
      pro:       { included: ['Full live intelligence', 'Heat maps by species', 'All captains + contact', 'Top hot spots', 'Full booking'], locked: ['Community forums', 'Search fishermen', 'Meetups'] },
      unlimited: { included: ['Everything in BajaFish', 'Full community + forums', 'Search all fishermen', 'Live maps & all overlays', 'Meetups + crew discovery'], locked: [] },
    };
    const f = features[tier] || features.free;
    const nextTierMap = { free: 'Scout', scout: 'Pro', pro: 'Unlimited' };
    const nextTier = nextTierMap[tier];

    el.innerHTML = `
      <div class="plan-card" data-plan="${tier}">
        <div class="plan-card-header">
          <span class="plan-card-name">${plan.name}</span>
          <span class="plan-card-label">${plan.label}</span>
        </div>
        <div class="plan-card-features">
          ${f.included.map(x => `<div class="plan-feature plan-feature--on"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>${escapeHtml(x)}</div>`).join('')}
          ${f.locked.map(x => `<div class="plan-feature plan-feature--off"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>${escapeHtml(x)}</div>`).join('')}
        </div>
        ${nextTier ? `<div class="plan-next-tier">
          <div class="plan-next-label">Next: <strong>${nextTier}</strong> unlocks ${nextTier === 'Scout' ? 'live data & heat maps' : nextTier === 'Pro' ? 'all captains & full intelligence' : 'full community & forums'}</div>
          <button class="plan-next-btn" data-open-upgrade>Upgrade to ${nextTier} →</button>
        </div>` : `<div class="plan-next-tier plan-next-tier--max"><span>✦ Full access active</span></div>`}
      </div>`;
  }

  function renderProfilePermissions() {
    const el = document.getElementById('profile-permissions');
    if (!el) return;
    const checks = [
      { key: 'canSeeLiveReports',   label: 'Live reports',              icon: ICON('signal') },
      { key: 'canSeeTopHotspots',   label: 'Top hot spots',             icon: ICON('flame','ow-ico--gold') },
      { key: 'canSeeTopCaptains',   label: 'Captain rankings',          icon: ICON('anchor') },
      { key: 'canUseLiveHeatMaps',  label: 'Live heat maps',            icon: ICON('map') },
      { key: 'canContactCaptains',  label: 'Captain contact & booking', icon: ICON('phone') },
      { key: 'canUseCommunity',     label: 'Community & Pool a Panga',  icon: ICON('users') },
      { key: 'canUseMeetups',       label: 'Meetups',                   icon: ICON('calendar') },
      { key: 'canUseForums',        label: 'Forums',                    icon: ICON('chat') },
      { key: 'canSearchFishermen',  label: 'Search anglers',            icon: ICON('search') },
    ];
    const on  = checks.filter(c => BajaAuth.can(c.key));
    const off = checks.filter(c => !BajaAuth.can(c.key));
    const row = (c, active) => `
      <div class="perm-row perm-row--${active ? 'on' : 'off'}">
        <span class="perm-icon">${c.icon}</span>
        <span class="perm-label">${escapeHtml(c.label)}</span>
        <span class="perm-status">${active ? '✓' : '—'}</span>
      </div>`;
    el.innerHTML = (on.length ? `<div class="perm-group-label">Unlocked</div>${on.map(c => row(c, true)).join('')}` : '')
      + (off.length ? `<div class="perm-group-label perm-group-label--locked">Locked — upgrade to unlock</div>${off.map(c => row(c, false)).join('')}` : '');
    bindUpgradeButtons(el);
  }

  function renderPlanComparison() {
    const el = document.getElementById('plan-comparison');
    if (!el) return;
    const tiers = [
      { key: 'free',      name: 'Free',      price: '$0',    highlight: 'Delayed data, basic map' },
      { key: 'scout',     name: 'Scout',      price: '$9/mo', highlight: 'Live reports + heat maps' },
      { key: 'pro',       name: 'Pro',        price: '$19/mo',highlight: 'Full intelligence + captains' },
      { key: 'unlimited', name: 'Unlimited',  price: '$29/mo',highlight: 'Full community + everything' },
    ];
    el.innerHTML = tiers.map(t => {
      const isCurrent = BajaAuth.tier === t.key;
      return `
        <div class="tier-compare-card ${isCurrent ? 'tier-compare-card--current' : ''}" data-plan="${t.key}">
          <div class="tier-compare-name">${t.name}${isCurrent ? ' <span class="tier-compare-you">← you</span>' : ''}</div>
          <div class="tier-compare-price">${t.price}</div>
          <div class="tier-compare-desc">${escapeHtml(t.highlight)}</div>
          ${!isCurrent && t.key !== 'free' ? `<button class="tier-compare-btn" data-open-upgrade>Switch →</button>` : ''}
        </div>`;
    }).join('');
    bindUpgradeButtons(el);
  }

  // ═══════════════════════════════════════════
  // 8. REPORTS
  // ═══════════════════════════════════════════

  function getVisibleReports() {
    let filtered = [...REPORTS];
    if (!BajaAuth.can('canSeeLiveReports')) {
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - BajaAuth.plan.delayedDays);
      filtered = filtered.filter(r => new Date(r.date) <= cutoff);
    }
    return filtered;
  }

  function getHotspotRankings() {
    const counts = {};
    getVisibleReports().forEach(r => counts[r.zone] = (counts[r.zone] || 0) + 1);
    return Object.entries(counts)
      .map(([zone, count]) => ({ zone, count, info: ZONES[zone] || { name: zone, coast: '' } }))
      .sort((a, b) => b.count - a.count).slice(0, 5);
  }

  function getCaptainRankings() {
    const counts = {};
    getVisibleReports().forEach(r => {
      if (!r.captain) return;
      counts[r.captain] = (counts[r.captain] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count).slice(0, 10);
  }

  // ─── Intelligence Engine ──────────────────────────────────────────────────
  // Derives smart summary sentences from visible reports

  function buildIntelSummary(reports) {
    if (!reports.length) return [];
    const insights = [];

    // Most active species this week
    const speciesCounts = {};
    reports.forEach(r => r.species.forEach(s => {
      speciesCounts[s] = (speciesCounts[s] || 0) + 1;
    }));
    const topSpecies = Object.entries(speciesCounts)
      .sort((a, b) => b[1] - a[1]).slice(0, 2)
      .map(([s]) => (SPECIES_INFO[s] || { name: s }).name);
    if (topSpecies.length) {
      insights.push({ icon: ICON('target'), text: `${topSpecies.join(' & ')} leading this week's action` });
    }

    // Hottest zone
    const zoneCounts = {};
    reports.forEach(r => zoneCounts[r.zone] = (zoneCounts[r.zone] || 0) + 1);
    const topZone = Object.entries(zoneCounts).sort((a, b) => b[1] - a[1])[0];
    if (topZone) {
      const zInfo = ZONES[topZone[0]] || { name: topZone[0], coast: '' };
      insights.push({ icon: ICON('pin'), text: `${zInfo.name} most active · ${topZone[1]} reports` });
    }

    // Hot bite ratio
    const hotCount = reports.filter(r => r.rating === 'hot').length;
    const hotPct   = Math.round((hotCount / reports.length) * 100);
    if (hotPct >= 30) {
      insights.push({ icon: ICON('flame','ow-ico--gold'), text: `${hotPct}% of reports rated Hot this week` });
    }

    // Captain on a streak
    const captainCounts = {};
    reports.filter(r => r.captain).forEach(r => {
      captainCounts[r.captain] = (captainCounts[r.captain] || 0) + 1;
    });
    const topCaptain = Object.entries(captainCounts).sort((a, b) => b[1] - a[1])[0];
    if (topCaptain && topCaptain[1] >= 2) {
      insights.push({ icon: ICON('anchor'), text: `${topCaptain[0].replace(/Capit[aá]n\s*/i, 'Capt. ')} on a ${topCaptain[1]}-trip streak` });
    }

    return insights.slice(0, 3);
  }

  // ─── Home Reports Preview (3 compact cards + CTA) ────────────────────────

  function renderHomePreview() {
    // Intelligence summary bar
    const summaryEl = document.getElementById('intel-summary');
    const tierBadge = document.getElementById('reports-tier-badge');

    const visible = getVisibleReports();
    const oneWeekAgo = new Date(); oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const thisWeek = visible.filter(r => new Date(r.date) >= oneWeekAgo);

    // Tier badge
    if (tierBadge) {
      if (!BajaAuth.can('canSeeLiveReports')) {
        tierBadge.textContent = `${BajaAuth.plan.delayedDays}-day delay · Free`;
        tierBadge.className   = 'module-tier-badge module-tier-badge--delayed';
      } else {
        tierBadge.textContent = 'Live';
        tierBadge.className   = 'module-tier-badge module-tier-badge--live';
      }
    }

    // Intel summary
    if (summaryEl) {
      const insights = buildIntelSummary(thisWeek.length ? thisWeek : visible.slice(0, 20));
      if (insights.length && BajaAuth.can('canSeeLiveReports')) {
        summaryEl.innerHTML = `
          <div class="intel-summary-inner">
            ${insights.map(i => `
              <div class="intel-summary-item">
                <span class="intel-summary-icon">${i.icon}</span>
                <span class="intel-summary-text">${escapeHtml(i.text)}</span>
              </div>`).join('')}
          </div>`;
        summaryEl.classList.remove('hidden');
      } else if (!BajaAuth.can('canSeeLiveReports')) {
        summaryEl.innerHTML = `
          <div class="intel-summary-inner intel-summary-inner--locked">
            <span class="intel-summary-icon">${ICON('lock')}</span>
            <span class="intel-summary-text">Live bite intelligence — <button class="intel-summary-upgrade" data-open-upgrade>Upgrade to unlock</button></span>
          </div>`;
        summaryEl.classList.remove('hidden');
      } else {
        summaryEl.classList.add('hidden');
      }
    }

    // Hub report count
    const countLabel = document.getElementById('hub-report-count-label');
    if (countLabel) countLabel.textContent = `${thisWeek.length} reports this week`;

    // Preview cards — top 3 hottest
    const container = document.getElementById('home-reports-preview');
    if (!container) return;

    const limit   = BajaAuth.plan.reportLimit || 999;
    const preview = visible
      .sort((a, b) => {
        const rOrder = { hot: 0, good: 1, slow: 2 };
        const rDiff  = (rOrder[a.rating] || 1) - (rOrder[b.rating] || 1);
        if (rDiff !== 0) return rDiff;
        return new Date(b.date) - new Date(a.date);
      })
      .slice(0, Math.min(3, limit));

    if (!preview.length) {
      container.innerHTML = '<div class="empty-state"><p>No reports available.</p></div>';
      return;
    }

    container.innerHTML = preview.map(r => buildPreviewCard(r)).join('');

    // CTA button
    const browseCta = document.getElementById('home-browse-cta');
    if (browseCta) {
      const btn = browseCta.querySelector('[data-screen="reports"]');
      if (btn) {
        btn.onclick = () => {
          switchScreen('reports');
          renderReportsScreen();
        };
      }
    }

    // If free, show lock wall beneath preview
    if (!BajaAuth.can('canSeeLiveReports')) {
      container.insertAdjacentHTML('beforeend', `
        <div class="home-preview-lock">
          <div class="home-preview-lock-text">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Reports delayed ${BajaAuth.plan.delayedDays} days on Free
          </div>
          <button class="home-preview-lock-btn" data-open-upgrade>Unlock Live</button>
        </div>`);
    }
  }

  // Compact preview card for home screen
  function buildPreviewCard(r) {
    const zoneInfo  = ZONES[r.zone] || { name: r.zone, coast: '' };
    const primary   = r.species[0];
    const spInfo    = SPECIES_INFO[primary] || {};
    const spName    = spInfo.name || primary;
    const extraCount = r.species.length - 1;
    const relTime   = relativeTime(r.date);
    const ratingLabels = { hot: 'Hot', good: 'Good', slow: 'Slow' };

    return `
      <div class="prc prc--${r.rating}" onclick="(function(){window._goReports && window._goReports()})()">
        ${spInfo.img ? `<img class="prc-img" src="${spInfo.img}" alt="${escapeHtml(spName)}" loading="lazy">` : ''}
        <div class="prc-body">
          <div class="prc-top">
            <span class="prc-species">${escapeHtml(spName)}${extraCount > 0 ? ` +${extraCount}` : ''}</span>
            <span class="prc-badge prc-badge--${r.rating}">${ratingLabels[r.rating] || r.rating}</span>
          </div>
          <div class="prc-meta">
            <span class="prc-zone">${escapeHtml(zoneInfo.name)}</span>
            <span class="prc-dot">·</span>
            <span class="prc-time">${relTime}</span>
            ${r.captain ? `<span class="prc-dot">·</span><span class="prc-captain">Capt. ${escapeHtml(r.captain.replace(/Capit[aá]n\s*/i, ''))}</span>` : ''}
          </div>
          ${r.count ? `<div class="prc-count">${r.count} fish</div>` : ''}
        </div>
      </div>`;
  }

  function relativeTime(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    const now = new Date();
    const days = Math.round((now - d) / 86400000);
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7)  return `${days}d ago`;
    return formatDate(dateStr);
  }

  // ─── Reports Intelligence Browser ────────────────────────────────────────

  let rptMode        = 'now';   // now | hot | zones | captains
  let rptCoastFilter = 'all';

  function renderReportsScreen() {
    // Update header
    const liveLabel = document.getElementById('rpt-live-label');
    const subLine   = document.getElementById('rpt-sub-line');
    if (liveLabel) liveLabel.textContent = BajaAuth.can('canSeeLiveReports') ? 'Live Reports' : `${BajaAuth.plan.delayedDays}-Day Delayed`;
    if (subLine) {
      const visible = getVisibleReports();
      const oneWeek = new Date(); oneWeek.setDate(oneWeek.getDate() - 7);
      const cnt = visible.filter(r => new Date(r.date) >= oneWeek).length;
      subLine.textContent = `${cnt} reports this week · ${BajaAuth.plan.name} tier`;
    }

    renderRptIntelBar();
    renderRptContent();
  }

  function renderRptIntelBar() {
    const bar = document.getElementById('rpt-intel-bar');
    if (!bar) return;
    if (!BajaAuth.can('canSeeLiveReports')) {
      bar.innerHTML = `
        <div class="rpt-intel-locked">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Live intelligence locked — <button class="rpt-intel-upgrade" data-open-upgrade>Upgrade</button>
        </div>`;
      return;
    }
    const reports = getVisibleReports();
    const oneWeek = new Date(); oneWeek.setDate(oneWeek.getDate() - 7);
    const week    = reports.filter(r => new Date(r.date) >= oneWeek);
    const insights = buildIntelSummary(week.length ? week : reports.slice(0, 20));
    bar.innerHTML = insights.map(i =>
      `<div class="rpt-intel-item"><span>${i.icon}</span><span>${escapeHtml(i.text)}</span></div>`
    ).join('');
  }

  function renderRptContent() {
    const container = document.getElementById('rpt-content');
    if (!container) return;

    const allVisible = getVisibleReports();
    const limit = BajaAuth.plan.reportLimit || 999;

    // Coast filter
    let reports = rptCoastFilter === 'all'
      ? allVisible
      : allVisible.filter(r => (ZONES[r.zone] || {}).coast === rptCoastFilter);

    if (!BajaAuth.can('canSeeLiveReports')) {
      container.innerHTML = buildRptLockWall(
        `Reports Delayed ${BajaAuth.plan.delayedDays} Days`,
        `You're seeing ${BajaAuth.plan.delayedDays}-day-old data. Upgrade to Scout or above for live fishing intelligence.`,
        'Unlock Live Reports'
      );
      bindUpgradeButtons(container);
      return;
    }

    switch (rptMode) {
      case 'now':      renderRptNow(container, reports, limit);      break;
      case 'hot':      renderRptHot(container, reports, limit);      break;
      case 'zones':    renderRptZones(container, reports, limit);    break;
    }
  }

  // ── Mode: Now — grouped by recency ──
  function renderRptNow(container, reports, limit) {
    reports = reports.sort((a, b) => new Date(b.date) - new Date(a.date));
    const shown = reports.slice(0, limit);
    const hidden = Math.max(0, reports.length - limit);

    const today     = new Date(); today.setHours(0,0,0,0);
    const yesterday = new Date(today); yesterday.setDate(yesterday.getDate() - 1);
    const lastWeek  = new Date(today); lastWeek.setDate(lastWeek.getDate() - 7);

    const groups = [
      { label: 'Today',      icon: DOT('green'), items: shown.filter(r => new Date(r.date+'T00:00:00') >= today) },
      { label: 'Yesterday',  icon: DOT('amber'), items: shown.filter(r => { const d = new Date(r.date+'T00:00:00'); return d >= yesterday && d < today; }) },
      { label: 'This Week',  icon: ICON('calendar'), items: shown.filter(r => { const d = new Date(r.date+'T00:00:00'); return d >= lastWeek && d < yesterday; }) },
      { label: 'Earlier',    icon: ICON('calendar'),  items: shown.filter(r => new Date(r.date+'T00:00:00') < lastWeek) },
    ].filter(g => g.items.length);

    container.innerHTML = groups.map(g => buildRptSection(g.label, g.icon, g.items)).join('')
      + (hidden > 0 ? buildRptUpgradeRow(hidden) : '');
    bindUpgradeButtons(container);
  }

  // ── Mode: Hot — grouped by rating then species ──
  function renderRptHot(container, reports, limit) {
    const hot  = reports.filter(r => r.rating === 'hot');
    const good = reports.filter(r => r.rating === 'good');
    const slow = reports.filter(r => r.rating === 'slow');

    const shown  = reports.slice(0, limit);
    const hidden = Math.max(0, reports.length - limit);

    // Top species breakdown
    const spCounts = {};
    shown.forEach(r => r.species.forEach(s => spCounts[s] = (spCounts[s]||0)+1));
    const topSp = Object.entries(spCounts).sort((a,b)=>b[1]-a[1]).slice(0,3);

    let html = '';
    if (hot.length) html += buildRptSection('Wide Open Bites', ICON('flame','ow-ico--gold'), hot.sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0, Math.min(hot.length, limit)));
    if (good.length) html += buildRptSection('Good Action', '✓', good.sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0, Math.min(good.length, Math.max(0, limit - hot.length))));
    if (topSp.length && BajaAuth.can('canSeePremiumInsights')) {
      html += `<div class="rpt-section-header"><span class="rpt-section-icon">${ICON('target')}</span><span class="rpt-section-label">Species Momentum</span></div>
        <div class="rpt-species-chips">${topSp.map(([s,n])=>`<div class="rpt-species-chip"><img src="${(SPECIES_INFO[s]||{}).img||''}" alt=""><span>${(SPECIES_INFO[s]||{name:s}).name}</span><span class="rpt-species-chip-count">${n}</span></div>`).join('')}</div>`;
    }
    html += hidden > 0 ? buildRptUpgradeRow(hidden) : '';
    container.innerHTML = html;
    bindUpgradeButtons(container);
  }

  // ── Mode: Zones — grouped by coast then zone ──
  function renderRptZones(container, reports, limit) {
    const pacific = reports.filter(r => (ZONES[r.zone]||{}).coast === 'Pacific');
    const cortez  = reports.filter(r => (ZONES[r.zone]||{}).coast === 'Sea of Cortez');
    const shown   = reports.slice(0, limit);
    const hidden  = Math.max(0, reports.length - limit);

    // Group shown by zone
    const byZone = {};
    shown.forEach(r => {
      if (!byZone[r.zone]) byZone[r.zone] = [];
      byZone[r.zone].push(r);
    });

    const pacZones = Object.entries(byZone).filter(([z]) => (ZONES[z]||{}).coast === 'Pacific');
    const corZones = Object.entries(byZone).filter(([z]) => (ZONES[z]||{}).coast === 'Sea of Cortez');

    let html = '';
    if (pacZones.length) {
      html += `<div class="rpt-coast-header rpt-coast-header--pac"><span class="coast-dot" style="background:#1a6ea8;flex-shrink:0"></span> Pacific Coast · ${pacific.length} reports</div>`;
      html += pacZones.map(([zone, rpts]) => {
        const zInfo = ZONES[zone] || { name: zone };
        return buildRptSection(zInfo.name, ICON('pin'), rpts.slice(0, 3), true);
      }).join('');
    }
    if (corZones.length) {
      html += `<div class="rpt-coast-header rpt-coast-header--cor"><span class="coast-dot" style="background:#c94040;flex-shrink:0"></span> Sea of Cortez · ${cortez.length} reports</div>`;
      html += corZones.map(([zone, rpts]) => {
        const zInfo = ZONES[zone] || { name: zone };
        return buildRptSection(zInfo.name, ICON('pin'), rpts.slice(0, 3), true);
      }).join('');
    }
    html += hidden > 0 ? buildRptUpgradeRow(hidden) : '';
    container.innerHTML = html || '<div class="empty-state"><p>No reports match this filter.</p></div>';
    bindUpgradeButtons(container);
  }

  // ── Mode: Captains — grouped by captain performance ──
  function renderRptCaptains(container, reports, limit) {
    if (!BajaAuth.can('canSeeTopCaptains')) {
      container.innerHTML = buildRptLockWall('Captain Intelligence', 'See which captains are producing the most this week. Pro and above.', 'Unlock Captain Intel');
      bindUpgradeButtons(container);
      return;
    }

    const byCapt = {};
    reports.filter(r => r.captain).forEach(r => {
      if (!byCapt[r.captain]) byCapt[r.captain] = [];
      byCapt[r.captain].push(r);
    });

    const ranked = Object.entries(byCapt)
      .sort((a, b) => {
        const hotA = a[1].filter(r => r.rating === 'hot').length;
        const hotB = b[1].filter(r => r.rating === 'hot').length;
        return (hotB * 2 + b[1].length) - (hotA * 2 + a[1].length);
      })
      .slice(0, 8);

    const shown  = reports.slice(0, limit);
    const hidden = Math.max(0, reports.length - limit);

    let html = `<div class="rpt-section-header"><span class="rpt-section-icon">${ICON('anchor')}</span><span class="rpt-section-label">Captain Rankings This Week</span></div>`;
    html += ranked.map(([captain, rpts], idx) => {
      const hot  = rpts.filter(r => r.rating === 'hot').length;
      const zone = (ZONES[rpts[0]?.zone] || {}).name || '—';
      const cleanName = captain.replace(/Capit[aá]n\s*/i, '');
      return `
        <div class="rpt-captain-row">
          <span class="rpt-captain-rank">${idx + 1}</span>
          <div class="rpt-captain-avatar">${cleanName[0] || '?'}</div>
          <div class="rpt-captain-info">
            <div class="rpt-captain-name">${escapeHtml(captain)}</div>
            <div class="rpt-captain-meta">${zone} · ${rpts.length} trips${hot > 0 ? ` · ${hot} ${ICON('flame','ow-ico--gold')} hot` : ''}</div>
          </div>
          <div class="rpt-captain-streak rpt-captain-streak--${rpts[0]?.rating||'good'}">${rpts.length}</div>
        </div>`;
    }).join('');

    html += hidden > 0 ? buildRptUpgradeRow(hidden) : '';
    container.innerHTML = html;
    bindUpgradeButtons(container);
  }

  // ── Shared section builder ──
  function buildRptSection(label, icon, reports, compact = false) {
    if (!reports.length) return '';
    return `
      <div class="rpt-section-header">
        <span class="rpt-section-icon">${icon}</span>
        <span class="rpt-section-label">${escapeHtml(label)}</span>
        <span class="rpt-section-count">${reports.length}</span>
      </div>
      <div class="rpt-cards">
        ${reports.map(r => compact ? buildRptCardCompact(r) : buildRptCard(r)).join('')}
      </div>`;
  }

  // Bite gauge (§6.3) — tabular fish-count numeral + 3-segment gold/neutral gauge.
  // Keeps the hot/good/slow semantics; segments fill 3/2/1 via CSS modifier class.
  function buildBiteGauge(r) {
    const segs = '<span class="bite-gauge-seg"></span><span class="bite-gauge-seg"></span><span class="bite-gauge-seg"></span>';
    const num  = r.count ? `<span class="bite-gauge-num">${r.count}</span>` : '';
    return `<span class="bite-gauge bite-gauge--${r.rating}" title="${escapeHtml({ hot:'Hot bite', good:'Good action', slow:'Slow' }[r.rating] || r.rating)}">${num}${segs}</span>`;
  }

  function buildRptCard(r) {
    const zoneInfo     = ZONES[r.zone] || { name: r.zone, coast: '' };
    const speciesNames = r.species.map(s => (SPECIES_INFO[s]||{name:s}).name).join(', ');
    const primary      = r.species[0];
    const spInfo       = SPECIES_INFO[primary] || {};
    const metaParts    = [relativeTime(r.date), r.captain ? `Capt. ${escapeHtml(r.captain.replace(/Capit[aá]n\s*/i,''))}` : null, r.count ? `${r.count} fish` : null].filter(Boolean).join(' · ');
    const ratingLabel  = { hot:'Hot', good:'Good', slow:'Slow' }[r.rating] || r.rating;
    return `
      <article class="rpt-card rpt-card--${r.rating}">
        ${spInfo.img ? `<img class="rpt-card-img" src="${spInfo.img}" alt="${escapeHtml(speciesNames)}" loading="lazy">` : ''}
        <div class="rpt-card-body">
          <div class="rpt-card-top">
            <div class="rpt-card-location">${escapeHtml(zoneInfo.name)}<span class="rpt-card-coast">${zoneInfo.coast ? ` · ${zoneInfo.coast}` : ''}</span></div>
            <span class="rpt-card-badge rpt-card-badge--${r.rating}">${ratingLabel}</span>
          </div>
          ${buildBiteGauge(r)}
          <div class="rpt-card-species">${escapeHtml(speciesNames)}</div>
          <div class="rpt-card-meta">${metaParts}</div>
          <p class="rpt-card-notes">${escapeHtml(r.notes.length > 120 ? r.notes.slice(0, 118) + '…' : r.notes)}</p>
          ${r.bait ? `<div class="rpt-card-bait">${ICON('hook')} ${escapeHtml(r.bait)}</div>` : ''}
        </div>
      </article>`;
  }

  function buildRptCardCompact(r) {
    const zoneInfo   = ZONES[r.zone] || { name: r.zone };
    const speciesNames = r.species.map(s => (SPECIES_INFO[s]||{name:s}).name).join(', ');
    const ratingLabel  = { hot:'Hot', good:'Good', slow:'Slow' }[r.rating] || r.rating;
    return `
      <div class="rpt-card-compact rpt-card-compact--${r.rating}">
        <div class="rpt-card-compact-left">
          <span class="rpt-card-compact-species">${escapeHtml(speciesNames)}</span>
          <span class="rpt-card-compact-zone">${escapeHtml(zoneInfo.name)} · ${relativeTime(r.date)}</span>
        </div>
        <span class="rpt-card-badge rpt-card-badge--${r.rating}">${ratingLabel}</span>
      </div>`;
  }

  function buildRptLockWall(title, body, cta) {
    return `
      <div class="rpt-lock-wall">
        <div class="rlw-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
        <h3 class="rlw-title">${escapeHtml(title)}</h3>
        <p class="rlw-body">${escapeHtml(body)}</p>
        <button class="rlw-btn" data-open-upgrade>${escapeHtml(cta)}</button>
      </div>`;
  }

  function buildRptUpgradeRow(hiddenCount) {
    const nextTier = BajaAuth.tier === 'free' ? 'Scout' : BajaAuth.tier === 'scout' ? 'Pro' : 'Unlimited';
    return `
      <div class="rpt-upgrade-row">
        <span>+${hiddenCount} more reports</span>
        <button class="rpt-upgrade-btn" data-open-upgrade>Upgrade to ${nextTier} →</button>
      </div>`;
  }

  // ── Init reports screen controls ──
  function initReportsScreen() {
    // Mode tabs
    document.querySelectorAll('.rpt-mode').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.rpt-mode').forEach(b => b.classList.remove('rpt-mode--active'));
        btn.classList.add('rpt-mode--active');
        rptMode = btn.dataset.rptMode;
        renderRptContent();
      });
    });

    // Coast filter pills
    document.querySelectorAll('[data-rpt-coast]').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('[data-rpt-coast]').forEach(p => p.classList.remove('rpt-filter-pill--active'));
        pill.classList.add('rpt-filter-pill--active');
        rptCoastFilter = pill.dataset.rptCoast;
        renderRptContent();
      });
    });
  }

  // ── Legacy renderReports (referenced elsewhere in code) ──
  // Kept as alias — routes to preview on home or full browser depending on context
  function renderReports() {
    renderHomePreview();
    // Also refresh reports screen if it's active
    if (activeScreen === 'reports') renderReportsScreen();
  }


  function updateStats() {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const recent = getVisibleReports().filter(r => new Date(r.date) >= oneWeekAgo);
    const allSpecies = new Set();
    const activeZones = new Set();
    recent.forEach(r => { r.species.forEach(s => allSpecies.add(s)); activeZones.add(r.zone); });

    const elR = document.getElementById('stat-reports');
    const elS = document.getElementById('stat-species');
    const elZ = document.getElementById('stat-zones');
    if (elR) elR.textContent = recent.length;
    if (elS) elS.textContent = allSpecies.size;
    if (elZ) elZ.textContent = activeZones.size;
  }

  function initReportFilters() {
    // home-filter-pills removed from home screen — no-op now
    // zone/species selects are hidden stubs kept for JS compatibility
  }

  // ═══════════════════════════════════════════
  // 9. CAPTAINS
  // ═══════════════════════════════════════════

  function getReportsThisWeek(captainName) {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const key = captainName.replace(/Capit[aá]n\s*/i, '').split(' ')[0].toLowerCase();
    return REPORTS.filter(r =>
      r.captain && r.captain.toLowerCase().includes(key) && new Date(r.date) >= oneWeekAgo
    ).length;
  }

  function buildCaptainCard(c, cardIndex) {
    const zoneInfo   = ZONES[c.zone] || { name: c.zone, coast: '' };
    const initials   = c.name.replace(/Capit[aá]n\s*/i, '').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    const isTopRated = c.rating >= 5;
    const reportsWk  = getReportsThisWeek(c.name);
    const unlocked   = BajaAuth.can('canSeeAllCaptains') || cardIndex < BajaAuth.plan.captainSlots;
    const stars      = ICON('star','ow-ico--fill ow-ico--gold').repeat(c.rating) + ICON('star').repeat(5 - c.rating);
    const isOnStreak = reportsWk >= 2;

    const maxChips = 3;
    const visible  = c.species.slice(0, maxChips);
    const extra    = c.species.length - maxChips;
    const chipsHTML = visible.map(s => `<span class="cap-species-chip">${escapeHtml(s)}</span>`).join('')
      + (extra > 0 ? `<span class="cap-species-chip cap-species-chip--more">+${extra}</span>` : '');

    // Trust row (§6.4) — derived from existing captain data (no new data fields):
    // Verified (rating ≥ 4), the one gold "responds fast" signal (WhatsApp on),
    // and a rebook chip scaled off rating. Keeps gold scarce to a single chip.
    const trustChips = [];
    if (c.rating >= 4) trustChips.push('<span class="cap-trust-chip cap-trust-chip--verified">✓ Verified</span>');
    if (c.whatsapp)    trustChips.push(`<span class="cap-trust-chip cap-trust-chip--fast">${ICON('zap')} Responds fast</span>`);
    trustChips.push(`<span class="cap-trust-chip cap-trust-chip--rebook">${Math.min(99, 80 + c.rating * 3)}% rebook</span>`);
    const trustRowHTML = `<div class="cap-trust-row">${trustChips.join('')}</div>`;

    let actionsHTML;
    if (unlocked) {
      actionsHTML = `
        <div class="cap-contact-row">
          <span class="cap-phone">${escapeHtml(c.phone)}</span>
        </div>
        <div class="cap-actions">
          <a href="tel:${c.phone}" class="cap-btn cap-btn--call">Call</a>
          ${c.whatsapp ? `<a href="https://wa.me/${c.phone.replace(/\D/g,'')}" class="cap-btn cap-btn--wa" target="_blank" rel="noopener">WhatsApp</a>` : ''}
          <button class="cap-btn cap-btn--reports" data-screen="reports">Reports</button>
        </div>`;
    } else {
      actionsHTML = `
        <div class="cap-contact-row">
          <span class="cap-phone-blur">+52 ••• ••• ••••</span>
        </div>
        <div class="cap-actions">
          <button class="cap-btn cap-btn--locked" data-open-upgrade>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Unlock Contact
          </button>
          <button class="cap-btn cap-btn--reports" data-screen="reports">Reports</button>
        </div>`;
    }

    return `
      <div class="cap-card${isTopRated ? ' cap-card--top' : ''}${!unlocked ? ' cap-card--locked' : ''}">
        <div class="cap-card-top">
          <div class="cap-avatar-wrap">
            <div class="cap-avatar${isTopRated ? ' cap-avatar--gold' : ''}">${initials}</div>
            ${c.rating >= 4 ? '<div class="cap-verified">✓</div>' : ''}
          </div>
          <div class="cap-identity">
            <div class="cap-name">${escapeHtml(c.name)}</div>
            <div class="cap-region">${escapeHtml(zoneInfo.name)} · ${zoneInfo.coast}</div>
            <div class="cap-stars">${stars} ${c.rating}.0</div>
          </div>
          <div class="cap-card-badges">
            ${isOnStreak ? `<div class="cap-streak-badge">${ICON('flame','ow-ico--gold')} ${reportsWk}/wk</div>` : ''}
            ${!unlocked ? `<div class="cap-lock-badge"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Pro</div>` : ''}
          </div>
        </div>
        <div class="cap-species-row">${chipsHTML}</div>
        ${trustRowHTML}
        <div class="cap-metrics">
          <div class="cap-metric"><span class="cap-metric-val">${c.rating}.0</span><span class="cap-metric-key">Rating</span></div>
          <div class="cap-metric-sep"></div>
          <div class="cap-metric"><span class="cap-metric-val">${c.years}</span><span class="cap-metric-key">Yrs Exp</span></div>
          <div class="cap-metric-sep"></div>
          <div class="cap-metric ${reportsWk > 0 ? 'cap-metric--active' : ''}">
            <span class="cap-metric-val">${reportsWk > 0 ? reportsWk : '—'}</span>
            <span class="cap-metric-key">Reports/wk</span>
          </div>
        </div>
        <p class="cap-bio${!unlocked ? ' cap-bio--blur' : ''}">${escapeHtml(c.bio)}</p>
        ${actionsHTML}
      </div>
    `;
  }


  // ═══════════════════════════════════════════
  // CAPTAIN PROFILE SYSTEM
  // ═══════════════════════════════════════════

  const CAPTAIN_PROFILE_DEFAULTS = {
    'captain@bajafish.test': {
      name:          'Capitán Ernesto "Neto" Valdez',
      headline:      'Yellowtail & Dorado Specialist · 22 Years on the Sea of Cortez',
      homePort:      'Loreto',
      zone:          'loreto',
      coast:         'Sea of Cortez',
      yearsExp:      22,
      languages:     ['Spanish', 'English'],
      rating:        4.9,
      totalTrips:    847,
      tripsThisYear: 63,
      verified:      true,
      responseTime:  'Under 2 hours',
      availability:  'accepting',
      specialtySpecies: ['yellowtail', 'dorado', 'roosterfish', 'amberjack'],
      fishingStyles: ['Live bait mastery', 'Iron jig technique', 'Drift fishing', 'Kite fishing'],
      tripStyles:    ['Trophy hunting', 'Mixed action', 'Light tackle'],
      bestMonths:    'March – July (Yellowtail), June – November (Dorado)',
      tackleStrength: ['light', 'medium'],
      boatType:      '22-ft Panga (Super Panga)',
      boatDesc:      'Custom-built fiberglass panga, twin 115hp Yamahas, live bait tank, fish finder, Garmin chartplotter, safety kit, shade cover.',
      maxPassengers: 4,
      rateFrom:      320,
      rateCurrency:  'USD',
      tripDurations: ['Half day (4–5 hrs)', 'Full day (7–8 hrs)'],
      whatsIncluded: ['Fuel', 'Tackle & bait', 'Ice & cooler', 'Licenses', 'Light snacks', 'Cold water'],
      anglersBring:  ['Food & drinks for full-day trips', 'Sunscreen', 'Polarized sunglasses', 'Camera'],
      bio:           "Born in Loreto, raised on the water. I've been running pangas since I was 16 — first with my father, then on my own. I know every rock, current, and feeding window from Isla Coronado down to Agua Verde. My speciality is yellowtail on live sardina in the spring, and dorado in the blue water come summer. I don't put my clients on a boat until conditions are right. Safety first, fish second, good time always.",
      whyBook:       'Local knowledge nobody else has. 22 years of reading this specific water. No shortcuts, no overcrowded spots. I take max 4 anglers so everyone gets personalized attention and room to fight fish.',
      catchHighlights: [
        { species: 'Yellowtail', weight: '38 lbs', zone: 'Isla Coronado', date: '2026-04-10' },
        { species: 'Dorado',     weight: '42 lbs', zone: 'Outer Banks',   date: '2026-03-22' },
        { species: 'Amberjack',  weight: '55 lbs', zone: 'Loreto Bay',    date: '2026-02-14' },
      ],
    },
  };

  // B2: neutral default for brand-new captains — unknown emails must NOT inherit
  // the demo captain's rating/trips/phone/bio. Signup persists only a small subset;
  // everything else stays empty/zeroed until the captain fills it in.
  const BLANK_CAPTAIN = {
    name:          '',
    headline:      '',
    homePort:      '',
    zone:          'loreto',
    coast:         '',
    yearsExp:      0,
    languages:     [],
    rating:        0,
    totalTrips:    0,
    tripsThisYear: 0,
    verified:      false,
    responseTime:  '—',
    availability:  'accepting',
    specialtySpecies: [],
    fishingStyles: [],
    tripStyles:    [],
    bestMonths:    '',
    tackleStrength: [],
    boatType:      '',
    boatDesc:      '',
    maxPassengers: 4,
    rateFrom:      0,
    rateCurrency:  'USD',
    tripDurations: [],
    whatsIncluded: [],
    anglersBring:  [],
    bio:           '',
    whyBook:       '',
    catchHighlights: [],
  };

  function getCaptainProfile(email) {
    const base  = CAPTAIN_PROFILE_DEFAULTS[email] || BLANK_CAPTAIN;
    const saved = localStorage.getItem('baja_captain_profile_' + email);
    if (!saved) return { ...base };
    try { return { ...base, ...JSON.parse(saved) }; }
    catch { return { ...base }; }
  }

  function saveCaptainProfile(email, edits) {
    const existing = JSON.parse(localStorage.getItem('baja_captain_profile_' + email) || '{}');
    localStorage.setItem('baja_captain_profile_' + email, JSON.stringify({ ...existing, ...edits }));
  }

  let capDashTab = 'overview';

  // ── Captain Leads data system ──────────────────────────────────────
  const SEED_LEADS = [
    {
      id: 'lead-001', anglerName: 'Mike Torres', email: 'mtorres@email.com',
      species: 'Yellowtail', date: '2026-05-10', partySize: 3,
      budget: '$350–$400', message: 'Looking for early morning yellowtail run near Isla Coronado. Have fished before, know how to fight fish.',
      zone: 'loreto', status: 'new', source: 'BajaFish', ts: Date.now() - 86400000,
    },
    {
      id: 'lead-002', anglerName: 'Sandra Kim', email: 'skim@outlook.com',
      species: 'Dorado', date: '2026-05-18', partySize: 2,
      budget: '$300', message: 'First Baja trip with my husband. We want dorado — any size. Can do half or full day.',
      zone: 'loreto', status: 'replied', source: 'BajaFish', ts: Date.now() - 172800000,
    },
    {
      id: 'lead-003', anglerName: 'Dave Ramirez', email: 'dave.r@gmail.com',
      species: 'Roosterfish', date: '2026-05-25', partySize: 4,
      budget: '$400–$450', message: 'Group of 4 targeting roosterfish on artificials. Tournament fishermen. Looking for a captain who knows light tackle.',
      zone: 'loreto', status: 'new', source: 'BajaFish', ts: Date.now() - 3600000,
    },
  ];

  function getCaptainLeads(email) {
    try {
      const key = 'baja_cap_leads_' + email;
      const stored = JSON.parse(localStorage.getItem(key) || 'null');
      if (stored) return stored;
      // First load — seed mock leads for test captain
      if (email === 'captain@bajafish.test') {
        localStorage.setItem(key, JSON.stringify(SEED_LEADS));
        return SEED_LEADS;
      }
      return [];
    } catch { return []; }
  }

  function saveCaptainLeads(email, leads) {
    try { localStorage.setItem('baja_cap_leads_' + email, JSON.stringify(leads)); } catch {}
  }


  function renderCaptainDashboard() {
    const el = document.getElementById('captain-dash-content');
    if (!el) return;
    const email       = BajaAuth.email || 'captain@bajafish.test';
    const profile     = getCaptainProfile(email);
    const captainZone = profile.zone || 'loreto';
    const hotZones    = getHotspotRankings().slice(0, 3);
    const reports     = REPORTS.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    const spCounts    = {};
    reports.slice(0, 30).forEach(r => r.species.forEach(s => spCounts[s] = (spCounts[s]||0)+1));
    const topSpecies  = Object.entries(spCounts).sort((a,b)=>b[1]-a[1]).slice(0,4);
    const availBadge  = { accepting: DOT('green') + ' Accepting Trips', limited: DOT('amber') + ' Limited Availability', closed: DOT('red') + ' Not Accepting' };
    const leads       = getCaptainLeads(email);
    const newLeads    = leads.filter(l => l.status === 'new').length;
    const topSp0      = topSpecies[0] ? (SPECIES_INFO[topSpecies[0][0]] || { name: topSpecies[0][0] }).name.split(' ')[0] : '—';

    el.innerHTML = `
      <div class="cdash-header">
        <div class="cdash-avatar">${profile.name[0]}</div>
        <div class="cdash-header-info">
          <div class="cdash-name">${escapeHtml(profile.name)}</div>
          <div class="cdash-headline">${escapeHtml(profile.headline)}</div>
          <div class="cdash-meta-row">
            <span class="cdash-port">${ICON('pin')} ${escapeHtml(profile.homePort)}</span>
            ${profile.verified ? '<span class="cdash-verified-badge">✓ Verified</span>' : ''}
          </div>
          <div class="cdash-avail-badge cdash-avail--${profile.availability}">${availBadge[profile.availability] || profile.availability}</div>
        </div>
      </div>
      <div class="cdash-stats-strip">
        <div class="cdash-stat"><span class="cdash-stat-num">${profile.rating}</span><span class="cdash-stat-lbl">Rating</span></div>
        <div class="cdash-stat-div"></div>
        <div class="cdash-stat"><span class="cdash-stat-num">${profile.totalTrips}</span><span class="cdash-stat-lbl">Trips</span></div>
        <div class="cdash-stat-div"></div>
        <div class="cdash-stat"><span class="cdash-stat-num">${profile.yearsExp}yr</span><span class="cdash-stat-lbl">Exp</span></div>
        <div class="cdash-stat-div"></div>
        <div class="cdash-stat"><span class="cdash-stat-num">$${profile.rateFrom}</span><span class="cdash-stat-lbl">From</span></div>
      </div>
      <div class="cdash-today-strip">
        <div class="cdash-today-item ${newLeads > 0 ? 'cdash-today-item--alert' : ''}">
          <span class="cdash-today-num">${newLeads}</span>
          <span class="cdash-today-lbl">New Leads</span>
        </div>
        <div class="cdash-today-item">
          <span class="cdash-today-num">${leads.filter(l=>l.status==='booked').length}</span>
          <span class="cdash-today-lbl">Booked</span>
        </div>
        <div class="cdash-today-item">
          <span class="cdash-today-num">${hotZones.length}</span>
          <span class="cdash-today-lbl">Hot Zones</span>
        </div>
        <div class="cdash-today-item">
          <span class="cdash-today-num">${topSp0}</span>
          <span class="cdash-today-lbl">#1 Biting</span>
        </div>
      </div>
      <div class="cdash-section cdash-wx-section" id="cap-dash-weather-widget" data-zone="${escapeHtml(captainZone)}">
        ${buildCaptainWeatherWidget(captainZone)}
      </div>
      <div class="cdash-tabs">
        <button class="cdash-tab ${capDashTab==='overview'?'cdash-tab--active':''}" data-cdtab="overview">Overview</button>
        <button class="cdash-tab ${capDashTab==='intel'?'cdash-tab--active':''}" data-cdtab="intel">Intel</button>
        <button class="cdash-tab ${capDashTab==='leads'?'cdash-tab--active':''}" data-cdtab="leads">Leads${newLeads > 0 ? ` <span class="cdash-tab-badge">${newLeads}</span>` : ''}</button>
        <button class="cdash-tab ${capDashTab==='profile'?'cdash-tab--active':''}" data-cdtab="profile">My Profile</button>
      </div>
      <div id="cdash-tab-content" class="cdash-tab-content">
        ${renderCdashTab(capDashTab, profile, hotZones, topSpecies, reports, leads)}
      </div>`;

    el.querySelectorAll('.cdash-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        capDashTab = btn.dataset.cdtab;
        renderCaptainDashboard();
        document.getElementById('screen-captain-dash').scrollTop = 0;
      });
    });
    el.querySelector('#cdash-profile-save-btn')?.addEventListener('click', () => saveCdashProfile(email));
    el.querySelector('#cdash-avail-select')?.addEventListener('change', e => {
      saveCaptainProfile(email, { availability: e.target.value });
      renderCaptainDashboard();
    });
    el.querySelector('#cdash-species-grid')?.addEventListener('click', e => {
      const chip = e.target.closest('.cdash-species-chip');
      if (!chip) return;
      const selected = el.querySelectorAll('.cdash-species-chip--on');
      if (!chip.classList.contains('cdash-species-chip--on') && selected.length >= 5) return;
      chip.classList.toggle('cdash-species-chip--on');
      const isOn = chip.classList.contains('cdash-species-chip--on');
      const existing = chip.querySelector('.cdash-species-chip-check');
      if (isOn && !existing) chip.insertAdjacentHTML('beforeend', '<span class="cdash-species-chip-check">\u2713</span>');
      if (!isOn && existing) existing.remove();
      const note = el.querySelector('#cdash-species-note');
      if (note) note.textContent = `${el.querySelectorAll('.cdash-species-chip--on').length}/5 selected`;
    });
    el.querySelectorAll('[data-lead-id]').forEach(sel => {
      sel.addEventListener('change', () => {
        const leads2 = getCaptainLeads(email);
        const lead = leads2.find(l => l.id === sel.dataset.leadId);
        if (lead) { lead.status = sel.value; saveCaptainLeads(email, leads2); }
        renderCaptainDashboard();
      });
    });
    const wxWidget = el.querySelector('#cap-dash-weather-widget');
    if (wxWidget) wireCaptainWeatherSelector(wxWidget);
  }


  function renderCdashTab(tab, profile, hotZones, topSpecies, reports, leads) {
    switch (tab) {
      case 'overview': return renderCdashOverview(profile, reports);
      case 'intel':    return renderCdashIntel(hotZones, topSpecies);
      case 'leads':    return renderCdashLeads(profile, leads || []);
      case 'profile':  return renderCdashProfile(profile);
      default:         return '';
    }
  }

  function renderCdashOverview(profile, reports) {
    const recent = reports.slice(0, 4);
    const highlights = profile.catchHighlights || [];
    return `
      <div class="cdash-section">
        <div class="cdash-section-head">Your Public Listing <span class="cdash-edit-hint">Seen by Pro+ anglers</span></div>
        <div class="cdash-preview-card cap-card cap-card--top">
          <div class="cap-card-top">
            <div class="cap-avatar-wrap">
              <div class="cap-avatar cap-avatar--gold">${profile.name.replace(/Capit[aá]n\s*/i,'').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase()}</div>
              ${profile.verified ? '<div class="cap-verified">✓</div>' : ''}
            </div>
            <div class="cap-identity">
              <div class="cap-name">${escapeHtml(profile.name)}</div>
              <div class="cap-region">${escapeHtml(profile.homePort)} · ${escapeHtml(profile.coast)}</div>
              <div class="cap-stars">${ICON('star','ow-ico--fill ow-ico--gold').repeat(Math.round(profile.rating))}${ICON('star').repeat(5-Math.round(profile.rating))}</div>
            </div>
            <div class="cap-card-badges">
              <div class="cap-streak-badge">${ICON('flame','ow-ico--gold')} ${profile.tripsThisYear}/yr</div>
            </div>
          </div>
          <div class="cap-species-row">
            ${profile.specialtySpecies.slice(0,3).map(s => `<span class="cap-species-chip">${escapeHtml((SPECIES_INFO[s]||{name:s}).name)}</span>`).join('')}
            ${profile.specialtySpecies.length > 3 ? `<span class="cap-species-chip cap-species-chip--more">+${profile.specialtySpecies.length-3}</span>` : ''}
          </div>
          <div class="cap-metrics">
            <div class="cap-metric"><span class="cap-metric-val">${profile.rating}</span><span class="cap-metric-key">Rating</span></div>
            <div class="cap-metric-sep"></div>
            <div class="cap-metric"><span class="cap-metric-val">${profile.yearsExp}</span><span class="cap-metric-key">Yrs Exp</span></div>
            <div class="cap-metric-sep"></div>
            <div class="cap-metric cap-metric--active"><span class="cap-metric-val">$${profile.rateFrom}</span><span class="cap-metric-key">From</span></div>
          </div>
          <p class="cap-bio">${escapeHtml(profile.bio.length > 140 ? profile.bio.slice(0,138)+'…' : profile.bio)}</p>
          <div class="cap-contact-row"><span class="cap-phone">+52 (613) 100-4427</span></div>
          <div class="cap-actions">
            <a class="cap-btn cap-btn--call">Call</a>
            <a class="cap-btn cap-btn--wa">WhatsApp</a>
            <button class="cap-btn cap-btn--reports">Reports</button>
          </div>
        </div>
      </div>
      <div class="cdash-section">
        <div class="cdash-section-head">Recent Catch Highlights</div>
        ${highlights.map(h => `
          <div class="cdash-highlight-row">
            <div class="cdash-highlight-species">${escapeHtml(h.species)}</div>
            <div class="cdash-highlight-weight">${escapeHtml(h.weight)}</div>
            <div class="cdash-highlight-meta">${escapeHtml(h.zone)} · ${relativeTime(h.date)}</div>
          </div>`).join('')}
      </div>
      <div class="cdash-section">
        <div class="cdash-section-head">Recent Reports Near ${escapeHtml(profile.homePort)}</div>
        ${recent.map(r => {
          const zn = (ZONES[r.zone]||{}).name || r.zone;
          const sp = r.species.map(s=>(SPECIES_INFO[s]||{name:s}).name).join(', ');
          const rm = {hot:ICON('flame','ow-ico--gold'),good:'✓',slow:'—'};
          return `<div class="cap-dash-report-row">
            <span class="cap-dash-report-rating">${rm[r.rating]||''}</span>
            <div class="cap-dash-report-info">
              <div class="cap-dash-report-species">${escapeHtml(sp)}</div>
              <div class="cap-dash-report-meta">${escapeHtml(zn)} · ${relativeTime(r.date)}</div>
            </div></div>`;
        }).join('')}
      </div>`;
  }

  function renderCdashIntel(hotZones, topSpecies) {
    // Conditions block — use live weather, reads zone from top widget or captain default
    const wxWidget  = document.getElementById('cap-dash-weather-widget');
    const intelZone = (wxWidget && wxWidget.dataset.zone) || 'loreto';
    const live      = zoneConditions[intelZone];
    const stub      = getZoneWeather(intelZone);
    const zone      = ZONES[intelZone] || { name: intelZone };
    const isLive    = !!live;
    const liveTag   = isLive
      ? '<span class="wx-live-badge">&#9679; Live</span>'
      : (weatherLoading
          ? '<span class="wx-loading-badge"><span class="wx-spinner"></span></span>'
          : '<span class="wx-stub-badge">Est.</span>');
    const w = {
      waterTemp: live && live.waterTemp  || stub.waterTemp,
      airTemp:   live && live.airTemp    || stub.feelsLike,
      wind:      live && live.wind       || '—',
      swell:     live && live.swell      || '—',
      sky:       live && live.skyDesc    || stub.sky,
      humidity:  live && live.humidity   || stub.humidity,
      moon:      moonInfo && moonInfo.label || '—',
    };

    return `
      <div class="cdash-section">
        <div class="cdash-section-head">
          \u{1F4E1} Area Conditions
          ${liveTag}
          <span class="intel-wx-zone-name">${escapeHtml(zone.name)}</span>
        </div>
        <div class="weather-grid">
          <div class="weather-cell"><span class="weather-val">${escapeHtml(w.waterTemp)}</span><span class="weather-key">Water</span></div>
          <div class="weather-cell"><span class="weather-val">${escapeHtml(w.airTemp)}</span><span class="weather-key">Air Temp</span></div>
          <div class="weather-cell weather-cell--wide"><span class="weather-val wx-val--sm">${escapeHtml(w.wind)}</span><span class="weather-key">Wind</span></div>
          <div class="weather-cell weather-cell--wide"><span class="weather-val wx-val--sm">${escapeHtml(w.swell)}</span><span class="weather-key">Swell</span></div>
          <div class="weather-cell"><span class="weather-val wx-val--sm">${escapeHtml(w.sky || '—')}</span><span class="weather-key">Sky</span></div>
          <div class="weather-cell"><span class="weather-val">${escapeHtml(w.humidity)}</span><span class="weather-key">Humidity</span></div>
          <div class="weather-cell weather-cell--wide"><span class="weather-val wx-val--sm">${escapeHtml(w.moon)}</span><span class="weather-key">Moon</span></div>
        </div>
      </div>
      <div class="cdash-section">
        <div class="cdash-section-head">\uD83D\uDD25 Hottest Zones Right Now</div>
        ${hotZones.map((row, i) => `
          <div class="cap-dash-zone-row">
            <span class="cap-dash-zone-rank">${i+1}</span>
            <span class="cap-dash-zone-name">${escapeHtml(row.info.name)}</span>
            <span class="cap-dash-zone-coast ${row.info.coast==='Pacific'?'cdz--pac':'cdz--cor'}">${row.info.coast==='Pacific'?'Pac':'Cor'}</span>
            <span class="cap-dash-zone-count">${row.count} reports</span>
          </div>`).join('')}
      </div>
      <div class="cdash-section">
        <div class="cdash-section-head">\uD83D\uDC1F What\'s Biting</div>
        <div class="cap-dash-species-row">
          ${topSpecies.map(([s, n]) => {
            const info = SPECIES_INFO[s] || { name: s };
            return '<div class="cap-dash-species-chip">'
              + (info.img ? '<img src="' + info.img + '" alt="' + escapeHtml(info.name) + '" loading="lazy">' : '')
              + '<span>' + escapeHtml(info.name) + '</span>'
              + '<span class="cap-dash-species-count">' + n + '</span>'
              + '</div>';
          }).join('')}
        </div>
      </div>`;
  }

  function renderCdashLeads(profile, leads) {
    const STATUS_LABELS = { new: 'New', replied: 'Replied', booked: 'Booked', closed: 'Closed' };
    const STATUS_CLS    = { new: 'lead-status--new', replied: 'lead-status--replied', booked: 'lead-status--booked', closed: 'lead-status--closed' };

    const leadCards = leads.length ? leads.map(l => {
      const daysAgo = Math.round((Date.now() - l.ts) / 86400000);
      const timeStr = daysAgo === 0 ? 'Today' : daysAgo === 1 ? 'Yesterday' : `${daysAgo}d ago`;
      return `
        <div class="cdash-lead-card cdash-lead-card--${l.status}">
          <div class="lead-card-top">
            <div class="lead-angler-avatar">${l.anglerName[0]}</div>
            <div class="lead-card-main">
              <div class="lead-angler-name">${escapeHtml(l.anglerName)}</div>
              <div class="lead-card-meta">${escapeHtml(l.species)} · ${escapeHtml(l.date)} · ${l.partySize} angler${l.partySize!==1?'s':''}</div>
            </div>
            <div class="lead-card-right">
              <span class="lead-status-badge ${STATUS_CLS[l.status]||''}">${STATUS_LABELS[l.status]||l.status}</span>
              <span class="lead-time">${timeStr}</span>
            </div>
          </div>
          <p class="lead-message">"${escapeHtml(l.message)}"</p>
          <div class="lead-footer">
            <span class="lead-budget">Budget: ${escapeHtml(l.budget)}</span>
            <select class="lead-status-select" data-lead-id="${l.id}">
              ${Object.entries(STATUS_LABELS).map(([k,v]) => `<option value="${k}"${l.status===k?' selected':''}>${v}</option>`).join('')}
            </select>
          </div>
        </div>`;
    }).join('') : `
      <div class="cdash-leads-empty">
        <div class="cdash-leads-icon">${ICON('inbox')}</div>
        <div class="cdash-leads-sub">No inquiries yet. Your listing is live — leads arrive as your zone gets traffic.</div>
      </div>`;

    return `
      <div class="cdash-section">
        <div class="cdash-section-head">${ICON('inbox')} Inquiries <span class="cdash-lead-count">${leads.length}</span></div>
        <div class="cdash-leads-list">${leadCards}</div>
      </div>
      <div class="cdash-section">
        <div class="cdash-section-head">${ICON('trending')} Listing</div>
        <div class="cdash-perf-row"><span>Response time</span><span class="cdash-perf-val">${escapeHtml(profile.responseTime)}</span></div>
        <div class="cdash-perf-row"><span>Verification</span><span class="cdash-perf-val">${profile.verified ? '✓ Verified' : 'Pending'}</span></div>
        <div class="cdash-perf-row"><span>New / Replied / Booked</span><span class="cdash-perf-val">${leads.filter(l=>l.status==='new').length} / ${leads.filter(l=>l.status==='replied').length} / ${leads.filter(l=>l.status==='booked').length}</span></div>
      </div>`;
  }

  function renderCdashProfile(profile) {
    // Build species chip selector — all available species, up to 5 selected
    const allSpecies = Object.entries(SPECIES_INFO);
    const selected   = new Set(profile.specialtySpecies || []);
    const chipsHTML  = allSpecies.map(([key, info]) => {
      const isOn = selected.has(key);
      return `<button class="cdash-species-chip ${isOn ? 'cdash-species-chip--on' : ''}" data-sp="${key}">
        ${info.img ? `<img src="${info.img}" alt="" loading="lazy">` : ''}
        <span>${escapeHtml(info.name)}</span>
        ${isOn ? '<span class="cdash-species-chip-check">✓</span>' : ''}
      </button>`;
    }).join('');

    const strength = getCaptainProfileStrength(profile);

    return `
      <div class="cdash-section">
        <div class="cdash-section-head">Availability</div>
        <select id="cdash-avail-select" class="cdash-edit-input">
          <option value="accepting" ${profile.availability==='accepting'?'selected':''}>Accepting Trips</option>
          <option value="limited"   ${profile.availability==='limited'  ?'selected':''}>Limited Availability</option>
          <option value="closed"    ${profile.availability==='closed'   ?'selected':''}>Not Accepting</option>
        </select>
      </div>

      <div class="cdash-section">
        <div class="cdash-section-head">Specialty Species <span class="cdash-edit-hint">Up to 5</span></div>
        <div class="cdash-species-chips-grid" id="cdash-species-grid">
          ${chipsHTML}
        </div>
        <div class="cdash-species-count-note" id="cdash-species-note">${selected.size}/5 selected</div>
      </div>

      <div class="cdash-section">
        <div class="cdash-section-head">Profile</div>

        <label class="cdash-edit-label">Headline</label>
        <input id="cdash-edit-headline" class="cdash-edit-input" type="text"
          value="${escapeHtml(profile.headline)}" maxlength="100"
          placeholder="Your specialty in one line">

        <label class="cdash-edit-label">Home Port</label>
        <input id="cdash-edit-homeport" class="cdash-edit-input" type="text"
          value="${escapeHtml(profile.homePort)}" maxlength="60"
          placeholder="e.g. Loreto, Ensenada, Cabo">

        <label class="cdash-edit-label">Default Coverage Zone</label>
        <div class="cdash-edit-zone-wrap">
          <select id="cdash-edit-zone" class="cdash-edit-input cdash-edit-zone-select">
            ${Object.entries(ZONES).map(([k, z]) =>
              `<option value="${k}"${(profile.zone || 'loreto') === k ? ' selected' : ''}>${escapeHtml(z.name)} — ${escapeHtml(z.coast)}</option>`
            ).join('')}
          </select>
        </div>
        <p class="cdash-edit-zone-note">Sets the default zone for your dashboard weather and intelligence.</p>

        <label class="cdash-edit-label">Bio <span class="cdash-edit-hint">What anglers read first</span></label>
        <textarea id="cdash-edit-bio" class="cdash-edit-input cdash-edit-textarea" rows="5"
          maxlength="600" placeholder="Your story, local knowledge, what makes you different…">${escapeHtml(profile.bio)}</textarea>

        <label class="cdash-edit-label">Why Anglers Book You</label>
        <textarea id="cdash-edit-whybook" class="cdash-edit-input cdash-edit-textarea" rows="3"
          maxlength="300" placeholder="Your key advantage in 2-3 sentences">${escapeHtml(profile.whyBook)}</textarea>
      </div>

      <div class="cdash-section">
        <div class="cdash-section-head">Trip Info</div>

        <label class="cdash-edit-label">Starting Rate (USD)</label>
        <input id="cdash-edit-rate" class="cdash-edit-input" type="number"
          value="${profile.rateFrom}" min="50" max="5000" placeholder="e.g. 320">

        <label class="cdash-edit-label">Max Passengers</label>
        <select id="cdash-edit-pax" class="cdash-edit-input">
          ${[1,2,3,4,5,6,8].map(n => `<option value="${n}" ${profile.maxPassengers===n?'selected':''}>${n} angler${n>1?'s':''}</option>`).join('')}
        </select>

        <label class="cdash-edit-label">Boat Description</label>
        <input id="cdash-edit-boat" class="cdash-edit-input" type="text"
          value="${escapeHtml(profile.boatDesc)}" maxlength="200"
          placeholder="Size, type, key equipment">

        <label class="cdash-edit-label">What's Included <span class="cdash-edit-hint">Comma-separated</span></label>
        <input id="cdash-edit-included" class="cdash-edit-input" type="text"
          value="${escapeHtml((profile.whatsIncluded||[]).join(', '))}" maxlength="300"
          placeholder="Fuel, tackle, bait, ice…">

        <button id="cdash-profile-save-btn" class="cdash-save-btn">Save Profile</button>
      </div>

      <div class="cdash-section">
        <div class="cdash-section-head">Profile Strength</div>
        <div class="cdash-strength-bar">
          <div class="cdash-strength-fill" style="width:${strength}%"></div>
        </div>
        <div class="cdash-strength-row">
          <span class="cdash-strength-label">${strength}% complete</span>
          ${strength === 100
            ? '<span class="cdash-strength-tip--done">✓ Fully complete</span>'
            : `<span class="cdash-strength-tip">${getCaptainProfileNextStep(profile)}</span>`}
        </div>
        <div class="cdash-strength-breakdown">
          ${renderStrengthBreakdown(profile)}
        </div>
      </div>`;
  }

  // Weighted profile strength — important fields worth more
  function getCaptainProfileStrength(profile) {
    const weights = {
      specialtySpecies: 20,  // ← critical for search discovery
      bio:              20,  // ← anglers read this first
      homePort:         15,  // ← required for zone search
      rateFrom:         15,  // ← anglers filter by price
      whatsIncluded:    10,
      maxPassengers:    10,
      boatDesc:          5,
      headline:          5,
    };
    let total = 0;
    let max   = 0;
    for (const [field, weight] of Object.entries(weights)) {
      max += weight;
      const v = profile[field];
      const filled = v && (Array.isArray(v) ? v.length > 0 : String(v).trim() !== '');
      if (filled) total += weight;
    }
    return Math.round((total / max) * 100);
  }

  function getCaptainProfileNextStep(profile) {
    if (!profile.specialtySpecies?.length) return 'Add specialty species to get discovered in search';
    if (!profile.bio?.trim())              return 'Add your bio — anglers read it before booking';
    if (!profile.homePort?.trim())         return 'Add your home port to appear in zone searches';
    if (!profile.rateFrom)                 return 'Add a starting rate so anglers know what to expect';
    if (!profile.whatsIncluded?.length)    return 'List what\'s included in your trips';
    return 'Almost there — fill remaining fields';
  }

  function renderStrengthBreakdown(profile) {
    const items = [
      { label: 'Specialty species', filled: (profile.specialtySpecies||[]).length > 0, pts: 20 },
      { label: 'Bio',               filled: !!profile.bio?.trim(),                      pts: 20 },
      { label: 'Home port',         filled: !!profile.homePort?.trim(),                 pts: 15 },
      { label: 'Starting rate',     filled: !!profile.rateFrom,                         pts: 15 },
      { label: "What's included",   filled: (profile.whatsIncluded||[]).length > 0,     pts: 10 },
      { label: 'Max passengers',    filled: !!profile.maxPassengers,                    pts: 10 },
      { label: 'Boat description',  filled: !!profile.boatDesc?.trim(),                 pts: 5  },
      { label: 'Headline',          filled: !!profile.headline?.trim(),                 pts: 5  },
    ];
    return items.map(item => `
      <div class="cdash-strength-item">
        <span class="cdash-strength-item-dot ${item.filled ? 'cdash-strength-item-dot--on' : ''}"></span>
        <span class="cdash-strength-item-label ${item.filled ? '' : 'cdash-strength-item-label--off'}">${item.label}</span>
        <span class="cdash-strength-item-pts">+${item.pts}</span>
      </div>`).join('');
  }

  function saveCdashProfile(email) {
    // Read selected species from chip state
    const selectedSp = [];
    document.querySelectorAll('.cdash-species-chip--on').forEach(chip => {
      selectedSp.push(chip.dataset.sp);
    });

    const edits = {
      specialtySpecies: selectedSp,
      headline:      document.getElementById('cdash-edit-headline')?.value.trim()  || '',
      homePort:      document.getElementById('cdash-edit-homeport')?.value.trim()  || '',
      bio:           document.getElementById('cdash-edit-bio')?.value.trim()       || '',
      whyBook:       document.getElementById('cdash-edit-whybook')?.value.trim()   || '',
      rateFrom:      parseInt(document.getElementById('cdash-edit-rate')?.value)   || 0,
      maxPassengers: parseInt(document.getElementById('cdash-edit-pax')?.value)    || 4,
      boatDesc:      document.getElementById('cdash-edit-boat')?.value.trim()      || '',
      whatsIncluded: (document.getElementById('cdash-edit-included')?.value || '').split(',').map(s=>s.trim()).filter(Boolean),
      zone:          document.getElementById('cdash-edit-zone')?.value             || 'loreto',
      coast:         (ZONES[document.getElementById('cdash-edit-zone')?.value || 'loreto'] || {}).coast || '',
    };
    saveCaptainProfile(email, edits);
    toast('Profile saved ✓', 'premium');
    capDashTab = 'overview';
    renderCaptainDashboard();
  }



  // ═══════════════════════════════════════════
  // MAP PANEL ADDITIONS — Tackle + Weather
  // ═══════════════════════════════════════════

  // Tackle weight profile — derived from species data in reports
  // Light: ≤8lb fish  /  Medium: 9–20lb  /  Heavy: 21lb+
  const SPECIES_WEIGHT = {
    'blue-marlin':    'heavy',  'striped-marlin': 'heavy',
    'yellowfin':      'medium', 'bluefin-tuna':   'heavy',
    'bonito':         'light',  'dorado':         'medium',
    'wahoo':          'heavy',  'yellowtail':     'medium',
    'jack-crevalle':  'light',  'amberjack':      'medium',
    'roosterfish':    'medium', 'snook':          'light',
    'black-snook':    'light',  'cabrilla':       'light',
    'grouper':        'medium', 'golden-grouper': 'medium',
    'calico-bass':    'light',  'lingcod':        'medium',
    'pargo':          'light',  'corvina':        'light',
    'white-seabass':  'medium', 'sierra':         'light',
    'halibut':        'medium', 'triggerfish':    'light',
  };

  function buildTackleProfile(zoneReports) {
    const counts = { light: 0, medium: 0, heavy: 0 };
    zoneReports.forEach(r => {
      r.species.forEach(s => {
        const w = SPECIES_WEIGHT[s];
        if (w) counts[w]++;
      });
    });
    const total = counts.light + counts.medium + counts.heavy;
    if (!total) return '';
    const active = Object.entries(counts).filter(([,n])=>n>0).map(([k])=>k);
    const labels = { light: 'Light  ≤8 lb', medium: 'Medium  9–20 lb', heavy: 'Heavy  21+ lb' };
    const icons  = { light: ICON('feather'), medium: ICON('scale'), heavy: ICON('dumbbell') };
    return `<div class="mpd-section">
      <div class="mpd-section-head">Tackle Profile</div>
      <div class="tackle-row">
        ${['light','medium','heavy'].map(w => `
          <div class="tackle-chip ${active.includes(w) ? 'tackle-chip--active' : ''}">
            <span class="tackle-icon">${icons[w]}</span>
            <span class="tackle-label">${labels[w]}</span>
          </div>`).join('')}
      </div>
    </div>`;
  }

  // Weather — realistic stub data keyed by coast
  // Structure is ready for a real API integration (just swap getZoneWeather)
  function getZoneWeather(zoneKey) {
    const z = ZONES[zoneKey] || {};
    const isPacific = z.coast === 'Pacific';
    // Realistic seasonal stubs — replace with API call when available
    return {
      waterTemp:   isPacific ? '62°F / 17°C' : '72°F / 22°C',
      feelsLike:   isPacific ? '68°F / 20°C' : '78°F / 26°C',
      pressure:    '30.1 inHg',
      rainChance:  isPacific ? '15%' : '5%',
      sky:         isPacific ? 'Partly Cloudy' : 'Clear',
      humidity:    isPacific ? '72%' : '55%',
    };
  }

  function buildWeatherSection(zoneKey) {
    const live = zoneConditions[zoneKey];
    const stub = getZoneWeather(zoneKey);
    const isLive = !!live;

    if (weatherLoading && !live) {
      return `<div class="mpd-weather-section mpd-section">
        <div class="mpd-section-head"><span>Conditions</span><span class="wx-loading-badge"><span class="wx-spinner"></span> Loading…</span></div>
        <div class="weather-grid weather-grid--loading">
          ${['Water','Air','Wind','Swell','Current','Sky'].map(k => `<div class="weather-cell weather-cell--skeleton"><span class="weather-val wx-skel"></span><span class="weather-key">${k}</span></div>`).join('')}
        </div>
      </div>`;
    }

    const liveTag = isLive
      ? `<span class="wx-live-badge">● Live${weatherAgeLabel() ? ' · ' + weatherAgeLabel() : ''}</span>`
      : `<span class="wx-stub-badge">Est.</span>`;

    const w = {
      waterTemp:  live?.waterTemp  || stub.waterTemp,
      airTemp:    live?.airTemp    || stub.feelsLike,
      wind:       live?.wind       || '—',
      swell:      live?.swell      || '—',
      current:    live?.current    || '—',
      sky:        live?.skyDesc    || stub.sky,
      humidity:   live?.humidity   || stub.humidity,
      visibility: live?.visibility || '—',
      sunrise:    live?.sunrise    || '—',
      sunset:     live?.sunset     || '—',
      tide:       live?.tide       || '— (coming soon)',
      moon:       moonInfo?.label  || 'Moon',
      moonSub:    moonInfo?.sublabel || '',
    };

    return `<div class="mpd-weather-section mpd-section">
      <div class="mpd-section-head"><span>Conditions</span>${liveTag}</div>
      <div class="weather-grid">
        <div class="weather-cell"><span class="weather-val">${escapeHtml(w.waterTemp)}</span><span class="weather-key">Water</span></div>
        <div class="weather-cell"><span class="weather-val">${escapeHtml(w.airTemp)}</span><span class="weather-key">Air Temp</span></div>
        <div class="weather-cell weather-cell--wide"><span class="weather-val wx-val--sm">${escapeHtml(w.wind)}</span><span class="weather-key">Wind</span></div>
        <div class="weather-cell weather-cell--wide"><span class="weather-val wx-val--sm">${escapeHtml(w.swell)}</span><span class="weather-key">Swell</span></div>
        <div class="weather-cell weather-cell--wide"><span class="weather-val wx-val--sm">${escapeHtml(w.current)}</span><span class="weather-key">Current</span></div>
        <div class="weather-cell"><span class="weather-val wx-val--sm">${escapeHtml(w.sky || '—')}</span><span class="weather-key">Sky</span></div>
        <div class="weather-cell"><span class="weather-val">${escapeHtml(w.humidity)}</span><span class="weather-key">Humidity</span></div>
        <div class="weather-cell"><span class="weather-val">${escapeHtml(w.visibility)}</span><span class="weather-key">Visibility</span></div>
        <div class="weather-cell"><span class="weather-val">${escapeHtml(w.sunrise)}</span><span class="weather-key">Sunrise</span></div>
        <div class="weather-cell"><span class="weather-val">${escapeHtml(w.sunset)}</span><span class="weather-key">Sunset</span></div>
        <div class="weather-cell weather-cell--wide"><span class="weather-val wx-val--sm">${escapeHtml(w.moon)}</span><span class="weather-key">Moon${w.moonSub ? ' · ' + escapeHtml(w.moonSub) : ''}</span></div>
        <div class="weather-cell weather-cell--wide"><span class="weather-val wx-val--sm wx-tide-stub">${escapeHtml(w.tide)}</span><span class="weather-key">Tide</span></div>
      </div>
    </div>`;
  }

  // ── Captain weather widget ──────────────────────────────────────────
  function buildCaptainWeatherWidget(zoneKey) {
    const live = zoneConditions[zoneKey];
    const stub = getZoneWeather(zoneKey);
    const zone = ZONES[zoneKey] || { name: zoneKey, coast: '' };
    const isLive = !!live;

    const liveTag = isLive
      ? `<span class="wx-live-badge">● Live${weatherAgeLabel() ? ' · ' + weatherAgeLabel() : ''}</span>`
      : weatherLoading
        ? `<span class="wx-loading-badge"><span class="wx-spinner"></span> Loading…</span>`
        : `<span class="wx-stub-badge">Est.</span>`;

    const w = {
      waterTemp:  live?.waterTemp  || stub.waterTemp,
      airTemp:    live?.airTemp    || stub.feelsLike,
      wind:       live?.wind       || '—',
      swell:      live?.swell      || '—',
      current:    live?.current    || '—',
      sky:        live?.skyDesc    || stub.sky,
      humidity:   live?.humidity   || stub.humidity,
      visibility: live?.visibility || '—',
      sunrise:    live?.sunrise    || '—',
      sunset:     live?.sunset     || '—',
      tide:       live?.tide       || '— (coming soon)',
      moon:       moonInfo?.label  || 'Moon',
      moonSub:    moonInfo?.sublabel || '',
    };

    const zoneOptions = Object.entries(ZONES)
      .map(([k, z]) => `<option value="${k}"${k === zoneKey ? ' selected' : ''}>${escapeHtml(z.name)}</option>`)
      .join('');

    return `
      <div class="cap-wx-header">
        <div class="cap-wx-title-row">
          <span class="cap-wx-label">Today's Conditions</span>
          ${liveTag}
          <button class="wx-refresh-btn" id="wx-refresh-btn" title="Refresh">↺</button>
        </div>
        <div class="cap-wx-zone-row">
          <div class="wx-zone-select-wrap">
            <select class="wx-zone-select" id="wx-zone-select">${zoneOptions}</select>
          </div>
          <span class="cap-wx-coast">${escapeHtml(zone.coast)}</span>
        </div>
      </div>
      <div class="weather-grid">
        <div class="weather-cell"><span class="weather-val">${escapeHtml(w.waterTemp)}</span><span class="weather-key">Water</span></div>
        <div class="weather-cell"><span class="weather-val">${escapeHtml(w.airTemp)}</span><span class="weather-key">Air Temp</span></div>
        <div class="weather-cell weather-cell--wide"><span class="weather-val wx-val--sm">${escapeHtml(w.wind)}</span><span class="weather-key">Wind</span></div>
        <div class="weather-cell weather-cell--wide"><span class="weather-val wx-val--sm">${escapeHtml(w.swell)}</span><span class="weather-key">Swell</span></div>
        <div class="weather-cell weather-cell--wide"><span class="weather-val wx-val--sm">${escapeHtml(w.current)}</span><span class="weather-key">Current</span></div>
        <div class="weather-cell"><span class="weather-val wx-val--sm">${escapeHtml(w.sky || '—')}</span><span class="weather-key">Sky</span></div>
        <div class="weather-cell"><span class="weather-val">${escapeHtml(w.humidity)}</span><span class="weather-key">Humidity</span></div>
        <div class="weather-cell"><span class="weather-val">${escapeHtml(w.visibility)}</span><span class="weather-key">Visibility</span></div>
        <div class="weather-cell"><span class="weather-val">${escapeHtml(w.sunrise)}</span><span class="weather-key">Sunrise</span></div>
        <div class="weather-cell"><span class="weather-val">${escapeHtml(w.sunset)}</span><span class="weather-key">Sunset</span></div>
        <div class="weather-cell weather-cell--wide"><span class="weather-val wx-val--sm">${escapeHtml(w.moon)}</span><span class="weather-key">Moon${w.moonSub ? ' · ' + escapeHtml(w.moonSub) : ''}</span></div>
        <div class="weather-cell weather-cell--wide"><span class="weather-val wx-val--sm wx-tide-stub">${escapeHtml(w.tide)}</span><span class="weather-key">Tide</span></div>
      </div>`;
  }

  function wireCaptainWeatherSelector(widgetEl) {
    if (!widgetEl) return;
    const select = widgetEl.querySelector('#wx-zone-select');
    select?.addEventListener('change', () => {
      widgetEl.dataset.zone = select.value;
      widgetEl.innerHTML = buildCaptainWeatherWidget(select.value);
      wireCaptainWeatherSelector(widgetEl);
    });
    const refreshBtn = widgetEl.querySelector('#wx-refresh-btn');
    refreshBtn?.addEventListener('click', () => {
      if (!window.BajaWeather) return;
      window.BajaWeather.clearConditionsCache();
      zoneConditions = {}; weatherLoading = true;
      widgetEl.innerHTML = buildCaptainWeatherWidget(widgetEl.dataset.zone || 'loreto');
      wireCaptainWeatherSelector(widgetEl);
      window.BajaWeather.fetchAllConditions(ZONES).then(c => {
        zoneConditions = c || {}; weatherLoading = false; weatherFetchedAt = Date.now();
        window.BajaWeather.getMoonInfo().then(m => { moonInfo = m; }).catch(() => {});
        const zk = widgetEl.dataset.zone || 'loreto';
        widgetEl.innerHTML = buildCaptainWeatherWidget(zk);
        wireCaptainWeatherSelector(widgetEl);
        toast('Conditions refreshed!', '');
      }).catch(() => { weatherLoading = false; });
    });
  }


  // ═══════════════════════════════════════════
  // HOME STAT BUTTONS
  // ═══════════════════════════════════════════

  function initStatButtons() {
    document.querySelectorAll('.home-stat[data-stat-dest]').forEach(btn => {
      btn.style.cursor = 'pointer';
      btn.addEventListener('click', () => {
        const dest = btn.dataset.statDest;
        if (dest === 'reports') { switchScreen('reports'); renderReportsScreen(); }
        if (dest === 'maps')    { switchScreen('maps'); setTimeout(() => initMap(), 100); }
        // B3: the standalone species gallery was orphaned — route the Species stat to it
        if (dest === 'species') { window.location.href = 'species-gallery.html'; }
      });
    });
  }

  // ═══════════════════════════════════════════
  // ULTIMATE HUNT MAP
  // ═══════════════════════════════════════════

  let huntMapInstance  = null;
  let huntMapMarkers   = [];
  let selectedHuntSpecies = new Set();

  // Category → species mapping (master Baja taxonomy, keyed to SPECIES_INFO)
  const HUNT_CATEGORIES = [
    { key: 'billfish',        label: 'Billfish',                    species: ['blue-marlin', 'striped-marlin', 'black-marlin', 'sailfish', 'swordfish'] },
    { key: 'tuna',            label: 'Tuna',                        species: ['yellowfin', 'bluefin-tuna', 'bigeye-tuna', 'skipjack-tuna'] },
    { key: 'offshore',        label: 'Dorado, Wahoo & Offshore',    species: ['dorado', 'wahoo', 'bonito'] },
    { key: 'jacks',           label: 'Jacks & Trevally',            species: ['yellowtail', 'roosterfish', 'amberjack', 'jack-crevalle'] },
    { key: 'grouper-snapper', label: 'Grouper, Snapper & Cabrilla', species: ['grouper', 'golden-grouper', 'pargo', 'cabrilla', 'broomtail-grouper', 'yellow-snapper', 'barred-pargo', 'dog-snapper', 'mullet-snapper'] },
    { key: 'bass',            label: 'Bass',                        species: ['calico-bass', 'sand-bass', 'spotted-bay-bass'] },
    { key: 'rockfish',        label: 'Rockfish & Reef Bottomfish',  species: ['lingcod', 'vermilion-rockfish', 'bocaccio', 'chilipepper', 'canary-rockfish', 'copper-rockfish', 'blue-rockfish', 'starry-rockfish'] },
    { key: 'croaker',         label: 'Croaker & Drum',              species: ['white-seabass', 'corvina'] },
    { key: 'flatfish',        label: 'Flatfish',                    species: ['halibut'] },
    { key: 'inshore',         label: 'Inshore & Surf',              species: ['sierra', 'snook', 'black-snook', 'pacific-barracuda', 'sheephead', 'pompano'] },
    { key: 'reef',            label: 'Warm-Water Reef',             species: ['triggerfish'] },
    { key: 'protected',       label: 'Protected / Catch & Release',  species: ['giant-sea-bass'] },
  ];

  let huntRefreshTimer = null;   // handle for the hourly default-refresh interval

  // ── Default top-3 logic ─────────────────────────────────────────────────
  // Returns the 3 most-reported species from the last 7 days.
  // THIS IS THE SEAM: replace this function body with a fetch() to a live
  // endpoint when real hourly data is available. Everything that calls
  // getHuntDefault() will automatically use the live data.
  function getHuntDefault() {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 7);
    cutoff.setHours(0, 0, 0, 0);

    const counts = {};
    REPORTS.forEach(r => {
      if (new Date(r.date + 'T00:00:00') < cutoff) return;
      r.species.forEach(s => { counts[s] = (counts[s] || 0) + 1; });
    });

    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([key, count]) => ({ key, count }));
  }

  function initHuntMap() {
    const catSelect = document.getElementById('hunt-cat-select');
    const spSelect  = document.getElementById('hunt-sp-select');
    const addBtn    = document.getElementById('hunt-add-btn');
    const tagsEl    = document.getElementById('hunt-selected-tags');
    if (!catSelect) return;

    // Category change → rebuild species options
    catSelect.addEventListener('change', () => {
      const catKey = catSelect.value;
      spSelect.disabled = !catKey;
      addBtn.disabled   = true;

      if (!catKey) {
        spSelect.innerHTML = '<option value="">Select a category first</option>';
        return;
      }
      const cat = HUNT_CATEGORIES.find(c => c.key === catKey);
      if (!cat) return;

      spSelect.innerHTML = '<option value="">Pick a species…</option>';
      cat.species.forEach(spKey => {
        const info = SPECIES_INFO[spKey];
        if (!info) return;
        const opt = document.createElement('option');
        opt.value = spKey;
        opt.textContent = info.name;
        if (selectedHuntSpecies.has(spKey)) { opt.disabled = true; opt.textContent += ' ✓'; }
        spSelect.appendChild(opt);
      });
    });

    // Species change → enable/disable Add button
    spSelect.addEventListener('change', () => {
      addBtn.disabled = !spSelect.value || selectedHuntSpecies.has(spSelect.value) || selectedHuntSpecies.size >= 3;
    });

    // Add button → commit species to selection
    addBtn.addEventListener('click', () => {
      const spKey = spSelect.value;
      if (!spKey || selectedHuntSpecies.has(spKey) || selectedHuntSpecies.size >= 3) return;
      selectedHuntSpecies.add(spKey);
      renderHuntTags();
      updateHuntMap();
      // Reset selects so user can add another
      spSelect.value  = '';
      addBtn.disabled = true;
      // Refresh options to mark newly selected item
      catSelect.dispatchEvent(new Event('change'));
    });

    // Tag remove → event delegation on the tags container
    if (tagsEl) {
      tagsEl.addEventListener('click', e => {
        const btn = e.target.closest('.hunt-tag-remove');
        if (!btn) return;
        selectedHuntSpecies.delete(btn.dataset.species);
        renderHuntTags();
        updateHuntMap();
        // Re-enable Add if species is still selected in dropdown
        addBtn.disabled = !spSelect.value || selectedHuntSpecies.has(spSelect.value) || selectedHuntSpecies.size >= 3;
        // Refresh options (un-grey the just-removed species)
        catSelect.dispatchEvent(new Event('change'));
      });
    }
  }

  function renderHuntTags() {
    const tagsEl = document.getElementById('hunt-selected-tags');
    if (!tagsEl) return;

    // ── Default state: no user selection → show top-3 live leaders ──
    if (!selectedHuntSpecies.size) {
      const defaults = getHuntDefault();
      if (!defaults.length) {
        tagsEl.innerHTML = '<span class="hunt-empty-hint">No recent reports to show</span>';
        return;
      }
      const chips = defaults.map(({ key }) => {
        const name = (SPECIES_INFO[key] || { name: key }).name;
        return `<span class="hunt-tag hunt-tag--default"><span class="hunt-tag-name">${escapeHtml(name)}</span></span>`;
      }).join('');
      tagsEl.innerHTML = `
        <div class="hunt-default-block">
          <div class="hunt-default-label-row">
            <svg width="7" height="7" viewBox="0 0 8 8" style="flex-shrink:0"><circle cx="4" cy="4" r="4" fill="#FFC72C"/></svg>
            Top Biting Now
          </div>
          <div class="hunt-default-chips-row">${chips}</div>
          <div class="hunt-default-hint-row">Add a species to customize</div>
        </div>`;
      return;
    }

    // ── User has selections: show removable chips + counter ──
    const chips = [...selectedHuntSpecies].map(spKey => {
      const name = (SPECIES_INFO[spKey] || { name: spKey }).name;
      return `<span class="hunt-tag">
        <span class="hunt-tag-name">${escapeHtml(name)}</span>
        <button class="hunt-tag-remove" data-species="${spKey}" aria-label="Remove ${escapeHtml(name)}">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </span>`;
    }).join('');

    const badge = selectedHuntSpecies.size >= 3
      ? '<span class="hunt-count-badge hunt-count-badge--full">3 / 3 max</span>'
      : `<span class="hunt-count-badge">${selectedHuntSpecies.size} / 3</span>`;

    tagsEl.innerHTML = `<div class="hunt-selected-row">${chips}${badge}</div>`;
  }

  function renderHuntMap() {
    const module = document.getElementById('hunt-map-module');
    if (!module) return;

    if (!BajaAuth.can('canUseHuntMap')) {
      module.innerHTML = `
        <div class="module-header">
          <span class="module-eyebrow">Unlimited</span>
          <h2 class="module-title">Species Hunt Map</h2>
          <span class="module-tier-badge module-tier-badge--delayed">Unlimited Only</span>
        </div>
        <div class="hunt-lock-teaser">
          <div class="hunt-lock-chips">
            ${['yellowtail','dorado','roosterfish'].map(s => `
              <div class="hunt-chip hunt-chip--ghost">
                ${(SPECIES_INFO[s]||{}).img ? `<img src="${SPECIES_INFO[s].img}" alt="">` : ''}
                <span>${(SPECIES_INFO[s]||{name:s}).name}</span>
              </div>`).join('')}
          </div>
          <div class="hunt-lock-overlay">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span>Select up to 3 species and see exactly where they're biting</span>
            <button class="hunt-lock-btn" data-open-upgrade>Upgrade to Unlimited</button>
          </div>
        </div>`;
      module.classList.remove('hidden');
      bindUpgradeButtons(module);
      return;
    }

    // ── Unlocked: full category → species selector ──
    module.innerHTML = `
  <div class="module-header module-header--simple">
    <span class="module-eyebrow">Hunt Planner</span>
    <h2 class="module-title">Species Hunt Map</h2>
  </div>

      <div class="hunt-selectors">
        <div class="hunt-select-block">
          <label class="hunt-select-label" for="hunt-cat-select">Category</label>
          <div class="hunt-select-wrap">
            <select class="hunt-select" id="hunt-cat-select">
              <option value="">All categories…</option>
              ${HUNT_CATEGORIES.map(c => `<option value="${c.key}">${c.label}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="hunt-species-row">
          <div class="hunt-select-block hunt-select-block--species">
            <label class="hunt-select-label" for="hunt-sp-select">Species</label>
            <div class="hunt-select-wrap">
              <select class="hunt-select" id="hunt-sp-select" disabled>
                <option value="">Select a category first</option>
              </select>
            </div>
          </div>
          <button class="hunt-add-btn" id="hunt-add-btn" disabled aria-label="Add species to map">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add
          </button>
        </div>
      </div>

      <div class="hunt-selected-tags" id="hunt-selected-tags">
        <span class="hunt-empty-hint">Select up to 3 species to plot active zones</span>
      </div>

      <div id="hunt-map-container" class="hunt-map-container">
        <div class="hunt-map-empty">Choose a species above to see active zones</div>
      </div>`;

    module.classList.remove('hidden');
    selectedHuntSpecies.clear();
    initHuntMap();

    // Show the smart default immediately on load
    renderHuntTags();
    updateHuntMap();

    // Hourly refresh of the default view — only fires when no user selection is active.
    // Future: replace getHuntDefault() with a fetch() and this timer becomes the live poll.
    if (huntRefreshTimer) clearInterval(huntRefreshTimer);
    huntRefreshTimer = setInterval(() => {
      if (selectedHuntSpecies.size === 0) {
        renderHuntTags();
        updateHuntMap();
      }
    }, 60 * 60 * 1000); // 1 hour
  }

  function updateHuntMap() {
    const container = document.getElementById('hunt-map-container');
    if (!container) return;

    // Use user selection if present; fall back to smart default top-3
    const isDefault  = selectedHuntSpecies.size === 0;
    const activeKeys = isDefault
      ? new Set(getHuntDefault().map(d => d.key))
      : selectedHuntSpecies;

    if (!activeKeys.size) {
      container.innerHTML = '<div class="hunt-map-empty">No recent reports to show</div>';
      if (huntMapInstance) { huntMapInstance.remove(); huntMapInstance = null; }
      return;
    }

    // Find zones with reports for active species set
    const matchingZones = {};
    REPORTS.forEach(r => {
      const matches = r.species.filter(s => activeKeys.has(s));
      if (matches.length) {
        if (!matchingZones[r.zone]) matchingZones[r.zone] = { count: 0, species: new Set(), rating: 'slow' };
        matchingZones[r.zone].count++;
        matches.forEach(s => matchingZones[r.zone].species.add(s));
        if (r.rating === 'hot') matchingZones[r.zone].rating = 'hot';
        else if (r.rating === 'good' && matchingZones[r.zone].rating !== 'hot') matchingZones[r.zone].rating = 'good';
      }
    });

    // Augment with each species' real regional range (SPECIES_INFO[key].range) so a selected
    // species always shows where it's found / in season, even with no recent reports. Live
    // reports stay colour-coded on top; range-only zones render as a muted "in range" marker.
    // Skipped in the default top-biting view so that stays reports-only.
    if (!isDefault) {
      activeKeys.forEach(k => {
        const range = (typeof SPECIES_INFO !== 'undefined' && SPECIES_INFO[k] && SPECIES_INFO[k].range) || [];
        range.forEach(z => {
          if (!ZONES[z]) return;
          if (!matchingZones[z]) matchingZones[z] = { count: 0, species: new Set(), rating: 'range' };
          matchingZones[z].species.add(k);
        });
      });
    }

    // Render hunt map
    const freshMap = !huntMapInstance;
    if (freshMap) {
      container.innerHTML = '<div id="hunt-map" style="width:100%;height:220px;border-radius:12px;overflow:hidden;"></div>';
      huntMapInstance = L.map('hunt-map', { zoomControl: false, attributionControl: false })
        .setView([27.0, -112.5], 5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 15 }).addTo(huntMapInstance);
    }

    // Clear old markers
    huntMapMarkers.forEach(m => m.remove());
    huntMapMarkers = [];

    const colors = { hot: '#f87171', good: '#FFC72C', slow: '#4A90D9', range: '#5B7C99' };

    Object.entries(matchingZones).forEach(([zoneKey, data]) => {
      const zone = ZONES[zoneKey];
      if (!zone) return;
      const isRangeOnly = data.count === 0;
      const color = colors[data.rating] || '#666';
      const radius = isRangeOnly ? 5 : Math.min(6 + data.count * 2, 18);
      const m = L.circleMarker([zone.lat, zone.lng], {
        radius, fillColor: color, color: '#fff', weight: isRangeOnly ? 1 : 2, fillOpacity: isRangeOnly ? 0.5 : 0.9,
      }).addTo(huntMapInstance);
      const label = isRangeOnly
        ? `${zone.name} · in range / in season`
        : `${zone.name} · ${data.count} report${data.count === 1 ? '' : 's'}`;
      m.bindTooltip(label, { direction: 'top', className: 'map-tooltip' });
      huntMapMarkers.push(m);
    });

    // View strategy:
    // Default state → fixed Baja overview (markers span the whole peninsula, fitBounds zooms too far out)
    // User selection → fitBounds so the map zooms in tight to their specific zones
    const applyView = () => {
      if (!huntMapMarkers.length) return;
      if (isDefault) {
        huntMapInstance.setView([27.0, -112.5], 5);
      } else {
        huntMapInstance.fitBounds(L.featureGroup(huntMapMarkers).getBounds().pad(0.3));
      }
    };

    if (freshMap) {
      // Container may have been hidden during init — force size recalc first
      setTimeout(() => { huntMapInstance.invalidateSize(); applyView(); }, 80);
    } else {
      applyView();
    }
  }

  function renderCaptains() {
    const container = document.getElementById('captains-list');
    if (!container) return;
    const { zone, sort, search, species, rating, specialty } = capState;
    const q = search.toLowerCase();

    let filtered = CAPTAINS.filter(c => {
      if (zone !== 'all' && c.zone !== zone) return false;
      if (species !== 'all' && !c.species.some(s => s.toLowerCase() === species.toLowerCase())) return false;
      if (rating > 0 && c.rating < rating) return false;
      if (specialty === 'whatsapp' && !c.whatsapp) return false;
      if (specialty === 'offshore' && !c.species.some(s => /tuna|wahoo|marlin|dorado/i.test(s))) return false;
      if (specialty === 'inshore' && !c.species.some(s => /bass|corvina|snook|rooster|halibut|pargo/i.test(s))) return false;
      if (q) {
        const hay = [c.name, (ZONES[c.zone] || {}).name || '', ...c.species, c.bio].join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    switch (sort) {
      case 'rated':      filtered.sort((a, b) => b.rating - a.rating || b.years - a.years); break;
      case 'active':     filtered.sort((a, b) => getReportsThisWeek(b.name) - getReportsThisWeek(a.name) || b.rating - a.rating); break;
      case 'experience': filtered.sort((a, b) => b.years - a.years || b.rating - a.rating); break;
      case 'yellowtail': filtered.sort((a, b) => (b.species.some(s => /yellowtail/i.test(s)) ? 1 : 0) - (a.species.some(s => /yellowtail/i.test(s)) ? 1 : 0) || b.rating - a.rating); break;
      case 'dorado':     filtered.sort((a, b) => (b.species.some(s => /dorado/i.test(s)) ? 1 : 0) - (a.species.some(s => /dorado/i.test(s)) ? 1 : 0) || b.rating - a.rating); break;
    }

    const countEl = document.getElementById('captains-count');
    if (countEl) {
      const visible = BajaAuth.can('canSeeAllCaptains') ? filtered.length : Math.min(filtered.length, BajaAuth.plan.captainSlots);
      countEl.textContent = filtered.length === 0 ? 'No captains found' : `Showing ${visible} of ${filtered.length}`;
    }

    if (filtered.length === 0) {
      container.innerHTML = '<div class="empty-state"><p>No captains match your search.</p></div>';
      return;
    }

    container.innerHTML = filtered.map((c, i) => buildCaptainCard(c, i)).join('');

    container.querySelectorAll('.cap-btn[data-screen]').forEach(btn => {
      btn.addEventListener('click', () => switchScreen(btn.dataset.screen));
    });
    bindUpgradeButtons(container);
  }

  function updateCaptainStats() {
    const elC = document.getElementById('stat-captains');
    const elZ = document.getElementById('stat-cap-zones');
    const elR = document.getElementById('stat-cap-rating');
    if (elC) elC.textContent = CAPTAINS.length;
    if (elZ) elZ.textContent = new Set(CAPTAINS.map(c => c.zone)).size;
    if (elR) elR.textContent = CAPTAINS.length ? (CAPTAINS.reduce((s, c) => s + c.rating, 0) / CAPTAINS.length).toFixed(1) : '—';
  }

  function initCaptainsSection() {
    const searchInput = document.getElementById('captain-search');
    const searchClear = document.getElementById('captain-search-clear');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        capState.search = searchInput.value.trim();
        searchClear?.classList.toggle('hidden', !capState.search);
        renderCaptains();
      });
    }
    if (searchClear) {
      searchClear.addEventListener('click', () => {
        searchInput.value = '';
        capState.search = '';
        searchClear.classList.add('hidden');
        renderCaptains();
      });
    }

    const sortStrip = document.getElementById('cap-sort-strip');
    if (sortStrip) {
      sortStrip.querySelectorAll('.sort-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          sortStrip.querySelectorAll('.sort-pill').forEach(p => p.classList.remove('sort-pill--active'));
          pill.classList.add('sort-pill--active');
          capState.sort = pill.dataset.sort;
          renderCaptains();
        });
      });
    }

    const chipsEl = document.getElementById('cap-location-chips');
    if (chipsEl) {
      chipsEl.querySelectorAll('.loc-chip:not(.loc-chip--more)').forEach(chip => {
        chip.addEventListener('click', () => {
          chipsEl.querySelectorAll('.loc-chip').forEach(c => c.classList.remove('loc-chip--active'));
          chip.classList.add('loc-chip--active');
          capState.zone = chip.dataset.zone;
          renderCaptains();
        });
      });
    }

    // Bottom sheet: location
    const bsOverlay  = document.getElementById('bs-overlay');
    const bsSheet    = document.getElementById('bs-locations');
    const bsClose    = document.getElementById('bs-close');
    const bsApply    = document.getElementById('bs-apply');
    const bsSearch   = document.getElementById('bs-location-search');
    const bsList     = document.getElementById('bs-location-list');
    const locMoreBtn = document.getElementById('loc-more-btn');

    function openSheet() {
      capState.bsPending = capState.zone;
      populateBsList('');
      bsSheet?.classList.add('open');
      bsOverlay?.classList.add('open');
      document.body.style.overflow = 'hidden';
      bsSearch?.focus();
    }
    function closeSheet() {
      bsSheet?.classList.remove('open');
      bsOverlay?.classList.remove('open');
      document.body.style.overflow = '';
    }
    function populateBsList(filterText) {
      if (!bsList) return;
      const q = filterText.toLowerCase();
      const allZones = [{ key: 'all', name: 'All Zones', coast: '' }];
      for (const [key, z] of Object.entries(ZONES)) allZones.push({ key, name: z.name, coast: z.coast });
      const shown = q ? allZones.filter(z => z.name.toLowerCase().includes(q) || z.coast.toLowerCase().includes(q)) : allZones;
      bsList.innerHTML = shown.map(z => `
        <button class="bs-location-item${capState.bsPending === z.key ? ' selected' : ''}" data-zone="${z.key}">
          <div class="bs-loc-info">
            <div class="bs-loc-name">${escapeHtml(z.name)}</div>
            ${z.coast ? `<div class="bs-loc-coast">${z.coast}</div>` : ''}
          </div>
          <span class="bs-loc-radio"></span>
        </button>
      `).join('');
      bsList.querySelectorAll('.bs-location-item').forEach(item => {
        item.addEventListener('click', () => {
          capState.bsPending = item.dataset.zone;
          populateBsList(bsSearch?.value || '');
        });
      });
    }

    locMoreBtn?.addEventListener('click', openSheet);
    bsOverlay?.addEventListener('click', () => { closeSheet(); closeFilterSheet(); });
    bsClose?.addEventListener('click', closeSheet);
    bsSearch?.addEventListener('input', () => populateBsList(bsSearch.value));
    bsApply?.addEventListener('click', () => {
      capState.zone = capState.bsPending;
      const chips = document.getElementById('cap-location-chips');
      if (chips) {
        chips.querySelectorAll('.loc-chip').forEach(c => c.classList.remove('loc-chip--active'));
        chips.querySelector(`.loc-chip[data-zone="${capState.zone}"]`)?.classList.add('loc-chip--active');
      }
      closeSheet();
      renderCaptains();
    });

    // Filter buttons
    const fsSheet = document.getElementById('bs-filter');
    const fsList  = document.getElementById('bs-filter-list');
    const fsTitle = document.getElementById('bs-filter-title');
    const fsClose = document.getElementById('bs-filter-close');
    const fsApply = document.getElementById('bs-filter-apply');
    let fsActive = null, fsPending = null;

    function openFilterSheet(type) {
      fsActive = type;
      fsPending = capState[type];
      if (fsTitle) fsTitle.textContent = { species: 'Target Species', rating: 'Minimum Rating', specialty: 'Specialty' }[type] || 'Filter';
      populateFilterList(type);
      fsSheet?.classList.add('open');
      bsOverlay?.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeFilterSheet() {
      fsSheet?.classList.remove('open');
      bsOverlay?.classList.remove('open');
      document.body.style.overflow = '';
      fsActive = null;
    }
    function populateFilterList(type) {
      if (!fsList) return;
      let items = [];
      if (type === 'species') {
        const all = new Set();
        CAPTAINS.forEach(c => c.species.forEach(s => all.add(s)));
        items = [{ value: 'all', label: 'All Species' }, ...[...all].sort().map(s => ({ value: s, label: s }))];
      } else if (type === 'rating') {
        items = [{ value: 0, label: 'Any Rating' }, { value: 5, label: '5.0 only' }, { value: 4, label: '4.0 & up' }, { value: 3, label: '3.0 & up' }];
      } else if (type === 'specialty') {
        items = [{ value: 'all', label: 'All Captains' }, { value: 'whatsapp', label: 'WhatsApp Available' }, { value: 'offshore', label: 'Offshore / Pelagic' }, { value: 'inshore', label: 'Inshore / Reef' }];
      }
      fsList.innerHTML = items.map(item => {
        const isActive = String(item.value) === String(fsPending);
        return `<div class="bs-item${isActive ? ' bs-item--active' : ''}" data-value="${escapeHtml(String(item.value))}">${escapeHtml(item.label)}${isActive ? '<span class="bs-check">✓</span>' : ''}</div>`;
      }).join('');
      fsList.querySelectorAll('.bs-item').forEach(el => {
        el.addEventListener('click', () => {
          fsPending = type === 'rating' ? Number(el.dataset.value) : el.dataset.value;
          fsList.querySelectorAll('.bs-item').forEach(e => { e.classList.remove('bs-item--active'); e.querySelector('.bs-check')?.remove(); });
          el.classList.add('bs-item--active');
          el.insertAdjacentHTML('beforeend', '<span class="bs-check">✓</span>');
        });
      });
    }

    document.querySelectorAll('.cap-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const f = btn.dataset.filter;
        if (!BajaAuth.can('canUseAdvancedFilters') && f !== 'location') { openUpgradeModal(); return; }
        if (f === 'location') openSheet();
        else openFilterSheet(f);
      });
    });

    fsClose?.addEventListener('click', closeFilterSheet);
    fsApply?.addEventListener('click', () => {
      if (fsActive && fsPending !== null) {
        capState[fsActive] = fsPending;
        updateFilterBtnLabel(fsActive, fsPending);
      }
      closeFilterSheet();
      renderCaptains();
    });

    function updateFilterBtnLabel(type, value) {
      const btn = document.querySelector(`.cap-filter-btn[data-filter="${type}"]`);
      if (!btn) return;
      const defaults = { species: 'Species', rating: 'Rating', specialty: 'Specialty' };
      const isDefault = String(value) === String(type === 'rating' ? 0 : 'all');
      const labelEl = btn.querySelector('.cap-filter-label');
      if (!labelEl) return;
      if (isDefault) { labelEl.textContent = defaults[type]; btn.classList.remove('cap-filter-btn--active'); }
      else {
        const label = type === 'rating' ? `${value}+ Stars` : type === 'specialty' ? { whatsapp: 'WhatsApp', offshore: 'Offshore', inshore: 'Inshore' }[value] || value : value;
        labelEl.textContent = label;
        btn.classList.add('cap-filter-btn--active');
      }
    }
  }

  // ═══════════════════════════════════════════
  // 10. MAP & HEAT MAP
  // ═══════════════════════════════════════════

  function initMap() {
    if (mapInstance) { mapInstance.invalidateSize(); return; }

    const map = L.map('baja-map', { zoomControl: false }).setView([27.0, -112.5], 6);
    mapInstance = map;

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    const colors = { 'Pacific': '#1a6ea8', 'Sea of Cortez': '#c94040', 'Both': '#FFC72C' };

    // Build zone data once, reuse on panel open
    const zoneData = {};
    for (const [key, zone] of Object.entries(ZONES)) {
      zoneData[key] = {
        zone,
        reports:    REPORTS.filter(r => r.zone === key),
        lodging:    (typeof LODGING     !== 'undefined') ? LODGING[key]     : null,
        restaurants:(typeof RESTAURANTS !== 'undefined') ? RESTAURANTS[key] : null,
        activities: (typeof ACTIVITIES  !== 'undefined') ? ACTIVITIES[key]  : null,
        species:    (typeof SPECIES_GUIDE !== 'undefined') ? SPECIES_GUIDE[key] : null,
      };
    }

    for (const [key, zone] of Object.entries(ZONES)) {
      const color  = colors[zone.coast] || '#666';
      const marker = L.circleMarker([zone.lat, zone.lng], {
        radius: 9, fillColor: color, color: '#fff', weight: 2.5, fillOpacity: 0.9,
      }).addTo(map);

      marker.on('click', (e) => {
        L.DomEvent.stopPropagation(e);   // prevent bubbling to map click handler
        openMapPanel(key, zoneData[key]);
      });
      marker.bindTooltip(zone.name, {
        direction: 'top', offset: [0, -10], className: 'map-tooltip',
      });
    }

    // Tap map background → close panel (won't fire when marker clicked)
    map.on('click', () => closeMapPanel());

    initMapPanelDrag();
  }

  // ── Map Panel ─────────────────────────────────────────────────────────────

  // ── Map Panel — below-map drawer ──────────────────────────────────────────

  let _panelOpen = false;

  function openMapPanel(key, data) {
    const panel      = document.getElementById('map-panel');
    const zoneName   = document.getElementById('mpz-name');
    const coastPill  = document.getElementById('mpz-coast-pill');
    const rptCount   = document.getElementById('mpz-report-count');
    const biteEl     = document.getElementById('mpz-bite');
    const speciesRow = document.getElementById('mpz-species-row');
    const bodyEl     = document.getElementById('map-panel-body');
    if (!panel) return;

    const { zone, reports, lodging, restaurants, species } = data;

    // If already open, quick fade-update rather than close/reopen
    const alreadyOpen = _panelOpen;
    if (alreadyOpen) {
      panel.classList.add('map-panel--updating');
      setTimeout(() => panel.classList.remove('map-panel--updating'), 120);
    }

    // ── Top row ──
    zoneName.textContent = zone.name;

    const coastClass = zone.coast === 'Pacific' ? 'mpc--pac'
      : zone.coast === 'Sea of Cortez' ? 'mpc--cor' : 'mpc--both';
    coastPill.textContent = zone.coast;
    coastPill.className   = `map-panel-coast-pill ${coastClass}`;

    rptCount.textContent = reports.length
      ? `${reports.length} report${reports.length > 1 ? 's' : ''}`
      : '';

    const recent = [...reports].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
    if (recent) {
      const biteLabels = { hot: ICON('flame','ow-ico--gold') + ' Hot Bite', good: '✓ Good Action', slow: '— Slow' };
      const biteCls    = { hot: 'mpb--hot', good: 'mpb--good', slow: 'mpb--slow' };
      biteEl.innerHTML = `<span class="map-panel-bite-badge ${biteCls[recent.rating] || ''}">${biteLabels[recent.rating] || recent.rating}</span>`;
    } else {
      biteEl.innerHTML = '';
    }

    // ── Species row ──
    if (species?.length) {
      speciesRow.innerHTML = species.slice(0, 5).map(sp => {
        const info = SPECIES_INFO[sp.species] || {};
        return `<div class="mpz-species-chip">
          ${info.img ? `<img src="${info.img}" alt="${escapeHtml(sp.name)}" loading="lazy">` : ''}
          <span>${escapeHtml(sp.name)}</span>
        </div>`;
      }).join('');
      speciesRow.classList.remove('hidden');
    } else {
      speciesRow.classList.add('hidden');
    }

    // ── Full detail in body ──
    let html = '';

    if (recent) {
      const sp = recent.species.map(s => (SPECIES_INFO[s] || { name: s }).name).join(', ');
      html += `<div class="mpd-section">
        <div class="mpd-section-head">Most Recent Report</div>
        <div class="mpd-report-row">
          <span class="mpd-report-species">${escapeHtml(sp)}</span>
          <span class="mpd-report-meta">${relativeTime(recent.date)}${recent.captain ? ` · ${recent.captain.replace(/Capit[aá]n\s*/i, 'Capt. ')}` : ''}</span>
        </div>
        <p class="mpd-report-notes">${escapeHtml(recent.notes.length > 120 ? recent.notes.slice(0, 118) + '…' : recent.notes)}</p>
      </div>`;
    }

    if (lodging?.length) {
      html += `<div class="mpd-section">
        <div class="mpd-section-head">${ICON('home')} Stay</div>
        ${lodging.slice(0, 3).map(l =>
          `<div class="mpd-listing"><span class="mpd-listing-name">${escapeHtml(l.name)}</span><span class="mpd-listing-sub">${escapeHtml(l.type)}</span></div>`
        ).join('')}
      </div>`;
    }

    if (restaurants?.length) {
      html += `<div class="mpd-section">
        <div class="mpd-section-head">${ICON('utensils')} Eat</div>
        ${restaurants.slice(0, 2).map(r =>
          `<div class="mpd-listing"><span class="mpd-listing-name">${escapeHtml(r.name)}</span><span class="mpd-listing-sub">${escapeHtml(r.cuisine)}</span></div>`
        ).join('')}
      </div>`;
    }

    if (species?.length > 5) {
      html += `<div class="mpd-section">
        <div class="mpd-section-head">${ICON('fish')} More Species</div>
        <div class="mpd-species-list">${species.slice(5).map(sp =>
          `<span class="mpd-species-tag">${escapeHtml(sp.name)}</span>`
        ).join('')}</div>
      </div>`;
    }

    bodyEl.innerHTML = html
      + buildTackleProfile(reports)
      + buildWeatherSection(key);

    // Open panel (or keep it open if already showing)
    panel.classList.add('map-panel--open');
    panel.setAttribute('aria-hidden', 'false');
    document.getElementById('screen-maps')?.classList.add('map-has-panel');
    _panelOpen = true;

    // Leaflet needs to know the map container shrank
    if (mapInstance) setTimeout(() => mapInstance.invalidateSize(), 320);
  }

  function closeMapPanel() {
    const panel = document.getElementById('map-panel');
    if (!panel) return;
    panel.classList.remove('map-panel--open');
    panel.setAttribute('aria-hidden', 'true');
    document.getElementById('screen-maps')?.classList.remove('map-has-panel');
    _panelOpen = false;

    // Leaflet needs to know the map container grew back
    if (mapInstance) setTimeout(() => mapInstance.invalidateSize(), 320);
  }

  function initMapPanelDrag() {
    const panel      = document.getElementById('map-panel');
    const handleWrap = document.getElementById('map-panel-handle-wrap');
    const closeBtn   = document.getElementById('map-panel-close');
    if (!panel) return;

    // Close button
    closeBtn?.addEventListener('click', e => { e.stopPropagation(); closeMapPanel(); });

    // Swipe-down on handle → close
    let startY   = 0;
    let dragging = false;

    function onDragStart(e) {
      if (!_panelOpen) return;
      startY   = e.touches ? e.touches[0].clientY : e.clientY;
      dragging = true;
    }

    function onDragMove(e) {
      if (!dragging) return;
      const dy = (e.touches ? e.touches[0].clientY : e.clientY) - startY;
      // Slight visual follow — clamp to downward only
      if (dy > 0) panel.style.transform = `translateY(${Math.min(dy * 0.4, 40)}px)`;
    }

    function onDragEnd(e) {
      if (!dragging) return;
      dragging = false;
      panel.style.transition = '';
      panel.style.transform  = '';
      const dy = (e.changedTouches ? e.changedTouches[0].clientY : e.clientY) - startY;
      if (dy > 60) closeMapPanel();
    }

    handleWrap?.addEventListener('touchstart', onDragStart, { passive: true });
    document.addEventListener('touchmove',  onDragMove,  { passive: true });
    document.addEventListener('touchend',   onDragEnd);
    // Mouse fallback for desktop
    handleWrap?.addEventListener('mousedown', onDragStart);
    document.addEventListener('mousemove',  onDragMove);
    document.addEventListener('mouseup',    onDragEnd);
  }

  function initMapLayers() {
    const layerBar = document.getElementById('map-layer-bar');
    if (!layerBar) return;

    layerBar.querySelectorAll('.map-layer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const layer = btn.dataset.layer;

        if (layer === 'heat') {
          if (!BajaAuth.can('canUseLiveHeatMaps')) {
            document.getElementById('map-lock-overlay')?.classList.remove('hidden');
            return;
          }
          heatMapActive = true;
          document.getElementById('heat-search-bar')?.classList.remove('hidden');
          document.getElementById('map-lock-overlay')?.classList.add('hidden');
          // B5: plot the current search immediately so the layer isn't an empty placeholder
          renderHeatOverlay(document.getElementById('heat-species-search')?.value || '');
        } else {
          heatMapActive = false;
          document.getElementById('heat-search-bar')?.classList.add('hidden');
          document.getElementById('map-lock-overlay')?.classList.add('hidden');
          clearHeatOverlay();
        }

        layerBar.querySelectorAll('.map-layer-btn').forEach(b => b.classList.remove('map-layer-btn--active'));
        btn.classList.add('map-layer-btn--active');
      });
    });

    // B5: wire the heat-map species search — was previously inert (no listener,
    // no rendering). Reuses the same species→zone bite logic as the hunt map.
    const heatSearch = document.getElementById('heat-species-search');
    heatSearch?.addEventListener('input', () => {
      if (heatMapActive) renderHeatOverlay(heatSearch.value);
    });

    bindUpgradeButtons(document.getElementById('map-lock-overlay'));
  }

  // ── Heat overlay (B5) ───────────────────────────────────────────────
  // Plots bite-intensity markers on the main map for species matching the
  // search query. Empty query → plot all recent activity. Mirrors the
  // hunt-map plotting model but draws onto the existing mapInstance.
  let heatMarkers = [];

  function clearHeatOverlay() {
    heatMarkers.forEach(m => m.remove());
    heatMarkers = [];
  }

  function renderHeatOverlay(query) {
    if (!mapInstance) return;
    clearHeatOverlay();

    const q = (query || '').trim().toLowerCase();

    // Match species by key OR display name against the query.
    const speciesMatches = (key) => {
      if (!q) return true;
      const name = (SPECIES_INFO[key] || { name: key }).name.toLowerCase();
      return key.toLowerCase().includes(q) || name.includes(q);
    };

    const zoneAgg = {};
    REPORTS.forEach(r => {
      const matches = (r.species || []).filter(speciesMatches);
      if (!matches.length) return;
      if (!zoneAgg[r.zone]) zoneAgg[r.zone] = { count: 0, rating: 'slow' };
      zoneAgg[r.zone].count++;
      if (r.rating === 'hot') zoneAgg[r.zone].rating = 'hot';
      else if (r.rating === 'good' && zoneAgg[r.zone].rating !== 'hot') zoneAgg[r.zone].rating = 'good';
    });

    const colors = { hot: '#f87171', good: '#FFC72C', slow: '#4A90D9' };
    Object.entries(zoneAgg).forEach(([zoneKey, data]) => {
      const zone = ZONES[zoneKey];
      if (!zone) return;
      const radius = Math.min(10 + data.count * 4, 40);
      const m = L.circleMarker([zone.lat, zone.lng], {
        radius,
        fillColor: colors[data.rating] || '#666',
        color: 'transparent', weight: 0, fillOpacity: 0.35,
      }).addTo(mapInstance);
      m.bindTooltip(`${zone.name} · ${data.count} report${data.count !== 1 ? 's' : ''}`, { direction: 'top', className: 'map-tooltip' });
      heatMarkers.push(m);
    });
  }

  // ═══════════════════════════════════════════
  // 11. COMMUNITY
  // ═══════════════════════════════════════════

  // ═══════════════════════════════════════════════════════
  //  COMMUNITY — localStorage data layer
  // ═══════════════════════════════════════════════════════

  // ── Shared helpers ──────────────────────────────────────
  function communityKey(type) { return 'baja_comm_' + type; }

  function commLoad(type) {
    try { return JSON.parse(localStorage.getItem(communityKey(type)) || '[]'); } catch { return []; }
  }
  function commSave(type, arr) {
    try { localStorage.setItem(communityKey(type), JSON.stringify(arr)); } catch {}
  }
  function commId(prefix) { return prefix + '-' + Date.now() + '-' + Math.random().toString(36).slice(2,6); }

  function currentUserIdentity() {
    const email   = BajaAuth.email || '';
    const profile = getUserProfile(email);
    const name    = profile.displayName || email.split('@')[0] || 'Angler';
    const initials = name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase() || '?';
    return { email, name, initials, tier: BajaAuth.tier };
  }

  function avatarHtml(initials, size) {
    const sz = size || '30px';
    return `<div class="comm-avatar" style="width:${sz};height:${sz};font-size:calc(${sz} * 0.38)">${escapeHtml(initials)}</div>`;
  }

  function timeAgo(ts) {
    const diff = (Date.now() - ts) / 1000;
    if (diff < 60)   return 'just now';
    if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
    if (diff < 86400)return Math.floor(diff / 3600) + 'h ago';
    return Math.floor(diff / 86400) + 'd ago';
  }

  function isOwner(item) { return BajaAuth.email && item.authorEmail === BajaAuth.email; }

  // ── trips ──────────────────────────────────────────────
  function getTrips() {
    const stored = commLoad('trips');
    const seed = (typeof CREW_TRIPS !== 'undefined') ? CREW_TRIPS.map(t => ({...t, authorEmail: '__seed__', joiners: [], status: t.filledSpots >= t.totalSpots ? 'full' : 'open'})) : [];
    // merge: stored first, then seed items not overridden
    const storedIds = new Set(stored.map(t => t.id));
    return [...stored, ...seed.filter(t => !storedIds.has(t.id))];
  }
  function saveTrip(trip) {
    const arr = commLoad('trips');
    const idx = arr.findIndex(t => t.id === trip.id);
    if (idx !== -1) arr[idx] = trip; else arr.unshift(trip);
    commSave('trips', arr);
  }
  function deleteTrip(id) {
    commSave('trips', commLoad('trips').filter(t => t.id !== id));
  }

  // ── meetups ────────────────────────────────────────────
  function getMeetups() { return commLoad('meetups'); }
  function saveMeetup(m) {
    const arr = commLoad('meetups');
    const idx = arr.findIndex(x => x.id === m.id);
    if (idx !== -1) arr[idx] = m; else arr.unshift(m);
    commSave('meetups', arr);
  }
  function deleteMeetup(id) { commSave('meetups', commLoad('meetups').filter(m => m.id !== id)); }

  // ── forum posts ────────────────────────────────────────
  function getForumPosts() { return commLoad('forum'); }
  function saveForumPost(p) {
    const arr = commLoad('forum');
    const idx = arr.findIndex(x => x.id === p.id);
    if (idx !== -1) arr[idx] = p; else arr.unshift(p);
    commSave('forum', arr);
  }
  function deleteForumPost(id) { commSave('forum', commLoad('forum').filter(p => p.id !== id)); }

  // ── forum replies ──────────────────────────────────────
  function getReplyKey(postId) { return 'baja_comm_replies_' + postId; }
  function getReplies(postId) {
    try { return JSON.parse(localStorage.getItem(getReplyKey(postId)) || '[]'); } catch { return []; }
  }
  function saveReply(postId, reply) {
    const arr = getReplies(postId);
    arr.push(reply);
    try { localStorage.setItem(getReplyKey(postId), JSON.stringify(arr)); } catch {}
  }
  function deleteReply(postId, replyId) {
    const arr = getReplies(postId).filter(r => r.id !== replyId);
    try { localStorage.setItem(getReplyKey(postId), JSON.stringify(arr)); } catch {}
  }

  // ═══════════════════════════════════════════════════════
  //  COMMUNITY — Render dispatcher
  // ═══════════════════════════════════════════════════════

  function renderCommunityContent() {
    renderCrewTrips();
    renderMeetupsContent();
    renderForumContent();
  }

  // ═══════════════════════════════════════════════════════
  //  POOL A PANGA
  // ═══════════════════════════════════════════════════════
 

  function renderCrewTrips() {
    const list = document.getElementById('crew-trips-list');
    if (!list) return;

    const today = new Date(); today.setHours(0,0,0,0);
    const allTrips = getTrips().filter(t => new Date(t.date + 'T12:00:00') >= today);
    const openTrips = allTrips.filter(t => t.status !== 'cancelled' && (t.joiners || []).length < t.totalSpots - 1);
    const totalSpots = openTrips.reduce((s,t) => s + (t.totalSpots - 1 - (t.joiners||[]).length), 0);
    const costs = allTrips.map(t => Math.round(t.totalCost / t.totalSpots));
    const avgCost = costs.length ? '$' + Math.round(costs.reduce((a,b) => a+b,0) / costs.length) : '—';

    const elOT = document.getElementById('stat-open-trips');
    const elSP = document.getElementById('stat-crew-spots');
    const elAV = document.getElementById('stat-avg-split');
    if (elOT) elOT.textContent = openTrips.length;
    if (elSP) elSP.textContent = totalSpots;
    if (elAV) elAV.textContent = avgCost;

    // Free tier: show stats (above) but blur trip details
    if (!BajaAuth.can('canUseCommunity')) {
      list.innerHTML = `
        <div class="comm-free-teaser">
          <div class="comm-free-blur-stack">
            ${_dummyTripCard()} ${_dummyTripCard()}
          </div>
          <div class="comm-free-overlay">
            <div class="comm-free-lock-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
            <div class="comm-free-lock-title">Pool a Panga — Scout+</div>
            <div class="comm-free-lock-body">Split panga costs with real Baja anglers heading your direction. ${openTrips.length} open trip${openTrips.length !== 1 ? 's' : ''}, ${totalSpots} spot${totalSpots !== 1 ? 's' : ''} available now.</div>
            <button class="comm-free-lock-btn" data-open-upgrade>Unlock Community →</button>
          </div>
        </div>`;
      bindUpgradeButtons(list);
      return;
    }

    // Paid: full experience
    let trips = allTrips.slice();
    if (crewFilter === 'pacific') trips = trips.filter(t => (ZONES[t.zone]||{}).coast === 'Pacific');
    if (crewFilter === 'cortez')  trips = trips.filter(t => (ZONES[t.zone]||{}).coast === 'Sea of Cortez');
    if (crewFilter === 'open')    trips = trips.filter(t => t.status !== 'cancelled' && (t.joiners||[]).length < t.totalSpots - 1);
    trips = trips.filter(t => t.status !== 'cancelled').sort((a,b) => new Date(a.date) - new Date(b.date));

    if (!trips.length) {
      list.innerHTML = `<div class="comm-empty"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg><p>No open trips right now.</p><p class="comm-empty-sub">Post one and find your crew.</p></div>`;
      return;
    }

    list.innerHTML = trips.map(t => _buildTripCard(t, today)).join('');
    _wireCrewCards(list);
  }

  function _dummyTripCard() {
    return `<div class="crew-card comm-blur-card">
      <div class="crew-card-top">
        <div><div class="crew-zone-row"><span class="crew-zone-name">La Paz Zone</span><span class="crew-coast-badge crew-coast-badge--cor">Sea of Cortez</span></div>
        <div class="crew-species-row"><span class="crew-species-chip">Dorado</span><span class="crew-species-chip">Tuna</span></div></div>
        <div class="crew-date-col"><div class="crew-date">May 15</div><div class="crew-days-away">18 days away</div></div>
      </div>
      <div class="crew-cost-row"><span class="crew-cost-num">$95</span><span class="crew-cost-label">/person</span><span class="crew-cost-total"> · $380 total · 4-person panga</span></div>
      <p class="crew-message">"Early morning start targeting blue water pelagics. BYO bait optional."</p>
      <div class="crew-footer"><div class="crew-host-row"><div class="crew-host-avatar">BM</div><span class="crew-host-name">Baja Mike</span>
        <div class="crew-pips"><span class="crew-pip crew-pip--filled"></span><span class="crew-pip crew-pip--filled"></span><span class="crew-pip"></span><span class="crew-pip"></span></div>
        <span class="crew-spots-left">2 spots left</span></div>
        <button class="crew-join-btn" disabled>Join Trip</button></div>
    </div>`;
  }

  function _buildTripCard(t, today) {
    const zone      = ZONES[t.zone] || { name: t.zone, coast: '' };
    const joiners   = t.joiners || [];
    const spotsLeft = t.totalSpots - 1 - joiners.length;  // host takes 1
    const perPerson = Math.round(t.totalCost / t.totalSpots);
    const isFull    = spotsLeft <= 0;
    const isMine    = isOwner(t) || t.authorEmail === BajaAuth.email;
    const iJoined   = joiners.some(j => j.email === BajaAuth.email);
    const coastCls  = zone.coast === 'Pacific' ? 'pac' : 'cor';
    const tripDate  = new Date(t.date + 'T12:00:00');
    const diffDays  = Math.round((tripDate - today) / 86400000);
    const dateStr   = tripDate.toLocaleDateString('en-US', { month:'short', day:'numeric' });
    const daysLabel = diffDays === 0 ? 'Today' : diffDays === 1 ? 'Tomorrow' : diffDays + ' days away';
    const chips     = t.species.map(s => `<span class="crew-species-chip">${escapeHtml(s)}</span>`).join('');
    const pips      = Array.from({ length: t.totalSpots }, (_,i) =>
      `<span class="crew-pip${i < 1 + joiners.length ? ' crew-pip--filled' : ''}"></span>`).join('');

    const statusBadge = isFull
      ? `<span class="comm-status-badge comm-status-badge--full">Full</span>`
      : joiners.length > 0
        ? `<span class="comm-status-badge comm-status-badge--filling">Filling</span>`
        : `<span class="comm-status-badge comm-status-badge--open">Open</span>`;

    const joinerAvatars = joiners.slice(0,4).map(j =>
      `<span class="comm-joiner-pip" title="${escapeHtml(j.name)}">${escapeHtml(j.initials)}</span>`).join('');

    const actionBtn = isMine
      ? `<div class="comm-owner-actions">
           <button class="comm-owner-btn comm-owner-btn--edit" data-trip-edit="${escapeHtml(t.id)}">Edit</button>
           <button class="comm-owner-btn comm-owner-btn--cancel" data-trip-cancel="${escapeHtml(t.id)}">Cancel</button>
         </div>`
      : iJoined
        ? `<button class="crew-join-btn crew-join-btn--joined" data-trip-leave="${escapeHtml(t.id)}">Joined ✓</button>`
        : isFull
          ? `<button class="crew-join-btn crew-join-btn--full" disabled>Trip Full</button>`
          : `<button class="crew-join-btn" data-trip-join="${escapeHtml(t.id)}">Request to Join</button>`;

    const joinerSection = isMine && joiners.length > 0
      ? `<div class="comm-joiners-row"><span class="comm-joiners-label">Interested:</span>${joinerAvatars}<span class="comm-joiners-count">${joiners.length} request${joiners.length!==1?'s':''}</span></div>`
      : '';

    return `
      <div class="crew-card" data-trip-id="${escapeHtml(t.id)}">
        <div class="crew-card-top">
          <div>
            <div class="crew-zone-row">
              <span class="crew-zone-name">${escapeHtml(zone.name)}</span>
              <span class="crew-coast-badge crew-coast-badge--${coastCls}">${escapeHtml(zone.coast)}</span>
              ${statusBadge}
            </div>
            <div class="crew-species-row">${chips}</div>
          </div>
          <div class="crew-date-col">
            <div class="crew-date">${dateStr}</div>
            <div class="crew-days-away">${daysLabel}</div>
          </div>
        </div>
        <div class="crew-cost-row">
          <span class="crew-cost-num">$${perPerson}</span><span class="crew-cost-label">/person</span>
          <span class="crew-cost-total"> · $${t.totalCost} total · ${t.totalSpots}-person panga</span>
        </div>
        ${t.message ? `<p class="crew-message">"${escapeHtml(t.message)}"</p>` : ''}
        <div class="crew-footer">
          <div class="crew-host-row">
            ${avatarHtml(t.hostInitials || t.authorInitials || '?', '26px')}
            <span class="crew-host-name">${escapeHtml(t.host || t.authorName || 'Angler')}</span>
            <div class="crew-pips">${pips}</div>
            <span class="crew-spots-left${isFull ? ' crew-spots-left--full' : ''}">${isFull ? 'Full' : spotsLeft + ' spot' + (spotsLeft!==1?'s':'') + ' left'}</span>
          </div>
          ${joinerSection}
          ${actionBtn}
        </div>
      </div>`;
  }

  function _wireCrewCards(container) {
    // Join requests
    container.querySelectorAll('[data-trip-join]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.tripJoin;
        const stored = commLoad('trips');
        const trip = getTrips().find(t => t.id === id);
        if (!trip) return;
        const user = currentUserIdentity();
        const joiners = trip.joiners || [];
        if (joiners.some(j => j.email === user.email)) return;
        joiners.push({ email: user.email, name: user.name, initials: user.initials, ts: Date.now() });
        trip.joiners = joiners;
        // Only persist if it's a stored trip (not seed-only)
        const storedTrip = stored.find(t => t.id === id);
        if (storedTrip) {
          storedTrip.joiners = joiners;
          commSave('trips', stored);
        } else {
          // promote seed trip to stored
          trip.authorEmail = trip.authorEmail || '__seed__';
          commLoad('trips'); // ensure loaded
          const arr = commLoad('trips');
          arr.unshift(trip);
          commSave('trips', arr);
        }
        toast('Request sent! Trip host will be in touch.', 'premium');
        renderCrewTrips();
      });
    });

    // Leave trip
    container.querySelectorAll('[data-trip-leave]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.tripLeave;
        const arr = commLoad('trips');
        const trip = arr.find(t => t.id === id) || getTrips().find(t => t.id === id);
        if (!trip) return;
        const user = currentUserIdentity();
        trip.joiners = (trip.joiners||[]).filter(j => j.email !== user.email);
        const storedIdx = arr.findIndex(t => t.id === id);
        if (storedIdx !== -1) { arr[storedIdx] = trip; commSave('trips', arr); }
        else { const all = commLoad('trips'); all.unshift(trip); commSave('trips', all); }
        toast('You left the trip.', '');
        renderCrewTrips();
      });
    });

    // Cancel own trip
    container.querySelectorAll('[data-trip-cancel]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.tripCancel;
        if (!confirm('Cancel your trip post? This cannot be undone.')) return;
        const arr = commLoad('trips');
        const idx = arr.findIndex(t => t.id === id);
        if (idx !== -1) { arr[idx].status = 'cancelled'; commSave('trips', arr); }
        toast('Trip cancelled.', '');
        renderCrewTrips();
      });
    });

    // Edit trip — open modal pre-filled
    container.querySelectorAll('[data-trip-edit]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.tripEdit;
        const trip = getTrips().find(t => t.id === id);
        if (!trip) return;
        _openCrewModalForEdit(trip);
      });
    });
  }

  function _openCrewModalForEdit(trip) {
    openModal('crew-post-modal');
    const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
    setVal('crew-zone', trip.zone);
    setVal('crew-species-input', (trip.species||[]).join(', '));
    setVal('crew-date', trip.date);
    setVal('crew-total-cost', trip.totalCost);
    setVal('crew-total-spots', trip.totalSpots);
    setVal('crew-name', trip.host || trip.authorName || '');
    setVal('crew-message', trip.message || '');
    const form = document.getElementById('crew-post-form');
    if (form) form.dataset.editId = trip.id;
    const btn = form?.querySelector('[type=submit]');
    if (btn) btn.textContent = 'Save Changes';
  }

  // ═══════════════════════════════════════════════════════
  //  MEETUPS
  // ═══════════════════════════════════════════════════════

  function renderMeetupsContent() {
    const el = document.getElementById('meetups-content');
    if (!el) return;

    // Free tier: fully locked
    if (BajaAuth.tier === 'free') {
      el.innerHTML = `
        <div class="comm-lock-section">
          <div class="comm-lock-blur-stack">
            ${_dummyMeetupCard()} ${_dummyMeetupCard()}
          </div>
          <div class="comm-free-overlay">
            <div class="comm-free-lock-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
            <div class="comm-free-lock-title">Meetups — Pro+</div>
            <div class="comm-free-lock-body">Find anglers heading to your zone. Coordinate gear, share a captain, plan logistics together.</div>
            <button class="comm-free-lock-btn" data-open-upgrade>Unlock Meetups →</button>
          </div>
        </div>`;
      bindUpgradeButtons(el);
      return;
    }

    const meetups = getMeetups();
    const user = currentUserIdentity();

    el.innerHTML = `
      <div class="comm-section-actions">
        <button class="comm-post-btn" id="meetup-post-btn">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Post a Meetup
        </button>
      </div>
      <div id="meetup-list" class="meetup-list-live">
        ${meetups.length ? meetups.map(m => _buildMeetupCard(m)).join('') : `<div class="comm-empty"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><p>No meetups yet.</p><p class="comm-empty-sub">Post one and connect with nearby anglers.</p></div>`}
      </div>
      <div id="meetup-form-wrap" class="comm-inline-form hidden"></div>`;

    el.querySelector('#meetup-post-btn')?.addEventListener('click', () => {
      const fw = el.querySelector('#meetup-form-wrap');
      fw.classList.toggle('hidden');
      if (!fw.classList.contains('hidden')) {
        fw.innerHTML = _meetupFormHtml(null);
        _wireMeetupForm(fw, null);
      }
    });
    _wireMeetupActions(el);
  }

  function _dummyMeetupCard() {
    return `<div class="meetup-card comm-blur-card">
      <div class="meetup-card-header"><div class="meetup-card-date-badge"><span class="meetup-day">15</span><span class="meetup-month">May</span></div>
      <div class="meetup-card-main"><div class="meetup-card-title">La Paz Yellowtail Weekend</div><div class="meetup-card-meta">La Paz · 6 anglers going</div></div></div>
      <div class="meetup-card-note">"Group heading to La Paz for a 3-day yellowtail run. Looking for 2 more."</div>
    </div>`;
  }

  function _buildMeetupCard(m) {
    const rsvps    = m.rsvps || [];
    const isMine   = isOwner(m);
    const iGoing   = rsvps.some(r => r.email === BajaAuth.email);
    const mDate    = m.date ? new Date(m.date + 'T12:00:00') : null;
    const dayStr   = mDate ? mDate.toLocaleDateString('en-US',{day:'numeric'}) : '?';
    const monStr   = mDate ? mDate.toLocaleDateString('en-US',{month:'short'}).toUpperCase() : '';
    const zone     = m.zone ? (ZONES[m.zone]||{name:m.zone}).name : m.location || '';
    const rsvpPips = rsvps.slice(0,5).map(r => `<span class="comm-joiner-pip" title="${escapeHtml(r.name)}">${escapeHtml(r.initials)}</span>`).join('');

    const ownerActions = isMine ? `
      <button class="comm-owner-btn comm-owner-btn--edit" data-meetup-edit="${escapeHtml(m.id)}">Edit</button>
      <button class="comm-owner-btn comm-owner-btn--cancel" data-meetup-delete="${escapeHtml(m.id)}">Delete</button>` : '';

    const rsvpBtn = isMine ? '' : iGoing
      ? `<button class="comm-rsvp-btn comm-rsvp-btn--going" data-meetup-leave="${escapeHtml(m.id)}">Going ✓</button>`
      : `<button class="comm-rsvp-btn" data-meetup-rsvp="${escapeHtml(m.id)}">RSVP</button>`;

    return `
      <div class="meetup-card" data-meetup-id="${escapeHtml(m.id)}">
        <div class="meetup-card-header">
          <div class="meetup-card-date-badge"><span class="meetup-day">${dayStr}</span><span class="meetup-month">${monStr}</span></div>
          <div class="meetup-card-main">
            <div class="meetup-card-title">${escapeHtml(m.title)}</div>
            <div class="meetup-card-meta">${escapeHtml(zone)}${m.time ? ' · ' + escapeHtml(m.time) : ''} · ${rsvps.length + 1} going</div>
          </div>
        </div>
        ${m.note ? `<div class="meetup-card-note">"${escapeHtml(m.note)}"</div>` : ''}
        <div class="meetup-card-footer">
          <div class="meetup-host-row">
            ${avatarHtml(m.authorInitials||'?','24px')}
            <span class="meetup-host-name">${escapeHtml(m.authorName||'Angler')}</span>
            ${rsvps.length ? `<div class="comm-rsvp-pips">${rsvpPips}</div>` : ''}
          </div>
          <div class="comm-card-actions">${ownerActions}${rsvpBtn}</div>
        </div>
      </div>`;
  }

  function _meetupFormHtml(m) {
    const v = (field) => m ? escapeHtml(m[field]||'') : '';
    const zones = Object.entries(ZONES).map(([k,z]) =>
      `<option value="${k}"${m&&m.zone===k?' selected':''}>${escapeHtml(z.name)}</option>`).join('');
    return `
      <form class="comm-form" id="meetup-form" novalidate>
        <div class="comm-form-row">
          <div class="comm-form-field">
            <label class="comm-form-label">Meetup Title</label>
            <input type="text" id="mf-title" class="comm-form-input" placeholder="e.g. La Paz Yellowtail Weekend" value="${v('title')}" required maxlength="80">
          </div>
        </div>
        <div class="comm-form-row">
          <div class="comm-form-field">
            <label class="comm-form-label">Zone / Location</label>
            <select id="mf-zone" class="comm-form-input">
              <option value="">Select zone…</option>${zones}
            </select>
          </div>
          <div class="comm-form-field">
            <label class="comm-form-label">Date</label>
            <input type="date" id="mf-date" class="comm-form-input" value="${v('date')}" required>
          </div>
        </div>
        <div class="comm-form-row">
          <div class="comm-form-field">
            <label class="comm-form-label">Time <span class="comm-form-opt">optional</span></label>
            <input type="text" id="mf-time" class="comm-form-input" placeholder="e.g. 6:00 AM" value="${v('time')}" maxlength="30">
          </div>
        </div>
        <div class="comm-form-field">
          <label class="comm-form-label">Note <span class="comm-form-opt">optional</span></label>
          <textarea id="mf-note" class="comm-form-input comm-form-textarea" placeholder="What's the plan? Gear needed? Details…" rows="3">${v('note')}</textarea>
        </div>
        <div class="comm-form-actions">
          <button type="button" class="comm-form-cancel" id="meetup-form-cancel">Cancel</button>
          <button type="submit" class="comm-form-submit">${m ? 'Save Changes' : 'Post Meetup'}</button>
        </div>
      </form>`;
  }

  function _wireMeetupForm(container, existing) {
    const form = container.querySelector('#meetup-form');
    if (!form) return;
    form.querySelector('#meetup-form-cancel')?.addEventListener('click', () => {
      container.innerHTML = '';
      container.classList.add('hidden');
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      const title = document.getElementById('mf-title')?.value.trim();
      const zone  = document.getElementById('mf-zone')?.value;
      const date  = document.getElementById('mf-date')?.value;
      const time  = document.getElementById('mf-time')?.value.trim();
      const note  = document.getElementById('mf-note')?.value.trim();
      if (!title || !date) return;
      const user = currentUserIdentity();
      const meetup = {
        id:            existing ? existing.id : commId('mt'),
        title, zone, date, time, note,
        authorEmail:   user.email,
        authorName:    user.name,
        authorInitials:user.initials,
        rsvps:         existing ? existing.rsvps : [],
        ts:            existing ? existing.ts : Date.now(),
      };
      saveMeetup(meetup);
      toast(existing ? 'Meetup updated!' : 'Meetup posted!', 'premium');
      renderMeetupsContent();
    });
  }

  function _wireMeetupActions(container) {
    // RSVP
    container.querySelectorAll('[data-meetup-rsvp]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.meetupRsvp;
        const meetups = commLoad('meetups');
        const m = meetups.find(x => x.id === id);
        if (!m) return;
        const user = currentUserIdentity();
        m.rsvps = m.rsvps || [];
        if (!m.rsvps.some(r => r.email === user.email)) {
          m.rsvps.push({ email: user.email, name: user.name, initials: user.initials, ts: Date.now() });
          saveMeetup(m);
        }
        toast('You\'re going!', 'premium');
        renderMeetupsContent();
      });
    });
    // Leave
    container.querySelectorAll('[data-meetup-leave]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.meetupLeave;
        const meetups = commLoad('meetups');
        const m = meetups.find(x => x.id === id);
        if (!m) return;
        const user = currentUserIdentity();
        m.rsvps = (m.rsvps||[]).filter(r => r.email !== user.email);
        saveMeetup(m);
        toast('RSVP cancelled.', '');
        renderMeetupsContent();
      });
    });
    // Delete
    container.querySelectorAll('[data-meetup-delete]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!confirm('Delete this meetup?')) return;
        deleteMeetup(btn.dataset.meetupDelete);
        toast('Meetup deleted.', '');
        renderMeetupsContent();
      });
    });
    // Edit
    container.querySelectorAll('[data-meetup-edit]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.meetupEdit;
        const m = getMeetups().find(x => x.id === id);
        if (!m) return;
        const fw = container.querySelector('#meetup-form-wrap');
        if (!fw) return;
        fw.innerHTML = _meetupFormHtml(m);
        fw.classList.remove('hidden');
        _wireMeetupForm(fw, m);
        fw.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });
  }

  // ═══════════════════════════════════════════════════════
  //  FORUM
  // ═══════════════════════════════════════════════════════

  let forumOpenThread = null;  // currently-expanded post id

  function renderForumContent() {
    const el = document.getElementById('forum-content');
    if (!el) return;

    // Free tier: read-only (can see and read posts, cannot post or reply)
    if (BajaAuth.tier === 'free') {
      _renderForumFreeReadOnly(el);
      return;
    }

    // All paid tiers (Scout / Pro / Unlimited): full access
    _renderForumFull(el);
  }


  function _dummyForumPost() {
    return `<div class="forum-post-card comm-blur-card">
      <div class="forum-post-header">
        <div class="comm-avatar" style="width:28px;height:28px;font-size:11px">BM</div>
        <div class="forum-post-meta"><div class="forum-post-title">Best dorado lures for July?</div><div class="forum-post-byline">Baja Mike · 2h ago · 14 replies</div></div>
      </div>
      <div class="forum-post-body">Anyone had luck with specific colors on Dorado in the Sea of Cortez during peak season? Looking for recommendations.</div>
    </div>`;
  }

  function _renderForumFreeReadOnly(el) {
    const posts = getForumPosts();
    el.innerHTML = `
      <div class="comm-forum-readonly-banner comm-forum-readonly-banner--free">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        Upgrade to Scout or above to post and reply
        <button class="comm-forum-upgrade-inline" data-open-upgrade>Upgrade →</button>
      </div>
      <div id="forum-list">
        ${posts.length
          ? posts.map(p => _buildForumCardReadOnly(p)).join('')
          : '<div class="comm-empty"><p>No discussions yet.</p><p class="comm-empty-sub">Upgrade to start the first thread.</p></div>'
        }
      </div>`;
    bindUpgradeButtons(el);
    // Wire expand/collapse only (no post/reply actions)
    el.querySelectorAll('[data-post-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.postToggle;
        forumOpenThread = forumOpenThread === id ? null : id;
        renderForumContent();
      });
    });
  }

  function _buildForumCardReadOnly(p) {
    const replies = getReplies(p.id);
    const isOpen  = forumOpenThread === p.id;
    const replySection = isOpen ? `
      <div class="forum-replies">
        ${replies.length
          ? replies.map(r => `
            <div class="forum-reply">
              ${avatarHtml(r.authorInitials||'?','22px')}
              <div class="forum-reply-body">
                <span class="forum-reply-author">${escapeHtml(r.authorName||'Angler')}</span>
                <span class="forum-reply-time">${timeAgo(r.ts)}</span>
                <div class="forum-reply-text">${escapeHtml(r.text)}</div>
              </div>
            </div>`).join('')
          : '<div class="forum-no-replies">No replies yet.</div>'
        }
        <div class="comm-forum-reply-locked">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span>Upgrade to reply</span>
        </div>
      </div>` : '';
    return `
      <div class="forum-post-card" data-post-id="${escapeHtml(p.id)}">
        <div class="forum-post-header">
          ${avatarHtml(p.authorInitials||'?','28px')}
          <div class="forum-post-meta">
            <div class="forum-post-title">${escapeHtml(p.title)}</div>
            <div class="forum-post-byline">${escapeHtml(p.authorName||'Angler')} · ${timeAgo(p.ts)} · ${replies.length} repl${replies.length!==1?'ies':'y'}</div>
          </div>
        </div>
        ${p.body ? `<div class="forum-post-body">${escapeHtml(p.body)}</div>` : ''}
        <div class="forum-post-footer">
          <button class="forum-toggle-replies" data-post-toggle="${escapeHtml(p.id)}">${isOpen ? '▲ Collapse' : `${ICON('chat')} ${replies.length ? replies.length + ' repl' + (replies.length!==1?'ies':'y') : 'Read thread'}`}</button>
        </div>
        ${replySection}
      </div>`;
  }

  function _renderForumFull(el) {
    const posts = getForumPosts();
    el.innerHTML = `
      <div class="comm-section-actions">
        <button class="comm-post-btn" id="forum-post-btn">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          New Thread
        </button>
      </div>
      <div id="forum-new-form" class="comm-inline-form hidden"></div>
      <div id="forum-list">
        ${posts.length ? posts.map(p => _buildForumCard(p, true)).join('') : `<div class="comm-empty"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><p>No discussions yet.</p><p class="comm-empty-sub">Start one — share tactics, zones, gear tips.</p></div>`}
      </div>`;

    el.querySelector('#forum-post-btn')?.addEventListener('click', () => {
      const fw = el.querySelector('#forum-new-form');
      fw.classList.toggle('hidden');
      if (!fw.classList.contains('hidden')) {
        fw.innerHTML = _forumPostFormHtml(null);
        _wireForumPostForm(fw, null);
      }
    });
    _wireForumActions(el, true);
  }

  function _buildForumCard(p, canPost) {
    const replies = getReplies(p.id);
    const isMine  = isOwner(p);
    const isOpen  = forumOpenThread === p.id;

    const ownerActions = isMine
      ? `<button class="comm-owner-btn comm-owner-btn--cancel" data-forum-delete="${escapeHtml(p.id)}">Delete</button>`
      : '';

    const replySection = isOpen ? `
      <div class="forum-replies" id="replies-${escapeHtml(p.id)}">
        ${replies.length ? replies.map(r => _buildReplyHtml(p.id, r)).join('') : '<div class="forum-no-replies">No replies yet — be first.</div>'}
        <form class="comm-reply-form" data-post-id="${escapeHtml(p.id)}">
          <input type="text" class="comm-reply-input" placeholder="Add a reply…" required maxlength="400">
          <button type="submit" class="comm-reply-submit">Post</button>
        </form>
      </div>` : '';

    return `
      <div class="forum-post-card" data-post-id="${escapeHtml(p.id)}">
        <div class="forum-post-header">
          ${avatarHtml(p.authorInitials||'?','28px')}
          <div class="forum-post-meta">
            <div class="forum-post-title">${escapeHtml(p.title)}</div>
            <div class="forum-post-byline">${escapeHtml(p.authorName||'Angler')} · ${timeAgo(p.ts)} · ${replies.length} repl${replies.length!==1?'ies':'y'}</div>
          </div>
          <div class="forum-post-actions">${ownerActions}</div>
        </div>
        ${p.body ? `<div class="forum-post-body">${escapeHtml(p.body)}</div>` : ''}
        <div class="forum-post-footer">
          <button class="forum-toggle-replies" data-post-toggle="${escapeHtml(p.id)}">${isOpen ? '▲ Collapse' : `${ICON('chat')} ${replies.length ? replies.length + ' repl' + (replies.length!==1?'ies':'y') : 'Reply'}`}</button>
        </div>
        ${replySection}
      </div>`;
  }

  function _buildReplyHtml(postId, r) {
    const isMine = r.authorEmail === BajaAuth.email;
    return `
      <div class="forum-reply" data-reply-id="${escapeHtml(r.id)}">
        ${avatarHtml(r.authorInitials||'?','22px')}
        <div class="forum-reply-body">
          <span class="forum-reply-author">${escapeHtml(r.authorName||'Angler')}</span>
          <span class="forum-reply-time">${timeAgo(r.ts)}</span>
          <div class="forum-reply-text">${escapeHtml(r.text)}</div>
        </div>
        ${isMine ? `<button class="comm-reply-delete" data-reply-delete="${escapeHtml(r.id)}" data-post-id="${escapeHtml(postId)}">✕</button>` : ''}
      </div>`;
  }

  function _forumPostFormHtml(p) {
    return `
      <form class="comm-form" id="forum-post-form" novalidate>
        <div class="comm-form-field">
          <label class="comm-form-label">Thread Title</label>
          <input type="text" id="fp-title" class="comm-form-input" placeholder="e.g. Best dorado lures for July?" value="${p ? escapeHtml(p.title) : ''}" required maxlength="120">
        </div>
        <div class="comm-form-field">
          <label class="comm-form-label">Body <span class="comm-form-opt">optional</span></label>
          <textarea id="fp-body" class="comm-form-input comm-form-textarea" placeholder="Share details, ask a question, start a discussion…" rows="4">${p ? escapeHtml(p.body||'') : ''}</textarea>
        </div>
        <div class="comm-form-actions">
          <button type="button" class="comm-form-cancel" id="forum-form-cancel">Cancel</button>
          <button type="submit" class="comm-form-submit">${p ? 'Save' : 'Post Thread'}</button>
        </div>
      </form>`;
  }

  function _wireForumPostForm(container, existing) {
    const form = container.querySelector('#forum-post-form');
    if (!form) return;
    form.querySelector('#forum-form-cancel')?.addEventListener('click', () => {
      container.innerHTML = '';
      container.classList.add('hidden');
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      const title = document.getElementById('fp-title')?.value.trim();
      const body  = document.getElementById('fp-body')?.value.trim();
      if (!title) return;
      const user = currentUserIdentity();
      const post = {
        id:            existing ? existing.id : commId('fp'),
        title, body,
        authorEmail:   user.email,
        authorName:    user.name,
        authorInitials:user.initials,
        ts:            existing ? existing.ts : Date.now(),
      };
      saveForumPost(post);
      toast(existing ? 'Thread updated!' : 'Thread posted!', 'premium');
      container.innerHTML = '';
      container.classList.add('hidden');
      renderForumContent();
    });
  }

  function _wireForumActions(container, canPost) {
    // Toggle replies
    container.querySelectorAll('[data-post-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.postToggle;
        forumOpenThread = forumOpenThread === id ? null : id;
        renderForumContent();
      });
    });

    // Delete post
    container.querySelectorAll('[data-forum-delete]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!confirm('Delete this thread and all replies?')) return;
        const id = btn.dataset.forumDelete;
        deleteForumPost(id);
        try { localStorage.removeItem(getReplyKey(id)); } catch {}
        toast('Thread deleted.', '');
        renderForumContent();
      });
    });

    // Reply submit
    container.querySelectorAll('.comm-reply-form').forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const postId = form.dataset.postId;
        const input  = form.querySelector('.comm-reply-input');
        const text   = input?.value.trim();
        if (!text || !postId) return;
        if (!BajaAuth.can('canUseForums') && BajaAuth.tier === 'free') { openUpgradeModal(); return; }
        const user = currentUserIdentity();
        saveReply(postId, {
          id:            commId('rp'),
          postId,
          text,
          authorEmail:   user.email,
          authorName:    user.name,
          authorInitials:user.initials,
          ts:            Date.now(),
        });
        input.value = '';
        // Update post's reply section in-place
        const repliesEl = document.getElementById('replies-' + postId);
        if (repliesEl) {
          const allReplies = getReplies(postId);
          // Re-render just the replies div content
          const noR = repliesEl.querySelector('.forum-no-replies');
          if (noR) noR.remove();
          const newR = document.createElement('div');
          newR.innerHTML = _buildReplyHtml(postId, allReplies[allReplies.length-1]);
          repliesEl.insertBefore(newR.firstElementChild, form);
          // Re-wire delete on new reply
          const delBtn = repliesEl.querySelector(`[data-reply-delete="${allReplies[allReplies.length-1].id}"]`);
          if (delBtn) _wireReplyDelete(delBtn);
          // Update reply count in card header
          const card = container.querySelector(`[data-post-id="${postId}"] .forum-post-byline`);
          if (card) card.textContent = card.textContent.replace(/\d+ repl/, allReplies.length + ' repl');
        }
        toast('Reply posted!', '');
      });
    });

    // Delete reply
    container.querySelectorAll('[data-reply-delete]').forEach(btn => _wireReplyDelete(btn));
  }

  function _wireReplyDelete(btn) {
    btn.addEventListener('click', () => {
      const rid    = btn.dataset.replyDelete;
      const postId = btn.dataset.postId;
      deleteReply(postId, rid);
      btn.closest('.forum-reply')?.remove();
      toast('Reply deleted.', '');
    });
  }

  // ═══════════════════════════════════════════════════════
  //  COMMUNITY TABS
  // ═══════════════════════════════════════════════════════

  function initCommunityTabs() {
    document.querySelectorAll('.community-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.community-tab').forEach(t => t.classList.remove('community-tab--active'));
        document.querySelectorAll('.community-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('community-tab--active');
        document.getElementById('ctab-' + tab.dataset.ctab)?.classList.add('active');
        // Re-render the activated tab
        const which = tab.dataset.ctab;
        if (which === 'pool')    renderCrewTrips();
        if (which === 'meetups') renderMeetupsContent();
        if (which === 'forum')   renderForumContent();
      });
    });
  }

  function initCrewSection() {
    const zoneSelect = document.getElementById('crew-zone');
    if (zoneSelect) {
      for (const [key, z] of Object.entries(ZONES)) {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = `${z.name} — ${z.coast}`;
        zoneSelect.appendChild(opt);
      }
    }
    const crewDateInput = document.getElementById('crew-date');
    if (crewDateInput) {
      const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
      crewDateInput.valueAsDate = tomorrow;
    }

    document.getElementById('crew-post-btn')?.addEventListener('click', () => {
      if (!BajaAuth.can('canUseCommunity')) { openUpgradeModal(); return; }
      // Pre-fill host name from user profile
      const user = currentUserIdentity();
      const nameEl = document.getElementById('crew-name');
      if (nameEl && !nameEl.value) nameEl.value = user.name;
      const form = document.getElementById('crew-post-form');
      if (form) delete form.dataset.editId;
      const btn = form?.querySelector('[type=submit]');
      if (btn) btn.textContent = 'Post My Trip';
      openModal('crew-post-modal');
    });
    document.getElementById('crew-modal-close')?.addEventListener('click', () => closeModal('crew-post-modal'));

    document.querySelectorAll('.crew-filter-pills .fpill').forEach(btn => {
      btn.addEventListener('click', () => {
        crewFilter = btn.dataset.crewFilter;
        document.querySelectorAll('.crew-filter-pills .fpill').forEach(b => b.classList.remove('fpill--active'));
        btn.classList.add('fpill--active');
        renderCrewTrips();
      });
    });

    const crewForm = document.getElementById('crew-post-form');
    if (crewForm) {
      crewForm.addEventListener('submit', e => {
        e.preventDefault();
        const editId  = crewForm.dataset.editId || null;
        const zone = document.getElementById('crew-zone').value;
        const speciesRaw = document.getElementById('crew-species-input').value;
        const date = document.getElementById('crew-date').value;
        const totalCost = Number(document.getElementById('crew-total-cost').value);
        const totalSpots = Number(document.getElementById('crew-total-spots').value);
        const host = document.getElementById('crew-name').value.trim();
        const message = document.getElementById('crew-message').value.trim();
        if (!zone || !speciesRaw || !date || !totalCost || !host) return;
        const species = speciesRaw.split(',').map(s => s.trim()).filter(Boolean);
        const user = currentUserIdentity();
        const initials = user.initials;
        const resolvedHost = host || user.name;

        if (editId) {
          // Edit mode: update existing stored trip
          const arr = commLoad('trips');
          const idx = arr.findIndex(t => t.id === editId);
          if (idx !== -1) {
            arr[idx] = { ...arr[idx], zone, species, date, totalCost, totalSpots, host: resolvedHost, hostInitials: initials, message: message || '' };
            commSave('trips', arr);
          }
          delete crewForm.dataset.editId;
          closeModal('crew-post-modal');
          renderCrewTrips();
          toast('Trip updated!', 'premium');
        } else {
          // Create new
          const newTrip = {
            id: commId('ct'), zone, species, date, totalCost, totalSpots,
            host: resolvedHost, hostInitials: initials,
            authorEmail: user.email, authorName: user.name, authorInitials: initials,
            message: message || '', joiners: [], status: 'open',
          };
          const stored = commLoad('trips');
          stored.unshift(newTrip);
          commSave('trips', stored);
          closeModal('crew-post-modal');
          renderCrewTrips();
          toast('Trip posted! Anglers can now request to join.', 'premium');
        }
        crewForm.reset();
        // (handled above in edit/create branches);
        crewDateInput && (crewDateInput.valueAsDate = (() => { const d = new Date(); d.setDate(d.getDate() + 1); return d; })());
      });
    }
  }

  // ═══════════════════════════════════════════
  // 12. SUBMIT REPORT — STEP FLOW + LEGAL LIMITS
  // ═══════════════════════════════════════════

  function openSubmitModal() {
    submitStep = 1;
    selectedSpecies.clear();
    document.querySelectorAll('.fish-pick-item').forEach(i => i.classList.remove('selected'));
    document.getElementById('submit-species').value = '';
    document.getElementById('legal-limit-warning')?.classList.add('hidden');
    document.getElementById('count-limit-check')?.classList.add('hidden');
    document.querySelectorAll('.submit-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('submit-panel-1')?.classList.add('active');
    document.querySelectorAll('.submit-step').forEach(s => s.classList.remove('submit-step--active', 'submit-step--done'));
    document.getElementById('step-indicator-1')?.classList.add('submit-step--active');
    document.getElementById('submit-success')?.classList.add('hidden');
    document.getElementById('report-form')?.classList.remove('hidden');
    openModal('submit-modal');
  }

  function goToSubmitStep(step) {
    submitStep = step;
    document.querySelectorAll('.submit-panel').forEach(p => p.classList.remove('active'));
    document.getElementById(`submit-panel-${step}`)?.classList.add('active');

    document.querySelectorAll('.submit-step').forEach((s, i) => {
      s.classList.remove('submit-step--active', 'submit-step--done');
      if (i + 1 < step) s.classList.add('submit-step--done');
      if (i + 1 === step) s.classList.add('submit-step--active');
    });
  }

  function validateLegalLimits() {
    if (!BajaAuth.can('canUseCatchValidation')) return true;
    const count = parseInt(document.getElementById('submit-count')?.value, 10) || 0;
    if (count <= 0) return true;

    const species = Array.from(selectedSpecies);
    if (species.length === 0) return true;

    // Check single-species limit (assume all count is of first selected species if only one)
    if (species.length === 1) {
      const sp = species[0];
      const limit = BAG_LIMITS[sp];
      if (limit && count > limit.limit) {
        showLimitWarning(count, limit.limit, (SPECIES_INFO[sp] || { name: sp }).name, limit.note);
        return false;
      }
    }

    // Check point system (total points can't exceed 10)
    let totalPoints = 0;
    species.forEach(sp => {
      const limit = BAG_LIMITS[sp];
      if (limit) totalPoints += limit.points;
    });

    if (totalPoints > 10) {
      const el = document.getElementById('count-limit-check');
      if (el) {
        el.textContent = `Your selected species exceed the 10-point CONAPESCA daily limit (${totalPoints.toFixed(1)} pts). Please reduce your selection.`;
        el.className = 'count-limit-check count-limit-check--error';
        el.classList.remove('hidden');
      }
      return false;
    }

    // All good
    const el = document.getElementById('count-limit-check');
    if (el && count > 0) {
      el.textContent = `✓ Count appears within legal limits per CONAPESCA regulations.`;
      el.className = 'count-limit-check count-limit-check--ok';
      el.classList.remove('hidden');
    }
    return true;
  }

  function showLimitWarning(count, limit, speciesName, note) {
    const el = document.getElementById('count-limit-check');
    if (!el) return;
    el.innerHTML = `
      <strong>${ICON('alert','ow-ico--gold')} Legal Limit Exceeded</strong><br>
      You entered ${count} ${escapeHtml(speciesName)}, but the legal limit is ${limit}/day.<br>
      <span class="limit-note">${escapeHtml(note)}</span>
    `;
    el.className = 'count-limit-check count-limit-check--error';
    el.classList.remove('hidden');
  }

  function initSubmitModal() {
    const fab = document.getElementById('fab-submit');
    fab?.addEventListener('click', openSubmitModal);
    document.getElementById('submit-modal-close')?.addEventListener('click', () => closeModal('submit-modal'));

    // Build fish picker
    buildFishPicker();

    // Zone dropdown
    const zoneSelect = document.getElementById('submit-zone');
    if (zoneSelect) {
      populateZoneSelect(zoneSelect);
    }
    const submitDate = document.getElementById('submit-date');
    if (submitDate) submitDate.valueAsDate = new Date();

    // Step navigation
    document.getElementById('step1-next')?.addEventListener('click', () => {
      if (selectedSpecies.size === 0) { toast('Please select at least one species.', 'error'); return; }
      goToSubmitStep(2);
    });
    document.getElementById('step2-back')?.addEventListener('click', () => goToSubmitStep(1));
    document.getElementById('step2-next')?.addEventListener('click', () => {
      const zone = document.getElementById('submit-zone')?.value;
      if (!zone) { toast('Please select a zone.', 'error'); return; }
      if (!validateLegalLimits()) return;
      goToSubmitStep(3);
    });
    document.getElementById('step3-back')?.addEventListener('click', () => goToSubmitStep(2));
    document.getElementById('submit-done-btn')?.addEventListener('click', () => {
      closeModal('submit-modal');
      switchScreen('home');
    });

    // Count input validates live
    document.getElementById('submit-count')?.addEventListener('input', () => {
      if (submitStep === 2) validateLegalLimits();
    });

    // Form submit
    document.getElementById('report-form')?.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('submit-name')?.value.trim();
      const date = document.getElementById('submit-date')?.value;
      const zone = document.getElementById('submit-zone')?.value;
      const speciesVal = document.getElementById('submit-species')?.value.trim();
      if (!name || !date || !zone || !speciesVal) { toast('Please complete all required fields.', 'error'); return; }
      if (!validateLegalLimits()) return;

      const newReport = {
        id: Date.now(),
        zone,
        species: speciesVal.split(',').filter(Boolean),
        rating: document.getElementById('submit-rating')?.value || 'good',
        date,
        angler: name,
        captain: document.getElementById('submit-captain')?.value.trim() || null,
        count: parseInt(document.getElementById('submit-count')?.value, 10) || 0,
        bait: document.getElementById('submit-bait')?.value.trim() || null,
        notes: document.getElementById('submit-notes')?.value.trim() || 'No additional notes.',
        userSubmitted: true,
      };

      REPORTS.unshift(newReport);
      saveUserReports();
      renderReports();
      updateStats();

      document.getElementById('report-form').classList.add('hidden');
      document.getElementById('submit-success')?.classList.remove('hidden');
      toast('Report submitted! Now live.', 'premium');
    });
  }

  function buildFishPicker() {
    const picker = document.getElementById('fish-picker');
    if (!picker) return;
    picker.innerHTML = '';
    for (const [key, info] of Object.entries(SPECIES_INFO)) {
      if (!info.img) continue;
      const item = document.createElement('div');
      item.className = 'fish-pick-item';
      item.dataset.species = key;

      const limit = BAG_LIMITS[key];
      item.innerHTML = `
        <img src="${info.img}" alt="${info.name}" loading="lazy">
        <span class="fish-pick-name">${info.name}</span>
        ${limit ? `<span class="fish-pick-limit">${limit.limit}/day</span>` : ''}
      `;

      item.addEventListener('click', () => {
        if (selectedSpecies.has(key)) {
          selectedSpecies.delete(key);
          item.classList.remove('selected');
        } else {
          selectedSpecies.add(key);
          item.classList.add('selected');
        }
        document.getElementById('submit-species').value = Array.from(selectedSpecies).join(',');
        updateSpeciesLimitWarning();
      });

      picker.appendChild(item);
    }
  }

  function updateSpeciesLimitWarning() {
    const el = document.getElementById('legal-limit-warning');
    if (!el) return;
    if (!BajaAuth.can('canUseCatchValidation')) { el.classList.add('hidden'); return; }
    if (selectedSpecies.size === 0) { el.classList.add('hidden'); return; }

    let totalPoints = 0;
    const limitInfo = [];
    selectedSpecies.forEach(sp => {
      const limit = BAG_LIMITS[sp];
      if (limit) {
        totalPoints += limit.points;
        limitInfo.push(`${(SPECIES_INFO[sp] || { name: sp }).name}: ${limit.limit}/day`);
      }
    });

    if (totalPoints > 10) {
      el.innerHTML = `${ICON('alert','ow-ico--gold')} Species selection exceeds the 10-point CONAPESCA daily limit (${totalPoints.toFixed(1)} pts). Please reduce.`;
      el.className = 'legal-limit-warning legal-limit-warning--error';
      el.classList.remove('hidden');
    } else if (limitInfo.length > 0) {
      el.innerHTML = `✓ Legal limits: ${limitInfo.join(' · ')} · Total: ${totalPoints.toFixed(1)}/10 pts`;
      el.className = 'legal-limit-warning legal-limit-warning--ok';
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  }

  // Demo data ships with fixed dates. Shift the whole seed set forward so the
  // newest report lands on today — keeps "this week" stats, Latest Reports, and
  // Now/Hot modes populated no matter when the app is opened. Spacing between
  // reports is preserved. Runs once, before user-submitted reports are merged.
  function normalizeSeedReportDates() {
    if (!Array.isArray(REPORTS) || !REPORTS.length) return;
    const times = REPORTS
      .map(r => new Date(r.date).getTime())
      .filter(t => !isNaN(t));
    if (!times.length) return;
    const maxTime = Math.max(...times);
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const offsetDays = Math.round((today.getTime() - maxTime) / 86400000);
    if (offsetDays <= 0) return; // already current (or future-dated) — leave as is
    REPORTS.forEach(r => {
      const d = new Date(r.date);
      if (isNaN(d.getTime())) return;
      d.setDate(d.getDate() + offsetDays);
      r.date = d.toISOString().slice(0, 10);
    });
  }

  function loadUserReports() {
    try {
      const saved = localStorage.getItem('baja-user-reports');
      if (saved) {
        JSON.parse(saved).forEach(r => { r.userSubmitted = true; REPORTS.unshift(r); });
      }
    } catch (e) { /* ignore */ }
  }

  function saveUserReports() {
    localStorage.setItem('baja-user-reports', JSON.stringify(REPORTS.filter(r => r.userSubmitted)));
  }

  // ═══════════════════════════════════════════
  // 13. UPGRADE MODAL
  // ═══════════════════════════════════════════

  function openUpgradeModal() {
    openModal('upgrade-modal');
  }

  function initUpgradeModal() {
    document.getElementById('upgrade-modal-close')?.addEventListener('click', () => closeModal('upgrade-modal'));
    document.getElementById('upgrade-modal')?.addEventListener('click', e => {
      if (e.target === e.currentTarget) closeModal('upgrade-modal');
    });

    document.querySelectorAll('.upgrade-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.upgrade-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.upgrade-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.querySelector(`.upgrade-panel[data-upanel="${tab.dataset.utab}"]`)?.classList.add('active');
      });
    });

    document.querySelectorAll('[data-utier-form]').forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const tier = form.dataset.utierForm;
        const email = form.querySelector('[data-auth-email]').value.trim().toLowerCase();
        const password = form.querySelector('[data-auth-password]').value.trim();
        const account = TEST_ACCOUNTS[email];
        if (!account || account.password !== password || account.tier !== tier) {
          toast('Use the matching BajaFish test login for this tier.', 'error');
          return;
        }
        BajaAuth.set(tier, email);
        closeModal('upgrade-modal');
        onAuthChange();
        toast(`${PLAN_CONFIG[tier].name} access active.`, 'premium');
      });
    });

    // Profile upgrade button
    document.getElementById('profile-upgrade-btn')?.addEventListener('click', openUpgradeModal);
  }

  function bindUpgradeButtons(container) {
    if (!container) return;
    container.querySelectorAll('[data-open-upgrade]').forEach(btn => {
      btn.addEventListener('click', openUpgradeModal);
    });
  }

  // ═══════════════════════════════════════════
  // 14. MODALS (generic open/close)
  // ═══════════════════════════════════════════

  function openModal(id) {
    document.getElementById(id)?.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(id) {
    document.getElementById(id)?.classList.remove('modal--open');
    document.body.style.overflow = '';
  }

  // ═══════════════════════════════════════════
  // 15. THEME
  // ═══════════════════════════════════════════

  function initTheme() {
    const saved = localStorage.getItem('baja-theme') || 'dark';
    applyTheme(saved);

    const toggleProfile = document.getElementById('theme-toggle-profile');
    if (toggleProfile) {
      toggleProfile.classList.toggle('active', saved !== 'light');
      toggleProfile.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme');
        const next = cur === 'light' ? 'dark' : 'light';
        applyTheme(next);
        toggleProfile.classList.toggle('active', next !== 'light');
      });
    }
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('baja-theme', theme);
  }

  // ═══════════════════════════════════════════
  // 16. ZONE DROPDOWNS
  // ═══════════════════════════════════════════

  function populateZoneSelect(select) {
    while (select.options.length > 1) select.remove(1);
    const pacific = [], cortez = [], both = [];
    for (const [key, z] of Object.entries(ZONES)) {
      if (z.coast === 'Pacific') pacific.push({ key, ...z });
      else if (z.coast === 'Sea of Cortez') cortez.push({ key, ...z });
      else both.push({ key, ...z });
    }
    function addGroup(label, zones) {
      const g = document.createElement('optgroup'); g.label = label;
      zones.forEach(z => { const o = document.createElement('option'); o.value = z.key; o.textContent = z.name; g.appendChild(o); });
      select.appendChild(g);
    }
    addGroup('Pacific Side', pacific);
    addGroup('Sea of Cortez', cortez);
    if (both.length) addGroup('Both Coasts', both);
  }

  function populateZoneDropdowns() {
    const zoneFilter = document.getElementById('zone-filter');
    if (zoneFilter) populateZoneSelect(zoneFilter);

    const submitZone = document.getElementById('submit-zone');
    if (submitZone) populateZoneSelect(submitZone);
  }

  // ═══════════════════════════════════════════
  // 17. AUTH CHANGE HANDLER
  // ═══════════════════════════════════════════

  function onAuthChange() {
    // Re-render data only — listeners already wired by wireApp()
    renderApp();
  }

  // ═══════════════════════════════════════════
  // 18. LOGOUT
  // ═══════════════════════════════════════════

  function initLogout() {
    document.getElementById('logout-btn')?.addEventListener('click', () => {
      BajaAuth.logout();
    });
  }

// ═══════════════════════════════════════════
// 19. INIT
// ═══════════════════════════════════════════

// initApp retained as alias for backwards compatibility with any internal calls
function initApp() {
  wireApp();
  renderApp();
}

function init() {
  // Always wire the login screen first (it's always in the DOM)
  initLoginScreen();

  // ALWAYS start on the login screen.
  showLoginScreen();

  // If a valid session exists, pre-fill and auto-select the right tier pill
  if (BajaAuth.isLoggedIn()) {
    const tier  = BajaAuth.tier;
    const email = BajaAuth.email;

    const emailEl = document.getElementById('login-email');
    const passEl  = document.getElementById('login-password');
    if (emailEl && email) emailEl.value = email;
    if (passEl) passEl.value = 'BajaFish123!';

    document.querySelectorAll('.ls-tier-pill').forEach(p => {
      p.classList.toggle('ls-tier-pill--active', p.dataset.tier === tier);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

})();
