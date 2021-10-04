export default function solarStormComponent() {  
  const DEBUFF = 1;
  
  return {
    id: 'solarStorm',
    add() {
      this.solarEffect = add([
        rect(width(), height()),
        pos(width() / 2, height() / 2),
        origin('center'),
        color(0.98, 0.8, 0, 0.3)
      ]);

      every("character", (c) => {
        c.increaseMedicineNeedDebuff(DEBUFF);
      });
    },
    update() {
      every("character", (c) => {
        if(c.refugeed){
          c.increaseMedicineNeedStat(dt());
        }
      });
    },
    destroy() {
      destroy(this.solarEffect);
      every("character", (c) => {
        c.increaseMedicineNeedDebuff(-DEBUFF);
      });
    }
  }
}