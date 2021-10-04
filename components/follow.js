export default function follow(parent, offset = vec2(0, 0)) {
  return {
    id: 'follow',
    add() {
      console.log(parent);
      console.log(this);
    },
    update() {
      this.pos.x = parent.pos.x + offset.x;
      this.pos.y = parent.pos.y + offset.y;
    }
  };
}