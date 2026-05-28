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
    'free@bajafish.test':      { password: 'BajaFish123!', tier: 'free' },
    'scout@bajafish.test':     { password: 'BajaFish123!', tier: 'scout' },
    'pro@bajafish.test':       { password: 'BajaFish123!', tier: 'pro' },
    'unlimited@bajafish.test': { password: 'BajaFish123!', tier: 'unlimited' },
  };

  const PLAN_CONFIG = {
    free: {
      name: 'Free', label: 'Starter access', color: '#5C6E7D',
      captainSlots: 2, delayedDays: 3,
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
    },
    scout: {
      name: 'Scout', label: 'Maps + community starter', color: '#4A90D9',
      captainSlots: 6, delayedDays: 1,
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
      canUseForums: false,
      canUseMeetups: true,
      canUseAdvancedFilters: false,
      canSeePremiumInsights: true,
      canSubmitReports: true,
      canViewCaptainPerformance: false,
      canViewPredictions: false,
      canUseCatchValidation: true,
    },
    pro: {
      name: 'Pro', label: 'Full intelligence + captains', color: '#FFC72C',
      captainSlots: 999, delayedDays: 0,
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
      canUseCommunity: false,
      canUseForums: false,
      canUseMeetups: false,
      canUseAdvancedFilters: true,
      canSeePremiumInsights: true,
      canSubmitReports: true,
      canViewCaptainPerformance: true,
      canViewPredictions: false,
      canUseCatchValidation: true,
    },
    unlimited: {
      name: 'Unlimited', label: 'Full Baja ecosystem', color: '#FFC72C',
      captainSlots: 999, delayedDays: 0,
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
    isLoggedIn() { return !!this.tier; },
    set(tier, email) {
      this.tier = PLAN_CONFIG[tier] ? tier : 'free';
      this.email = email || null;
      localStorage.setItem('baja_tier', this.tier);
      if (email) localStorage.setItem('baja_email', email);
      onAuthChange();
    },
    logout() {
      this.tier = null;
      this.email = null;
      localStorage.removeItem('baja_tier');
      localStorage.removeItem('baja_email');
      showLoginScreen();
    },
    get plan() { return PLAN_CONFIG[this.tier] || PLAN_CONFIG.free; },
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

  function lockCard(title, body, cta = 'Unlock →') {
    return `<div class="lock-module">
      <div class="lock-module-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
      <div class="lock-module-title">${title}</div>
      <div class="lock-module-body">${body}</div>
      <button class="lock-module-cta" data-open-upgrade>${cta}</button>
    </div>`;
  }

  // ═══════════════════════════════════════════
  // 5. LOGIN SCREEN
  // ═══════════════════════════════════════════

  function showLoginScreen() {
    document.getElementById('login-screen').classList.remove('hidden');
    document.getElementById('app-shell').classList.add('hidden');
    document.getElementById('fab-submit').classList.add('hidden');
  }

  function showAppShell() {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('app-shell').classList.remove('hidden');
    document.getElementById('fab-submit').classList.remove('hidden');
  }

  function initLoginScreen() {
    // Tier pill selector syncs email
    const tierEmails = {
      free: 'free@bajafish.test',
      scout: 'scout@bajafish.test',
      pro: 'pro@bajafish.test',
      unlimited: 'unlimited@bajafish.test',
    };

    document.querySelectorAll('.tier-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.tier-pill').forEach(p => p.classList.remove('tier-pill--active'));
        pill.classList.add('tier-pill--active');
        document.getElementById('login-email').value = tierEmails[pill.dataset.tier] || '';
      });
    });

    document.getElementById('login-form').addEventListener('submit', e => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim().toLowerCase();
      const password = document.getElementById('login-password').value.trim();
      const account = TEST_ACCOUNTS[email];
      const errEl = document.getElementById('login-error');

      if (!account || account.password !== password) {
        errEl.classList.remove('hidden');
        return;
      }
      errEl.classList.add('hidden');
      BajaAuth.set(account.tier, email);
      showAppShell();
      initApp();
    });
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

    document.querySelectorAll(`.bnav-item[data-screen="${name}"]`).forEach(b => b.classList.add('active'));

    // Show FAB only on home
    document.getElementById('fab-submit').classList.toggle('hidden', name !== 'home');

    // Lazy init map
    if (name === 'maps') setTimeout(() => initMap(), 100);

    // Scroll to top of new screen
    if (screen) screen.scrollTop = 0;
  }

  function initNav() {
    document.querySelectorAll('.bnav-item').forEach(btn => {
      btn.addEventListener('click', () => switchScreen(btn.dataset.screen));
    });
  }

  // ═══════════════════════════════════════════
  // 7. MEMBERSHIP UI
  // ═══════════════════════════════════════════

  function updateMembershipUI() {
    const plan = BajaAuth.plan;
    const tier = BajaAuth.tier;

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

    const upgradeBtn = document.getElementById('profile-upgrade-btn');
    if (upgradeBtn) upgradeBtn.classList.toggle('hidden', tier === 'unlimited');

    // Re-render membership modules
    renderMembershipModules();
  }

  function renderMembershipModules() {
    renderHotspots();
    renderTopCaptains();
    renderCommunityContent();
    renderMapLockState();
  }

  function renderHotspots() {
    const el = document.getElementById('hotspots-content');
    if (!el) return;
    if (!BajaAuth.can('canSeeTopHotspots')) {
      el.innerHTML = lockCard('Unlock Top 5 Hot Spots', 'See where the bite is concentrating right now across Baja. Pro and above.');
      bindUpgradeButtons(el);
      return;
    }
    const rows = getHotspotRankings();
    el.innerHTML = rows.map((row, i) => `
      <div class="intel-row">
        <span class="intel-rank">${i + 1}</span>
        <div class="intel-row-info">
          <div class="intel-row-primary">${escapeHtml(row.info.name)}</div>
          <div class="intel-row-secondary">${escapeHtml(row.info.coast || '')}</div>
        </div>
        <span class="intel-count">${row.count} <span>reports</span></span>
      </div>
    `).join('');
  }

  function renderTopCaptains() {
    const el = document.getElementById('top-captains-content');
    if (!el) return;
    if (!BajaAuth.can('canSeeTopCaptains')) {
      el.innerHTML = lockCard('Unlock Hottest Captains', 'See the top 10 producing captains based on successful trips this week.');
      bindUpgradeButtons(el);
      return;
    }
    const rows = getCaptainRankings();
    el.innerHTML = rows.map((row, i) => `
      <div class="intel-row">
        <span class="intel-rank">${i + 1}</span>
        <div class="intel-row-primary">${escapeHtml(row.name)}</div>
        <span class="intel-count">${row.count} <span>trips</span></span>
      </div>
    `).join('');
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
    const features = {
      free: ['Delayed reports (3-day delay)', 'Browse 2 captain profiles', 'Limited zone map', 'No hot spots or rankings'],
      scout: ['Live reports', 'Heat maps unlocked', 'Browse 6 captain profiles', 'Community starter access', 'Meetups access'],
      pro: ['Full fishing intelligence', 'Live heat maps by species', 'All captain profiles + contact', 'Full booking access', 'No community or fisherman search'],
      unlimited: ['Everything in BajaFish', 'Full community + forums', 'Search all fishermen', 'Live maps + all overlays', 'Meetups + crew discovery'],
    };
    const list = features[BajaAuth.tier] || [];
    el.innerHTML = `
      <div class="plan-detail-header" data-plan="${BajaAuth.tier}">
        <span class="plan-detail-name">${plan.name}</span>
        <span class="plan-detail-label">${plan.label}</span>
      </div>
      <ul class="plan-detail-features">
        ${list.map(f => `<li>${escapeHtml(f)}</li>`).join('')}
      </ul>
    `;
  }

  function renderProfilePermissions() {
    const el = document.getElementById('profile-permissions');
    if (!el) return;
    const checks = [
      { key: 'canSeeLiveReports', label: 'Live reports' },
      { key: 'canSeeTopHotspots', label: 'Top hot spots' },
      { key: 'canSeeTopCaptains', label: 'Hottest captains' },
      { key: 'canUseLiveHeatMaps', label: 'Live heat maps' },
      { key: 'canContactCaptains', label: 'Captain contact & booking' },
      { key: 'canUseCommunity', label: 'Community access' },
      { key: 'canSearchFishermen', label: 'Search fishermen' },
      { key: 'canUseForums', label: 'Forums' },
      { key: 'canUseMeetups', label: 'Meetups' },
    ];
    el.innerHTML = checks.map(c => `
      <div class="permission-row ${BajaAuth.can(c.key) ? 'permission-row--on' : 'permission-row--off'}">
        <span class="permission-icon">${BajaAuth.can(c.key) ? '✓' : '✕'}</span>
        <span class="permission-label">${escapeHtml(c.label)}</span>
      </div>
    `).join('');
  }

  function renderPlanComparison() {
    const el = document.getElementById('plan-comparison');
    if (!el) return;
    const tiers = ['free', 'scout', 'pro', 'unlimited'];
    const features = [
      { label: 'Live Reports', key: 'canSeeLiveReports' },
      { label: 'Hot Spots', key: 'canSeeTopHotspots' },
      { label: 'Heat Maps', key: 'canUseLiveHeatMaps' },
      { label: 'Captain Contact', key: 'canContactCaptains' },
      { label: 'Community', key: 'canUseCommunity' },
      { label: 'Search Anglers', key: 'canSearchFishermen' },
      { label: 'Forums', key: 'canUseForums' },
    ];
    el.innerHTML = `
      <table class="plan-table">
        <thead>
          <tr>
            <th></th>
            ${tiers.map(t => `<th class="${BajaAuth.tier === t ? 'plan-table-current' : ''}">${PLAN_CONFIG[t].name}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${features.map(f => `
            <tr>
              <td class="plan-table-feature">${escapeHtml(f.label)}</td>
              ${tiers.map(t => `<td class="${BajaAuth.tier === t ? 'plan-table-current' : ''}">${PLAN_CONFIG[t][f.key] ? '<span class="plan-check">✓</span>' : '<span class="plan-x">—</span>'}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
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

  function renderReports() {
    const container = document.getElementById('reports-list');
    if (!container) return;

    const zone = document.getElementById('zone-filter')?.value || 'all';
    const species = document.getElementById('species-filter')?.value || 'all';

    let filtered = getVisibleReports().filter(r => {
      if (zone !== 'all' && r.zone !== zone) return false;
      if (species !== 'all' && !r.species.includes(species)) return false;
      if (activeRating !== 'all' && r.rating !== activeRating) return false;
      return true;
    });

    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (!BajaAuth.can('canSeeLiveReports')) {
      // Show delayed badge
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - BajaAuth.plan.delayedDays);
      // Already filtered in getVisibleReports
    }

    if (filtered.length === 0) {
      container.innerHTML = '<div class="empty-state"><p>No reports match your filters.</p></div>';
      return;
    }

    const ratingMeta = {
      hot:  { label: 'Hot',  cls: 'rc--hot' },
      good: { label: 'Good', cls: 'rc--good' },
      slow: { label: 'Slow', cls: 'rc--slow' },
    };

    const cards = filtered.map(r => {
      const zoneInfo = ZONES[r.zone] || { name: r.zone, coast: '' };
      const speciesNames = r.species.map(s => (SPECIES_INFO[s] || { name: s }).name).join(', ');
      const rm = ratingMeta[r.rating] || { label: r.rating, cls: '' };

      const fishImgs = r.species
        .map(s => SPECIES_INFO[s]).filter(sp => sp && sp.img)
        .map(sp => `<img class="rc-fish-img" src="${sp.img}" alt="${escapeHtml(sp.name)}" loading="lazy">`)
        .join('');

      const metaParts = [
        formatDate(r.date),
        escapeHtml(r.angler),
        r.captain ? `Capt. ${escapeHtml(r.captain)}` : null,
        r.count ? `${r.count} fish` : null,
      ].filter(Boolean).join(' · ');

      return `
        <article class="rc ${rm.cls}">
          ${fishImgs ? `<div class="rc-gallery">${fishImgs}</div>` : ''}
          <div class="rc-body">
            <div class="rc-eyebrow">
              <span class="rc-zone">${escapeHtml(zoneInfo.name)}${zoneInfo.coast ? ` · ${zoneInfo.coast}` : ''}</span>
              <span class="rc-badge rc-badge--${r.rating}">${rm.label}</span>
            </div>
            <h3 class="rc-species">${speciesNames}</h3>
            <div class="rc-meta">${metaParts}</div>
            <p class="rc-notes">${escapeHtml(r.notes)}</p>
            ${r.bait ? `<div class="rc-bait">🪝 ${escapeHtml(r.bait)}</div>` : ''}
          </div>
        </article>
      `;
    });

    // Inject premium CTA after 4th card for free users
    if (!BajaAuth.can('canSeeLiveReports') && cards.length >= 3) {
      cards.splice(3, 0, `
        <div class="premium-cta-card">
          <div class="prem-eyebrow">Delayed Data — Free Tier</div>
          <h3 class="prem-title">See Live Reports Right Now</h3>
          <p class="prem-body">You're seeing reports from ${BajaAuth.plan.delayedDays} days ago. Upgrade Scout or above to see today's live fishing intelligence.</p>
          <button class="prem-btn" data-open-upgrade>Unlock Live Reports</button>
        </div>
      `);
    }

    container.innerHTML = cards.join('');
    bindUpgradeButtons(container);
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
    const pillsWrap = document.getElementById('home-filter-pills');
    if (pillsWrap) {
      pillsWrap.querySelectorAll('.fpill').forEach(pill => {
        pill.addEventListener('click', () => {
          pillsWrap.querySelectorAll('.fpill').forEach(p => p.classList.remove('fpill--active'));
          pill.classList.add('fpill--active');
          activeRating = pill.dataset.rating;
          renderReports();
        });
      });
    }

    const zoneFilter = document.getElementById('zone-filter');
    const speciesFilter = document.getElementById('species-filter');
    if (zoneFilter) zoneFilter.addEventListener('change', renderReports);
    if (speciesFilter) speciesFilter.addEventListener('change', renderReports);
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
    const zoneInfo = ZONES[c.zone] || { name: c.zone, coast: '' };
    const initials = c.name.replace(/Capit[aá]n\s*/i, '').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    const isTopRated = c.rating >= 5;
    const reportsWk = getReportsThisWeek(c.name);
    const unlocked = BajaAuth.can('canSeeAllCaptains') || cardIndex < BajaAuth.plan.captainSlots;
    const stars = '★'.repeat(c.rating) + '☆'.repeat(5 - c.rating);

    const maxChips = 3;
    const visible = c.species.slice(0, maxChips);
    const extra = c.species.length - maxChips;
    const chipsHTML = visible.map(s => `<span class="cap-species-chip">${escapeHtml(s)}</span>`).join('')
      + (extra > 0 ? `<span class="cap-species-chip cap-species-chip--more">+${extra}</span>` : '');

    let actionsHTML;
    if (unlocked) {
      actionsHTML = `
        <div class="cap-contact-row">
          <span class="cap-phone">${escapeHtml(c.phone)}</span>
        </div>
        <div class="cap-actions">
          <a href="tel:${c.phone}" class="cap-btn cap-btn--call">Call</a>
          ${c.whatsapp ? `<a href="https://wa.me/${c.phone.replace(/\D/g,'')}" class="cap-btn cap-btn--wa" target="_blank" rel="noopener">WhatsApp</a>` : ''}
          <button class="cap-btn cap-btn--reports" data-screen="home">Reports</button>
        </div>`;
    } else {
      actionsHTML = `
        <div class="cap-contact-row">
          <span class="cap-phone-blur">+52 ••• ••• ••••</span>
        </div>
        <div class="cap-actions">
          <button class="cap-btn cap-btn--locked" data-open-upgrade>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Unlock Contact
          </button>
          <button class="cap-btn cap-btn--reports" data-screen="home">Reports</button>
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
            <div class="cap-stars">${stars}</div>
          </div>
          ${!unlocked ? `<div class="cap-lock-badge">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Pro
          </div>` : ''}
        </div>
        <div class="cap-species-row">${chipsHTML}</div>
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
        <p class="cap-bio">${escapeHtml(c.bio)}</p>
        ${actionsHTML}
      </div>
    `;
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
        items = [{ value: 0, label: 'Any Rating' }, { value: 5, label: '★★★★★  5.0 only' }, { value: 4, label: '★★★★☆  4+ Stars' }, { value: 3, label: '★★★☆☆  3+ Stars' }];
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

    for (const [key, zone] of Object.entries(ZONES)) {
      const color = colors[zone.coast] || '#666';
      const marker = L.circleMarker([zone.lat, zone.lng], {
        radius: 9, fillColor: color, color: '#fff', weight: 2.5, fillOpacity: 0.9,
      }).addTo(map);

      const zoneReports = REPORTS.filter(r => r.zone === key);
      const lodging = (typeof LODGING !== 'undefined') ? LODGING[key] : null;
      const restaurants = (typeof RESTAURANTS !== 'undefined') ? RESTAURANTS[key] : null;
      const activities = (typeof ACTIVITIES !== 'undefined') ? ACTIVITIES[key] : null;
      const speciesGuide = (typeof SPECIES_GUIDE !== 'undefined') ? SPECIES_GUIDE[key] : null;

      const coastCls = zone.coast === 'Pacific' ? 'popup-coast--pac' : zone.coast === 'Sea of Cortez' ? 'popup-coast--cor' : 'popup-coast--both';
      let html = `<div class="popup-header">
        <div class="popup-title">${escapeHtml(zone.name)}</div>
        <div class="popup-meta-row">
          <span class="popup-coast-pill ${coastCls}">${escapeHtml(zone.coast)}</span>
          ${zoneReports.length ? `<span class="popup-report-count">${zoneReports.length} reports</span>` : ''}
        </div>
      </div>`;

      const sectionHead = (icon, label) => `<div class="popup-section-head"><span>${icon}</span>${label}</div>`;

      if (lodging?.length) {
        html += `<div class="popup-section">${sectionHead('🏠', 'Stay')}${lodging.map(l => `<div class="popup-listing"><div class="popup-listing-name">${escapeHtml(l.name)}</div><div class="popup-listing-sub">${escapeHtml(l.type)} · ${escapeHtml(l.note)}</div></div>`).join('')}</div>`;
      }
      if (restaurants?.length) {
        html += `<div class="popup-section">${sectionHead('🍽', 'Eat')}${restaurants.map(r => `<div class="popup-listing"><div class="popup-listing-name">${escapeHtml(r.name)}</div><div class="popup-listing-sub">${escapeHtml(r.cuisine)} · ${escapeHtml(r.note)}</div></div>`).join('')}</div>`;
      }
      if (speciesGuide?.length) {
        html += `<div class="popup-section">${sectionHead('🐟', 'Fish')}${speciesGuide.map(sp => `<div class="popup-listing"><div class="popup-listing-name">${escapeHtml(sp.name)}</div><div class="popup-listing-sub">${escapeHtml(sp.bestMonths)} · ${escapeHtml(sp.bait)}</div></div>`).join('')}</div>`;
      }

      marker.bindPopup(html, { maxWidth: 320, minWidth: 260 });
      marker.bindTooltip(zone.name, { direction: 'top', offset: [0, -10], className: 'map-tooltip' });
    }
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
        } else {
          heatMapActive = false;
          document.getElementById('heat-search-bar')?.classList.add('hidden');
          document.getElementById('map-lock-overlay')?.classList.add('hidden');
        }

        layerBar.querySelectorAll('.map-layer-btn').forEach(b => b.classList.remove('map-layer-btn--active'));
        btn.classList.add('map-layer-btn--active');
      });
    });

    bindUpgradeButtons(document.getElementById('map-lock-overlay'));
  }

  // ═══════════════════════════════════════════
  // 11. COMMUNITY
  // ═══════════════════════════════════════════

  function renderCommunityContent() {
    renderMeetupsContent();
    renderForumContent();
  }

  function renderMeetupsContent() {
    const el = document.getElementById('meetups-content');
    if (!el) return;
    if (!BajaAuth.can('canUseMeetups')) {
      el.innerHTML = lockCard(
        'Unlock Meetups',
        'Connect with anglers planning Baja trips. Coordinate gear, logistics, and shared knowledge. Scout and above.',
        'Unlock Meetups'
      );
      bindUpgradeButtons(el);
      return;
    }
    el.innerHTML = `
      <div class="community-feature-card">
        <div class="community-feature-icon">📅</div>
        <h3>Baja Meetups</h3>
        <p>Angler meetups across Baja California — find groups heading to your zone.</p>
        <div class="meetup-list">
          <div class="meetup-item"><div class="meetup-date">May 15</div><div class="meetup-info"><div class="meetup-title">La Paz Yellowtail Weekend</div><div class="meetup-meta">6 anglers · Sea of Cortez</div></div></div>
          <div class="meetup-item"><div class="meetup-date">May 22</div><div class="meetup-info"><div class="meetup-title">San Quintín Rock Cod Run</div><div class="meetup-meta">4 anglers · Pacific</div></div></div>
          <div class="meetup-item"><div class="meetup-date">Jun 1</div><div class="meetup-info"><div class="meetup-title">Loreto Offshore Season Opener</div><div class="meetup-meta">8 anglers · Sea of Cortez</div></div></div>
        </div>
      </div>
    `;
  }

  function renderForumContent() {
    const el = document.getElementById('forum-content');
    if (!el) return;
    if (!BajaAuth.can('canUseForums')) {
      el.innerHTML = lockCard(
        'Unlock Forums',
        'Discuss tactics, zones, captain recommendations, and more. Full community discussion. Unlimited only.',
        'Unlock Forums'
      );
      bindUpgradeButtons(el);
      return;
    }
    el.innerHTML = `
      <div class="community-feature-card">
        <div class="community-feature-icon">💬</div>
        <h3>Community Forum</h3>
        <p>Discuss tactics, share zones, and get recommendations from serious Baja anglers.</p>
        <div class="forum-list">
          <div class="forum-item"><div class="forum-title">Best dorado lures for July?</div><div class="forum-meta">14 replies · Pelagic</div></div>
          <div class="forum-item"><div class="forum-title">Cabo vs La Paz for marlin season</div><div class="forum-meta">22 replies · Billfish</div></div>
          <div class="forum-item"><div class="forum-title">First Baja trip — what should I know?</div><div class="forum-meta">41 replies · Trip Planning</div></div>
          <div class="forum-item"><div class="forum-title">Live bait vs iron jigs for yellowtail</div><div class="forum-meta">19 replies · Technique</div></div>
        </div>
      </div>
    `;
  }

  function initCommunityTabs() {
    document.querySelectorAll('.community-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.community-tab').forEach(t => t.classList.remove('community-tab--active'));
        document.querySelectorAll('.community-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('community-tab--active');
        document.getElementById('ctab-' + tab.dataset.ctab)?.classList.add('active');
      });
    });
  }

  // Pool a Panga
  function getTrips() {
    const stored = JSON.parse(localStorage.getItem('baja_crew_trips') || '[]');
    return [...stored, ...(typeof CREW_TRIPS !== 'undefined' ? CREW_TRIPS : [])];
  }

  function renderCrewTrips() {
    const list = document.getElementById('crew-trips-list');
    if (!list) return;

    if (!BajaAuth.can('canUseCommunity')) {
      list.innerHTML = lockCard(
        'Unlock Pool a Panga',
        'Share panga costs with real anglers heading the same direction. Scout and above.',
        'Unlock Community'
      );
      bindUpgradeButtons(list);
      const elOT = document.getElementById('stat-open-trips');
      const elSP = document.getElementById('stat-crew-spots');
      const elAV = document.getElementById('stat-avg-split');
      if (elOT) elOT.textContent = '—';
      if (elSP) elSP.textContent = '—';
      if (elAV) elAV.textContent = 'Locked';
      return;
    }

    const today = new Date(); today.setHours(0, 0, 0, 0);
    let trips = getTrips().filter(t => new Date(t.date) >= today);
    if (crewFilter === 'pacific') trips = trips.filter(t => (ZONES[t.zone] || {}).coast === 'Pacific');
    if (crewFilter === 'cortez')  trips = trips.filter(t => (ZONES[t.zone] || {}).coast === 'Sea of Cortez');
    if (crewFilter === 'open')    trips = trips.filter(t => t.filledSpots < t.totalSpots);
    trips.sort((a, b) => new Date(a.date) - new Date(b.date));

    const openTrips = trips.filter(t => t.filledSpots < t.totalSpots);
    const totalSpots = trips.reduce((s, t) => s + (t.totalSpots - t.filledSpots), 0);
    const costs = trips.map(t => Math.round(t.totalCost / t.totalSpots));
    const avgCost = costs.length ? '$' + Math.round(costs.reduce((a, b) => a + b, 0) / costs.length) : '—';

    const elOT = document.getElementById('stat-open-trips');
    const elSP = document.getElementById('stat-crew-spots');
    const elAV = document.getElementById('stat-avg-split');
    if (elOT) elOT.textContent = openTrips.length;
    if (elSP) elSP.textContent = totalSpots;
    if (elAV) elAV.textContent = avgCost;

    if (!trips.length) {
      list.innerHTML = '<div class="empty-state"><p>No trips match this filter.</p></div>';
      return;
    }

    list.innerHTML = trips.map(t => {
      const zone = ZONES[t.zone] || { name: t.zone, coast: '' };
      const spotsLeft = t.totalSpots - t.filledSpots;
      const perPerson = Math.round(t.totalCost / t.totalSpots);
      const isFull = spotsLeft <= 0;
      const coastCls = zone.coast === 'Pacific' ? 'pac' : 'cor';
      const tripDate = new Date(t.date + 'T12:00:00');
      const diffDays = Math.round((tripDate - today) / 86400000);
      const dateStr = tripDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const daysLabel = diffDays === 0 ? 'Today' : diffDays === 1 ? 'Tomorrow' : `${diffDays} days away`;
      const chips = t.species.map(s => `<span class="crew-species-chip">${escapeHtml(s)}</span>`).join('');
      const pips = Array.from({ length: t.totalSpots }, (_, i) => `<span class="crew-pip${i < t.filledSpots ? ' crew-pip--filled' : ''}"></span>`).join('');

      return `
        <div class="crew-card${isFull ? ' crew-card--full' : ''}">
          <div class="crew-card-top">
            <div>
              <div class="crew-zone-row"><span class="crew-zone-name">${escapeHtml(zone.name)}</span><span class="crew-coast-badge crew-coast-badge--${coastCls}">${escapeHtml(zone.coast)}</span></div>
              <div class="crew-species-row">${chips}</div>
            </div>
            <div class="crew-date-col"><div class="crew-date">${dateStr}</div><div class="crew-days-away">${daysLabel}</div></div>
          </div>
          <div class="crew-cost-row">
            <span class="crew-cost-num">$${perPerson}</span><span class="crew-cost-label">/person</span>
            <span class="crew-cost-total"> · $${t.totalCost} total · ${t.totalSpots}-person panga</span>
          </div>
          <p class="crew-message">"${escapeHtml(t.message)}"</p>
          <div class="crew-footer">
            <div class="crew-host-row">
              <div class="crew-host-avatar">${escapeHtml(t.hostInitials)}</div>
              <span class="crew-host-name">${escapeHtml(t.host)}</span>
              <div class="crew-pips">${pips}</div>
              <span class="crew-spots-left ${isFull ? 'crew-spots-left--full' : ''}">${isFull ? 'Full' : `${spotsLeft} spot${spotsLeft !== 1 ? 's' : ''} left`}</span>
            </div>
            ${isFull
              ? `<button class="crew-join-btn crew-join-btn--full" disabled>Trip Full</button>`
              : `<button class="crew-join-btn" data-trip-id="${t.id}">Join Trip</button>`
            }
          </div>
        </div>
      `;
    }).join('');

    list.querySelectorAll('.crew-join-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        toast('Request sent! The trip host will contact you.', 'premium');
        btn.textContent = 'Requested ✓';
        btn.disabled = true;
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
        const zone = document.getElementById('crew-zone').value;
        const speciesRaw = document.getElementById('crew-species-input').value;
        const date = document.getElementById('crew-date').value;
        const totalCost = Number(document.getElementById('crew-total-cost').value);
        const totalSpots = Number(document.getElementById('crew-total-spots').value);
        const host = document.getElementById('crew-name').value.trim();
        const message = document.getElementById('crew-message').value.trim();
        if (!zone || !speciesRaw || !date || !totalCost || !host) return;
        const species = speciesRaw.split(',').map(s => s.trim()).filter(Boolean);
        const initials = host.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
        const newTrip = { id: 'ct-' + Date.now(), zone, species, date, totalCost, totalSpots, filledSpots: 1, host, hostInitials: initials, message: message || 'No message.', captain: null };
        const stored = JSON.parse(localStorage.getItem('baja_crew_trips') || '[]');
        stored.unshift(newTrip);
        localStorage.setItem('baja_crew_trips', JSON.stringify(stored));
        closeModal('crew-post-modal');
        renderCrewTrips();
        toast('Trip posted! Anglers can now request to join.', 'premium');
        crewForm.reset();
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
        el.textContent = `⚠️ Your selected species exceed the 10-point CONAPESCA daily limit (${totalPoints.toFixed(1)} pts). Please reduce your selection.`;
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
      <strong>⚠️ Legal Limit Exceeded</strong><br>
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
      el.innerHTML = `⚠️ Species selection exceeds the 10-point CONAPESCA daily limit (${totalPoints.toFixed(1)} pts). Please reduce.`;
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
    updateMembershipUI();
    renderReports();
    renderCaptains();
    renderCrewTrips();
    updateStats();
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

  function initApp() {
    populateZoneDropdowns();
    loadUserReports();
    initReportFilters();
    updateMembershipUI();
    renderReports();
    renderCaptains();
    updateCaptainStats();
    initCaptainsSection();
    renderCrewTrips();
    initCrewSection();
    initCommunityTabs();
    renderCommunityContent();
    updateStats();
    initMapLayers();
    initSubmitModal();
    initUpgradeModal();
    initLogout();
    initTheme();
    switchScreen('home');
  }

  function init() {
    initLoginScreen();

    // Restore session if previously logged in
    if (BajaAuth.isLoggedIn()) {
      showAppShell();
      initApp();
    } else {
      showLoginScreen();
    }

    // Global upgrade button binding
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-open-upgrade]');
      if (btn) openUpgradeModal();
    });
  }

  init();

})();
