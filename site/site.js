/* BajaFish public site, motion + real-data population. Vanilla, XSS-safe DOM building. */
(function () {
  'use strict';
  // data.js declares these as lexical `const` globals (not window props), capture defensively
  var SPI  = (typeof SPECIES_INFO !== 'undefined') ? SPECIES_INFO : null;
  var CAPS = (typeof CAPTAINS !== 'undefined') ? CAPTAINS : null;
  var REPS = (typeof REPORTS !== 'undefined') ? REPORTS : null;
  var ZN   = (typeof ZONES !== 'undefined') ? ZONES : {};
  var DEP  = (typeof DEPARTURES !== 'undefined') ? DEPARTURES : {};
  var LODG = (typeof LODGING !== 'undefined') ? LODGING : {};
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var _lastFocus = null; // element to restore focus to when a modal closes
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var nm = function (k) { return (SPI && SPI[k] && SPI[k].name) || k; };
  var fixImg = function (p) { return p ? (p[0] === '/' ? p : '/' + p) : ''; };

  // element helper
  function E(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  // static (data-free) SVG icons -> fragment
  var SVG = {
    star: '<svg class="ico" viewBox="0 0 24 24"><polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2"/></svg>',
    pin: '<svg class="ico" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    check: '<svg class="ico" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>',
    arrow: '<svg class="ico" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    plus: '<svg class="ico" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>'
  };
  function ico(name) { return document.createRange().createContextualFragment(SVG[name]); }

  /* ---- reveal on scroll ---- */
  function reveal() {
    var els = document.querySelectorAll('[data-reveal],[data-rise]');
    if (reduce || !('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (e) {
        if (!e.isIntersecting) return;
        var d = parseInt(e.target.getAttribute('data-rise-d') || e.target.getAttribute('data-reveal-d') || 0, 10);
        e.target.style.transitionDelay = (d * 0.1) + 's';
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---- hero parallax ---- */
  function parallax() {
    if (reduce) return;
    var media = $('.hero__media'); if (!media) return;
    var tick = false;
    addEventListener('scroll', function () {
      if (tick) return; tick = true;
      requestAnimationFrame(function () {
        media.style.transform = 'translate3d(0,' + Math.min(scrollY * 0.4, 360) + 'px,0)';
        tick = false;
      });
    }, { passive: true });
  }

  /* ---- nav state + mobile menu ---- */
  function navScroll() {
    var nav = $('#nav');
    var on = function () { nav.classList.toggle('solid', scrollY > 24); };
    on(); addEventListener('scroll', on, { passive: true });
    var b = $('#navBurger');
    if (b) b.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('.nav__links a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  /* ---- count up (whole numbers + optional decimals via data-dec) ---- */
  function counts() {
    var els = document.querySelectorAll('.count');
    var run = function (el) {
      var to = parseFloat(el.getAttribute('data-to')) || 0;
      var dec = parseInt(el.getAttribute('data-dec'), 10) || 0;
      var fmt = function (v) { return dec ? v.toFixed(dec) : String(Math.round(v)); };
      if (reduce) { el.textContent = fmt(to); return; }
      var st = null;
      (function step(t) {
        if (!st) st = t;
        var p = Math.min((t - st) / 1300, 1);
        el.textContent = fmt(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step); else el.textContent = fmt(to);
      })(performance.now ? performance.now() : 0);
    };
    if (!('IntersectionObserver' in window)) { els.forEach(run); return; }
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (e) { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.5 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---- count-up targets driven from real data (hero stats + trust band, kept in sync) ---- */
  function trust() {
    // species roster = de-duplicated window.CATCH (the explorer's own source of truth)
    var CATCH = (typeof window.CATCH !== 'undefined') ? window.CATCH : null;
    var speciesN = CATCH ? CATCH.filter(function (s) { return !(s.notes && /^DUPLICATE/.test(s.notes)) && ILLUS[s.key]; }).length : null;
    var villages = Object.keys(ZN).length || null;
    // apply to every count-up element that opts in by data-stat, wherever it lives
    var vals = { villages: villages, species: speciesN };
    document.querySelectorAll('.count[data-stat]').forEach(function (el) {
      var v = vals[el.getAttribute('data-stat')];
      if (v != null) el.setAttribute('data-to', String(v));
    });
  }

  /* ---- coast chips ---- */
  function coasts() {
    var pac = ['yellowtail', 'white-seabass', 'calico-bass', 'lingcod', 'bonito', 'halibut'];
    var cor = ['striped-marlin', 'dorado', 'roosterfish', 'pargo', 'cabrilla', 'wahoo'];
    var fill = function (sel, keys) {
      var ul = $(sel); if (!ul) return;
      keys.forEach(function (k) { ul.appendChild(E('li', null, nm(k))); });
    };
    fill('[data-coast-pac]', pac); fill('[data-coast-cor]', cor);
  }

  /* ---- per-coast live report pressure, under each coast card ---- */
  function coastsLive() {
    if (!REPS || !REPS.length) return;
    var rows = document.querySelectorAll('[data-coast-live]');
    if (!rows.length) return;
    var agg = {};
    REPS.forEach(function (r) {
      var coast = (ZN[r.zone] || {}).coast;
      // Cabo / 'Both' reports count toward the Cortez side (that's where Cabo fishes)
      if (coast === 'Both') coast = 'Sea of Cortez';
      if (coast !== 'Pacific' && coast !== 'Sea of Cortez') return;
      var a = agg[coast] || (agg[coast] = { n: 0, hot: 0 });
      a.n++; if (r.rating === 'hot') a.hot++;
    });
    rows.forEach(function (row) {
      var a = agg[row.getAttribute('data-coast-live')]; if (!a) return;
      var bs = row.querySelectorAll('b');
      if (bs[0]) bs[0].textContent = String(a.n);
      if (bs[1]) bs[1].textContent = String(a.hot);
      row.removeAttribute('hidden');
    });
  }

  /* ---- featured captains ---- */
  function captains() {
    var grid = $('#capGrid'); if (!grid || !CAPS) return;

    // show every captain, ranked by rating then experience
    var ranked = CAPS.slice().sort(function (a, b) {
      return (b.rating || 0) - (a.rating || 0) || (b.years || 0) - (a.years || 0);
    });

    var cards = [], speciesSet = {};
    ranked.forEach(function (c) {
      var zone = ZN[c.zone] || {};
      var coast = zone.coast || 'Pacific';
      var cortez = coast === 'Sea of Cortez';
      var port = (c.homePort || zone.name || c.region || 'Baja California') + ' · ' + coast;
      var initials = (c.name || '?').replace(/Capit[aá]n\s*/i, '').split(' ').map(function (w) { return w[0]; }).slice(0, 2).join('');
      var rate = (c.rating != null) ? Number(c.rating).toFixed(1) : '5.0';
      var sps = (c.specialtySpecies || c.species || []).map(function (s) { return nm(s); });

      var art = E('article', 'cap ' + (cortez ? 'is-cortez' : 'is-pac'));
      art.setAttribute('data-coast', coast);
      art.setAttribute('data-species', sps.join('|'));
      art.setAttribute('data-text', ((c.name || '') + ' ' + (zone.name || '')).toLowerCase());

      var photo = E('div', 'cap__photo');
      photo.appendChild(E('div', 'cap__avatar', initials));
      var rateEl = E('div', 'cap__rate'); rateEl.appendChild(ico('star')); rateEl.appendChild(document.createTextNode(rate));
      photo.appendChild(rateEl);
      if (c.years) photo.appendChild(E('div', 'cap__years', c.years + ' yrs'));
      art.appendChild(photo);

      var body = E('div', 'cap__body');
      body.appendChild(E('div', 'cap__name', c.name || 'Captain'));
      var portEl = E('div', 'cap__port'); portEl.appendChild(ico('pin')); portEl.appendChild(document.createTextNode(port));
      body.appendChild(portEl);
      var sp = E('div', 'cap__sp');
      sps.slice(0, 3).forEach(function (k) { sp.appendChild(E('span', null, k)); });
      body.appendChild(sp);
      var ver = E('div', 'cap__verified'); ver.appendChild(ico('check')); ver.appendChild(document.createTextNode('Verified local captain'));
      body.appendChild(ver);
      var act = E('button', 'cap__cta', 'Request a trip');
      act.type = 'button';
      act.setAttribute('data-trip', '');
      act.setAttribute('data-captain', c.name || '');
      body.appendChild(act);
      art.appendChild(body);
      grid.appendChild(art);
      cards.push(art);
      sps.forEach(function (s) { speciesSet[s] = true; });
    });

    // populate the species filter
    var sel = $('#capSpecies');
    if (sel) Object.keys(speciesSet).sort().forEach(function (s) { var o = E('option', null, s); o.value = s; sel.appendChild(o); });

    // filtering (coast buttons + species select + text search)
    var coast = 'all', species = '', query = '';
    var countEl = $('#capCount'), emptyEl = $('#capEmpty');
    function apply() {
      var shown = 0;
      cards.forEach(function (art) {
        var okCoast = coast === 'all' || art.getAttribute('data-coast') === coast;
        var okSp = !species || art.getAttribute('data-species').split('|').indexOf(species) !== -1;
        var okQ = !query || art.getAttribute('data-text').indexOf(query) !== -1;
        var show = okCoast && okSp && okQ;
        art.classList.toggle('is-hidden', !show);
        if (show) shown++;
      });
      if (countEl) countEl.textContent = shown + (shown === 1 ? ' captain' : ' captains');
      if (emptyEl) emptyEl.hidden = shown !== 0;
    }
    document.querySelectorAll('.cap-filter').forEach(function (b) {
      b.addEventListener('click', function () {
        document.querySelectorAll('.cap-filter').forEach(function (x) { x.classList.remove('is-active'); });
        b.classList.add('is-active');
        coast = b.getAttribute('data-coast');
        apply();
      });
    });
    if (sel) sel.addEventListener('change', function () { species = sel.value; apply(); });
    var search = $('#capSearch');
    if (search) search.addEventListener('input', function () { query = search.value.trim().toLowerCase(); apply(); });
    apply();
  }

  /* ---- "What's biting now" live-reports strip (driven by data.js REPORTS) ---- */
  function biting(data) {
    var rail = $('#bitingRail');
    var src = (data && data.length) ? data : REPS;
    if (!rail || !src || !src.length) return;

    // most recent first, then biggest catch as the tiebreaker
    var reps = src.slice().sort(function (a, b) {
      var d = String(b.date || '').localeCompare(String(a.date || ''));
      return d || ((b.count || 0) - (a.count || 0));
    }).slice(0, 14);

    // relative day label off the page's "now" (data tops out at 2026-05-29)
    var newest = reps.reduce(function (m, r) { return r.date > m ? r.date : m; }, reps[0].date || '');
    function when(date) {
      if (!date) return '';
      var a = new Date(date + 'T00:00:00'), b = new Date((newest || date) + 'T00:00:00');
      var days = Math.round((b - a) / 86400000);
      if (days <= 0) return 'Today';
      if (days === 1) return 'Yesterday';
      if (days < 7) return days + ' days ago';
      return a.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    var RATING = {
      hot:  { cls: 'report__rating--hot',  label: 'Hot bite' },
      good: { cls: 'report__rating--good', label: 'Good' },
      slow: { cls: 'report__rating--slow', label: 'Slow' }
    };

    function card(r) {
      var zone = ZN[r.zone] || {};
      var cortez = zone.coast === 'Sea of Cortez';
      var art = E('article', 'report' + (cortez ? ' report--cortez' : ''));
      art.appendChild(E('div', 'report__accent'));

      var body = E('div', 'report__body');

      // top: zone + coast / rating pill
      var top = E('div', 'report__top');
      var place = E('div');
      var zoneEl = E('div', 'report__zone');
      zoneEl.appendChild(ico('pin'));
      zoneEl.appendChild(document.createTextNode(zone.name || r.zone || 'Baja'));
      place.appendChild(zoneEl);
      place.appendChild(E('div', 'report__coast', zone.coast || 'Baja California'));
      top.appendChild(place);

      var rt = RATING[r.rating] || RATING.good;
      var pill = E('span', 'report__rating ' + rt.cls);
      pill.appendChild(E('i', 'dot'));
      pill.appendChild(document.createTextNode(rt.label));
      top.appendChild(pill);
      body.appendChild(top);

      // headline: count + lead species
      var lead = (r.species || []).map(nm)[0] || 'Mixed bag';
      var head = E('h3', 'report__catch');
      if (r.count) {
        head.appendChild(E('span', 'report__count', String(r.count) + ' '));
      }
      head.appendChild(document.createTextNode(lead));
      body.appendChild(head);

      // species chips
      if ((r.species || []).length) {
        var sp = E('div', 'report__species');
        r.species.slice(0, 3).forEach(function (k) { sp.appendChild(E('span', null, nm(k))); });
        body.appendChild(sp);
      }

      // foot: when
      var foot = E('div', 'report__foot');
      foot.appendChild(E('span', 'report__when', when(r.date)));
      body.appendChild(foot);

      art.appendChild(body);
      return art;
    }

    var animate = !reduce && reps.length > 3;
    var sets = animate ? 2 : 1; // duplicate for seamless marquee loop
    rail.classList.toggle('is-marquee', animate); // CSS animation only runs when both sets exist
    while (rail.firstChild) rail.removeChild(rail.firstChild); // clear so live data can re-render
    for (var s = 0; s < sets; s++) {
      reps.forEach(function (r) {
        var c = card(r);
        if (animate && s === 1) c.setAttribute('aria-hidden', 'true');
        rail.appendChild(c);
      });
    }
  }

  /* ---- live captain reports from a published Google Sheet (no backend) ----
     Lowest-friction pipeline: captains WhatsApp their updates, you paste rows into a
     Google Sheet, then File > Share > Publish to web > CSV, and paste that URL below.
     Header row columns (any order): date, port, captain, species, count, rating, note.
     date is YYYY-MM-DD; species comma-separated; rating is hot, good, or slow.
     Until a URL is set the static REPORTS data is used. */
  var LIVE_REPORTS_CSV = '';

  function parseCSV(text) {
    var rows = [], row = [], field = '', q = false, i, c;
    for (i = 0; i < text.length; i++) {
      c = text[i];
      if (q) {
        if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else q = false; }
        else field += c;
      } else if (c === '"') q = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n' || c === '\r') {
        if (c === '\r' && text[i + 1] === '\n') i++;
        row.push(field); field = '';
        if (row.length > 1 || row[0] !== '') rows.push(row);
        row = [];
      } else field += c;
    }
    if (field !== '' || row.length) { row.push(field); rows.push(row); }
    return rows;
  }

  function liveReports() {
    if (!LIVE_REPORTS_CSV || typeof fetch !== 'function') return;
    var name2zone = {};
    Object.keys(ZN).forEach(function (k) { name2zone[(ZN[k].name || '').toLowerCase()] = k; name2zone[k] = k; });
    fetch(LIVE_REPORTS_CSV, { cache: 'no-store' }).then(function (r) {
      if (!r.ok) throw new Error('sheet'); return r.text();
    }).then(function (text) {
      var rows = parseCSV(text);
      if (rows.length < 2) return;
      var head = rows[0].map(function (h) { return h.trim().toLowerCase(); });
      var ix = function (n) { return head.indexOf(n); };
      var di = ix('date'), pi = ix('port') !== -1 ? ix('port') : ix('zone'), ci = ix('captain'),
          si = ix('species'), ni = ix('count'), ri = ix('rating'), oi = ix('note');
      var reps = [];
      rows.slice(1).forEach(function (cols) {
        var port = (pi !== -1 ? cols[pi] : '') || '';
        reps.push({
          date: di !== -1 ? (cols[di] || '').trim() : '',
          zone: name2zone[port.trim().toLowerCase()] || port.trim(),
          captain: ci !== -1 ? (cols[ci] || '').trim() : '',
          species: si !== -1 ? (cols[si] || '').split(/[,;]/).map(function (s) { return s.trim(); }).filter(Boolean) : [],
          count: ni !== -1 ? parseInt(cols[ni], 10) || 0 : 0,
          rating: ri !== -1 ? (cols[ri] || '').trim().toLowerCase() : 'good',
          note: oi !== -1 ? (cols[oi] || '').trim() : ''
        });
      });
      if (reps.length) biting(reps);
    }).catch(function () { /* network or parse error: keep the static reports */ });
  }

  // Species with a transparent field-guide illustration in /site/img/illus/<key>.webp
  // render as drawn specimen plates; the rest fall back to a color photo.
  var ILLUS = {};
  ['dorado','bonito','wahoo','yellowfin','bluefin-tuna','bigeye-tuna','skipjack-tuna','albacore',
   'striped-marlin','blue-marlin','black-marlin','sailfish','swordfish','shortbill-spearfish','snook','corvina',
   'sierra','jack-crevalle','bigeye-trevally','halibut','white-seabass','pompano','ladyfish',
   'pacific-barracuda','gulf-grouper','grouper','broomtail-grouper','giant-sea-bass',
   'copper-rockfish','blue-rockfish','canary-rockfish','pargo','pargo-colorado','yellow-snapper',
   'dog-snapper','mullet-snapper','yellowtail','amberjack','lingcod','sheephead','triggerfish',
   'barred-pargo','cabrilla','golden-grouper',
   'calico-bass','sand-bass','spotted-bay-bass','goldspotted-bass',
   'bluefin-trevally','green-jack',
   'orangemouth-corvina','shortfin-corvina',
   'yellowfin-croaker','black-croaker','spotfin-croaker',
   'california-corbina','totoaba','huachinango',
   'black-triggerfish','burrito-grunt',
   'cortez-halibut','california-turbot',
   'needlefish','mexican-barracuda',
   'vermilion-rockfish','bocaccio','chilipepper','starry-rockfish',
   'bank-rockfish','widow-rockfish','brown-rockfish','gopher-rockfish',
   'olive-rockfish','black-rockfish','treefish','flag-rockfish',
   'greenblotched-rockfish','rosethorn-rockfish','cowcod',
   'speckled-rockfish','cabezon','california-scorpionfish','ocean-whitefish',
   'shortfin-mako','thresher-shark',
   'pacific-sanddab','bonefish','threadfin-jack'
  ].forEach(function (k) { ILLUS[k] = '/site/img/illus/' + k + '.webp?v=33'; });
  ILLUS['pez-fuerte'] = '/site/img/illus/pez-fuerte.webp?v=33'; // almaco jack, same fish as amberjack plate

  /* ---- premium species explorer (driven by window.CATCH) ---- */
  function species() {
    var grid = $('#speciesGrid');
    var CATCH = (typeof window.CATCH !== 'undefined') ? window.CATCH : null;
    if (!grid || !CATCH || !CATCH.length) return;

    // show only species that have a real drawing (one consistent style); drop the
    // literal duplicate entry (amberjack == pez-fuerte) too.
    var data = CATCH.filter(function (s) {
      return !(s.notes && /^DUPLICATE/.test(s.notes)) && ILLUS[s.key];
    });

    // compact season for the small card pill (full string stays in the modal)
    function shortSeason(str) {
      if (!str) return '';
      // take the first clause (before ; or () paren) and trim trailing punctuation
      var first = String(str).split(/[;(]/)[0].replace(/[\s,-]+$/, '').trim();
      if (!first || first.length > 16) {
        return /year-round/i.test(str) ? 'Year-round' : (first || str).slice(0, 14);
      }
      return first;
    }

    // category display order (most marquee-heavy first), then any extras
    var CAT_ORDER = ['Billfish', 'Tuna', 'Pelagic', 'Inshore', 'Rockfish', 'Surf', 'Bottomfish'];
    var cats = [];
    CAT_ORDER.forEach(function (c) { if (data.some(function (s) { return s.category === c; })) cats.push(c); });
    data.forEach(function (s) { if (cats.indexOf(s.category) === -1) cats.push(s.category); });

    // sort: marquee first, then by category order, then alphabetical
    data.sort(function (a, b) {
      if (!!b.marquee - !!a.marquee) return (!!b.marquee) - (!!a.marquee);
      var ci = cats.indexOf(a.category) - cats.indexOf(b.category);
      if (ci) return ci;
      return (a.commonName || '').localeCompare(b.commonName || '');
    });

    var catBar = $('#catFilters');
    var coastBar = $('#coastFilters');
    var countEl = $('#speciesCount');
    var emptyEl = $('#speciesEmpty');
    var state = { cat: 'all', coast: 'all' };

    // ---- filter chips ----
    function chip(label, attr, val, on) {
      var b = E('button', 'chip' + (on ? ' is-on' : ''), label);
      b.type = 'button';
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.setAttribute(attr, val);
      return b;
    }
    catBar.appendChild(chip('All species', 'data-cat', 'all', true));
    cats.forEach(function (c) { catBar.appendChild(chip(c, 'data-cat', c, false)); });
    [['Both coasts', 'all'], ['Pacific', 'Pacific'], ['Sea of Cortez', 'Sea of Cortez']].forEach(function (p, i) {
      var b = chip(p[0], 'data-coast', p[1], i === 0);
      coastBar.appendChild(b);
    });

    function matches(s) {
      var c = state.cat === 'all' || s.category === state.cat;
      var co = state.coast === 'all' || (s.coasts || []).indexOf(state.coast) !== -1;
      return c && co;
    }

    function apply() {
      var shown = 0;
      data.forEach(function (s) {
        var card = cardEls[s.key];
        var hit = matches(s);
        card.classList.toggle('is-hidden', !hit);
        if (hit) shown++;
      });
      emptyEl.hidden = shown !== 0;
      countEl.innerHTML = '';
      countEl.appendChild(E('b', null, String(shown)));
      countEl.appendChild(document.createTextNode(' species' +
        (state.coast === 'all' ? '' : ' · ' + state.coast)));
    }

    function bindBar(bar, attr, key) {
      bar.addEventListener('click', function (e) {
        var b = e.target.closest('.chip'); if (!b) return;
        state[key] = b.getAttribute(attr);
        Array.prototype.forEach.call(bar.querySelectorAll('.chip'), function (x) {
          var on = x === b;
          x.classList.toggle('is-on', on);
          x.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        apply();
      });
    }

    // ---- cards ----
    var cardEls = {};
    function catchRow(label, txt) {
      var row = E('div', 'sp__catch-row');
      row.appendChild(E('span', 'sp__catch-k', label));
      row.appendChild(E('span', 'sp__catch-v', txt));
      return row;
    }
    // compact "Caught on" line for the plate body (top bait, else top lure)
    function caughtOn(s) {
      var bait = (s.baits || [])[0];
      var lure = (s.lures || [])[0];
      if (bait) return { k: 'Bait', v: bait };
      if (lure) return { k: 'Lure', v: lure };
      return null;
    }

    data.forEach(function (s) {
      var cortez = (s.coasts || []).length === 1 && s.coasts[0] === 'Sea of Cortez';
      var plate = ILLUS[s.key]; // transparent field-guide illustration, or undefined
      var card = E('button', 'sp' + (plate ? ' sp--plate' : '') + (cortez ? ' is-cortez' : ''));
      card.type = 'button';
      if (!reduce) card.setAttribute('data-card', ''); // opt into the staggered scroll-reveal
      card.setAttribute('aria-label', s.commonName + ', view detail');

      if (plate) {
        /* ---- specimen plate: transparent illus, centered on a tinted ocean panel ---- */
        var stage = E('div', 'sp__stage');
        var fig = E('img', 'sp__illus');
        fig.src = plate; fig.alt = s.commonName; fig.loading = 'lazy';
        stage.appendChild(fig);
        if (s.season) {
          stage.appendChild(E('span', 'sp__season' + (cortez ? ' sp__season--cortez' : ''), shortSeason(s.season)));
        }
        card.appendChild(stage);

        var body = E('div', 'sp__plate-body');
        body.appendChild(E('span', 'sp__cat', s.category));
        body.appendChild(E('div', 'sp__name', s.commonName));
        if (s.spanishName) body.appendChild(E('div', 'sp__es', s.spanishName));

        var co = caughtOn(s);
        if (co) {
          var line = E('div', 'sp__caught');
          line.appendChild(E('span', 'sp__caught-k', 'Caught on'));
          line.appendChild(E('span', 'sp__caught-v', co.v));
          body.appendChild(line);
        }
        card.appendChild(body);
      } else {
        /* ---- photo fallback (original treatment) ---- */
        var img = E('img', 'sp__img');
        img.src = fixImg(s.img); img.alt = s.commonName; img.loading = 'lazy';
        card.appendChild(img);
        card.appendChild(E('div', 'sp__veil'));

        if (s.season) {
          // card pill shows a compact window; the full season string lives in the modal
          card.appendChild(E('span', 'sp__season' + (cortez ? ' sp__season--cortez' : ''), shortSeason(s.season)));
        }

        var foot = E('div', 'sp__foot');
        foot.appendChild(E('span', 'sp__cat', s.category));
        foot.appendChild(E('div', 'sp__name', s.commonName));
        if (s.spanishName) foot.appendChild(E('div', 'sp__es', s.spanishName));

        // hover-reveal "Caught on" drawer
        var drawer = E('div', 'sp__catch');
        var din = E('div', 'sp__catch-in');
        var topBaits = (s.baits || []).slice(0, 2).join(' · ');
        var topLures = (s.lures || []).slice(0, 2).join(' · ');
        if (topBaits) din.appendChild(catchRow('Bait', topBaits));
        if (topLures) din.appendChild(catchRow('Lure', topLures));
        var more = E('div', 'sp__more', 'Caught on');
        more.appendChild(ico('plus'));
        din.appendChild(more);
        drawer.appendChild(din);
        foot.appendChild(drawer);

        card.appendChild(foot);
      }

      card.addEventListener('click', function () { openModal(s); });
      cardEls[s.key] = card;
      grid.appendChild(card);
    });

    bindBar(catBar, 'data-cat', 'cat');
    bindBar(coastBar, 'data-coast', 'coast');
    apply();

    // staggered scroll-reveal for the explorer cards, consistent with reveal():
    // observe each card, ramp a small per-row delay off the row it enters in.
    if (!reduce && 'IntersectionObserver' in window) {
      var spIo = new IntersectionObserver(function (ents) {
        // cards crossing in the same frame share a tight delay ramp, capped so it never drags
        var batch = ents.filter(function (e) { return e.isIntersecting; });
        batch.forEach(function (e, i) {
          e.target.style.transitionDelay = (Math.min(i, 7) * 0.06) + 's';
          e.target.classList.add('in');
          spIo.unobserve(e.target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
      data.forEach(function (s) { spIo.observe(cardEls[s.key]); });
    } else {
      data.forEach(function (s) { cardEls[s.key].classList.add('in'); });
    }

    // ---- detail modal ----
    speciesModal();
    function openModal(s) {
      var modal = $('#spModal'); if (!modal) return;
      var plate = ILLUS[s.key];
      var media = $('#spModalImg').closest('.sp-modal__media');
      if (media) media.classList.toggle('is-plate', !!plate);
      // illustrated species show the transparent specimen plate; others keep the photo
      $('#spModalImg').src = plate || fixImg(s.img);
      $('#spModalImg').alt = s.commonName;
      $('#spModalCat').textContent = s.category;
      $('#spModalName').textContent = s.commonName;
      $('#spModalLatin').textContent = [s.scientificName, s.spanishName].filter(Boolean).join('  ·  ');

      var body = $('#spModalBody');
      while (body.firstChild) body.removeChild(body.firstChild);

      var meta = E('div', 'sp-modal__meta');
      (s.coasts || []).forEach(function (c) {
        meta.appendChild(E('span', c === 'Pacific' ? 'tag' : 'tag tag--warm', c));
      });
      if (s.season) meta.appendChild(E('span', 'tag tag--warm', s.season));
      body.appendChild(meta);

      function tagBlock(label, items, lure) {
        if (!items || !items.length) return;
        var blk = E('div', 'sp-block');
        blk.appendChild(E('span', 'eyebrow', label));
        var ul = E('ul', 'sp-tags' + (lure ? ' sp-tags--lure' : ''));
        items.forEach(function (it) { ul.appendChild(E('li', null, it)); });
        blk.appendChild(ul);
        body.appendChild(blk);
      }
      tagBlock('Baits', s.baits, false);
      tagBlock('Lures & jigs', s.lures, true);

      if (s.technique) {
        var tb = E('div', 'sp-block');
        tb.appendChild(E('span', 'eyebrow', "How it's caught"));
        tb.appendChild(E('p', null, s.technique));
        body.appendChild(tb);
      }
      if (s.notes && !/^DUPLICATE/.test(s.notes)) {
        var note = E('div', 'sp-modal__note');
        note.appendChild(E('b', null, 'Local note · '));
        note.appendChild(document.createTextNode(s.notes));
        body.appendChild(note);
      }

      _lastFocus = document.activeElement;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.documentElement.style.overflow = 'hidden';
      $('#spModalClose').focus();
    }
  }

  /* ---- species modal close wiring (bound once) ---- */
  function speciesModal() {
    var modal = $('#spModal'); if (!modal || modal.dataset.wired) return;
    modal.dataset.wired = '1';
    function close() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.documentElement.style.overflow = '';
      if (_lastFocus && _lastFocus.focus) _lastFocus.focus();
    }
    $('#spModalClose').addEventListener('click', close);
    Array.prototype.forEach.call(modal.querySelectorAll('[data-modal-close]'), function (el) {
      el.addEventListener('click', close);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) close();
    });
  }

  /* ---- nav live pill: count of hot reports, echoing the hero ticker ---- */
  function navLive() {
    var pill = $('#navLive'); if (!pill || !REPS) return;
    var hot = REPS.filter(function (r) { return r.rating === 'hot'; }).length;
    if (!hot) return;
    var b = pill.querySelector('b'); if (b) b.textContent = String(hot);
    pill.removeAttribute('hidden');
  }

  /* ---- hero "now biting" ticker ---- */
  function ticker() {
    var t = $('#tickerTrack'); if (!t || !REPS) return;
    var counts = {}, hotSp = {};
    REPS.forEach(function (r) {
      (r.species || []).forEach(function (s) {
        counts[s] = (counts[s] || 0) + 1;
        if (r.rating === 'hot') hotSp[s] = true;
      });
    });
    var top = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; }).slice(0, 3);
    if (top.length) {
      while (t.firstChild) t.removeChild(t.firstChild);
      top.forEach(function (k) { t.appendChild(E('span', hotSp[k] ? 'is-hot' : null, nm(k))); });
    }
  }

  /* ---- premium Baja zone map (Leaflet) ---- */
  function zonemap() {
    var host = $('#baja-map');
    if (!host || !Object.keys(ZN).length) return; // Leaflet is loaded on demand below

    var built = false;
    function build() {
      if (built) return; built = true;

      var BAJA_BOUNDS = L.latLngBounds([22.4, -117.9], [32.9, -108.6]);
      var mobile = matchMedia('(max-width:880px)').matches;

      var map = L.map(host, {
        zoomControl: false,
        attributionControl: true,
        scrollWheelZoom: false,
        minZoom: 5, maxZoom: 14,
        maxBounds: BAJA_BOUNDS.pad(0.35),
        maxBoundsViscosity: 0.8,
        zoomSnap: 0.25
      });

      map.fitBounds(BAJA_BOUNDS, {
        paddingTopLeft: [40, 80],
        paddingBottomRight: mobile ? [40, 60] : [420, 60],
        maxZoom: 8
      });

      // base layer, dark, no labels, color-graded via .baja-tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd', maxZoom: 19, minZoom: 5,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        className: 'baja-tiles'
      }).addTo(map);

      // labels on their own dimmed pane, above base, below markers
      map.createPane('labels');
      map.getPane('labels').style.zIndex = 350;
      map.getPane('labels').style.pointerEvents = 'none';
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd', maxZoom: 19, pane: 'labels', className: 'baja-labels', attribution: ''
      }).addTo(map);

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      function zoneIcon(coast, isHub) {
        var cls = coast === 'Pacific' ? 'is-pac' : coast === 'Both' ? 'is-both' : 'is-cortez';
        return L.divIcon({
          className: '',
          html: '<span class="zmark ' + cls + (isHub ? ' is-hub' : '') + '">' +
                '<i class="zmark__pulse"></i><i class="zmark__dot"></i></span>',
          iconSize: [22, 22], iconAnchor: [11, 11], tooltipAnchor: [0, -12]
        });
      }

      var markers = {};       // key -> Leaflet marker
      var activeKey = null;
      var panel = $('#zonePanel');
      var panelBody = $('#zonePanelBody');

      Object.keys(ZN).forEach(function (key) {
        var z = ZN[key];
        if (typeof z.lat !== 'number' || typeof z.lng !== 'number') return;
        var dep = DEP[key];
        var isHub = !!(z.launch || dep);
        var lat = (dep && typeof dep.latFix === 'number') ? dep.latFix : z.lat;
        var lng = (dep && typeof dep.lngFix === 'number') ? dep.lngFix : z.lng;

        var m = L.marker([lat, lng], { icon: zoneIcon(z.coast, isHub), riseOnHover: true, keyboard: true });
        m.bindTooltip(z.name + ', ' + (z.coast || 'Baja California'), { direction: 'top', offset: [0, -4], className: 'ztip', opacity: 1 });
        m.on('click', function () { openZone(key); });
        m.addTo(map);
        markers[key] = m;
      });

      function markEl(m) { return m && m._icon ? m._icon.querySelector('.zmark') : null; }

      // subtle staggered drop/fade as the map first paints; build() already runs on first
      // scroll into view, so this plays exactly once. order by latitude (north -> south).
      if (!reduce) {
        var dropKeys = Object.keys(markers).filter(function (k) { return markEl(markers[k]); });
        dropKeys.sort(function (a, b) { return (ZN[b].lat || 0) - (ZN[a].lat || 0); });
        dropKeys.forEach(function (k) { var el = markEl(markers[k]); el.setAttribute('data-drop', ''); });
        requestAnimationFrame(function () {
          dropKeys.forEach(function (k, i) {
            var el = markEl(markers[k]);
            el.style.transitionDelay = (Math.min(i, 30) * 0.018) + 's';
            el.classList.add('is-dropped');
          });
        });
      }

      function openZone(key) {
        var z = ZN[key]; if (!z) return;
        buildPanel(key, z);
        panel.classList.add('open');
        panel.setAttribute('aria-hidden', 'false');
        if (activeKey && markers[activeKey]) { var p = markEl(markers[activeKey]); if (p) p.classList.remove('is-active'); }
        activeKey = key;
        var cur = markEl(markers[key]); if (cur) cur.classList.add('is-active');
        var dep = DEP[key];
        var lat = (dep && typeof dep.latFix === 'number') ? dep.latFix : z.lat;
        var lng = (dep && typeof dep.lngFix === 'number') ? dep.lngFix : z.lng;
        map.panTo([lat, lng], { animate: !reduce, duration: 0.6 });
      }

      function closeZone() {
        panel.classList.remove('open');
        panel.setAttribute('aria-hidden', 'true');
        if (activeKey && markers[activeKey]) { var p = markEl(markers[activeKey]); if (p) p.classList.remove('is-active'); }
        activeKey = null;
      }

      function buildPanel(key, z) {
        while (panelBody.firstChild) panelBody.removeChild(panelBody.firstChild);
        var dep = DEP[key];

        // coast tag, Pacific plain (aqua) / Cortez warm (gold) per site convention
        var tag = E('span', z.coast === 'Pacific' ? 'tag' : 'tag--warm tag', z.coast === 'Both' ? 'Pacific & Cortez' : z.coast);
        panelBody.appendChild(tag);

        panelBody.appendChild(E('h3', null, z.name));

        var lat = (dep && typeof dep.latFix === 'number') ? dep.latFix : z.lat;
        var lng = (dep && typeof dep.lngFix === 'number') ? dep.lngFix : z.lng;
        panelBody.appendChild(E('p', 'zp-coords', lat.toFixed(3) + '°, ' + lng.toFixed(3) + '°'));

        // launch callout
        var launch = E('div', 'zp-launch');
        launch.appendChild(E('span', 'eyebrow', 'How the pangas launch'));
        var launchText = z.launch ||
          'Local pangueros launch off the beach. Ask the cooperative when you arrive. No formal marina or ramp here.';
        launch.appendChild(E('p', null, launchText));
        if (dep && dep.operators) {
          var op = E('p', 'zp-op');
          op.appendChild(E('b', null, 'Operators · '));
          op.appendChild(document.createTextNode(dep.operators));
          launch.appendChild(op);
        }
        panelBody.appendChild(launch);

        // lodging (top 3)
        var lodge = LODG[key];
        if (lodge && lodge.length) {
          var block = E('div', 'zp-block');
          block.appendChild(E('span', 'eyebrow', 'Where to stay'));
          var ul = E('ul', 'zp-lodge');
          lodge.slice(0, 3).forEach(function (l) {
            var li = E('li');
            var left = E('div');
            left.appendChild(E('span', 'zp-lodge__name', l.name + (l.type ? ' · ' + l.type : '')));
            if (l.note) left.appendChild(E('span', 'zp-lodge__note', l.note));
            li.appendChild(left);
            if (l.price) li.appendChild(E('span', 'zp-lodge__price', l.price));
            ul.appendChild(li);
          });
          block.appendChild(ul);
          panelBody.appendChild(block);
        }

        // CTA back into the trip flow
        var cta = E('a', 'btn btn--gold zone-panel__cta', 'Plan a trip from ' + z.name);
        cta.href = '#cta';
        cta.setAttribute('data-trip', ''); // opens the angler trip-inquiry modal (delegated)
        cta.appendChild(ico('arrow'));
        panelBody.appendChild(cta);
      }

      // coast filter
      var filterBtns = document.querySelectorAll('.zmf');
      filterBtns.forEach(function (b) {
        b.addEventListener('click', function () {
          var coast = b.getAttribute('data-coast');
          filterBtns.forEach(function (x) {
            var on = x === b;
            x.classList.toggle('is-on', on);
            x.setAttribute('aria-pressed', on ? 'true' : 'false');
          });
          Object.keys(markers).forEach(function (key) {
            var el = markEl(markers[key]); if (!el) return;
            var z = ZN[key];
            var show = coast === 'all' || z.coast === coast || z.coast === 'Both';
            el.classList.toggle('is-dim', !show);
          });
        });
      });

      // close handlers
      var closeBtn = $('#zonePanelClose');
      if (closeBtn) closeBtn.addEventListener('click', closeZone);
      map.on('click', closeZone);
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && activeKey) closeZone(); });

      // tiles measure correctly once the framed container is laid out
      setTimeout(function () { map.invalidateSize(); }, 80);
    }

    // load Leaflet (css + js) on demand, only when the map is about to come into view
    function ensureLeaflet(cb) {
      if (typeof L !== 'undefined') { cb(); return; }
      if (!document.querySelector('link[data-leaflet]')) {
        var css = document.createElement('link');
        css.rel = 'stylesheet'; css.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        css.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='; css.crossOrigin = '';
        css.setAttribute('data-leaflet', ''); document.head.appendChild(css);
      }
      var s = document.querySelector('script[data-leaflet]');
      if (!s) {
        s = document.createElement('script');
        s.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        s.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo='; s.crossOrigin = '';
        s.setAttribute('data-leaflet', ''); document.head.appendChild(s);
      }
      s.addEventListener('load', cb, { once: true });
    }

    // lazy-init when the section first scrolls into view
    if (!('IntersectionObserver' in window)) { ensureLeaflet(build); return; }
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (e) { if (e.isIntersecting) { ensureLeaflet(build); io.disconnect(); } });
    }, { rootMargin: '500px 0px' });
    io.observe(host);
  }

  /* ---- all-species plate (unison view): every species on one field-guide chart ---- */
  function plate() {
    var grid = $('#plateGrid'), overlay = $('#speciesPlate');
    var openBtn = $('#openPlate'), closeBtn = $('#plateClose');
    if (!grid || !overlay || !openBtn) return;
    var CATCH = (typeof window.CATCH !== 'undefined') ? window.CATCH : null;
    if (!CATCH || !CATCH.length) { openBtn.style.display = 'none'; return; }
    var data = CATCH.filter(function (s) { return !(s.notes && /^DUPLICATE/.test(s.notes)) && ILLUS[s.key]; });
    // illustrated species only (already filtered above), sorted by name
    data.sort(function (a, b) {
      return (a.commonName || '').localeCompare(b.commonName || '');
    });
    var built = false;
    function buildGrid() {
      if (built) return; built = true;
      data.forEach(function (s) {
        var cell = E('div', 'plate__cell' + (ILLUS[s.key] ? '' : ' plate__cell--photo'));
        var fig = E('div', 'plate__fig');
        var img = E('img', 'plate__fish');
        img.src = ILLUS[s.key] || fixImg(s.img); img.alt = s.commonName; img.loading = 'lazy';
        fig.appendChild(img); cell.appendChild(fig);
        cell.appendChild(E('div', 'plate__label', s.commonName));
        grid.appendChild(cell);
      });
    }
    // stagger the cells in (fade + slight rise) on each open; short delay ramp, capped
    function staggerCells() {
      var cells = grid.querySelectorAll('.plate__cell');
      if (reduce) { cells.forEach(function (c) { c.classList.add('in'); }); return; }
      cells.forEach(function (c) { c.classList.remove('in'); });
      // force reflow so removing/re-adding .in retriggers the transition on re-open
      void grid.offsetWidth;
      cells.forEach(function (c, i) {
        c.style.transitionDelay = (Math.min(i, 22) * 0.022) + 's';
        c.classList.add('in');
      });
    }
    function open() {
      _lastFocus = document.activeElement;
      buildGrid();
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(staggerCells); // run after the sheet's own open transition kicks off
    }
    function close() { overlay.classList.remove('is-open'); overlay.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; if (_lastFocus && _lastFocus.focus) _lastFocus.focus(); }
    openBtn.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    overlay.querySelectorAll('[data-plate-close]').forEach(function (e) { e.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && overlay.classList.contains('is-open')) close(); });
  }

  /* ---- captain self-report form (no backend; posts to a form service) ---- */
  function capJoin() {
    var modal = $('#capJoin'); if (!modal) return;
    var form = $('#capJoinForm');

    // populate the home-port select from ZONES, grouped by coast
    var portSel = $('#joinPort');
    if (portSel) {
      var pac = [], cor = [];
      Object.keys(ZN).forEach(function (k) { var z = ZN[k]; if (!z.name) return; (z.coast === 'Sea of Cortez' ? cor : pac).push(z.name); });
      var addGroup = function (label, names) {
        if (!names.length) return;
        var og = document.createElement('optgroup'); og.label = label;
        names.sort().forEach(function (n) { var o = E('option', null, n); o.value = n; og.appendChild(o); });
        portSel.appendChild(og);
      };
      addGroup('Pacific', pac); addGroup('Sea of Cortez', cor);
      var oth = E('option', null, 'Other / not listed'); oth.value = 'Other'; portSel.appendChild(oth);
    }

    var open = function () {
      _lastFocus = document.activeElement;
      modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      var first = form && form.querySelector('input,select'); if (first) first.focus();
    };
    var close = function () {
      modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (_lastFocus && _lastFocus.focus) _lastFocus.focus();
    };
    document.querySelectorAll('[data-join]').forEach(function (b) { b.addEventListener('click', open); });
    modal.querySelectorAll('[data-join-close]').forEach(function (b) { b.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && modal.classList.contains('is-open')) close(); });

    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var done = modal.querySelector('.join-done'), err = form.querySelector('.join-error'), btn = form.querySelector('.join-submit');
      if (err) err.hidden = true;
      var action = form.getAttribute('action') || '';
      var live = /^https?:\/\//.test(action) && action.indexOf('your-form-id') === -1;
      var showDone = function () { form.hidden = true; if (done) done.hidden = false; };
      if (!live) {
        if (window.console && console.warn) console.warn('[BajaFish] Captain form not connected: set the form action to your Formspree (or Basin) endpoint to receive submissions.');
        showDone(); return;
      }
      if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
      fetch(action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error('bad'); showDone(); })
        .catch(function () { if (err) err.hidden = false; if (btn) { btn.disabled = false; btn.textContent = 'Send my details'; } });
    });
  }

  /* ---- angler trip inquiry (modal); CTAs open it via delegated [data-trip] ---- */
  function tripInquiry() {
    var modal = $('#tripModal'); if (!modal) return;
    var form = $('#tripForm');
    function open() {
      _lastFocus = document.activeElement;
      modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      var f = form && form.querySelector('input,select'); if (f) f.focus();
    }
    function close() {
      modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (_lastFocus && _lastFocus.focus) _lastFocus.focus();
    }
    document.addEventListener('click', function (e) {
      var t = e.target && e.target.closest ? e.target.closest('[data-trip]') : null;
      if (t) { e.preventDefault(); open(); }
    });
    modal.querySelectorAll('[data-trip-close]').forEach(function (b) { b.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && modal.classList.contains('is-open')) close(); });

    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var done = modal.querySelector('.join-done'), err = form.querySelector('.join-error'), btn = form.querySelector('.join-submit');
      if (err) err.hidden = true;
      var action = form.getAttribute('action') || '';
      var live = /^https?:\/\//.test(action) && action.indexOf('your-form-id') === -1;
      var showDone = function () { form.hidden = true; if (done) done.hidden = false; };
      if (!live) {
        if (window.console && console.warn) console.warn('[BajaFish] Trip form not connected: set the form action to your Formspree (or Basin) endpoint to receive requests.');
        showDone(); return;
      }
      if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
      fetch(action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error('bad'); showDone(); })
        .catch(function () { if (err) err.hidden = false; if (btn) { btn.disabled = false; btn.textContent = 'Send my trip request'; } });
    });
  }

  /* ---- Captains of the Month: top 5 per coast, with rank medals ---- */
  function captainsOfMonth() {
    var host = $('#comFeatured'); if (!host || !CAPS) return;
    var now = new Date();
    var month = E('div', 'com-month', now.toLocaleString('en-US', { month: 'long' }) + ' ' + now.getFullYear());
    host.appendChild(month);
    var groups = E('div', 'com-groups');

    function coastOf(c) { return (ZN[c.zone] || {}).coast || 'Pacific'; }
    function topFor(coast) {
      return CAPS.filter(function (c) { return coastOf(c) === coast; })
        .slice().sort(function (a, b) { return (b.rating || 0) - (a.rating || 0) || (b.years || 0) - (a.years || 0); })
        .slice(0, 5);
    }
    function medal(rank) { return rank === 1 ? ' com-rank--gold' : rank === 2 ? ' com-rank--silver' : rank === 3 ? ' com-rank--bronze' : ''; }
    function fcard(c, rank) {
      var z = ZN[c.zone] || {};
      var initials = (c.name || '?').replace(/Capit[aá]n\s*/i, '').split(' ').map(function (w) { return w[0]; }).slice(0, 2).join('');
      var sps = (c.specialtySpecies || c.species || []).map(function (s) { return nm(s); }).slice(0, 3);
      var card = E('div', 'com-fcard');
      card.appendChild(E('div', 'com-rank' + medal(rank), String(rank)));
      card.appendChild(E('div', 'com-favatar', initials));
      var info = E('div', 'com-finfo');
      info.appendChild(E('div', 'com-fname', c.name || 'Captain'));
      info.appendChild(E('div', 'com-fmeta', (c.homePort || z.name || 'Baja') + ' · ★' + (c.rating != null ? Number(c.rating).toFixed(1) : '5.0') + (c.years ? ' · ' + c.years + ' yrs' : '')));
      info.appendChild(E('div', 'com-fspecies', sps.join(' · ')));
      card.appendChild(info);
      return card;
    }
    function group(coast, label, dotCls) {
      var g = E('div', 'com-group');
      var head = E('div', 'com-group-head');
      head.appendChild(E('span', 'com-coast-dot com-coast-dot--' + dotCls));
      head.appendChild(document.createTextNode(label));
      g.appendChild(head);
      topFor(coast).forEach(function (c, i) { g.appendChild(fcard(c, i + 1)); });
      return g;
    }
    groups.appendChild(group('Pacific', 'North Pacific Ocean', 'pac'));
    groups.appendChild(group('Sea of Cortez', 'Sea of Cortez', 'cor'));
    host.appendChild(groups);

    // "View" dropdown mirrors the coast filter buttons on the full grid
    var sel = $('#comCoastSelect');
    if (sel) sel.addEventListener('change', function () {
      var want = sel.value;
      var btn = document.querySelector('.cap-filter[data-coast="' + want + '"]');
      if (btn) btn.click();
      var grid = $('#capGrid'); if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function init() { reveal(); parallax(); navScroll(); navLive(); biting(); liveReports(); coasts(); coastsLive(); tripInquiry(); species(); plate(); ticker(); trust(); counts(); zonemap(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

  // register the service worker (installable PWA + offline shell)
  if ('serviceWorker' in navigator) {
    addEventListener('load', function () {
      navigator.serviceWorker.register('/site/sw.js', { scope: '/site/' }).catch(function () {});
    });
  }
})();
