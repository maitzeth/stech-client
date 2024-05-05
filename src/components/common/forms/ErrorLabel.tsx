import { PropsWithChildren } from 'react';

export const ErrorLabel = ({ children }: PropsWithChildren) => {
  return (
    <span className="text-red-500 text-sm block mt-2 font-medium">{children}</span>
  );
};
