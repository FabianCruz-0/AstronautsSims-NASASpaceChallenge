import interaction from '/components/interaction.js';
import DialogObj from '/gameobjects/dialogObj.js';

function onInteraction(player) {
  const bonus = 2;
  const debuff = 0.5;

  if(player.locked) {
    player.increaseMentalHealthBonus(-bonus);
    
    player.increaseSleepDebuff(-debuff);
  }
  else {
    const dlg = DialogObj('Excelent, You are working hard! Press E again to stop working');

    wait(3, () => {
      destroy(dlg);
    });

    player.increaseMentalHealthBonus(bonus);

    player.increaseSleepDebuff(debuff);
  }

  player.locked = !player.locked;
}

function onWaitInteraction(isWaiting, input) {
  const self = input.self;
  self.interactionSign.color = isWaiting ? rgba(1, 1, 1, 1) : rgba(1, 1, 1, 0);
}

export default function Lab(x = 0, y = 0) {
  return add([
    sprite("lab"),
    pos(x, y),
    interaction(onInteraction, onWaitInteraction),
    scale(2),
    "interactive",
    {
      interactionSign: add([
        sprite('e'),
        pos(x, y - 15),
        scale(2),
        color(1, 1, 1, 0)
      ])
    }
  ]);
}