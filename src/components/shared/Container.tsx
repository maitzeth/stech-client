import { HTMLAttributes, PropsWithChildren, createElement,  } from 'react'
import { PropsWithClassName } from '@/types/common';
import { cn } from '@/utils/common';

interface Props extends HTMLAttributes<HTMLDivElement>,
  PropsWithChildren,
  PropsWithClassName {
    as: 'div' | 'main'
  }

export const Container = ({ className, children, as, ...rest }: Props) => {
  return createElement(
    as,
    {
      ...rest,
      className: cn('container mx-auto px-4', className),
    },
    children
  );
};
