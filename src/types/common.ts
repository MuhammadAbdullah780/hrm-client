export type Nested<T> = T extends object
  ? {
      [K in keyof T]: T[K] extends object[]
        ? never
        : T[K] extends object
        ? `${K & string}.${Nested<T[K]> & string}`
        : `${K & string}`;
    }[keyof T]
  : T;
