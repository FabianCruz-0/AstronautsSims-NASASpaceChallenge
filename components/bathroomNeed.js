export default function bathroomNeed(value) {
  const STAT_MAX = value;
  let bathroomNeedStat = value;
  let bathroomNeedDebuff = 1;
  // 0.3 for PRODUCTION
  const BATHROOM_NEED_REDUCTION_FACTOR = 1;

  return {
    id: "bathroomNeed",
    update() {
      const finalBathroomNeedFactor = BATHROOM_NEED_REDUCTION_FACTOR * bathroomNeedDebuff;

      bathroomNeedStat = bathroomNeedStat > STAT_MAX ? STAT_MAX : bathroomNeedStat;

      bathroomNeedStat -= finalBathroomNeedFactor * dt();
      bathroomNeedStat = bathroomNeedStat < 0 ? 0 : bathroomNeedStat;
      // debug.log("BathroomNeed: " + bathroomNeedStat);
    },
    increaseBathroomNeedStat(points) {
      bathroomNeedStat += points;
    },
    increaseBathroomNeedDebuff(points) {
      bathroomNeedDebuff += points;
    },
    clearBathroomNeedDebuff() {
      bathroomNeedDebuff = 1;
    },
    getBathroomNeedStat() {
      return bathroomNeedStat;
    }
  }
}