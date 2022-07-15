export const normalizeArgs = (args: { [key: string]: any }): any => {
  const newArgs = {};

  Object.keys(args).forEach((key) => {
    const normalizedKey = key.split(".");
    const isNested = normalizedKey.length === 2;

    if (isNested) {
      if (typeof newArgs[normalizedKey[0]] !== "object") {
        newArgs[normalizedKey[0]] = {};
      }
      newArgs[normalizedKey[0]][normalizedKey[1]] = args[key];
    } else {
      newArgs[key] = args[key];
    }
  });

  return {
    ...newArgs,
    onPanning: undefined,
    onPanningStart: undefined,
    onPanningStop: undefined,
    onPinch: undefined,
    onPinchStart: undefined,
    onPinchStop: undefined,
    onWheel: undefined,
    onWheelStart: undefined,
    onWheelStop: undefined,
    onZoom: undefined,
    onZoomStart: undefined,
    onZoomStop: undefined,
  };
};
