import DialogObj from '/gameobjects/dialogObj.js';


scene("ArrivalToMars", ()=> {

document.getElementById('gui').style.visibility="hidden";
document.getElementById('dialog').style.visibility="initial";


let inicio= add([
    sprite("marsArrival"),
    origin('center'),
    pos(width()/2,height()/2),
    scale(width()/400,height()/240)
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

  let arrival = DialogObj('You got it! You made it to Mars! This means a lot to humanity. Speaking of humanity ... lets return the material to Earth!')

  wait(9, ()=>
  {
    destroy(arrival)
  })

setTimeout(function() {go('game')},12000)

})