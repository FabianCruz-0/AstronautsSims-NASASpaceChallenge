let bar = document.getElementById('barToPlanet');
let timeRemaining = document.getElementById('timeRemaining');
// 0.73 for PRODUCTION
const increment = 0.73;
let segs;

let flip = false;



setInterval(myfun2, 1000);

function myfun2() {
  bar.value = bar.value + increment;
}

export default function gameInit() {
  bar.value = 0;

  let loop = setInterval(myfun, 1000);
  function myfun() {

    segs = 300 - bar.value;
    timeRemaining.innerHTML = segs.toFixed(2) + ' Days left';

    if (segs < 1 && flip == false) {
      go("ArrivalToMars")
      flip = true;
      segs=300
      clearInterval(loop);
    }

if (flip) {
  document.getElementById('barToPlanet').style.transform = "rotate(180deg)";
}

    if (segs <1 && flip == true) 
    {
      go('winScene');
      clearInterval(loop);
    }
  }

}
