/* BajaFish, species catch intelligence (baits / lures / technique / season).
   Generated from .claude/overhaul/catch-data.json + species-images-v2.json.
   Browser-global, no module system. Read with: window.CATCH (array) or
   window.CATCH_BY_KEY (lookup). XSS note: render strings via textContent only.
   Each entry's `img` resolves to a new photo (/site/img/species/<key>.jpg),
   else a legacy /fish/<key>.jpg, else the iNaturalist Open Data URL.
   ============================================================ */
window.CATCH = [
  {
    "key": "yellowtail",
    "commonName": "California Yellowtail",
    "spanishName": "Jurel",
    "scientificName": "Seriola lalandi",
    "category": "Pelagic",
    "coasts": [
      "Pacific"
    ],
    "season": "Dec to Jun (Pacific); summer to early fall at Cedros",
    "marquee": true,
    "baits": [
      "live sardina",
      "live mackerel (caballito)",
      "live squid",
      "cut bait",
      "dropper-loop squid"
    ],
    "lures": [
      "yo-yo iron (heavy jig)",
      "surface iron",
      "Rapala-style swimbaits",
      "knife jigs",
      "metal jigs"
    ],
    "technique": "Throw surface iron in the wind lane or depth-charge yo-yo iron to the bottom and crank fast; fly-line or slow-troll live mackerel/sardina along kelp and high spots for the bigger 'mossbacks'. Cedros is the iron-throwing capital.",
    "notes": "App flagship Pacific panga fish. Almost all yellowtail over 40 lb come on bait; surface iron and yo-yo iron carry the numbers.",
    "img": "/site/img/species/yellowtail.jpg"
  },
  {
    "key": "pez-fuerte",
    "commonName": "Longfin Yellowtail / Almaco Jack (Pez Fuerte)",
    "spanishName": "Pez Fuerte / Medregal",
    "scientificName": "Seriola rivoliana",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez"
    ],
    "season": "Year-round, warm-water peak Feb to May",
    "marquee": false,
    "baits": [
      "live caballito (mackerel)",
      "live sardina",
      "live bonito strip",
      "cut bait"
    ],
    "lures": [
      "yo-yo iron (heavy jig)",
      "knife/butterfly jigs",
      "vertical jigs",
      "trolled Rapalas"
    ],
    "technique": "Yo-yo iron dropped to deep reef/seamount structure and ripped back fast; also slow-troll or fly-line live bait over the same structure. Around Cerralvo and Las Animas these are the '100-lb-pulling toads'.",
    "notes": "Almaco jack (Seriola rivoliana). Classic deep-jig fish on Gulf reefs and seamounts.",
    "img": "/site/img/species/pez-fuerte.jpg"
  },
  {
    "key": "amberjack",
    "commonName": "Amberjack (Almaco)",
    "spanishName": "Medregal / Pez Fuerte",
    "scientificName": "Seriola rivoliana",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez"
    ],
    "season": "Feb to May peak (East Cape / Cerralvo)",
    "marquee": false,
    "baits": [
      "live caballito (mackerel)",
      "live sardina",
      "cut bait"
    ],
    "lures": [
      "yo-yo iron (heavy jig)",
      "knife/butterfly jigs",
      "vertical jigs"
    ],
    "technique": "Vertical yo-yo / knife jigging over deep reef and seamounts; fly-line live bait down to marked fish. They bulldog straight for the rocks, so heavy gear is the rule.",
    "notes": "DUPLICATE of pez-fuerte (both Seriola rivoliana). Identical catch profile; merge keys.",
    "img": "/site/img/species/amberjack.jpg"
  },
  {
    "key": "dorado",
    "commonName": "Dorado / Mahi-Mahi",
    "spanishName": "Dorado",
    "scientificName": "Coryphaena hippurus",
    "category": "Pelagic",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Jun to Nov (summer peak)",
    "marquee": true,
    "baits": [
      "live sardina",
      "live caballito (mackerel)",
      "rigged ballyhoo",
      "flying-fish/strip bait",
      "cut bait"
    ],
    "lures": [
      "cedar plugs",
      "skirted trolling lures",
      "feathers",
      "poppers",
      "surface stickbaits",
      "flies"
    ],
    "technique": "Troll skirts/cedar plugs/feathers along weed lines, floating debris, buoys and porpoise; once a school is raised, stop and pitch live sardina or cast poppers for a wide-open bite. A flagship summer panga target on both coasts.",
    "notes": "2/day, 2.5 pts. The classic 'find the kelp paddy / find the school' summer fish.",
    "img": "/site/img/species/dorado.jpg"
  },
  {
    "key": "yellowfin",
    "commonName": "Yellowfin Tuna",
    "spanishName": "Atún Aleta Amarilla",
    "scientificName": "Thunnus albacares",
    "category": "Tuna",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Jun to Dec (Jul to Nov peak)",
    "marquee": true,
    "baits": [
      "live sardina",
      "live caballito (mackerel)",
      "live skipjack/chunk",
      "cut/chunk bait",
      "flat-fall sardine"
    ],
    "lures": [
      "cedar plugs",
      "feathers",
      "skirted trolling lures",
      "poppers/stickbaits",
      "flat-fall & knife jigs"
    ],
    "technique": "Troll cedar plugs and feathers to locate; run under porpoise schools, then fly-line live sardina, cast poppers into the boil, or drop knife/flat-fall jigs. Mag Bay 'cows' (200 lb+) are the signature.",
    "notes": "Mag Bay and East Cape are the marquee grounds. Live-bait fly-lining is the bread-and-butter.",
    "img": "/site/img/species/yellowfin.jpg"
  },
  {
    "key": "bluefin-tuna",
    "commonName": "Pacific Bluefin Tuna",
    "spanishName": "Atún Aleta Azul",
    "scientificName": "Thunnus orientalis",
    "category": "Tuna",
    "coasts": [
      "Pacific"
    ],
    "season": "May to Oct (spring to summer)",
    "marquee": true,
    "baits": [
      "live sardina",
      "live mackerel",
      "flat-fall sardine",
      "small live bait (fly-lined)"
    ],
    "lures": [
      "flat-fall jigs",
      "knife jigs",
      "surface stickbaits/poppers",
      "Madmac/Nomad trolling plugs",
      "Colt Sniper jigs"
    ],
    "technique": "Troll big Madmac-style plugs to find boiling/foaming schools, then sink flat-fall jigs, fly-line light fluoro sardina, or cast stickbaits. Finicky, line-shy fish that demand long fluorocarbon leaders. North Pacific (Coronados, Todos Santos) in spring-summer.",
    "notes": "Notoriously leader-shy.",
    "img": "/site/img/species/bluefin-tuna.jpg"
  },
  {
    "key": "bigeye-tuna",
    "commonName": "Bigeye Tuna",
    "spanishName": "Atún Ojo Grande / Patudo",
    "scientificName": "Thunnus obesus",
    "category": "Tuna",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Offshore, year-round (night/grey-light bite)",
    "marquee": false,
    "baits": [
      "live sardina",
      "chunk/cut bait",
      "rigged squid"
    ],
    "lures": [
      "deep-set knife jigs",
      "cedar plugs",
      "skirted trolling lures (deep)"
    ],
    "technique": "Mostly an offshore-bank fish taken on the grey-light/night bite by deep-trolling skirts or sinking jigs and chunk bait down to the thermocline. Not a typical inshore panga catch.",
    "notes": "Deep-set, dawn/dusk fishery off the offshore banks.",
    "img": "/site/img/species/bigeye-tuna.jpg"
  },
  {
    "key": "bonito",
    "commonName": "Pacific Bonito",
    "spanishName": "Bonito",
    "scientificName": "Sarda chiliensis",
    "category": "Pelagic",
    "coasts": [
      "Pacific"
    ],
    "season": "Apr to Oct; year-round",
    "marquee": false,
    "baits": [
      "live sardina",
      "cut bait",
      "feathers tipped with bait"
    ],
    "lures": [
      "small metal jigs",
      "feathers",
      "Rapalas",
      "cast iron",
      "trolled spoons"
    ],
    "technique": "Troll feathers/small jigs or cast metal into surface schools busting on bait; will also hit fly-lined sardina. Often caught while making bait or working a kelp edge, and themselves make prime marlin/dorado bait.",
    "notes": "Abundant Pacific schooling fish; doubles as top live/cut bait for billfish.",
    "img": "/site/img/species/bonito.jpg"
  },
  {
    "key": "wahoo",
    "commonName": "Wahoo",
    "spanishName": "Peto / Guaju",
    "scientificName": "Acanthocybium solandri",
    "category": "Pelagic",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Jun to Nov (summer to fall)",
    "marquee": true,
    "baits": [
      "rigged ballyhoo (Ilander/Sea Witch)",
      "live caballito",
      "cut bonito/strip bait"
    ],
    "lures": [
      "wahoo bombs",
      "high-speed bullet/lead-head jigs",
      "deep-diving plugs (Rapala X-Rap Magnum)",
      "Marauders",
      "skirted trolling lures"
    ],
    "technique": "High-speed troll (12 to 16 kt) wahoo bombs and lead-heads on wire leader; or slow-troll rigged ballyhoo with planers/trolling weights to get deep. When a school is found, slide to a stop and cast heavy iron. Wire leader is mandatory for the teeth. Cerralvo and offshore banks.",
    "notes": "Fastest gamefish; wire leader essential. Speed-trolling is the staple.",
    "img": "/site/img/species/wahoo.jpg"
  },
  {
    "key": "skipjack-tuna",
    "commonName": "Skipjack Tuna",
    "spanishName": "Barrilete",
    "scientificName": "Katsuwonus pelamis",
    "category": "Tuna",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Feb to Nov",
    "marquee": false,
    "baits": [
      "live sardina",
      "cut bait",
      "small strip bait"
    ],
    "lures": [
      "feathers",
      "cedar plugs",
      "small metal jigs",
      "trolled spoons",
      "Rapalas"
    ],
    "technique": "Troll feathers/cedar plugs through breaking schools and current lines, or cast small metal into the boils; readily takes fly-lined sardina. A reliable Gulf schooling tuna and prime live/strip bait for marlin and dorado.",
    "notes": "On every La Paz species chart. Often caught en route and recycled as billfish bait.",
    "img": "/site/img/species/skipjack-tuna.jpg"
  },
  {
    "key": "albacore",
    "commonName": "Albacore Tuna",
    "spanishName": "Albacora",
    "scientificName": "Thunnus alalunga",
    "category": "Tuna",
    "coasts": [
      "Pacific"
    ],
    "season": "Jun to Oct",
    "marquee": false,
    "baits": [
      "live sardina",
      "anchovies",
      "cut bait"
    ],
    "lures": [
      "feathers",
      "cedar plugs",
      "trolled jigs",
      "swimbaits"
    ],
    "technique": "Troll feathers and cedar plugs along temperature breaks and offshore current lines, then drop live bait when the school sounds; a cooler-water tuna taken on the Pacific side. Famous for its long pectoral fins and prized table fare.",
    "notes": "The 'longfin' tuna, identified by its extra-long pectorals. A Pacific-coast catch, less common inside the Sea of Cortez.",
    "img": "/site/img/species/albacore.jpg"
  },
  {
    "key": "sierra",
    "commonName": "Pacific Sierra (Sierra Mackerel)",
    "spanishName": "Sierra",
    "scientificName": "Scomberomorus sierra",
    "category": "Inshore",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Nov to Apr (winter peak)",
    "marquee": false,
    "baits": [
      "live sardina",
      "cut bait/strip"
    ],
    "lures": [
      "small trolling spoons (Krocodile)",
      "Rapala CD-7",
      "gold/silver spoons",
      "small Clark spoons",
      "casting jigs"
    ],
    "technique": "Troll or cast small flashy spoons and Rapalas along beaches, bays and inlets just off the sand; light wire or heavy fluoro helps against the sharp teeth. A winter inshore staple, smoked or grilled.",
    "notes": "Both coasts. Toothy; light wire shock leader saves lures.",
    "img": "/site/img/species/sierra.jpg"
  },
  {
    "key": "striped-marlin",
    "commonName": "Striped Marlin",
    "spanishName": "Marlín Rayado",
    "scientificName": "Kajikia audax",
    "category": "Billfish",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Nov to Apr (Mag Bay run Oct to Feb)",
    "marquee": true,
    "baits": [
      "live caballito (mackerel)",
      "live mackerel/sardina",
      "rigged ballyhoo",
      "live skipjack"
    ],
    "lures": [
      "skirted trolling lures",
      "teasers (hookless, for bait-and-switch)",
      "rigged ballyhoo",
      "casting plugs/flies (sight casting)"
    ],
    "technique": "Troll lures and rigged ballyhoo at 7 to 9 knots along temperature breaks and banks; bait-and-switch with hookless teasers then drop back a live caballito. On the Mag Bay fall run, sight-cast live mackerel or flies to tailing/balling fish. Mostly catch-and-release.",
    "notes": "Baja billfish king; Mag Bay fall run is world-class. Predominantly C&R.",
    "img": "/site/img/species/striped-marlin.jpg"
  },
  {
    "key": "blue-marlin",
    "commonName": "Blue Marlin",
    "spanishName": "Marlín Azul",
    "scientificName": "Makaira nigricans",
    "category": "Billfish",
    "coasts": [
      "Sea of Cortez",
      "Pacific"
    ],
    "season": "Jun to Nov (summer peak)",
    "marquee": true,
    "baits": [
      "live skipjack (whole)",
      "live bonito",
      "rigged horse ballyhoo",
      "rigged mackerel"
    ],
    "lures": [
      "large skirted trolling lures",
      "big bullet/plunger heads",
      "Marlin teasers"
    ],
    "technique": "Troll big skirted lures and bridled live skipjack/bonito at the offshore banks and drop-offs in summer; the East Cape and Cabo grounds hold grander (1,000 lb+) potential. Heavy stand-up or chair tackle, mostly C&R.",
    "notes": "Grander potential; summer offshore. Predominantly released.",
    "img": "/site/img/species/blue-marlin.jpg"
  },
  {
    "key": "black-marlin",
    "commonName": "Black Marlin",
    "spanishName": "Marlín Negro",
    "scientificName": "Istiompax indica",
    "category": "Billfish",
    "coasts": [
      "Sea of Cortez"
    ],
    "season": "Jun to Nov (summer)",
    "marquee": true,
    "baits": [
      "live skipjack (whole)",
      "live bonito",
      "rigged mackerel/ballyhoo"
    ],
    "lures": [
      "large skirted trolling lures",
      "big plunger/bullet heads"
    ],
    "technique": "Slow-troll bridled live skipjack/bonito or pull big skirts over offshore structure in summer; heaviest billfish tackle of the bunch. Rarer than blue but a recognized Gulf trophy.",
    "notes": "On Gulf billfish charts. Heavy tackle, C&R-oriented.",
    "img": "/site/img/species/black-marlin.jpg"
  },
  {
    "key": "sailfish",
    "commonName": "Pacific Sailfish",
    "spanishName": "Pez Vela",
    "scientificName": "Istiophorus platypterus",
    "category": "Billfish",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Jun to Nov (warm months)",
    "marquee": true,
    "baits": [
      "live caballito (mackerel)",
      "live sardina",
      "rigged ballyhoo"
    ],
    "lures": [
      "skirted trolling lures",
      "hookless teasers (bait-and-switch)",
      "rigged ballyhoo",
      "flies"
    ],
    "technique": "Troll small skirts and ballyhoo with hookless teasers; raise the fish, then bait-and-switch a live caballito or pitch a fly. Lighter billfish tackle than marlin. Full catch-and-release recommended.",
    "notes": "Classic teaser-and-switch fishery; release.",
    "img": "/site/img/species/sailfish.jpg"
  },
  {
    "key": "swordfish",
    "commonName": "Swordfish (Broadbill)",
    "spanishName": "Pez Espada",
    "scientificName": "Xiphias gladius",
    "category": "Billfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Offshore; year-round (deep-drop)",
    "marquee": true,
    "baits": [
      "rigged squid",
      "rigged mackerel/bonito belly",
      "rigged tinker mackerel"
    ],
    "lures": [
      "deep-drop LED-lit rigs",
      "weighted swimbaits (deep)"
    ],
    "technique": "Specialized daytime deep-drop: sink a rigged squid/bonito belly with a light and breakaway weight to 1,000 to 1,800 ft over offshore canyons, or night-drift baits near the surface. Not a typical panga fishery.",
    "notes": "Deep-drop/long-range specialty, not a standard panga catch.",
    "img": "/site/img/species/swordfish.jpg"
  },
  {
    "key": "shortbill-spearfish",
    "commonName": "Shortbill Spearfish",
    "spanishName": "Marlín Trompa Corta",
    "scientificName": "Tetrapturus angustirostris",
    "category": "Billfish",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Offshore; warm months (incidental)",
    "marquee": false,
    "baits": [
      "live caballito (mackerel)",
      "rigged ballyhoo",
      "small live sardina"
    ],
    "lures": [
      "small skirted trolling lures",
      "hookless teasers (bait-and-switch)",
      "feathers"
    ],
    "technique": "An uncommon, lightweight billfish usually raised while trolling small skirts and ballyhoo for sailfish or dorado; bait-and-switch a small live caballito. Mostly an incidental, prized release.",
    "notes": "Rare incidental billfish; release.",
    "img": "/site/img/species/shortbill-spearfish.jpg"
  },
  {
    "key": "roosterfish",
    "commonName": "Roosterfish",
    "spanishName": "Pez Gallo / Papagayo",
    "scientificName": "Nematistius pectoralis",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez",
      "Pacific"
    ],
    "season": "May to Nov (Jun to Oct peak)",
    "marquee": true,
    "baits": [
      "live mullet (lisa)",
      "live ladyfish (machete)",
      "live caballito (mackerel)",
      "live sardina",
      "small live bonito"
    ],
    "lures": [
      "large poppers",
      "surface stickbaits",
      "subsurface swimbaits",
      "big flies (fly rod)"
    ],
    "technique": "Slow-troll or fly-line a live mullet/ladyfish just off the beach; or sight-cast poppers/stickbaits and flies to fish cruising the surf zone with their combs up. Let them eat before coming tight. Heavy fluoro leader for the abrasive mouth. Almost entirely catch-and-release.",
    "notes": "Ultimate inshore trophy. Surf-zone sight casting is the iconic method. Mostly C&R.",
    "img": "/site/img/species/roosterfish.jpg"
  },
  {
    "key": "cabrilla",
    "commonName": "Leopard Grouper (Cabrilla)",
    "spanishName": "Cabrilla Sardinera",
    "scientificName": "Mycteroperca rosacea",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez",
      "Pacific"
    ],
    "season": "Year-round",
    "marquee": false,
    "baits": [
      "live sardina",
      "cut bait/strip",
      "whole dead bait",
      "dropper-loop bait"
    ],
    "lures": [
      "leadhead swimbaits / plastics",
      "yo-yo iron",
      "vertical jigs",
      "bucktails"
    ],
    "technique": "Drop live or cut bait to rocky reef and ledges, or bounce leadhead plastics/iron off the structure; pull hard immediately to keep them out of the rocks. The default Gulf reef grouper from any panga over structure.",
    "notes": "Endemic Gulf grouper; xanthic golden phase = 'golden grouper'. Get them off the bottom fast.",
    "img": "/site/img/species/cabrilla.jpg"
  },
  {
    "key": "golden-grouper",
    "commonName": "Golden Grouper (xanthic Leopard Grouper)",
    "spanishName": "Cabrilla Dorada",
    "scientificName": "Mycteroperca rosacea",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez"
    ],
    "season": "May to Sep",
    "marquee": false,
    "baits": [
      "live sardina",
      "cut bait/strip",
      "dropper-loop bait"
    ],
    "lures": [
      "leadhead swimbaits / plastics",
      "yo-yo iron",
      "vertical jigs"
    ],
    "technique": "Same as leopard grouper, bait or jig the reef and lift hard. This is the rare golden (xanthic) color morph of the same species, caught over the same Gulf structure.",
    "notes": "Color phase of cabrilla, not a separate species. Identical catch method.",
    "img": "/site/img/species/golden-grouper.jpg"
  },
  {
    "key": "gulf-grouper",
    "commonName": "Gulf Grouper",
    "spanishName": "Baya / Garropa",
    "scientificName": "Mycteroperca jordani",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez",
      "Pacific"
    ],
    "season": "Spring to early summer",
    "marquee": false,
    "baits": [
      "live whole mackerel/caballito",
      "live bonito",
      "large cut bait"
    ],
    "lures": [
      "heavy yo-yo iron",
      "large leadhead swimbaits",
      "deep vertical jigs"
    ],
    "technique": "Drop big live or cut bait to deep rocky structure on heavy tackle and winch hard, or rip heavy iron off the bottom. An endemic Gulf apex grouper to ~200 lb. IUCN Endangered, ESA-listed and the flagship recovery species of Cabo Pulmo (treat as catch-and-release).",
    "notes": "Protected/endangered. Cabo Pulmo no-take refuge species. C&R only.",
    "img": "/site/img/species/gulf-grouper.jpg"
  },
  {
    "key": "broomtail-grouper",
    "commonName": "Broomtail Grouper",
    "spanishName": "Garropa Cola de Escoba",
    "scientificName": "Mycteroperca xenarcha",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez",
      "Pacific"
    ],
    "season": "Year-round, warm-water peak",
    "marquee": false,
    "baits": [
      "live sardina",
      "live mackerel",
      "large cut bait",
      "whole dead bait"
    ],
    "lures": [
      "yo-yo iron",
      "leadhead swimbaits / plastics",
      "deep jigs"
    ],
    "technique": "Bait or jig deep reef and rocky ledges of southern Baja and lift them off the structure fast on heavy gear. A genuine East Cape / Cabo Pulmo reef grouper, often confused with the Gulf grouper.",
    "notes": "Large southern-Baja reef grouper. Heavy bottom tackle over structure.",
    "img": "/site/img/species/broomtail-grouper.jpg"
  },
  {
    "key": "grouper",
    "commonName": "Grouper (generic / Spotted Cabrilla)",
    "spanishName": "Garropa / Cabrilla",
    "scientificName": "Epinephelus / Mycteroperca spp.",
    "category": "Inshore",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Year-round",
    "marquee": false,
    "baits": [
      "live sardina",
      "live mackerel",
      "cut bait",
      "dropper-loop/whole dead bait"
    ],
    "lures": [
      "yo-yo iron",
      "leadhead swimbaits / plastics",
      "deep jigs"
    ],
    "technique": "Drop bait or jig the reef and pull hard off the bottom.",
    "notes": "A catch-all for the groupers; the tactics match the named species.",
    "img": "/site/img/species/grouper.jpg"
  },
  {
    "key": "calico-bass",
    "commonName": "Kelp Bass (Calico Bass)",
    "spanishName": "Cabrilla de Kelp / Verdillo",
    "scientificName": "Paralabrax clathratus",
    "category": "Inshore",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round (summer at Cedros)",
    "marquee": false,
    "baits": [
      "live sardina",
      "live mackerel",
      "cut squid",
      "cut bait"
    ],
    "lures": [
      "leadhead swimbaits / plastics",
      "surface iron",
      "jerkbaits",
      "small jigs"
    ],
    "technique": "Fly-line live sardina into the kelp stringers and rock edges, or grind swimbaits and surface iron over the structure; turn their head immediately to stop them holing up. A top Cedros and north-Pacific target.",
    "notes": "High-priority Pacific reef target; heavily used across northern zones. Kelp-edge fishing.",
    "img": "/site/img/species/calico-bass.jpg"
  },
  {
    "key": "sand-bass",
    "commonName": "Barred Sand Bass",
    "spanishName": "Cabrilla de Arena / Verdillo",
    "scientificName": "Paralabrax nebulifer",
    "category": "Inshore",
    "coasts": [
      "Pacific"
    ],
    "season": "Summer (spawn aggregations)",
    "marquee": false,
    "baits": [
      "live sardina",
      "cut squid",
      "ghost shrimp",
      "cut bait"
    ],
    "lures": [
      "leadhead swimbaits / plastics",
      "dropper-loop rigs",
      "small jigs"
    ],
    "technique": "Drift live bait or cut squid on a dropper loop over sand-and-structure transitions, or slow-roll swimbaits along the bottom; best on summer spawning flats. Common north-Pacific bass alongside calico.",
    "notes": "Summer-spawn flat-and-sand fish. Light tackle, bottom presentation.",
    "img": "/site/img/species/sand-bass.jpg"
  },
  {
    "key": "spotted-bay-bass",
    "commonName": "Spotted Bay Bass",
    "spanishName": "Cabrilla de Bahía / Extranjero",
    "scientificName": "Paralabrax maculatofasciatus",
    "category": "Inshore",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Year-round",
    "marquee": false,
    "baits": [
      "live sardina",
      "ghost shrimp",
      "cut squid",
      "cut bait"
    ],
    "lures": [
      "small leadhead swimbaits / plastics",
      "dropshot plastics",
      "small jigs"
    ],
    "technique": "Light-tackle bay/estuary fishing, work small swimbaits, dropshot and plastics around eelgrass, channels and structure in San Quintín, Mag Bay and the upper Gulf. A fun light-tackle bay fish.",
    "notes": "Bay/estuary light-tackle fish. Lower priority than calico/sand bass.",
    "img": "/site/img/species/spotted-bay-bass.jpg"
  },
  {
    "key": "goldspotted-bass",
    "commonName": "Goldspotted Sand Bass",
    "spanishName": "Cabrilla Extranjera / Verdillo",
    "scientificName": "Paralabrax auroguttatus",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez"
    ],
    "season": "Year-round",
    "marquee": false,
    "baits": [
      "live sardina",
      "cut squid",
      "cut bait",
      "ghost shrimp"
    ],
    "lures": [
      "leadhead swimbaits / plastics",
      "dropper-loop rigs",
      "small jigs"
    ],
    "technique": "Fish live or cut bait on a dropper loop over rocky reef and rubble bottom, or work swimbaits and small jigs along structure; a deeper, more rock-oriented Paralabrax of the upper and central Gulf. Often shares ground with cabrilla and other sand bass.",
    "notes": "Rocky-reef sand bass of the Sea of Cortez. Gold flecks distinguish it from barred sand bass.",
    "img": "/site/img/species/goldspotted-bass.jpg"
  },
  {
    "key": "pargo",
    "commonName": "Pargo / Snapper (generic)",
    "spanishName": "Pargo",
    "scientificName": "Lutjanus spp.",
    "category": "Inshore",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Year-round (Apr to Jul peak)",
    "marquee": false,
    "baits": [
      "live sardina",
      "live caballito (mackerel)",
      "cut bait",
      "whole dead bait"
    ],
    "lures": [
      "leadhead swimbaits / plastics",
      "yo-yo iron",
      "trolled diving plugs",
      "poppers (shallow)"
    ],
    "technique": "Drop bait to rocky reef/ledges or troll diving plugs along the structure edge; pargo bolt straight for the rocks, so heavy line and immediate pressure are essential.",
    "notes": "A catch-all for the rock snappers; the tactics match the colorado, yellow, barred, and dog snapper.",
    "img": "/site/img/species/pargo.jpg"
  },
  {
    "key": "huachinango",
    "commonName": "Pacific Red Snapper (Huachinango)",
    "spanishName": "Huachinango",
    "scientificName": "Lutjanus peru",
    "category": "Inshore",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Year-round (cooler months best)",
    "marquee": true,
    "baits": [
      "live sardina",
      "cut squid",
      "cut bait",
      "whole dead bait"
    ],
    "lures": [
      "yo-yo iron",
      "leadhead swimbaits / plastics",
      "vertical jigs"
    ],
    "technique": "Drop bait or iron to deeper rocky reef, banks and drop-offs (often 100-300 ft); fish the bottom at first light or drift the structure edges. The classic bright-red Baja table snapper and a prized panga catch.",
    "notes": "The famous huachinango (Lutjanus peru). Deeper-reef bright-red snapper, top table fare across Baja.",
    "img": "/site/img/species/huachinango.jpg"
  },
  {
    "key": "pargo-colorado",
    "commonName": "Colorado Snapper (Pargo Colorado)",
    "spanishName": "Pargo Colorado",
    "scientificName": "Lutjanus colorado",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez",
      "Pacific"
    ],
    "season": "Year-round (Apr to Jul peak)",
    "marquee": false,
    "baits": [
      "live sardina",
      "live caballito (mackerel)",
      "cut bait",
      "whole dead bait"
    ],
    "lures": [
      "leadhead swimbaits / plastics",
      "yo-yo iron",
      "trolled diving plugs"
    ],
    "technique": "Fly-line or drop live sardina/mackerel to rocky reef and mangrove edges, or troll diving plugs the structure line; lock the drag and pull them off the rocks. The 'pargo' everyone targets, best eating on the Cortez side.",
    "notes": "Premier eating snapper of the Gulf.",
    "img": "/site/img/species/pargo-colorado.jpg"
  },
  {
    "key": "yellow-snapper",
    "commonName": "Yellow Snapper (Pargo Amarillo)",
    "spanishName": "Pargo Amarillo",
    "scientificName": "Lutjanus argentiventris",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez",
      "Pacific"
    ],
    "season": "Year-round (Apr to Jul peak)",
    "marquee": false,
    "baits": [
      "live sardina",
      "cut bait",
      "whole dead bait",
      "shrimp"
    ],
    "lures": [
      "leadhead swimbaits / plastics",
      "yo-yo iron",
      "trolled diving plugs"
    ],
    "technique": "Bait or jig the reef, rock piles and island ledges and pull hard off the bottom; one of the commonest reef snappers around the southern Gulf islands. Excellent table fare.",
    "notes": "Very common reef snapper around La Paz islands and East Cape. Bottom/structure fish.",
    "img": "/site/img/species/yellow-snapper.jpg"
  },
  {
    "key": "barred-pargo",
    "commonName": "Barred Pargo (Mexican Barred Snapper)",
    "spanishName": "Pargo Coconaco / Pargo Mexicano",
    "scientificName": "Hoplopagrus guentherii",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez",
      "Pacific"
    ],
    "season": "Year-round (Apr to Jul peak)",
    "marquee": false,
    "baits": [
      "live sardina",
      "live caballito (mackerel)",
      "cut bait",
      "shrimp",
      "whole dead bait"
    ],
    "lures": [
      "leadhead swimbaits / plastics",
      "yo-yo iron",
      "deep diving plugs"
    ],
    "technique": "Drop live/cut bait tight to rocky reef and lift hard; a bruising near-shore reef snapper that fights well above its weight at the East Cape and islands. Heavy fluoro and a stout rod.",
    "notes": "Distinct genus (Hoplopagrus). Pound-for-pound brawler on the rocks.",
    "img": "/site/img/species/barred-pargo.jpg"
  },
  {
    "key": "dog-snapper",
    "commonName": "Pacific Dog Snapper / Cubera (Pargo Prieto)",
    "spanishName": "Pargo Prieto / Pargo Negro",
    "scientificName": "Lutjanus novemfasciatus",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez",
      "Pacific"
    ],
    "season": "Year-round (Jun to Oct summer peak)",
    "marquee": true,
    "baits": [
      "large fly-lined live mullet",
      "whole live mackerel/caballito",
      "live ladyfish",
      "bonito head/belly",
      "large cut bait"
    ],
    "lures": [
      "heavy yo-yo iron",
      "large leadhead swimbaits",
      "deep diving plugs",
      "poppers (shallow rock)"
    ],
    "technique": "Find rocky structure in 150 ft or less, drop a big fly-lined live bait right on the bottom and clamp down. These are the strongest reef snapper in Baja and always run for the rocks. 80 lb braid and 80 lb fluoro is the rule. The East Cape / Cabo Pulmo 'big toad' / Pacific cubera.",
    "notes": "Marquee reef trophy. Heaviest snapper tackle; the Pacific cubera.",
    "img": "/site/img/species/dog-snapper.jpg"
  },
  {
    "key": "mullet-snapper",
    "commonName": "Mullet Snapper (Pargo Mulato)",
    "spanishName": "Pargo Mulato / Pargo Lisa",
    "scientificName": "Lutjanus aratus",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez"
    ],
    "season": "Year-round (warm months)",
    "marquee": false,
    "baits": [
      "live sardina",
      "live mullet",
      "cut bait"
    ],
    "lures": [
      "leadhead swimbaits / plastics",
      "poppers (shallow rock)",
      "yo-yo iron",
      "trolled diving plugs"
    ],
    "technique": "Work live bait, plastics or poppers along rocky reef and island walls; a hard-pulling schooling reef snapper cited specifically around Espíritu Santo. Pull them off the structure immediately.",
    "notes": "Schooling reef snapper at Espíritu Santo. Overlaps the snapper group.",
    "img": "/site/img/species/mullet-snapper.jpg"
  },
  {
    "key": "corvina",
    "commonName": "Corvina / Gulf Corvina",
    "spanishName": "Corvina Golfina",
    "scientificName": "Cynoscion othonopterus",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez",
      "Pacific"
    ],
    "season": "Feb to Apr (upper Gulf spawning run)",
    "marquee": false,
    "baits": [
      "live sardina",
      "cut bait",
      "shrimp",
      "clams (Pacific lagoons)"
    ],
    "lures": [
      "leadhead swimbaits / plastics",
      "Rapalas",
      "small spoons",
      "soft plastics on jigheads"
    ],
    "technique": "Cast or troll swimbaits/Rapalas and soak cut bait around channels, drop-offs and the upper-Gulf spawning aggregations (San Felipe, El Golfo); on Pacific lagoons, fish clams and cut bait inside the bays. Listen for the croaking spawn run.",
    "notes": "Gulf corvina (C. othonopterus) spawning run is the famous fishery. Pacific lagoon 'corvina' may be orangemouth (C. xanthulus).",
    "img": "/site/img/species/corvina.jpg"
  },
  {
    "key": "white-seabass",
    "commonName": "White Seabass",
    "spanishName": "Corvina Blanca / Corvinata",
    "scientificName": "Atractoscion nobilis",
    "category": "Inshore",
    "coasts": [
      "Pacific"
    ],
    "season": "Mar to Jul (spring spawn)",
    "marquee": true,
    "baits": [
      "live squid (dropper loop)",
      "live mackerel (fly-lined)",
      "live sardina",
      "cut squid"
    ],
    "lures": [
      "surface iron",
      "Krocodile spoons",
      "knife/vertical jigs"
    ],
    "technique": "Fish live squid on a high dropper loop on the bottom, fly-line a live mackerel through the kelp, or cast surface iron / Krocodile at grey light when squid is around. 'Ghost of the kelp forest', best at dawn on the squid spawn.",
    "notes": "Premier Pacific croaker. Live squid on the dropper loop is the money rig; live mackerel is the #1 bait in Baja. 2/day, 2.5 pts.",
    "img": "/site/img/species/white-seabass.jpg"
  },
  {
    "key": "orangemouth-corvina",
    "commonName": "Orangemouth Corvina",
    "spanishName": "Corvina Boquinaranja / Corvina Pintada",
    "scientificName": "Cynoscion xanthulus",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez",
      "Pacific"
    ],
    "season": "Spring to fall (warm water)",
    "marquee": false,
    "baits": [
      "live sardina",
      "cut bait",
      "shrimp",
      "mudsuckers"
    ],
    "lures": [
      "leadhead swimbaits / plastics",
      "Rapalas",
      "small spoons",
      "topwater at dawn"
    ],
    "technique": "Work swimbaits, Rapalas and topwater along channel edges, esteros and warm-water flats, or soak live and cut bait; the largest of the corvinas and a strong light-tackle target in Pacific lagoons and the upper Gulf. Look for the orange mouth and fins.",
    "notes": "Biggest corvina (Cynoscion xanthulus). The 'corvina' of many Pacific lagoons. Orange mouth/fins are the tell.",
    "img": "/site/img/species/orangemouth-corvina.jpg"
  },
  {
    "key": "shortfin-corvina",
    "commonName": "Shortfin Corvina",
    "spanishName": "Corvina Aleta Corta / Corvina Picuda",
    "scientificName": "Cynoscion parvipinnis",
    "category": "Inshore",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Spring to fall (warm water)",
    "marquee": false,
    "baits": [
      "live sardina",
      "cut bait",
      "shrimp"
    ],
    "lures": [
      "leadhead swimbaits / plastics",
      "Rapalas",
      "small spoons"
    ],
    "technique": "Cast swimbaits and Rapalas or soak cut bait around sandy channels, surf and estuary mouths; a toothy, schooling corvina common along the open Pacific coast and into the Gulf. Often mixed with other corvinas on the same ground.",
    "notes": "Toothy open-coast corvina (Cynoscion parvipinnis). Schools along sandy beaches and estuary mouths.",
    "img": "/site/img/species/shortfin-corvina.jpg"
  },
  {
    "key": "yellowfin-croaker",
    "commonName": "Yellowfin Croaker",
    "spanishName": "Berrugata Aletas Amarillas / Corvineta",
    "scientificName": "Umbrina roncador",
    "category": "Inshore",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Summer to fall",
    "marquee": false,
    "baits": [
      "live sardina",
      "ghost shrimp",
      "bloodworms",
      "cut squid",
      "mussel"
    ],
    "lures": [
      "small soft plastics",
      "bait rigs (Carolina/dropper)"
    ],
    "technique": "Surf and bay bottom fish: soak ghost shrimp, mussel or bloodworms on a Carolina rig in the wash and around sand troughs, jetties and estuary mouths. A reliable light-tackle and surf-fishing croaker.",
    "notes": "Surf and bay croaker with yellow fins and a single chin barbel. Fun light-tackle and panfish target.",
    "img": "/site/img/species/yellowfin-croaker.jpg"
  },
  {
    "key": "black-croaker",
    "commonName": "Black Croaker",
    "spanishName": "Berrugata Negra / Roncador Negro",
    "scientificName": "Cheilotrema saturnum",
    "category": "Inshore",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Year-round",
    "marquee": false,
    "baits": [
      "live sardina",
      "ghost shrimp",
      "cut squid",
      "mussel"
    ],
    "lures": [
      "small soft plastics",
      "bait rigs"
    ],
    "technique": "Fish bait on the bottom around rocky reef, kelp edges, jetties and pilings, often after dark; a secretive structure-oriented croaker. Juveniles show bold white bars that fade with age.",
    "notes": "Reef/structure croaker (copper-bronze adults, barred juveniles). Often caught around rocks and pilings at night.",
    "img": "/site/img/species/black-croaker.jpg"
  },
  {
    "key": "spotfin-croaker",
    "commonName": "Spotfin Croaker",
    "spanishName": "Berrugata Aleta Manchada / Roncador",
    "scientificName": "Roncador stearnsii",
    "category": "Inshore",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Late summer to fall (best run)",
    "marquee": false,
    "baits": [
      "ghost shrimp",
      "clams",
      "mussel",
      "bloodworms",
      "cut squid"
    ],
    "lures": [
      "bait rigs (Carolina/dropper)"
    ],
    "technique": "A prized surf-fishing croaker: soak ghost shrimp, clams or mussel on a Carolina rig in the surf troughs and around sandy structure, best on a building swell in late summer. Look for the black spot at the pectoral-fin base.",
    "notes": "Prized surf croaker with a distinct black spot at the pectoral base; no chin barbel. Strong fall surf run.",
    "img": "/site/img/species/spotfin-croaker.jpg"
  },
  {
    "key": "california-corbina",
    "commonName": "California Corbina",
    "spanishName": "Berrugata Californiana / Corvina de Aleta Corta",
    "scientificName": "Menticirrhus undulatus",
    "category": "Inshore",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Summer to early fall",
    "marquee": false,
    "baits": [
      "sand crabs (mole crabs)",
      "ghost shrimp",
      "bloodworms",
      "mussel",
      "clams"
    ],
    "lures": [
      "Carolina/dropper bait rigs",
      "small soft plastics"
    ],
    "technique": "Classic surf-fishing target: light Carolina rig with fresh sand crabs worked in the wash, sand troughs and cuts on a moving tide. Wary and soft-biting, so go light and stealthy. A single chin barbel and no spot distinguish it from spotfin croaker.",
    "notes": "The premier California surf croaker. Sand crabs are the #1 bait. Single chin barbel; no pectoral spot. Often catch-and-release.",
    "img": "/site/img/species/california-corbina.jpg"
  },
  {
    "key": "totoaba",
    "commonName": "Totoaba",
    "spanishName": "Totoaba",
    "scientificName": "Totoaba macdonaldi",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez"
    ],
    "season": "Protected — no open season",
    "marquee": false,
    "baits": [],
    "lures": [],
    "technique": "PROTECTED SPECIES — do not target. Endemic to the upper Gulf of California and listed as critically endangered (CITES Appendix I). Fishing for and retaining totoaba is illegal in Mexico. If one is hooked incidentally, release it in the water immediately without removing it from the water. Included here for identification only.",
    "notes": "PROTECTED / NO-TAKE. Critically endangered upper-Gulf giant croaker (Totoaba macdonaldi). Illegal to catch or keep; release immediately if hooked. ID reference only.",
    "img": "/site/img/species/totoaba.jpg"
  },
  {
    "key": "halibut",
    "commonName": "California Halibut",
    "spanishName": "Lenguado de California",
    "scientificName": "Paralichthys californicus",
    "category": "Inshore",
    "coasts": [
      "Pacific"
    ],
    "season": "Mar to Sep (summer flatties); year-round",
    "marquee": false,
    "baits": [
      "live sardina",
      "live anchovy",
      "live/fresh squid",
      "cut bait"
    ],
    "lures": [
      "leadhead swimbaits (3 to 5 in)",
      "bucktail jigs",
      "drift/trap-rig live bait"
    ],
    "technique": "Drift live sardina or squid near the bottom on a trap/Carolina rig over sand flats and the sand-structure edge, or bounce a swimbait slowly along the bottom at ~1 knot. Sandy-bottom ambush flatfish, fish the sand at the base of the reef.",
    "notes": "Drift-the-sand fishery; swimbaits and live bait.",
    "img": "/site/img/species/halibut.jpg"
  },
  {
    "key": "cortez-halibut",
    "commonName": "Cortez Halibut",
    "spanishName": "Lenguado de Cortez",
    "scientificName": "Paralichthys aestuarius",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez",
      "Pacific"
    ],
    "season": "Year-round",
    "marquee": false,
    "baits": [
      "live sardina",
      "live/fresh squid",
      "cut bait"
    ],
    "lures": [
      "leadhead swimbaits (3 to 5 in)",
      "bucktail jigs",
      "drift/trap-rig live bait"
    ],
    "technique": "Drift live bait or slow-bounce swimbaits along sand flats and the sand-structure edge, mostly inside the Gulf and Baja bays; the Cortez cousin of the California halibut. Sandy-bottom ambush flatfish.",
    "notes": "Gulf of California halibut (Paralichthys aestuarius). Same drift-the-sand tactics as the California halibut.",
    "img": "/site/img/species/cortez-halibut.jpg"
  },
  {
    "key": "california-turbot",
    "commonName": "California Turbot (Diamond Turbot)",
    "spanishName": "Lenguado Diamante / Platija",
    "scientificName": "Hypsopsetta guttulata",
    "category": "Inshore",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Year-round",
    "marquee": false,
    "baits": [
      "ghost shrimp",
      "bloodworms",
      "clams",
      "cut squid",
      "mussel"
    ],
    "lures": [
      "small leadhead jigs (bait-tipped)",
      "dropper/Carolina bait rigs"
    ],
    "technique": "Soak small baits on a light Carolina rig over sand and eelgrass in bays and estuaries; a small, diamond-shaped flatfish that nibbles, so use small hooks. Common bay bycatch and a fine panfish.",
    "notes": "Small diamond-shaped bay flatfish (Hypsopsetta guttulata) with blue-flecked spots. Light-tackle bay fish.",
    "img": "/site/img/species/california-turbot.jpg"
  },
  {
    "key": "lingcod",
    "commonName": "Lingcod",
    "spanishName": "Bacalao / Lorcha",
    "scientificName": "Ophiodon elongatus",
    "category": "Rockfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Nov to Mar (cold water)",
    "marquee": false,
    "baits": [
      "live mackerel",
      "whole/cut squid",
      "live sanddab",
      "cut bait (dropper loop)"
    ],
    "lures": [
      "heavy leadhead swimbaits",
      "shrimp/scampi flies",
      "yo-yo iron",
      "double-dropper bottom rigs"
    ],
    "technique": "Drop big swimbaits, bait or iron to deep rocky reef and pinnacles and work it just off the bottom; lingcod often grab a hooked rockfish on the way up, keep cranking. Northern Pacific cold-water reef predator with blue flesh.",
    "notes": "Deep rocky-reef ambush predator. 2/day, 2.5 pts. Often eats a hooked rockfish.",
    "img": "/site/img/species/lingcod.jpg"
  },
  {
    "key": "pacific-barracuda",
    "commonName": "Pacific Barracuda",
    "spanishName": "Barracuda / Picuda",
    "scientificName": "Sphyraena argentea",
    "category": "Inshore",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round (warm-water peak)",
    "marquee": false,
    "baits": [
      "live sardina",
      "live anchovy",
      "cut bait"
    ],
    "lures": [
      "chrome/blue surface iron",
      "spoons",
      "Rapalas",
      "casting jigs"
    ],
    "technique": "Cast flashy surface iron and spoons or fly-line live sardina along the kelp edge and current lines; a wire or heavy fluoro shock leader stops the bite-offs. Light-tackle schooling sport fish.",
    "notes": "Kelp-edge schooler; toothy, use a shock leader.",
    "img": "/site/img/species/pacific-barracuda.jpg"
  },
  {
    "key": "mexican-barracuda",
    "commonName": "Mexican Barracuda",
    "spanishName": "Picuda / Barracuda Mexicana",
    "scientificName": "Sphyraena ensis",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez",
      "Pacific"
    ],
    "season": "Year-round (warm-water peak)",
    "marquee": false,
    "baits": [
      "live sardina",
      "live caballito (mackerel)",
      "cut bait"
    ],
    "lures": [
      "chrome/blue surface iron",
      "spoons",
      "Rapalas",
      "casting jigs"
    ],
    "technique": "Cast flashy iron, spoons and Rapalas or fly-line live bait around reefs, points and current lines, mostly inside the Gulf and south; use a wire or heavy fluoro shock leader for the teeth. The warm-water Cortez counterpart to the Pacific barracuda.",
    "notes": "Gulf/southern barracuda (Sphyraena ensis). Toothy schooler, shock leader required.",
    "img": "/site/img/species/mexican-barracuda.jpg"
  },
  {
    "key": "needlefish",
    "commonName": "California Needlefish",
    "spanishName": "Agujón / Marao",
    "scientificName": "Strongylura exilis",
    "category": "Inshore",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Summer to fall (warm water)",
    "marquee": false,
    "baits": [
      "small live sardina",
      "cut bait strips"
    ],
    "lures": [
      "small spoons",
      "small surface plugs",
      "yarn/rope teasers (foul the teeth)"
    ],
    "technique": "Sight-cast small flashy lures or fly-line a small bait to fish working the surface around bays, esteros and current lines; their hard beaks make hookups tricky, so rope/yarn flies that tangle the teeth help. Mostly a surface light-tackle and bait fish.",
    "notes": "Long-beaked surface fish (Strongylura exilis). Hard to hook on its bony beak; also common live bait for bigger predators.",
    "img": "/site/img/species/needlefish.jpg"
  },
  {
    "key": "jack-crevalle",
    "commonName": "Pacific Crevalle Jack (Toro)",
    "spanishName": "Toro / Jurel Toro / Cocinero",
    "scientificName": "Caranx caninus",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez",
      "Pacific"
    ],
    "season": "May to Nov (warm bays)",
    "marquee": false,
    "baits": [
      "live sardina",
      "live mullet",
      "cut bait"
    ],
    "lures": [
      "poppers",
      "surface stickbaits",
      "swimbaits",
      "spoons",
      "flies"
    ],
    "technique": "Cast poppers and stickbaits into surface-busting schools or fly-line live bait around bays, river mouths and beaches; a brawling, never-quit topwater fighter. Will crash a popper hard.",
    "notes": "Pacific crevalle jack (correct sci-name Caranx caninus, not C. hippos). Topwater bruiser.",
    "img": "/site/img/species/jack-crevalle.jpg"
  },
  {
    "key": "bigeye-trevally",
    "commonName": "Bigeye Trevally (Big-Eye Jack)",
    "spanishName": "Jurel Ojón / Ojotón",
    "scientificName": "Caranx sexfasciatus",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez"
    ],
    "season": "Summer to fall (warm water)",
    "marquee": false,
    "baits": [
      "live sardina",
      "live caballito (mackerel)",
      "cut bait"
    ],
    "lures": [
      "poppers",
      "surface stickbaits",
      "yo-yo iron",
      "swimbaits",
      "vertical jigs"
    ],
    "technique": "Cast topwater or drop iron to schooling fish around island walls and reefs near La Paz, especially at grey light; or fly-line live bait. A strong schooling jack that often holds deeper than crevalle.",
    "notes": "Schooling jack around La Paz islands. Overlaps jack-crevalle in feel.",
    "img": "/site/img/species/bigeye-trevally.jpg"
  },
  {
    "key": "bluefin-trevally",
    "commonName": "Bluefin Trevally",
    "spanishName": "Jurel Aleta Azul / Cojinuda Azul",
    "scientificName": "Caranx melampygus",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez"
    ],
    "season": "Summer to fall (warm water)",
    "marquee": false,
    "baits": [
      "live sardina",
      "live caballito (mackerel)",
      "cut bait"
    ],
    "lures": [
      "poppers",
      "surface stickbaits",
      "yo-yo iron",
      "swimbaits",
      "vertical jigs"
    ],
    "technique": "Hammer poppers and stickbaits over shallow reef and rocky points, or drop iron along island walls; an aggressive, hard-pulling jack of the warmer southern Gulf and Pacific tip. Often mixed with bigeye trevally and crevalle.",
    "notes": "Electric-blue-finned reef jack. Topwater bruiser around East Cape and the islands.",
    "img": "/site/img/species/bluefin-trevally.jpg"
  },
  {
    "key": "green-jack",
    "commonName": "Green Jack",
    "spanishName": "Cocinero / Jurel Verde",
    "scientificName": "Caranx caballus",
    "category": "Inshore",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Year-round",
    "marquee": false,
    "baits": [
      "small live sardina",
      "cut bait",
      "sabiki bait rigs"
    ],
    "lures": [
      "small jigs",
      "small swimbaits",
      "sabiki rigs"
    ],
    "technique": "Catch on sabikis and small jigs around bait schools, reefs and panga moorings; a common schooling jack used both as a light-tackle target and as prime live bait for dorado, tuna and billfish.",
    "notes": "Abundant small schooling jack. Doubles as top-grade live bait for bigger pelagics.",
    "img": "/site/img/species/green-jack.jpg"
  },
  {
    "key": "pompano",
    "commonName": "Gafftopsail Pompano / Paloma Pompano",
    "spanishName": "Pámpano / Palometa",
    "scientificName": "Trachinotus rhodopus",
    "category": "Surf",
    "coasts": [
      "Sea of Cortez",
      "Pacific"
    ],
    "season": "Summer to fall",
    "marquee": false,
    "baits": [
      "sand crabs",
      "shrimp",
      "cut bait",
      "live sardina"
    ],
    "lures": [
      "small spoons",
      "small swimbaits/plastics",
      "pompano jigs",
      "flies"
    ],
    "technique": "Surf-cast small baits and jigs or work spoons/flies in the wash off La Paz / island and East Cape beaches; a fun light-tackle surf-zone fish that travels in small schools.",
    "notes": "Surf-zone light-tackle catch. Small offerings in the wash.",
    "img": "/site/img/species/pompano.jpg"
  },
  {
    "key": "ladyfish",
    "commonName": "Pacific Ladyfish (Machete)",
    "spanishName": "Machete / Sábalo",
    "scientificName": "Elops affinis",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez",
      "Pacific"
    ],
    "season": "Year-round (warm months)",
    "marquee": false,
    "baits": [
      "live sardina",
      "small cut bait",
      "shrimp"
    ],
    "lures": [
      "small spoons",
      "small jigs/plastics",
      "Rapalas",
      "flies"
    ],
    "technique": "Cast small spoons, jigs or flies around estuaries, beaches and harbor mouths for fast strikes and acrobatic jumps; also caught (and kept) as prime live bait for roosterfish. Fun light-tackle and fly target.",
    "notes": "Light-tackle/fly fish; doubles as top roosterfish bait.",
    "img": "/site/img/species/ladyfish.jpg"
  },
  {
    "key": "snook",
    "commonName": "Black Snook",
    "spanishName": "Robalo Prieto / Robalo Negro",
    "scientificName": "Centropomus nigrescens",
    "category": "Inshore",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round (May to Oct peak)",
    "marquee": true,
    "baits": [
      "live mullet (lisa)",
      "live sardina",
      "live ladyfish/croaker",
      "shrimp"
    ],
    "lures": [
      "swimbaits",
      "jerkbaits",
      "soft plastics",
      "topwater walkers",
      "flies"
    ],
    "technique": "Work live bait, swimbaits and jerkbaits along the mangrove edges, channel mouths and current breaks of Mag Bay / Lopez Mateos, often at dawn and dusk; heavy fluoro for the mangrove roots and gill-plate. A prized mangrove ambush trophy.",
    "notes": "Mangrove trophy. Esteros of Mag Bay.",
    "img": "/site/img/species/snook.jpg"
  },
  {
    "key": "triggerfish",
    "commonName": "Finescale Triggerfish",
    "spanishName": "Cochito / Puerco",
    "scientificName": "Balistes polylepis",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez",
      "Pacific"
    ],
    "season": "Year-round",
    "marquee": false,
    "baits": [
      "cut squid",
      "shrimp",
      "cut bait/strips",
      "clams"
    ],
    "lures": [
      "small leadhead jigs (bait-tipped)",
      "dropper-loop bottom rigs"
    ],
    "technique": "Drop small bits of cut squid/shrimp on a small strong hook to reef and rock structure; they nibble, so a sharp small hook and a quick set are key. Upper-Gulf and reef staple, excellent eating despite the tough hide.",
    "notes": "Light-bite bottom fish on small baits. Great table fare.",
    "img": "/site/img/species/triggerfish.jpg"
  },
  {
    "key": "black-triggerfish",
    "commonName": "Pacific Black Triggerfish",
    "spanishName": "Cochito Negro / Puerco Negro",
    "scientificName": "Melichthys niger",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez",
      "Pacific"
    ],
    "season": "Year-round (warm water)",
    "marquee": false,
    "baits": [
      "cut squid",
      "shrimp",
      "cut bait/strips"
    ],
    "lures": [
      "small leadhead jigs (bait-tipped)",
      "dropper-loop bottom rigs"
    ],
    "technique": "Drop small baits to reef, pinnacles and island walls where they school in midwater and pick at the bait; quick set on the nibble. Common around the southern Cape and offshore rocks. Dark, with thin blue lines along the fin bases.",
    "notes": "Schooling reef triggerfish, near-black with blue fin-base lines. Same small-bait tactics as cochito.",
    "img": "/site/img/species/black-triggerfish.jpg"
  },
  {
    "key": "sheephead",
    "commonName": "California Sheephead",
    "spanishName": "Vieja de California / Pez Perro",
    "scientificName": "Bodianus pulcher",
    "category": "Inshore",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round",
    "marquee": false,
    "baits": [
      "live/fresh squid",
      "shrimp",
      "cut bait",
      "ghost shrimp"
    ],
    "lures": [
      "leadhead jigs (bait-tipped)",
      "dropper-loop bottom rigs"
    ],
    "technique": "Drop squid or shrimp to rocky reef and kelp-bed bottom and let them crush it with their canine/molar teeth; a structure-oriented wrasse. Common Pacific reef/kelp bycatch and a fine eating fish.",
    "notes": "Kelp-forest wrasse with crushing teeth (correct sci-name Bodianus pulcher). Bottom bait fish.",
    "img": "/site/img/species/sheephead.jpg"
  },
  {
    "key": "burrito-grunt",
    "commonName": "Burrito Grunt",
    "spanishName": "Burro / Burrito",
    "scientificName": "Anisotremus interruptus",
    "category": "Inshore",
    "coasts": [
      "Sea of Cortez",
      "Pacific"
    ],
    "season": "Year-round",
    "marquee": false,
    "baits": [
      "shrimp",
      "cut squid",
      "cut bait/strips",
      "clams"
    ],
    "lures": [
      "small leadhead jigs (bait-tipped)",
      "dropper-loop bottom rigs"
    ],
    "technique": "Drop small baits to rocky reef, jetties and structure where they hold in loose schools; steady bottom bites on shrimp and squid. A common reef grunt around the Cape and Gulf, good light-tackle and table fish.",
    "notes": "Schooling reef grunt (Anisotremus interruptus), silvery with a yellow tail. Small-bait bottom fish.",
    "img": "/site/img/species/burrito-grunt.jpg"
  },
  {
    "key": "ocean-whitefish",
    "commonName": "Ocean Whitefish",
    "spanishName": "Pierna / Blanquillo",
    "scientificName": "Caulolatilus princeps",
    "category": "Bottomfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round",
    "marquee": false,
    "baits": [
      "cut squid",
      "cut bait/strips",
      "live sardina",
      "shrimp"
    ],
    "lures": [
      "leadhead swimbaits / plastics",
      "yo-yo iron",
      "dropper-loop bottom rigs"
    ],
    "technique": "Drop cut squid/strip bait or bounce a leadhead and iron over rocky reef and hard bottom around Cedros, the Coronados and all north-Pacific structure; an aggressive, near-constant reef biter and underrated table fish.",
    "notes": "Extremely common north-Pacific reef catch. Bottom bait or iron over structure.",
    "img": "/site/img/species/ocean-whitefish.jpg"
  },
  {
    "key": "speckled-rockfish",
    "commonName": "Speckled Rockfish",
    "spanishName": "Rocote Pecoso",
    "scientificName": "Sebastes ovalis",
    "category": "Rockfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round",
    "marquee": false,
    "baits": [
      "cut squid",
      "cut bait/strip",
      "live sardina"
    ],
    "lures": [
      "shrimp flies (gangion)",
      "small leadhead swimbaits",
      "deep-drop dropper-loop rigs"
    ],
    "technique": "Work shrimp-fly gangions and swimbaits over deep reef and high-relief rock where they school, often up off the bottom; an orange-tan rockfish finely speckled with black, caught in the deep complex.",
    "notes": "Schooling deep rockfish (Sebastes ovalis), tan with fine black speckling. Gangion bottom fish.",
    "img": "/site/img/species/speckled-rockfish.jpg"
  },
  {
    "key": "cabezon",
    "commonName": "Cabezon",
    "spanishName": "Cabezón / Bocón",
    "scientificName": "Scorpaenichthys marmoratus",
    "category": "Bottomfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round (spring spawn best)",
    "marquee": false,
    "baits": [
      "live/fresh squid",
      "shrimp",
      "cut bait/strip",
      "crab"
    ],
    "lures": [
      "leadhead swimbaits / plastics",
      "bait-tipped jigs"
    ],
    "technique": "Fish bait or swimbaits tight to rocky reef, kelp and tidepool structure where this big scaleless sculpin ambushes from cover; a hard bottom-grabber, lift fast. Good eating, but note the roe is toxic and must be discarded.",
    "notes": "Large kelp/rock sculpin (Scorpaenichthys marmoratus). Excellent table fish, but its eggs/roe are poisonous, do not eat.",
    "img": "/site/img/species/cabezon.jpg"
  },
  {
    "key": "california-scorpionfish",
    "commonName": "California Scorpionfish (Sculpin)",
    "spanishName": "Escorpión / Lapón",
    "scientificName": "Scorpaena guttata",
    "category": "Bottomfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round (summer spawn)",
    "marquee": false,
    "baits": [
      "cut squid",
      "shrimp",
      "cut bait/strip",
      "live sardina"
    ],
    "lures": [
      "bait-tipped leadhead jigs",
      "dropper-loop bottom rigs"
    ],
    "technique": "Soak bait on the bottom around rocky reef, wrecks and hard structure where they pile up, especially on the summer spawn; superb eating. CAUTION: the dorsal, anal and pelvic spines are venomous and give a very painful sting, so handle with care and avoid the spines when unhooking.",
    "notes": "Prized eating 'sculpin' (Scorpaena guttata). VENOMOUS fin spines deliver a painful sting, handle carefully.",
    "img": "/site/img/species/california-scorpionfish.jpg"
  },
  {
    "key": "shortfin-mako",
    "commonName": "Shortfin Mako Shark",
    "spanishName": "Marrajo / Mako",
    "scientificName": "Isurus oxyrinchus",
    "category": "Pelagic",
    "coasts": [
      "Pacific",
      "Sea of Cortez"
    ],
    "season": "Spring to fall (warm water)",
    "marquee": false,
    "baits": [
      "drifted whole mackerel / bonito",
      "live caballito (mackerel)",
      "fly-lined bait in a chum slick"
    ],
    "lures": [
      "trolled rigged baits",
      "large trolling lures"
    ],
    "technique": "Drift or slow-troll rigged baits in a chum slick along temperature breaks and current lines offshore; the fastest, hardest-jumping shark in the ocean. Use heavy wire/cable leader and handle boatside with extreme care. Shortfin mako are a conservation concern with retention limits, so know current regulations and consider catch-and-release.",
    "notes": "Fast, jumping pelagic shark (Isurus oxyrinchus). Overfished — tight retention limits; check regs and consider release. Wire leader, handle with care.",
    "img": "/site/img/species/shortfin-mako.jpg"
  },
  {
    "key": "thresher-shark",
    "commonName": "Thresher Shark",
    "spanishName": "Zorro / Pez Zorro",
    "scientificName": "Alopias vulpinus",
    "category": "Pelagic",
    "coasts": [
      "Pacific"
    ],
    "season": "Spring to fall",
    "marquee": false,
    "baits": [
      "drifted/trolled whole mackerel",
      "live caballito (mackerel)",
      "fly-lined bait in a slick"
    ],
    "lures": [
      "trolled rigged baits",
      "trolled feathers / lures"
    ],
    "technique": "Troll or drift rigged baits along current lines and temperature breaks offshore; threshers stun bait with their long upper tail lobe and are often tail-hooked. Use a wire/heavy leader and handle the powerful tail with care. Subject to retention limits, so check regulations and release fish you can't keep.",
    "notes": "Long-tailed pelagic shark (Alopias vulpinus). Stuns prey with its tail; often foul-hooked there. Retention-limited — check regs.",
    "img": "/site/img/species/thresher-shark.jpg"
  },
  {
    "key": "giant-sea-bass",
    "commonName": "Giant Sea Bass",
    "spanishName": "Mero Gigante / Pez Negro",
    "scientificName": "Stereolepis gigas",
    "category": "Inshore",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round (protected)",
    "marquee": true,
    "baits": [
      "incidental on live mackerel/squid (released)"
    ],
    "lures": [
      "incidental on iron/swimbaits (released)"
    ],
    "technique": "Fully protected, not legally targeted. Occasionally hooked incidentally on live bait or iron near kelp reefs and must be released. A 500 to 600+ lb kelp-forest giant; strict catch-and-release.",
    "notes": "Fully protected C&R. Pairs with gulf-grouper as a protected entry.",
    "img": "/site/img/species/giant-sea-bass.jpg"
  },
  {
    "key": "vermilion-rockfish",
    "commonName": "Vermilion Rockfish",
    "spanishName": "Rocote Bermellón",
    "scientificName": "Sebastes miniatus",
    "category": "Rockfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round (deep structure)",
    "marquee": true,
    "baits": [
      "cut squid",
      "cut mackerel/strip bait",
      "shrimp"
    ],
    "lures": [
      "shrimp/scampi flies (gangion)",
      "leadhead swimbaits",
      "diamond/metal jigs",
      "double-dropper bottom rigs"
    ],
    "technique": "Drop a multi-hook dropper-loop / shrimp-fly gangion with a heavy sinker to deep rocky structure (often 200 to 600 ft) and bounce the bottom; bring up multiples. The classic deep-water red rockcod.",
    "notes": "Gallery hero species. Deep bottom-fishing on gangion rigs.",
    "img": "/site/img/species/vermilion-rockfish.jpg"
  },
  {
    "key": "bocaccio",
    "commonName": "Bocaccio",
    "spanishName": "Rocote Bocaccio",
    "scientificName": "Sebastes paucispinis",
    "category": "Rockfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round (deep structure)",
    "marquee": false,
    "baits": [
      "cut squid",
      "cut bait/strip",
      "shrimp"
    ],
    "lures": [
      "shrimp/scampi flies (gangion)",
      "leadhead swimbaits",
      "diamond jigs",
      "double-dropper bottom rigs"
    ],
    "technique": "Deep-drop dropper-loop/shrimp-fly gangions or swimbaits to deep reef and mud-rock edges; a big-mouthed deep-water rockfish caught in the rockfish complex.",
    "notes": "Deep rockfish-complex bottom fish.",
    "img": "/site/img/species/bocaccio.jpg"
  },
  {
    "key": "chilipepper",
    "commonName": "Chilipepper Rockfish",
    "spanishName": "Rocote Chilipepper",
    "scientificName": "Sebastes goodei",
    "category": "Rockfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round (mid-water)",
    "marquee": false,
    "baits": [
      "cut squid",
      "cut bait/strip"
    ],
    "lures": [
      "shrimp/scampi flies (gangion)",
      "small diamond jigs",
      "double-dropper bottom rigs"
    ],
    "technique": "Drop a shrimp-fly gangion or bait rig to mid-water and deep structure; a pink-red schooling rockfish often caught in numbers on the same drops as vermilion and bocaccio.",
    "notes": "Mid-water/deep schooling rockfish on gangions.",
    "img": "/site/img/species/chilipepper.jpg"
  },
  {
    "key": "canary-rockfish",
    "commonName": "Canary Rockfish",
    "spanishName": "Rocote Canario",
    "scientificName": "Sebastes pinniger",
    "category": "Rockfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Seasonal (rocky reef)",
    "marquee": false,
    "baits": [
      "cut squid",
      "cut bait/strip",
      "shrimp"
    ],
    "lures": [
      "shrimp/scampi flies (gangion)",
      "leadhead swimbaits",
      "diamond jigs",
      "double-dropper bottom rigs"
    ],
    "technique": "Bottom-fish dropper-loop/shrimp-fly rigs over deep rocky reef; a bright orange-yellow rockfish taken in the rockfish complex on north-Pacific structure.",
    "notes": "Deep rocky-reef bottom fish.",
    "img": "/site/img/species/canary-rockfish.jpg"
  },
  {
    "key": "copper-rockfish",
    "commonName": "Copper Rockfish",
    "spanishName": "Rocote Cobrizo",
    "scientificName": "Sebastes caurinus",
    "category": "Rockfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round (kelp & rocks)",
    "marquee": false,
    "baits": [
      "cut squid",
      "cut bait/strip",
      "shrimp",
      "live sardina"
    ],
    "lures": [
      "leadhead swimbaits / plastics",
      "shrimp flies (gangion)",
      "small jigs"
    ],
    "technique": "Fish bait or swimbaits near kelp-bed and rocky-reef bottom in moderate depth; a copper-brown mottled reef rockfish caught shallower than the deep-water reds.",
    "notes": "Kelp-and-rock rockfish; takes swimbaits shallower.",
    "img": "/site/img/species/copper-rockfish.jpg"
  },
  {
    "key": "bank-rockfish",
    "commonName": "Bank Rockfish",
    "spanishName": "Rocote de Banco",
    "scientificName": "Sebastes rufus",
    "category": "Rockfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round",
    "marquee": false,
    "baits": [
      "cut squid",
      "cut bait/strip",
      "shrimp"
    ],
    "lures": [
      "shrimp flies (gangion)",
      "deep-drop dropper-loop rigs"
    ],
    "technique": "Deep-drop shrimp-fly gangions and bait rigs to offshore banks and high-relief rock; an orange, black-flecked rockfish taken in the deep rockfish complex. Bring a heavy sinker for the depth.",
    "notes": "Deep offshore-bank rockfish (Sebastes rufus), orange with black speckling. Gangion bottom fish.",
    "img": "/site/img/species/bank-rockfish.jpg"
  },
  {
    "key": "widow-rockfish",
    "commonName": "Widow Rockfish",
    "spanishName": "Rocote Viuda",
    "scientificName": "Sebastes entomelas",
    "category": "Rockfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round",
    "marquee": false,
    "baits": [
      "cut squid",
      "cut bait/strip",
      "shrimp"
    ],
    "lures": [
      "shrimp flies (gangion)",
      "small jigs",
      "deep-drop dropper-loop rigs"
    ],
    "technique": "Work shrimp-fly gangions and small jigs through mid-water and over deep reef where they school, often well up off the bottom; a dark brassy schooling rockfish caught in numbers in the complex.",
    "notes": "Schooling mid-water rockfish (Sebastes entomelas), dark brassy-brown. Often suspends off the bottom.",
    "img": "/site/img/species/widow-rockfish.jpg"
  },
  {
    "key": "brown-rockfish",
    "commonName": "Brown Rockfish",
    "spanishName": "Rocote Café",
    "scientificName": "Sebastes auriculatus",
    "category": "Rockfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round (kelp & rocks)",
    "marquee": false,
    "baits": [
      "cut squid",
      "cut bait/strip",
      "shrimp",
      "live sardina"
    ],
    "lures": [
      "leadhead swimbaits / plastics",
      "shrimp flies (gangion)",
      "small jigs"
    ],
    "technique": "Fish bait or swimbaits on rocky and kelp-bed bottom in shallow to moderate depth, including bays and jetties; a tan-brown mottled rockfish with a dark gill-cover blotch, caught shallower than the deep reds.",
    "notes": "Shallow kelp/bay rockfish (Sebastes auriculatus) with a dark spot on the gill cover.",
    "img": "/site/img/species/brown-rockfish.jpg"
  },
  {
    "key": "gopher-rockfish",
    "commonName": "Gopher Rockfish",
    "spanishName": "Rocote Gopher",
    "scientificName": "Sebastes carnatus",
    "category": "Rockfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round (kelp & rocks)",
    "marquee": false,
    "baits": [
      "cut squid",
      "cut bait/strip",
      "shrimp",
      "live sardina"
    ],
    "lures": [
      "leadhead swimbaits / plastics",
      "shrimp flies (gangion)",
      "small jigs"
    ],
    "technique": "Drop bait or small swimbaits tight to shallow high-relief rock and kelp; a stocky brown-and-pink mottled rockfish that holds close to structure. Quick lift to keep it out of the rocks.",
    "notes": "Shallow-reef rockfish (Sebastes carnatus), brown with pink/white mottling. Tight-to-structure fish.",
    "img": "/site/img/species/gopher-rockfish.jpg"
  },
  {
    "key": "blue-rockfish",
    "commonName": "Blue Rockfish",
    "spanishName": "Rocote Azul",
    "scientificName": "Sebastes mystinus",
    "category": "Rockfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round (kelp beds)",
    "marquee": false,
    "baits": [
      "cut squid",
      "cut bait/strip",
      "live sardina"
    ],
    "lures": [
      "shrimp flies (gangion)",
      "small leadhead swimbaits",
      "small jigs"
    ],
    "technique": "Work shrimp-fly rigs and small jigs/swimbaits up off the bottom around kelp beds and rocky structure; a dark blue-grey schooling kelp rockfish that often suspends above the reef.",
    "notes": "Suspending kelp-bed rockfish on shrimp flies/small jigs.",
    "img": "/site/img/species/blue-rockfish.jpg"
  },
  {
    "key": "olive-rockfish",
    "commonName": "Olive Rockfish",
    "spanishName": "Rocote Olivo",
    "scientificName": "Sebastes serranoides",
    "category": "Rockfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round (kelp beds)",
    "marquee": false,
    "baits": [
      "cut squid",
      "cut bait/strip",
      "live sardina"
    ],
    "lures": [
      "small leadhead swimbaits",
      "shrimp flies (gangion)",
      "small jigs"
    ],
    "technique": "Cast or drop small swimbaits and flies around kelp edges and rocky reef where they hold up off the bottom; an olive-green, pale-blotched rockfish often mistaken for a small yellowtail. Kelp-and-rock light-tackle fish.",
    "notes": "Kelp-bed rockfish (Sebastes serranoides), olive with pale spots. Often confused with yellowtail.",
    "img": "/site/img/species/olive-rockfish.jpg"
  },
  {
    "key": "black-rockfish",
    "commonName": "Black Rockfish",
    "spanishName": "Rocote Negro",
    "scientificName": "Sebastes melanops",
    "category": "Rockfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round",
    "marquee": false,
    "baits": [
      "cut squid",
      "cut bait/strip",
      "live sardina"
    ],
    "lures": [
      "shrimp flies (gangion)",
      "small leadhead swimbaits",
      "surface iron / small jigs"
    ],
    "technique": "Work flies, swimbaits and small iron from the bottom up to mid-water around reefs and kelp where they school, sometimes right at the surface; a dark, hard-fighting schooling rockfish caught in numbers. Cold-water northern-Pacific reef fish.",
    "notes": "Schooling black-grey rockfish (Sebastes melanops). Often suspends high or busts bait on top.",
    "img": "/site/img/species/black-rockfish.jpg"
  },
  {
    "key": "treefish",
    "commonName": "Treefish",
    "spanishName": "Rocote Catalina",
    "scientificName": "Sebastes serriceps",
    "category": "Rockfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round (rocks & reef)",
    "marquee": false,
    "baits": [
      "cut squid",
      "shrimp",
      "cut bait/strip"
    ],
    "lures": [
      "small leadhead jigs (bait-tipped)",
      "dropper-loop bottom rigs"
    ],
    "technique": "Drop small baits tight into rocky crevices, ledges and reef holes where they hold close to cover; a boldly black-barred yellow rockfish with pink lips. A solitary structure-hugger, lift fast to clear the rocks.",
    "notes": "Reef-crevice rockfish (Sebastes serriceps): yellow body, black bars, pink lips. Tight-to-structure fish.",
    "img": "/site/img/species/treefish.jpg"
  },
  {
    "key": "flag-rockfish",
    "commonName": "Flag Rockfish",
    "spanishName": "Rocote Bandera",
    "scientificName": "Sebastes rubrivinctus",
    "category": "Rockfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round",
    "marquee": false,
    "baits": [
      "cut squid",
      "cut bait/strip",
      "shrimp"
    ],
    "lures": [
      "shrimp flies (gangion)",
      "deep-drop dropper-loop rigs"
    ],
    "technique": "Deep-drop shrimp-fly gangions and bait rigs to deep high-relief rock and pinnacles; a striking white-and-red banded ('flag') rockfish caught in the deep complex. Heavy sinker for the depth.",
    "notes": "Deep rocky-reef rockfish (Sebastes rubrivinctus), white with bold red bars. Gangion bottom fish.",
    "img": "/site/img/species/flag-rockfish.jpg"
  },
  {
    "key": "greenblotched-rockfish",
    "commonName": "Greenblotched Rockfish",
    "spanishName": "Rocote Manchas Verdes",
    "scientificName": "Sebastes rosenblatti",
    "category": "Rockfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round",
    "marquee": false,
    "baits": [
      "cut squid",
      "cut bait/strip",
      "shrimp"
    ],
    "lures": [
      "shrimp flies (gangion)",
      "deep-drop dropper-loop rigs"
    ],
    "technique": "Deep-drop shrimp-fly gangions and bait rigs to deep high-relief rock and mud-rock edges; a pink rockfish marbled with green blotches, caught in the deep complex. Heavy sinker for the depth.",
    "notes": "Deep-water rockfish (Sebastes rosenblatti), pink with green vermiculation. Gangion bottom fish.",
    "img": "/site/img/species/greenblotched-rockfish.jpg"
  },
  {
    "key": "rosethorn-rockfish",
    "commonName": "Rosethorn Rockfish",
    "spanishName": "Rocote Espina Rosa",
    "scientificName": "Sebastes helvomaculatus",
    "category": "Rockfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round",
    "marquee": false,
    "baits": [
      "cut squid",
      "cut bait/strip",
      "shrimp"
    ],
    "lures": [
      "shrimp flies (gangion)",
      "deep-drop dropper-loop rigs"
    ],
    "technique": "Deep-drop shrimp-fly gangions and bait rigs to deep rocky reef; a small red rockfish with pale yellow saddle blotches, taken in the deep complex. Bring weight for the depth.",
    "notes": "Small deep rockfish (Sebastes helvomaculatus), red with pale saddle patches. Gangion bottom fish.",
    "img": "/site/img/species/rosethorn-rockfish.jpg"
  },
  {
    "key": "cowcod",
    "commonName": "Cowcod",
    "spanishName": "Rocote Vaca",
    "scientificName": "Sebastes levis",
    "category": "Rockfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Protected / restricted (check regs)",
    "marquee": false,
    "baits": [
      "cut squid",
      "cut bait/strip"
    ],
    "lures": [
      "shrimp flies (gangion)",
      "deep-drop dropper-loop rigs"
    ],
    "technique": "A large, deep-water rockfish of high-relief rock and pinnacles, usually taken incidentally on deep gangion drops. Heavily regulated after past overfishing, with closed areas (Cowcod Conservation Areas) and tight limits, so check current rules before keeping one.",
    "notes": "Large deep rockfish (Sebastes levis), orange-barred juveniles. RESTRICTED — Cowcod Conservation Areas and strict limits; verify regs before retaining.",
    "img": "/site/img/species/cowcod.jpg"
  },
  {
    "key": "starry-rockfish",
    "commonName": "Starry Rockfish",
    "spanishName": "Rocote Estrellado",
    "scientificName": "Sebastes constellatus",
    "category": "Rockfish",
    "coasts": [
      "Pacific"
    ],
    "season": "Year-round (deep structure)",
    "marquee": false,
    "baits": [
      "cut squid",
      "cut bait/strip",
      "shrimp"
    ],
    "lures": [
      "shrimp/scampi flies (gangion)",
      "diamond jigs",
      "double-dropper bottom rigs"
    ],
    "technique": "Deep-drop dropper-loop / shrimp-fly gangions to deep high-relief rock; a distinctively white-spotted ('starry') deep rockfish caught in the same complex as vermilion and bocaccio.",
    "notes": "In SPECIES_INFO hunt-planner block (not in species-list.json). Deep rockfish-complex bottom fish.",
    "img": "/fish/starry-rockfish.jpg"
  }
];
window.CATCH_BY_KEY = window.CATCH.reduce(function (acc, s) { acc[s.key] = s; return acc; }, {});
