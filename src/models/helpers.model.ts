/* eslint-disable @typescript-eslint/ban-types */

export type DeepNonNullable<T> = T extends (...args: Array<any>) => any
  ? T
  : T extends Array<any>
  ? DeepNonNullableArray<T[number]>
  : T extends object
  ? DeepNonNullableObject<T>
  : T;

export type DeepNonNullableArray<T> = Array<DeepNonNullable<NonNullable<T>>>;

export type DeepNonNullableObject<T> = {
  [P in keyof T]-?: DeepNonNullable<NonNullable<T[P]>>;
};
