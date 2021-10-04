import interaction from '/components/interaction.js';

function onInteraction(player, self) {
  player.increaseBathroomNeedStat(30);
  player.increaseHungerStat(-20);
  // self.hidden = true;
  player.locked = true;

  const music = play("toilet", {
    volume: 1,
  });

  switch(player._id)
 {
   case 19:
   self.changeSprite('player1Toilet')
  self.play('toilet')
  player.hidden = true;
  wait(1, () => {
    self.changeSprite('bathroom')
    // self.hidden = false;
    player.hidden = false;
    player.locked = false;
  })
   break;
   case 20:
   self.changeSprite('player2Toilet')
  self.play('toilet')
  player.hidden = true;
  wait(1, () => {
    self.changeSprite('bathroom')
    // self.hidden = false;
    player.hidden = false;
    player.locked = false;
  }
  )
   break;
   case 21:
   self.changeSprite('player3Toilet')
  self.play('toilet')
  player.hidden = true;
  wait(1, () => {
    self.changeSprite('bathroom')
    // self.hidden = false;
    player.hidden = false;
    player.locked = false;
  }
  )
   break;
 }

}

function onWaitInteraction(isWaiting, input) {
  const self = input.self;
  self.interactionSign.color = isWaiting ? rgba(1, 1, 1, 1) : rgba(1, 1, 1, 0);
}

export default function Bathroom(x = 0, y = 0) {
  return add([
    sprite("bathroom"),
    pos(x, y),
    interaction(onInteraction, onWaitInteraction),
    scale(3),
    "interactive",
    {
      interactionSign: add([
        sprite('e'),
        pos(x + 10, y - 25),
        scale(2),
        color(1, 1, 1, 0)
      ])
    }
  ]);
}