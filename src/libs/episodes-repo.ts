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

  {
    id: "twenty",
    name: "20: Uberdog",
    fileName: "music_for_programming_20-uberdog.mp3",
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
    name: "21: Idol Eyes",
    fileName: "music_for_programming_21-idol_eyes.mp3",
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
    name: "22: Mindaugaszq",
    fileName: "music_for_programming_22-mindaugaszq.mp3",
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
    name: "23: Panda Magic",
    fileName: "music_for_programming_23-panda_magic.mp3",
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
    name: "24: RITES",
    fileName: "music_for_programming_24-rites.mp3",
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
    name: "25: _nono_",
    fileName: "music_for_programming_25-_nono_.mp3",
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
    name: "26: Abstraction",
    fileName: "music_for_programming_26-abstraction.mp3",
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
    name: "27: Michael Hicks",
    fileName: "music_for_programming_27-michael_hicks.mp3",
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
    name: "28: Big War",
    fileName: "music_for_programming_28-big_war.mp3",
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
    name: "29: Luke Handsfree",
    fileName: "music_for_programming_29-luke_handsfree.mp3",
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
    name: "30: Matt Kruse",
    fileName: "music_for_programming_30-matt_kruse.mp3",
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
    name: "31: Datassette",
    fileName: "music_for_programming_31-datassette.mp3",
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
];

const episodeDatas: EpisodeData[] = episodeRawDatas.map((o, i) => ({
  ...o,
  fileRelUrl: "/audio/" + o.fileName,
}));

const episodeMap = new Map<string, EpisodeData>(
  episodeDatas.map((o) => [o.id, o])
);
