export default function hunger(value) {
  const STAT_MAX = value;
  let hungerStat = value;
  let hungerDebuff = 1;
  let hungerBonus = 0;
  
  // 0.3 for PRODUCTION
  const HUNGER_REDUCTION_FACTOR = 1;

  return {
    id: "hunger",
    update() {
      
      const finalHungerFactor = HUNGER_REDUCTION_FACTOR * hungerDebuff;

      hungerStat = hungerStat > STAT_MAX ? STAT_MAX : hungerStat;
      hungerStat -= finalHungerFactor * dt();
      hungerStat = hungerStat < 0 ? 0 : hungerStat;
      //  debug.log("Hunger: " + hungerStat);
    },
    increaseHungerStat(points) {
      hungerStat += points;
    },
    increaseHungerDebuff(points) {
      hungerDebuff += points;
    },
    clearHungerDebuff() {
      hungerDebuff = 1;
    },
    getHungerStat() {
      return hungerStat;
    }
  }
}