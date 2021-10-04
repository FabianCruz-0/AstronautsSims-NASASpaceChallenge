import interaction from '/components/interaction.js';
import DialogObj from '/gameobjects/dialogObj.js';

function onInteraction(player) {
  const bonus = 3;
  const debuff = 0.5;

  if(player.locked) {
    player.increaseSleepBonus(-bonus);
    player.increaseMentalHealthBonus(-bonus);
    
    player.increaseBathroomNeedDebuff(-debuff);
    player.increaseExerciseDebuff(-debuff);
  }
  else {
    const dlg = DialogObj('A countermeasure for isolation and a way to keep your health is to have a good sleep cycle. Press E again to wake up');

    wait(4, () => {
      destroy(dlg);
    });


    player.increaseSleepBonus(bonus);
    player.increaseMentalHealthBonus(bonus);

    player.increaseBathroomNeedDebuff(debuff);
    player.increaseExerciseDebuff(debuff);
  }

  player.locked = !player.locked;
}

function onWaitInteraction(isWaiting, input) {
  const self = input.self;
  self.interactionSign.color = isWaiting ? rgba(1, 1, 1, 1) : rgba(1, 1, 1, 0);
}

export default function Bed(x = 0, y = 0) {
  return add([
    sprite("bed"),
    pos(x, y),
    interaction(onInteraction, onWaitInteraction),
    scale(3),
    "interactive",
    {
      interactionSign: add([
        sprite('e'),
        pos(x + 10, y - 15),
        scale(2),
        color(1, 1, 1, 0)
      ])
    }
  ]);
}