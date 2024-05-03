import { HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/utils/common';

interface Props extends HTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  onClick?: () => void;
  type: 'button' | 'submit';
  disabled?: boolean;
}

export const Button = ({
  onClick,
  children,
  type,
  className,
  disabled,
  ...rest
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn('bg-black py-2 px-4 rounded-md text-sm disabled:opacity-70', className)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
