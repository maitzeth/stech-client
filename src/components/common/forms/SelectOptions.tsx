import { InputLabel } from './InputLabel';
import { ErrorLabel } from './ErrorLabel';
import { cn } from '@/utils/common';
import { FOCUS_CLASSNAME } from '@/utils/constants';
import { InputsProps } from '@/types/forms';

interface Props extends InputsProps<HTMLSelectElement> {
  options: {
    label: string;
    value: string;
  }[]
}

export const SelectOptions = ({
  id,
  name,
  onChange,
  error,
  label,
  className,
  value,
  options
}: Props) => {
  return (
    <div>
      {label && (
        <InputLabel id={id}>
          {label}
        </InputLabel>
      )}
      <select
        id={id}
        name={name}
        onChange={onChange}
        className={cn('input__text', FOCUS_CLASSNAME, className, {
          'input__text--error': error,
        })}
        value={value}
      >
        <option value="" disabled>Please select an option</option>
        {options.map((option, index) => {
          return (
            <option key={`option-element-${index}`} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </div>
  );
};
