import type { LinkOrHref } from "./link";

export interface EpisodeRawData {
  readonly id: string;
  readonly name: string;
  readonly fileName: string;
  readonly compilerLinks: LinkOrHref[];
  readonly notes: string;
}

export interface EpisodeData extends EpisodeRawData {
  readonly fileRelUrl: string;
}

export function getLatestEpisode(): EpisodeData {
  return episodeDatas[episodeDatas.length - 1];
}

export function getEpisodeById(episodeId: string): EpisodeData {
  return episodeMap.get(episodeId);
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
    compilerLinks: ["http://datassette.net/"],
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
    compilerLinks: ["http://doomsday.no/"],
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
    compilerLinks: ["http://datassette.net/"],
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
    compilerLinks: ["http://comtruise.com/"],
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
    compilerLinks: ["http://soundcloud.com/abe_mangger"],
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
    compilerLinks: ["http://soundcloud.com/gods-of-the-new-age"],
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
      "http://soundcloud.com/jimgorn",
      "http://soundcloud.com/tahlhoff-garten",
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

  {
    id: "eight",
    name: "08: Connectedness Locus",
    fileName: "music_for_programming_8-connectedness_locus.mp3",
    compilerLinks: ["http://www.connectednesslocus.com/"],
    notes: `\
      Sanchez is driven by demons - wash the spiders away (remnant)
      The Evpatoria Report - Acheron
      Autechre - VLetrmx
      Downliners Sekt - hockey nights in Canada
      Grouper - Disengaged
      Brian Eno - Signals
      Set Fire to Flames - Déjà, comme des trous de vent, comme reproduit
      Mogwai - Moses? I Amn't
      Stars of the Lid - Music for Twin Peaks Episode #30, Part 1
      Sons of Magdalene - On His Brow, Wisdom, In His
      Godspeed You! Black Emperor - Antennas to Heaven
      The Sight Below - At First Touch
      `,
  },

  {
    id: "ten",
    name: "10: Unity Gain Temple",
    fileName: "music_for_programming_10-unity_gain_temple.mp3",
    compilerLinks: ["http://soundcloud.com/antipodeanmongsyndicate/"],
    notes: `\
      Mort Garson - Witch Trial
      Neil Scrivin - Mountaineers
      Demdike Stare - Matilda's Dream
      Tonstartssbandht - Hymn Eola
      Zoviet France - Fire Sticks
      Tim Hecker - Trade Winds, White Heat
      Miles Tilmann - Red Whale
      Datassette vs 10CC - Just A Silly Phase
      Mulm - The End Of Greatness
      Datassette vs Fleetwood Mac - Can't Disguise
      Demdike Stare - The Stars Are Moving
      Dopplereffekt - Myon-Neutrino
      Off The Sky vs Gyges - Polaroidmanteaux
      `,
  },

  {
    id: "eleven",
    name: "11: Miles Tilmann",
    fileName: "music_for_programming_11-miles_tilmann.mp3",
    compilerLinks: ["http://webhole.com/"],
    notes: `\
      All tracks by Miles Tilmann:

      Bloom
      Cellula 4.4 (w/ Mike Palace)
      Navigator 6
      Navigator 4
      Cellula 4.2 (w/ Mike Palace)
      Morning Song
      Evaporation
      Planetarium
      `,
  },

  {
    id: "twelve",
    name: "12: Forgotten Light",
    fileName: "music_for_programming_12-forgotten_light.mp3",
    compilerLinks: ["https://www.discogs.com/artist/5253745-Leonce"],
    notes: `\
      Untitled - Untitled
      Gas - Untitled
      Forgotten Light - Carolinian Forest
      Forgotten Light - Clairvoyance
      Burial - Night Bus
      Burial - Fostercare
      Forgotten Light - Repetitions (for the Depressed)
      Treetops - They Are Land
      Color Dream - Cultivating A Sound Garden
      Color Dream - Untitled / Untitled
      Geotherm - Sunlight
      Cloaked Light - 3
      Oneohtrix Point Never - Melancholy Descriptions Of Simple 3D Environments
      Oneohtrix Point Never - Trauma 2010
      How to Dress Well - Escape Before The Rain
      `,
  },

  {
    id: "thirteen",
    name: "13: Matt Whitehead",
    fileName: "music_for_programming_13-matt_whitehead.mp3",
    compilerLinks: ["https://soundcloud.com/matt-whitehead"],
    notes: `\
      White Noise 2 - Concerto For Synthesizer Movement I
      Franco Battiato - Energia
      Zavijavi Orchestra - Passage Of Time
      Tod Dockstader - Soprano Aloft
      Steve Drews - Oleo Strut
      Conrad Schinitzler - Buta Raga
      Vangelis - Spiral
      Bobby Lyle - Inner Space
      Tangerine Dream - Between Realities
      Brian Bennett - Darkside
      Roy Budd - The Watcher
      William S Fischer - Chains
      Jerry Goldsmith - On the Bridge
      Joe Zawinul - His Last Journey
      Bruce Langhorne - Windmill
      Timothy Leary - Turn On, Tune In, Drop Out
      Frank Reidy, Eric Allan - Time Lapse
      Dave Grusin - The Big Fight
      Linda Perhacs - Parallelograms
      Popol Vuh - Brueder Des Schattens Oma
      Vladimir Cosma - Transmutation
      Franco Battiato - I Cancelli Della Memori
      Christian Chevallier - Ondine
      John Tender - Underwater Fantasy 3 1
      Claudio Rocchi - Per Antichi Canali
      Tod Dockstader - Part Six
      Cluster - Zum Wohl
      Gino Marinuzzi Jr. - Inside The Starship
      Vangelis - La Mer Recommencée
      Claudio Rocchi - Dopo Arona
      Francis Monkman - Stark
      Pink Floyd - Welcome To The Machine
      Edward Artemiev - Untitled 07
      Unknown Haitian Ceremonial Participants (recorded by Maya Deren) - Ghede Nimbo (Mahi)
      The Harmonic Chior and David Hykes - Arc Descents
      John Adams - Harmonium II. (Because I Could Not Stop for Death)
      Craig Kupka - Trombones of Lithia
      Marc Barreca - Suburbs
      Marc Barreca - Memory Paths
      Mkwaju Ensemble - Hot Air
      Upper Astral - Skybirds
      Erik Satie - Avant-Dernieres Pensees-I-Idyl
      Chic Corea and Gary Burton - Children's Song 1
      Tamponi - Profondita' 1
      Unknown - Kids1
      Craig Weingarten, Gale Ormiston, Phil Neon - Transitions 1
      John Tender - Flowers from Fantasyland 2 1
      Upper Astral - The Skybirds' Ohm
      Roger Davy - Corail Dans La Mer De Tranquill 1
      Parry Music Library / Scenes & Images - Still Waters 2
      Unknown - Wind Chimes
      Tod Dockstader - Floating Up
      Gil Melle - Op 1
      Unknown - One Cricket
      Sun Ra - The Horo
      Scoen & Cicci santucci - Ecologia
      Soft Machine - Carol Ann
      Environments 1 - Psychologically Ultimate Seashore
      Chic Corea and Gary Burton - Crystal Silence
      Di Jarrell - Transistors 1
      Claudio Rocchi - Hì
      Fiorenzo Carpi - Corteo magico
      Unknown - Wind Chimes
      Tomita - Footprints in the Snow
      Walter Gieseking - No.6, Des pas sur la neige (Book I)
      `,
  },

  {
    id: "fourteen",
    name: "14: Tahlhoff Garten + Untitled",
    fileName: "music_for_programming_14-tahlhoff_garten_and_untitled.mp3",
    compilerLinks: [
      "http://soundcloud.com/jimgorn",
      "http://soundcloud.com/tahlhoff-garten",
    ],
    notes: `\
      Martin Stig Andersen - Menu
      Darkfarmer - Because I Will
      Praveen - Darling
      Arovane - Seaside
      Mouse On Mars - Pool, Smooth and Hidden
      Izhak Del Muham - Leev Et Sûlko
      Pan American - Settled
      Koen Park - lLaburnum
      Aeroc - Another Mere Moment
      Moritz Von Oswald Trio - Pattern 4 (Excerpt)
      Bjarni Gunnarsson - Undrun
      Matthewdavid - 10
      The Album Leaf - Perro
      Matt Elliott Vs. Chris Morris - Push Off My Wire
      AUN - With Bows Bent
      Opto - 04.34 a.m.
      Johnny Greenwood, Robert Ziegler & BBC Concert Orchestra - Henry Plainview
      D_rradio - Leaves
      Jacaszek - Evening Strains To Be Time's Vast
      Inverz - Home End (Expert)
      Aidan Baker & Tim Hecker - Auditory Spirits
      The Fun Years - Cornelia Amygdaloid
      Triosk Meets Jan Jelinek - Distant Shore
      Martin Stig Andersen - Gravity Jump
      Ekkehard Ehlers - The Bakes In The Wood
      Robag Wruhme - Brücke Vier
      Animal Collective - Two Sails On A Sound (Excerpt)
      Actress - N.E.W.
      Martin Iveson - Universe 23 (Universe Game Soundtrack)
      Skúli Sverrisson - Sería
      `,
  },

  {
    id: "fifteen",
    name: "15: Dan Adeyemi",
    fileName: "music_for_programming_15-dan_adeyemi.mp33",
    compilerLinks: ["http://danadeyemi.com/"],
    notes: `\
      Yee-King - Sleepy Clown
      Raymond Scott - The Paperwork Explosion
      Demdike Stare - Nothing but the night
      Snd - 5.18
      Vladislav Delay - Raamat
      Laurel Halo - Zoo Hypothesis
      Roward Hoark - Malaise
      Tortoise - Ten-Day Interval
      Boards Of Canada - Satellite Anthem Icarus
      Egisto Macchi - Module Lanaire
      Tangerine Dream - Remote Viewing
      `,
  },

  {
    id: "sixteen",
    name: "16: Silent Stelios",
    fileName: "music_for_programming_16-silent_stelios.mp3",
    compilerLinks: ["https://soundcloud.com/silent-stelios"],
    notes: `\
      Alvin Lucier - I Am Sitting In A Room
      Brian Eno - The Lost Day
      James Plotkin/Mick Harris - Dissolve
      Fear Falls Burning - The Carnival Of Ourselves
      Sunn O))) Meets Nurse With Wound - Dysnystaxis (...A Chance Meeting With Somnus)
      Pulse Emitter - Longing Thresholds
      Terry Riley - Poppy Nogood And The Phantom Band
      The Threshold Houseboys Choir - Intimations Of Spring
      Steve Roach - Immersion : One
      Nurse With Wound - Salt Marie Celeste
      SoiSong - Jam Talay Sai
      Ø - Näkinkengät
      `,
  },

  {
    id: "seventeen",
    name: "17: Graphplan",
    fileName: "music_for_programming_17-graphplan.mp3",
    compilerLinks: ["https://soundcloud.com/graphplan"],
    notes: `\
      Sunn O))) - Sin Nanna (Southern Lord)
      Suum Cuique - Intonation (Modern Love)
      Squaremeter (m²) - Winds & Ruins (Ant-Zen)
      Megaptera - Sludgy Heads Found In A Handbag (Cold Meat Industry)
      Nurse With Wound - In Swollen Silence (United Dairies)
      Alan Lamb - Last Anzac (Dorobo)
      Emptyset - Periphery (Subtext)
      Fennesz - City Of Light (Touch)
      False Mirror - Aftermath (Malignant Records)
      Prurient - December Man (Hospital Productions)
      Demdike Stare - Leptonic Matter (Modern Love)
      Deutsch Nepal - Entrance (Part II) (Cold Meat Industry)
      Alva Noto + Ryuichi Sakamoto - Trioon II (Raster-Noton)
      Aphex Twin - Gwely Mernans (Warp Records)
      Sutcliffe Jügend - New Year's Day (Freek Records)
      Raison d'être - End Of A Cycle (Cold Meat Industry)
      Pan Sonic - Väinämöisen Uni / Väinämöinen Dreams (Blast First Petite)
      Deaf Center - Fiction Dawn (Type)
      Deathprod - Journey To The Centre Of The First 1.2 (Rune Grammofon)
      Robert Henke - [_exit] (Imbalance Computer Music)
      Cut Hands - Krokodilo Theme (Blackest Ever Black)
      November Növelet - You Ask Me (Galakthorrö)
      `,
  },

  {
    id: "eighteen",
    name: "18: Konx Om Pax",
    fileName: "music_for_programming_18-konx_om_pax.mp3",
    compilerLinks: ["http://displaycopy.net/"],
    notes: `\
      Cylob - Majorette
      Cluster - Oh Odessa
      The Bearburger - Account Numbers
      V.D.B. Joel - Steel Muscles
      Aphex Twin - Mould
      Эдуард Артемьев - Untitled (Andrey Tarkovsky Vol. 3. Solaris)
      Arvo Pärt - Fratres
      David Sylvian + Holger Czukay - Premonition (Giant Empty Iron Vessel)
      Craig Leon - Four Eyes To See The Afterlife
      Drexciya - Take Your Mind
      `,
  },

  {
    id: "nineteen",
    name: "19: Hivemind",
    fileName: "music_for_programming_19-hivemind.mp3",
    compilerLinks: [
      {
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        label: "http://communty-hivemind.net/archive/",
      },
    ],
    notes: `\
      Terry Riley - Crucifixion Voices
      Kraftwerk - Ananas Symphonie
      Conrad Schnitzler - Ballet Statique
      Klaus Weltman - Albo The Pigeon Brings A Letter
      Harmonia - Gollum
      Rene Hell - Club Outing
      Sammy Osmo - Radar Bol (Main Theme)
      DJ Sprinkles - House Music Is Controllable Desire You Can Own
      Michel Moulinié - Lente Course
      Tortoise - Ten Day Interval
      Vangelis - Soil Festivities, Movement 3
      Mark Isham - Sympathy and Acknowledgement
      Kraftwerk - Franz Schubert / Endless Endless
      `,
  },
];

const episodeDatas: EpisodeData[] = episodeRawDatas.map((o, i) => ({
  ...o,
  fileRelUrl: "/audio/" + o.fileName,
}));

const episodeMap = new Map<string, EpisodeData>(
  episodeDatas.map((o) => [o.id, o])
);
