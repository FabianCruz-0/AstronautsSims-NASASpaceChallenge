import interaction from '/components/interaction.js';
import DialogObj from '/gameobjects/dialogObj.js';

function onInteraction(player, self) {
  const bonus = 2;
  const debuff = 0.5;

  let spritesAnim = {
    19: 'player1Type',
    20: 'player2Type',
    21: 'player3Type'
  };

  if(player.locked) {
    player.increaseMentalHealthBonus(-bonus);
    player.increaseSleepDebuff(-debuff);

    self.changeSprite('commandCenter');
    player.hidden = false;
  }
  else {
    const dlg = DialogObj('You can communicate with your family here as a countermeasure for isolation. Press E again to stop your communication');

    wait(4, () => {
      destroy(dlg);
    });

    self.changeSprite(spritesAnim[player._id]);
    self.play('type');
    player.hidden = true;

    player.increaseMentalHealthBonus(bonus);
    player.increaseSleepDebuff(debuff);
  }

  player.locked = !player.locked;
}

function onWaitInteraction(isWaiting, input) {
  const self = input.self;
  self.interactionSign.color = isWaiting ? rgba(1, 1, 1, 1) : rgba(1, 1, 1, 0);
}

export default function CommandCenter(x = 0, y = 0) {
  return add([
    sprite("commandCenter"),
    pos(x, y),
    interaction(onInteraction, onWaitInteraction),
    scale(2.6),
    origin('center'),
    "interactive",
    {
      interactionSign: add([
        sprite('e'),
        origin('center'),
        pos(x, y -30),
        scale(2),
        color(1, 1, 1, 0)
      ])
    }
  ]);
}