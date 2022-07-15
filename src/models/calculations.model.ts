export interface SizeType {
  width: number;
  height: number;
}

export interface PositionType {
  x: number;
  y: number;
}

export interface StateType {
  scale: number;
  positionX: number;
  positionY: number;
}

export interface VelocityType {
  velocityX: number;
  velocityY: number;
  total: number;
}

export interface BoundsType {
  minPositionX: number;
  maxPositionX: number;
  minPositionY: number;
  maxPositionY: number;
}

export type AnimationType = () => void | number;
