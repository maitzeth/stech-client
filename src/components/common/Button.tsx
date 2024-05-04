import { HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/utils/common';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { FOCUS_CLASSNAME } from '@/utils/constants';

type CommonTypes = {
  disabled?: boolean;
}

type RouterType = LinkProps & {
  type: 'router';
  to: string;
}

type ButtonType = HTMLAttributes<HTMLButtonElement> & {
  type: 'button' | 'submit';
  variant?: 'danger' | 'default';
  onClick?: () => void;
}

type UnionType = (CommonTypes & RouterType) | (CommonTypes & ButtonType);

type Props = UnionType & PropsWithChildren;

const BASE_CLASSNAME = 'bg-gray-900 py-2 px-4 rounded-md text-sm disabled:opacity-70 text-white';

export const Button = (props: Props) => {
  const { type } = props;
  
  if (type === 'button' || type === 'submit') {
    const {
      type,
      onClick,
      className,
      disabled,
      children,
      variant = 'default',
      ...rest
    } = props;

    return (
      <button
        type={type}
        onClick={onClick}
        className={cn(BASE_CLASSNAME, FOCUS_CLASSNAME, className, {
          'bg-red-500': variant === 'danger',
        })}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  }

  if (type === 'router') {
    const { to, className, disabled, children, ...rest } = props;
    return (
      <Link
        to={to}
        className={cn(BASE_CLASSNAME, FOCUS_CLASSNAME, 'text-center leading-[2]', className)}
        aria-disabled={disabled}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return null;

}
