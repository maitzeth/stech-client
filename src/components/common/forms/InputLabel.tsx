import { HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/utils/common';

interface Props extends HTMLAttributes<HTMLLabelElement>, PropsWithChildren {}

export const InputLabel = ({ id, children, className, ...rest }: Props) => {
  return (
    <label htmlFor={id} {...rest} className={cn('mb-1 text-base font-bold block', className)}>
      {children}
    </label>
  );
};
