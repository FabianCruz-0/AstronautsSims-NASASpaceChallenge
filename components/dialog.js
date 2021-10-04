export default function dialog(text) {
  return {
    id: 'dialog',
    add() {
      document.getElementById('textDialog').innerHTML = text;
      document.getElementById('dialog').classList.add('visible');
    },
    hide() {
      document.getElementById('dialog').classList.remove('visible');
      document.getElementById('dialog').classList.add('hidden');
    },
    show() {
      document.getElementById('dialog').classList.remove('hidden');
      document.getElementById('dialog').classList.add('visible');
    },
    changeText(text) {
      document.getElementById('textDialog').innerHTML = text;
    },
    destroy() {
      this.hide();
    }
  }
}