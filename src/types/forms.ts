import { HTMLAttributes, ChangeEvent, FocusEvent } from 'react';

export interface InputsProps<T> extends HTMLAttributes<T> {
  label?: string;
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  error?: string;
  wrapperClassname?: string;
  onChange: (event: ChangeEvent<T>) => void;
  onBlur?: (event: FocusEvent<T, Element>) => void;
}