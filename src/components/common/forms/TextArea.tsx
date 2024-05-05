import { InputsProps } from '@/types/forms';
import { ErrorLabel } from './ErrorLabel';
import { InputLabel } from './InputLabel';
import { cn } from '@/utils/common';
import { FOCUS_CLASSNAME } from '@/utils/constants';

export const TextArea = ({
  id,
  name,
  value,
  className,
  placeholder,
  error,
  label,
  onChange,
  onBlur,
  ...rest
}: InputsProps<HTMLTextAreaElement>) => {
  return (
    <div>
      {label && <InputLabel id={id}>{label}</InputLabel>}
      <textarea
        id={id}
        name={name}
        value={value}
        className={cn('input__text', FOCUS_CLASSNAME, className, {
          'input__text--error': error,
        })}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </div>
  );
}
