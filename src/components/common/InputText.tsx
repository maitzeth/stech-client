import React, { HTMLAttributes, ChangeEvent } from 'react';
import { cn } from '@/utils/common';
import { FOCUS_CLASSNAME } from '@/utils/constants';

interface Props extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  value: string;
  placeholder: string;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({
  id,
  onChange,
  value,
  className,
  placeholder,
  disabled,
  ...rest
}: Props) => {
  return (
    <fieldset disabled={disabled} aria-busy={disabled}>
      <input
        id={id}
        type="text"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={cn('w-full rounded-md border border-gray-300 bg-white py-2 pl-4 pr-10 text-sm', FOCUS_CLASSNAME, className)}
        {...rest}
      />
    </fieldset>
  )
}
