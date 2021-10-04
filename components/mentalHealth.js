export default function mentalHealth(value) {
  const STAT_MAX = value;
  
  let mentalHealthStat = value;
  let mentalHealthDebuff = 1;
  let mentalHealthBonus = 0;
  // 0.3 for PRODUCTION
  const MENTAL_HEALTH_REDUCTION_FACTOR = 0.4;

  return {
    id: "mentalHealth",
    update() {
      const finalMentalHealthFactor = (MENTAL_HEALTH_REDUCTION_FACTOR * mentalHealthDebuff) - (MENTAL_HEALTH_REDUCTION_FACTOR * mentalHealthBonus);
      
      mentalHealthStat = mentalHealthStat > STAT_MAX ? STAT_MAX : mentalHealthStat;

      mentalHealthStat -= finalMentalHealthFactor * dt();
      mentalHealthStat = mentalHealthStat < 0 ? 0 : mentalHealthStat;
      // debug.log("MentalHealth: " + mentalHealthStat);
    },
    increaseMentalHealthStat(points) {
      mentalHealthStat += points;
    },
    increaseMentalHealthDebuff(points) {
      mentalHealthDebuff += points;
    },
    increaseMentalHealthBonus(points) {
      mentalHealthBonus += points;
    },
    clearMentalHealthDebuff() {
      mentalHealthDebuff = 1;
    },
    clearMentalHealthBonus() {
      mentalHealthBonus = 0;
    },
    getMentalHealthStat() {
      return mentalHealthStat;
    }
  }
}