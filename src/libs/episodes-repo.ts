import type { LinkOrHref } from "./link";

export interface EpisodeRawData {
  readonly id: string;
  readonly number: number;
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

export function getEpisodeByNumber(episodeNumber: string): EpisodeData {
  return episodeMapByNumber.get(episodeNumber);
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
    number: 1,
    name: "01: Datassette",
    fileName: "music_for_programming_1-datassette.ogg",
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
    number: 2,
    name: "02: Sunjammer",
    fileName: "music_for_programming_2-sunjammer.ogg",
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
    number: 3,
    name: "03: Datassette",
    fileName: "music_for_programming_3-datassette.ogg",
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
    number: 4,
    name: "04: Com Truise",
    fileName: "music_for_programming_4-com_truise.ogg",
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
    number: 5,
    name: "05: Abe Mangger",
    fileName: "music_for_programming_5-abe_mangger.ogg",
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
    number: 6,
    name: "06: Gods Of The New Age",
    fileName: "music_for_programming_6-gods_of_the_new_age.ogg",
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
    number: 7,
    name: "07: Tahlhoff Garten + Untitled",
    fileName: "music_for_programming_7-tahlhoff_garten_and_untitled.ogg",
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
    number: 8,
    name: "08: Connectedness Locus",
    fileName: "music_for_programming_8-connectedness_locus.ogg",
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
    number: 10,
    name: "10: Unity Gain Temple",
    fileName: "music_for_programming_10-unity_gain_temple.ogg",
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
    number: 11,
    name: "11: Miles Tilmann",
    fileName: "music_for_programming_11-miles_tilmann.ogg",
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
    number: 12,
    name: "12: Forgotten Light",
    fileName: "music_for_programming_12-forgotten_light.ogg",
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
    number: 13,
    name: "13: Matt Whitehead",
    fileName: "music_for_programming_13-matt_whitehead.ogg",
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
    number: 14,
    name: "14: Tahlhoff Garten + Untitled",
    fileName: "music_for_programming_14-tahlhoff_garten_and_untitled.ogg",
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
    number: 15,
    name: "15: Dan Adeyemi",
    fileName: "music_for_programming_15-dan_adeyemi.ogg",
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
    number: 16,
    name: "16: Silent Stelios",
    fileName: "music_for_programming_16-silent_stelios.ogg",
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
    number: 17,
    name: "17: Graphplan",
    fileName: "music_for_programming_17-graphplan.ogg",
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
    number: 18,
    name: "18: Konx Om Pax",
    fileName: "music_for_programming_18-konx_om_pax.ogg",
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
    number: 19,
    name: "19: Hivemind",
    fileName: "music_for_programming_19-hivemind.ogg",
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

  {
    id: "twenty",
    number: 20,
    name: "20: Uberdog",
    fileName: "music_for_programming_20-uberdog.ogg",
    compilerLinks: ["https://soundcloud.com/uberdog"],
    notes: `\
      Danny Norbury - I turn off the last light and close the door
      Monolake - Mass Transit Railway
      Alva Noto - Xerrox Monophaser 1
      Lee Gamble - Rufige
      Laurie Spiegel - Pentachrome
      Dopplereffekt - Calabi Yau Manifold
      Oneohtrix Point Never - Russian Mind
      Ekoclef - Here Comes Trouble
      Arovane - Tomorrow Morning
      Southfacing - Mocked
      Autechre - Paralel Suns
      Leyland Kirby - When Did Our Dreams and Futures Drift So Far Apart (Different Mix)
      Danny Norbury - Bluebeard 4
      Tim Hecker - Rainbow Blood
      Tim Hecker - Harmony In Blue 1
      Laurie Spiegel - East River Dawn
      Aleksi Perala - The Field
      Oneohtrix Point Never - Woe is the Transgressor II
      The Boats - The Ballad for Achievement
      Stars of the Lid - Down 3
      Aleksi Perala - Rauhalanjuka
      `,
  },

  {
    id: "twentyone",
    number: 21,
    name: "21: Idol Eyes",
    fileName: "music_for_programming_21-idol_eyes.ogg",
    compilerLinks: ["https://idoleyes.bandcamp.com/"],
    notes: `\
      David Sylvan & Holger Czukay - Premonition (Giant Empty Iron Vessel)
      King Crimson - Islands (Oboe Mix)
      Agitation Free - Pulse
      Mordant Music - Inn Ohm The Lake
      Kid 606 - Horseback
      New Fast - High Rising Terminal
      Miles Davis - Nem Um Talvez
      Wolfgang Vogt - Ruckverzauberung 3.1
      Hawkwind - Forge Of The Vulcan
      Liars - It's All Blooming Now Mt. Heart Attack
      The KLF - Madrugada Eterna
      The United States Of America - Love Song For The Dead Che
      Manuel Goettsching - Quasarsphere
      Amon Tobin - Nova
      Emeralds - Now You See Me
      Idol Eyes - Gegen Bewegung
      Broadcast - Confession Modulation
      Shenzhen - Zen
      Human Mirror - Mountain Stomp
      `,
  },

  {
    id: "twentytwo",
    number: 22,
    name: "22: Mindaugaszq",
    fileName: "music_for_programming_22-mindaugaszq.ogg",
    compilerLinks: ["https://www.mixcloud.com/mindaugaszq/"],
    notes: `\
      Carl Craig & Moritz Von Oswald - Intro
      Carl Craig & Moritz Von Oswald - Movement 1
      Chris Zabriskie - Chance, Luck, Errors in Nature, Fate, Destruction As a Finale
      Pan American - Both Ends Fixed
      Boards of Canada - Under the Coke Sign
      Machinefabriek - Stofstuk (Alva Noto Remix)
      Alva Noto - Xerrox Phaser Acat 1
      Jon Hopkins - Abandon Window
      Robert Lippok - Open
      NHK'Koyxeи - 367
      Shed - Waved Mind / Archived Document
      Ryoji Ikeda - luxus 1-3
      Philip Glass - Koyaanisqatsi
      Philip Glass - Translation and Credits
      `,
  },

  {
    id: "twentythree",
    number: 23,
    name: "23: Panda Magic",
    fileName: "music_for_programming_23-panda_magic.ogg",
    compilerLinks: ["https://www.mixcloud.com/pandamagic/"],
    notes: `\
      Stuart Dempster - Cloud Landings
      Auburn Lull - Rising Meridian
      Node - Levy
      E.A.R. - Untitled (Koner Experiment 6)
      So Takahashi - Blue, Blue, Electronic Blue
      Giles Reaves - Wunjo (Monkeydeed Eggs Hell Remix)
      The Saxophonettes - Secret Squirrel (Orb-ient Remix)
      Mark Isham - Never Cry Wolf
      Cypher 7 - Ladder Of Lights
      Biosphere & Pete Namlook - When The Night Was Black
      Brook / Eno / Lanois - Hybrid
      Bola - Vespers
      William Fowler Collins - Dark Country Road
      Popol Vuh - Why Do I Still Sleep
      `,
  },

  {
    id: "twentyfour",
    number: 24,
    name: "24: RITES",
    fileName: "music_for_programming_24-rites.ogg",
    compilerLinks: ["https://soundcloud.com/rriitteess"],
    notes: `\
      Donnacha Costello - Cocoa B
      Disjecta - Pit
      Rocketship - We Took The High Road
      Rafael Anton Irisarri - Deception Falls
      Billow Observatory - Pankalia
      Oneohtrix Point Never - Describing Bodies
      Rob Theakston - Puck
      Legowelt - Pacific Dreams
      Borden, Ferraro, Godin, Halo, Lopatin - People of the Wind Pt. 1
      Tim Hecker - I'm Transmitting Tonight
      Nacho Patrol - El Fuego En Nosotros Todo (Heathered Pearls' Afternoon Nod Remix)
      Clark - Dusk Swells
      RITES - Descent
      `,
  },

  {
    id: "twentyfive",
    number: 25,
    name: "25: _nono_",
    fileName: "music_for_programming_25-_nono_.ogg",
    compilerLinks: ["https://soundcloud.com/nono-16"],
    notes: `\
      Belle Belle - End The Wind
      Maps And Diagrams - The Melancholy Of The Weavers
      Aus - It's Tomorrow Already
      Vangelis - Rachel's Song
      Puffin On My Side - Winter Coast Sand
      Calling Sister Midnight - Daemon In The Cube
      Mark Morgan - Metallic Monks
      _nono_ - Commfault
      Space Megalithe - Galaxie Miroir
      Nigel Samways - The Singing Gloom (heygate Version)
      Steve Roach - Walking Upright
      Hartverdrahtet - Akronyme Analogiker
      Tim Hecker - Hatred Of Music I
      Inputjunkei - Calixcoatesbeautifulcountryboardsechoredub
      Not Your Average Hippy - Sunset Dawn
      Harness Kretzer - A Teardrop On My Record Player
      Emmanuel Errante - Linfa
      `,
  },

  {
    id: "twentysix",
    number: 26,
    name: "26: Abstraction",
    fileName: "music_for_programming_26-abstraction.ogg",
    compilerLinks: ["https://soundcloud.com/abstraction"],
    notes: `\
      Sweetheart of Kairi - An Intro...
      Martin A. Smith - In Alien Lands
      Brainworks - O, Usurper! To Dust You Shall Return, For Your Throne is But a Vapour, Your Reign a Whispering Wind.
      Arromanches - Omaha
      Ray Lynch - Tiny Geometries
      C418 - I Will Perhaps Never Meet You In Person
      James Devane - 10-15
      Felix Laband - Radio Right Now
      Fingers In the Noise - Lost In the Freezing Fog
      Rhian Sheehan - Part 12
      Ioflow - Impermanence
      Abstraction - 06
      Owsey - The Melody That Plays Loud Through Sundown Skies
      `,
  },

  {
    id: "twentyseven",
    number: 27,
    name: "27: Michael Hicks",
    fileName: "music_for_programming_27-michael_hicks.ogg",
    compilerLinks: ["http://michaelarts.net/"],
    notes: `\
      Machinefabriek - Apollo
      Andy Stott - Submission
      Sigur Rós - Valtari
      Nils Frahm - Snippet
      Peter Broderick - Part 4: The Dream
      Halo - Hollow City
      Machinefabriek - Blue
      `,
  },

  {
    id: "twentyeight",
    number: 28,
    name: "28: Big War",
    fileName: "music_for_programming_28-big_war.ogg",
    compilerLinks: [
      "https://soundcloud.com/bigwar",
      "http://www.genericgreeting.co.uk/",
    ],
    notes: `\
      William Basinski - Untitled VI
      Actress - Jardin
      M. Geddes Gengras - Splashed Into Mine
      Welsh Assembly - Kuala Lumpur
      The Sight Below - Fervent
      littlecloud - tapeloop2
      Gas - Untitled
      Kernon - Tek N (edit)
      Talk Talk - Taphead
      Dettinger - Blond 2
      FREnchfire - Rich edit
      FREnchfire - Ambient Tech
      cLOUDDEAD - Apt. A (2)
      Schwarz - Skies 7 Skies 2 Backwards
      Secret Face - I Regret Nothing
      Blue Daisy x Anneka - Raindrops
      Robert Hood - Better Life
      Visionist - The Call (feat. Fatima Al Qadiri)
      Lorenzo Senni - PowerAge Xion4
      `,
  },

  {
    id: "twentynine",
    number: 29,
    name: "29: Luke Handsfree",
    fileName: "music_for_programming_29-luke_handsfree.ogg",
    compilerLinks: ["https://twitter.com/lukehandsfree"],
    notes: `\
      Jacob 2-2 & Pogflipper - Roof Top Paint Drops (excerpt)
      cLOUDDEAD - Our Name (excerpt)
      Reso - Coronium
      Claro Intelecto - Beautiful Death
      Clubroot - Birth Interlude
      Ross 154 - Hybris II
      Oneohtrix Point Never - Remember
      Rjyan Kidwell - Toronto Blessing
      Konx-Om-Pax - Govanhill Baths Live Recording
      Sepalcure - Inside
      Goitia Deitz - Speaking In Code
      Space Dimension Controller - Unidentified Flying Oscillator
      Inigo Kennedy - Daybreak
      Meschi - Sur La Route
      Alva Noto - Haliod Xerrox Copy 11
      Ochre - Sylph
      Goitia Deitz - In Tongues
      Unknown Artist - Unknown
      Miles - Loran Dreams
      FractalSCROTE - Suddenly Everything Has Changed... (unreleased)
      Blue Calx - Blue Calx
      Jeff Mills - Truth to the Chosen One
      Buddy Peace - Untitled (Bully Projects Megamix Side A)
      `,
  },

  {
    id: "thirty",
    number: 30,
    name: "30: Matt Kruse",
    fileName: "music_for_programming_30-matt_kruse.ogg",
    compilerLinks: ["https://twitter.com/krusenator"],
    notes: `\
      Odd Nosdam - 20th
      Boards of Canada - Dayvan Cowboy (Odd Nosdam Remix)
      Matthewdavid - Vvoxcave
      Casino Versus Japan - Lake
      Atlas Sound - Let The Blind Lead Those Who Can See But Cannot Feel
      Kingfisherg - We Heard A Faint
      Boards of Canada - Visual Drone 12 (Bonus)
      Stars Of The Lid - Manoeuvring The Nocturnal Hum (Live)
      Jessica Bailiff - Your Sounds Make Patterns In My Eyes (for SOTL)
      Freescha - Dental Fur
      Aphex Twin - Rhubarb
      Matthewdavid - Ambigroup
      Run DMT - Cash For Gold
      Matthewdavid - Tape4 (w/ Run DMT)
      Casino Versus Japan - Vessels That Float Out Of Metals That Sink (Part 4)
      Proem - Hope Is Great But We Need Caffeine
      `,
  },

  {
    id: "thirtyone",
    number: 31,
    name: "31: Datassette",
    fileName: "music_for_programming_31-datassette.ogg",
    compilerLinks: ["http://datassette.net/"],
    notes: `\
      Eugen Thomass - Dancing Fishes
      Colin Potter - Rooftops
      Datassette - Any Colour You Like
      Sluagh Ghairm - Incantation
      Children Of Alice - The Liminal Space
      Christ. - Pylonesque (Datassette Retouch)
      Datassette - Leaky Circuits
      Forward Strategy Group - Inside The Shadows
      Pantha Du Prince - Im Bann
      Digit (Kubus Kassettes 1984) (Excerpt) (Datassette Retouch)
      The Field - No. No... (Tim Hecker Remix)
      Stringtronics - Dawn Mists (Excerpt)
      Love Cult - Lulling Demons To Sleep
      Kane Ikin - Slow Waves
      Jo Johnson - Ancestral Footsteps
      `,
  },

  {
    id: "thirtytwo",
    number: 32,
    name: "32: Chris Seddon",
    fileName: "music_for_programming_32-chris_seddon.ogg",
    compilerLinks: ["http://cseddon.co.uk/"],
    notes: `\
      Pulse Emitter - Purple
      Atom TM - Tiefebene
      TU M' - Monochrome #03
      154 - Abrighterday
      Susumu Yokota - Azukiiro No Kaori
      Cluster - Imtrerion
      John Beltran - Snowdrifts
      Andrew Liles - The Dream Of The One Legged Woman
      Global Communication - 4:02
      Steve Hauschildt - Overnight Venusian
      Susumu Yokota - Daremoshirani Chiisankuni
      Cut Hands - ++++
      ELpH vs. Coil - Manukind
      Autechre - Yulqueen
      In Aeternam Vale - Edit
      Monolake - Terminal
      `,
  },

  {
    id: "thirtythree",
    number: 33,
    name: "33: uuav",
    fileName: "music_for_programming_33-uuav.ogg",
    compilerLinks: ["https://twitter.com/uuav"],
    notes: `\
      uuav - Onotram (Varroa Ex Soundtrack)
      Joachim Holbek - Introduction
      Dune - zeo-x-s
      Greg Lo Piccolo, Tim Ries - Security
      Cliff Martinez - Placenta Repair
      Visionist - Can't Forget
      uuav - Runawae (Varroa Ex Soundtrack)
      Burial - Broken Home
      Burial - Lambeth (Remix)
      Greg Lo Piccolo, Tim Ries - Security
      Autechre - Lost
      Oneohtrix Point Never - Chrome Country
      Unknown - I Hate You Kanye
      Ulf Lohmann - Because
      uuav - Micopa (Varroa Ex Soundtrack)
      Carl Erik Rinsch - Escape The Map
      `,
  },

  {
    id: "thirtyfour",
    number: 34,
    name: "34: Chukus",
    fileName: "music_for_programming_34-chukus.ogg",
    compilerLinks: ["https://soundcloud.com/chukus"],
    notes: `\
      Ricardo Donoso - Overture
      Jonsi and Alex - Sleeping Giant
      Jon Hopkins - Abandon Window
      Alva Noto - Xerrox Phaser Acat 1
      Hecq - I Am You
      Ben Lukas Boysen - You'll Miss Us One Day
      M83 - Midnight Souls Still Remain
      Steve Moore - Endless Mountains
      Carbon Based Lifeforms - Arecibo
      Vincent I Watson - Re-Contact
      Miles - Loran Dreams
      Blue Sky Boys - Will You Miss Me When I'm Gone
      `,
  },

  {
    id: "thirtyfive",
    number: 35,
    name: "35: Nadim Kobeissi",
    fileName: "music_for_programming_35-nadim_kobeissi.ogg",
    compilerLinks: ["https://nadim.computer/"],
    notes: `\
      VHS Head - Movies That Never Were
      Steve Hauschildt - Uncanny Valley
      Vangelis - Memories of Green
      Steve Hauschildt - Coming Into View
      Matt Carlson - Raindrop Garden
      [PHYSICS] - Intrusion
      Terry Riley - Desert of Ice
      Emeralds - Living Room
      Oneohtrix Point Never - Memory Vague
      Oneohtrix Point Never - Ouroboro
      `,
  },

  {
    id: "thirtysix",
    number: 36,
    name: "36: Ea7_dmZ",
    fileName: "music_for_programming_36-ea7_dmz.ogg",
    compilerLinks: ["https://soundcloud.com/ea7_dmz"],
    notes: `\
      Thomas Köner - Une topographie Sonore
      Reuber - Ruhig Blut A
      Panamerican - Plains
      Shuttle 358 - Fissure
      Carl Stone - Chao Nue
      Jan Jelinek and Computer Soup - The New Anthem
      Tim Hecker - Song of the Highwire Shrimper
      Pendler - Cph Pendler Music
      Alva Noto - Modul 4
      Hazard - Pylons 4
      Thomas P. Heckmann - 08:29:47
      Frank Bretschneider - Mr. Bowling Shoe Giver Outter
      Thomas Brinkmann - 0101
      Play Pause Trio - Pathétique
      `,
  },

  {
    id: "thirtyseven",
    number: 37,
    name: "37: Lackluster",
    fileName: "music_for_programming_37-lackluster.ogg",
    compilerLinks: ["https://lackluster.bandcamp.com/"],
    notes: `\
      Aphex Twin - Red Calx [SLO] (Soundcloud Dump) (-12 repitch)
      Esa Ruoho - Oijoijoi (Places Ep)
      Esa Ruoho - Maskaako (Places Ep) (+3 repitch)
      Aphex Twin - Rhubarb Orb 19.53 Rev (Soundcloud Dump) (-3 repitch)
      Esa Ruoho - Parched Throat (Parched Throat Ep)
      Esa Ruoho - Riversmouth (Riversmouth Ep) (-2 repitch)
      Lackluster - Monsanto Corporation (The Stationary Trout Ep) (-12 repitch)
      Lackluster - TVLayers (Lax Ep) (-4 repitch)
      Esa Ruoho - Molies #4 (Molies Ep)
      Esa Ruoho - Interlude for Halcyon DVD (Places Ep) (-4 repitch)
      Esa Ruoho - Glasnevin (On the Hangar of Spaceship Earth) (-4 repitch)
      Esa Ruoho - Tiptoe (On the Hangar of Spaceship Earth)
      Esa Ruoho - Incoming (unreleased)
      `,
  },

  {
    id: "thirtyeight",
    number: 38,
    name: "38: J.S. Aurelius",
    fileName: "music_for_programming_38-j_s_aurelius.ogg",
    compilerLinks: ["https://www.discogs.com/artist/3270321-JS-Aurelius"],
    notes: `\
      Software - Self-Similarity-Life
      Black Tape For A Blue Girl - The Christ In The Desert
      Electric Sewer Age - Moon's Milk (Waning)
      Trans-Millenia Consort - Freebasing
      Michael Stearns - Life In The Gravity Well
      Bitchin Bajas - Bueu
      J.S. Aurelius - Conjectures of a Guilty Bystander
      M. Geddes Gengras - Night Work
      Niggas With Guitars - Okkultistismist
      Wavestar - Moonwind
      Glochids - Pulse Sjilver
      `,
  },

  {
    id: "thirtynine",
    number: 39,
    name: "39: Kidding Kurrys",
    fileName: "music_for_programming_39-kidding_kurrys.ogg",
    compilerLinks: [
      "https://soundcloud.com/kiddingkurrys",
      "https://soundcloud.com/slowisthenewfast",
    ],
    notes: `\
      Jerry Martin - New Terrain
      Deepchord Presents Echospace - Untitled 7 + Glossata - Lampsace (sample)
      Lusine Icl - Caught In The Middle
      The Black Dog - Delay 9
      Daughter Of The Industrial Revolution - The Folding Of Paper
      Unknown Artist - Untitled 07/Track 02
      Unknown Artist - Untitled 08/Track 01
      Fennesz - Glass Ceiling
      Unknown Artist - Untitled 04/Track 01
      Unknown Artist - Untitled 09/Track 04
      Tim Hecker - Sketch 3
      The Black Dog - Terminal EMA
      Bill Elm and Woody Jackson - Born Unto Trouble
      Ben Frost - Sleeping Beauty
      Unknown Artist - Untitled 04/Track 04
      Experimental Audio Research - Untitled
      Unknown Artist - Untitled 12/Track 04
      Brian Eno - Lux (Nicolas Jaar Remix) (reversed)
      Greg Haines - The Intruder
      Demdike Stare - Leptonic Matter + Tim Hecker - Untitled
      Unknown Artist - Untitled 05/Track 04
      Moon Ate the Dark - Messy Hearts
      `,
  },

  {
    id: "forty",
    number: 40,
    name: "40: Mark Schneider",
    fileName: "music_for_programming_40-mark_schneider.ogg",
    compilerLinks: ["https://twitter.com/MarkASchneider"],
    notes: `\
      Michael Small - Klute Main Title
      Tom Verlaine - Spiritual
      Flying Lotus - Pickled (Stripped Version feat. Matthew David)
      Plaid - Ralome
      Quadro Asolano - G. Battista Fontana: Sonata IV per flauto soprano e organo
      Wax Audio - Gyante Chants, Bali Prayer
      Jerry Goldsmith - The Veldt 21st Century House
      David Sylvian - Trauma
      Cosmic Jokers - Queen of Sunshine / Meine Kosmische Musik
      Death Cube K - Hanging Gallows
      Boards of Canada - Breaking Nehushtan
      Manuel Göttsching - Quasarsphere
      John Lurie - Nicoletta Can't Cook
      Raymond Scott - Little Miss Echo
      Memory Tapes - Musicbox (Out)
      `,
  },

  {
    id: "fortyone",
    number: 41,
    name: "41: Sunjammer",
    fileName: "music_for_programming_41-sunjammer.ogg",
    compilerLinks: ["http://doomsday.no/"],
    notes: `\
      Hotel Neon - A Lament
      Astral & Shit - Puls
      Irezumi - Untitled 6
      Ben Lukas Boysen - Blessed
      Kashya - Tokyo
      Velvet Cacoon - Dreaming in a hemlock patch
      Secret Pyramid - A descent
      Mushy - I will not see it
      SiJ - There is no life without love
      `,
  },

  {
    id: "fortytwo",
    number: 42,
    name: "42: Datassette",
    fileName: "music_for_programming_42-datassette.ogg",
    compilerLinks: ["https://datassette.bandcamp.com/"],
    notes: `\
      Steve Everitt - Twa Brigs (edit)
      Francis Monkman - Subterrain
      Secreto Metro - Anteayer Nade En El Agua
      Klimek - Ruined In A Day (Buenos Aires)
      James Freeman - Crgbmpglp
      Fis - Her Third Eye (Drum Rain)
      Kora Et Le Mechanix - Kourou
      Howlround feat. Abandoned Playground - OH
      Alvin Curran - Canti E Vedute Del Giardino Magnetico (excerpt)
      Vit Fana - Jag Glömmer Aldrig
      Richard Skelton - The Black Water
      R. Stevie Moore - For Vini
      Lino Capra Vaccina - Motus (edit)
      Gianni Proletti - Nothing Is Perfect
      Chevel - Hexadecimal
      Detritus - Nought (Brain Remix)
      Odd Nodsam - T r i s h
      `,
  },

  {
    id: "fortythree",
    number: 43,
    name: "43: Hey Exit",
    fileName: "music_for_programming_43-hey_exit.ogg",
    compilerLinks: ["http://www.heyexit.com/"],
    notes: `\
      Ensemble De Organographia - Salpinx call / The Sappho Painter (5th c. BC)
      Hey Exit - Our Ceiling Repairs
      Oven Rake - Swimming Pool
      Aki Onda - I Tell a Story of Bodies That Change (excerpt)
      The Carmelite Nun of Luçon - The Burden of the Day
      Grouper - Little Gray Cat
      Hey Exit - So They Spoke
      Geotic - Get Held
      Jozef Van Wissem - Without the Rose / Iannis Xenakis - Bohor (excerpt)
      Nocturnal Emissions - Wikka Man
      Hey Exit - An American Flower
      Loren Connors - Pretty As Ever (4) / The Cart Ride
      Chieko Mori - Dreams
      Zero Kama - Town of Pyramids (Night of Pan)
      Danny Clay - Mt. Adams
      Oren Ambarchi - Trailing Moss In Mystic Glow (excerpt)
      The Test Results - Sisyphus2 (excerpt)
      Mamoru Fujieda - The Sixth Collection, Pattern XXI
      Khonnor - I Was Everything You Wanted Until I Quit
      Hey Exit - Small Burials
      Louis Andriessen - Deuxiéme Chorale
      `,
  },

  {
    id: "fortyfour",
    number: 44,
    name: "44: hukka",
    fileName: "music_for_programming_44-hukka.ogg",
    compilerLinks: ["https://soundcloud.com/hukka"],
    notes: `\
      hukka - Resolutions
      William Basinski - DP 1.1
      David Kristian - I Loved You
      Mathias Grassow & Thomas Weiss - Indisputable Grace
      hukka - ambi1
      Experim3ntus - The Groke's Icy Tears
      Flaa - Gauf's Room
      Woob - Odonna
      Klaus Schulze - Freeze
      The Inventors of Aircraft - Hazel
      hukka - Recurring
      Biosphere - Translation
      GAS - Zauberberg 7
      Linus Akesson - Fratres (Arvo Pärt)
      hukka - Convergence
      Experim3ntus - Electric Waves
      Chris McCormack - Erase Techno (B2)
      `,
  },

  {
    id: "fortyfive",
    number: 45,
    name: "45: Ehohroma",
    fileName: "music_for_programming_45-ehohroma.ogg",
    compilerLinks: ["https://soundcloud.com/ehohroma"],
    notes: `\
      Cremation Lily - Presence of Light
      Stereo Nova - Asirmatos Kosmos
      Rafael Anton Irisarri - Persistence
      Deru - Three Cheers for Existence
      Varg - Ursviken
      Angelo Badalamenti - Laura Palmer's Theme
      Museum - Little Dead Things
      Boards of Canada - Tears From The Compound Eye
      Ólafur Arnalds & Nils Frahm - 23:17
      S Olbricht - Lacertid (feat. Imre Kiss)
      Levantis - Jamaican Greek Style
      Tim Hecker - Analog Paralysis, 1978
      Aphex Twin - Aisatsana
      `,
  },

  {
    id: "fortysix",
    number: 46,
    name: "46: Jo Johnson",
    fileName: "music_for_programming_46-jo_johnson.ogg",
    compilerLinks: [
      "https://jojohnson.bandcamp.com/",
      "https://soundcloud.com/werkhouse",
    ],
    notes: `\
      Hamid Ali Khan - Rag Malkauns: Alap
      Oootini - Four Loops Set Running
      Laurie Spiegel - The Unquestioned Answer
      J D Emmanuel - Rain Forest
      Brian Eno - An Arc of Doves
      Pandit Shiv Kumar Sharma - Raga Kaushik Dhwani: Alap
      Maggi Payne - Hikari
      Satashi Ashikawa - Landscape of Wheels
      Steve Roach - Structures from Silence
      Jon Brooks - How the Land Lies
      Tortoise - Four Day Interval
      Eitetsu Hayashi - Karabinka
      Steve Reich - New York Counterpoint 1. Fast
      Lino Capra Vaccina - Movements and Silences for White Spaces
      Raica - Satmor
      Stars of the Lid - Mouthchew
      Maggi Payne - Gamelan
      Outer Space - February 8th, 1990 - Ashland, Ohio
      Jonathan Fitoussi - Cassiopee
      Sarah Davachi - A Garden, An Orchard
      Tsering Tobgyal - Peace in Your Mind
      J D Emmanuel - Focusing Within
      Charlemagne Palestine - Schlingen-Blängen
      `,
  },

  {
    id: "fortyseven",
    number: 47,
    name: "47: Abe Mangger",
    fileName: "music_for_programming_47-abe_mangger.ogg",
    compilerLinks: ["https://soundcloud.com/abe_mangger"],
    notes: `\
      The Gordon Highlanders - Amazing Grace (Screwed)
      G*Park - Gour
      Marc Barreca - Memory Paths
      Eroc - Des Zauberers Traum
      Laurie Spiegel - Improvisation on a Concerto Generator
      Steve Roach - Day One
      Michael Stearns - In The Beginning
      Ensemble Pearl - Giant
      Toru Takemitsu - Rikyu
      Terre Thaemlitz - Ageing Core, Ageing Periphery
      The Soft Machine - Out-Bloody-Rageous
      Cyclobe - Sentinels
      Hildegard Westerkamp - Breathing Room
      Chris Watson - No Man's Land
      Fumio Kosakai - Earth Calling
      Jean-Claude Risset - Sud
      Michael Stearns - Sleeping Conches
      Basil Kirchin - Emergence
      Jaap Vink - Stroma
      Roland Kayn - Etoral
      Abe Mangger - The Bitter Tears of the Space Peacock
      Manuel Göttsching - Quasarsphere
      The Grateful Dead - Cease Tone Beam
      The Soft Machine - Out-Bloody-Rageous
      Kim Cascone - Rotational Beacon
      Coil - Queens of the Circulating Library
      John Duncan - Phantom Broadcast
      Mark Isham - Skydive
      Steve Hauschildt - Critique of the Beautiful
      Tetsu Inoue - Peak
      Pauline Oliveros - A Woman Sees How The World Goes With No Eyes
      Yellow Magic Orchestra - Loom
      Zoviet-France - Reson Deaw Gwalch
      Kevin Drumm - I'll Never Go To Mass Again
      Derek Bailey - Where Is The Police?
      Terry Riley - Crossroads
      L'Eclisse - Existential Flagpoles
      Abe Mangger - Careless Marsbar
      `,
  },

  {
    id: "fortyeight",
    number: 48,
    name: "48: Michael Hicks",
    fileName: "music_for_programming_48-michael_hicks.ogg",
    compilerLinks: [
      "https://michaelarts.bandcamp.com/",
      "http://www.michaelarts.net/",
    ],
    notes: `\
      Byron Westbrook - Infinite Sustain
      Arvo Pärt - Für Alina
      Kerkville - Next To Me
      Lee Noble - Paradise Life
      Balam Acab - Long
      Heather Woods Broderick - For Misty
      Morton Feldman - Rothko Chapel 5
      Benoît Pioulard - Shut-Ins On Sunday See
      Sigur Rós - Ofbirta
      Jannick Schou - The Last Days Drove Off
      `,
  },

  {
    id: "fortynine",
    number: 49,
    name: "49: Julien Mier",
    fileName: "music_for_programming_49-julien_mier.ogg",
    compilerLinks: [
      "https://julienmier.bandcamp.com/",
      "https://twitter.com/julienmier",
    ],
    notes: `\
      Ametsub - Over 6633
      Mark Pritchard - Sad Alron
      Halogen - Length And Brecht
      Floex - Blow Up
      Ochre - Paper Unicorn (Digitonal Transcription)
      Julien Marchal - Insight XX
      Beatsofreen - Sorrow
      Flying Lotus - Infinitum
      Four Tet - Gillie Amma I Love You
      Machinedrum - Where Did We Go Wrong
      Kettel - Goodbye In September
      Jon Hopkins - Immunity
      `,
  },

  {
    id: "fifty",
    number: 50,
    name: "50: Misc.",
    fileName: "music_for_programming_50-misc.works.ogg",
    compilerLinks: ["http://misc.works/"],
    notes: `\
      Leyland Kirby - Tinseltown
      Tengui - Conditions
      Orrest - een°dag
      Phill Niblock - P K
      Tangerine Dream - Nebulous Dawn
      Graham Dunning - Aggregate
      Benedict Drew - A Hinge
      Philip Jeck - All That's Allowed (live)
      -1348- - Untitled
      Mads Emil Nielsen - Glow
      Malcolm Cecil - Gamelonia Dawn
      Steve Legget - St. Croce Bells, Florence
      Broadcast - Microtronics 20
      Woo - Spaces We Breathe
      Abdulla Rashim - Flatlands
      Modern Art - Tu Quoque, Fili Mi
      Sars - Amanda
      Irsol - Drill
      Yello - Thrill Wave
      Aphex Twin - Avril Altdelay
      Christ. - Dempsey
      Unknown - Musique Et Appels Des Promineurs (Auvidis Library)
      Our Grey Lives - Cacophony Nine
      Agents of the Culture Industry - frgmnt
      Burial - Beachfires
      Music For Programming - Manifesto (Misc. Sludge Edit)
      Grouper - Dragging The Streets
      `,
  },

  {
    id: "fiftyone",
    number: 51,
    name: "51: Mücha",
    fileName: "music_for_programming_51-mücha.ogg",
    compilerLinks: [
      "https://misc-works.bandcamp.com/album/misc-works",
      "https://moocha1.bandcamp.com/music",
    ],
    notes: `\
      Windy and Carl - Antarctica
      Alva Noto - Verrox Solphaer
      Masayoshi Fujita & Jan Jelinek - Cin
      Sam Prekop - Knitting Needles
      Huerco S - Untitled
      Kaitlin Aurelia Smith - When I Try I�m Full
      Taylor Deupree & Marcus Fischer - Wake
      Mica Levi & Oliver Coates - Pre Barok
      Andrew Chalk - The Arkay Stream
      Kara Lis Coverdale - Grigori In Jakarta
      Iasos - Formentera Sunset Clouds
      Bruised Skies - Tonight
      Shuttle 358 - Imaginary Other
      Benoit Pioulard - An Image Apart From Ourselves
      Tim Hecker - No Drums
      Oneohtrix Point Never - Ouroboros
      Mücha - And his fleeting sun
      K. Leimer Feat Dawn Seago - The Phonic Chasm
      `,
  },

  {
    id: "fiftytwo",
    number: 52,
    name: "52: Inchindown",
    fileName: "music_for_programming_52-inchindown.ogg",
    compilerLinks: [
      "https://blankeditions.bandcamp.com/album/inchindown",
      "https://moonzero.bandcamp.com/",
      "https://bruisedskies.bandcamp.com/",
    ],
    notes: `\
      Hiroshi Yoshimura - Feel
      Rainforest Spiritual Enslavement - Chile's Crimson Tide
      Brian Eno & Robert Fripp - Wind On Wind
      AFX - Red Calx (Slo)
      Paul Jebanasam - Rites I
      Harold Budd & Brian Eno - Dark Eyed Sister
      Godspeed You! Black Emperor - Providence
      Grouper - Made Of Air
      Boards Of Canada - Semena Mertvykh
      Suzanne Ciani - Concert at WBAI
      Cluster - Es War Einmal
      Su Tissue - 2nd Movement
      Sohrab - Somebody
      Miles Davis - Selim
      Sangam - Holy Reign Feat. HKE
      2 8 1 4 - 恢复
      Claude Speeed - Wellness Drone
      Huerco S. - A Sea Of Love
      Dedekind Cut - Descend From Now
      Tim Hecker - Studio Suicide 1980
      Kara-Lis Coverdale - Imgs
      R Rafael Anton Irrisari - Sky Burial
      Valiska - 5 Seconds
      thomas9000 - Untitled
      Polmo Polpo - Garca
      FIS - Her Third Eye (Drum Rain)
      Autechre - Altibzz
      `,
  },

  {
    id: "fiftythree",
    number: 53,
    name: "53: Beb Welten",
    fileName: "music_for_programming_53-beb_welten.ogg",
    compilerLinks: ["https://www.bebwelten.de/"],
    notes: `\
      T Raumschmiere - Do Not Open The Hatch In A Diving Submarine
      Casual Violence - Unexpected Grace
      Deadbeat - Walls & Dimensions
      Anja Zaube - Sylvan Structure
      The Result - Alias Of Your Mind
      Katsunori Sawa - Evocation
      Elemental - In Still
      Steinbrüchel - 1b
      Emile - Untitled
      Albert Van Abbe - Ostinato 04
      Jon Porras - New Monument
      Jonas Kopp - El Alba Vos Y Yo
      Abul Mogard - House On The River
      Paul Mitchell - Black
      Strategy - Awesome Piano
      Anowone - Lp03d
      Abul Mogard - Sound Universe
      Marco M. Bernd - Prism Dub Redux
      Basic Channel - Octagon
      `,
  },

  {
    id: "fiftyfour",
    number: 54,
    name: "54: HLER",
    fileName: "music_for_programming_54-hler.ogg",
    compilerLinks: [
      "https://hler.bandcamp.com",
      "https://www.instagram.com/hlerdrone/",
    ],
    notes: `\
      HLER Live at The Bunker (5th August 2018)
      `,
  },

  {
    id: "fiftyfive",
    number: 55,
    name: "55: 20 Jazz Funk Greats",
    fileName: "music_for_programming_55-20_jazz_funk_greats.ogg",
    compilerLinks: ["http://20jazzfunkgreats.co.uk/"],
    notes: `\
      H Takahashi - =...
      H Takahashi - Quiet
      Satoshi Ashikawa - Still Sky
      Hiroshi Yoshimura - Green Shower
      Hiroshi Yoshimura - Creek
      Yutaka Hiroshe - Slow Sky
      Visible Cloaks feat. Miyako Koda - Valve (Revisited)
      Hiroshi Yoshimura - Silence
      Toshifumi Hinata - Broken Belief
      Midori Takada - Crossing
      Mkwaju Ensemble - Lemore
      `,
  },

  {
    id: "fiftysix",
    number: 56,
    name: "56: Forest Drive West",
    fileName: "music_for_programming_56-forest_drive_west.ogg",
    compilerLinks: ["https://soundcloud.com/forest-drive-west"],
    notes: `\
      Forest Drive West - Untitled
      Shed - The Traveller
      Tim Hecker - Arctic Lover's Rock
      Forest Drive West - Dalyan
      Mountains Mountains Mountains - Nest
      Forest Drive West - Fingal's Cave
      Knuckleduster - Nuukoono
      Alva Noto - T3 (for Dieter Rams)
      Forest Drive West - Untitled
      Moniker - Untitled
      Esmerine - Hayale Dalmak
      cLOUDDEAD - Cloud Dead Number Five, Pt. 1
      Forest Drive West - Buskers Delight
      X-Piano Orchestra - Gongs And Clicks
      Forest Drive West - Untitled
      Jon Hassell - Clairvoyance
      K. Leimer - Ikumi
      Atom TM - Wellen Und Felder I
      `,
  },

  {
    id: "fiftyseven",
    number: 57,
    name: "57: Hainbach",
    fileName: "music_for_programming_57-hainbach.ogg",
    compilerLinks: [
      "https://www.hainbachmusik.com/",
      "https://misc-works.bandcamp.com/album/impulsgenerator",
    ],
    notes: `\
      Maps and Diagrams - excerpt from Azurescens
      Emily Sprague - excerpt from Friends
      Scott Campbell - excerpt from Photos From The Flood
      J Butler - excerpt from Found
      Healthy Lives - excerpt from Interiors
      Minicomponente - excerpt from In Tu
      Hainbach - excerpt from VA / 1 Year (Soil Records)
      Signal Mountain - excerpt from Familiar Trails
      Ian Boddy - excerpt from String Fragment 1984
      `,
  },

  {
    id: "fiftyeight",
    number: 58,
    name: "58: OliSUn",
    fileName: "music_for_programming_58-olive_is_the_sun.ogg",
    compilerLinks: ["https://oliveisthesun.bandcamp.com/"],
    notes: `\
      The Glove - A Blues In Drag
      Etienne Daho - Ouverture (OliSUn ReWork)
      Keith Jarrett - Köln Concert, Pt. IIa
      \xA0\xA0\xA0 + Field Recording 22/7/2018 Metro Paris
      Sufjan Stevens - For Clyde Tombaugh
      Amulets - Endless Tape Loop Cassette
      OliSUn - Untitled, Unreleased
      Spectrum - My Love For You Never Died Away But My Soul Gave Out & Withered
      \xA0\xA0\xA0 + Ma Vie Chez Maud (Excerpt)
      Sea Glasses - Summer From The Basement
      Setter - Soft Serve
      Dirty Beaches - Goodbye, Honolulu
      `,
  },

  {
    id: "fiftynine",
    number: 59,
    name: "59: Miunau",
    fileName: "music_for_programming_59-miunau.ogg",
    compilerLinks: [
      "https://miunau.com/",
      "https://soundcloud.com/miunau",
      "https://twitter.com/miuott",
    ],
    notes: `\
      All tracks by Miunau:

      Healing Loop 5
      Healing Loop 5 (MFP Reduce)
      Healing 4
      Healing 4 (MFP Reduce)
      Reduce 12 (For Swish)
      Phase Movement
      Duotone (MFP Reduce)
      M4L Crash Loop Float 2 (MFP Version)
      Introspection X (MFP Version)
      Introspection IV (MFP Version)
      M4L Crash Loop Float 7 (MFP Version)
      Little Fox (MFP Version)
      Gold 2
      Purple 5 (MFP Reduce)
      Eye Of The Snow Leopard
      End
      `,
  },

  {
    id: "sixty",
    number: 60,
    name: "60: TUNDRA",
    fileName: "music_for_programming_60-tundra.ogg",
    compilerLinks: [
      "http://wearetundra.org/",
      "https://www.instagram.com/wearetundra/",
    ],
    notes: `\
      All tracks by TUNDRA:

      Breathing part (DWLF installation)
      Memories of Taiga
      Rhodesia Drone
      Anokhin Speaks (My Whale installation)
      Mountaniac Intervals Drone
      Transcendental sequence
      Pozhar (DWLF installation)
      DWLF Main Theme (DWLF Installation)
      Transcendental Drone
      Fantome (My Whale installation)
      Aphex Queen
      Noise in My Heart
      Noise in My Ears + ROW voices (ROW installation)
      Memories of Taiga (part 2)
      Major Flight Drone
      Nomad sequence (Nomad installation)
      Anxiety drone + Sao Paulo field recordings
      Blue Scan (DWLF installation)
      DWLF Birds Lfo
      Your Inner Whale (My Whale installation)
      Luminous Hexagonal (My Whale installation)
      Skazka (MFP outro)
      `,
  },

  {
    id: "sixtyone",
    number: 61,
    name: "61: Linnley",
    fileName: "music_for_programming_61-linnley.ogg",
    compilerLinks: ["https://soundcloud.com/linnley-music"],
    notes: `\
      Tomoko Sauvage - Clepsydra
      Roberto Musci - Tantric Hymns
      Pier Luigi Andreoni, Francesco Paladino - Aeolyca part I
      Linnley - Iwahig
      Andrew Pekler - Hy Brasil
      Cofaxx - From Memory pt. 2
      Miguel Noya - Megabrain Focos part 1
      Ali Wade - My Mind Laid Out Before Me
      AI?-?19 - Metamorfosi
      Dravier - Ercoupe
      excael - into deep
      CV & JAB - Rock House with Door
      Linnley - Homedown
      William Selman - Polysemy
      Pontiac Streator & Ulla Straus - Item 10
      `,
  },

  {
    id: "sixtytwo",
    number: 62,
    name: "62: Our Grey Lives",
    fileName: "music_for_programming_62-our_grey_lives.ogg",
    compilerLinks: ["https://misc-works.bandcamp.com/album/cacophonies"],
    notes: `\
      10th Anniversary Special
      ----------------------

      Episodes 1 to 61 of Music For Programming (the first ten years of the series) were edited to equal lengths and played simultaneously. The resulting cacophony was passed multiple times through an array of analogue and virtual signal processing devices until the centre-of-gravity between antagonism and attractiveness was found.

      During the process, multiple layers of infrasonic modulation were introduced at varying timescales, from 0.001Hz to around 24Hz. Each modulation frequency being a 1.618 (golden ratio) factor of the slowest, most noticeable root modulation, which in this case is a 'spectral contrast' processor that gradually plunges the soundscape into a watery abyss every 110 seconds before slowly bobbing up to the surface again to gasp for air.
      `,
  },
];

const episodeDatas: EpisodeData[] = episodeRawDatas.map((o) => ({
  ...o,
  fileRelUrl: "/audio/" + o.fileName,
}));

const episodeMap = new Map<string, EpisodeData>(
  episodeDatas.map((o) => [o.id, o])
);

const episodeMapByNumber = new Map<string, EpisodeData>(
  episodeDatas.map((o) => [`${o.number}`, o])
);
