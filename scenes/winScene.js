scene("winScene", ()=> {
document.getElementById('gui').style.visibility="hidden";

let inicio= add([
    sprite("inicio"),
    origin('center'),
    pos(width()/2,height()/2),
    scale(width()/600,height()/268)
  ]);
  inicio.play('idle')

add([
    text("You Win!", width() / 30),
    origin('center'),
    pos(width() / 2, height() / 7),
  ]);

add([
    rect(width() / 4, height() / 15),
    pos(width() / 2, height() / 1.2),
    origin("center"),
    "button-back",
    {
      clickAction: () => {
        go('principalMenu')
      }
    }
  ]);

  add([
    text("Back", width() / 75),
    pos(width() / 2, height() / 1.2),
    origin("center"),
    color(0, 0, 0)
  ]);

  action("button-back", b => {
    if (b.isHovered()) {
      b.use(color(0.5, 0.5, 0.5))
      cursor("pointer")
    } else {
      b.use(color(1, 1, 1))
      cursor('default')
    }
    if (b.isClicked())
      b.clickAction()
  });

})