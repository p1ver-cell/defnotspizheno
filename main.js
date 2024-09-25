const dotaHeroes = [
  {
    name: "Invoker",
    gender: "Male",
    species: "Fundamental, Human",
    position: "Mid",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Axe",
    gender: "Male",
    species: "Oglodi",
    position: "Offlane",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Easy",
    releaseYear: "2010"
  },
  {
    name: "Phantom Assassin",
    gender: "Female",
    species: "Human",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Drow Ranger",
    gender: "Female",
    species: "Drow",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Zeus",
    gender: "Male",
    species: "God",
    position: "Mid",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Easy",
    releaseYear: "2010"
  },
  {
    name: "Bristleback",
    gender: "Male",
    species: "Keen",
    position: "Offlane",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2012"
  },
  {
    name: "Lina",
    gender: "Female",
    species: "Human",
    position: "Mid",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Anti-Mage",
    gender: "Male",
    species: "Human",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Crystal Maiden",
    gender: "Female",
    species: "Human",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Easy",
    releaseYear: "2010"
  },
  {
    name: "Pudge",
    gender: "Male",
    species: "Undead",
    position: "Roamer, Mid",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Tidehunter",
    gender: "Male",
    species: "Leviathan",
    position: "Offlane",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Faceless Void",
    gender: "Male",
    species: "Primordial",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Melee",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Juggernaut",
    gender: "Male",
    species: "Human",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Sniper",
    gender: "Male",
    species: "Keen",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Ranged",
    complexity: "Easy",
    releaseYear: "2010"
  },
  {
    name: "Shadow Fiend",
    gender: "Male",
    species: "Demon",
    position: "Mid",
    attribute: "Agility",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Abaddon",
    gender: "Male",
    species: "Undead",
    position: "Support, Offlane",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2013"
  },
  {
    name: "Alchemist",
    gender: "Male",
    species: "Ogre",
    position: "Carry, Support",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Ancient Apparition",
    gender: "Male",
    species: "Elemental",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Arc Warden",
    gender: "Male",
    species: "Primordial",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Ranged",
    complexity: "Hard",
    releaseYear: "2015"
  },
  {
    name: "Bane",
    gender: "Male",
    species: "Demon",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Batrider",
    gender: "Male",
    species: "Human",
    position: "Offlane",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Beastmaster",
    gender: "Male",
    species: "Human",
    position: "Offlane",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Bloodseeker",
    gender: "Male",
    species: "Human",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Melee",
    complexity: "Easy",
    releaseYear: "2010"
  },
  {
    name: "Bounty Hunter",
    gender: "Male",
    species: "Human",
    position: "Roamer",
    attribute: "Agility",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Brewmaster",
    gender: "Male",
    species: "Pandaren",
    position: "Offlane",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Broodmother",
    gender: "Female",
    species: "Spiderling",
    position: "Offlane",
    attribute: "Agility",
    rangeType: "Melee",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Centaur Warrunner",
    gender: "Male",
    species: "Centaur",
    position: "Offlane",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2012"
  },
  {
    name: "Chen",
    gender: "Male",
    species: "Human",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Clinkz",
    gender: "Male",
    species: "Undead",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Clockwerk",
    gender: "Male",
    species: "Keen",
    position: "Offlane",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Dark Seer",
    gender: "Male",
    species: "Spirit",
    position: "Offlane",
    attribute: "Intelligence",
    rangeType: "Melee",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Dazzle",
    gender: "Male",
    species: "Troll",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Easy",
    releaseYear: "2010"
  },
  {
    name: "Death Prophet",
    gender: "Female",
    species: "Undead",
    position: "Mid",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Disruptor",
    gender: "Male",
    species: "Human",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2011"
  },
  {
    name: "Doom",
    gender: "Male",
    species: "Demon",
    position: "Offlane",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2011"
  },
  {
    name: "Dragon Knight",
    gender: "Male",
    species: "Human",
    position: "Mid, Offlane",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Easy",
    releaseYear: "2010"
  },
  {
    name: "Earth Spirit",
    gender: "Male",
    species: "Spirit",
    position: "Support",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Hard",
    releaseYear: "2013"
  },
  {
    name: "Huskar",
    gender: "Male",
    species: "Troll",
    position: "Carry, Offlane",
    attribute: "Strength",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Legion Commander",
    gender: "Female",
    species: "Human",
    position: "Offlane, Carry",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2013"
  },
  {
    name: "Lone Druid",
    gender: "Male",
    species: "Human",
    position: "Mid, Offlane",
    attribute: "Agility",
    rangeType: "Ranged",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Luna",
    gender: "Female",
    species: "Moon Rider",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Medusa",
    gender: "Female",
    species: "Gorgon",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Ranged",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Naga Siren",
    gender: "Female",
    species: "Naga",
    position: "Carry, Support",
    attribute: "Agility",
    rangeType: "Melee",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Nyx Assassin",
    gender: "Male",
    species: "Insect",
    position: "Roamer, Offlane",
    attribute: "Agility",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Earthshaker",
    gender: "Male",
    species: "Elemental",
    position: "Support, Offlane",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Ember Spirit",
    gender: "Male",
    species: "Spirit",
    position: "Mid, Carry",
    attribute: "Agility",
    rangeType: "Melee",
    complexity: "Hard",
    releaseYear: "2013"
  },
  {
    name: "Grimstroke",
    gender: "Male",
    species: "Spirit",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2018"
  },
  {
    name: "Gyrocopter",
    gender: "Male",
    species: "Keen",
    position: "Carry, Support",
    attribute: "Agility",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2011"
  },
  {
    name: "Io",
    gender: "None",
    species: "Wisp",
    position: "Support",
    attribute: "Strength",
    rangeType: "Ranged",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Jakiro",
    gender: "Male",
    species: "Dragon",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Easy",
    releaseYear: "2010"
  },
  {
    name: "Keeper of the Light",
    gender: "Male",
    species: "Human",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Kunkka",
    gender: "Male",
    species: "Human",
    position: "Mid, Offlane",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Leshrac",
    gender: "Male",
    species: "Spirit",
    position: "Mid, Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Lich",
    gender: "Male",
    species: "Undead",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Easy",
    releaseYear: "2010"
  },
  {
    name: "Lifestealer",
    gender: "Male",
    species: "Undead",
    position: "Carry",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Lion",
    gender: "Male",
    species: "Demon",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Easy",
    releaseYear: "2010"
  },
  {
    name: "Lone Druid",
    gender: "Male",
    species: "Human",
    position: "Carry, Offlane",
    attribute: "Agility",
    rangeType: "Ranged",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Lycan",
    gender: "Male",
    species: "Lycanthrope",
    position: "Carry, Offlane",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Magnus",
    gender: "Male",
    species: "Magnoceros",
    position: "Offlane",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Mars",
    gender: "Male",
    species: "God",
    position: "Offlane, Mid",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2019"
  },
  {
    name: "Meepo",
    gender: "Male",
    species: "Keen",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Melee",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Mirana",
    gender: "Female",
    species: "Human",
    position: "Carry, Support",
    attribute: "Agility",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Monkey King",
    gender: "Male",
    species: "God",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2016"
  },
  {
    name: "Morphling",
    gender: "None",
    species: "Elemental",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Ranged",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Necrophos",
    gender: "Male",
    species: "Undead",
    position: "Mid, Offlane",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Ogre Magi",
    gender: "Male",
    species: "Ogre",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Melee",
    complexity: "Easy",
    releaseYear: "2010"
  },
  {
    name: "Oracle",
    gender: "Male",
    species: "Celestial",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Hard",
    releaseYear: "2014"
  },
  {
    name: "Outworld Destroyer",
    gender: "Male",
    species: "Fundamental",
    position: "Mid",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Phantom Lancer",
    gender: "Male",
    species: "Spirit",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Melee",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Phoenix",
    gender: "None",
    species: "Phoenix",
    position: "Support, Offlane",
    attribute: "Strength",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2014"
  },
  {
    name: "Puck",
    gender: "None",
    species: "Faerie Dragon",
    position: "Mid",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Pugna",
    gender: "Male",
    species: "Undead",
    position: "Mid, Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Queen of Pain",
    gender: "Female",
    species: "Demon",
    position: "Mid",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Razor",
    gender: "Male",
    species: "Elemental",
    position: "Mid, Carry",
    attribute: "Agility",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Riki",
    gender: "Male",
    species: "Satyr",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Rubick",
    gender: "Male",
    species: "Human",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Hard",
    releaseYear: "2011"
  },
  {
    name: "Sand King",
    gender: "Male",
    species: "Insect",
    position: "Offlane",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Shadow Demon",
    gender: "Male",
    species: "Demon",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2011"
  },
  {
    name: "Shadow Shaman",
    gender: "Male",
    species: "Troll",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Silencer",
    gender: "Male",
    species: "Human",
    position: "Support, Mid",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Skywrath Mage",
    gender: "Male",
    species: "Skywrath",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2013"
  },
  {
    name: "Slardar",
    gender: "Male",
    species: "Naga",
    position: "Offlane",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Slark",
    gender: "Male",
    species: "Fish",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Spectre",
    gender: "Female",
    species: "Spirit",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Melee",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Spirit Breaker",
    gender: "Male",
    species: "Spirit",
    position: "Roamer",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Storm Spirit",
    gender: "Male",
    species: "Spirit",
    position: "Mid",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Sven",
    gender: "Male",
    species: "Human",
    position: "Carry",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Easy",
    releaseYear: "2010"
  },
  {
    name: "Techies",
    gender: "Male",
    species: "Keen",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Hard",
    releaseYear: "2014"
  },
  {
    name: "Templar Assassin",
    gender: "Female",
    species: "Templar",
    position: "Mid",
    attribute: "Agility",
    rangeType: "Ranged",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Terrorblade",
    gender: "Male",
    species: "Demon",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Melee",
    complexity: "Hard",
    releaseYear: "2014"
  },
  {
    name: "Tinker",
    gender: "Male",
    species: "Keen",
    position: "Mid",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Treant Protector",
    gender: "Male",
    species: "Treant",
    position: "Support",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Troll Warlord",
    gender: "Male",
    species: "Troll",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Tusk",
    gender: "Male",
    species: "Tuskarr",
    position: "Support, Offlane",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2014"
  },
  {
    name: "Underlord",
    gender: "Male",
    species: "Demon",
    position: "Offlane",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2016"
  },
  {
    name: "Undying",
    gender: "Male",
    species: "Undead",
    position: "Support, Offlane",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Ursa",
    gender: "Male",
    species: "Bear",
    position: "Carry",
    attribute: "Agility",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Vengeful Spirit",
    gender: "Female",
    species: "Spirit",
    position: "Support",
    attribute: "Agility",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Venomancer",
    gender: "Male",
    species: "Poison",
    position: "Support, Offlane",
    attribute: "Agility",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Viper",
    gender: "Male",
    species: "Dragon",
    position: "Mid, Offlane",
    attribute: "Agility",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Visage",
    gender: "None",
    species: "Gargoyle",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Void Spirit",
    gender: "Male",
    species: "Spirit",
    position: "Mid",
    attribute: "Intelligence",
    rangeType: "Melee",
    complexity: "Hard",
    releaseYear: "2019"
  },
  {
    name: "Warlock",
    gender: "Male",
    species: "Human",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Weaver",
    gender: "Male",
    species: "Insect",
    position: "Carry, Offlane",
    attribute: "Agility",
    rangeType: "Ranged",
    complexity: "Hard",
    releaseYear: "2010"
  },
  {
    name: "Windranger",
    gender: "Female",
    species: "Human",
    position: "Mid, Carry",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2010"
  },
  {
    name: "Winter Wyvern",
    gender: "Female",
    species: "Dragon",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Medium",
    releaseYear: "2015"
  },
  {
    name: "Witch Doctor",
    gender: "Male",
    species: "Troll",
    position: "Support",
    attribute: "Intelligence",
    rangeType: "Ranged",
    complexity: "Easy",
    releaseYear: "2010"
  },
  {
    name: "Wraith King",
    gender: "Male",
    species: "Undead",
    position: "Carry, Support",
    attribute: "Strength",
    rangeType: "Melee",
    complexity: "Medium",
    releaseYear: "2013"
  }
];

let selectedHero;

function selectRandomHero() {
  const randomIndex = Math.floor(Math.random() * dotaHeroes.length);
  selectedHero = dotaHeroes[randomIndex];
  console.log("Randomly selected hero:", selectedHero.name);
}

function compareProperties(guessedHero) {
  const resultTable = document.getElementById("result");
  const firstRow = resultTable.rows[0];

  if (guessedHero.name === selectedHero.name) {
    firstRow.cells[0].style.backgroundColor = 'green';
  } else {
    firstRow.cells[0].style.backgroundColor = 'red';
  }

  if (guessedHero.gender === selectedHero.gender) {
    firstRow.cells[1].style.backgroundColor = 'green';
  } else {
    firstRow.cells[1].style.backgroundColor = 'red';
  }

  if (guessedHero.species === selectedHero.species) {
    firstRow.cells[2].style.backgroundColor = 'green';
  } else {
    firstRow.cells[2].style.backgroundColor = 'red';
  }

  if (guessedHero.position === selectedHero.position) {
    firstRow.cells[3].style.backgroundColor = 'green';
  } else {
    firstRow.cells[3].style.backgroundColor = 'red';
  }

  if (guessedHero.attribute === selectedHero.attribute) {
    firstRow.cells[4].style.backgroundColor = 'green';
  } else {
    firstRow.cells[4].style.backgroundColor = 'red';
  }

  if (guessedHero.rangeType === selectedHero.rangeType) {
    firstRow.cells[5].style.backgroundColor = 'green';
  } else {
    firstRow.cells[5].style.backgroundColor = 'red';
  }

  if (guessedHero.complexity === selectedHero.complexity) {
    firstRow.cells[6].style.backgroundColor = 'green';
  } else {
    firstRow.cells[6].style.backgroundColor = 'red';
  }

  if (guessedHero.releaseYear === selectedHero.releaseYear) {
    firstRow.cells[7].style.backgroundColor = 'green';
  } else {
    firstRow.cells[7].style.backgroundColor = 'red';
  }
}

function checkGuess() {
  const playerGuess = document.getElementById("hero-input").value.trim().toLowerCase();
  const resultTable = document.getElementById("result");

  if (playerGuess === selectedHero.name.toLowerCase()) {
    document.getElementById("feedback").textContent = `Correct! The hero is ${selectedHero.name}.`;

    resultTable.innerHTML =
        "<tr><td>" + selectedHero.name + "</td>" +
        "<td>" + selectedHero.gender + "</td>" +
        "<td>" + selectedHero.species + "</td>" +
        "<td>" + selectedHero.position + "</td>" +
        "<td>" + selectedHero.attribute + "</td>" +
        "<td>" + selectedHero.rangeType + "</td>" +
        "<td>" + selectedHero.complexity + "</td>" +
        "<td>" + selectedHero.releaseYear + "</td>" +
        "</tr>"+resultTable.innerHTML;
  } else {
    document.getElementById("feedback").textContent = "Wrong guess! Try again.";

    const wrongHero = dotaHeroes.find(hero => hero.name.toLowerCase() === playerGuess);

    if (wrongHero) {
      resultTable.innerHTML =
          "<tr><td>" + wrongHero.name + "</td>" +
          "<td>" + wrongHero.gender + "</td>" +
          "<td>" + wrongHero.species + "</td>" +
          "<td>" + wrongHero.position + "</td>" +
          "<td>" + wrongHero.attribute + "</td>" +
          "<td>" + wrongHero.rangeType + "</td>" +
          "<td>" + wrongHero.complexity + "</td>" +
          "<td>" + wrongHero.releaseYear + "</td>" +
          "</tr>"+resultTable.innerHTML;
    }
      compareProperties(wrongHero);
  }

  document.getElementById("hero-input").value = "";
}

function checkKey(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    checkGuess();
  }
}

selectRandomHero();
