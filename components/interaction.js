export default function interaction(callback, onWait = null) {
  let onInteractionCallback = callback;
  let onWaitInteractionCallback = onWait
  
  return {
    id: "interaction",
    onInteraction(input, self) {
      return onInteractionCallback(input, self);
    },
    onWaitInteraction(isInteracting, input) {
      return onWaitInteractionCallback ? onWaitInteractionCallback(isInteracting, input) : null;
    }
  };
}