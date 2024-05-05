import { AxiosError } from 'axios';
import classNames, { type ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';
import { TEXTS } from '@/utils/constants';

/**
 * UTILITY
 * Combines class names provided as arguments and merges them with Tailwind CSS class names
 * producing a single string of class names suitable for applying to HTML elements for styling.
 * Also remove duplicated classnames
 *
 * @public
 */
export const cn = (...inputs: ArgumentArray) => {
  return twMerge(classNames(inputs));
};

export const handleError = (error: unknown): Error => {
  const errorMsg = (error as Error).message;

  if (error instanceof AxiosError) {
    const serverMsg = error.response?.data;
    throw new Error(serverMsg ?? TEXTS.errors.badError);
  }

  throw new Error(errorMsg ?? TEXTS.errors.badError);
} 
