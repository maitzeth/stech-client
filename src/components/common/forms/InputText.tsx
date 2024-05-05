import { cn } from '@/utils/common';
import { FOCUS_CLASSNAME } from '@/utils/constants';
import { ErrorLabel } from './ErrorLabel';
import { InputLabel } from './InputLabel';
import { InputsProps } from '@/types/forms';

export const InputText = ({
  id,
  name,
  value,
  className,
  placeholder,
  error,
  label,
  wrapperClassname,
  onChange,
  onBlur,
  ...rest
}: InputsProps<HTMLInputElement>) => {
  return (
    <div className={cn(wrapperClassname)}>
      {label && (
        <InputLabel id={id}>{label}</InputLabel>
      )}
      <input
        id={id}
        name={name}
        type="text"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={cn('input__text', FOCUS_CLASSNAME, className, {
          'input__text--error': error,
        })}
        onBlur={onBlur}
        {...rest}
      />
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </div>
  )
}
