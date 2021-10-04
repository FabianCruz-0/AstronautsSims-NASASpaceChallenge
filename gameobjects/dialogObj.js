import dialog from '/components/dialog.js';

export default function DialogObj(text)
{
  return add([
    dialog(text),
  ])
}