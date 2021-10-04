export default function selectTriangle() {

  return {
    id: "selectTriangle",
    follow(player, triangle) {
      triangle.pos.x=player.pos.x+11;
      triangle.pos.y=player.pos.y-20;
    }
  }
}