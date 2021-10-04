import follow from '/components/follow.js';

export default function interactionSignComponent(offset){
  return {
    id: 'interactionSignComponent',
    add() {
      const parent = this;
      this.interactionSign = add([
        sprite('e'),
        pos(),
        follow(parent, offset),
        scale(2),
        color(1, 1, 1, 0)
      ]);
    },
    destroy() {
      destroy(this.interactionSign);
    }
  }
}