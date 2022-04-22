export enum CreatureFlag {
  Perm = 0,                   // is permanent
  Hidden = 1,                 // is hidden
  WasHidden = 2,              // was hidden before and will rehide again
  FactionNoGuard = 3,         // if player is in good standing, creature will not passively guard exits
  // 4
  NoPrefix = 5,               // no prefix
  Aggressive = 6,             // aggro
  GuardsTreasure = 7,         // guards items on ground
  BlockExit = 8,              // blocks exits
  FollowAttacker = 9,         // follows players attacking it
  WillFlee = 10,              // will flee
  Scavenger = 11,             // is a scavenger
  Male = 12,                  // sex = male
  Poisons = 13,               // will poison
  Undead = 14,                // is undead
  NoSteal = 15,               // cannot be stolen from
  NoHarmSpell = 16,           // immune to harm spell
  CanCast = 17,               // can cast spells
  HasScavenged = 18,          // has already scavenged something
  // 19
  MagicOnly = 20,             // can only be harmed by magic
  FactionAssist = 21,         // will assist members of faction
  EnchantedWeapOnly = 22,     // can only be harmed by magic/ench weapons
  Talks = 23,                 // has interactive dialogue
  Unkillable = 24,            // cannot be killed
  NoRandomGold = 25,          // has fixed amount of gold
  TalkAggro = 26,             // aggros after talk
  NoFactionAggro = 27,        // don't aggro based on faction
  CanRiposte = 28,            // can riposte regardless of other rules
  Darkness = 29,              // is carrying a darkness item
  // 30
  // 31
  CanPledge = 32,             // can pledge with
  CanRescind = 33,            // can rescind with
  Diseases = 34,              // causes disease
  Dissolves = 35,             // can dissolve items
  CanPurchase = 36,           // can purchase from
  Trader = 37,                // can trade with
  PassiveGuard = 38,          // passively guards exits
  AggroGood = 39,             // aggros good
  AggroEvil = 40,             // aggros evil
  DeathScene = 41,            // additional output after death
  CastPercent = 42,           // cast percentage (prof 1)
  ResistStunSpell = 43,       // resists stun
  NoCircle = 44,              // cannot be circled
  Blinds = 45,                // can blind
  DMFollow = 46,              // will follow DM
  // 47
  // 48
  // 49
  Charmed = 50,               // is charmed
  Mobile = 51,                // will wander around
  Logic = 52,                 // logic monster
  TakeLoot = 53,              // will try to take loot
  FastWander = 54,            // quickly wanders around
  Pet = 55,                   // is a pet
  // 56
  // 57
  // 58
  // 59
  // 60
  // 61
  Sexless = 62,               // has no sex
  // 63
  // 64
  // 65
  // 66
  // 67
  // 68
  // 69
  // 70
  NoWander = 71,              // will not wander
  // 72
  // 73
  // 74
  // 75
  // 76
  // 77
  // 78
  // 79
  // 80
  // 81
  // 82
  // 83
  // 84
  // 85
  // 86
  // 87
  // 88
  // 89
  Regenerates = 90,           // regenerates
  PlusTwo = 91,               // minimum +2 weap to hit
  PlusThree = 92,             // minimum +3 weap to hit
  // 93
  StealWhenAttacked = 94,     // will steal when attacked
  StealAlways = 95,           // will steal on sight
  // 96
  // 97
  // 98
  WillBeAssisted = 99,        // can be assisted
  WillAssist = 100,           // will assist other creatures
  NightOnly = 101,            // only comes at night
  AggroOutlaw = 102,          // will aggro outlaws
  // 103
  // 104
  // 105
  WillWield = 106,            // will wield weapons in their inventory
  // 107
  // 108
  DayOnly = 109,              // only comes during day
  NoArrival = 110,            // don't display the creature arriving
  // 111
  // 112
  Undodgeable = 113,          // cannot be dodged
  // 114
  // 115
  AttackingShoplifter = 116,  // is attacking a shoplifter
  ChasingSomeone = 117,       // is chasing someone
  ResistCircle = 118,         // resists circle similar to undead
  YellsForHelp = 119,         // will yell for help
  YelledForHelp = 120,        // has yelled for help
  WillBeHelped = 121,         // doesn't yell for help but mobs arrive to help
  BenevolentCaster = 122,     // is a benevolent spellcaster
  WillBeLogged = 123,         // anything that happens to the creature will be logged
  // 124
  // 125
  LevelBasedStun = 126,       // stunnable based on level
  ResistTouch = 127,          // resists touch-of-death
  Greedy = 128,               // sometimes steals gold instead of killing
  Police = 129,               // beats target up and then puts them in jail
  LevelRestricted = 130,      // can only be attacked by someone less than maxLevel
  NoBackstab = 131,           // cannot be backstabbed
  IgnoreRoomDestroy = 132,    // drops ignore room destroy flag
  // 133
  // 134
  // 135
  // 136
  // 137
  // 138
  // 139
  // 140
  // 141
  // 142
  // 143
  // 144
  // 145
  // 146
  // 147
  // 148
  // 149
  // 150
  // 151
  // 152
  // 153
  // 154
  // 155
  NoLevel1 = 156,             // unaffected by lvl 1 spells
  NoLevel2 = 157,             // unaffected by lvl 2 spells
  NoLevel3 = 158,             // unaffected by lvl 3 spells
  NoLevel4 = 159,             // unaffected by lvl 4 spells
  NoKick = 160,               // cannot be kicked
  DeathScream = 161,          // screams like a banshee
  WillSneak = 162,            // will sneak around
  Sneaking = 163,             // is sneaking
  // 164
  RandomAggro = 165,          // randomly becomes aggro
  NoPoison = 166,             // cannot be poisoned
  NoCharm = 167,              // cannot be charmed
  SpecialUndead = 168,        // harder to turn than normal undead
  // 169
  // 170
  // 171
  NoExpLoss = 172,            // player won't lose exp when they die
  // 173
  // 174
  // 175
  // 176
  // 177
  // 178
  CanStone = 179,             // can turn target to stone
  // 180
  AlwaysAggro = 181,          // always aggros, ignoring other rules that may override aggro
  KillsPerms = 182,           // will attack permed creatures
  KillNonAssist = 183,        // will attack creatures it doesn't assist
  KillMaster = 184,           // will attack the master, not their pet
  // 185
  FastTick = 186,             // will tick fast when nobody present
  RestrictExpLevel = 187,     // lower exp after max-killable level
  // 188
  // 189
  Tollkeeper = 190,           // is a tollkeeper
  VaryAlign = 191,            // creature's alignment will vary
  AssistHitChance = 192,      // assists each other's chance to hit
  StreetSweeper = 193,        // gets all, cleans up rooms
  Custom = 194,               // is custom, no specific mtype
  NoAdjust = 195,             // will not adjust on loading
  // 196
  // 197
  // 198
  // 199
  AlwaysActive = 200,         // remains on active list until killed
  NoAutoCrit = 201,           // cannot be autocritted
  // 202
  AntiMagicAura = 203,        // blocks magic in room
  MageStunOnly = 204,         // only stunnable by mage/lich
  FireAura = 205,             // has a fire aura attack
  ColdAura = 206,             // has a cold aura attack
  NauseatingAura = 207,       // has a nauseating aura
  LifeDrainAura = 208,        // has a life-draining aura
  TurbulentWindAura = 209,    // has a turbulent winds aura
  // 210
  // 211
  // 212
  Wounding = 213,             // has a wounding attack
  // 214
  WillBerserk = 215,          // will berserk
  WasPorted = 216,            // was teleported
  // 217
  // 218
  // 219
  RaceAggroInvert = 220,      // invert race aggro rules
  ClassAggroInvert = 221,     // invert class aggro rules
  // 222
  SaveFull = 223,             // save the full creature to room file instead of just a reference
  DeityAggroInvert = 224,     // invert deity aggro rules
  // 225
  // 226
  // 227
  // 228
  // 229
  Raiding = 230,              // is raiding
  // 231
  // 232
  // 233
  // 234
  // 235
  // 236
}