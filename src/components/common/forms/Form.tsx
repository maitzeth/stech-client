import { PropsWithChildren, FormEvent } from 'react';
import { PropsWithClassName } from '@/types/common';
import { cn } from '@/utils/common';

interface FormProps extends PropsWithChildren {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

interface FieldsetProps extends PropsWithChildren, PropsWithClassName {
  isLoading?: boolean;
}

const FormWrapper = ({ onSubmit, children }: FormProps) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
}

const FieldsetComponent = ({ children, isLoading, className }: FieldsetProps) => {
  return (
    <fieldset
      disabled={isLoading}
      aria-busy={isLoading}
      className={cn(className)}
    >
      {children}
    </fieldset>
  )
}

export const Form = {
  Wrapper: FormWrapper,
  Fieldset: FieldsetComponent,
};
