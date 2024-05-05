import { modemStatus } from '@/types/modems';
import { KeysOf } from '@/types/common';

export const FOCUS_CLASSNAME = 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700';
export const DATE_FORMATS = {
  default: 'dd-MM-yyyy',
} as const;

export const statusOptions = Object.keys(modemStatus).map((key) => {
  return {
    label: modemStatus[key as KeysOf<typeof modemStatus>],
    value: key,
  };
});
