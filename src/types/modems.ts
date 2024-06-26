import { KeysOf } from '@/types/common';

export const modemStatus = {
  active: 'active',
  suspended: 'suspended',
  provision: 'provision',
} as const

export interface Modem {
  name: string;
  description: string;
  status: KeysOf<typeof modemStatus>;
  validSince: string;
  tags: string[]
}

export interface ModemResponse extends Modem {
  id: string;
}

export interface ModemRequest extends Modem {
  id?: string;
}
