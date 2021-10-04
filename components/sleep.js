export default function sleep(value) {
  const STAT_MAX = value;
  
  let sleepStat = value;
  let sleepDebuff = 1;
  let sleepBonus = 0;
  // 0.3 for PRODUCTION
  const SLEEP_REDUCTION_FACTOR = 1;

  return {
    id: "sleep",
    update() {
      const finalSleepFactor = (SLEEP_REDUCTION_FACTOR * sleepDebuff) - (SLEEP_REDUCTION_FACTOR * sleepBonus);

      sleepStat = sleepStat > STAT_MAX ? STAT_MAX : sleepStat;
      
      sleepStat -= finalSleepFactor * dt();
      sleepStat = sleepStat < 0 ? 0 : sleepStat;
      // debug.log("Sleep: " + sleepStat);
    },
    increaseSleepStat(points) {
      sleepStat += points;
    },
    increaseSleepDebuff(points) {
      sleepDebuff += points;
    },
    increaseSleepBonus(points) {
      sleepBonus += points;
    },
    clearSleepDebuff() {
      sleepDebuff = 1;
    },
    clearSleepBonus() {
      sleepBonus = 0;
    },
    getSleepStat() {
      return sleepStat;
    }
  }
}