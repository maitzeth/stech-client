import { cn } from '@/utils/common';

export const Card = ({ children, className }: any) => {
  return (
    <article className={cn("flex flex-col h-full bg-white shadow-md hover:shadow-lg transition-shado p-6", className)}>
      {children}
    </article>
  );
};
