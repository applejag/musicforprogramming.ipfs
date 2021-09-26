interface EpisodeRawData {
  readonly id: string;
  readonly name: string;
  readonly fileName: string;
  readonly compilerLinks: URL[];
  readonly notes: string;
}

export interface EpisodeData extends EpisodeRawData {
  readonly fileRelUrl: string;
}

export function getEpisodeData(episodeId: number): EpisodeData {
  return episodeDatas[episodeId];
}

export function getAllEpisodeData(): EpisodeData[] {
  return episodeDatas;
}

export function getEpisodeCount(): number {
  return episodeDatas.length;
}

const episodeRawDatas: EpisodeRawData[] = [
  {
    id: "one",
    name: "01: Datassette",
    fileName: "music_for_programming_1-datassette.mp3",
    compilerLinks: [new URL("http://datassette.net/")],
    notes: `\
      Frog Pocket - Plinty
      Tor Lundvall - Crooked
      Tim Hecker - 7000 Miles
      Belong - Late Night
      Frog Pocket - Sea Angel Lament
      William Basinski - 92982.2
      Praveen - Cecilia's Fruit
      Arpanet - Ionic Crystals
      Tim Hecker - October
      Netherworld - Virgin Lands
      KGB Man - Nobody Here
      Tim Hecker - Blood Rainbow
      Der Zyklus - Iris / Retinal Scanning
      Boards Of Canada - Kaini Industries
      `,
  },

  {
    id: "two",
    name: "02: Sunjammer",
    fileName: "music_for_programming_2-sunjammer.mp3",
    compilerLinks: [new URL("http://doomsday.no/")],
    notes: `\
      Bruno Sanfilippo - Piano Textures II, II
      Cliff Martinez - Wear your seatbelt
      Max Richter - Flowers for Yulia
      Tim Hecker - Azure Azure
      Tim Hecker - In the fog III
      Christoph de Babalon - High life Part 2
      Murcof - Reflejo
      Jackson C Frank - Milk and honey
      Inade - Quartered conclusion
      Tim Hecker - Enima
      `,
  },

  {
    id: "three",
    name: "03: Datassette",
    fileName: "music_for_programming_3-datassette.mp3",
    compilerLinks: [new URL("http://datassette.net/")],
    notes: `\
      LFO - Goodnight Vienna
      Philip Glass - SloMo People
      Tor Lundvall - Leaves
      William Basinski - 92982.3
      Le Revelateur - Bleu Nuit
      Tim Hecker - Studio Suicide 2
      Miles Tilmann - Particle Song 1
      Oneohtrix Point Never - Heart Of A Champion
      White Rainbow - 5:45 AM July 6th 2004
      Robert Ashley - Automatic Writing
      Tim Hecker - Incurably Optimistic!
      Christopher D Lewis - Metamorphosis 3
      Boards Of Canada - Geometric Piss
      Belong - Beeside
      The Caretaker - Memory 63
      A Silver Mt. Zion - 13 Angels Standing Guard 'Round The Side Of Your Bed
      Burial - Forgive
      Mark Morgan - Industrial Junk
      Arpanet - Variables
      Julian Bream - Galliard (Remix)
      `,
  },

  {
    id: "four",
    name: "04: Com Truise",
    fileName: "music_for_programming_4-com_truise.mp3",
    compilerLinks: [new URL("http://comtruise.com/")],
    notes: `\
      Joel Vandroogenbroeck - Banjomatic
      Joel Vandroogenbroeck - Silicon Siren
      Martin Walker - Armalyte 1 (Edit)
      Caravelli & Patrick Vasori - Morse a L'infini
      Harry Forbes - Scanner 2
      M. Cannone - Sylphides
      Boards of Canada - Whitewater
      VHS Head - Motions
      Oneohtrix Point Never - Grief and Repetition
      Syn - 13
      Lapti & Nocow - Sirenas (Part 1)
      Sarin Sunday - Luh
      New Dreams Ltd - Upper Spheres of Consciousness
      Vektroid - Walk with me Saturn
      Syn - Hoarfrost
      Robert Viger - Seasons
      `,
  },

  {
    id: "five",
    name: "05: Abe Mangger",
    fileName: "music_for_programming_5-abe_mangger.mp3",
    compilerLinks: [new URL("http://soundcloud.com/abe_mangger")],
    notes: `\
      Brad Meldhau - Fuck You
      Elisa Conversano - Hyperdodecahedron
      David Espejo Aviles y Oscar Vargas Leal - Cromometrofonia No.1
      Ennio Morricone - Voci nel Deserton
      Autechre - Paralel Suns
      John Wiese - Alligator Born in Slow Motion
      Ivor Darreg - Prelude #2 for 19-Tone Guitar
      Harry Partch - Exordium: The Beginning of a Web
      Secular Musics of South Yorkshire - Circus of Death
      Ø - Kesämaa
      Pimmon - Tener a Mar Callado
      Pulse Emitter - Longing Thresholds (Side A)
      Laurie Spiegel - The Expanding Universe
      Michel Redolfi - Entrée (Programme 2 Immersion)
      Coil - Strange Birds
      Dave Noyze - The Computational Beauty of Nature II
      Coil - Tiny Golden Books
      Chris Watson - No Man's Land
      Illusion of Safety - Historical PT II
      Jim O'Rourke - Canadian Bonus Track
      Atom Heart - (Holon) Slo Motion
      Time Machines - 2,5-Dimethoxy-4-Ethyl-Amphetamine: (DOET/Hecate)
      Luc Ferrari - Far-West News 1
      Steve Roach - Slowly Revealed
      Smackos - Return to Moosely Bay
      Robert Wyatt - Dondestan
      Dennis Ritchie & John McCarthy RIP - Jesu, Joy of Man Page Desiring
      `,
  },

  {
    id: "six",
    name: "06: Gods Of The New Age",
    fileName: "music_for_programming_6-gods_of_the_new_age.mp3",
    compilerLinks: [new URL("http://soundcloud.com/gods-of-the-new-age")],
    notes: `\
      Robert Rich - Folded Space
      Steven Halpern - 3rd Chakra
      Thom Brennan - Pondlife
      Biosphere - The Things I Tell You
      Emeralds - Lake Effect Snow
      Bibio - It Was Willow (Edit)
      Scott Wyker - Creamery Meadow
      Hybernation - Haggerston Park
      James Potter - Potter's Field (Part One)
      Megazord - Computer, Download Me All The Adam Sandler Movies
      Mother Mallard - Ceres Motion
      Control Data Institute - '70s California TV Advert
      `,
  },

  {
    id: "seven",
    name: "07: Tahlhoff Garten + Untitled",
    fileName: "music_for_programming_7-tahlhoff_garten_and_untitled.mp3",
    compilerLinks: [
      new URL("http://soundcloud.com/jimgorn"),
      new URL("http://soundcloud.com/tahlhoff-garten"),
    ],
    notes: `\
      Mount Kimbie - Adriatic (Klaus Remix)
      Ben Frost - Thoery Of Machines
      Air - Caramel Prisoner
      Four Tet - Hilarious Movie Of The 90's (Manitoba Remix)
      Murcof - Muim (Colleen Mix)
      Ian Hawgood - Before I Let The Sunshine Rot
      Oneohtrix Point Never - Replica (Modified Version)
      Tim Hecker - Bordr Lens Pt. 1
      Biosphere - Fall In, Fall Out
      Heathered Pearls - Steady Veil
      Christopher Bissonnette - Travelling Light
      Loscil - Sickbay
      Basic Channel - Radiance II
      Manrico Montero & Alexandre Navarro - Montero+Navarro Bootleg (Remix by Offthesky)
      Jan Jelinek Avec The Exposures - There Are Other Worlds (They Have Told You Of)
      Spejderrobot - Du Kan Ikke Taelle Ned Til Et Lyn
      Fats Waller, David Lynch & Alan R. Splet - Lenox Avenue Blues (Excerpt)
      Pheadrus - Pava (Modified Version)
      Aphex Twin - Avril 14th
      Rafael Anton Irisarri - Distance
      Boom Bip - The Use Of Unacceptable Colours In Nature
      Tim Hecker - Im Transmitting Tonight
      Clark - Broken Kite Footage
      `,
  },
];

const episodeDatas: EpisodeData[] = episodeRawDatas.map((o, i) => ({
  ...o,
  fileRelUrl: "/audio/" + o.fileName,
}));
