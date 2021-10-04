import gameInit from '../helperFile.js'

import Character from '/gameobjects/character.js';
import Gym from '/gameobjects/gym.js';
import Lab from '/gameobjects/lab.js';
import Bathroom from '/gameobjects/bathroom.js';
import Bed from '/gameobjects/bed.js';
import Gui from '/gameobjects/guiObject.js';
import Medicine from '/gameobjects/medicine.js';
import Food from '/gameobjects/food.js';
import RandomEventManager from '/gameobjects/randomEventManager.js';
import SelectTriangleObj from '/gameobjects/selectTriangleObj.js';
import DialogObj from '/gameobjects/dialogObj.js';
import ShipSystem from '/gameobjects/shipSystem.js';
import Refugee from '/gameobjects/refugee.js';
import CommandCenter from '/gameobjects/commandCenterObj.js'

scene("game", () => {

let music = play("ost", {
    volume: 0.15,
    loop: true
  });


  layers([
    'bg',
    'game'
  ], 'game');

  document.getElementById('gui').style.visibility="initial";
  document.getElementById('dialog').style.visibility="initial";

  let exit= document.getElementById('exit')
  let sound= document.getElementById('sound')

  cursor("default")
  gravity(0.4)

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

  let food = Food(1000, 410);

  let gym = Gym(630, 445);

  let lab = Lab(555, 255);

  let bed = Bed(535, 445);

  let bathroom = Bathroom(350, 437);

  let medicine = Medicine(800, 445);

  let shipSystem = ShipSystem(700, 446);

  let commandCenter = CommandCenter(1010,290);

  let player = Character(330, 250, {
    hunger: 300,
    sleep:300,
    mentalHealth:300,
    exercise:300,
    medicineNeed:300,
    bathroomNeed:300,
    selected: true
  });

  let player2 = Character(500, 250, {
    hunger: 300,
    sleep:300,
    mentalHealth:300,
    exercise:300,
    medicineNeed:300,
    bathroomNeed:300,
    sprite: "player2"
  });

  let player3 = Character(800, 250, {
    hunger: 300,
    sleep:300,
    mentalHealth:300,
    exercise:300,
    medicineNeed:300,
    bathroomNeed:300,
    sprite: "player3"
  });

  let triangle = add([
    sprite("triangle"),
    pos(10,10)
  ])

  let refugee = Refugee(350, 210, 86, 124);
  
  let dialog = DialogObj('Be careful, we hope to have a safe trip!.');
  wait(5, () => {
    dialog.hide();
  });

  addLevel([
    "-------------------",
    "-                 -",
    "-                 -",
    "-                 -",
    "---  ----  --------",
    "-                  -",
    "-                  -",
    "-                  -",
    "--------------------",
  ],
    {
      // define the size of each block
      width: 16 * 2.6,
      height: 16 * 2.6,
      pos: [308, 168],
      "-": () => [
        sprite('floor'),
        solid(),
        scale(2.6)
      ]
    });

  // Controls
  let selected = SelectTriangleObj();
  action(() => {
        camShake(0.1);
    player.listenInput();
    selected.follow(player, triangle);

    // Overlaps
    every("interactive", (i) => {
      if(player.isOverlapped(i)) {
        if(player.selected) {
          i.onWaitInteraction(true, {
            self: i
          });
          if(keyIsPressed('e')) {
            i.onInteraction(player, i);
          }
        }
      }
      else {
        i.onWaitInteraction(false, {
            self: i
        });
      }
    });
    
    every("character", (c) => {
      if(refugee.isOverlapped(c)) {
        c.refugeed = true;
      }
      else {
        c.refugeed = false;        
      }

      const stats = [
        c.getHungerStat(),
        c.getSleepStat(),
        c.getMentalHealthStat(),
        c.getBathroomNeedStat(),
        c.getMedicineNeedStat(),
        c.getExerciseStat()
      ];
      if(stats.some(s => s <= 0)) {
        go('gameOver');
      }
    });
  });

  // Character selection
  clicks('character', (c) => {
    player.selected = false;
    c.selected = true;

    player = c;
  });

  // GuiUpdater
  let gui1 = Gui(player,player2,player3);

  //sound handler
  let changer=1;
  function changeVolume()
  {
    if(changer)
    {
      music.volume(0);
      changer=0;
    } else {
      music.volume(0.15);
      changer=1;
    }
  }
let soundChanger = document.getElementById('sound').addEventListener("click", changeVolume);

// exit handler
 function exitFunc()
{
  music.stop()
  go('principalMenu');
}
let exitButton = document.getElementById('exit').addEventListener("click", exitFunc);

  // Random Event Manager
  let randomEventManager = RandomEventManager();
  let enableEvents = true;
  wait(10, () => {
    console.log('Event System activated');
    loop(10, () => {
      if(enableEvents) {
        randomEventManager.eventTimer(randomEventManager);
        console.log('Checking for events. Event is happening: ' + randomEventManager.eventIsHappening);
      }
    });
  });

gameInit()

})

