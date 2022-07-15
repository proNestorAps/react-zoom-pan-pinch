import {
  LibrarySetup,
  ReactZoomPanPinchComponentHelpers,
  ReactZoomPanPinchContext,
  ReactZoomPanPinchState,
} from "../models/context.model";

export const initialState: ReactZoomPanPinchState = {
  positionX: 0,
  positionY: 0,
  previousScale: 1,
  scale: 1,
};

export const contextInitialState: ReactZoomPanPinchComponentHelpers &
  ReactZoomPanPinchState & {
    contextInstance: ReactZoomPanPinchContext | null;
  } = {
  ...initialState,
  contextInstance: null,
  setComponents: () => undefined,
};

export const initialSetup: LibrarySetup = {
  centerOnInit: false,
  centerZoomedOut: false,
  disabled: false,
  limitToBounds: true,
  maxPositionX: null,
  maxPositionY: null,
  maxScale: 8,
  minPositionX: null,
  minPositionY: null,
  minScale: 1,
  alignmentAnimation: {
    animationTime: 200,
    animationType: "easeOut",
    disabled: false,
    sizeX: 100,
    sizeY: 100,
    velocityAlignmentTime: 400,
  },
  doubleClick: {
    animationTime: 200,
    animationType: "easeOut",
    disabled: false,
    excluded: [],
    mode: "zoomIn",
    step: 0.7,
  },
  panning: {
    activationKeys: [],
    disabled: false,
    excluded: [],
    lockAxisX: false,
    lockAxisY: false,
    velocityDisabled: false,
  },
  pinch: {
    disabled: false,
    excluded: [],
    step: 5,
  },
  velocityAnimation: {
    animationTime: 400,
    animationType: "easeOut",
    disabled: false,
    equalToMove: true,
    sensitivity: 1,
  },
  wheel: {
    activationKeys: [],
    disabled: false,
    excluded: [],
    step: 0.2,
    touchPadDisabled: false,
    wheelDisabled: false,
  },
  zoomAnimation: {
    animationTime: 200,
    animationType: "easeOut",
    disabled: false,
    size: 0.4,
  },
};
