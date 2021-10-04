scene("credits", ()=> {
document.getElementById('gui').style.visibility="hidden";

add([
    rect(width(), height()),
    pos(0, 0),
    color(0, 0, 0)
  ]);


add([
    text("Credits", width() / 30),
    origin('center'),
    pos(width() / 2, height() / 7),
  ]);

  add([
    text("Programming & UI", width() / 53),
    origin('center'),
    pos(width() / 4, height() / 3.1),
  ]);

  add([
    text("Sprites & Animations", width() / 53),
    origin('center'),
    pos(width() / 1.4, height() / 3.1),
  ]);

  add([
    text("- Bryan Emmanuel Duarte Lozano", width() / 72),
    pos(width() / 24, height() / 2),
  ]);

  add([
    text("- Aylin Galindo Acosta", width() / 72),
    pos(width() / 2, height() / 2),
  ]);

  add([
    text("- Fabian Eduardo Cruz Amador", width() / 72),
    pos(width() / 24, height() / 1.5),
  ]);

  add([
    text("- Maricela Sarai Elizondo Martinez", width() / 72),
    pos(width() / 2, height() / 1.5),
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