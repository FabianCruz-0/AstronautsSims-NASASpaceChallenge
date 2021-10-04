scene("gameOver", ()=> {
  document.getElementById('gui').style.visibility="hidden";
  document.getElementById('dialog').style.visibility="hidden";

let inicio= add([
    sprite("marsArrival"),
    origin('center'),
    pos(width()/2,height()/2),
    scale(width()/400,height()/240)
  ]);


  add([
    text("game over",90),
    origin('center'),
    pos(width() / 2, height() / 7),
    color(255,255,255)
  ]);

 add([
    text("The statistics of any",30),
    origin('center'),
    pos(width() / 2, height() /2.2),
    color(255,255,255)
  ]);

  add([
    text(" crew member went down to zero.",30),
    origin('center'),
    pos(width() / 2, height() /1.8),
    color(255,255,255)
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
  
});