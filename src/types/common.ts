/**
 * This type alias receive additional properties, including a className to allow for custom styling.
 *
 * @public
*/
export type PropsWithClassName<T = unknown> = T & {
  className?: string;
};

/**
 * This alias essentially gives you a union type containing all the value types from the properties.
*
* @public
*/
export type ValuesOf<T> = T[keyof T];

/**
 * This alias is useful in scenarios where you want to explicitly represent the keys of an object type.
*
* @public
*/
export type KeysOf<T> = keyof T;

/**
 * This type alias is useful for scenarios where a value can be explicitly set to null.
 *
 * @public
*/
export type Maybe<T> = T | null;