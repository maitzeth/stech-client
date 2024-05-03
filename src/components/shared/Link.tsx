import { Link as RouterLink } from 'react-router-dom';
import { ComponentProps, PropsWithChildren } from 'react';
import { cn } from '@/utils/common';
import { FOCUS_CLASSNAME } from '@/utils/constants';

interface Props extends ComponentProps<typeof RouterLink>, PropsWithChildren {
  external?: boolean;
}

export const Link = ({ to, children, external, className, ...rest }: Props) => {
  return (
    <RouterLink
      {...rest}
      to={to}
      target={external ? "_blank" : "_self"}
      rel={external ? "nofollow noopener" : undefined}
      className={cn('text-base hover:text-red-500', FOCUS_CLASSNAME, className)}
    >
      {children}
    </RouterLink>
  );
};

