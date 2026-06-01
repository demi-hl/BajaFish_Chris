// =============================================
// Baja Fish, Sample Data
// Zones split: Pacific Side vs Sea of Cortez
// =============================================

const ZONES = {
  // --- PACIFIC SIDE (North → South) ---
  'popotla':           { name: 'Popotla',                   coast: 'Pacific',        lat: 32.38, lng: -117.07 },
  'ensenada':          { name: 'Ensenada',                  coast: 'Pacific',        lat: 31.87, lng: -116.60, launch: 'Charters depart the downtown Sportfishing Pier (Andador Turístico), not Marina Coral; pangas check in ~5:30am for the bait barges. Marina Coral has a 40 ft concrete ramp (~$30) for trailer boats. Sergio\'s Sportfishing dominates the fleet.' },
  'erendira':          { name: 'Eréndira',                  coast: 'Pacific',        lat: 31.28, lng: -116.40 },
  'colonet':           { name: 'Colonet',                   coast: 'Pacific',        lat: 31.05, lng: -116.27 },
  'san-quintin':       { name: 'San Quintín',               coast: 'Pacific',        lat: 30.48, lng: -115.95, launch: 'Concrete public ramp in front of the Old Mill Hotel (medium slope, most low tides, no fee) plus an on-site panga fleet at Don Eddie\'s Landing. Several operators along the Old Mill road rent pangas. Inner-bay launch.' },
  'el-rosario':        { name: 'El Rosario',                coast: 'Pacific',        lat: 30.06, lng: -115.73 },
  'punta-baja':        { name: 'Punta Baja',                coast: 'Pacific',        lat: 29.95, lng: -115.80 },
  'isla-cedros':       { name: 'Isla Cedros',               coast: 'Pacific',        lat: 28.17, lng: -115.19, launch: 'Fly-in only (Biosphere Reserve), Cessna Caravan from Tijuana/Ensenada to the island; 27 to 28 ft super-pangas from Cedros village. Cedros Outdoor Adventures runs all-inclusive lodge packages.' },
  'guerrero-negro':    { name: 'Guerrero Negro',            coast: 'Pacific',        lat: 27.97, lng: -114.06 },
  'punta-eugenia':     { name: 'Punta Eugenia',             coast: 'Pacific',        lat: 27.84, lng: -115.08 },
  'bahia-tortugas':    { name: 'Bahía Tortugas',            coast: 'Pacific',        lat: 27.68, lng: -114.90 },
  'bahia-asuncion':    { name: 'Bahía Asunción',            coast: 'Pacific',        lat: 27.14, lng: -114.30 },
  'la-bocana':         { name: 'La Bocana',                 coast: 'Pacific',        lat: 26.80, lng: -113.60 },
  'punta-abreojos':    { name: 'Punta Abreojos',            coast: 'Pacific',        lat: 26.71, lng: -113.56 },
  'san-juanico':       { name: 'San Juanico (Scorpion Bay)', coast: 'Pacific',       lat: 26.23, lng: -112.48 },
  'lopez-mateos':      { name: 'Puerto López Mateos',       coast: 'Pacific',        lat: 25.19, lng: -112.12 },
  'puerto-san-carlos': { name: 'Puerto San Carlos',         coast: 'Pacific',        lat: 24.79, lng: -112.11, launch: 'Concrete public ramp on the SE side of town (only extends a few feet at low tide); short panga ride to the mangrove esteros. Base here and panga to the outer beaches. Mag Bay Outfitters and local cooperatives run pangas.' },
  'mag-bay':           { name: 'Mag Bay (Bahía Magdalena)',  coast: 'Pacific',       lat: 24.63, lng: -112.11 },
  'todos-santos':      { name: 'Todos Santos',              coast: 'Pacific',        lat: 23.45, lng: -110.22 },
  'punta-lobos':       { name: 'Punta Lobos',               coast: 'Pacific',        lat: 23.38, lng: -110.20 },
  'pescadero':         { name: 'El Pescadero',              coast: 'Pacific',        lat: 23.35, lng: -110.18 },
  // --- SEA OF CORTEZ (North → South) ---
  'el-golfo':          { name: 'El Golfo de Santa Clara',   coast: 'Sea of Cortez',  lat: 31.68, lng: -114.49 },
  'san-felipe':        { name: 'San Felipe',                coast: 'Sea of Cortez',  lat: 31.03, lng: -114.84, launch: 'Commercial Marina ramp (steep, no fee, tide-restricted) and the El Cortez Hotel ramp (~$5). Signature here is the panga mothership: the 107 ft Tony Reyes carries nine 22 ft pangas south to the Midriff Islands, departing Sunday late morning.' },
  'puertecitos':       { name: 'Puertecitos',               coast: 'Sea of Cortez',  lat: 30.35, lng: -114.64 },
  'gonzaga-bay':       { name: 'Gonzaga Bay',               coast: 'Sea of Cortez',  lat: 29.81, lng: -114.40, launch: 'Beach launch off Alfonsina\'s on the south side of the bay (rooms, restaurant, pangas, airstrip); Papa Fernández on the north end has a makeshift hardened-sand/stone ramp. Remote, ~2 hrs south of San Felipe.' },
  'bahia-angeles':     { name: 'Bahía de los Ángeles',      coast: 'Sea of Cortez',  lat: 28.95, lng: -113.56, launch: 'Concrete ramps (~$10) at Villa Vitta (best, ~50 yds, all tides) and Guillermo\'s (best low-tide reach); free Ejido commercial ramp also available. Local pangas run fishing plus whale-shark eco-tours.' },
  'santa-rosalia':     { name: 'Santa Rosalía',             coast: 'Sea of Cortez',  lat: 27.34, lng: -112.27, launch: 'Downtown paved public ramp, usable at almost any tide by most trailer boats, no fee. San Lucas Cove south of town is a dirt ramp (top-half tides only).' },
  'punta-chivato':     { name: 'Punta Chivato',             coast: 'Sea of Cortez',  lat: 27.07, lng: -111.95 },
  'mulege':            { name: 'Mulegé',                    coast: 'Sea of Cortez',  lat: 26.88, lng: -111.98, launch: 'Hotel Serenidad ramp, paved, good slope but narrow, no fee. Book through the hotel; local pangueros launch here.' },
  'bahia-concepcion':  { name: 'Bahía Concepción',          coast: 'Sea of Cortez',  lat: 26.75, lng: -111.85 },
  'loreto':            { name: 'Loreto',                    coast: 'Sea of Cortez',  lat: 26.01, lng: -111.35, launch: 'Loreto Municipal Ramp (paved, protected artificial harbor, no fees currently). Charters meet at the Dársena next to the malecón and depart ~7am. Reel Time Fishing, Wild Loreto and Rubio Sportfishing run pangas.' },
  'juncalito':         { name: 'Juncalito',                 coast: 'Sea of Cortez',  lat: 25.85, lng: -111.33 },
  'puerto-escondido':  { name: 'Puerto Escondido',          coast: 'Sea of Cortez',  lat: 25.82, lng: -111.32, launch: 'Marina Puerto Escondido (~25 km south of Loreto): full marina with a two-rig-wide ramp usable by any trailer boat at any tide (~20 pesos launch / 25 pesos parking) plus a 50-ton travel lift.' },
  'agua-verde':        { name: 'Agua Verde',                coast: 'Sea of Cortez',  lat: 25.52, lng: -111.07 },
  'san-evaristo':      { name: 'San Evaristo',              coast: 'Sea of Cortez',  lat: 24.92, lng: -110.68 },
  'la-paz':            { name: 'La Paz',                    coast: 'Sea of Cortez',  lat: 24.14, lng: -110.31, launch: 'Marina CostaBaja (Carr. a Pichilingue km 7.5, ~250 boats) is the best jump-off for Espíritu Santo and offshore; downtown has the Marina de La Paz ramp (any tide, ~50 pesos) and the Muelle Fiscal for panga/island tours. Tailhunter International on the malecón.' },
  'la-ventana':        { name: 'La Ventana',                coast: 'Sea of Cortez',  lat: 24.05, lng: -109.99, launch: '~45 min south of La Paz. Boats pick up off the beach in front of the hotels at sunrise, or a 20-min shuttle to the Bahía de los Muertos (Ensenada de Muertos) boat launch. ~22 ft pangas through Palapas Ventana, Captain Kirk\'s and fly outfits.' },
  'bahia-muertos':     { name: 'Bahía de los Muertos',      coast: 'Sea of Cortez',  lat: 23.95, lng: -109.82 },
  'punta-pescadero':   { name: 'Punta Pescadero',           coast: 'Sea of Cortez',  lat: 23.78, lng: -109.76 },
  'los-barriles':      { name: 'Los Barriles',              coast: 'Sea of Cortez',  lat: 23.55, lng: -109.70, launch: 'No marina or ramp, boats are launched over the open beach (tractor-assisted at the resorts). Van Wormer Resorts (Palmas de Cortez, Playa del Sol, Punta Colorada) is THE East Cape hub, fielding a 50+ boat fleet from 23 ft super pangas to 32 ft cruisers.' },
  'la-ribera':         { name: 'La Ribera',                 coast: 'Sea of Cortez',  lat: 23.55, lng: -109.58, launch: 'Open-beach launch at La Ribera and the Buena Vista resort beach (no marina), ~24 km from Cabo Pulmo. The Castro-family fleet runs 22 ft center-console pangas; short run to deep water outside Cabo Pulmo National Park (no fishing inside the park).' },
  'east-cape':         { name: 'East Cape',                 coast: 'Sea of Cortez',  lat: 23.38, lng: -109.43 },
  'san-jose-del-cabo': { name: 'San José del Cabo',         coast: 'Sea of Cortez',  lat: 23.06, lng: -109.70, launch: 'Puerto Los Cabos Marina at La Playita (NE of town). Pangas depart ~6:10am for 6-hr trips; the Gordo Banks are only 30 to 45 min out, ~1.5 hrs closer than from Cabo. Gordo Banks Pangas, Fiesta Sportfishing and others run the fleet.' },
  'cabo':              { name: 'Cabo San Lucas',            coast: 'Both',           lat: 22.89, lng: -109.91, launch: 'Cabo San Lucas Marina is the departure hub, with boats spread across the docks (Marina Fundadores, Plaza Embarcadero). Cruisers run ~7am to 3pm, pangas from ~6am. Gaviota, Solmar and Fiesta fleets plus dozens of independents, confirm your meeting dock on booking.' },
};

// ---- NEARBY LODGING (hotels, fish camps, lodges fishermen use) ----
const LODGING = {
  // === PACIFIC SIDE ===
  'popotla': [
    { name: 'Rosarito Beach Hotel', type: 'Hotel', price: '$$', note: '10 min north, classic Baja hotel with ocean views' },
    { name: 'Hotel Festival Plaza', type: 'Hotel', price: '$$', note: 'Rosarito, walking distance to malecon' },
  ],
  'ensenada': [
    { name: 'Hotel Coral & Marina', type: 'Hotel', price: '$$$', note: 'Sportfishing pier, marina, walking distance to panga fleet' },
    { name: 'Estero Beach Hotel', type: 'Resort', price: '$$$', note: 'Beachfront south of town, boat launch nearby' },
    { name: 'Corona Hotel & Spa', type: 'Hotel', price: '$$', note: 'Downtown on the malecon, close to fish market' },
    { name: 'Quintas Papagayo', type: 'Hotel', price: '$$', note: 'Near Hussong\'s, budget-friendly for anglers' },
  ],
  'erendira': [
    { name: 'Coyote Cal\'s', type: 'Fish Camp', price: '$', note: 'Right on the beach, panga launches steps away' },
    { name: 'Campo Eréndira', type: 'Fish Camp', price: '$', note: 'Basic cabañas, camping, close to pangas' },
  ],
  'colonet': [
    { name: 'Colonet Fish Camp', type: 'Fish Camp', price: '$', note: 'Basic accommodations right at the launch' },
    { name: 'Roadside Motels (Hwy 1)', type: 'Motel', price: '$', note: 'Simple rooms along the highway, 15 min to coast' },
  ],
  'san-quintin': [
    { name: 'Old Mill Hotel', type: 'Hotel', price: '$$', note: 'The classic SQ fishing lodge, generations of anglers' },
    { name: 'Don Eddie\'s Landing', type: 'Fish Camp', price: '$', note: 'Panga fleet on-site, boat launch, RV spaces' },
    { name: 'Hotel Jardines', type: 'Hotel', price: '$$', note: 'Clean rooms near the bay, popular with fishing groups' },
    { name: 'Rancho Cielito Lindo', type: 'Fish Camp', price: '$', note: 'On the inner bay, pangas available, family-run' },
  ],
  'el-rosario': [
    { name: 'Baja Cactus Motel', type: 'Motel', price: '$', note: 'Clean rooms at the highway junction, Mama Espinoza\'s next door' },
    { name: 'Motel Sinahi', type: 'Motel', price: '$', note: 'Basic but functional, the last fuel stop heading south' },
  ],
  'punta-baja': [
    { name: 'Punta Baja Fish Camp', type: 'Fish Camp', price: '$', note: 'Bring your own supplies, basic palapa shelters, camping on the beach' },
  ],
  'isla-cedros': [
    { name: 'Cedros Outdoor Adventures Lodge', type: 'Lodge', price: '$$$', note: 'All-inclusive fishing lodge, fly-in packages from Guerrero Negro' },
    { name: 'Casa de Huéspedes', type: 'Guesthouse', price: '$', note: 'Basic rooms in the village, arrange through the cooperative' },
  ],
  'guerrero-negro': [
    { name: 'Hotel Malarrimo', type: 'Hotel', price: '$$', note: 'The anglers\' base, restaurant, bar, whale watching & fishing trips arranged' },
    { name: 'Hotel Don Miguelito', type: 'Hotel', price: '$', note: 'Simple, clean, affordable. Good base for Isla Cedros trips.' },
  ],
  'punta-eugenia': [
    { name: 'Village homestay', type: 'Homestay', price: '$', note: 'Ask at the cooperative, some families rent rooms. Bring supplies.' },
  ],
  'bahia-tortugas': [
    { name: 'Hotel Vera Cruz', type: 'Hotel', price: '$', note: 'Basic hotel in town, arrange pangas through the cooperative' },
    { name: 'Bahía Tortugas Sportfishing Lodge', type: 'Lodge', price: '$$', note: 'Simple lodge with panga packages, meals included' },
  ],
  'bahia-asuncion': [
    { name: 'Juan\'s Fish Camp', type: 'Fish Camp', price: '$', note: 'Basic cabañas right on the bay, pangas arranged' },
    { name: 'Local homestays', type: 'Homestay', price: '$', note: 'Ask the cooperative, several families rent rooms to fishermen' },
  ],
  'la-bocana': [
    { name: 'La Bocana Fish Camp', type: 'Fish Camp', price: '$', note: 'Very basic, camping and palapas. Bring everything.' },
  ],
  'punta-abreojos': [
    { name: 'Campo René', type: 'Fish Camp', price: '$', note: 'Cabañas on the point, panga fishing arranged, very remote' },
    { name: 'Local guesthouses', type: 'Homestay', price: '$', note: 'Several families in the village rent rooms. Call ahead.' },
  ],
  'san-juanico': [
    { name: 'Scorpion Bay Hotel', type: 'Hotel', price: '$$', note: 'Right in the village, surf & fishing packages available' },
    { name: 'Don Chon\'s Camping', type: 'Camp', price: '$', note: 'Beachfront camping, pangas launched from the same beach' },
    { name: 'Casa Scorpion', type: 'Rental', price: '$$', note: 'Vacation rental overlooking the bay, kitchen, close to pangas' },
  ],
  'lopez-mateos': [
    { name: 'Hotel Posada Bahía', type: 'Hotel', price: '$', note: 'Simple rooms, walking distance to panga launches and whale watching dock' },
    { name: 'RV parks on the waterfront', type: 'RV Park', price: '$', note: 'Several spots with hookups along the channel' },
  ],
  'puerto-san-carlos': [
    { name: 'Hotel Alcatraz', type: 'Hotel', price: '$$', note: 'Best hotel in town, arranges panga trips, waterfront location' },
    { name: 'Hotel Palmar', type: 'Hotel', price: '$', note: 'Basic but clean, close to the commercial fishing dock' },
    { name: 'Mag Bay Lodge', type: 'Lodge', price: '$$$', note: 'Fishing lodge with guided panga trips, meals included' },
  ],
  'mag-bay': [
    { name: 'Mag Bay Outfitters', type: 'Lodge', price: '$$$', note: 'Full-service fly fishing & conventional tackle lodge' },
    { name: 'Puerto San Carlos hotels', type: 'Hotel', price: '$$', note: 'Stay in Puerto San Carlos and panga to the outer beaches' },
  ],
  'todos-santos': [
    { name: 'Hotel California', type: 'Hotel', price: '$$$', note: 'The iconic Todos Santos hotel, boutique, central location' },
    { name: 'Guaycura Boutique Hotel', type: 'Hotel', price: '$$$', note: 'Upscale, rooftop pool, 5 min to Punta Lobos pangas' },
    { name: 'Todos Santos Inn', type: 'Inn', price: '$$', note: 'Charming colonial building, arrange fishing through the desk' },
  ],
  'punta-lobos': [
    { name: 'Pescadero Surf Hotel', type: 'Hotel', price: '$$', note: '5 min drive, arrange panga trips to launch from Punta Lobos' },
    { name: 'Cerritos Beach Inn', type: 'Hotel', price: '$$', note: 'Beachfront nearby, fishing + surf combo trips' },
  ],
  'pescadero': [
    { name: 'Rancho Pescadero', type: 'Resort', price: '$$$', note: 'Luxury beachfront, will arrange panga fishing trips' },
    { name: 'Baja Beach Oasis', type: 'Hotel', price: '$$', note: 'Mid-range, close to Cerritos Beach and panga launches' },
  ],
  // === SEA OF CORTEZ SIDE ===
  'el-golfo': [
    { name: 'Hotel Las Palmas', type: 'Hotel', price: '$', note: 'Right on the malecon, walking distance to panga fleet' },
    { name: 'El Capitan Motel', type: 'Motel', price: '$', note: 'Basic rooms, popular with corvina fishermen during the run' },
  ],
  'san-felipe': [
    { name: 'El Cortez Hotel', type: 'Hotel', price: '$$', note: 'On the malecon, arranges panga trips, pool, restaurant' },
    { name: 'Hotel Las Misiones', type: 'Resort', price: '$$$', note: 'Beachfront resort, sportfishing desk on-site' },
    { name: 'Pete\'s Fish Camp', type: 'Fish Camp', price: '$', note: 'South of town, panga fleet, basic rooms, legendary spot' },
    { name: 'Kiki\'s Camp', type: 'Fish Camp', price: '$', note: 'RV & camping, pangas available, south of town' },
  ],
  'puertecitos': [
    { name: 'Puertecitos Motel', type: 'Motel', price: '$', note: 'Very basic rooms, hot springs nearby, pangas on the beach' },
    { name: 'Camping on the beach', type: 'Camp', price: '$', note: 'Bring everything, minimal services but incredible fishing' },
  ],
  'gonzaga-bay': [
    { name: 'Alfonsina\'s', type: 'Fish Camp', price: '$', note: 'The legendary Gonzaga fish camp, rooms, restaurant, pangas, airstrip. Remote but worth it.' },
    { name: 'Rancho Grande', type: 'Fish Camp', price: '$', note: 'Basic cabañas, camping, panga access, cold beer' },
  ],
  'bahia-angeles': [
    { name: 'Villa Vitta Hotel', type: 'Hotel', price: '$$', note: 'Best hotel in BOLA, beachfront, arranges panga trips' },
    { name: 'Guillermo\'s Hotel', type: 'Hotel', price: '$$', note: 'Right on the bay, restaurant, sportfishing pangas' },
    { name: 'Costa del Sol', type: 'Hotel', price: '$', note: 'Budget option on the water, walking distance to pangas' },
    { name: 'Larry\'s Landing', type: 'Fish Camp', price: '$', note: 'RV & camping, panga launches, basic supplies' },
  ],
  'santa-rosalia': [
    { name: 'Hotel Francés', type: 'Hotel', price: '$$', note: 'Historic French colonial hotel, the best in town' },
    { name: 'Hotel del Real', type: 'Hotel', price: '$', note: 'Basic rooms downtown, close to the commercial fishing port' },
    { name: 'El Morro Hotel', type: 'Hotel', price: '$$', note: 'South of town on the coast, quiet, near panga launches' },
  ],
  'punta-chivato': [
    { name: 'Punta Chivato houses', type: 'Rental', price: '$$', note: 'Several vacation rentals on the peninsula, arrange pangas locally' },
    { name: 'Beach camping', type: 'Camp', price: '$', note: 'Camp on the beach, pangas launched from the same shore' },
  ],
  'mulege': [
    { name: 'Hotel Serenidad', type: 'Hotel', price: '$$', note: 'Classic Mulegé hotel, pool, pig roast Saturdays, arranges fishing' },
    { name: 'Hotel Hacienda', type: 'Hotel', price: '$$', note: 'On the river estuary, charming colonial style' },
    { name: 'Orchard RV Park', type: 'RV Park', price: '$', note: 'Under the date palms by the river, close to panga launches' },
  ],
  'bahia-concepcion': [
    { name: 'Playa Santispac palapas', type: 'Camp', price: '$', note: 'Beachfront camping on the bay, pangas launched from the beach' },
    { name: 'Posada Concepción', type: 'Hotel', price: '$$', note: 'Small hotel on the bay, arrange panga fishing' },
    { name: 'El Coyote Beach Camp', type: 'Camp', price: '$', note: 'Camping right on the turquoise water, pangas available' },
    { name: 'Playa Buenaventura Hotel', type: 'Hotel', price: '$$', note: 'South end of the bay, restaurant, panga trips arranged' },
  ],
  'loreto': [
    { name: 'Hotel La Misión', type: 'Hotel', price: '$$', note: 'Downtown on the malecon, walking distance to sportfishing pangas' },
    { name: 'Posada de las Flores', type: 'Hotel', price: '$$$', note: 'Boutique hotel, rooftop bar overlooking the Sea of Cortez' },
    { name: 'Coco Cabañas', type: 'Cabañas', price: '$$', note: 'Cute cabañas near the beach, great value for fishing trips' },
    { name: 'Villa del Palmar', type: 'Resort', price: '$$$', note: 'Luxury resort south of town at Nopoló, fishing packages available' },
  ],
  'juncalito': [
    { name: 'Beach camping', type: 'Camp', price: '$', note: 'Camp right on the cove next to the pangas, no services, bring everything' },
    { name: 'Stay in Loreto (30 min)', type: 'Hotel', price: '$$', note: 'Loreto hotels are 30 min north, day trip to Juncalito pangas' },
  ],
  'puerto-escondido': [
    { name: 'Tripui RV Park', type: 'RV Park', price: '$$', note: 'Full hookups, pool, restaurant, close to marina and pangas' },
    { name: 'Puerto Escondido Marina', type: 'Marina', price: '$$', note: 'Boat slips and basic services, panga launches nearby' },
  ],
  'agua-verde': [
    { name: 'Beach camping', type: 'Camp', price: '$', note: 'Camping on the beach, the ONLY option. Bring all supplies. 60 km dirt road.' },
    { name: 'Local homestay', type: 'Homestay', price: '$', note: 'Some families offer rooms, ask at the fishing cooperative' },
  ],
  'san-evaristo': [
    { name: 'Beach camping', type: 'Camp', price: '$', note: 'Camp on the bay, bring everything. No services, no cell.' },
    { name: 'Village homestay', type: 'Homestay', price: '$', note: 'Ask the cooperative, a few families rent spare rooms' },
  ],
  'la-paz': [
    { name: 'Hotel Perla', type: 'Hotel', price: '$$', note: 'On the malecon, the classic La Paz hotel, close to pangas at Pichilingue' },
    { name: 'Costa Baja Resort', type: 'Resort', price: '$$$', note: 'Luxury resort with marina, fishing packages available' },
    { name: 'CostaBaja Marina', type: 'Marina', price: '$$$', note: 'Full marina with sportfishing fleet and panga charters' },
    { name: 'Pension California', type: 'Hostel', price: '$', note: 'Budget option downtown, backpacker vibe, arrange pangas at the malecon' },
  ],
  'la-ventana': [
    { name: 'Ventana Bay Resort', type: 'Resort', price: '$$$', note: 'Beachfront resort, fishing & kiteboarding packages' },
    { name: 'Palapas Ventana', type: 'Hotel', price: '$$', note: 'Right on the beach, walking distance to panga launches' },
    { name: 'Captain Kirk\'s', type: 'Hotel', price: '$$', note: 'Popular with anglers and kiteboarders, on the main beach' },
  ],
  'bahia-muertos': [
    { name: 'Rancho Las Cruces', type: 'Lodge', price: '$$$', note: 'Historic fishing lodge on the bay, panga trips included' },
    { name: 'Beach camping', type: 'Camp', price: '$', note: 'Camp on the bay shore, pangas arranged with local fishermen' },
  ],
  'punta-pescadero': [
    { name: 'Hotel Punta Pescadero', type: 'Hotel', price: '$$$', note: 'Boutique hotel on the point, fishing packages with pangas' },
    { name: 'Nearby Los Barriles hotels', type: 'Hotel', price: '$$', note: '20 min south to Los Barriles for more options' },
  ],
  'los-barriles': [
    { name: 'Hotel Palmas de Cortez', type: 'Resort', price: '$$$', note: 'THE East Cape fishing resort, panga fleet on-site, legendary bar' },
    { name: 'Van Wormer\'s Resorts', type: 'Resort', price: '$$$', note: 'Two properties (Playa del Sol, Spa Buena Vista), pangas on the beach' },
    { name: 'Hotel Los Barriles', type: 'Hotel', price: '$$', note: 'Mid-range in town, close to beach panga launches' },
    { name: 'East Cape RV Resort', type: 'RV Park', price: '$', note: 'Beachfront, RV & tent sites, pangas launch from the same beach' },
  ],
  'la-ribera': [
    { name: 'Hotel Buena Vista Beach Resort', type: 'Resort', price: '$$$', note: 'Full-service resort, panga fleet, pools, all-inclusive packages' },
    { name: 'Rancho Leonero', type: 'Lodge', price: '$$$', note: 'Remote fishing lodge on the coast, panga packages, meals included' },
    { name: 'Local guesthouses', type: 'Guesthouse', price: '$', note: 'Several simple rooms for rent in the village, ask around' },
  ],
  'east-cape': [
    { name: 'Hotels Buena Vista & Rancho Leonero', type: 'Resort', price: '$$$', note: 'Full-service fishing resorts with panga fleets (see La Ribera)' },
    { name: 'Cabo Pulmo Beach Resort', type: 'Resort', price: '$$', note: 'Eco-lodge near the marine park, diving + limited fishing' },
    { name: 'Airbnb / VRBO rentals', type: 'Rental', price: '$$', note: 'Growing number of vacation rentals along the East Cape road' },
  ],
  'san-jose-del-cabo': [
    { name: 'El Ganzo', type: 'Hotel', price: '$$$', note: 'Artsy boutique hotel near La Playita, arrange panga trips' },
    { name: 'La Playita Inn', type: 'Inn', price: '$$', note: 'Right at the old fishing beach, walking distance to pangas' },
    { name: 'Holiday Inn SJD', type: 'Hotel', price: '$$', note: 'Near the estuary, affordable, close to La Playita launches' },
  ],
  'cabo': [
    { name: 'Hotel Mar de Cortez', type: 'Hotel', price: '$$', note: 'Downtown, budget-friendly, walking distance to marina pangas' },
    { name: 'Marina Fiesta Resort', type: 'Resort', price: '$$$', note: 'Right on the marina, sportfishing fleet steps away' },
    { name: 'Bahia Hotel & Beach House', type: 'Hotel', price: '$$$', note: 'Medano Beach, arranges panga trips from the marina' },
    { name: 'Cabo Inn Hotel', type: 'Hotel', price: '$', note: 'Best budget option in Cabo, 10 min walk to marina pangas' },
  ],
};

// ---- RESTAURANTS & FOOD (local eats near each zone) ----
const RESTAURANTS = {
  // === PACIFIC SIDE ===
  'popotla': [
    { name: 'Tacos El Yaqui', cuisine: 'Tacos de Pescado', price: '$', note: 'Famous perrones (bacon-wrapped hotdog tacos) and fish tacos in nearby Rosarito' },
    { name: 'Mariscos Popotla', cuisine: 'Mariscos', price: '$', note: 'Beachside seafood stalls right at the Popotla fish market, pick your catch, they cook it' },
    { name: 'Puerto Nuevo Lobster Village', cuisine: 'Seafood', price: '$$', note: 'Short drive south, the original Baja lobster village with dozens of family restaurants' },
  ],
  'ensenada': [
    { name: 'La Guerrerense', cuisine: 'Mariscos', price: '$', note: 'World-famous street cart serving tostadas de erizo, ceviche, and mariscos since 1960' },
    { name: 'Muelle 3', cuisine: 'Seafood', price: '$$', note: 'Upscale seafood on the waterfront with harbor views and creative Baja Med dishes' },
    { name: 'Tacos El Fenix', cuisine: 'Tacos de Pescado', price: '$', note: 'Legendary fish and shrimp tacos near downtown, cash only, no-frills perfection' },
    { name: 'Boules Restaurant', cuisine: 'Baja Med', price: '$$$', note: 'Fine dining in the Valle de Guadalupe wine region, reserve ahead' },
  ],
  'erendira': [
    { name: 'Coyote Cal\'s Kitchen', cuisine: 'Mexican', price: '$', note: 'Simple home-cooked meals at the fish camp, fresh catch of the day' },
    { name: 'Marisquería Eréndira', cuisine: 'Mariscos', price: '$', note: 'Roadside seafood stand with ceviche and fish tacos from the morning catch' },
  ],
  'colonet': [
    { name: 'Lonchería La Parada', cuisine: 'Mexican', price: '$', note: 'Highway pit stop with hearty burritos and carne asada' },
    { name: 'Mariscos El Colonet', cuisine: 'Mariscos', price: '$', note: 'Small seafood stand near the turnoff to the coast, fresh and simple' },
  ],
  'san-quintin': [
    { name: 'Mama Espinoza\'s', cuisine: 'Mexican', price: '$', note: 'Iconic roadside restaurant in El Rosario, a must-stop for lobster burritos (short drive north)' },
    { name: 'Restaurant Old Mill', cuisine: 'Seafood', price: '$$', note: 'At the Old Mill Hotel, classic fish dinners with bay views' },
    { name: 'Jardines Baja Grill', cuisine: 'Mexican', price: '$$', note: 'Sit-down restaurant with seafood platters and cold beer after a day on the water' },
  ],
  'el-rosario': [
    { name: 'Mama Espinoza\'s', cuisine: 'Mexican', price: '$', note: 'The legendary lobster burrito stop, every Baja road tripper knows this place' },
    { name: 'Baja Cactus Restaurant', cuisine: 'Mexican', price: '$', note: 'At the motel, reliable food at the last real town before the desert' },
  ],
  'punta-baja': [
    { name: 'Comedor de la Cooperativa', cuisine: 'Mariscos', price: '$', note: 'Simple fish camp kitchen run by the local co-op, whatever was caught that morning' },
  ],
  'isla-cedros': [
    { name: 'Comedor Isleño', cuisine: 'Mariscos', price: '$', note: 'Village comedor serving lobster, abalone, and fish from the local fleet' },
    { name: 'Cedros Lodge Kitchen', cuisine: 'Seafood', price: '$$', note: 'Meals included with the fishing lodge package, fresh catch prepared daily' },
  ],
  'guerrero-negro': [
    { name: 'Restaurant Malarrimo', cuisine: 'Seafood', price: '$$', note: 'Attached to Hotel Malarrimo, known for clam soup and seafood cocktails' },
    { name: 'Tacos El Muelle', cuisine: 'Tacos de Pescado', price: '$', note: 'Excellent fish tacos near the salt flats, popular with whale watching crowds' },
    { name: 'Mario\'s Restaurant', cuisine: 'Mexican', price: '$', note: 'Local favorite for breakfast and hearty Mexican plates before heading to the lagoon' },
  ],
  'punta-eugenia': [
    { name: 'Comedor Doña María', cuisine: 'Mariscos', price: '$', note: 'Home kitchen in the village serving simple seafood plates, call ahead' },
  ],
  'bahia-tortugas': [
    { name: 'Mariscos El Puerto', cuisine: 'Mariscos', price: '$', note: 'Dockside seafood in this remote fishing village, lobster and abalone in season' },
    { name: 'Lonchería Tortuga', cuisine: 'Mexican', price: '$', note: 'Basic comedor with tacos, burritos, and cold drinks after a dusty drive' },
  ],
  'bahia-asuncion': [
    { name: 'Restaurant La Palapa', cuisine: 'Mariscos', price: '$', note: 'Palapa-roofed spot overlooking the bay, abalone and lobster from local divers' },
    { name: 'Taquería El Pueblo', cuisine: 'Street Food', price: '$', note: 'Simple tacos and tortas in the center of the village' },
  ],
  'la-bocana': [
    { name: 'Comedor La Bocana', cuisine: 'Mariscos', price: '$', note: 'Tiny fishing village kitchen, fresh fish, basic preparations, bring your own beer' },
  ],
  'punta-abreojos': [
    { name: 'Comedor de Pescadores', cuisine: 'Mariscos', price: '$', note: 'Fishermen\'s comedor at the co-op, ultra-fresh lobster and fish in season' },
  ],
  'san-juanico': [
    { name: 'Scorpion Bay Cantina', cuisine: 'Mexican', price: '$', note: 'Surfer hangout with cold beer, fish tacos, and sunset views over the point break' },
    { name: 'El Cafecito', cuisine: 'Mexican', price: '$', note: 'Coffee and breakfast burritos for early morning surf or fishing sessions' },
  ],
  'lopez-mateos': [
    { name: 'Mariscos El Camarón', cuisine: 'Mariscos', price: '$', note: 'Seafood cocktails and ceviche near the whale watching embarcadero' },
    { name: 'Restaurant Ballena Gris', cuisine: 'Mexican', price: '$', note: 'Named for the gray whales, hearty meals for whale watchers and fishermen' },
  ],
  'puerto-san-carlos': [
    { name: 'El Patio', cuisine: 'Seafood', price: '$$', note: 'Best sit-down restaurant in town, shrimp and fish plates with Mag Bay views' },
    { name: 'Mariscos Las Palmas', cuisine: 'Mariscos', price: '$', note: 'No-frills mariscos near the port, popular with commercial fishermen' },
  ],
  'mag-bay': [
    { name: 'Restaurant San Carlos', cuisine: 'Seafood', price: '$$', note: 'Seafood platters featuring local catches from Bahía Magdalena' },
    { name: 'Tacos El Faro', cuisine: 'Tacos de Pescado', price: '$', note: 'Fish tacos near the lighthouse, simple and fresh' },
  ],
  'todos-santos': [
    { name: 'Tequila\'s Sunrise', cuisine: 'Mexican', price: '$$', note: 'Colorful restaurant in the historic center with creative Mexican cuisine and margaritas' },
    { name: 'La Casita Tapas & Wine Bar', cuisine: 'Mexican', price: '$$', note: 'Intimate spot with tapas, local wine, and a charming courtyard' },
    { name: 'El Mirador Oceanview', cuisine: 'Seafood', price: '$$', note: 'Ocean-view terrace with ceviche and cocktails at sunset' },
    { name: 'Jazamango', cuisine: 'Farm-to-Table', price: '$$$', note: 'Chef Javier Plascencia\'s garden restaurant, Baja farm-to-table at its finest' },
  ],
  'punta-lobos': [
    { name: 'Palapa de los Pescadores', cuisine: 'Mariscos', price: '$', note: 'Beach palapa at the panga launch, fishermen sell and grill their catch on the spot' },
    { name: 'Los Cerritos Beach Club', cuisine: 'Seafood', price: '$$', note: 'Short drive south, beachfront restaurant with cocktails and seafood platters' },
  ],
  'pescadero': [
    { name: 'Flora Farms', cuisine: 'Farm-to-Table', price: '$$$', note: 'Iconic organic farm restaurant, wood-fired pizza, garden cocktails, a Baja culinary landmark' },
    { name: 'Baja Beans Roasting Co.', cuisine: 'Cafe', price: '$', note: 'Best coffee on the Pacific side, pastries and light bites in a garden setting' },
    { name: 'Carlito\'s Place', cuisine: 'Mexican', price: '$', note: 'Roadside spot beloved for breakfast burritos and carne asada plates' },
  ],

  // === SEA OF CORTEZ ===
  'el-golfo': [
    { name: 'Restaurant El Capitán', cuisine: 'Mariscos', price: '$', note: 'Fresh shrimp from the upper Gulf, known for caldo de camarón and ceviches' },
    { name: 'Mariscos El Delfín', cuisine: 'Mariscos', price: '$', note: 'Beachfront seafood with views of the tidal flats and dramatic desert sunsets' },
  ],
  'san-felipe': [
    { name: 'Rice & Beans', cuisine: 'Mexican', price: '$$', note: 'Malecon institution with seafood, steak, and strong margaritas overlooking the Sea of Cortez' },
    { name: 'Tacos El Poblano', cuisine: 'Tacos de Pescado', price: '$', note: 'Street-style fish and shrimp tacos near the malecon, cash only' },
    { name: 'Mariscos La Vaquita', cuisine: 'Mariscos', price: '$', note: 'No-frills seafood cocktails and aguachile, a local favorite' },
    { name: 'El Nido Steakhouse', cuisine: 'Steakhouse', price: '$$$', note: 'Old-school Baja steakhouse with mesquite-grilled meats and lobster' },
  ],
  'puertecitos': [
    { name: 'Comedor Puertecitos', cuisine: 'Mexican', price: '$', note: 'Basic meals at this tiny settlement, stock up on supplies in San Felipe before coming' },
    { name: 'Puertecitos Hot Springs Café', cuisine: 'Mexican', price: '$', note: 'Simple food near the natural hot springs, limited hours' },
  ],
  'gonzaga-bay': [
    { name: 'Alfonsina\'s Restaurant', cuisine: 'Seafood', price: '$$', note: 'The only real restaurant for miles, legendary remote outpost with fresh fish and cold beer' },
  ],
  'bahia-angeles': [
    { name: 'Restaurant Las Hamacas', cuisine: 'Seafood', price: '$$', note: 'Best restaurant in town with bay views, seafood platters and Mexican classics' },
    { name: 'Guillermo\'s Restaurant', cuisine: 'Mariscos', price: '$$', note: 'At the hotel, reliable meals with a view of the islands and whale sharks' },
    { name: 'Costa del Sol', cuisine: 'Mexican', price: '$', note: 'Simple family-run spot in town, cold beer and fresh fish tacos' },
  ],
  'santa-rosalia': [
    { name: 'El Boleo Bakery (Panadería El Boleo)', cuisine: 'Bakery', price: '$', note: 'Historic French-era bakery dating to the mining days, baguettes and pastries' },
    { name: 'Restaurant Terco\'s', cuisine: 'Seafood', price: '$$', note: 'Popular local restaurant with seafood and views of the harbor' },
    { name: 'Taquería El Patio', cuisine: 'Street Food', price: '$', note: 'Cheap, delicious tacos in the town center near the Eiffel-designed church' },
  ],
  'punta-chivato': [
    { name: 'Hotel Punta Chivato Restaurant', cuisine: 'Seafood', price: '$$', note: 'Only restaurant in the area, hotel dining room with seafood and Mexican plates' },
    { name: 'Beach Palapa Grill', cuisine: 'Mariscos', price: '$', note: 'Informal palapa on the beach, grilled fish when the catch is good' },
  ],
  'mulege': [
    { name: 'Los Equipales', cuisine: 'Mexican', price: '$$', note: 'Charming courtyard restaurant in the date palm oasis, the best dinner in Mulegé' },
    { name: 'Doney Tacos', cuisine: 'Street Food', price: '$', note: 'Beloved taco stand near the mission, legendary carne asada and pastor' },
    { name: 'Restaurant Clam\'s House', cuisine: 'Mariscos', price: '$', note: 'Clam dishes and seafood cocktails near the river estuary' },
  ],
  'bahia-concepcion': [
    { name: 'Ana\'s Restaurant (Playa Santispac)', cuisine: 'Seafood', price: '$', note: 'Beachside palapa at Santispac, clam chowder and grilled fish on the sand' },
    { name: 'Bertha\'s (Playa Requeson)', cuisine: 'Mariscos', price: '$', note: 'Simple beach comedor at one of Baja\'s most beautiful beaches' },
  ],
  'loreto': [
    { name: 'El Rey del Taco', cuisine: 'Street Food', price: '$', note: 'Late-night taco stand on the malecon, famous pastor and carne asada' },
    { name: 'Mi Loreto', cuisine: 'Seafood', price: '$$', note: 'Elegant seafood in the historic center, great wine list and fresh local catch' },
    { name: 'Orlando\'s Mexican Cocina', cuisine: 'Mexican', price: '$$', note: 'Colorful restaurant near the mission, creative Mexican dishes and margaritas' },
    { name: 'Mediterráneo', cuisine: 'Italian', price: '$$', note: 'Italian-Mexican fusion near the plaza, wood-fired pizza and pasta' },
  ],
  'juncalito': [
    { name: 'Juncalito Beach Comedor', cuisine: 'Mariscos', price: '$', note: 'Tiny palapa stand on the beach serving fresh fish, catch of the day only' },
  ],
  'puerto-escondido': [
    { name: 'Tripuí Restaurant', cuisine: 'Mexican', price: '$$', note: 'At the Tripuí RV park, the main dining option in Puerto Escondido' },
    { name: 'The Hidden Port Café', cuisine: 'Cafe', price: '$', note: 'Coffee and light meals at the marina, popular with cruisers and anglers' },
  ],
  'agua-verde': [
    { name: 'Comedor Agua Verde', cuisine: 'Mariscos', price: '$', note: 'Village comedor at this remote gem, whatever the pangas brought in that morning' },
  ],
  'san-evaristo': [
    { name: 'Palapa de Don Chuy', cuisine: 'Mariscos', price: '$', note: 'Fisherman\'s palapa serving grilled fish and ceviche, truly off the grid' },
  ],
  'la-paz': [
    { name: 'Bismark-cito', cuisine: 'Mariscos', price: '$', note: 'Iconic seafood institution since 1968, massive seafood platters and clamato preparados' },
    { name: 'Rancho Viejo', cuisine: 'Mexican', price: '$', note: 'Beloved carne asada and machaca spot, a La Paz breakfast tradition' },
    { name: 'Tailhunter Restaurant', cuisine: 'Seafood', price: '$$', note: 'At the sportfishing office, great fish tacos and anglers\' hangout on the malecon' },
    { name: 'Nim', cuisine: 'Baja Med', price: '$$$', note: 'Upscale Baja Mediterranean cuisine on the malecon with creative cocktails' },
  ],
  'la-ventana': [
    { name: 'Palapa Ventana', cuisine: 'Seafood', price: '$$', note: 'Beachfront restaurant popular with kiteboarders, cold beer and fish tacos after sessions' },
    { name: 'Baja Joe\'s', cuisine: 'Mexican', price: '$', note: 'Casual spot on the main road, burgers, tacos, and smoothies' },
  ],
  'bahia-muertos': [
    { name: 'Restaurant Bahía de los Muertos', cuisine: 'Seafood', price: '$$', note: 'Small beachfront restaurant at the bay, fresh fish and spectacular sunset views' },
  ],
  'punta-pescadero': [
    { name: 'Hotel Punta Pescadero Restaurant', cuisine: 'Seafood', price: '$$$', note: 'Dining at the boutique hotel, upscale seafood with Sea of Cortez views' },
  ],
  'los-barriles': [
    { name: 'Tio Pablo\'s', cuisine: 'Mexican', price: '$$', note: 'Popular gringo-and-local hangout with wood-fired pizza, BBQ, and cold beer' },
    { name: 'Caleb\'s Café', cuisine: 'Cafe', price: '$', note: 'Breakfast spot beloved by the fishing crowd, strong coffee and huevos rancheros' },
    { name: 'Smokey\'s Grill & Cantina', cuisine: 'BBQ', price: '$$', note: 'Ribs, burgers, and sports on TV, the East Cape\'s go-to after a fishing day' },
  ],
  'la-ribera': [
    { name: 'Campestre Triny', cuisine: 'Mexican', price: '$', note: 'Family-run ranch-style restaurant, carne asada and handmade tortillas' },
    { name: 'La Ribera Fish Taco Stand', cuisine: 'Tacos de Pescado', price: '$', note: 'Roadside stand near the turnoff, fresh-caught fish tacos' },
  ],
  'east-cape': [
    { name: 'Crossroads Country Club', cuisine: 'Seafood', price: '$$', note: 'Open-air restaurant between Los Frailes and Cabo Pulmo, seafood and Mexican plates' },
    { name: 'Cabo Pulmo Beach Palapa', cuisine: 'Mariscos', price: '$', note: 'Simple palapa near the national park, fish tacos and cold drinks after diving' },
  ],
  'san-jose-del-cabo': [
    { name: 'La Lupita Tacos & Mezcal', cuisine: 'Mexican', price: '$$', note: 'Trendy taco joint in the art district with craft mezcal and creative fillings' },
    { name: 'Don Sanchez', cuisine: 'Mexican', price: '$$$', note: 'Upscale Mexican cuisine in a restored hacienda in the historic centro' },
    { name: 'Mariscos El Barco', cuisine: 'Mariscos', price: '$', note: 'Roadside seafood truck famous for ceviche and tostadas near La Playita' },
    { name: 'La Playita Restaurant', cuisine: 'Seafood', price: '$$', note: 'Right at the fishing beach, catch-of-the-day plates and ocean views' },
  ],

  // === BOTH COASTS ===
  'cabo': [
    { name: 'The Office on the Beach', cuisine: 'Seafood', price: '$$', note: 'Iconic Medano Beach restaurant, toes in the sand, seafood platters, famous margaritas' },
    { name: 'Tacos Gardenias', cuisine: 'Tacos de Pescado', price: '$', note: 'Legendary local taco stand, massive fish and shrimp tacos, cash only' },
    { name: 'Edith\'s', cuisine: 'Mexican', price: '$$$', note: 'Fine dining near the arch, wood-grilled lobster and Caesar salad prepared tableside' },
    { name: 'Solomon\'s Landing', cuisine: 'Seafood', price: '$$', note: 'Marina-side with views of the sportfishing fleet returning with their catches' },
  ],
};

// ---- ACTIVITIES & ATTRACTIONS (non-fishing things to do near each zone) ----
const ACTIVITIES = {
  // === PACIFIC SIDE ===
  'popotla': [
    { name: 'Popotla Fish Market', type: 'Market', note: 'Watch pangas land their catch and buy direct from fishermen at the open-air market' },
    { name: 'Fox Studios Baja (Foxploration)', type: 'Historical', note: 'Site where Titanic was filmed, adjacent to the Popotla fishing village' },
    { name: 'Rosarito Beach Boardwalk', type: 'Beach', note: 'Stroll the malecon, street vendors, and beachfront bars in nearby Rosarito' },
  ],
  'ensenada': [
    { name: 'Valle de Guadalupe Wine Route', type: 'Wine', note: 'Mexico\'s premier wine region 30 min east, 150+ wineries with tastings and gourmet food' },
    { name: 'La Bufadora', type: 'Nature', note: 'Spectacular marine blowhole south of town, seawater shoots 60+ feet into the air' },
    { name: 'Mercado de Mariscos (Fish Market)', type: 'Market', note: 'Bustling harbor fish market with seafood cocktail stands and fresh catch for sale' },
  ],
  'erendira': [
    { name: 'Eréndira Tide Pools', type: 'Nature', note: 'Rocky coastline with rich tide pools full of marine life at low tide' },
    { name: 'Beach Camping', type: 'Beach', note: 'Remote beach camping along the bluffs with dramatic Pacific sunsets' },
  ],
  'colonet': [
    { name: 'Colonet Sand Dunes', type: 'Nature', note: 'Coastal dunes perfect for off-roading and dramatic ocean views' },
    { name: 'Surf Breaks', type: 'Surfing', note: 'Uncrowded reef and point breaks along the Colonet coastline' },
  ],
  'san-quintin': [
    { name: 'San Quintín Volcanic Cones', type: 'Nature', note: 'Hike the cinder cones on the bay for panoramic views of the Pacific and inner bay' },
    { name: 'Old English Cemetery', type: 'Historical', note: 'Remnants of the 1880s English wheat farming colony, a quirky piece of Baja history' },
    { name: 'Clamming on the Bay', type: 'Nature', note: 'Dig for Pismo clams on the inner bay at low tide, a local tradition' },
  ],
  'el-rosario': [
    { name: 'Misión El Rosario Ruins', type: 'Historical', note: 'Adobe ruins of the 1774 Dominican mission, the last outpost of Spanish Baja California' },
    { name: 'Desert Wildflower Blooms', type: 'Nature', note: 'After winter rains, the central desert explodes with wildflowers (Feb to Apr)' },
  ],
  'punta-baja': [
    { name: 'Rocky Beach Exploration', type: 'Beach', note: 'Remote rocky shoreline with tidepools and seal colonies' },
    { name: 'Stargazing', type: 'Nature', note: 'Zero light pollution, some of the darkest skies in North America' },
  ],
  'isla-cedros': [
    { name: 'Island Hiking', type: 'Nature', note: 'Hike the pine-and-oak ridgeline of this unique Pacific island, home to endemic species' },
    { name: 'Elephant Seal Colony', type: 'Nature', note: 'Northern elephant seals haul out on the island\'s beaches, especially in winter' },
  ],
  'guerrero-negro': [
    { name: 'Whale Watching at Ojo de Liebre Lagoon', type: 'Whale Watching', note: 'Gray whales calve here Jan to Apr, panga trips into the lagoon for close encounters' },
    { name: 'Salt Flats Tour', type: 'Nature', note: 'Tour the world\'s largest salt evaporation operation, surreal white landscapes' },
    { name: 'Guerrero Negro Bird Observatory', type: 'Nature', note: 'Major stopover for migratory birds, ospreys, herons, and shorebirds by the thousands' },
  ],
  'punta-eugenia': [
    { name: 'Remote Beach Walking', type: 'Beach', note: 'Windswept Pacific beaches at the tip of the Vizcaíno Peninsula, true wilderness' },
    { name: 'Sea Lion Colonies', type: 'Nature', note: 'California sea lions haul out on the rocky points near the village' },
  ],
  'bahia-tortugas': [
    { name: 'Village Walking Tour', type: 'Historical', note: 'Explore this remote fishing village at the end of the road, cooperative-run economy' },
    { name: 'Abalone Diving Observation', type: 'Nature', note: 'Watch the buzos (divers) harvest abalone, a centuries-old tradition' },
  ],
  'bahia-asuncion': [
    { name: 'Beachcombing', type: 'Beach', note: 'Miles of empty Pacific beach with shells, sea glass, and solitude' },
    { name: 'Lobster Season Festivities', type: 'Nature', note: 'Visit during lobster season (Oct to Feb) to see the cooperative fleet in action' },
  ],
  'la-bocana': [
    { name: 'Estero La Bocana', type: 'Nature', note: 'Explore the lagoon estuary where birds and marine life congregate' },
  ],
  'punta-abreojos': [
    { name: 'Lagoon Kayaking', type: 'Kayaking', note: 'Paddle the calm inner lagoon surrounded by mangroves and wading birds' },
    { name: 'Fishing Cooperative Tour', type: 'Historical', note: 'Visit one of Baja\'s most successful fishing cooperatives, learn about sustainable lobster harvesting' },
  ],
  'san-juanico': [
    { name: 'Surfing Scorpion Bay', type: 'Surfing', note: 'One of the world\'s longest right point breaks, six rideable points on a good swell' },
    { name: 'Beach Bonfires', type: 'Beach', note: 'Nightly bonfires on the beach with the surf community, guitars, stars, and stories' },
    { name: 'Mangrove Estuary Walk', type: 'Nature', note: 'Explore the estuary behind town, home to herons, egrets, and rays' },
  ],
  'lopez-mateos': [
    { name: 'Gray Whale Watching', type: 'Whale Watching', note: 'Pangas depart from the pier for intimate encounters with gray whales in the mangrove channels (Jan to Apr)' },
    { name: 'Mangrove Bird Tours', type: 'Nature', note: 'Boat through the mangrove-lined channels of Bahía Magdalena, rich in birdlife' },
  ],
  'puerto-san-carlos': [
    { name: 'Whale Watching Excursions', type: 'Whale Watching', note: 'Larger boats depart for Bahía Magdalena to see gray whales, humpbacks, and dolphins' },
    { name: 'Sand Dune Hiking', type: 'Nature', note: 'Massive coastal dunes along the barrier island with views of the Pacific and bay' },
    { name: 'Mag Bay Mangrove Tour', type: 'Kayaking', note: 'Kayak or panga through mangrove estuaries teeming with birds and juvenile fish' },
  ],
  'mag-bay': [
    { name: 'Barrier Island Beach', type: 'Beach', note: 'Take a panga to the outer barrier island for pristine, empty Pacific beach' },
    { name: 'Whale Watching (Bahía Magdalena)', type: 'Whale Watching', note: 'Access the lagoon system for gray whale encounters during calving season' },
  ],
  'todos-santos': [
    { name: 'Hotel California', type: 'Historical', note: 'The legendary hotel (yes, that one), browse the art, have a drink at the bar' },
    { name: 'Art Gallery Walk', type: 'Art', note: 'Dozens of galleries in the historic centro, from folk art to contemporary paintings' },
    { name: 'Playa Los Cerritos Surfing', type: 'Surfing', note: 'Beginner-friendly beach break south of town with surf schools and board rentals' },
  ],
  'punta-lobos': [
    { name: 'Sea Turtle Conservation', type: 'Nature', note: 'Volunteer turtle camps release olive ridley hatchlings during nesting season (Nov to Mar)' },
    { name: 'Panga Launch Viewing', type: 'Beach', note: 'Watch fishermen dramatically launch pangas through the surf at dawn, quintessential Baja' },
  ],
  'pescadero': [
    { name: 'Flora Farms', type: 'Nature', note: '25-acre organic farm with shopping, cooking classes, and farm-to-table dining' },
    { name: 'Playa San Pedrito Surfing', type: 'Surfing', note: 'Powerful beach break popular with experienced surfers, dramatic desert-meets-ocean scenery' },
    { name: 'Sierra de la Laguna Day Hike', type: 'Nature', note: 'Access the mountain biosphere reserve for oak forest hikes and hidden waterfalls' },
  ],

  // === SEA OF CORTEZ ===
  'el-golfo': [
    { name: 'Tidal Bore Viewing', type: 'Nature', note: 'Witness the extreme tides of the upper Gulf, 20+ foot tidal swings expose vast mudflats' },
    { name: 'Biosphere Reserve Birdwatching', type: 'Nature', note: 'Upper Gulf Biosphere Reserve protects vaquita habitat and hosts migratory shorebirds' },
  ],
  'san-felipe': [
    { name: 'Malecon & Shrimp Monument', type: 'Historical', note: 'Stroll the seaside malecon past the giant shrimp statue, bars, and souvenir shops' },
    { name: 'Valley of the Giants (Cardón Cacti)', type: 'Nature', note: 'Drive 20 min south to massive cardón cacti, the world\'s largest, some 60 feet tall' },
    { name: 'Sand Dune Off-Roading', type: 'Nature', note: 'Ride ATVs or drive the coastal sand dunes south of town' },
  ],
  'puertecitos': [
    { name: 'Puertecitos Hot Springs', type: 'Hot Springs', note: 'Natural volcanic hot springs right on the shore, soak at high tide as waves crash in' },
    { name: 'Coastal Rock Formations', type: 'Nature', note: 'Dramatic volcanic coastline with blowholes and sea caves' },
  ],
  'gonzaga-bay': [
    { name: 'Remote Beach Camping', type: 'Beach', note: 'Pristine desert-meets-sea beaches with zero crowds, perfect stargazing' },
    { name: 'Isla San Luis Bird Colony', type: 'Nature', note: 'Offshore island with huge colonies of blue-footed boobies and brown pelicans' },
  ],
  'bahia-angeles': [
    { name: 'Whale Shark Snorkeling', type: 'Diving/Snorkeling', note: 'Swim alongside whale sharks in the bay (Jun to Nov), pangas take you to the gentle giants' },
    { name: 'Island Kayaking', type: 'Kayaking', note: 'Paddle to the Guardian Angel and nearby islands, world-class sea kayaking' },
    { name: 'Sea of Cortez Eco-Museum', type: 'Historical', note: 'Small community museum documenting the natural history and conservation of the bay' },
  ],
  'santa-rosalia': [
    { name: 'Iglesia Santa Bárbara (Eiffel Church)', type: 'Historical', note: 'Iron church designed by Gustave Eiffel, shipped from France during the mining boom' },
    { name: 'French Mining Town Architecture', type: 'Historical', note: 'Walk the wooden-balcony neighborhoods built by the French El Boleo copper mining company' },
    { name: 'Panadería El Boleo', type: 'Historical', note: 'Historic bakery from the French colonial era, still baking baguettes daily' },
  ],
  'punta-chivato': [
    { name: 'Snorkeling Offshore Reefs', type: 'Diving/Snorkeling', note: 'Clear-water snorkeling over rocky reefs with tropical fish and rays' },
    { name: 'Beach Walking', type: 'Beach', note: 'Quiet white-sand coves along the point with calm, clear water' },
  ],
  'mulege': [
    { name: 'Misión Santa Rosalía de Mulegé', type: 'Historical', note: 'Beautifully preserved 1705 Jesuit mission overlooking the palm-lined river valley' },
    { name: 'Sierra de Guadalupe Cave Paintings', type: 'Historical', note: 'UNESCO-listed ancient rock art depicting humans and animals, guided mule trips available' },
    { name: 'River Kayaking', type: 'Kayaking', note: 'Paddle the palm-fringed Mulegé River from the mission down to the Sea of Cortez' },
  ],
  'bahia-concepcion': [
    { name: 'Beach Hopping', type: 'Beach', note: 'A dozen pristine white-sand beaches along the turquoise bay, Santispac, Requesón, El Coyote' },
    { name: 'Kayaking & Paddleboarding', type: 'Kayaking', note: 'Calm, crystal-clear waters perfect for kayaking to offshore islands and snorkeling' },
    { name: 'Requesón Sandbar Walk', type: 'Nature', note: 'At low tide, walk the sandbar connecting Playa Requesón to its island, magical' },
  ],
  'loreto': [
    { name: 'Misión de Nuestra Señora de Loreto', type: 'Historical', note: 'The first permanent Spanish mission in the Californias (1697), beautifully restored museum' },
    { name: 'Snorkeling at Isla Coronado', type: 'Diving/Snorkeling', note: 'Panga trip to Coronado Island for snorkeling with sea lions, rays, and tropical fish' },
    { name: 'Sierra de la Giganta Hiking', type: 'Nature', note: 'Dramatic canyon hikes in the mountain range behind Loreto, ancient rock art sites' },
  ],
  'juncalito': [
    { name: 'Beachcombing', type: 'Beach', note: 'Quiet cove beach with shell collecting and calm water for swimming' },
    { name: 'Sunset Watching', type: 'Nature', note: 'Spectacular sunsets over the islands of Loreto Bay National Park' },
  ],
  'puerto-escondido': [
    { name: 'Marina Puerto Escondido', type: 'Nature', note: 'Sheltered natural harbor popular with cruisers, kayak the calm inner bay' },
    { name: 'Hiking Cañón del Diablo', type: 'Nature', note: 'Canyon hike through desert scenery with seasonal waterfalls and palm oases' },
  ],
  'agua-verde': [
    { name: 'Snorkeling the Bay', type: 'Diving/Snorkeling', note: 'Crystal-clear water with rocky reefs, sea lions, and colorful fish right off the beach' },
    { name: 'Burro Trail Hiking', type: 'Nature', note: 'Follow old burro trails through the desert hills above the bay for sweeping views' },
  ],
  'san-evaristo': [
    { name: 'Remote Beach Solitude', type: 'Beach', note: 'One of Baja\'s most remote accessible beaches, nothing but desert, sea, and sky' },
    { name: 'Salt Mining Ruins', type: 'Historical', note: 'Explore the abandoned salt mining operation near the village' },
  ],
  'la-paz': [
    { name: 'Playa Balandra', type: 'Beach', note: 'Mexico\'s most beautiful beach, turquoise water, the iconic Mushroom Rock, shallow sandbars' },
    { name: 'Swimming with Whale Sharks', type: 'Diving/Snorkeling', note: 'Snorkel alongside gentle whale sharks in the bay (Oct to Apr), an unforgettable experience' },
    { name: 'Isla Espíritu Santo', type: 'Kayaking', note: 'Day trip or multi-day kayak to this UNESCO island, sea lion colony, snorkeling, camping' },
  ],
  'la-ventana': [
    { name: 'Kiteboarding', type: 'Surfing', note: 'World-class kiteboarding from Nov to Apr with consistent El Norte winds and flat water' },
    { name: 'Cerralvo Island Snorkeling', type: 'Diving/Snorkeling', note: 'Panga trip to the island for snorkeling with schools of jacks, rays, and sea lions' },
  ],
  'bahia-muertos': [
    { name: 'Beach Swimming', type: 'Beach', note: 'Calm, sheltered bay with gentle water and views of Cerralvo Island, great for families' },
  ],
  'punta-pescadero': [
    { name: 'Reef Snorkeling', type: 'Diving/Snorkeling', note: 'Rocky reef off the point with colorful tropical fish and occasional mobula rays' },
    { name: 'Coastal Trail Walk', type: 'Nature', note: 'Walk the bluffs between the point and the bay for desert-and-ocean scenery' },
  ],
  'los-barriles': [
    { name: 'Windsurfing & Kiteboarding', type: 'Surfing', note: 'The East Cape is a premier wind sports destination from Nov to Mar' },
    { name: 'East Cape Road Trip', type: 'Nature', note: 'Drive the coastal road south through ranchlands, coves, and desert to Cabo Pulmo' },
    { name: 'Waterfall Hike (Cañón de la Zorra)', type: 'Nature', note: 'Hike to a refreshing 30-foot waterfall in a palm canyon in the nearby sierra' },
  ],
  'la-ribera': [
    { name: 'Hot Springs of Santiago', type: 'Hot Springs', note: 'Natural hot springs in the Sierra de la Laguna foothills, a short drive inland' },
    { name: 'Beach Walking', type: 'Beach', note: 'Long empty beaches stretching south toward Cabo Pulmo' },
  ],
  'east-cape': [
    { name: 'Cabo Pulmo National Marine Park', type: 'Diving/Snorkeling', note: 'World-class diving in the only living coral reef in the Sea of Cortez, massive fish schools' },
    { name: 'Los Frailes Beach', type: 'Beach', note: 'Beautiful snorkeling beach with calm water and rocky headlands' },
    { name: 'Desert-to-Reef Hiking', type: 'Nature', note: 'Hike the cactus-studded coastline between Los Frailes and Cabo Pulmo' },
  ],
  'san-jose-del-cabo': [
    { name: 'Art District Gallery Walk', type: 'Art', note: 'Thursday night art walks Nov to Jun in the historic downtown gallery district' },
    { name: 'San José Estuary & Bird Sanctuary', type: 'Nature', note: 'Freshwater estuary with 200+ bird species, walking trails through mangroves and palms' },
    { name: 'La Playita Beach', type: 'Beach', note: 'The old fishing beach, watch pangas launch, swim, and explore tide pools' },
  ],

  // === BOTH COASTS ===
  'cabo': [
    { name: 'El Arco de Cabo San Lucas', type: 'Nature', note: 'The iconic arch at Land\'s End, water taxi or glass-bottom boat from the marina' },
    { name: 'Playa del Amor (Lover\'s Beach)', type: 'Beach', note: 'Accessible only by boat, this dramatic beach sits between the Pacific and the Sea of Cortez' },
    { name: 'Marina Cabo San Lucas', type: 'Market', note: 'Walk the marina to watch sportfishing boats weigh their catches at the dock' },
  ],
};

// ============================================================
// SPECIES GUIDE, per-zone species data for the Baja fishing app
// 44 zones, 4 to 6 species each, sorted by frequency
// ============================================================

const SPECIES_GUIDE = {

  // === PACIFIC SIDE ===

  // --- Northern Pacific (Popotla → San Quintín) ---

  'popotla': [
    { species: 'calico-bass',   name: 'Calico Bass',    frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '58 to 66°F', weather: 'Overcast mornings, light afternoon breeze',       current: 'Kelp bed edges with moderate California Current surge', bait: 'Live sardina, anchovies, swimbaits, small iron jigs' },
    { species: 'bonito',        name: 'Bonito',          frequency: 'frequent', bestMonths: 'Apr to Oct',     waterTemp: '60 to 68°F', weather: 'Morning fog clearing to calm midday',             current: 'Moderate upwelling current near rocky points',     bait: 'Live sardina, anchovies, feathers, small chrome jigs' },
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Dec to Jun',     waterTemp: '60 to 68°F', weather: 'Overcast mornings, calm winds under 10kt',        current: 'California Current upwelling along kelp edges and rocky points', bait: 'Live sardina, iron jigs (blue/white), yo-yo jigs, surface iron' },
    { species: 'halibut',       name: 'Halibut',         frequency: 'medium',   bestMonths: 'Mar to Sep',     waterTemp: '58 to 65°F', weather: 'Calm mornings, light swell, minimal NW wind',     current: 'Sandy bottom near kelp bed transitions',          bait: 'Live sardina, squid, bounce-ball rig, anchovies' },
    { species: 'white-seabass', name: 'White Seabass',   frequency: 'medium',   bestMonths: 'Mar to Jun',     waterTemp: '58 to 64°F', weather: 'Pre-dawn overcast, glassy calm seas',             current: 'Upwelling along rocky structure and kelp lines',   bait: 'Live squid, large sardina, swimbaits' },
    { species: 'bluefin-tuna',  name: 'Bluefin Tuna',    frequency: 'rare',     bestMonths: 'May to Oct',     waterTemp: '60 to 68°F', weather: 'Calm seas, minimal wind, clear water offshore',   current: 'Deep offshore California Current breaks and temperature edges', bait: 'Live sardina, flat-fall jigs, fluorocarbon leaders' },
  ],

  'ensenada': [
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Dec to Jun',     waterTemp: '60 to 68°F', weather: 'Overcast mornings, calm winds under 10kt',        current: 'Upwelling current near Islas de Todos Santos and Punta Banda', bait: 'Live sardina, iron jigs (blue/white), yo-yo jigs, Rapalas' },
    { species: 'bonito',        name: 'Bonito',          frequency: 'frequent', bestMonths: 'Apr to Oct',     waterTemp: '60 to 68°F', weather: 'Morning fog clearing to calm midday',             current: 'Current lines around Todos Santos Island edges',   bait: 'Live sardina, anchovies, feathers, chrome jigs' },
    { species: 'calico-bass',   name: 'Calico Bass',     frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '56 to 66°F', weather: 'Overcast or partly cloudy, light winds',          current: 'Kelp bed edges with light California Current surge', bait: 'Live sardina, anchovies, swimbaits, plastic grubs' },
    { species: 'white-seabass', name: 'White Seabass',   frequency: 'medium',   bestMonths: 'Mar to Jul',     waterTemp: '58 to 64°F', weather: 'Pre-dawn darkness, glassy water',                 current: 'Upwelling near rocky points and kelp forests',     bait: 'Live squid, large sardina, swimbaits' },
    { species: 'lingcod',       name: 'Lingcod',         frequency: 'medium',   bestMonths: 'Nov to Mar',     waterTemp: '56 to 62°F', weather: 'Cool overcast days, moderate swell',              current: 'Rocky reef structure with moderate current',       bait: 'Live sardina, large swimbaits, heavy jigs' },
    { species: 'bluefin-tuna',  name: 'Bluefin Tuna',    frequency: 'rare',     bestMonths: 'Jun to Oct',     waterTemp: '60 to 68°F', weather: 'Calm offshore conditions, clear water',           current: 'Deep current breaks west of Todos Santos Island',  bait: 'Live sardina, flat-fall jigs, kite fishing, surface iron' },
  ],

  'erendira': [
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Jan to May',     waterTemp: '58 to 66°F', weather: 'Overcast mornings, calm winds under 10kt',        current: 'California Current upwelling along rocky points',  bait: 'Live sardina, anchovies, iron jigs, yo-yo jigs' },
    { species: 'calico-bass',   name: 'Calico Bass',     frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '56 to 66°F', weather: 'Light overcast, minimal swell, NW winds under 15kt', current: 'Kelp bed edges with light surge',              bait: 'Live sardina, anchovies, swimbaits, soft plastics' },
    { species: 'bonito',        name: 'Bonito',          frequency: 'frequent', bestMonths: 'May to Oct',     waterTemp: '60 to 68°F', weather: 'Morning fog clearing to calm',                    current: 'Moderate current off rocky headlands',             bait: 'Live sardina, anchovies, feathers, chrome spoons' },
    { species: 'lingcod',       name: 'Lingcod',         frequency: 'medium',   bestMonths: 'Nov to Mar',     waterTemp: '56 to 62°F', weather: 'Cool overcast days, moderate swell',              current: 'Rocky reef structure with moderate current flow',  bait: 'Large swimbaits, heavy jigs, live bait near bottom' },
    { species: 'halibut',       name: 'Halibut',         frequency: 'medium',   bestMonths: 'Mar to Aug',     waterTemp: '58 to 64°F', weather: 'Calm mornings, light swell, minimal NW wind',     current: 'Sandy bottom transitions near rocky structure',    bait: 'Live sardina, squid, bounce-ball rig, anchovies' },
    { species: 'white-seabass', name: 'White Seabass',   frequency: 'rare',     bestMonths: 'Apr to Jun',     waterTemp: '58 to 64°F', weather: 'Pre-dawn overcast, glassy calm',                  current: 'Deep kelp edges with California Current upwelling', bait: 'Live squid, large sardina, swimbaits' },
  ],

  'colonet': [
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Dec to Jun',     waterTemp: '58 to 66°F', weather: 'Overcast mornings, calm winds under 10kt',        current: 'California Current upwelling along 240 rock and reef', bait: 'Live sardina, anchovies, iron jigs, yo-yo jigs, surface iron' },
    { species: 'calico-bass',   name: 'Calico Bass',     frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '56 to 66°F', weather: 'Overcast, light afternoon NW winds',              current: 'Kelp bed edges near rocky bottom',                 bait: 'Live sardina, anchovies, swimbaits, plastic grubs' },
    { species: 'bonito',        name: 'Bonito',          frequency: 'frequent', bestMonths: 'Apr to Sep',     waterTemp: '60 to 68°F', weather: 'Morning fog, calm midday',                        current: 'Current lines off headlands',                      bait: 'Live sardina, anchovies, feathers, small jigs' },
    { species: 'white-seabass', name: 'White Seabass',   frequency: 'medium',   bestMonths: 'Mar to Jun',     waterTemp: '58 to 64°F', weather: 'Pre-dawn darkness, calm seas',                    current: 'Deep kelp structure with California Current upwelling', bait: 'Live squid, large sardina, swimbaits' },
    { species: 'lingcod',       name: 'Lingcod',         frequency: 'medium',   bestMonths: 'Nov to Mar',     waterTemp: '56 to 60°F', weather: 'Cool overcast mornings, moderate swell',          current: 'Rocky reef with moderate current',                 bait: 'Large swimbaits, heavy jigs, live bait' },
    { species: 'bluefin-tuna',  name: 'Bluefin Tuna',    frequency: 'rare',     bestMonths: 'Jun to Oct',     waterTemp: '60 to 68°F', weather: 'Calm offshore, clear blue water',                 current: 'Offshore California Current breaks and temperature edges', bait: 'Live sardina, flat-fall jigs, surface iron, colt sniper' },
  ],

  'san-quintin': [
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Dec to Jun',     waterTemp: '60 to 68°F', weather: 'Overcast mornings, calm winds under 10kt',        current: 'Upwelling current off Isla San Martín, kelp edges', bait: 'Live sardina, mackerel, iron jigs, Krocodile spoons, Rapalas' },
    { species: 'calico-bass',   name: 'Calico Bass',     frequency: 'frequent', bestMonths: 'May to Oct',     waterTemp: '58 to 66°F', weather: 'Overcast or partly cloudy, light NW winds',       current: 'Kelp beds near Ben\'s Rock and San Martín Island', bait: 'Live sardina, swimbaits, soft plastics' },
    { species: 'white-seabass', name: 'White Seabass',   frequency: 'frequent', bestMonths: 'Jul to Oct',     waterTemp: '60 to 66°F', weather: 'Pre-dawn overcast, calm seas, run-and-gun bait balls', current: 'Sandy flats south of launch with upwelling',  bait: 'Live mackerel, Krocodile spoons, large sardina, swimbaits' },
    { species: 'halibut',       name: 'Halibut',         frequency: 'medium',   bestMonths: 'Mar to Sep',     waterTemp: '58 to 65°F', weather: 'Calm mornings, light swell, minimal NW wind',     current: 'Sandy bottom near bay entrance and flats',         bait: 'Live sardina, squid, bounce-ball rig, anchovies' },
    { species: 'lingcod',       name: 'Lingcod',         frequency: 'medium',   bestMonths: 'Nov to Mar',     waterTemp: '56 to 62°F', weather: 'Cool overcast mornings, moderate swell',          current: 'Rocky reef structure near San Martín with cold current', bait: 'Live sardina, large swimbaits, heavy jigs' },
    { species: 'bluefin-tuna',  name: 'Bluefin Tuna',    frequency: 'rare',     bestMonths: 'Jun to Oct',     waterTemp: '62 to 70°F', weather: 'Calm seas, minimal wind, clear blue water',       current: 'Deep offshore California Current breaks',          bait: 'Live sardina, flat-fall jigs, fluorocarbon leaders, surface iron' },
  ],

  // --- Central Pacific (El Rosario → Isla Cedros) ---

  'el-rosario': [
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Jan to Jun',     waterTemp: '58 to 68°F', weather: 'Overcast mornings, calm winds, afternoon NW 15-25kt', current: 'Rocky point upwelling, California Current kelp edges', bait: 'Live sardina, mackerel, iron jigs, yo-yo jigs' },
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '58 to 70°F', weather: 'Calm mornings, light afternoon breeze',           current: 'Rocky reef structure with moderate current',       bait: 'Live sardina, swimbaits, dropper loop with squid' },
    { species: 'white-seabass', name: 'White Seabass',   frequency: 'medium',   bestMonths: 'Mar to Jun',     waterTemp: '58 to 64°F', weather: 'Pre-dawn overcast, calm seas',                    current: 'Deep kelp structure with upwelling',               bait: 'Live squid, large sardina, swimbaits' },
    { species: 'lingcod',       name: 'Lingcod',         frequency: 'medium',   bestMonths: 'Nov to Mar',     waterTemp: '56 to 62°F', weather: 'Cool overcast days, moderate swell',              current: 'Deep rocky structure with cold California Current upwelling', bait: 'Large swimbaits, heavy jigs, live bait near bottom' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'rare',     bestMonths: 'Jul to Oct',     waterTemp: '65 to 72°F', weather: 'Warm calm days, minimal NW wind',                 current: 'Offshore current breaks and temperature edges',    bait: 'Live bait, cedar plugs, poppers' },
  ],

  'punta-baja': [
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Jan to Jun',     waterTemp: '58 to 68°F', weather: 'Overcast mornings, calm winds, afternoon NW 15-25kt', current: 'California Current upwelling along rocky points and pinnacles', bait: 'Live sardina, mackerel, iron jigs, yo-yo jigs' },
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '58 to 70°F', weather: 'Calm mornings, light breeze',                     current: 'Rocky reef with moderate current',                 bait: 'Live sardina, swimbaits, dropper loop with squid' },
    { species: 'white-seabass', name: 'White Seabass',   frequency: 'medium',   bestMonths: 'Mar to Jun',     waterTemp: '58 to 64°F', weather: 'Pre-dawn calm, overcast skies',                   current: 'Kelp forest edges with California Current upwelling', bait: 'Live squid, large sardina, swimbaits' },
    { species: 'lingcod',       name: 'Lingcod',         frequency: 'medium',   bestMonths: 'Nov to Mar',     waterTemp: '56 to 62°F', weather: 'Cool overcast, moderate swell',                   current: 'Deep rocky reef with cold upwelling current',      bait: 'Large swimbaits, heavy jigs, live bait' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'rare',     bestMonths: 'Jul to Oct',     waterTemp: '65 to 72°F', weather: 'Warm calm days, clean blue water offshore',       current: 'Offshore current edges and temperature breaks',    bait: 'Live bait, cedar plugs, chunking' },
  ],

  'isla-cedros': [
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Jun to Nov',     waterTemp: '62 to 72°F', weather: 'Overcast mornings, calm winds, best early season', current: 'Strong upwelling around island points and kelp beds', bait: 'Surface iron, live mackerel, sardina, yo-yo jigs (50lb line)' },
    { species: 'calico-bass',   name: 'Calico Bass',     frequency: 'frequent', bestMonths: 'Jun to Oct',     waterTemp: '60 to 70°F', weather: 'Calm mornings, moderate afternoon breeze',        current: 'Kelp bed structure around island perimeter',       bait: 'Live sardina, swimbaits, soft plastics' },
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '58 to 70°F', weather: 'Calm mornings, moderate afternoon breeze',        current: 'Rocky reef structure around island',               bait: 'Live sardina, mackerel, swimbaits, dropper loop with squid' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'medium',   bestMonths: 'Jul to Oct',     waterTemp: '66 to 74°F', weather: 'Warm calm days, clear water offshore',            current: 'Offshore current breaks south of island',          bait: 'Live mackerel, cedar plugs, poppers, chunking' },
    { species: 'white-seabass', name: 'White Seabass',   frequency: 'medium',   bestMonths: 'Mar to Jun',     waterTemp: '58 to 64°F', weather: 'Pre-dawn calm, overcast skies',                   current: 'Deep kelp structure with cold upwelling',          bait: 'Live squid, large sardina, swimbaits' },
    { species: 'bluefin-tuna',  name: 'Bluefin Tuna',    frequency: 'rare',     bestMonths: 'Jun to Sep',     waterTemp: '60 to 68°F', weather: 'Calm offshore conditions, blue water',            current: 'Deep California Current edges northwest of island', bait: 'Live sardina, flat-fall jigs, surface iron, fluorocarbon leaders' },
  ],

  // --- Guerrero Negro / Lagoon areas ---

  'guerrero-negro': [
    { species: 'corvina',       name: 'Corvina',         frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '62 to 72°F', weather: 'Calm mornings, light afternoon wind',             current: 'Tidal flow through lagoon channels',               bait: 'Live shrimp, cut mullet, soft plastics' },
    { species: 'halibut',       name: 'Halibut',         frequency: 'frequent', bestMonths: 'Mar to Sep',     waterTemp: '60 to 68°F', weather: 'Calm mornings, light swell',                      current: 'Sandy bottom near lagoon mouth',                   bait: 'Live sardina, squid, bounce-ball rig' },
    { species: 'sierra',        name: 'Sierra',          frequency: 'frequent', bestMonths: 'Nov to Mar',     waterTemp: '60 to 66°F', weather: 'Cool overcast mornings, light breeze',            current: 'Incoming tide through lagoon entrance',            bait: 'Trolling Rapalas, spoons, small feathers' },
    { species: 'pargo',         name: 'Pargo',           frequency: 'medium',   bestMonths: 'Apr to Oct',     waterTemp: '64 to 72°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Near rocky structure at lagoon edges',             bait: 'Cut bait, squid, dropper loop near structure' },
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'rare',     bestMonths: 'Feb to May',     waterTemp: '62 to 68°F', weather: 'Calm offshore conditions',                       current: 'Upwelling along outer coast points',               bait: 'Live sardina, iron jigs, Rapalas' },
  ],

  // --- Mid Pacific (Punta Eugenia → Punta Abreojos) ---

  'punta-eugenia': [
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Jan to Jun',     waterTemp: '62 to 70°F', weather: 'Overcast mornings, calm winds',                   current: 'Strong upwelling around the point',                bait: 'Live sardina, iron jigs, yo-yo jigs' },
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '60 to 70°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Rocky reef structure with moderate current',       bait: 'Live sardina, swimbaits, dropper loop with squid' },
    { species: 'grouper',       name: 'Grouper',         frequency: 'medium',   bestMonths: 'Apr to Oct',     waterTemp: '64 to 72°F', weather: 'Warm calm mornings, light swell',                 current: 'Deep rocky structure with current',                bait: 'Heavy jigs, cut bait, live bait near bottom structure' },
    { species: 'corvina',       name: 'Corvina',         frequency: 'medium',   bestMonths: 'Year-round',  waterTemp: '62 to 70°F', weather: 'Calm mornings, overcast skies',                   current: 'Sandy bottom near rocky transitions',              bait: 'Live shrimp, cut mullet, soft plastics' },
    { species: 'pargo',         name: 'Pargo',           frequency: 'rare',     bestMonths: 'May to Oct',     waterTemp: '66 to 74°F', weather: 'Warm calm days, minimal wind',                    current: 'Near structure with moderate tidal current',       bait: 'Cut bait, squid, dropper loop near rocky bottom' },
  ],

  'bahia-tortugas': [
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Jan to Jun',     waterTemp: '62 to 70°F', weather: 'Overcast mornings, calm winds',                   current: 'Upwelling around bay headlands',                   bait: 'Live sardina, iron jigs, yo-yo jigs' },
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '60 to 72°F', weather: 'Calm mornings, light afternoon breeze',           current: 'Rocky reef with moderate current flow',            bait: 'Live sardina, swimbaits, dropper loop with squid' },
    { species: 'grouper',       name: 'Grouper',         frequency: 'medium',   bestMonths: 'Apr to Oct',     waterTemp: '64 to 74°F', weather: 'Warm calm days, light swell',                     current: 'Deep rocky structure near drop-offs',              bait: 'Heavy jigs, cut bait, live bait near bottom' },
    { species: 'pargo',         name: 'Pargo',           frequency: 'medium',   bestMonths: 'May to Oct',     waterTemp: '66 to 74°F', weather: 'Calm mornings, moderate winds',                   current: 'Near structure with incoming tidal current',       bait: 'Cut bait, squid, dropper loop near rocky structure' },
    { species: 'corvina',       name: 'Corvina',         frequency: 'medium',   bestMonths: 'Year-round',  waterTemp: '62 to 72°F', weather: 'Overcast mornings, light winds',                  current: 'Sandy bottom near rocky transitions',              bait: 'Live shrimp, cut mullet, soft plastics' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'rare',     bestMonths: 'Jul to Oct',     waterTemp: '68 to 76°F', weather: 'Warm calm days, clean offshore water',            current: 'Offshore current breaks and thermoclines',         bait: 'Live bait, cedar plugs, poppers' },
  ],

  'bahia-asuncion': [
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Jan to Jun',     waterTemp: '62 to 70°F', weather: 'Overcast mornings, calm winds',                   current: 'Upwelling along rocky coastline',                  bait: 'Live sardina, iron jigs, yo-yo jigs' },
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '60 to 72°F', weather: 'Calm mornings, light afternoon winds',            current: 'Rocky reef structure with moderate current',       bait: 'Live sardina, swimbaits, dropper loop with squid' },
    { species: 'grouper',       name: 'Grouper',         frequency: 'medium',   bestMonths: 'May to Oct',     waterTemp: '64 to 74°F', weather: 'Warm calm mornings, light swell',                 current: 'Deep rocky structure with current',                bait: 'Heavy jigs, cut bait, live bait near bottom' },
    { species: 'pargo',         name: 'Pargo',           frequency: 'medium',   bestMonths: 'May to Oct',     waterTemp: '66 to 74°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Near structure with tidal current',                bait: 'Cut bait, squid, dropper loop near structure' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'rare',     bestMonths: 'Jul to Oct',     waterTemp: '68 to 76°F', weather: 'Warm calm days, clean blue water',                current: 'Offshore current edges',                          bait: 'Live bait, cedar plugs, poppers, chunking' },
  ],

  'la-bocana': [
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Jan to Jun',     waterTemp: '62 to 70°F', weather: 'Overcast mornings, calm winds',                   current: 'Upwelling at lagoon mouth and rocky points',       bait: 'Live sardina, iron jigs, yo-yo jigs' },
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '60 to 72°F', weather: 'Calm mornings, light afternoon breeze',           current: 'Rocky structure with moderate tidal flow',         bait: 'Live sardina, swimbaits, dropper loop with squid' },
    { species: 'corvina',       name: 'Corvina',         frequency: 'medium',   bestMonths: 'Year-round',  waterTemp: '62 to 72°F', weather: 'Calm mornings, overcast skies',                   current: 'Tidal flow through lagoon channels',               bait: 'Live shrimp, cut mullet, soft plastics' },
    { species: 'pargo',         name: 'Pargo',           frequency: 'medium',   bestMonths: 'May to Oct',     waterTemp: '66 to 74°F', weather: 'Warm calm mornings, light winds',                 current: 'Near structure at lagoon entrance',                bait: 'Cut bait, squid, dropper loop near rocky bottom' },
    { species: 'grouper',       name: 'Grouper',         frequency: 'rare',     bestMonths: 'May to Oct',     waterTemp: '64 to 74°F', weather: 'Warm calm days, light swell',                     current: 'Deep rocky structure with current',                bait: 'Heavy jigs, cut bait, live bait near bottom structure' },
  ],

  'punta-abreojos': [
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Jan to Jun',     waterTemp: '62 to 70°F', weather: 'Overcast mornings, calm winds',                   current: 'Upwelling around the point, kelp edges',          bait: 'Live sardina, iron jigs, yo-yo jigs' },
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '62 to 72°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Rocky reef structure with current',                bait: 'Live sardina, swimbaits, dropper loop with squid' },
    { species: 'corvina',       name: 'Corvina',         frequency: 'medium',   bestMonths: 'Year-round',  waterTemp: '62 to 72°F', weather: 'Calm mornings, overcast skies',                   current: 'Sandy bottom near rocky transitions',              bait: 'Live shrimp, cut mullet, soft plastics' },
    { species: 'pargo',         name: 'Pargo',           frequency: 'medium',   bestMonths: 'May to Oct',     waterTemp: '66 to 74°F', weather: 'Warm calm mornings',                              current: 'Near structure with moderate current',             bait: 'Cut bait, squid, dropper loop near structure' },
    { species: 'grouper',       name: 'Grouper',         frequency: 'rare',     bestMonths: 'May to Oct',     waterTemp: '64 to 74°F', weather: 'Warm calm days, light swell',                     current: 'Deep rocky bottom structure',                      bait: 'Heavy jigs, cut bait, live bait near bottom' },
  ],

  // --- Southern Pacific (San Juanico → Mag Bay) ---

  'san-juanico': [
    { species: 'dorado',        name: 'Dorado',          frequency: 'frequent', bestMonths: 'Jun to Nov',     waterTemp: '72 to 80°F', weather: 'Warm calm mornings, scattered clouds',            current: 'Current lines with floating debris',               bait: 'Live bait (sardina, caballito), trolling lures, feathers' },
    { species: 'pargo',         name: 'Pargo',           frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '68 to 78°F', weather: 'Calm mornings, light afternoon wind',             current: 'Near rocky structure with tidal current',          bait: 'Cut bait, squid, dropper loop near structure' },
    { species: 'roosterfish',   name: 'Roosterfish',     frequency: 'medium',   bestMonths: 'May to Nov',     waterTemp: '72 to 80°F', weather: 'Warm calm mornings, light surf',                  current: 'Sandy beaches near rocky points',                  bait: 'Live ladyfish (lisas), mullet, caballito, slow trolling' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'medium',   bestMonths: 'Jul to Nov',     waterTemp: '74 to 82°F', weather: 'Warm calm days, clean offshore water',            current: 'Offshore current breaks and thermoclines',         bait: 'Live bait, cedar plugs, poppers, chunking' },
    { species: 'striped-marlin', name: 'Striped Marlin', frequency: 'rare',     bestMonths: 'Nov to Mar',     waterTemp: '70 to 76°F', weather: 'Calm seas, light morning breeze',                 current: 'Deep water current edges offshore',                bait: 'Live bait (mackerel, caballito), trolling lures' },
    { species: 'wahoo',         name: 'Wahoo',           frequency: 'rare',     bestMonths: 'Jun to Oct',     waterTemp: '74 to 82°F', weather: 'Warm calm days, clean blue water',                current: 'High-current areas near structure',                bait: 'High-speed trolling, Rapalas, jet heads' },
  ],

  'lopez-mateos': [
    { species: 'striped-marlin', name: 'Striped Marlin', frequency: 'frequent', bestMonths: 'Oct to Feb',     waterTemp: '70 to 78°F', weather: 'Calm seas, light winds, bait concentrations',    current: 'Deep water current edges, bait migration corridors', bait: 'Live mackerel, caballito, trolling lures, fly fishing' },
    { species: 'dorado',        name: 'Dorado',          frequency: 'frequent', bestMonths: 'Jun to Nov',     waterTemp: '74 to 82°F', weather: 'Warm calm mornings, scattered clouds',            current: 'Current lines and mangrove channel edges',         bait: 'Live sardina, caballito, trolling lures, feathers' },
    { species: 'snook',         name: 'Black Snook',     frequency: 'medium',   bestMonths: 'Year-round',  waterTemp: '68 to 80°F', weather: 'Calm mornings, incoming tides',                   current: 'Mangrove channels with tidal flow',                bait: 'Live sardina, mullet, topwater plugs, soft plastics' },
    { species: 'roosterfish',   name: 'Roosterfish',     frequency: 'medium',   bestMonths: 'May to Nov',     waterTemp: '72 to 80°F', weather: 'Warm calm mornings, light surf on beach',         current: 'Sandy beaches near mangrove channels',            bait: 'Live mullet, caballito, ladyfish (lisas), slow trolling' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'medium',   bestMonths: 'Jul to Nov',     waterTemp: '74 to 82°F', weather: 'Warm calm days, clean offshore water',            current: 'Offshore current breaks',                          bait: 'Live bait, cedar plugs, poppers, chunking' },
    { species: 'wahoo',         name: 'Wahoo',           frequency: 'rare',     bestMonths: 'Jul to Oct',     waterTemp: '76 to 84°F', weather: 'Hot calm days, clean blue water offshore',        current: 'High-current areas near offshore structure',       bait: 'High-speed trolling, Rapalas, jet heads' },
  ],

  'puerto-san-carlos': [
    { species: 'striped-marlin', name: 'Striped Marlin', frequency: 'frequent', bestMonths: 'Oct to Feb',     waterTemp: '70 to 78°F', weather: 'Calm seas, light winds, baitfish concentrations', current: 'Deep water current edges, bait migration south of bay', bait: 'Live mackerel, caballito, trolling lures, fly fishing' },
    { species: 'dorado',        name: 'Dorado',          frequency: 'frequent', bestMonths: 'Jun to Nov',     waterTemp: '74 to 82°F', weather: 'Warm calm mornings, scattered clouds',            current: 'Current lines with debris in bay channels',       bait: 'Live sardina, caballito, trolling lures, feathers' },
    { species: 'snook',         name: 'Black Snook',     frequency: 'medium',   bestMonths: 'Year-round',  waterTemp: '68 to 80°F', weather: 'Calm mornings, incoming tides',                   current: 'Mangrove channel edges with tidal flow',           bait: 'Live sardina, mullet, topwater plugs, soft plastics' },
    { species: 'roosterfish',   name: 'Roosterfish',     frequency: 'medium',   bestMonths: 'May to Nov',     waterTemp: '72 to 80°F', weather: 'Warm mornings, light surf',                       current: 'Sandy beaches near bay entrance',                  bait: 'Live mullet, caballito, ladyfish (lisas), slow trolling' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'medium',   bestMonths: 'Jul to Nov',     waterTemp: '74 to 82°F', weather: 'Warm calm offshore days',                         current: 'Offshore current breaks south of bay',             bait: 'Live bait, cedar plugs, poppers, chunking' },
    { species: 'wahoo',         name: 'Wahoo',           frequency: 'rare',     bestMonths: 'Jul to Oct',     waterTemp: '76 to 84°F', weather: 'Hot calm days, clean blue water',                  current: 'High-current areas near offshore structure',       bait: 'High-speed trolling, Rapalas, jet heads' },
  ],

  'mag-bay': [
    { species: 'striped-marlin', name: 'Striped Marlin', frequency: 'frequent', bestMonths: 'Oct to Feb',     waterTemp: '70 to 78°F', weather: 'Calm seas, light winds, baitfish concentrations', current: 'Deep water current edges, bait migration corridors south of bay', bait: 'Live mackerel, caballito, trolling lures, fly fishing (streamer)' },
    { species: 'dorado',        name: 'Dorado',          frequency: 'frequent', bestMonths: 'Jun to Nov',     waterTemp: '74 to 82°F', weather: 'Warm calm mornings, scattered clouds',            current: 'Current lines and debris in mangrove channels',    bait: 'Live bait (sardina, caballito), trolling lures, feathers' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'frequent', bestMonths: 'Jul to Nov',     waterTemp: '74 to 84°F', weather: 'Warm calm offshore conditions',                   current: 'Offshore current breaks and thermoclines',         bait: 'Live bait, cedar plugs, poppers, chunking' },
    { species: 'snook',         name: 'Black Snook',     frequency: 'medium',   bestMonths: 'Year-round',  waterTemp: '68 to 80°F', weather: 'Calm mornings, incoming tides',                   current: 'Mangrove channel edges with tidal flow',           bait: 'Live sardina, mullet, topwater plugs, soft plastics' },
    { species: 'roosterfish',   name: 'Roosterfish',     frequency: 'medium',   bestMonths: 'May to Nov',     waterTemp: '72 to 80°F', weather: 'Warm calm mornings, light surf',                  current: 'Sandy beaches near bay entrance and structure',    bait: 'Live ladyfish (lisas), mullet, caballito, slow trolling' },
    { species: 'blue-marlin',   name: 'Blue Marlin',     frequency: 'rare',     bestMonths: 'Jul to Oct',     waterTemp: '78 to 84°F', weather: 'Hot calm days, deep blue water offshore',         current: 'Deep offshore current edges beyond bay mouth',     bait: 'Large trolling lures, live tuna, skip baits' },
  ],

  // --- Todos Santos / Pescadero area ---

  'todos-santos': [
    { species: 'dorado',        name: 'Dorado',          frequency: 'frequent', bestMonths: 'Jun to Nov',     waterTemp: '72 to 82°F', weather: 'Warm mornings, scattered clouds, calm seas',      current: 'Pacific-Cortez mixing zone, current lines with debris', bait: 'Live caballito, mullet, trolling lures, feathers' },
    { species: 'sierra',        name: 'Sierra',          frequency: 'frequent', bestMonths: 'Nov to Mar',     waterTemp: '68 to 74°F', weather: 'Cool overcast mornings, calm seas',               current: 'Incoming tide along beaches and points',           bait: 'Trolling Rapalas, spoons, small feathers, strip bait' },
    { species: 'roosterfish',   name: 'Roosterfish',     frequency: 'frequent', bestMonths: 'May to Nov',     waterTemp: '72 to 82°F', weather: 'Warm calm mornings, light surf on beach',         current: 'Sandy beaches near rocky points, Punta Lobos area', bait: 'Live caballito, mullet, ladyfish (lisas), slow trolling' },
    { species: 'jack-crevalle', name: 'Jack Crevalle',   frequency: 'medium',   bestMonths: 'May to Nov',     waterTemp: '72 to 82°F', weather: 'Warm mornings, moderate surf',                    current: 'Surf zone near rocky points and beach breaks',     bait: 'Live mullet, poppers, topwater plugs, casting lures' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'medium',   bestMonths: 'Jul to Nov',     waterTemp: '74 to 82°F', weather: 'Warm calm offshore days, NW winds under 15kt',   current: 'Offshore current breaks at Pacific-Cortez mixing zone', bait: 'Live bait, cedar plugs, poppers, chunking' },
    { species: 'striped-marlin', name: 'Striped Marlin', frequency: 'rare',     bestMonths: 'Nov to Mar',     waterTemp: '70 to 76°F', weather: 'Calm seas, light morning breeze',                 current: 'Deep water current edges offshore',                bait: 'Live mackerel, caballito, trolling lures' },
  ],

  'punta-lobos': [
    { species: 'dorado',        name: 'Dorado',          frequency: 'frequent', bestMonths: 'Jun to Nov',     waterTemp: '72 to 82°F', weather: 'Warm mornings, light offshore breeze',            current: 'Current lines near point and offshore',            bait: 'Live caballito, mullet, trolling lures, feathers' },
    { species: 'sierra',        name: 'Sierra',          frequency: 'frequent', bestMonths: 'Nov to Mar',     waterTemp: '68 to 74°F', weather: 'Cool overcast mornings, calm winds',              current: 'Incoming tide along rocky shoreline at the point', bait: 'Trolling Rapalas, spoons, small feathers, strip bait' },
    { species: 'roosterfish',   name: 'Roosterfish',     frequency: 'frequent', bestMonths: 'May to Nov',     waterTemp: '72 to 82°F', weather: 'Warm calm mornings, light surf on beach',         current: 'Sandy beaches adjacent to rocky points',           bait: 'Live caballito, mullet, ladyfish (lisas), slow trolling' },
    { species: 'jack-crevalle', name: 'Jack Crevalle',   frequency: 'medium',   bestMonths: 'May to Nov',     waterTemp: '72 to 82°F', weather: 'Warm mornings, moderate surf',                    current: 'Surf zone near rocky point breaks',                bait: 'Live mullet, poppers, topwater plugs' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'medium',   bestMonths: 'Jul to Nov',     waterTemp: '74 to 82°F', weather: 'Warm calm days, minimal wind',                    current: 'Offshore current breaks',                          bait: 'Live bait, cedar plugs, poppers' },
    { species: 'striped-marlin', name: 'Striped Marlin', frequency: 'rare',     bestMonths: 'Nov to Mar',     waterTemp: '70 to 76°F', weather: 'Calm seas, light winds',                          current: 'Deep offshore current edges',                      bait: 'Live mackerel, caballito, trolling lures' },
  ],

  'pescadero': [
    { species: 'roosterfish',   name: 'Roosterfish',     frequency: 'frequent', bestMonths: 'May to Nov',     waterTemp: '72 to 82°F', weather: 'Warm calm mornings, light surf',                  current: 'Sandy beaches near rocky structure, white sand bottom', bait: 'Live caballito, mullet, ladyfish (lisas), slow trolling' },
    { species: 'dorado',        name: 'Dorado',          frequency: 'frequent', bestMonths: 'Jun to Nov',     waterTemp: '72 to 82°F', weather: 'Warm mornings, scattered clouds, calm seas',      current: 'Current lines with debris offshore',               bait: 'Live caballito, mullet, trolling lures, feathers' },
    { species: 'sierra',        name: 'Sierra',          frequency: 'frequent', bestMonths: 'Nov to Mar',     waterTemp: '68 to 74°F', weather: 'Cool overcast mornings, calm seas',               current: 'Incoming tide along sandy beaches',                bait: 'Trolling Rapalas, spoons, small feathers, strip bait' },
    { species: 'jack-crevalle', name: 'Jack Crevalle',   frequency: 'medium',   bestMonths: 'May to Nov',     waterTemp: '72 to 82°F', weather: 'Warm mornings, moderate surf',                    current: 'Surf zone near rocky points and beach breaks',     bait: 'Live mullet, poppers, topwater plugs, casting lures' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'medium',   bestMonths: 'Jul to Nov',     waterTemp: '74 to 82°F', weather: 'Warm calm offshore conditions',                   current: 'Offshore current breaks, Pacific-Cortez mixing',  bait: 'Live bait, cedar plugs, poppers, chunking' },
    { species: 'striped-marlin', name: 'Striped Marlin', frequency: 'rare',     bestMonths: 'Nov to Mar',     waterTemp: '70 to 76°F', weather: 'Calm seas, light morning breeze',                 current: 'Deep water current edges',                         bait: 'Live mackerel, caballito, trolling lures' },
  ],


  // === SEA OF CORTEZ ===

  // --- Upper Cortez (El Golfo → Gonzaga) ---

  'el-golfo': [
    { species: 'corvina',       name: 'Gulf Corvina',    frequency: 'frequent', bestMonths: 'Feb to Apr',     waterTemp: '58 to 68°F', weather: 'Cool mornings, calm winds, clear skies',          current: 'Extreme tidal currents (20+ ft tides) in shallow flats near Colorado River delta', bait: 'Live shrimp, cut mullet (lisa), soft plastics, croaker rigs' },
    { species: 'triggerfish',   name: 'Triggerfish',     frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '62 to 82°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Rocky reef with extreme tidal flow',               bait: 'Cut squid, small crabs, shrimp pieces' },
    { species: 'sierra',        name: 'Sierra',          frequency: 'frequent', bestMonths: 'Nov to Mar',     waterTemp: '55 to 66°F', weather: 'Cool mornings, norte winds easing by midday',     current: 'Tidal flow along shoreline structure',             bait: 'Trolling Rapalas, spoons, small feathers' },
    { species: 'white-seabass', name: 'White Seabass',   frequency: 'medium',   bestMonths: 'Feb to May',     waterTemp: '60 to 68°F', weather: 'Pre-dawn calm, overcast skies',                   current: 'Deep channels with extreme tidal current',         bait: 'Live squid, large sardina, swimbaits' },
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'rare',     bestMonths: 'Mar to May',     waterTemp: '64 to 70°F', weather: 'Calm days with warming water',                    current: 'Channel currents near rocky structure',            bait: 'Live sardina, iron jigs, yo-yo jigs' },
  ],

  'san-felipe': [
    { species: 'corvina',       name: 'Corvina',         frequency: 'frequent', bestMonths: 'Dec to Apr',     waterTemp: '55 to 68°F', weather: 'Cool mornings, calm winds',                       current: 'Extreme tidal currents (20+ ft tides) in shallow flats', bait: 'Live shrimp, cut mullet (lisa), soft plastics, croaker rigs' },
    { species: 'triggerfish',   name: 'Triggerfish',     frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '58 to 88°F', weather: 'Calm mornings, hot afternoons in summer',         current: 'Rocky reef with strong tidal flow',                bait: 'Cut squid, small crabs, shrimp pieces' },
    { species: 'sierra',        name: 'Sierra',          frequency: 'frequent', bestMonths: 'Nov to Mar',     waterTemp: '55 to 66°F', weather: 'Cool mornings, norte winds easing midday',        current: 'Tidal flow along shoreline',                       bait: 'Trolling Rapalas, spoons, small feathers' },
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'medium',   bestMonths: 'Year-round',  waterTemp: '60 to 82°F', weather: 'Calm mornings, moderate afternoon heat',          current: 'Rocky structure with strong tidal current',        bait: 'Live sardina, swimbaits, dropper loop with squid' },
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'medium',   bestMonths: 'Mar to May',     waterTemp: '64 to 72°F', weather: 'Calm spring days, warming water',                 current: 'Channel currents near Consag Rock and Enchanted Islands', bait: 'Live sardina, iron jigs, yo-yo jigs' },
    { species: 'white-seabass', name: 'White Seabass',   frequency: 'rare',     bestMonths: 'Feb to May',     waterTemp: '60 to 68°F', weather: 'Pre-dawn calm, overcast skies',                   current: 'Deep channels with extreme tidal flow',            bait: 'Live squid, large sardina, swimbaits' },
  ],

  'puertecitos': [
    { species: 'triggerfish',   name: 'Triggerfish',     frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '58 to 88°F', weather: 'Calm mornings, hot afternoons in summer',         current: 'Rocky reef with strong tidal current',             bait: 'Cut squid, small crabs, shrimp pieces' },
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '60 to 84°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Rocky structure near Enchanted Islands with tidal flow', bait: 'Live sardina, swimbaits, dropper loop with squid' },
    { species: 'corvina',       name: 'Corvina',         frequency: 'frequent', bestMonths: 'Dec to Apr',     waterTemp: '55 to 68°F', weather: 'Cool mornings, calm winds',                       current: 'Sandy flats with extreme tidal flow (Corvina Beach)', bait: 'Live shrimp, cut mullet (lisa), soft plastics' },
    { species: 'sierra',        name: 'Sierra',          frequency: 'medium',   bestMonths: 'Nov to Mar',     waterTemp: '55 to 66°F', weather: 'Cool mornings, norte winds easing',               current: 'Tidal flow along rocky shoreline',                 bait: 'Trolling Rapalas, spoons, small feathers' },
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'rare',     bestMonths: 'Mar to May',     waterTemp: '64 to 72°F', weather: 'Calm spring days, warming water',                 current: 'Channel currents near Enchanted Islands',          bait: 'Live sardina, iron jigs, yo-yo jigs' },
  ],

  'gonzaga-bay': [
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Mar to Jun',     waterTemp: '64 to 74°F', weather: 'Calm mornings, morning bite best',                current: 'Deep pinnacles off Islas Encantadas, Golden Reef', bait: 'Iron jigs, live sardina, yo-yo jigs (15-30lb fish)' },
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '62 to 82°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Rocky reef and pinnacle structure with tidal flow', bait: 'Live sardina, swimbaits, dropper loop with squid' },
    { species: 'sierra',        name: 'Sierra',          frequency: 'frequent', bestMonths: 'Nov to Apr',     waterTemp: '58 to 68°F', weather: 'Cool mornings, norte winds easing midday',        current: 'Tidal flow along rocky shoreline',                 bait: 'Trolling Rapalas, spoons, small feathers' },
    { species: 'grouper',       name: 'Grouper',         frequency: 'medium',   bestMonths: 'Apr to Oct',     waterTemp: '68 to 82°F', weather: 'Warm calm mornings, light winds',                 current: 'Deep rocky structure near Enchanted Islands',      bait: 'Heavy jigs, cut bait, live bait near bottom' },
    { species: 'corvina',       name: 'Corvina',         frequency: 'medium',   bestMonths: 'Dec to Apr',     waterTemp: '58 to 68°F', weather: 'Cool mornings, calm winds',                       current: 'Sandy flats near rocky structure',                 bait: 'Live shrimp, cut mullet, soft plastics' },
    { species: 'white-seabass', name: 'White Seabass',   frequency: 'rare',     bestMonths: 'Feb to May',     waterTemp: '60 to 68°F', weather: 'Pre-dawn calm, cool mornings',                    current: 'Deep channels with tidal current',                 bait: 'Live squid, large sardina, swimbaits' },
  ],

  // --- Bahia de los Angeles ---

  'bahia-angeles': [
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Mar to Jun',     waterTemp: '65 to 74°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Channel currents between Midriff Islands',        bait: 'Live sardina, iron jigs, yo-yo jigs, surface iron, Rapalas' },
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '64 to 80°F', weather: 'Calm mornings, hot afternoons in summer',         current: 'Rocky reef structure around Midriff Islands',     bait: 'Live sardina, swimbaits, dropper loop with squid' },
    { species: 'grouper',       name: 'Grouper',         frequency: 'medium',   bestMonths: 'Apr to Oct',     waterTemp: '68 to 82°F', weather: 'Warm calm mornings, light winds',                 current: 'Deep rocky structure near island drop-offs (50-800ft)', bait: 'Knife jigs, heavy yo-yo jigs, cut bait, live bait near bottom' },
    { species: 'dorado',        name: 'Dorado',          frequency: 'medium',   bestMonths: 'Jul to Oct',     waterTemp: '78 to 86°F', weather: 'Hot calm days, scattered clouds',                 current: 'Current lines with debris offshore',               bait: 'Live bait (sardina, caballito), trolling lures, feathers' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'rare',     bestMonths: 'Aug to Oct',     waterTemp: '80 to 86°F', weather: 'Hot calm days, clear water offshore',             current: 'Deep offshore thermoclines near Midriff Islands',  bait: 'Live bait, cedar plugs, poppers, chunking' },
    { species: 'golden-grouper', name: 'Golden Grouper', frequency: 'rare',     bestMonths: 'May to Sep',     waterTemp: '72 to 82°F', weather: 'Warm calm days, light winds',                     current: 'Deep pinnacles and rocky structure around islands (200-600ft)', bait: 'Heavy knife jigs, cut bait, large live bait near bottom' },
  ],

  // --- Mid Cortez (Santa Rosalia → Bahia Concepcion) ---

  'santa-rosalia': [
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Feb to Jun',     waterTemp: '66 to 76°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Channel currents near offshore islands',           bait: 'Live sardina, iron jigs, yo-yo jigs' },
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '65 to 82°F', weather: 'Calm mornings, hot afternoons in summer',         current: 'Rocky reef structure with moderate current',       bait: 'Live sardina, swimbaits, dropper loop with squid' },
    { species: 'triggerfish',   name: 'Triggerfish',     frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '66 to 82°F', weather: 'Calm mornings, moderate winds',                   current: 'Rocky reef with tidal flow',                       bait: 'Cut squid, small crabs, shrimp pieces' },
    { species: 'pargo',         name: 'Pargo',           frequency: 'medium',   bestMonths: 'Apr to Oct',     waterTemp: '70 to 82°F', weather: 'Warm calm mornings, light winds',                 current: 'Near rocky structure with tidal current',          bait: 'Cut bait, squid, dropper loop near structure' },
    { species: 'dorado',        name: 'Dorado',          frequency: 'rare',     bestMonths: 'Jul to Oct',     waterTemp: '80 to 85°F', weather: 'Hot calm days, scattered clouds',                 current: 'Current lines and debris offshore',                bait: 'Live bait (sardina, caballito), trolling lures' },
  ],

  'punta-chivato': [
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Feb to Jun',     waterTemp: '66 to 76°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Channel currents near offshore islands',           bait: 'Live sardina, iron jigs, yo-yo jigs, Rapalas' },
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '66 to 82°F', weather: 'Calm mornings, hot afternoons in summer',         current: 'Rocky reef structure around point',                bait: 'Live sardina, swimbaits, dropper loop with squid' },
    { species: 'triggerfish',   name: 'Triggerfish',     frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '66 to 82°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Rocky reef with tidal flow',                       bait: 'Cut squid, small crabs, shrimp pieces' },
    { species: 'pargo',         name: 'Pargo',           frequency: 'medium',   bestMonths: 'Apr to Oct',     waterTemp: '70 to 82°F', weather: 'Warm calm mornings',                              current: 'Near rocky structure with tidal current',          bait: 'Cut bait, squid, dropper loop near structure' },
    { species: 'dorado',        name: 'Dorado',          frequency: 'medium',   bestMonths: 'Jul to Oct',     waterTemp: '80 to 85°F', weather: 'Hot calm days, scattered clouds',                 current: 'Current lines with debris offshore',               bait: 'Live bait (sardina, caballito), trolling lures, feathers' },
    { species: 'grouper',       name: 'Grouper',         frequency: 'rare',     bestMonths: 'Apr to Oct',     waterTemp: '70 to 82°F', weather: 'Warm calm days, light swell',                     current: 'Deep rocky structure near drop-offs',              bait: 'Heavy jigs, cut bait, live bait near bottom' },
  ],

  'mulege': [
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Feb to Jun',     waterTemp: '66 to 76°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Channel currents near Isla San Marcos and Tortuga', bait: 'Live sardina, iron jigs, yo-yo jigs' },
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '66 to 84°F', weather: 'Calm mornings, hot afternoons in summer',         current: 'Rocky structure near Mulege river mouth and reefs', bait: 'Live sardina, swimbaits, dropper loop with squid' },
    { species: 'triggerfish',   name: 'Triggerfish',     frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '66 to 84°F', weather: 'Calm mornings, moderate winds',                   current: 'Rocky reef with tidal current',                    bait: 'Cut squid, small crabs, shrimp pieces' },
    { species: 'pargo',         name: 'Pargo',           frequency: 'medium',   bestMonths: 'Apr to Oct',     waterTemp: '70 to 84°F', weather: 'Warm calm mornings, light winds, avoid chubascos Sep to Oct', current: 'Near rocky structure with tidal flow', bait: 'Cut bait, squid, strip bait, dropper loop near structure' },
    { species: 'dorado',        name: 'Dorado',          frequency: 'medium',   bestMonths: 'Jul to Oct',     waterTemp: '80 to 86°F', weather: 'Hot calm days, scattered clouds',                 current: 'Current lines offshore',                           bait: 'Live sardina, caballito, trolling lures, feathers' },
    { species: 'striped-marlin', name: 'Striped Marlin', frequency: 'rare',     bestMonths: 'Nov to Feb',     waterTemp: '72 to 78°F', weather: 'Calm seas, light norte winds',                    current: 'Deep water current edges offshore',                bait: 'Live mackerel, caballito, trolling lures' },
  ],

  'bahia-concepcion': [
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '66 to 84°F', weather: 'Calm mornings, hot afternoons in summer',         current: 'Rocky structure around bay islands',               bait: 'Live sardina, swimbaits, dropper loop with squid' },
    { species: 'triggerfish',   name: 'Triggerfish',     frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '66 to 84°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Rocky reef with tidal flow within bay',            bait: 'Cut squid, small crabs, shrimp pieces' },
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Feb to Jun',     waterTemp: '66 to 76°F', weather: 'Calm mornings, moderate winds',                   current: 'Channel currents at bay entrance',                 bait: 'Live sardina, iron jigs, yo-yo jigs' },
    { species: 'pargo',         name: 'Pargo',           frequency: 'medium',   bestMonths: 'Apr to Oct',     waterTemp: '70 to 84°F', weather: 'Warm calm mornings, light winds',                 current: 'Near rocky structure with tidal current',          bait: 'Cut bait, squid, dropper loop near structure' },
    { species: 'dorado',        name: 'Dorado',          frequency: 'rare',     bestMonths: 'Aug to Oct',     waterTemp: '82 to 85°F', weather: 'Hot calm days, warm water in bay',                current: 'Current lines near bay entrance',                  bait: 'Live bait (sardina, caballito), trolling lures' },
  ],

  // --- Loreto area ---

  'loreto': [
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Nov to May',     waterTemp: '66 to 76°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Channel currents between Coronado and Carmen islands', bait: 'Live sardina, iron jigs, yo-yo jigs, plastics, Rapalas' },
    { species: 'dorado',        name: 'Dorado',          frequency: 'frequent', bestMonths: 'May to Nov',     waterTemp: '78 to 86°F', weather: 'Hot calm mornings, scattered clouds',             current: 'Current lines and debris near Coronado and Carmen islands', bait: 'Live caballito, sardina, trolling lures, feathers' },
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '66 to 84°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Rocky reef structure around Coronado, Carmen, Danzante', bait: 'Live sardina, swimbaits, iron jigs, dropper loop with squid' },
    { species: 'roosterfish',   name: 'Roosterfish',     frequency: 'medium',   bestMonths: 'May to Nov',     waterTemp: '74 to 84°F', weather: 'Warm calm mornings, light surf on beaches',       current: 'Sandy beaches near island structure',              bait: 'Live caballito, ladyfish (lisas), mullet, slow trolling' },
    { species: 'grouper',       name: 'Grouper',         frequency: 'medium',   bestMonths: 'Apr to Oct',     waterTemp: '70 to 82°F', weather: 'Warm calm days, light winds',                     current: 'Deep rocky structure near island drop-offs',       bait: 'Heavy jigs, cut bait, live bait near bottom structure' },
    { species: 'striped-marlin', name: 'Striped Marlin', frequency: 'rare',     bestMonths: 'Nov to Mar',     waterTemp: '72 to 78°F', weather: 'Calm seas, light norte winds',                    current: 'Deep water current edges east of islands',         bait: 'Live mackerel, caballito, trolling lures' },
  ],

  'juncalito': [
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '66 to 84°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Rocky reef structure near shore',                  bait: 'Live sardina, swimbaits, dropper loop with squid' },
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Jan to Jun',     waterTemp: '66 to 76°F', weather: 'Calm mornings, moderate winds',                   current: 'Channel currents between islands',                 bait: 'Live sardina, iron jigs, yo-yo jigs' },
    { species: 'dorado',        name: 'Dorado',          frequency: 'medium',   bestMonths: 'Jul to Nov',     waterTemp: '78 to 85°F', weather: 'Hot calm mornings, scattered clouds',             current: 'Current lines near offshore islands',              bait: 'Live bait (sardina, caballito), trolling lures, feathers' },
    { species: 'pargo',         name: 'Pargo',           frequency: 'medium',   bestMonths: 'Apr to Oct',     waterTemp: '70 to 84°F', weather: 'Warm calm mornings, light winds',                 current: 'Near rocky structure with tidal flow',             bait: 'Cut bait, squid, dropper loop near structure' },
    { species: 'striped-marlin', name: 'Striped Marlin', frequency: 'rare',     bestMonths: 'Nov to Mar',     waterTemp: '72 to 78°F', weather: 'Calm seas, light norte winds',                    current: 'Deep water current edges offshore',                bait: 'Live bait (mackerel, caballito), trolling lures' },
  ],

  'puerto-escondido': [
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Jan to Jun',     waterTemp: '66 to 76°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Channel currents near Danzante and Carmen islands', bait: 'Live sardina, iron jigs, yo-yo jigs, Rapalas' },
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '66 to 84°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Rocky reef structure around islands',              bait: 'Live sardina, swimbaits, dropper loop with squid' },
    { species: 'dorado',        name: 'Dorado',          frequency: 'frequent', bestMonths: 'Jun to Nov',     waterTemp: '78 to 85°F', weather: 'Hot calm mornings, scattered clouds',             current: 'Current lines with debris near islands',           bait: 'Live bait (sardina, caballito), trolling lures, feathers' },
    { species: 'roosterfish',   name: 'Roosterfish',     frequency: 'medium',   bestMonths: 'May to Nov',     waterTemp: '74 to 84°F', weather: 'Warm calm mornings, light surf',                  current: 'Sandy beaches near rocky points',                  bait: 'Live ladyfish (lisas), mullet, caballito, slow trolling' },
    { species: 'grouper',       name: 'Grouper',         frequency: 'medium',   bestMonths: 'Apr to Oct',     waterTemp: '70 to 82°F', weather: 'Warm calm days, light winds',                     current: 'Deep rocky structure near island drop-offs',       bait: 'Heavy jigs, cut bait, live bait near bottom' },
    { species: 'striped-marlin', name: 'Striped Marlin', frequency: 'rare',     bestMonths: 'Nov to Mar',     waterTemp: '72 to 78°F', weather: 'Calm seas, light norte winds',                    current: 'Deep offshore current edges',                      bait: 'Live bait (mackerel, caballito), trolling lures' },
  ],

  'agua-verde': [
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '68 to 84°F', weather: 'Calm mornings, hot afternoons in summer',         current: 'Rocky reef structure around Agua Verde bay',       bait: 'Live sardina, swimbaits, dropper loop with squid' },
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Jan to Jun',     waterTemp: '66 to 76°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Channel currents near offshore islands',           bait: 'Live sardina, iron jigs, yo-yo jigs (fish to 20lb+)' },
    { species: 'pargo',         name: 'Yellow Pargo',    frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '70 to 84°F', weather: 'Calm mornings, light winds',                      current: 'Near rocky structure with tidal current',          bait: 'Cut bait, squid, strip bait, dropper loop near structure' },
    { species: 'dorado',        name: 'Dorado',          frequency: 'medium',   bestMonths: 'Jul to Nov',     waterTemp: '78 to 86°F', weather: 'Hot calm days, scattered clouds',                 current: 'Current lines offshore',                           bait: 'Live caballito, sardina, trolling lures, feathers' },
    { species: 'roosterfish',   name: 'Roosterfish',     frequency: 'medium',   bestMonths: 'May to Nov',     waterTemp: '74 to 84°F', weather: 'Warm calm mornings, light surf on beach',         current: 'Sandy beaches near rocky points',                  bait: 'Live caballito, ladyfish (lisas), mullet, slow trolling' },
    { species: 'grouper',       name: 'Grouper',         frequency: 'rare',     bestMonths: 'Apr to Oct',     waterTemp: '70 to 82°F', weather: 'Warm calm days, light winds',                     current: 'Deep rocky structure near drop-offs',              bait: 'Heavy jigs, cut bait, live bait near bottom structure' },
  ],

  'san-evaristo': [
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '68 to 84°F', weather: 'Calm mornings, hot afternoons in summer',         current: 'Rocky reef structure with tidal flow',             bait: 'Live sardina, swimbaits, dropper loop with squid' },
    { species: 'pargo',         name: 'Pargo',           frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '70 to 84°F', weather: 'Calm mornings, light winds',                      current: 'Near rocky structure with tidal current',          bait: 'Cut bait, squid, dropper loop near structure' },
    { species: 'yellowtail',    name: 'Yellowtail',      frequency: 'frequent', bestMonths: 'Jan to Jun',     waterTemp: '66 to 76°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Channel currents near San José Island',           bait: 'Live sardina, iron jigs, yo-yo jigs' },
    { species: 'dorado',        name: 'Dorado',          frequency: 'medium',   bestMonths: 'Jul to Nov',     waterTemp: '78 to 86°F', weather: 'Hot calm mornings, scattered clouds',             current: 'Current lines and debris offshore',                bait: 'Live bait (sardina, caballito), trolling lures, feathers' },
    { species: 'roosterfish',   name: 'Roosterfish',     frequency: 'medium',   bestMonths: 'May to Nov',     waterTemp: '74 to 84°F', weather: 'Warm calm mornings, light surf',                  current: 'Sandy beaches near rocky structure',               bait: 'Live ladyfish (lisas), mullet, caballito, slow trolling' },
    { species: 'striped-marlin', name: 'Striped Marlin', frequency: 'rare',     bestMonths: 'Nov to Mar',     waterTemp: '72 to 78°F', weather: 'Calm seas, light norte winds',                    current: 'Deep water current edges east of island',          bait: 'Live bait (mackerel, caballito), trolling lures' },
  ],

  // --- La Paz area ---

  'la-paz': [
    { species: 'dorado',        name: 'Dorado',          frequency: 'frequent', bestMonths: 'Jun to Nov',     waterTemp: '78 to 86°F', weather: 'Hot calm mornings before coromuel winds build',   current: 'Current lines near Cerralvo and Espíritu Santo islands', bait: 'Live caballito, sardina, trolling lures, feathers' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'frequent', bestMonths: 'Jul to Nov',     waterTemp: '78 to 86°F', weather: 'Hot calm days, clean offshore water',             current: 'Offshore thermoclines near Cerralvo Island',       bait: 'Live caballito, cedar plugs, poppers, chunking' },
    { species: 'pargo',         name: 'Pargo',           frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '72 to 86°F', weather: 'Calm mornings before coromuel winds',             current: 'Near rocky structure with tidal current',          bait: 'Cut bait, squid, strip bait, dropper loop near structure' },
    { species: 'cabrilla',      name: 'Cabrilla',        frequency: 'frequent', bestMonths: 'Year-round',  waterTemp: '72 to 86°F', weather: 'Calm mornings, moderate afternoon coromuel',      current: 'Rocky reef structure around Espíritu Santo Island', bait: 'Live sardina, swimbaits, dropper loop with squid' },
    { species: 'roosterfish',   name: 'Roosterfish',     frequency: 'medium',   bestMonths: 'May to Jun',     waterTemp: '76 to 86°F', weather: 'Warm calm mornings, light surf on beaches',       current: 'Sandy beaches near Espíritu Santo, shallow white sand', bait: 'Live caballito, ladyfish (lisas), mullet, slow trolling' },
    { species: 'wahoo',         name: 'Wahoo',           frequency: 'rare',     bestMonths: 'Jun to Oct',     waterTemp: '80 to 88°F', weather: 'Hot calm days, clean blue water offshore',        current: 'High-current areas near Cerralvo Island',          bait: 'High-speed trolling, Rapalas, jet heads, wire leader required' },
  ],

  'la-ventana': [
    { species: 'dorado',        name: 'Dorado',          frequency: 'frequent', bestMonths: 'Jun to Nov',     waterTemp: '78 to 86°F', weather: 'Hot calm mornings, strong norte winds in winter', current: 'Current lines near Cerralvo Island',               bait: 'Live caballito, sardina, trolling lures, feathers' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'frequent', bestMonths: 'Jul to Nov',     waterTemp: '78 to 86°F', weather: 'Hot calm days, clean water',                      current: 'Thermoclines and current edges near Cerralvo',     bait: 'Live caballito, cedar plugs, poppers, chunking' },
    { species: 'roosterfish',   name: 'Roosterfish',     frequency: 'medium',   bestMonths: 'May to Jun',     waterTemp: '76 to 86°F', weather: 'Warm calm mornings, light surf on sandy beach',   current: 'Sandy beaches with incoming tide, Punta Arenas to Bahia Muertos', bait: 'Live sardina, ladyfish, caballito, slow trolling' },
    { species: 'pargo',         name: 'Pargo',           frequency: 'medium',   bestMonths: 'Year-round',  waterTemp: '72 to 86°F', weather: 'Calm mornings, light afternoon winds',            current: 'Near rocky structure with tidal flow',             bait: 'Cut bait, squid, strip bait, dropper loop near structure' },
    { species: 'striped-marlin', name: 'Striped Marlin', frequency: 'rare',     bestMonths: 'Oct to Mar',     waterTemp: '74 to 80°F', weather: 'Calm seas, light norte winds',                    current: 'Deep water current edges east of Cerralvo',        bait: 'Live mackerel, caballito, trolling lures' },
    { species: 'wahoo',         name: 'Wahoo',           frequency: 'rare',     bestMonths: 'Jun to Oct',     waterTemp: '80 to 88°F', weather: 'Hot calm days, clean blue water',                  current: 'High-current areas near Cerralvo Island',          bait: 'High-speed trolling, Rapalas, jet heads, wire leader required' },
  ],

  'bahia-muertos': [
    { species: 'dorado',        name: 'Dorado',          frequency: 'frequent', bestMonths: 'Jun to Nov',     waterTemp: '78 to 86°F', weather: 'Hot calm mornings, scattered clouds',             current: 'Current lines in open water south of bay',         bait: 'Live caballito, sardina, trolling lures, feathers' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'frequent', bestMonths: 'Jul to Nov',     waterTemp: '78 to 86°F', weather: 'Hot calm days, clean water offshore',             current: 'Thermoclines and current breaks minutes from launch', bait: 'Live caballito, cedar plugs, poppers, chunking' },
    { species: 'roosterfish',   name: 'Roosterfish',     frequency: 'medium',   bestMonths: 'May to Jun',     waterTemp: '76 to 86°F', weather: 'Warm calm mornings, light surf',                  current: 'Sandy beaches between Punta Arenas and south of bay', bait: 'Live sardina, ladyfish, caballito, slow trolling' },
    { species: 'pargo',         name: 'Pargo',           frequency: 'medium',   bestMonths: 'Year-round',  waterTemp: '72 to 86°F', weather: 'Calm mornings, moderate afternoon winds',         current: 'Near rocky structure with tidal current',          bait: 'Cut bait, squid, strip bait, dropper loop near structure' },
    { species: 'striped-marlin', name: 'Striped Marlin', frequency: 'rare',     bestMonths: 'Oct to Mar',     waterTemp: '74 to 80°F', weather: 'Calm seas, light norte winds',                    current: 'Deep water current edges offshore',                bait: 'Live mackerel, caballito, trolling lures, ballyhoo' },
    { species: 'wahoo',         name: 'Wahoo',           frequency: 'rare',     bestMonths: 'Jun to Oct',     waterTemp: '80 to 88°F', weather: 'Hot calm days, clean blue water',                  current: 'High-current areas offshore of bay',               bait: 'High-speed trolling, Rapalas, jet heads, wire leader required' },
  ],

  'punta-pescadero': [
    { species: 'dorado',        name: 'Dorado',          frequency: 'frequent', bestMonths: 'Jun to Nov',     waterTemp: '78 to 86°F', weather: 'Hot calm mornings, scattered clouds',             current: 'Current lines near Cerralvo channel',              bait: 'Live caballito, goggle-eyes, trolling lures, feathers' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'frequent', bestMonths: 'Jun to Nov',     waterTemp: '78 to 86°F', weather: 'Hot calm days, clean water',                      current: 'Thermoclines and current edges near Cerralvo',     bait: 'Live caballito, cedar plugs, poppers, chunking' },
    { species: 'roosterfish',   name: 'Roosterfish',     frequency: 'frequent', bestMonths: 'May to Nov',     waterTemp: '76 to 86°F', weather: 'Warm calm mornings, light surf',                  current: 'Sandy beaches near the point, shallow sand flats', bait: 'Live sardina, caballito, mullet, slow trolling' },
    { species: 'pargo',         name: 'Pargo',           frequency: 'medium',   bestMonths: 'Year-round',  waterTemp: '72 to 86°F', weather: 'Calm mornings, light afternoon winds',            current: 'Near rocky structure with tidal flow',             bait: 'Cut bait, squid, strip bait, dropper loop near structure' },
    { species: 'striped-marlin', name: 'Striped Marlin', frequency: 'rare',     bestMonths: 'Oct to Mar',     waterTemp: '74 to 80°F', weather: 'Calm seas, light norte winds',                    current: 'Deep water current edges east of Cerralvo',        bait: 'Ballyhoo, live mackerel, caballito, trolling lures' },
    { species: 'wahoo',         name: 'Wahoo',           frequency: 'rare',     bestMonths: 'Jun to Oct',     waterTemp: '80 to 88°F', weather: 'Hot calm days, clean blue water',                  current: 'High-current areas offshore near Cerralvo',        bait: 'High-speed trolling, Rapalas, jet heads, wire leader required' },
  ],

  // --- East Cape / Los Barriles area ---

  'los-barriles': [
    { species: 'dorado',        name: 'Dorado',          frequency: 'frequent', bestMonths: 'Jun to Nov',     waterTemp: '78 to 88°F', weather: 'Hot calm mornings, scattered clouds',             current: 'Current lines with debris offshore',               bait: 'Live caballito, goggle-eyes, trolling lures, feathers' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'frequent', bestMonths: 'May to Dec',     waterTemp: '76 to 86°F', weather: 'Hot calm days, clean water offshore',             current: 'Offshore thermoclines and current edges',          bait: 'Live caballito, cedar plugs, chunk squid, lures' },
    { species: 'roosterfish',   name: 'Roosterfish',     frequency: 'frequent', bestMonths: 'May to Nov',     waterTemp: '76 to 86°F', weather: 'Warm calm mornings, light surf on beach',         current: 'Sandy beaches with incoming tide',                 bait: 'Live sardina, caballito, mullet, slow trolling' },
    { species: 'striped-marlin', name: 'Striped Marlin', frequency: 'medium',   bestMonths: 'Oct to Mar',     waterTemp: '74 to 80°F', weather: 'Calm seas, light norte winds',                    current: 'Deep water current edges offshore',                bait: 'Ballyhoo, live mackerel, caballito, trolling lures' },
    { species: 'wahoo',         name: 'Wahoo',           frequency: 'medium',   bestMonths: 'Jun to Oct',     waterTemp: '80 to 88°F', weather: 'Hot calm days, clean blue water',                  current: 'High-current areas near offshore structure',       bait: 'Ballyhoo, high-speed trolling, Rapalas, jet heads' },
    { species: 'blue-marlin',   name: 'Blue Marlin',     frequency: 'rare',     bestMonths: 'Jul to Oct',     waterTemp: '82 to 88°F', weather: 'Hot calm days, deep blue water',                  current: 'Deep offshore current edges',                      bait: 'Large trolling lures (marlin lures), live tuna, skip baits' },
  ],

  'la-ribera': [
    { species: 'dorado',        name: 'Dorado',          frequency: 'frequent', bestMonths: 'Jun to Nov',     waterTemp: '78 to 88°F', weather: 'Hot calm mornings, scattered clouds',             current: 'Current lines offshore',                           bait: 'Live caballito, goggle-eyes, trolling lures, feathers' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'frequent', bestMonths: 'May to Dec',     waterTemp: '76 to 86°F', weather: 'Hot calm days, clean water',                      current: 'Thermoclines and current edges offshore',          bait: 'Live caballito, cedar plugs, poppers, chunking' },
    { species: 'roosterfish',   name: 'Roosterfish',     frequency: 'frequent', bestMonths: 'May to Nov',     waterTemp: '76 to 86°F', weather: 'Warm calm mornings, light surf',                  current: 'Sandy beaches near rocky structure',               bait: 'Live sardina, caballito, mullet, slow trolling' },
    { species: 'striped-marlin', name: 'Striped Marlin', frequency: 'medium',   bestMonths: 'Oct to Mar',     waterTemp: '74 to 80°F', weather: 'Calm seas, light norte winds',                    current: 'Deep water current edges',                         bait: 'Ballyhoo, live mackerel, caballito, trolling lures' },
    { species: 'wahoo',         name: 'Wahoo',           frequency: 'medium',   bestMonths: 'Jun to Oct',     waterTemp: '80 to 88°F', weather: 'Hot calm days, clean blue water',                  current: 'High-current areas near offshore structure',       bait: 'Ballyhoo, high-speed trolling, Rapalas, jet heads' },
    { species: 'blue-marlin',   name: 'Blue Marlin',     frequency: 'rare',     bestMonths: 'Jul to Oct',     waterTemp: '82 to 88°F', weather: 'Hot calm days, deep blue water offshore',         current: 'Deep offshore current edges',                      bait: 'Large trolling lures (marlin lures), live tuna, skip baits' },
  ],

  'east-cape': [
    { species: 'dorado',        name: 'Dorado',          frequency: 'frequent', bestMonths: 'Jun to Nov',     waterTemp: '78 to 88°F', weather: 'Hot calm mornings, scattered clouds',             current: 'Current lines with debris offshore',               bait: 'Live caballito, goggle-eyes, trolling lures, feathers' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'frequent', bestMonths: 'May to Dec',     waterTemp: '76 to 88°F', weather: 'Hot calm days, clean water offshore',             current: 'Offshore thermoclines and current edges',          bait: 'Live caballito, cedar plugs, poppers, chunking' },
    { species: 'roosterfish',   name: 'Roosterfish',     frequency: 'frequent', bestMonths: 'May to Nov',     waterTemp: '76 to 86°F', weather: 'Warm calm mornings, light surf on beach',         current: 'Sandy beaches and rocky points along East Cape',   bait: 'Live sardina, caballito, mullet, slow trolling' },
    { species: 'striped-marlin', name: 'Striped Marlin', frequency: 'medium',   bestMonths: 'Oct to Mar',     waterTemp: '74 to 80°F', weather: 'Calm seas, light norte winds',                    current: 'Deep water current edges offshore',                bait: 'Ballyhoo, live mackerel, caballito, trolling lures' },
    { species: 'wahoo',         name: 'Wahoo',           frequency: 'medium',   bestMonths: 'Jun to Oct',     waterTemp: '80 to 88°F', weather: 'Hot calm days, clean blue water',                  current: 'High-current areas near offshore structure',       bait: 'Ballyhoo, high-speed trolling, Rapalas, jet heads, wire leader' },
    { species: 'blue-marlin',   name: 'Blue Marlin',     frequency: 'rare',     bestMonths: 'Jul to Oct',     waterTemp: '82 to 88°F', weather: 'Hot calm days, deep blue water',                  current: 'Deep offshore current edges, blue water',          bait: 'Large trolling lures (marlin lures), live tuna, skip baits' },
  ],


  // === BOTH (Pacific & Cortez) ===

  'cabo': [
    { species: 'striped-marlin', name: 'Striped Marlin', frequency: 'frequent', bestMonths: 'Oct to Mar',     waterTemp: '74 to 82°F', weather: 'Calm seas, light morning breeze',                 current: 'Where Pacific meets Cortez at Land\'s End, deep current edges', bait: 'Live mackerel, caballito, trolling lures, ballyhoo' },
    { species: 'dorado',        name: 'Dorado',          frequency: 'frequent', bestMonths: 'Jun to Nov',     waterTemp: '78 to 86°F', weather: 'Hot calm mornings, scattered clouds',             current: 'Current lines with debris, Pacific and Cortez mixing zone', bait: 'Live caballito, goggle-eyes, trolling lures, feathers' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'frequent', bestMonths: 'May to Dec',     waterTemp: '76 to 86°F', weather: 'Hot calm days, clean water offshore',             current: 'Offshore thermoclines near Gordo Banks and Golden Gate', bait: 'Live caballito, cedar plugs, poppers, chunking' },
    { species: 'wahoo',         name: 'Wahoo',           frequency: 'medium',   bestMonths: 'Jun to Oct',     waterTemp: '80 to 88°F', weather: 'Hot calm days, clean blue water',                  current: 'High-current areas near offshore banks',           bait: 'High-speed trolling, Rapalas, jet heads, wire leader required' },
    { species: 'roosterfish',   name: 'Roosterfish',     frequency: 'medium',   bestMonths: 'May to Nov',     waterTemp: '76 to 86°F', weather: 'Warm calm mornings, light surf on sandy beaches', current: 'Sandy beaches near rocky points at Land\'s End',   bait: 'Live caballito, ladyfish (lisas), mullet, slow trolling' },
    { species: 'blue-marlin',   name: 'Blue Marlin',     frequency: 'rare',     bestMonths: 'Jun to Nov',     waterTemp: '82 to 88°F', weather: 'Hot calm days, deep blue water offshore',         current: 'Deep offshore current edges where Pacific meets Cortez', bait: 'Large trolling lures (marlin lures), live tuna, skip baits' },
  ],

  'san-jose-del-cabo': [
    { species: 'dorado',        name: 'Dorado',          frequency: 'frequent', bestMonths: 'Jun to Nov',     waterTemp: '78 to 86°F', weather: 'Hot calm mornings, scattered clouds',             current: 'Current lines with debris near Gordo Banks',       bait: 'Live caballito, goggle-eyes, trolling lures, feathers' },
    { species: 'yellowfin',     name: 'Yellowfin Tuna',  frequency: 'frequent', bestMonths: 'May to Dec',     waterTemp: '76 to 86°F', weather: 'Hot calm days, clean water offshore',             current: 'Gordo Banks thermoclines and current edges',       bait: 'Live caballito, cedar plugs, poppers, chunking' },
    { species: 'roosterfish',   name: 'Roosterfish',     frequency: 'frequent', bestMonths: 'May to Nov',     waterTemp: '76 to 86°F', weather: 'Warm calm mornings, light surf on beach',         current: 'Sandy beaches near San Jose estuary and rocky points', bait: 'Live caballito, ladyfish (lisas), mullet, slow trolling' },
    { species: 'striped-marlin', name: 'Striped Marlin', frequency: 'medium',   bestMonths: 'Oct to Mar',     waterTemp: '74 to 80°F', weather: 'Calm seas, light norte winds',                    current: 'Deep water current edges near Gordo Banks',        bait: 'Live mackerel, caballito, trolling lures, ballyhoo' },
    { species: 'wahoo',         name: 'Wahoo',           frequency: 'medium',   bestMonths: 'Jun to Oct',     waterTemp: '80 to 88°F', weather: 'Hot calm days, clean blue water',                  current: 'High-current areas near offshore banks',           bait: 'High-speed trolling, Rapalas, jet heads, wire leader required' },
    { species: 'blue-marlin',   name: 'Blue Marlin',     frequency: 'rare',     bestMonths: 'Jun to Nov',     waterTemp: '82 to 88°F', weather: 'Hot calm days, deep blue water',                  current: 'Deep offshore current edges',                      bait: 'Large trolling lures (marlin lures), live tuna, skip baits' },
  ],
};

// Zone-group helpers for species range (real regional ranges; consumed by the hunt-map wiring in app.js)
const _PAC_REEF    = ['popotla','ensenada','erendira','colonet','san-quintin','punta-baja','isla-cedros','punta-eugenia','bahia-tortugas','bahia-asuncion'];
const _SOC_SOUTH   = ['la-paz','la-ventana','bahia-muertos','punta-pescadero','los-barriles','la-ribera','east-cape','san-jose-del-cabo','cabo'];
const _SOC_CENTRAL = ['loreto','juncalito','puerto-escondido','agua-verde','san-evaristo','bahia-concepcion','mulege','punta-chivato','santa-rosalia','bahia-angeles'];

const SPECIES_INFO = {
  // --- Billfish ---
  'blue-marlin':     { name: 'Blue Marlin',         img: 'fish/blue-marlin.jpg',      season: 'Jun to Nov' },
  'striped-marlin':  { name: 'Striped Marlin',      img: 'fish/striped-marlin.jpg',   season: 'Nov to Apr' },
  // --- Tuna ---
  'yellowfin':       { name: 'Yellowfin Tuna',     img: 'fish/yellowfin.jpg',         season: 'Jun to Dec' },
  'bluefin-tuna':    { name: 'Bluefin Tuna',        img: 'fish/bluefin-tuna.jpg',     season: 'Jun to Oct' },
  'bonito':          { name: 'Bonito',              img: 'fish/bonito.jpg',            season: 'Year-round' },
  // --- Pelagic ---
  'dorado':          { name: 'Dorado',             img: 'fish/dorado.jpg',            season: 'Jun to Nov' },
  'wahoo':           { name: 'Wahoo',               img: 'fish/wahoo.jpg',            season: 'Jun to Nov' },
  'yellowtail':      { name: 'Yellowtail',        img: 'fish/yellowtail.jpg',        season: 'Dec to Jun' },
  // --- Jacks ---
  'jack-crevalle':   { name: 'Jack Crevalle',       img: 'fish/jack-crevalle.jpg',   season: 'May to Nov' },
  'amberjack':       { name: 'Amberjack',           img: 'fish/amberjack.jpg',        season: 'Year-round' },
  // --- Roosterfish & Snook ---
  'roosterfish':     { name: 'Roosterfish',         img: 'fish/roosterfish.jpg',     season: 'May to Nov' },
  'snook':           { name: 'Snook',               img: 'fish/snook.jpg',           season: 'May to Oct' },
  'black-snook':     { name: 'Black Snook',         img: 'fish/black-snook.jpg',     season: 'May to Oct' },
  // --- Bass & Grouper ---
  'cabrilla':        { name: 'Cabrilla',            img: 'fish/cabrilla.jpg',        season: 'Year-round' },
  'grouper':         { name: 'Grouper',             img: 'fish/grouper.jpg',         season: 'Year-round' },
  'golden-grouper':  { name: 'Golden Grouper',      img: 'fish/golden-grouper.jpg',  season: 'May to Sep' },
  'calico-bass':     { name: 'Calico Bass',         img: 'fish/calico-bass.jpg',     season: 'Year-round' },
  'lingcod':         { name: 'Lingcod',             img: 'fish/lingcod.jpg',         season: 'Nov to Mar' },
  // --- Snapper ---
  'pargo':           { name: 'Pargo (Snapper)',     img: 'fish/pargo.jpg',           season: 'Year-round' },
  // --- Corvina & Croaker ---
  'corvina':         { name: 'Corvina',             img: 'fish/corvina.jpg',         season: 'Year-round' },
  'white-seabass':   { name: 'White Seabass',       img: 'fish/white-seabass.jpg',   season: 'Mar to Jul' },
  // --- Mackerel ---
  'sierra':          { name: 'Sierra Mackerel',     img: 'fish/sierra.jpg',          season: 'Nov to Apr' },
  // --- Flatfish ---
  'halibut':         { name: 'Halibut',             img: 'fish/halibut.jpg',         season: 'Year-round' },
  // --- Inshore & Reef ---
  'triggerfish':     { name: 'Triggerfish',          img: 'fish/triggerfish.jpg',     season: 'Year-round' },

  // ─── Added for hunt planner, real images + regional range (zone keys where the species genuinely occurs) ───
  // Billfish
  'black-marlin':       { name: 'Black Marlin',          img: 'fish/black-marlin.jpg',          season: 'Jun to Nov',                range: ['cabo','san-jose-del-cabo','east-cape','la-ribera','los-barriles','la-paz'] },
  'sailfish':           { name: 'Sailfish',              img: 'fish/sailfish.jpg',              season: 'Jun to Nov',                range: ['cabo','san-jose-del-cabo','east-cape','la-ribera','los-barriles','la-paz','mag-bay'] },
  'swordfish':          { name: 'Swordfish',             img: 'fish/swordfish.jpg',             season: 'Year-round (offshore)',  range: ['cabo','mag-bay','isla-cedros','ensenada'] },
  // Tuna
  'bigeye-tuna':        { name: 'Bigeye Tuna',           img: 'fish/bigeye-tuna.jpg',           season: 'Year-round (offshore)',  range: ['cabo','san-jose-del-cabo','east-cape','la-paz','mag-bay','isla-cedros'] },
  'skipjack-tuna':      { name: 'Skipjack Tuna',         img: 'fish/skipjack-tuna.jpg',         season: 'Feb to Nov',                range: [..._SOC_SOUTH,'loreto','puerto-escondido'] },
  // Bass
  'sand-bass':          { name: 'Barred Sand Bass',      img: 'fish/sand-bass.jpg',             season: 'May to Sep',                range: ['popotla','ensenada','colonet','san-quintin','punta-baja','isla-cedros'] },
  'spotted-bay-bass':   { name: 'Spotted Bay Bass',      img: 'fish/spotted-bay-bass.jpg',      season: 'Year-round',             range: ['san-quintin','mag-bay','puerto-san-carlos','san-felipe','el-golfo','la-paz'] },
  // Rockfish & reef bottomfish (cold Pacific structure + the northern/Cedros islands)
  'vermilion-rockfish': { name: 'Vermilion Rockfish',    img: 'fish/vermilion-rockfish.jpg',    season: 'Year-round',             range: _PAC_REEF },
  'bocaccio':           { name: 'Bocaccio',              img: 'fish/bocaccio.jpg',              season: 'Year-round',             range: _PAC_REEF },
  'chilipepper':        { name: 'Chilipepper Rockfish',  img: 'fish/chilipepper.jpg',           season: 'Year-round',             range: _PAC_REEF },
  'canary-rockfish':    { name: 'Canary Rockfish',       img: 'fish/canary-rockfish.jpg',       season: 'Year-round',             range: _PAC_REEF },
  'copper-rockfish':    { name: 'Copper Rockfish',       img: 'fish/copper-rockfish.jpg',       season: 'Year-round',             range: _PAC_REEF },
  'blue-rockfish':      { name: 'Blue Rockfish',         img: 'fish/blue-rockfish.jpg',         season: 'Year-round',             range: _PAC_REEF },
  'starry-rockfish':    { name: 'Starry Rockfish',       img: 'fish/starry-rockfish.jpg',       season: 'Year-round',             range: _PAC_REEF },
  // Grouper & snapper (southern Sea of Cortez reefs + East Cape / islands)
  'broomtail-grouper':  { name: 'Broomtail Grouper',     img: 'fish/broomtail-grouper.jpg',     season: 'Year-round',             range: [..._SOC_SOUTH,'loreto','puerto-escondido','agua-verde','san-evaristo'] },
  'yellow-snapper':     { name: 'Yellow Snapper',        img: 'fish/yellow-snapper.jpg',        season: 'Apr to Jul',                range: [..._SOC_SOUTH,..._SOC_CENTRAL,'mag-bay'] },
  'barred-pargo':       { name: 'Barred Pargo',          img: 'fish/barred-pargo.jpg',          season: 'Apr to Jul',                range: [..._SOC_SOUTH,'loreto','puerto-escondido','agua-verde','san-evaristo','punta-chivato'] },
  'dog-snapper':        { name: 'Dog Snapper (Pargo Prieto)', img: 'fish/dog-snapper.jpg',      season: 'Jun to Oct',                range: [..._SOC_SOUTH,'loreto','puerto-escondido'] },
  'mullet-snapper':     { name: 'Mullet Snapper',        img: 'fish/mullet-snapper.jpg',        season: 'Year-round',             range: ['la-paz','la-ventana','east-cape','la-ribera','cabo','loreto'] },
  // Inshore
  'pacific-barracuda':  { name: 'Pacific Barracuda',     img: 'fish/pacific-barracuda.jpg',     season: 'Year-round',             range: [..._PAC_REEF,'todos-santos'] },
  'sheephead':          { name: 'California Sheephead',   img: 'fish/sheephead.jpg',             season: 'Year-round',             range: _PAC_REEF },
  'pompano':            { name: 'Gafftopsail Pompano',   img: 'fish/pompano.jpg',               season: 'Jun to Oct',                range: ['la-paz','la-ventana','los-barriles','east-cape','pescadero','todos-santos'] },
  // Protected / catch-and-release
  'giant-sea-bass':     { name: 'Giant Sea Bass',        img: 'fish/giant-sea-bass.jpg',        season: 'Year-round (protected)', range: ['isla-cedros','ensenada','san-quintin','bahia-tortugas','popotla'] },
};

// ---- FISHING REPORTS (sample) ----
const REPORTS = [
  // === PACIFIC SIDE ===
  {
    id: 17,
    zone: 'popotla',
    species: ['yellowtail', 'cabrilla'],
    rating: 'hot',
    date: '2026-05-29',
    angler: 'Héctor R.',
    captain: 'Capitán Chucho',
    count: 16,
    bait: 'Live sardina, yo-yo iron',
    notes: 'Popotla pangas killing it on yellowtail right off the kelp beds. Fish 12 to 22 lbs smashing the iron. Also steady cabrilla on the bottom. Quick panga ride, fish were biting within a mile of the launch. Classic Popotla action.'
  },
  {
    id: 18,
    zone: 'popotla',
    species: ['sierra', 'corvina'],
    rating: 'good',
    date: '2026-05-28',
    angler: 'Alejandra M.',
    captain: 'Capitán Flaco',
    count: 10,
    bait: 'Rapala CD-7, cut squid',
    notes: 'Good sierra bite trolling Rapalas along the beach south of Popotla. Also picked up nice corvina on cut squid near the rocks. Locals grilling fish right on the beach, the full Popotla experience.'
  },
  {
    id: 1,
    zone: 'ensenada',
    species: ['yellowtail'],
    rating: 'hot',
    date: '2026-05-29',
    angler: 'Mike T.',
    captain: 'Capitán Raúl',
    count: 14,
    bait: 'Live sardina, yo-yo iron',
    notes: 'Wide open yellowtail bite at the Coronado Islands. Fish averaging 15 to 20 lbs, some to 30. Best on the iron in 80 to 120 ft. Water temp 62°F, clean green water. Pangas loaded up by 10am.'
  },
  {
    id: 2,
    zone: 'ensenada',
    species: ['white-seabass'],
    rating: 'good',
    date: '2026-05-28',
    angler: 'Jorge V.',
    captain: 'Capitán Memo',
    count: 3,
    bait: 'Live squid, dropper loop',
    notes: 'Picked up 3 nice white seabass to 35 lbs soaking squid on the bottom near Punta Banda. Slow morning but the afternoon tide pushed fish in. Also saw some bonito busting on the surface.'
  },
  {
    id: 33,
    zone: 'colonet',
    species: ['yellowtail', 'white-seabass'],
    rating: 'hot',
    date: '2026-05-29',
    angler: 'Oscar B.',
    captain: 'Capitán Tavo',
    count: 15,
    bait: 'Live sardina, iron jig',
    notes: 'Colonet is the sleeper spot nobody talks about. Yellowtail stacked on the high spot, 15 to 28 lb fish on the iron. White seabass on live sardina on the drift. Way less pressure than Ensenada or San Quintín. The local pangueros know every rock.'
  },
  {
    id: 34,
    zone: 'colonet',
    species: ['cabrilla', 'corvina', 'sierra'],
    rating: 'good',
    date: '2026-05-26',
    angler: 'Ramón T.',
    captain: 'Capitán Tavo',
    count: 12,
    bait: 'Cut bait, Rapala, plastics',
    notes: 'Solid mixed bag at Colonet. Cabrilla on the rocks, corvina inside the bay, sierra trolling. Nothing huge but non-stop action. The little fishing camp here has cold beer and fresh ceviche waiting when you get back.'
  },
  {
    id: 3,
    zone: 'san-quintin',
    species: ['yellowtail', 'white-seabass'],
    rating: 'hot',
    date: '2026-05-29',
    angler: 'Dave K.',
    captain: 'Capitán Pedro',
    count: 18,
    bait: 'Live mackerel, surface iron',
    notes: 'San Quintín is on fire right now. Mixed bag of yellowtail and whites off the 240 spot and around the islands. Yellowtail up to 25 lbs on the iron. Best bite was early morning. Pacific swell was 3 to 4 ft, manageable for pangas.'
  },
  {
    id: 35,
    zone: 'isla-cedros',
    species: ['yellowtail', 'white-seabass', 'grouper'],
    rating: 'hot',
    date: '2026-05-28',
    angler: 'Sergio N.',
    captain: 'Capitán Nayo',
    count: 22,
    bait: 'Live mackerel, iron jig, dropper loop',
    notes: 'Isla Cedros is the best-kept secret on the Pacific side. Cow yellowtail to 40 lbs on the iron around the northeast corner. White seabass on the kelp edges. Monster grouper deep dropping. You fly in from Guerrero Negro or take the panga across, totally worth the adventure.'
  },
  {
    id: 36,
    zone: 'bahia-tortugas',
    species: ['yellowtail', 'cabrilla', 'pargo'],
    rating: 'good',
    date: '2026-05-29',
    angler: 'Refugio C.',
    captain: 'Capitán Venado',
    count: 13,
    bait: 'Live sardina, plastics, cut bait',
    notes: 'Bahía Tortugas lives up to the name, the bay is full of life. Yellowtail around the point, cabrilla on the rocks, nice pargo on cut bait. The fishing cooperative runs everything here. Authentic Baja fishing village with incredible lobster tacos.'
  },
  {
    id: 37,
    zone: 'bahia-asuncion',
    species: ['yellowtail', 'corvina', 'cabrilla'],
    rating: 'good',
    date: '2026-05-25',
    angler: 'Estela R.',
    captain: 'Capitán Willy',
    count: 10,
    bait: 'Iron jig, live bait, cut squid',
    notes: 'Bahía Asunción is as remote as it gets on the Pacific side. Yellowtail on the iron, corvina in the shallows, cabrilla everywhere. The fishing coop here is legit, sustainable fishing and the freshest ceviche you\'ll ever eat. Abalone divers know every reef.'
  },
  {
    id: 4,
    zone: 'guerrero-negro',
    species: ['corvina', 'pargo'],
    rating: 'good',
    date: '2026-05-26',
    angler: 'Carlos M.',
    captain: 'Capitán Beto',
    count: 8,
    bait: 'Clams, cut bait',
    notes: 'Good corvina action inside the lagoon. Also picked up some nice pargo on cut bait near the mouth. Gray whales still in the lagoon, amazing to fish alongside them. Water murky but fish were chewing.'
  },
  {
    id: 5,
    zone: 'mag-bay',
    species: ['yellowfin', 'dorado'],
    rating: 'good',
    date: '2026-05-28',
    angler: 'Roberto S.',
    captain: 'Capitán Chuy',
    count: 10,
    bait: 'Cedar plugs, live caballito',
    notes: 'Ran outside the bay in the panga, found scattered yellowfin in the 30 to 50 lb class about 12 miles out. Also picked up a couple small dorado on cedar plugs. Long panga ride but worth it.'
  },
  {
    id: 6,
    zone: 'todos-santos',
    species: ['sierra', 'pargo'],
    rating: 'slow',
    date: '2026-05-29',
    angler: 'Ana L.',
    captain: 'Capitán Nacho',
    count: 4,
    bait: 'Rapala X-Rap, cut squid',
    notes: 'Slow day on the Pacific side of Todos Santos. Managed a few sierra trolling Rapalas and a nice pargo on cut squid near the rocks. Swell was big, 5 to 6 ft, limited where pangas could go.'
  },

  // === SEA OF CORTEZ SIDE ===
  {
    id: 19,
    zone: 'san-felipe',
    species: ['corvina', 'sierra', 'triggerfish'],
    rating: 'hot',
    date: '2026-05-29',
    angler: 'Miguel A.',
    captain: 'Capitán Chava',
    count: 20,
    bait: 'Live shrimp, Krocodile spoon',
    notes: 'San Felipe lit up! Corvina going crazy in the shallows on live shrimp, limits by 9am. Sierra thick along the beach trolling spoons. Triggerfish on every rock pile. Flat calm upper Cortez. This is what spring fishing in San Felipe is all about.'
  },
  {
    id: 20,
    zone: 'san-felipe',
    species: ['yellowtail', 'grouper'],
    rating: 'good',
    date: '2026-05-26',
    angler: 'Bill H.',
    captain: 'Capitán Toño',
    count: 8,
    bait: 'Iron jig, live sardina',
    notes: 'Ran south toward Consag Rock in the panga, found yellowtail 15 to 20 lbs on the yo-yo iron. Grouper on the bottom in deep water. Long run but worth it. Tides run strong up here, captain timed it perfectly.'
  },
  {
    id: 21,
    zone: 'puertecitos',
    species: ['cabrilla', 'triggerfish', 'pargo'],
    rating: 'good',
    date: '2026-05-28',
    angler: 'Ernesto G.',
    captain: 'Capitán Braulio',
    count: 14,
    bait: 'Live bait, plastics, cut squid',
    notes: 'Puertecitos is the hidden gem of the upper Cortez. Cabrilla on every drop, beautiful pargo near the hot springs, and triggerfish everywhere. No crowds, no pressure, just you and the fish. Road in is rough but the fishing is world class.'
  },
  {
    id: 22,
    zone: 'puertecitos',
    species: ['yellowtail', 'cabrilla'],
    rating: 'hot',
    date: '2026-05-29',
    angler: 'Ray C.',
    captain: 'Capitán Braulio',
    count: 12,
    bait: 'Live mackerel, iron jig',
    notes: 'Yellowtail showed up at Puertecitos! Fish 15 to 25 lbs stacked on the high spots south of town. Also steady cabrilla. The warm water from the hot springs seems to attract bait, and the yellows follow. Incredible day in the panga.'
  },
  {
    id: 23,
    zone: 'gonzaga-bay',
    species: ['yellowtail', 'cabrilla', 'grouper'],
    rating: 'hot',
    date: '2026-05-29',
    angler: 'Rubén L.',
    captain: 'Capitán Chencho',
    count: 18,
    bait: 'Live sardina, iron jig, dropper loop',
    notes: 'Gonzaga Bay is absolutely untouched fishing. Yellowtail thick around Isla San Luis, 15 to 30 lb fish smashing the iron. Cabrilla and big grouper on the dropper loop in deep water. Zero boat traffic. This is old Baja at its finest.'
  },
  {
    id: 24,
    zone: 'gonzaga-bay',
    species: ['triggerfish', 'pargo', 'cabrilla'],
    rating: 'good',
    date: '2026-05-25',
    angler: 'Derek W.',
    captain: 'Capitán Chencho',
    count: 15,
    bait: 'Cut squid, plastics',
    notes: 'Great bottom fishing at Gonzaga. Triggerfish on every rock, nice pargo to 12 lbs on cut squid, and steady cabrilla on plastics. Flat calm, crystal clear water. The dirt road in from the highway is brutal but the reward is worth every pothole.'
  },
  {
    id: 7,
    zone: 'bahia-angeles',
    species: ['yellowtail', 'cabrilla', 'triggerfish'],
    rating: 'hot',
    date: '2026-05-29',
    angler: 'Steve R.',
    captain: 'Capitán Alfredo',
    count: 22,
    bait: 'Live sardina, Krocodile spoon',
    notes: 'BOLA is going off! Yellowtail stacked up around the islands, 12 to 25 lbs on live bait and iron. Cabrilla on every rock. Also limits of triggerfish. Flat calm Cortez water, 68°F. This place is a hidden gem.'
  },
  {
    id: 25,
    zone: 'santa-rosalia',
    species: ['yellowtail', 'cabrilla', 'sierra'],
    rating: 'good',
    date: '2026-05-28',
    angler: 'Arturo P.',
    captain: 'Capitán Güero',
    count: 11,
    bait: 'Iron jig, live sardina, Rapala',
    notes: 'Good fishing out of the old mining town. Yellowtail around Isla San Marcos on the iron, fish 12 to 18 lbs. Cabrilla steady on the bottom. Sierra trolling Rapalas along the coast. The old copper smelter makes a hell of a backdrop while you fish.'
  },
  {
    id: 26,
    zone: 'santa-rosalia',
    species: ['grouper', 'pargo'],
    rating: 'good',
    date: '2026-05-24',
    angler: 'Juan Carlos D.',
    captain: 'Capitán Güero',
    count: 6,
    bait: 'Live bait, dropper loop',
    notes: 'Deep dropped for grouper off Isla San Marcos, nice ones to 30 lbs. Also solid pargo near the reef. Santa Rosalía doesn\'t get the attention it deserves. Cheap pangas, no crowds, honest fishing.'
  },
  {
    id: 8,
    zone: 'mulege',
    species: ['cabrilla', 'pargo', 'grouper'],
    rating: 'good',
    date: '2026-05-28',
    angler: 'Francisco H.',
    captain: 'Capitán Lupe',
    count: 12,
    bait: 'Live bait, plastics',
    notes: 'Good bottom fishing out of Mulegé. Cabrilla and pargo on every drop, nice grouper to 20 lbs on live bait near Punta Concepción. Cortez was glass calm. Great panga fishing for families.'
  },
  {
    id: 9,
    zone: 'loreto',
    species: ['yellowtail', 'cabrilla', 'pargo'],
    rating: 'hot',
    date: '2026-05-29',
    angler: 'Pat W.',
    captain: 'Capitán Enrique',
    count: 16,
    bait: 'Live sardina, iron jig',
    notes: 'Loreto is fishing great. Yellowtail at Isla Coronado biting on the surface, yo-yo iron and live sardina both working. Also picked up nice cabrilla and pargo fishing the rock piles. Water 70°F, blue and clean.'
  },
  {
    id: 10,
    zone: 'la-paz',
    species: ['dorado', 'roosterfish'],
    rating: 'good',
    date: '2026-05-28',
    angler: 'Lisa M.',
    captain: 'Capitán Mundo',
    count: 7,
    bait: 'Live mullet, poppers',
    notes: 'Early dorado showing up off Cerralvo Island, nice fish to 20 lbs on live bait. Also hooked 2 roosterfish on the beach near Las Arenas on poppers, released both. Season is just getting started here.'
  },
  {
    id: 27,
    zone: 'la-ventana',
    species: ['roosterfish', 'pargo', 'cabrilla'],
    rating: 'hot',
    date: '2026-05-29',
    angler: 'Kenny S.',
    captain: 'Capitán Pelón',
    count: 9,
    bait: 'Live mullet, poppers, swimbaits',
    notes: 'La Ventana is the roosterfish capital right now. Multiple roosters 25 to 50 lbs caught and released from the panga working the beach breaks. Also nice pargo and cabrilla near the rocks. The kiteboarders stay on one side, the pangas on the other, everybody\'s happy.'
  },
  {
    id: 28,
    zone: 'la-ventana',
    species: ['dorado', 'yellowfin'],
    rating: 'good',
    date: '2026-05-26',
    angler: 'Maria Elena T.',
    captain: 'Capitán Pelón',
    count: 6,
    bait: 'Live caballito, cedar plug',
    notes: 'Ran offshore from La Ventana toward Cerralvo, found schoolie dorado 8 to 15 lbs and a couple yellowfin to 40 lbs. Season building. The channel between the island and shore is a highway for pelagics when the water warms up.'
  },
  {
    id: 29,
    zone: 'los-barriles',
    species: ['roosterfish', 'dorado', 'sierra'],
    rating: 'hot',
    date: '2026-05-29',
    angler: 'Chris M.',
    captain: 'Capitán Cuco',
    count: 14,
    bait: 'Live sardina, poppers, Rapala',
    notes: 'Los Barriles pangas crushing it. Roosters on the beach at dawn, 3 fish over 40 lbs, all released. Then ran offshore for dorado and picked up 8. Sierra thick trolling Rapalas. Classic East Cape panga town, tacos on the beach after.'
  },
  {
    id: 30,
    zone: 'los-barriles',
    species: ['yellowfin', 'wahoo'],
    rating: 'good',
    date: '2026-05-28',
    angler: 'Felipe V.',
    captain: 'Capitán Cuco',
    count: 5,
    bait: 'Skirted lures, Nomad DTX, live caballito',
    notes: 'Trolled the 1000-fathom line out of Barriles. Wahoo to 40 lbs on Nomad lures and a couple nice yellowfin on live bait. The super pangas here can run offshore with the sportfishers. Great value compared to Cabo fleet prices.'
  },
  {
    id: 11,
    zone: 'east-cape',
    species: ['roosterfish', 'dorado', 'yellowfin'],
    rating: 'hot',
    date: '2026-05-29',
    angler: 'Tom B.',
    captain: 'Capitán Gordo',
    count: 15,
    bait: 'Live sardina, live mullet, cedar plug',
    notes: 'East Cape absolutely on fire. Roosterfish on the beach, multiple fish 30 to 50 lbs caught and released. Dorado showing up in good numbers offshore. Yellowfin scattered but quality fish to 80 lbs. Best panga fishing in Baja right now.'
  },
  {
    id: 12,
    zone: 'east-cape',
    species: ['wahoo', 'yellowfin'],
    rating: 'good',
    date: '2026-05-25',
    angler: 'Marco D.',
    captain: 'Capitán Chicho',
    count: 5,
    bait: 'Rapalas, skirted lures',
    notes: 'Trolled Rapalas for wahoo and got 3 nice ones to 45 lbs outside Punta Arena. Also picked up 2 yellowfin on skirted lures. Wahoo season winding down but still some around. Water 74°F.'
  },
  {
    id: 31,
    zone: 'san-jose-del-cabo',
    species: ['roosterfish', 'sierra', 'pargo'],
    rating: 'good',
    date: '2026-05-29',
    angler: 'Linda K.',
    captain: 'Capitán Chato',
    count: 8,
    bait: 'Live mullet, Rapala, cut squid',
    notes: 'Fished the estuary side of San José. Beautiful roosters on the beach, 2 nice ones released. Sierra trolling and pargo on the rocks. Way more chill than the Cabo marina scene. The lagoon birds show you where the bait is.'
  },
  {
    id: 32,
    zone: 'san-jose-del-cabo',
    species: ['dorado', 'yellowfin'],
    rating: 'good',
    date: '2026-05-26',
    angler: 'Roberto F.',
    captain: 'Capitán Chato',
    count: 7,
    bait: 'Live caballito, cedar plug',
    notes: 'Panga trip out of La Playita. Found dorado schooling 8 miles out, nice fish to 25 lbs. Also 2 yellowfin on cedar plugs. Half the price of Cabo marina pangas and better fishing. The local guys here know their stuff.'
  },
  {
    id: 13,
    zone: 'cabo',
    species: ['striped-marlin', 'dorado'],
    rating: 'good',
    date: '2026-05-29',
    angler: 'Jeff P.',
    captain: 'Capitán Mingo',
    count: 4,
    bait: 'Live caballito, ballyhoo',
    notes: 'Striped marlin still around off the Cabo Golden Gate bank. Raised 5, hooked 3, landed 2, all released. Dorado on the way back in, nice ones to 25 lbs on ballyhoo. Typical spring Cabo fishing.'
  },
  {
    id: 14,
    zone: 'cabo',
    species: ['yellowfin', 'wahoo'],
    rating: 'hot',
    date: '2026-05-28',
    angler: 'Sandra G.',
    captain: 'Capitán Tony',
    count: 9,
    bait: 'Live sardina, cedar plugs, Nomad lures',
    notes: 'Yellowfin going off at the Jaime Bank! Fish 40 to 100 lbs on live bait and cedar plugs. Panga guys hanging right with the sportfishers. Also picked up 2 wahoo trolling Nomad DTX. Best tuna bite of the season so far.'
  },
  {
    id: 15,
    zone: 'la-paz',
    species: ['amberjack', 'cabrilla'],
    rating: 'good',
    date: '2026-05-26',
    angler: 'Rick N.',
    captain: 'Capitán Julio',
    count: 8,
    bait: 'Iron jigs, live sardina',
    notes: 'Fished the seamount off Espíritu Santo island. Good amberjack on the yo-yo iron, hard-fighting fish to 40 lbs. Also steady cabrilla action on live sardina. Sea lions trying to steal every fish. Beautiful day on the Cortez.'
  },
  {
    id: 16,
    zone: 'bahia-angeles',
    species: ['yellowtail', 'grouper'],
    rating: 'good',
    date: '2026-05-24',
    angler: 'Danny F.',
    captain: 'Capitán Alfredo Ceseña',
    count: 10,
    bait: 'Live mackerel, dropper loop',
    notes: 'Good yellows around Isla Smith and the south end of Ángel de la Guarda. Also big grouper on the dropper loop in deep water, best one was 35 lbs. Dirt road in is rough but the fishing makes it all worthwhile.'
  },

  // === NEW PACIFIC VILLAGES ===
  {
    id: 38, zone: 'erendira', species: ['yellowtail', 'white-seabass'], rating: 'good', date: '2026-05-28',
    angler: 'Manuel G.', captain: 'Capitán Fito', count: 9,
    bait: 'Live sardina, iron jig',
    notes: 'Eréndira pangas crushing yellowtail on the kelp edges. White seabass on the drift near the point. This village has 40+ pangas launching daily, real working fleet, not touristy. Lobster cooperative runs the show here.'
  },
  {
    id: 39, zone: 'el-rosario', species: ['yellowtail', 'cabrilla'], rating: 'good', date: '2026-05-26',
    angler: 'Tomás R.', captain: 'Capitán Ciro', count: 8,
    bait: 'Iron jig, cut bait',
    notes: 'El Rosario, last fuel stop before the desert, first real fishing on the remote coast. Yellowtail on the iron at the point. Cabrilla on every rock. The cooperative here has been running for decades. Historic lobster village.'
  },
  {
    id: 40, zone: 'punta-baja', species: ['yellowtail', 'cabrilla'], rating: 'hot', date: '2026-05-29',
    angler: 'Ismael C.', captain: 'Capitán Polo', count: 14,
    bait: 'Live bait, Krocodile spoon',
    notes: 'Punta Baja is remote fishing heaven. Yellowtail stacked on the point, 15 to 30 lb fish on live bait. Cabrilla on every drop. The cooperative here manages the lobster and abalone concessions. 20+ pangas go out every morning. Dirt road only.'
  },
  {
    id: 41, zone: 'punta-eugenia', species: ['yellowtail', 'cabrilla', 'grouper'], rating: 'good', date: '2026-05-28',
    angler: 'Refugio M.', captain: 'Capitán Toño', count: 10,
    bait: 'Iron jig, live mackerel',
    notes: 'Punta Eugenia sits at the tip of the Vizcaíno Peninsula where the Pacific current rips. Yellowtail and grouper stacked on the point. 20 to 30 pangas from the cooperative work these waters daily. The lighthouse marks some of the best fishing in central Baja.'
  },
  {
    id: 42, zone: 'punta-abreojos', species: ['yellowtail', 'corvina', 'cabrilla'], rating: 'hot', date: '2026-05-29',
    angler: 'Efraín S.', captain: 'Capitán Neto', count: 18,
    bait: 'Live sardina, iron jig, cut bait',
    notes: 'Punta Abreojos is one of the most important panga fishing villages in all of Baja, 100+ pangas launch daily. MSC-certified lobster cooperative. Yellowtail wide open on the reef. Corvina thick in the shallows. Hours of dirt road to get here but pure, authentic Baja fishing.'
  },
  {
    id: 43, zone: 'la-bocana', species: ['corvina', 'pargo'], rating: 'good', date: '2026-05-26',
    angler: 'Gilberto O.', captain: 'Capitán Lencho', count: 7,
    bait: 'Cut bait, shrimp',
    notes: 'La Bocana sits near Laguna San Ignacio. Corvina in the estuary mouth, pargo on the rocks outside. Small cooperative fleet, 15 to 20 pangas. Also the gateway to whale watching, gray whales calve right here. Totally off the grid.'
  },
  {
    id: 44, zone: 'san-juanico', species: ['yellowtail', 'roosterfish', 'cabrilla'], rating: 'good', date: '2026-05-29',
    angler: 'Pablo J.', captain: 'Capitán Chilo', count: 11,
    bait: 'Live sardina, poppers, plastics',
    notes: 'San Juanico (Scorpion Bay), surfers know it for the waves, but the fishing village is the real deal. 30+ pangas go out daily. Yellowtail on the points, roosterfish on the beach, cabrilla on the reefs. The cooperative sells fresh fish from the pangas every afternoon.'
  },
  {
    id: 45, zone: 'lopez-mateos', species: ['corvina', 'pargo', 'snook'], rating: 'hot', date: '2026-05-28',
    angler: 'Carmen V.', captain: 'Capitán Lalo', count: 16,
    bait: 'Live shrimp, cut mullet, plastics',
    notes: 'Puerto López Mateos is the northern gateway to Mag Bay and a serious fishing town, 60+ pangas work these waters daily. Corvina and snook in the mangrove channels. Pargo on the outer bars. Also whale watching pangas in winter. This town lives and breathes fishing.'
  },
  {
    id: 46, zone: 'puerto-san-carlos', species: ['yellowfin', 'dorado', 'corvina'], rating: 'hot', date: '2026-05-29',
    angler: 'Adrián L.', captain: 'Capitán Pepe', count: 20,
    bait: 'Live caballito, cedar plug, live shrimp',
    notes: 'Puerto San Carlos is a major fishing port, 150+ pangas, sardine fleet, shrimp boats, the works. Yellowfin tuna outside the bay mouth, dorado on the way out, corvina inside. Fish processing plants on the dock. This is the commercial fishing heart of Mag Bay.'
  },
  {
    id: 47, zone: 'punta-lobos', species: ['yellowfin', 'dorado', 'sierra'], rating: 'hot', date: '2026-05-29',
    angler: 'Leticia P.', captain: 'Capitán Negro', count: 15,
    bait: 'Live sardina, cedar plug, Rapala',
    notes: 'Punta Lobos is THE panga beach of southern Baja. 40+ pangas launch through the surf every morning at dawn, come back by noon loaded with tuna and dorado. You buy fish right off the pangas on the sand. The fish market here is incredible, doesn\'t get fresher than this.'
  },
  {
    id: 48, zone: 'pescadero', species: ['roosterfish', 'sierra', 'pargo'], rating: 'good', date: '2026-05-28',
    angler: 'Karen W.', captain: 'Capitán Güicho', count: 6,
    bait: 'Live mullet, poppers',
    notes: 'El Pescadero has a small but scrappy panga fleet, 15 pangas that launch from the beach near Cerritos. Roosterfish on the beach, sierra trolling, pargo on the rocks. Development is creeping in but the pangueros are still at it every day.'
  },

  // === NEW SEA OF CORTEZ VILLAGES ===
  {
    id: 49, zone: 'el-golfo', species: ['corvina', 'sierra', 'triggerfish'], rating: 'hot', date: '2026-05-29',
    angler: 'Ricardo Z.', captain: 'Capitán Ramón', count: 30,
    bait: 'Live shrimp, cut bait, spoons',
    notes: 'El Golfo de Santa Clara is INSANE during corvina season. 300 to 500 pangas hit the water at once for the gulf corvina spawning run. Limits of corvina by sunrise. The whole town shuts down to fish. Biggest panga fleet concentration in the entire Gulf of California. Nothing else like it.'
  },
  {
    id: 50, zone: 'punta-chivato', species: ['yellowtail', 'cabrilla', 'dorado'], rating: 'good', date: '2026-05-28',
    angler: 'Greg H.', captain: 'Capitán Moy', count: 9,
    bait: 'Iron jig, live sardina',
    notes: 'Punta Chivato sits on a peninsula between Santa Rosalía and Mulegé, perfect position to fish both directions. Yellowtail on the points, cabrilla everywhere, early dorado showing. 15 pangas work out of here. The old hotel is faded but the fishing is world-class.'
  },
  {
    id: 51, zone: 'bahia-concepcion', species: ['triggerfish', 'cabrilla', 'pargo'], rating: 'good', date: '2026-05-29',
    angler: 'Susan K.', captain: 'Capitán Tacho', count: 12,
    bait: 'Cut squid, plastics, clams',
    notes: 'Bahía Concepción is one of the most beautiful bays in Baja, crystal turquoise water, white sand beaches. 30 to 40 pangas work the bay daily. Triggerfish and cabrilla on the islands, pargo on the rocky points. The chocolate clam divers go out every morning in pangas too.'
  },
  {
    id: 52, zone: 'juncalito', species: ['cabrilla', 'pargo', 'triggerfish'], rating: 'good', date: '2026-05-28',
    angler: 'Aurelio N.', captain: 'Capitán Chuy', count: 10,
    bait: 'Cut bait, plastics',
    notes: 'Juncalito is a tiny fishing cove between Loreto and Puerto Escondido, maybe 15 pangas total. The fishermen sell catch right on the beach. Cabrilla and pargo on every drop. No restaurants, no hotels, just pangas and fish. As authentic as it gets.'
  },
  {
    id: 53, zone: 'puerto-escondido', species: ['yellowtail', 'dorado', 'cabrilla'], rating: 'good', date: '2026-05-29',
    angler: 'Martin F.', captain: 'Capitán Blas', count: 11,
    bait: 'Iron jig, live sardina',
    notes: 'Puerto Escondido has a natural harbor south of Loreto, 20 pangas work from here. Yellowtail around Isla Danzante, dorado outside, cabrilla on the rocks. The marina has cruisers but the pangueros are the real locals. Great launching point for the national park islands.'
  },
  {
    id: 54, zone: 'agua-verde', species: ['pargo', 'cabrilla', 'yellowtail'], rating: 'hot', date: '2026-05-29',
    angler: 'Eduardo B.', captain: 'Capitán Chano', count: 16,
    bait: 'Live bait, iron jig, cut squid',
    notes: 'Agua Verde is the real Baja. 60 km of dirt road south of Loreto to reach a tiny fishing village with 20 pangas. The cooperative fishes these waters the old way. Pargo on every reef, cabrilla non-stop, yellowtail on the iron. No cell service, no internet, just fishing. Unforgettable.'
  },
  {
    id: 55, zone: 'san-evaristo', species: ['pargo', 'cabrilla', 'roosterfish'], rating: 'good', date: '2026-05-28',
    angler: 'Norma D.', captain: 'Capitán Santos López', count: 8,
    bait: 'Live sardina, cut bait',
    notes: 'San Evaristo is another end-of-the-road fishing village, dirt road from La Paz. The cooperative runs 20 pangas. Pargo and cabrilla daily, plus roosterfish along the beaches. Salt harvesting happens here too. One of the most isolated and beautiful fishing villages in all of Baja.'
  },
  {
    id: 56, zone: 'bahia-muertos', species: ['roosterfish', 'dorado', 'wahoo'], rating: 'hot', date: '2026-05-29',
    angler: 'Jake R.', captain: 'Capitán Fili', count: 11,
    bait: 'Live mullet, cedar plug, Nomad DTX',
    notes: 'Bahía de los Muertos (Bay of the Dead, named for old shipwrecks, not the fishing!). Roosterfish crushing it on the beach, dorado offshore, wahoo trolling the drop-offs. 20 pangas work this bay. The deep blue water comes right to shore here, world class.'
  },
  {
    id: 57, zone: 'punta-pescadero', species: ['roosterfish', 'dorado', 'yellowfin'], rating: 'good', date: '2026-05-28',
    angler: 'Diana S.', captain: 'Capitán Chencho', count: 7,
    bait: 'Live sardina, poppers',
    notes: 'Punta Pescadero sits between La Ventana and Los Barriles. Small fleet of 15 pangas. Roosterfish on the beach at dawn, dorado and yellowfin outside. The old hotel on the point is gone but the fishing is as good as ever. Fewer crowds than Los Barriles.'
  },
  {
    id: 58, zone: 'la-ribera', species: ['roosterfish', 'dorado', 'wahoo', 'yellowfin'], rating: 'hot', date: '2026-05-29',
    angler: 'Oscar M.', captain: 'Capitán Chapo', count: 14,
    bait: 'Live mullet, skirted lures, iron jig',
    notes: 'La Ribera is the heart of the East Cape panga fleet, 40 pangas launch daily. Roosters on the beach, dorado and wahoo offshore, yellowfin on the banks. The cooperative here is organized and the captains know every inch of these waters. Real fishing town, not resort.'
  },
];

// ---- PANGA CAPTAINS ----
const CAPTAINS = [
  // Pacific Side (North → South)
  {
    name: 'Capitán Chucho Reyes',
    zone: 'popotla',
    phone: '+52-661-555-0001',
    whatsapp: true,
    rating: 5,
    years: 26,
    species: ['Yellowtail', 'Cabrilla', 'Sierra', 'Bonito'],
    bio: 'Popotla legend. Launches right from the famous fish market. Knows every kelp bed from Rosarito to La Misión. Best fish tacos after the trip, guaranteed.',
  },
  {
    name: 'Capitán Flaco Mendoza',
    zone: 'popotla',
    phone: '+52-661-555-0002',
    whatsapp: true,
    rating: 4,
    years: 18,
    species: ['Sierra', 'Corvina', 'Yellowtail', 'Bonito'],
    bio: 'Young and fast. Specializes in trolling and inshore species. Great for beginners. Speaks English. Family-friendly trips.',
  },
  {
    name: 'Capitán Raúl Guerrero',
    zone: 'ensenada',
    phone: '+52-646-555-0101',
    whatsapp: true,
    rating: 5,
    years: 22,
    species: ['Yellowtail', 'White Seabass', 'Lingcod'],
    bio: 'Ensenada native. Fishes the Coronado Islands and Punta Banda. Fleet of 3 super pangas. English spoken.',
  },
  {
    name: 'Capitán Memo Ríos',
    zone: 'ensenada',
    phone: '+52-646-555-0202',
    whatsapp: true,
    rating: 4,
    years: 15,
    species: ['White Seabass', 'Yellowtail', 'Bonito'],
    bio: 'Specializes in bottom fishing and squid. Great for beginners and families.',
  },
  {
    name: 'Capitán Tavo Ibarra',
    zone: 'colonet',
    phone: '+52-646-555-0250',
    whatsapp: true,
    rating: 5,
    years: 24,
    species: ['Yellowtail', 'White Seabass', 'Cabrilla', 'Corvina'],
    bio: 'Colonet\'s go-to captain. Runs a clean 23-ft panga out of the little harbor. Knows the high spots and kelp lines better than anyone. The quiet alternative to crowded Ensenada.',
  },
  {
    name: 'Capitán Pedro Avilés',
    zone: 'san-quintin',
    phone: '+52-616-555-0301',
    whatsapp: true,
    rating: 5,
    years: 30,
    species: ['Yellowtail', 'White Seabass', 'Lingcod', 'Halibut'],
    bio: 'The legend of San Quintín. Knows every rock and reef from the 240 to the islands. Multi-generation fishing family.',
  },
  {
    name: 'Capitán Nayo Aguilar',
    zone: 'isla-cedros',
    phone: '+52-615-555-0350',
    whatsapp: false,
    rating: 5,
    years: 35,
    species: ['Yellowtail', 'White Seabass', 'Grouper', 'Calico Bass'],
    bio: 'Born on Isla Cedros. Third generation fisherman. Knows every reef, canyon, and kelp forest around the island. The fishing here is like Baja was 50 years ago. Limited cell service, book in advance.',
  },
  {
    name: 'Capitán Venado Ochoa',
    zone: 'bahia-tortugas',
    phone: '+52-615-555-0360',
    whatsapp: true,
    rating: 4,
    years: 22,
    species: ['Yellowtail', 'Cabrilla', 'Pargo', 'Lobster'],
    bio: 'Part of the Bahía Tortugas fishing cooperative. Knows every inch of the bay and outer reefs. Can also arrange lobster fishing and abalone diving demos. Real Baja experience.',
  },
  {
    name: 'Capitán Willy Zúñiga',
    zone: 'bahia-asuncion',
    phone: '+52-615-555-0370',
    whatsapp: false,
    rating: 5,
    years: 28,
    species: ['Yellowtail', 'Corvina', 'Cabrilla', 'Halibut'],
    bio: 'Bahía Asunción cooperative member and lifetime fisherman. Also a freediving abalone harvester. Knows the Pacific reefs like the back of his hand. No frills, just incredible fishing.',
  },
  {
    name: 'Capitán Beto Sandoval',
    zone: 'guerrero-negro',
    phone: '+52-615-555-0401',
    whatsapp: false,
    rating: 4,
    years: 18,
    species: ['Corvina', 'Pargo', 'Halibut'],
    bio: 'Lagoon fishing specialist. Also runs whale watching trips in season. Knows the tides like nobody else.',
  },
  {
    name: 'Capitán Chuy Martínez',
    zone: 'mag-bay',
    phone: '+52-613-555-0501',
    whatsapp: true,
    rating: 5,
    years: 25,
    species: ['Yellowfin Tuna', 'Dorado', 'Wahoo', 'Snook'],
    bio: 'Runs offshore and inshore out of Puerto San Carlos. Will take pangas way outside the bay for tuna. Fearless.',
  },
  {
    name: 'Capitán Nacho Delgado',
    zone: 'todos-santos',
    phone: '+52-612-555-0601',
    whatsapp: true,
    rating: 4,
    years: 12,
    species: ['Sierra', 'Pargo', 'Roosterfish'],
    bio: 'Young captain with a fast panga. Fishes both the Pacific and will run around to the Cortez side.',
  },

  // Sea of Cortez Side (North → South)
  {
    name: 'Capitán Chava Ortiz',
    zone: 'san-felipe',
    phone: '+52-686-555-0501',
    whatsapp: true,
    rating: 5,
    years: 30,
    species: ['Corvina', 'Yellowtail', 'Sierra', 'Grouper'],
    bio: 'San Felipe\'s top captain. Fishes Consag Rock, the shallows, and everything in between. Knows the extreme tides of the upper Cortez like nobody else. Books up on holiday weekends, call ahead.',
  },
  {
    name: 'Capitán Toño Valenzuela',
    zone: 'san-felipe',
    phone: '+52-686-555-0502',
    whatsapp: true,
    rating: 4,
    years: 20,
    species: ['Corvina', 'Triggerfish', 'Sierra', 'Yellowtail'],
    bio: 'Reliable and affordable. Great for families and first-timers. Fishes the bay and the islands south of town. Some English spoken.',
  },
  {
    name: 'Capitán Braulio Cota',
    zone: 'puertecitos',
    phone: '+52-686-555-0601',
    whatsapp: false,
    rating: 5,
    years: 28,
    species: ['Cabrilla', 'Yellowtail', 'Pargo', 'Triggerfish'],
    bio: 'The only captain you need in Puertecitos. Born and raised there. Fishes the islands and rock piles south of the hot springs. Old-school panga, no electronics, just pure skill and local knowledge.',
  },
  {
    name: 'Capitán Chencho Félix',
    zone: 'gonzaga-bay',
    phone: '+52-686-555-0650',
    whatsapp: false,
    rating: 5,
    years: 30,
    species: ['Yellowtail', 'Cabrilla', 'Grouper', 'Triggerfish'],
    bio: 'Gonzaga Bay\'s only full-time panga captain. Lives right on the beach at Alfonsina\'s. Fishes Isla San Luis and the reefs south. No cell service, show up and find him. Bring your own tackle.',
  },
  {
    name: 'Capitán Alfredo Ceseña',
    zone: 'bahia-angeles',
    phone: '+52-200-555-0701',
    whatsapp: false,
    rating: 5,
    years: 35,
    species: ['Yellowtail', 'Cabrilla', 'Grouper', 'Triggerfish'],
    bio: 'Born in BOLA. Knows every island, reef, and seamount in the bay. Old-school panga fishing at its best.',
  },
  {
    name: 'Capitán Güero Salazar',
    zone: 'santa-rosalia',
    phone: '+52-615-555-0750',
    whatsapp: true,
    rating: 4,
    years: 22,
    species: ['Yellowtail', 'Cabrilla', 'Sierra', 'Grouper'],
    bio: 'Fishes around Isla San Marcos out of the old mining port. Also does trips to the wrecks offshore. Cheap pangas, cold Pacíficos waiting at the dock. The French bakery in town has the best bread in Baja.',
  },
  {
    name: 'Capitán Lupe Hernández',
    zone: 'mulege',
    phone: '+52-615-555-0801',
    whatsapp: true,
    rating: 4,
    years: 20,
    species: ['Cabrilla', 'Pargo', 'Grouper', 'Roosterfish'],
    bio: 'Fishes out of Mulegé and Punta Concepción. Great for families. Also does diving and snorkeling trips.',
  },
  {
    name: 'Capitán Enrique Villanueva',
    zone: 'loreto',
    phone: '+52-613-555-0901',
    whatsapp: true,
    rating: 5,
    years: 28,
    species: ['Yellowtail', 'Dorado', 'Cabrilla', 'Pargo'],
    bio: 'Loreto\'s top captain. Fleet of 4 pangas. Fishes Coronado, Carmen, and Danzante islands. Some English spoken.',
  },
  {
    name: 'Capitán Mundo López',
    zone: 'la-paz',
    phone: '+52-612-555-1001',
    whatsapp: true,
    rating: 5,
    years: 24,
    species: ['Dorado', 'Roosterfish', 'Yellowfin Tuna', 'Amberjack'],
    bio: 'Fishes Cerralvo Island, Espíritu Santo, and Las Arenas. Specializes in roosterfish and dorado. Fluent English.',
  },
  {
    name: 'Capitán Julio Verdugo',
    zone: 'la-paz',
    phone: '+52-612-555-1002',
    whatsapp: true,
    rating: 4,
    years: 16,
    species: ['Amberjack', 'Cabrilla', 'Pargo'],
    bio: 'Bottom fishing expert. Knows the deep spots around Espíritu Santo. Great fish tacos at the end of the trip.',
  },
  {
    name: 'Capitán Pelón Ríos',
    zone: 'la-ventana',
    phone: '+52-612-555-1050',
    whatsapp: true,
    rating: 5,
    years: 20,
    species: ['Roosterfish', 'Dorado', 'Pargo', 'Cabrilla'],
    bio: 'La Ventana\'s roosterfish specialist. Works the beach breaks like an artist. Also runs offshore trips to Cerralvo Island for dorado and tuna. Shares the bay with kiteboarders, knows exactly where the fish hold.',
  },
  {
    name: 'Capitán Cuco Verdugo',
    zone: 'los-barriles',
    phone: '+52-624-555-1080',
    whatsapp: true,
    rating: 5,
    years: 25,
    species: ['Roosterfish', 'Dorado', 'Yellowfin Tuna', 'Wahoo', 'Sierra'],
    bio: 'Los Barriles legend. Runs a 26-ft super panga that competes with the big boats. Does it all, roosterfish on the beach, dorado offshore, wahoo trolling. The Hotel Palmas Vanity crew will point you to him.',
  },
  {
    name: 'Capitán Gordo Lucero',
    zone: 'east-cape',
    phone: '+52-624-555-1101',
    whatsapp: true,
    rating: 5,
    years: 32,
    species: ['Roosterfish', 'Dorado', 'Yellowfin Tuna', 'Wahoo', 'Striped Marlin'],
    bio: 'East Cape legend. Fishes La Ribera, Punta Arena, and offshore banks. Has caught everything that swims. A must-fish captain.',
  },
  {
    name: 'Capitán Chicho Angulo',
    zone: 'east-cape',
    phone: '+52-624-555-1102',
    whatsapp: true,
    rating: 4,
    years: 19,
    species: ['Wahoo', 'Yellowfin Tuna', 'Roosterfish'],
    bio: 'Trolling specialist. Fast panga rigged for wahoo. Also does great inshore roosterfish trips on the beach.',
  },
  {
    name: 'Capitán Chato Beltrán',
    zone: 'san-jose-del-cabo',
    phone: '+52-624-555-1150',
    whatsapp: true,
    rating: 5,
    years: 23,
    species: ['Roosterfish', 'Dorado', 'Yellowfin Tuna', 'Sierra', 'Pargo'],
    bio: 'Launches from La Playita on the east side of San José. Way more affordable than the Cabo marina. Great roosterfish trips on the beach and offshore panga runs. Bilingual. The locals\' choice.',
  },
  {
    name: 'Capitán Mingo Davis',
    zone: 'cabo',
    phone: '+52-624-555-1201',
    whatsapp: true,
    rating: 5,
    years: 27,
    species: ['Striped Marlin', 'Dorado', 'Yellowfin Tuna'],
    bio: 'Cabo\'s best panga captain. Competes with the big sportfishers and wins. Bilingual. Books up fast, call early.',
  },
  {
    name: 'Capitán Tony Sánchez',
    zone: 'cabo',
    phone: '+52-624-555-1202',
    whatsapp: true,
    rating: 4,
    years: 14,
    species: ['Yellowfin Tuna', 'Wahoo', 'Dorado'],
    bio: 'Young and hungry. Fast 26-ft super panga. Fishes Jaime Bank, Golden Gate, and the Finger Bank. Great rates.',
  },

  // === NEW PACIFIC CAPTAINS ===
  { name: 'Capitán Fito Barajas', zone: 'erendira', phone: '+52-646-555-0180', whatsapp: true, rating: 5, years: 25,
    species: ['Yellowtail', 'White Seabass', 'Lingcod', 'Lobster'],
    bio: 'Eréndira cooperative veteran. 40+ pangas work this coast and Fito knows every kelp bed. Also runs lobster traps in season. The real Baja fishing experience, 30 minutes south of Ensenada.' },
  { name: 'Capitán Ciro Beltrán', zone: 'el-rosario', phone: '+52-616-555-0190', whatsapp: false, rating: 4, years: 28,
    species: ['Yellowtail', 'Cabrilla', 'Lobster', 'Abalone'],
    bio: 'Third-generation El Rosario fisherman. The cooperative here has fished lobster and abalone for 60+ years. Ciro also does sportfishing for yellowtail. Last chance for fuel and pangas before the desert.' },
  { name: 'Capitán Polo Murillo', zone: 'punta-baja', phone: '+52-616-555-0200', whatsapp: false, rating: 5, years: 30,
    species: ['Yellowtail', 'Cabrilla', 'Lobster', 'Abalone'],
    bio: 'Punta Baja cooperative, MSC-certified sustainable fishery. Polo has fished these waters his whole life. Remote fish camp on a dirt road. No frills, just incredible fishing. Bring everything you need.' },
  { name: 'Capitán Toño Acosta', zone: 'punta-eugenia', phone: '+52-615-555-0210', whatsapp: false, rating: 4, years: 22,
    species: ['Yellowtail', 'Grouper', 'Cabrilla', 'Lobster'],
    bio: 'Fishes the tip of the Vizcaíno Peninsula where the Pacific current creates incredible upwelling. Part of the FEDECOOP cooperative network. Remote but worth the journey.' },
  { name: 'Capitán Neto Espinoza', zone: 'punta-abreojos', phone: '+52-615-555-0220', whatsapp: false, rating: 5, years: 32,
    species: ['Yellowtail', 'Corvina', 'Cabrilla', 'Lobster', 'Abalone'],
    bio: 'Punta Abreojos cooperative leader. 100+ pangas, MSC-certified lobster fishery. One of the most important fishing cooperatives in Mexico. Neto will set you up with a panga and a cooler full of fish. Hours of dirt road, bring supplies.' },
  { name: 'Capitán Lencho Rosas', zone: 'la-bocana', phone: '+52-615-555-0230', whatsapp: false, rating: 4, years: 20,
    species: ['Corvina', 'Pargo', 'Mangrove Snapper'],
    bio: 'La Bocana, where Laguna San Ignacio meets the Pacific. Small cooperative, big fishing. Also runs whale watching pangas Jan to Mar. Corvina fishing in the lagoon mouth is world class.' },
  { name: 'Capitán Chilo Parra', zone: 'san-juanico', phone: '+52-613-555-0240', whatsapp: true, rating: 5, years: 24,
    species: ['Yellowtail', 'Roosterfish', 'Cabrilla', 'Corvina'],
    bio: 'Scorpion Bay fishing cooperative. 30+ pangas go out daily. Surfers come for the waves but Chilo will put you on the fish. Also great inshore roosterfish trips. Fish tacos from the catch every afternoon.' },
  { name: 'Capitán Lalo Medina', zone: 'lopez-mateos', phone: '+52-613-555-0260', whatsapp: true, rating: 5, years: 28,
    species: ['Corvina', 'Snook', 'Pargo', 'Various'],
    bio: 'López Mateos is a serious fishing port with 60+ pangas. Lalo fishes the mangrove channels for snook and corvina, the outer bars for pargo. Also the best whale watching captain in the bay, Jan through March.' },
  { name: 'Capitán Pepe Soto', zone: 'puerto-san-carlos', phone: '+52-613-555-0280', whatsapp: true, rating: 5, years: 35,
    species: ['Yellowfin Tuna', 'Dorado', 'Corvina', 'Shrimp'],
    bio: 'Puerto San Carlos, 150+ pangas, sardine fleet, shrimp boats. Pepe is the dean of the sportfishing panga captains here. Runs outside the bay mouth for tuna and dorado. Affordable rates, serious fishing.' },
  { name: 'Capitán Negro Arce', zone: 'punta-lobos', phone: '+52-612-555-0290', whatsapp: true, rating: 5, years: 26,
    species: ['Yellowfin Tuna', 'Dorado', 'Sierra', 'Wahoo'],
    bio: 'Punta Lobos panga fleet, 40+ pangas launch through the surf at dawn. Negro is the one the locals call first. Tuna and dorado come back by noon. You can buy fish right off his panga on the beach. The real Todos Santos.' },
  { name: 'Capitán Güicho Torres', zone: 'pescadero', phone: '+52-612-555-0300', whatsapp: true, rating: 4, years: 18,
    species: ['Roosterfish', 'Sierra', 'Pargo'],
    bio: 'El Pescadero\'s small panga fleet, 15 boats launching from the beach at Cerritos. Güicho specializes in roosterfish on poppers and live bait. Development is growing around him but he keeps fishing every day.' },

  // === NEW SEA OF CORTEZ CAPTAINS ===
  { name: 'Capitán Ramón Ochoa', zone: 'el-golfo', phone: '+52-653-555-0310', whatsapp: true, rating: 5, years: 30,
    species: ['Gulf Corvina', 'Shrimp', 'Sierra', 'Triggerfish'],
    bio: 'El Golfo de Santa Clara, biggest panga fleet in the Gulf. During corvina season (March to May), 300 to 500 pangas hit the water at dawn. Ramón has done this for 30 years. The spawning run at the Colorado River delta is one of the great spectacles of Mexican fishing.' },
  { name: 'Capitán Moy Aguilar', zone: 'punta-chivato', phone: '+52-615-555-0320', whatsapp: false, rating: 4, years: 20,
    species: ['Yellowtail', 'Cabrilla', 'Dorado', 'Pargo'],
    bio: 'Punta Chivato peninsula, between Santa Rosalía and Mulegé. Moy fishes both sides. The old resort hotel is mostly closed but the fishing never stopped. 15 pangas work from the beach.' },
  { name: 'Capitán Tacho Domínguez', zone: 'bahia-concepcion', phone: '+52-615-555-0330', whatsapp: true, rating: 5, years: 25,
    species: ['Triggerfish', 'Cabrilla', 'Pargo', 'Chocolate Clams'],
    bio: 'Bahía Concepción, the most beautiful bay in Baja. Tacho fishes from Santispac. 30+ pangas across the bay, plus chocolate clam divers. Crystal clear water, white sand, world-class triggerfish and cabrilla. Family-friendly.' },
  { name: 'Capitán Blas Rivera', zone: 'puerto-escondido', phone: '+52-613-555-0340', whatsapp: true, rating: 4, years: 18,
    species: ['Yellowtail', 'Dorado', 'Cabrilla'],
    bio: 'Puerto Escondido, natural harbor south of Loreto, gateway to the national park islands. 20 pangas. Blas fishes Danzante and Carmen islands. Great launching point for Loreto Bay National Marine Park.' },
  { name: 'Capitán Chuy Lucero', zone: 'juncalito', phone: '+52-613-555-0350', whatsapp: false, rating: 5, years: 30,
    species: ['Cabrilla', 'Pargo', 'Triggerfish', 'Clams'],
    bio: 'Juncalito, tiny cove, 15 pangas, fish sold right on the beach. Chuy is the village elder. No restaurants, no hotels, just pangas and nets drying in the sun. If you want to see how Baja fished 50 years ago, come here.' },
  { name: 'Capitán Chano Murillo', zone: 'agua-verde', phone: '+52-613-555-0360', whatsapp: false, rating: 5, years: 28,
    species: ['Pargo', 'Cabrilla', 'Yellowtail', 'Shark'],
    bio: 'Agua Verde, 60 km of brutal dirt road south of Loreto, and worth every bump. 20-panga cooperative. Chano fishes the old way, no electronics, just local knowledge passed down generations. One of the most authentic fishing villages in Mexico.' },
  { name: 'Capitán Santos López', zone: 'san-evaristo', phone: '+52-612-555-0370', whatsapp: false, rating: 5, years: 32,
    species: ['Pargo', 'Cabrilla', 'Roosterfish', 'Yellowtail'],
    bio: 'San Evaristo, end of a dirt road from La Paz. 20-panga cooperative, salt harvesting, and fishing. Santos has been at it for 30+ years. Remote, isolated, beautiful. Bring everything you need, there\'s nothing here but fish and salt.' },
  { name: 'Capitán Fili Camacho', zone: 'bahia-muertos', phone: '+52-612-555-0380', whatsapp: true, rating: 5, years: 22,
    species: ['Roosterfish', 'Dorado', 'Wahoo', 'Yellowfin Tuna'],
    bio: 'Bahía de los Muertos, deep blue water right to shore. 20 pangas. Fili specializes in roosterfish on the beach and dorado offshore. The name means Bay of the Dead but the fishing is very much alive. Stunning scenery.' },
  { name: 'Capitán Chencho Verdugo', zone: 'punta-pescadero', phone: '+52-624-555-0390', whatsapp: true, rating: 4, years: 20,
    species: ['Roosterfish', 'Dorado', 'Yellowfin Tuna'],
    bio: 'Punta Pescadero, between La Ventana and Los Barriles on the East Cape coast. 15 pangas. Chencho runs inshore roosterfish trips and offshore pelagic runs. Quieter alternative to the Los Barriles scene.' },
  { name: 'Capitán Chapo Lucero', zone: 'la-ribera', phone: '+52-624-555-0400', whatsapp: true, rating: 5, years: 27,
    species: ['Roosterfish', 'Dorado', 'Wahoo', 'Yellowfin Tuna', 'Striped Marlin'],
    bio: 'La Ribera, the real fishing town of the East Cape. 40 pangas, active cooperative, genuine working village. Chapo does it all: roosters on the beach, tuna on the banks, marlin outside. Not a resort, a fishing town.' },
];

// ---- CONDITIONS DATA ----
const CONDITIONS = [
  // Pacific (North → South)
  { zone: 'popotla',          waterTemp: '61°F', airTemp: '66°F', wind: 'NW 6 to 10 kt',  swell: '3 to 4 ft W',   tide: 'High 6:38am', moon: 'First Quarter', visibility: '12 to 18 ft' },
  { zone: 'ensenada',         waterTemp: '62°F', airTemp: '68°F', wind: 'NW 8 to 12 kt',  swell: '3 to 4 ft W',   tide: 'High 6:42am', moon: 'First Quarter', visibility: '15 to 20 ft' },
  { zone: 'erendira',         waterTemp: '61°F', airTemp: '66°F', wind: 'NW 8 to 14 kt',  swell: '3 to 5 ft NW',  tide: 'High 6:45am', moon: 'First Quarter', visibility: '12 to 18 ft' },
  { zone: 'colonet',          waterTemp: '61°F', airTemp: '66°F', wind: 'NW 8 to 12 kt',  swell: '3 to 5 ft NW',  tide: 'High 6:48am', moon: 'First Quarter', visibility: '12 to 20 ft' },
  { zone: 'san-quintin',      waterTemp: '60°F', airTemp: '65°F', wind: 'NW 10 to 15 kt', swell: '4 to 5 ft NW',  tide: 'High 6:55am', moon: 'First Quarter', visibility: '12 to 18 ft' },
  { zone: 'el-rosario',       waterTemp: '60°F', airTemp: '64°F', wind: 'NW 10 to 15 kt', swell: '4 to 5 ft NW',  tide: 'High 6:58am', moon: 'First Quarter', visibility: '10 to 15 ft' },
  { zone: 'punta-baja',       waterTemp: '59°F', airTemp: '63°F', wind: 'NW 12 to 16 kt', swell: '4 to 6 ft NW',  tide: 'High 6:59am', moon: 'First Quarter', visibility: '15 to 25 ft' },
  { zone: 'isla-cedros',      waterTemp: '60°F', airTemp: '64°F', wind: 'NW 12 to 18 kt', swell: '4 to 6 ft NW',  tide: 'High 7:00am', moon: 'First Quarter', visibility: '20 to 35 ft' },
  { zone: 'bahia-tortugas',   waterTemp: '62°F', airTemp: '68°F', wind: 'NW 8 to 12 kt',  swell: '3 to 4 ft W',   tide: 'High 7:05am', moon: 'First Quarter', visibility: '15 to 25 ft' },
  { zone: 'punta-eugenia',    waterTemp: '61°F', airTemp: '66°F', wind: 'NW 12 to 18 kt', swell: '4 to 6 ft NW',  tide: 'High 7:04am', moon: 'First Quarter', visibility: '18 to 30 ft' },
  { zone: 'bahia-asuncion',   waterTemp: '62°F', airTemp: '70°F', wind: 'NW 10 to 14 kt', swell: '3 to 5 ft W',   tide: 'High 7:08am', moon: 'First Quarter', visibility: '15 to 25 ft' },
  { zone: 'guerrero-negro',   waterTemp: '64°F', airTemp: '72°F', wind: 'N 6 to 10 kt',   swell: '2 to 3 ft W',   tide: 'Low 7:10am',  moon: 'First Quarter', visibility: '8 to 12 ft' },
  { zone: 'punta-abreojos',   waterTemp: '64°F', airTemp: '74°F', wind: 'NW 8 to 12 kt',  swell: '3 to 4 ft W',   tide: 'High 7:15am', moon: 'First Quarter', visibility: '12 to 20 ft' },
  { zone: 'la-bocana',        waterTemp: '65°F', airTemp: '74°F', wind: 'NW 6 to 10 kt',  swell: '2 to 3 ft W',   tide: 'High 7:18am', moon: 'First Quarter', visibility: '8 to 15 ft' },
  { zone: 'san-juanico',      waterTemp: '66°F', airTemp: '76°F', wind: 'NW 8 to 12 kt',  swell: '3 to 5 ft SW',  tide: 'High 6:00am', moon: 'First Quarter', visibility: '12 to 20 ft' },
  { zone: 'lopez-mateos',     waterTemp: '67°F', airTemp: '78°F', wind: 'NW 6 to 10 kt',  swell: '2 to 3 ft W',   tide: 'High 5:35am', moon: 'First Quarter', visibility: '8 to 15 ft' },
  { zone: 'puerto-san-carlos', waterTemp: '68°F', airTemp: '78°F', wind: 'NW 8 to 12 kt', swell: '2 to 4 ft W',   tide: 'High 5:32am', moon: 'First Quarter', visibility: '10 to 20 ft' },
  { zone: 'mag-bay',          waterTemp: '68°F', airTemp: '78°F', wind: 'NW 8 to 12 kt',  swell: '3 to 4 ft W',   tide: 'High 5:30am', moon: 'First Quarter', visibility: '15 to 25 ft' },
  { zone: 'todos-santos',     waterTemp: '70°F', airTemp: '80°F', wind: 'W 10 to 15 kt',  swell: '5 to 6 ft SW',  tide: 'High 5:45am', moon: 'First Quarter', visibility: '10 to 15 ft' },
  { zone: 'punta-lobos',      waterTemp: '70°F', airTemp: '80°F', wind: 'W 8 to 12 kt',   swell: '4 to 6 ft SW',  tide: 'High 5:44am', moon: 'First Quarter', visibility: '10 to 18 ft' },
  { zone: 'pescadero',        waterTemp: '71°F', airTemp: '82°F', wind: 'W 8 to 12 kt',   swell: '4 to 5 ft SW',  tide: 'High 5:42am', moon: 'First Quarter', visibility: '10 to 18 ft' },
  // Sea of Cortez (North → South)
  { zone: 'el-golfo',         waterTemp: '68°F', airTemp: '88°F', wind: 'N 4 to 8 kt',    swell: 'Flat',        tide: 'High 7:00am', moon: 'First Quarter', visibility: '5 to 10 ft' },
  { zone: 'san-felipe',       waterTemp: '66°F', airTemp: '80°F', wind: 'N 5 to 8 kt',    swell: 'Flat to 1 ft',   tide: 'High 7:05am', moon: 'First Quarter', visibility: '10 to 15 ft' },
  { zone: 'puertecitos',      waterTemp: '67°F', airTemp: '82°F', wind: 'Calm',         swell: 'Flat',        tide: 'High 7:12am', moon: 'First Quarter', visibility: '15 to 25 ft' },
  { zone: 'gonzaga-bay',      waterTemp: '67°F', airTemp: '83°F', wind: 'Calm',         swell: 'Flat',        tide: 'High 7:15am', moon: 'First Quarter', visibility: '20 to 30 ft' },
  { zone: 'bahia-angeles',    waterTemp: '68°F', airTemp: '82°F', wind: 'Calm',         swell: 'Flat',        tide: 'High 7:20am', moon: 'First Quarter', visibility: '25 to 40 ft' },
  { zone: 'santa-rosalia',    waterTemp: '69°F', airTemp: '83°F', wind: 'SE 3 to 6 kt',   swell: 'Flat to 1 ft',   tide: 'High 7:30am', moon: 'First Quarter', visibility: '18 to 25 ft' },
  { zone: 'mulege',           waterTemp: '70°F', airTemp: '84°F', wind: 'SE 4 to 6 kt',   swell: 'Flat to 1 ft',   tide: 'High 7:35am', moon: 'First Quarter', visibility: '20 to 30 ft' },
  { zone: 'punta-chivato',    waterTemp: '70°F', airTemp: '84°F', wind: 'Calm to 5 kt',   swell: 'Flat',        tide: 'High 7:33am', moon: 'First Quarter', visibility: '22 to 35 ft' },
  { zone: 'bahia-concepcion', waterTemp: '71°F', airTemp: '85°F', wind: 'Calm to 4 kt',   swell: 'Flat',        tide: 'High 7:38am', moon: 'First Quarter', visibility: '25 to 40 ft' },
  { zone: 'loreto',           waterTemp: '70°F', airTemp: '82°F', wind: 'S 5 to 8 kt',    swell: '1 to 2 ft S',   tide: 'High 7:40am', moon: 'First Quarter', visibility: '25 to 35 ft' },
  { zone: 'puerto-escondido', waterTemp: '70°F', airTemp: '82°F', wind: 'S 4 to 6 kt',    swell: '1 ft S',      tide: 'High 7:42am', moon: 'First Quarter', visibility: '25 to 35 ft' },
  { zone: 'juncalito',        waterTemp: '70°F', airTemp: '83°F', wind: 'Calm to 4 kt',   swell: 'Flat to 1 ft',   tide: 'High 7:41am', moon: 'First Quarter', visibility: '25 to 35 ft' },
  { zone: 'agua-verde',       waterTemp: '71°F', airTemp: '84°F', wind: 'Calm',         swell: 'Flat',        tide: 'High 7:00am', moon: 'First Quarter', visibility: '25 to 40 ft' },
  { zone: 'san-evaristo',     waterTemp: '71°F', airTemp: '84°F', wind: 'Calm to 3 kt',   swell: 'Flat',        tide: 'Low 6:30am',  moon: 'First Quarter', visibility: '20 to 35 ft' },
  { zone: 'la-paz',           waterTemp: '72°F', airTemp: '85°F', wind: 'SE 4 to 8 kt',   swell: '1 ft',        tide: 'Low 6:15am',  moon: 'First Quarter', visibility: '20 to 30 ft' },
  { zone: 'la-ventana',       waterTemp: '72°F', airTemp: '86°F', wind: 'N 10 to 15 kt',  swell: '1 to 2 ft N',   tide: 'Low 6:20am',  moon: 'First Quarter', visibility: '20 to 30 ft' },
  { zone: 'bahia-muertos',    waterTemp: '73°F', airTemp: '86°F', wind: 'Calm to 5 kt',   swell: '1 ft S',      tide: 'Low 6:22am',  moon: 'First Quarter', visibility: '25 to 40 ft' },
  { zone: 'punta-pescadero',  waterTemp: '73°F', airTemp: '86°F', wind: 'Calm to 5 kt',   swell: '1 ft S',      tide: 'High 6:08am', moon: 'First Quarter', visibility: '25 to 40 ft' },
  { zone: 'los-barriles',     waterTemp: '73°F', airTemp: '86°F', wind: 'Calm to 5 kt',   swell: '1 ft S',      tide: 'High 6:05am', moon: 'First Quarter', visibility: '25 to 40 ft' },
  { zone: 'la-ribera',        waterTemp: '74°F', airTemp: '86°F', wind: 'Calm to 5 kt',   swell: '1 to 2 ft S',   tide: 'High 6:02am', moon: 'First Quarter', visibility: '28 to 45 ft' },
  { zone: 'east-cape',        waterTemp: '74°F', airTemp: '86°F', wind: 'Calm to 5 kt',   swell: '1 to 2 ft S',   tide: 'High 6:00am', moon: 'First Quarter', visibility: '30 to 50 ft' },
  { zone: 'san-jose-del-cabo', waterTemp: '74°F', airTemp: '85°F', wind: 'SW 5 to 8 kt',  swell: '2 to 3 ft S',   tide: 'High 5:55am', moon: 'First Quarter', visibility: '25 to 35 ft' },
  { zone: 'cabo',             waterTemp: '74°F', airTemp: '84°F', wind: 'SW 6 to 10 kt',  swell: '2 to 3 ft SW',  tide: 'High 5:50am', moon: 'First Quarter', visibility: '25 to 40 ft' },
];

// ---- POOL A PANGA, CREW TRIPS ----
const CREW_TRIPS = [
  {
    id: 'ct-001',
    zone: 'ensenada',
    species: ['Yellowtail', 'White Seabass'],
    date: '2026-05-27',
    totalCost: 320,
    totalSpots: 4,
    filledSpots: 2,
    host: 'Cabo Mike',
    hostInitials: 'CM',
    message: 'Half-day trip out of Ensenada. Targeting yellows on the kelp. Bring your own iron jigs. Early start, 5:30am.',
    captain: 'Capitán Chucho Reyes',
    captainRating: 5,
  },
  {
    id: 'ct-002',
    zone: 'loreto',
    species: ['Dorado', 'Yellowfin Tuna'],
    date: '2026-05-30',
    totalCost: 480,
    totalSpots: 5,
    filledSpots: 3,
    host: 'SoCal Dave',
    hostInitials: 'SD',
    message: 'Full day out of Loreto chasing dorado and tuna. Captain booked, rods and bait included. Just bring yourself and a cooler.',
    captain: 'Capitán Enrique Villanueva',
    captainRating: 5,
  },
  {
    id: 'ct-003',
    zone: 'cabo',
    species: ['Striped Marlin', 'Wahoo'],
    date: '2026-06-02',
    totalCost: 550,
    totalSpots: 4,
    filledSpots: 1,
    host: 'Baja Jenn',
    hostInitials: 'BJ',
    message: 'Looking for 3 more serious anglers. Offshore run from Cabo. Marlin season is ON. Release only for billfish. Wahoo and dorado fair game.',
    captain: null,
    captainRating: null,
  },
  {
    id: 'ct-004',
    zone: 'san-quintin',
    species: ['Halibut', 'Lingcod', 'White Seabass'],
    date: '2026-06-06',
    totalCost: 280,
    totalSpots: 3,
    filledSpots: 1,
    host: 'El Norte',
    hostInitials: 'EN',
    message: 'San Quintin bay flat halibut run. Shallow water, light tackle, cooler full by 10am or we go home. No experience needed.',
    captain: 'Capitán Raúl Guerrero',
    captainRating: 5,
  },
  {
    id: 'ct-005',
    zone: 'la-paz',
    species: ['Roosterfish', 'Pargo', 'Amberjack'],
    date: '2026-06-09',
    totalCost: 400,
    totalSpots: 4,
    filledSpots: 4,
    host: 'Panga Pete',
    hostInitials: 'PP',
    message: 'La Paz inshore grind. Roosterfish on topwater in the morning, pargo on the reefs in the afternoon. Crew is full but message me if you want on the wait list.',
    captain: null,
    captainRating: null,
  },
  {
    id: 'ct-006',
    zone: 'mag-bay',
    species: ['Yellowtail', 'Cabrilla', 'Grouper'],
    date: '2026-06-14',
    totalCost: 360,
    totalSpots: 6,
    filledSpots: 2,
    host: 'Mag Bay Mark',
    hostInitials: 'MM',
    message: 'Magdalena Bay, one of the most underrated fisheries on the planet. Wide open kelp beds, massive yellowtail schools. 4 spots left. Bring iron.',
    captain: 'Capitán Chuy Martínez',
    captainRating: 4,
  },
];
