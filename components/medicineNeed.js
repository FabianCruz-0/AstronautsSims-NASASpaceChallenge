export default function medicineNeed(value) {
  const STAT_MAX = value;
  
  let medicineNeedStat = value;
  let medicineNeedDebuff = 1;

  //0.3 for PRODUCTION
  const MEDICINE_NEED_REDUCTION_FACTOR = 1;

  return {
    id: "medicineNeed",
    update() {
      const finalMedicineNeedFactor = MEDICINE_NEED_REDUCTION_FACTOR * medicineNeedDebuff;


      medicineNeedStat = medicineNeedStat > STAT_MAX ? STAT_MAX : medicineNeedStat;

      medicineNeedStat -= finalMedicineNeedFactor * dt();
      medicineNeedStat = medicineNeedStat < 0 ? 0 : medicineNeedStat;
      // debug.log("MedicineNeed: " + medicineNeedStat);
    },
    increaseMedicineNeedStat(points) {
      medicineNeedStat += points;
    },
    increaseMedicineNeedDebuff(points) {
      medicineNeedDebuff += points;
    },
    clearMedicineNeedDebuff() {
      medicineNeedDebuff = 1;
    },
    getMedicineNeedStat() {
      return medicineNeedStat;
    }
  }
}