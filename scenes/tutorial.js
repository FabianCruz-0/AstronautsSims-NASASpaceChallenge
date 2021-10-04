import DialogObj from '../gameobjects/dialogObj.js'

scene("tutorial", ()=> {
document.getElementById('gui').style.visibility="hidden";
document.getElementById('dialog').style.visibility="initial";

 let inicio = add([
    sprite("inicio"),
    origin('center'),
    pos(width()/2,height()/2),
    scale(width()/600,height()/268),
    layer('bg')
  ]);

  inicio.play('idle')

  camIgnore(['bg']);

  const spaceship = add([
    sprite("spaceship"),
    origin('center'),
    pos(630,350),
    scale(2.6,2.6)
  ]);

let flame = add([
    sprite("flame"),
    scale(2.6),
    pos( -150,0)
  ]);

  flame.play("idle");

function destroyer(dialog)
{  
wait(5, () =>{
  destroy(dialog)
})
}

let oneDialog = DialogObj(
  'Welcome to the adventure, partner! In this game, you will be in command of a crew of 3 astronauts.'
  )

let twoDialog = ''
let threeDialog = ''
let fourDialog = ''
let fiveDialog = ''
let sixDialog = ''

destroyer(oneDialog)

setTimeout(function() {twoDialog = DialogObj(
  'The controls are as follows: choose astronaut -> Left click on it. Movement -> arrows. Interact with things -> E key when displayed.'
  )},6000);
setTimeout(function(){destroyer(twoDialog)},11000)

setTimeout(function() {threeDialog = DialogObj(
  'The main mission is for them to reach Mars and return safely to Earth. To do this, you have to make sure that his stats do not reach 0.'
  )},17000);
setTimeout(function() {destroyer(threeDialog)},22000)

setTimeout(function() {fourDialog = DialogObj(
  'Statistics for each astronaut are at the bottom of the screen. Be very aware of them !.'
  )},28000);
setTimeout(function() {destroyer(fourDialog)},33000)

setTimeout(function() {fiveDialog = DialogObj(
  'The progress bar on the top-right indicates how long it takes to get to Mars from Earth and vice versa. It is estimated that a trip to Mars would take 220 days!'
  )},39000);
setTimeout(function() {destroyer(fiveDialog)},44000)

setTimeout(function() {sixDialog = DialogObj(
  'Thats it, please have fun and learn! If the controls werent clear to you, you can always check the tutorial again. Enjoy!.'
  )},51000);
setTimeout(function() {destroyer(sixDialog)},56000)

setTimeout(function() {go('principalMenu')},62000)

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