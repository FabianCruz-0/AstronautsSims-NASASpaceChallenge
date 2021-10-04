scene("principalMenu", () => {

const music = play("menu", {
    volume: 0.4,
  })
  music.stop();

document.getElementById('gui').style.visibility="hidden";
document.getElementById('dialog').style.visibility="hidden";

  // principal menu background, change for sprite

  let inicio= add([
    sprite("inicio"),
    origin('center'),
    pos(width()/2,height()/2),
    scale(width()/600,height()/268)
  ]);
  inicio.play('idle')

  add([
    text("Astronauts", width() / 30),
    origin('center'),
    pos(width() / 2, height() / 7),
  ]);

  add([
    text("CAN YOU KEEP YOUR CREW ALIVE?", width() / 80),
    origin('center'),
    pos(width() / 2, height() / 4.5),
  ]);

  let tutButton = add([
    rect(width() / 4, height() / 15),
    pos(width() / 2, height() / 2.3),
    origin("center"),
    "button-tutorial",
    {
      clickAction: () => {
        go('tutorial'),
        music.play()
      }
    }
  ])

  add([
    text("Tutorial", width() / 75),
    pos(width() / 2, height() / 2.3),
    origin("center"),
    color(1,1, 1)
  ]);

  add([
    rect(width() / 4, height() / 15),
    pos(width() / 2, height() / 1.7),
    origin("center"),
    "button-play",
    {
      clickAction: () => {
        go('game'),
        document.body.style.animation="fade-in 2s ease-in",
        music.play()
    
      }
    }
  ]);

  add([
    text("Play Game", width() / 75),
    pos(width() / 2, height() / 1.7),
    origin("center"),
    color(1,1, 1)
  ]);

  add([
    rect(width() / 4, height() / 15),
    pos(width() / 2, height() / 1.35),
    origin("center"),
    "button-credits",
    {
      clickAction: () => {
        go('credits'),
        music.play()
      }
    }
  ]);

  add([
    text("Credits", width() / 75),
    pos(width() / 2, height() / 1.35),
    origin("center"),
    color(1,1, 1)
  ]);


  action("button-tutorial", b => {
    if (b.isHovered()) {
      b.use(color(0, 0, 0))
      cursor("pointer")
    } else {
      b.use(color(0.2, 0.2, 0.2))
    }
    if (b.isClicked())
      b.clickAction()
  });

action("button-play", b => {
    if (b.isHovered()) {
      b.use(color(0, 0, 0))
      cursor("pointer")
    } else {
      b.use(color(0.2, 0.2, 0.2))
    }
    if (b.isClicked())
      b.clickAction()
  });

  action("button-credits", b => {
    if (b.isHovered()) {
      b.use(color(0, 0, 0))
      cursor("pointer")
    } else {
      b.use(color(0.2, 0.2, 0.2))
      cursor('default')
    }
    if (b.isClicked())
      b.clickAction()
  });

})

start("principalMenu")
// start("game")
// start("tutorial")
// start("credits")
// start("gameOver")
// start('winScene')
// start('ArrivalToMars')