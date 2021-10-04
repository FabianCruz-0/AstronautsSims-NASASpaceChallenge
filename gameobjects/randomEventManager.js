import DialogObj from '/gameobjects/dialogObj.js';
import SolarStorm from '/gameobjects/solarStorm.js';
import SystemMalfunction from '/gameobjects/systemMalfunction.js';

function solarStorm(manager) {
  manager.storm = SolarStorm();
  const initialMessageDlg = DialogObj("A Solar Storm is happening! Go to the refugee!");
  wait(3, () => {
    destroy(initialMessageDlg);
  });

  manager.eventIsHappening = true;
  wait(20, () => {
    destroy(manager.storm);
    manager.eventIsHappening = false;
    const finalMessageDlg = DialogObj("Finally! The Solar Storm has ended!");
    wait(3, () => {
      destroy(finalMessageDlg);
    });
  });
}

function systemMalfunction(manager) {
  const initialMessageDlg = DialogObj("There is a system malfunction! Your environment is compromised, fix it ASAP");
  manager.eventIsHappening = true;
  SystemMalfunction();
  wait(3, () => {
    destroy(initialMessageDlg);
  });
}

function randomEventTimer(manager) {
  const eventCallbacks = [
    solarStorm,
    systemMalfunction
  ];
  
  const random = rand();
  if(random < 0.1 && !manager.eventIsHappening) {
    choose(eventCallbacks)(manager);
  }
}

export default function RandomEventManager() {
  return add([
    "randomEventManager",
    {
      eventIsHappening: false,
      eventTimer: randomEventTimer
    }
  ]);
}