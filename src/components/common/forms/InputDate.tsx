import DatePicker from "react-datepicker";
import { cn } from '@/utils/common';
import { FOCUS_CLASSNAME } from '@/utils/constants';
import { InputLabel } from './InputLabel';
import { ErrorLabel } from './ErrorLabel';

interface Props {
  onSelect: (date: Date) => void;
  value: Date;
  error?: string;
  label?: string;
  id: string;
  name: string;
}

export const InputDate = ({
  onSelect,
  value,
  error,
  label,
  id,
  name,
}: Props) => {
  return (
    <div>
      {label && (
        <InputLabel id={id}>{label}</InputLabel>
      )}
      <DatePicker
        id={id}
        name={name}
        selected={value}
        onChange={(date) => {
          if (date) {
            onSelect(date);
          }
        }}
        dateFormat="dd/MM/yyyy"
        className={cn('input__text', FOCUS_CLASSNAME, {
          'input__text--error': error,
        })}
        wrapperClassName="!block"
      />
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </div>
  )
}
