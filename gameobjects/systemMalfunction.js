import systemMalfunctionComponent from '/components/systemMalfunctionComponent.js';

export default function SystemMalfunction() {
  return add([
    systemMalfunctionComponent(),
    "systemMalfunction"
  ]);
}