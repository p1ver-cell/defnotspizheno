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
  }
];


function checkHero() {
  const input = document.getElementById("hero-input").value.trim().toLowerCase();

  if (input === correctHero.name.toLowerCase()) {
    setHeroDetails("correct", correctHero);
  } else {
    setHeroDetails("incorrect", correctHero);
  }
}

function setHeroDetails(status, hero) {
  compareAndHighlight("hero-gender", hero.gender, status);
  compareAndHighlight("hero-species", hero.species, status);
  compareAndHighlight("hero-position", hero.position, status);
  compareAndHighlight("hero-attribute", hero.attribute, status);
  compareAndHighlight("hero-range", hero.rangeType, status);
  compareAndHighlight("hero-complexity", hero.complexity, status);
  compareAndHighlight("hero-release", hero.releaseYear, status);
}

function compareAndHighlight(id, correctValue, status) {
  const element = document.getElementById(id);
  const currentText = element.textContent;

  if (currentText.toLowerCase() === correctValue.toLowerCase()) {
    element.classList.add("correct");
    element.classList.remove("incorrect");
  } else {
    element.classList.add("incorrect");
    element.classList.remove("correct");
  }

  element.textContent = correctValue;
}

function resetGame() {
  document.getElementById("hero-input").value = '';
  setHeroDetails("", {
    gender: "?",
    species: "?",
    position: "?",
    attribute: "?",
    rangeType: "?",
    complexity: "?",
    releaseYear: "?"
  });

  const cells = document.querySelectorAll("td");
  cells.forEach(cell => {
    cell.classList.remove("correct", "incorrect");
  });
}
