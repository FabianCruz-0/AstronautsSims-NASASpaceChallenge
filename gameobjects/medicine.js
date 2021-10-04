import interaction from '/components/interaction.js';

function onInteraction(player) {
  if(!player.locked) {
    player.locked = true;
    player.increaseMedicineNeedStat(30);

    let spritesAnim = {
      19: 'player1Med',
      20: 'player2Med',
      21: 'player3Med'
    };

    let sprites = {
      19: 'player1',
      20: 'player2',
      21: 'player3'
    };

    player.changeSprite(spritesAnim[player._id]);
    player.play('med');
    wait(1, () => {
      player.changeSprite(sprites[player._id]);
      player.locked = false;
    });

    const music = play("healing", {
      volume: 0.35,
    });
  }
}

function onWaitInteraction(isWaiting, input) {
  const self = input.self;
  self.interactionSign.color = isWaiting ? rgba(1, 1, 1, 1) : rgba(1, 1, 1, 0);
}

export default function Medicine(x = 0, y = 0) {
  return add([
    sprite("medicine"),
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