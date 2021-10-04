import interaction from '/components/interaction.js';

function onInteraction(player, self) {
  const systemMalfunctions = get("systemMalfunction");
  
  if(systemMalfunctions.length > 0) {
    player.locked = true;
    wait(5, () => {
      player.locked = false;
      every("systemMalfunction", destroy);
      every("randomEventManager", (rem) => {
        rem.eventIsHappening = false;
      });
    });
  }
}

function onWaitInteraction(isWaiting, input) {
  const self = input.self;
  self.interactionSign.color = isWaiting ? rgba(1, 1, 1, 1) : rgba(1, 1, 1, 0);
}

export default function ShipSystem(x = 0, y = 0) {
  return add([
    sprite("energy-off"),
    pos(x, y),
    interaction(onInteraction, onWaitInteraction),
    scale(2.4),
    "shipSystem",
    "interactive",
    {
      interactionSign: add([
        sprite('e'),
        pos(x + 5, y - 30),
        scale(2),
        color(1, 1, 1, 0)
      ])
    }
  ]);
}