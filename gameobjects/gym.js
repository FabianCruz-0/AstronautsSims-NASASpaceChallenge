import DialogObj from '/gameobjects/dialogObj.js';
import interaction from '/components/interaction.js';

function onInteraction(player, self) {
  const bonus = 2;
  const debuff = 0.5;

  let spritesAnim = {
    19: 'player1Gym',
    20: 'player2Gym',
    21: 'player3Gym'
  };

  if(player.locked) {
    player.increaseExerciseBonus(-bonus);
    player.increaseMentalHealthBonus(-bonus);
    
    player.increaseHungerDebuff(-debuff);
    player.increaseSleepDebuff(-debuff);

    self.changeSprite('gym');
    player.hidden = false;
  }
  else {
    const dlg = DialogObj('Exercise is an important part of the daily routine for astronauts aboard the station to prevent bone and muscle loss. On average,astronauts exercise two hours per day. Press E to stop exercising');

    wait(5, () => {
      destroy(dlg);
    });

    self.changeSprite(spritesAnim[player._id]);
    self.play('gym');
    player.hidden = true;

    player.increaseExerciseBonus(bonus);
    player.increaseMentalHealthBonus(bonus);

    player.increaseHungerDebuff(debuff);
    player.increaseSleepDebuff(debuff);
  }

  player.locked = !player.locked;
}

function onWaitInteraction(isWaiting, input) {
  const self = input.self;
  self.interactionSign.color = isWaiting ? rgba(1, 1, 1, 1) : rgba(1, 1, 1, 0);
}

export default function Gym(x = 0, y = 0) {
  return add([
    sprite("gym"),
    pos(x, y),
    interaction(onInteraction, onWaitInteraction),
    scale(3),
    "interactive",
    {
      interactionSign: add([
        sprite('e'),
        pos(x + 10, y - 20),
        scale(2),
        color(1, 1, 1, 0)
      ])
    }
  ]);
}