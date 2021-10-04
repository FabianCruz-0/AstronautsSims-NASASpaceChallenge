import hunger from '/components/hunger.js';
import exercise from '/components/exercise.js';
import characterController from '/components/characterController.js';
import sleep from '/components/sleep.js';
import mentalHealth from '/components/mentalHealth.js';
import medicineNeed from '/components/medicineNeed.js';
import bathroomNeed from '/components/bathroomNeed.js';

export default function Character(x = 0, y = 0, props) {
  return add([
    sprite(props.sprite ?? "player1"),
    pos(x, y),
    scale(2.6),
    characterController(),
    hunger(props.hunger ?? 50),
    exercise(props.exercise ?? 50),
    sleep(props.sleep ?? 50),
    mentalHealth(props.mentalHealth ?? 50),
    medicineNeed(props.medicineNeed ?? 50),
    bathroomNeed(props.bathroomNeed ?? 50),
    body(),
    // TAGS
    "character",
    {
      selected: props.selected ?? false,
      locked: false,
      refugeed: false
    }
  ]);
}