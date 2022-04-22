export enum ItemFlag {
  Perm = 0,                 // permanent item
  Hidden = 1,               // is hidden
  Invisible = 2,            // is invis
  SomePrefix = 3,           // "some" prefix
  PushPullSpringsTrap = 4,  // pushing or pulling this item springs the room's trap
  NoPrefix = 5,             // no prefix
  Fishing = 6,              // can be used to fish
  WeightlessContainer = 7,  // container of weightless holding
  TempPerm = 8,             // temporarily permanent
  PermInventory = 9,        // permanent inventory item
  NoMage = 10,              // mages cannot use
  LightSource = 11,         // is a lightsource
  GoodOnly = 12,            // only useable by good align
  EvilOnly = 13,            // only useable by evil align
  NoEnchant = 14,           // cannot be enchanted
  NoRepair = 15,            // cannot be repaired
  ClimbingGear = 16,        // is climbing gear
  NoTake = 17,              // cannot be taken
  Scenery = 18,             // part of room scenery
  Darkness = 19,            // creates magical darkness
  Hot = 20,                 // can be used in cooking
  RandomEnchant = 21,       // has random enchantment
  Cursed = 22,              // cursed
  Worn = 23,                // is being worn
  UseFromFloor = 24,        // can be used from floor
  Devours = 25,             // container devours items
  FemaleOnly = 26,          // only useable by females
  MaleOnly = 27,            // only useable by males
  SexlessOnly = 28,         // only useable by sexless
  PledgedOnly = 29,         // only useable by pledged
  Magic = 30,               // is magical, displays (M) with detect-magic
  ClassInvert = 31,         // invert class selection rules
  Assassin = 32,            // 
  Berserker = 33,           // 
  Cleric = 34,              // 
  Fighter = 35,             // 
  Mage = 36,                // 
  Paladin = 37,             // 
  Ranger = 38,              // 
  Thief = 39,               // 
  Vampire = 40,             // 
  Monk = 41,                // 
  DeathKnight = 42,         // 
  Druid = 43,               // 
  Lich = 44,                // 
  Werewolf = 45,            // 
  Bard = 46,                // 
  Rogue = 47,               // 
  Disposable = 48,          // will not keep area room in memory
  NoShatter = 49,           // will not shatter
  AlwaysCrit = 50,          // will always crit
  Lucky = 51,               // is a luck charm
  WeapCasts = 52,           // weapon casts spells on hit
  TwoHanded = 53,           // weapon requires 2 hands to wield (no dual)
  EquipEffect = 54,         // equipping bestows an effect
  JustLoaded = 55,          // item is loaded but hasn't been obtained yet, grants exp when stolen
  ChaoticOnly = 56,         // only useable by chaotic
  LawfulOnly = 57,          // only useable by lawful
  TempEnchant = 58,         // temporary enchant
  Starting = 59,            // starting item
  // 60
  Clan1 = 61,               // clan 1 can use
  Clan2 = 62,               // clan 2 can use
  Clan3 = 63,               // clan 3 can use
  Clan4 = 64,               // clan 4 can use
  Clan5 = 65,               // clan 5 can use
  Clan6 = 66,               // clan 6 can use
  Clan7 = 67,               // clan 7 can use
  Clan8 = 68,               // clan 8 can use
  Clan9 = 69,               // clan 9 can use
  Clan10 = 70,              // clan 10 can use
  // 71
  // 72
  // 73
  // 74
  // 75
  // 76
  // 77
  // 78
  // 79
  LoadAll = 80,             // when trading, load all RandomObjects rather than just one
  ResistDissolve = 81,      // resists dissolve
  Reclaimed = 82,           // has been reclaimed, no further haggling
  // 83
  // 84
  // 85
  // 86
  // 87
  // 88
  // 89
  // 90
  Drinkable = 91,           // can drink
  Eatable = 92,             // can eat
  AlwaysDropped = 93,       // creatures will always drop this
  ConsumeHeal = 94,         // healing consumable
  // 95
  // 96
  // 97
  // 98
  Clan11 = 99,              // clan 11 can use
  Clan12 = 100,             // clan 12 can use
  // 101
  // 102
  // 103
  Custom = 104,             // is custom item
  NoShoplift = 105,         // cannot be shoplifted
  WasShoplifted = 106,      // has been shoplifted
  // 107
  CanHitMist = 108,         // can hit misted vampires
  Silver = 109,             // made of silver, extra dmg to werewolf
  HoldBonus = 110,          // bonus to hit if held
  // 111
  NoSteal = 112,            // cannot be stolen
  SmallShield = 113,        // is a small shield
  // 114
  // 115
  // 116
  Kenku = 117,              // 
  NoPawn = 118,             // cannot be pawned
  BreakOnDrop = 119,        // breaks when dropped
  Lore = 120,               // lore item
  RaceInvert = 121,         // inverts race selection rules
  Dwarf = 122,              // 
  Elf = 123,                // 
  HalfElf = 124,            // 
  Halfling = 125,           // 
  Human = 126,              // 
  Orc = 127,                // 
  HalfGiant = 128,          // 
  Gnome = 129,              // 
  Troll = 130,              // 
  HalfOrc = 131,            // 
  Ogre = 132,               // 
  DarkElf = 133,            // 
  Goblin = 134,             // 
  Minotaur = 135,           // 
  Seraph = 136,             // 
  Kobold = 137,             // 
  Cambion = 138,            // 
  Barbarian = 139,          // 
  Kataran = 140,            // 
  Envenomed = 141,          // has been envenomed
  NullMagic = 142,          // does not reveal magic qualities under detect-magic
  NoBreak = 143,            // does not break
  AllowTouch = 144,         // can touch-of-death while wielding
  JustBought = 145,         // was just bought and is refundable
  NoDrop = 146,             // cannot be dropped
  UnpagedFile = 147,        // do not page file, display all at once
  BrokenByCmd = 148,        // can be broken with break command
  SmallBow = 149,           // is a small bow
  CoinOperated = 150,       // is coin-operated
  BeingPrepared = 151,      // is being prepared
  MissileUsesStrength = 152,// missile weapon uses strength bonus
  Unique = 153,             // is unique or limited
  BulklessContainer = 154,  // bulkless container
  Bulkless = 155,           // is bulkless
  // 156
  NotPeekable = 157,        // cannot peek
  EnhanceBash = 158,        // does extra bash damage equal to dice
  Keep = 159,               // is being kept, cannot be dropped or sold
  NoBackstab = 160,         // cannot backstab with this weapon
  SaveFull = 161,           // save entire object to player or roomfile rather than just a reference
  BodyPart = 162,           // cannot be peeked or stolen, unset when carrier dies
  Darkmetal = 163,          // is darkmetal (destroyed by sunlight)
  Tiefling = 164,           // 
}