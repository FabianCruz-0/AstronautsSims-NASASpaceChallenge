export default function gui(player,player2,player3) {

  return {
    id: 'gui',
    update() {
      document.getElementById("HungerStatHTML").value = player.getHungerStat() + '';
      document.getElementById("SleepStatHTML").value = player.getSleepStat() + '';
      document.getElementById("ExerciseStatHTML").value = player.getExerciseStat() + '';
      document.getElementById("mentalHealthStatHTML").value = player.getMentalHealthStat() + '';
      document.getElementById("MedicineStatHTML").value = player.getMedicineNeedStat() + '';
      document.getElementById("BathroomStatHTML").value = player.getBathroomNeedStat() + '';

      document.getElementById("HungerStat2HTML").value = player2.getHungerStat() + '';
      document.getElementById("SleepStat2HTML").value = player2.getSleepStat() + '';
      document.getElementById("ExerciseStat2HTML").value = player2.getExerciseStat() + '';
      document.getElementById("mentalHealthStat2HTML").value = player2.getMentalHealthStat() + '';
      document.getElementById("MedicineStat2HTML").value = player2.getMedicineNeedStat() + '';
      document.getElementById("BathroomStat2HTML").value = player2.getBathroomNeedStat() + '';

      document.getElementById("HungerStat3HTML").value = player3.getHungerStat() + '';
      document.getElementById("SleepStat3HTML").value = player3.getSleepStat() + '';
      document.getElementById("ExerciseStat3HTML").value = player3.getExerciseStat() + '';
      document.getElementById("mentalHealthStat3HTML").value = player3.getMentalHealthStat() + '';
      document.getElementById("MedicineStat3HTML").value = player3.getMedicineNeedStat() + '';
      document.getElementById("BathroomStat3HTML").value = player3.getBathroomNeedStat() + '';
    }
  }
}