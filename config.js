kaboom({
  global: true,
  width: window.innerWidth,
  height: window.innerHeight,
  canvas: document.getElementById('main')
});

loadSprite("player1", "sprites/astronaut.png")
loadSprite("player2", "sprites/astronaut2.png")
loadSprite("player3", "sprites/astronaut3.png")
loadSprite("spaceship", "sprites/nave.png")
loadSprite("e", "sprites/e.png")
loadSprite("triangle", "sprites/selectTriangle.png")

loadSprite("flame", "sprites/fuego.png", {
  sliceX: 2,
  anims: {
    idle: { from: 0, to: 1 }
  }

})

loadSprite("player1Eating", "sprites/astronautEating.png", {
  sliceX: 3,
  anims: {
    eating: { from: 0, to: 2 }
  }
})

loadSprite("player2Eating", "sprites/astronaut2Eating.png", {
  sliceX: 3,
  anims: {
    eating: { from: 0, to: 2 }
  }
})


loadSprite("player3Eating", "sprites/astronaut3Eating.png", {
  sliceX: 3,
  anims: {
    eating: { from: 0, to: 2 }
  }
})

loadSprite("player1Left", "sprites/astronautLeft.png", {
  sliceX: 3,
  anims: {
    left: { from: 0, to: 2 }
  }
})

loadSprite("player1Right", "sprites/astronautRight.png", {
  sliceX: 3,
  anims: {
    right: { from: 0, to: 2 }
  }
})

loadSprite("player2Left", "sprites/astronaut2Left.png", {
  sliceX: 3,
  anims: {
    left: { from: 0, to: 2 }
  }
})

loadSprite("player2Right", "sprites/astronaut2Right.png", {
  sliceX: 3,
  anims: {
    right: { from: 0, to: 2 }
  }
})

loadSprite("player3Left", "sprites/astronaut3Left.png", {
  sliceX: 3,
  anims: {
    left: { from: 0, to: 2 }
  }
})

loadSprite("player3Right", "sprites/astronaut3Right.png", {
  sliceX: 3,
  anims: {
    right: { from: 0, to: 2 }
  }
})

loadSprite("player1Toilet", "sprites/astronautPoopin.png", {
  sliceX: 3,
  anims: {
    toilet: { from: 0, to: 2 }
  }
})

loadSprite("player2Toilet", "sprites/astronaut2Poopin.png", {
  sliceX: 3,
  anims: {
    toilet: { from: 0, to: 2 }
  }
})

loadSprite("player3Toilet", "sprites/astronaut3Poopin.png", {
  sliceX: 3,
  anims: {
    toilet: { from: 0, to: 2 }
  }
})

loadSprite("player1Gym", "sprites/astronautCaminadora.png", {
  sliceX: 4,
  anims: {
    gym: { from: 0, to: 3 }
  }
})

loadSprite("player2Gym", "sprites/astronauta2Caminadora.png", {
  sliceX: 4,
  anims: {
    gym: { from: 0, to: 3 }
  }
})

loadSprite("player3Gym", "sprites/astronaut3Caminadora.png", {
  sliceX: 4,
  anims: {
    gym: { from: 0, to: 3 }
  }
})

loadSprite("player1Med", "sprites/astronautMedicin.png", {
  sliceX: 3,
  anims: {
    med: { from: 0, to: 2 }
  }
})

loadSprite("player2Med", "sprites/astronaut2Medicin.png", {
  sliceX: 3,
  anims: {
    med: { from: 0, to: 2 }
  }
})

loadSprite("player3Med", "sprites/astronaut3Medicin.png", {
  sliceX: 3,
  anims: {
    med: { from: 0, to: 2 }
  }
})

loadSprite("player1Type", "sprites/astronautaTypin.png", {
  sliceX: 3,
  anims: {
    type: { from: 0, to: 2 }
  }
})

loadSprite("player2Type", "sprites/astronauta2Typin.png", {
  sliceX: 3,
  anims: {
    type: { from: 0, to: 2 }
  }
})

loadSprite("player3Type", "sprites/astronaut3Typin.png", {
  sliceX: 3,
  anims: {
    type: { from: 0, to: 2 }
  }
})


loadSprite("medicine", "sprites/medicine.png")
loadSprite("bathroom", "sprites/toilet.png")
loadSprite("inicio", "sprites/inicio.png",
{
  sliceX: 6,
  anims: {
    idle: { from: 0, to: 5 }
  }
})
loadSprite("floor", "sprites/tile-invisible.png")
loadSprite("food", "sprites/food.png")
loadSprite("gym", "sprites/gym.png")
loadSprite("lab", "sprites/lab.png")
loadSprite("bed", "sprites/bed.png")
loadSprite("energy-off", "sprites/energy.png")
loadSprite("energy-on", "sprites/energyOn.png")
loadSprite("commandCenter", "sprites/centro_de_mando.png");

loadSprite("marsArrival", "sprites/marsArrival.png");

loadSound("ost", "sounds/ost.mp3");
loadSound("menu", "sounds/menu.mp3");
loadSound("eating", "sounds/eating.mp3");
loadSound("toilet", "sounds/toilet.mp3");
loadSound("healing", "sounds/healing.mp3");

