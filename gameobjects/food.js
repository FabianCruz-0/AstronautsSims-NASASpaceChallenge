import interaction from '/components/interaction.js';
import interactionSignComponent from '/components/interactionSignComponent.js';

function onInteraction(player) {
  
  if(!player.locked) {
    player.increaseHungerStat(20);
    player.increaseExerciseStat(-5);

    player.locked = true;

    const music = play("eating", {
      volume: 1,
    })

    switch(player._id)
    {
      case 19:
      player.changeSprite('player1Eating')
      player.play('eating')
      wait(1, () => {
        player.changeSprite('player1');
        player.locked = false;
      });
      break;
      case 20:
      player.changeSprite('player2Eating')
      player.play('eating')
      wait(1, () => {
        player.changeSprite('player2');
        player.locked = false;
      });
      break;
      case 21:
      player.changeSprite('player3Eating')
      player.play('eating')
      wait(1, () => {
        player.changeSprite('player3');
        player.locked = false;
      });
      break;
    }

  }

}

function onWaitInteraction(isWaiting, input) {
  const self = input.self;
  self.interactionSign.color = isWaiting ? rgba(1, 1, 1, 1) : rgba(1, 1, 1, 0);
}

export default function Food(x = 0, y = 0) {
  return add([
    sprite("food"),
    pos(x, y),
    body(),
    interaction(onInteraction, onWaitInteraction),
    scale(2),
    "interactive",
    interactionSignComponent(vec2(0, -15))
  ]);
}