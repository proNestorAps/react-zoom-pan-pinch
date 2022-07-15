import { ReactZoomPanPinchRef } from "../models";

export const handleCallback = <T>(
  context: ReactZoomPanPinchRef,
  event: T,
  callback?: (context: ReactZoomPanPinchRef, event: T) => void,
): void => {
  if (callback !== undefined && typeof callback === "function") {
    callback(context, event);
  }
};
