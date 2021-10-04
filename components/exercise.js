export default function exercise(value) {
  const STAT_MAX = value;
  let exerciseStat = value;
  let exerciseDebuff = 1;
  let exerciseBonus = 0;
  // 0.3 for PRODUCTION
  const EXERCISE_REDUCTION_FACTOR = 1;

  return {
    id: "exercise",
    update() {
      const finalExerciseFactor = (EXERCISE_REDUCTION_FACTOR * exerciseDebuff) - (EXERCISE_REDUCTION_FACTOR * exerciseBonus);

      exerciseStat = exerciseStat > STAT_MAX ? STAT_MAX : exerciseStat;

      exerciseStat -= finalExerciseFactor * dt();
      exerciseStat = exerciseStat < 0 ? 0 : exerciseStat;
      // debug.log("Exercise: " + exerciseStat);
    },
    increaseExerciseStat(points) {
      exerciseStat += points;
    },
    increaseExerciseDebuff(points) {
      exerciseDebuff += points;
    },
    increaseExerciseBonus(points) {
      exerciseBonus += points;
    },
    clearExerciseDebuff() {
      exerciseDebuff = 1;
    },
    clearExerciseBonus() {
      exerciseBonus = 0;
    },
    getExerciseStat() {
      return exerciseStat;
    }
  }
}