/* BajaFish, trimmed departure intel for the zone map panel.
   Sourced from /.claude/overhaul/departures.json (research, 2026-05-29).
   Keyed by ZONES key; bare global (read via typeof guard in site.js). */
const DEPARTURES = {
  'ensenada': {
    launchType: 'Marina dock (charters) + concrete public ramp',
    operators: "Sergio's Sportfishing; Marina Coral ramp for private trailer boats"
  },
  'san-quintin': {
    launchType: 'Concrete public ramp + on-site panga fleet (inner bay)',
    operators: "Old Mill Hotel, Don Eddie's Landing, K&M Sportfishing"
  },
  'isla-cedros': {
    launchType: 'Fly-in only (Biosphere Reserve); 27 to 28 ft super-pangas',
    operators: 'Cedros Outdoor Adventures, Cedros Sportfishing',
    latFix: 28.20, lngFix: -115.21
  },
  'puerto-san-carlos': {
    launchType: 'Concrete public ramp + López Mateos paved ramp',
    operators: 'Mag Bay Outfitters, Mag Bay Lodge, local panga cooperatives'
  },
  'san-felipe': {
    launchType: 'Concrete ramps (tide-restricted) + multi-day mothership pickups',
    operators: 'Tony Reyes Fishing Tours (motherships), local pangueros'
  },
  'gonzaga-bay': {
    launchType: 'Beach launch + makeshift sand/stone ramp + airstrip',
    operators: "Alfonsina's (rooms, restaurant, pangas, airstrip)"
  },
  'bahia-angeles': {
    launchType: 'Concrete ramps (~$10) + local panga fleet',
    operators: "Guillermo's, Villa Vitta, local pangueros"
  },
  'santa-rosalia': {
    launchType: 'Concrete public ramp (almost any tide, no fee)',
    operators: 'Local pangueros; San Lucas Cove south of town'
  },
  'mulege': {
    launchType: 'Concrete ramp (good slope, narrow, no fee)',
    operators: 'Hotel Serenidad, local pangueros'
  },
  'loreto': {
    launchType: 'Protected municipal ramp + downtown malecón staging',
    operators: 'Reel Time Fishing, Wild Loreto Tours, Rubio Sportfishing'
  },
  'puerto-escondido': {
    launchType: 'Full marina (ramp + 50-ton travel lift)',
    operators: 'Marina charter desk; Loreto operators stage here'
  },
  'la-paz': {
    launchType: 'Full marina (CostaBaja) + downtown municipal ramps/pier',
    operators: 'Tailhunter International, Baja Adventure Co, CostaBaja fleet'
  },
  'la-ventana': {
    launchType: 'Beach launch + shuttle to Ensenada de Muertos ramp',
    operators: "Palapas Ventana, Captain Kirk's, Ventana Bay Resort"
  },
  'los-barriles': {
    launchType: 'Open-beach launch (tractor-assisted), no permanent ramp',
    operators: 'Van Wormer Resorts, 50+ boat fleet (the East Cape hub)'
  },
  'la-ribera': {
    launchType: 'Open-beach launch, no marina',
    operators: 'Castro family panga fleet, Hotel Buena Vista, Rancho Leonero'
  },
  'san-jose-del-cabo': {
    launchType: 'Full marina (Puerto Los Cabos / La Playita)',
    operators: 'Gordo Banks Pangas, Fiesta Sportfishing'
  },
  'cabo': {
    launchType: 'Full marina (boats spread across docks)',
    operators: 'Gaviota Sportfishing, Solmar Fleet, Fiesta Sportfishing'
  }
};
