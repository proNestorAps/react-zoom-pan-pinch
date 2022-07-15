import {
  handleCalculateButtonZoom,
  resetTransformations,
} from "core/handlers/handlers.utils";
import { getMousePosition } from "core/wheel/wheel.utils";
import { handleZoomToPoint } from "core/zoom/zoom.logic";
import { isExcludedNode } from "utils";
import { ReactZoomPanPinchContext } from "../../models";
import { animate } from "../animations/animations.utils";

export function handleDoubleClick(
  contextInstance: ReactZoomPanPinchContext,
  event: MouseEvent | TouchEvent,
): void {
  const { disabled, mode, step, animationTime, animationType } =
    contextInstance.setup.doubleClick;

  if (disabled) {
    return;
  }

  if (mode === "reset") {
    resetTransformations(contextInstance, animationTime, animationType);
    return;
  }

  const { scale } = contextInstance.transformState;
  const { contentComponent } = contextInstance;

  if (contentComponent === null) {
    console.error("No ContentComponent found");
    return;
  }

  const delta = mode === "zoomOut" ? -1 : 1;

  const newScale = handleCalculateButtonZoom(contextInstance, delta, step);
  const mousePosition = getMousePosition(event, contentComponent, scale);
  const targetState = handleZoomToPoint(
    contextInstance,
    newScale,
    mousePosition.x,
    mousePosition.y,
  );

  if (targetState === undefined) {
    console.error(
      "Error during zoom event. New transformation state was not calculated.",
    );
    return;
  }

  animate(contextInstance, targetState, animationTime, animationType);
}

export const isDoubleClickAllowed = (
  contextInstance: ReactZoomPanPinchContext,
  event: MouseEvent | TouchEvent,
): boolean => {
  const { isInitialized, setup, wrapperComponent } = contextInstance;
  const { disabled, excluded } = setup.doubleClick;

  const target = event.target as HTMLElement | null;
  const isWrapperChild = wrapperComponent?.contains(target) ?? false;
  const isAllowed =
    isInitialized && target !== null && isWrapperChild && !disabled;

  if (!isAllowed) {
    return false;
  }

  const isExcluded = isExcludedNode(target, excluded);

  if (isExcluded) {
    return false;
  }

  return true;
};
