export default function systemMalfunctionComponent() {
  const DEBUFF = 0.5;
  
  return {
    id: 'systemMalfunctionComponent',
    add() {
      every("shipSystem", (ss) => {
        ss.changeSprite("energy-on");
      });
      
      every("character", (c) => {
        c.increaseMedicineNeedDebuff(DEBUFF);
        c.increaseSleepDebuff(DEBUFF);
        c.increaseMentalHealthDebuff(DEBUFF);
      });
    },
    destroy() {
      every("character", (c) => {
        c.increaseMedicineNeedDebuff(-DEBUFF);
        c.increaseSleepDebuff(-DEBUFF);
        c.increaseMentalHealthDebuff(-DEBUFF);
      });

      every("shipSystem", (ss) => {
        ss.changeSprite("energy-off");
      });
    }
  }
}