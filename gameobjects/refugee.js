export default function Refugee(x = 0, y = 0, w = 100, h = 100) {
  return add([
    rect(w, h),
    pos(x, y),
    color(0, 0.8, 0.2, 0.3),
    "refugee"
  ]);
}