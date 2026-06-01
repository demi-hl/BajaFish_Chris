/* BajaFish — inline SVG icon set (replaces emoji). Global ICON(name, cls) + DOT(color).
   Lucide-style line icons, 24x24, currentColor stroke, sized via .ow-ico (1em). */
(function () {
  'use strict';
  var P = {
    flame:    '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    anchor:   '<circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>',
    pin:      '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    signal:   '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    map:      '<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/>',
    phone:    '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    users:    '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    chat:     '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    search:   '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    target:   '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    lock:     '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    hook:     '<path d="M12 3v9a4.5 4.5 0 0 1-9 0V11"/><circle cx="12" cy="3" r="1.4"/><path d="M3 11l-1.2 1.2M3 11l1.2 1.2"/>',
    star:     '<polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2"/>',
    feather:  '<path d="M20.2 12.2a6 6 0 0 0-8.5-8.5L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/>',
    scale:    '<path d="M12 3v18"/><path d="M5 7h14"/><path d="M5 7l-3 6a3 3 0 0 0 6 0z"/><path d="M19 7l-3 6a3 3 0 0 0 6 0z"/><path d="M7 21h10"/>',
    dumbbell: '<path d="M14.4 14.4 9.6 9.6"/><path d="m18.7 21 2.3-2.3"/><path d="m3 5.3 2.3-2.3"/><path d="m21 3-3 3"/><path d="m3 21 3-3"/><path d="m7.8 7.8-2.2-2.2"/><path d="m16.2 16.2 2.2 2.2"/>',
    moon:     '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
    home:     '<path d="M3 9.5 12 3l9 6.5"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
    utensils: '<path d="M3 2v7a3 3 0 0 0 3 3v10"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-3 5v6z"/>',
    fish:     '<path d="M6.5 12c1-3.5 5-6 8.5-6s6 2.5 7 6c-1 3.5-3.5 6-7 6s-7.5-2.5-8.5-6z"/><circle cx="16" cy="11" r=".8" fill="currentColor" stroke="none"/><path d="M6.5 12c-1.5 0-3-1-4-2 .5 2 .5 2 0 4 1-1 2.5-2 4-2z"/>',
    inbox:    '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.5 5.1 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.9A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.7 1.1z"/>',
    trending: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
    alert:    '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    zap:      '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    waves:    '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5s2.4 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.4 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.4 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1"/>',
    palm:     '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/>',
    medal:    '<circle cx="12" cy="15" r="6"/><path d="M12 13v4M10.5 15h3"/><path d="M8.5 9 6 2h4l2 5"/><path d="M15.5 9 18 2h-4l-2 5"/>'
  };
  function ICON(name, cls) {
    var inner = P[name];
    if (!inner) return '';
    return '<svg class="ow-ico' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + inner + '</svg>';
  }
  function DOT(color) { return '<span class="ow-dot ow-dot--' + (color || 'gold') + '"></span>'; }
  window.ICON = ICON;
  window.DOT = DOT;
})();
