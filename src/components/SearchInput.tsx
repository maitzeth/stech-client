import { ChangeEvent } from 'react';
import { InputText, Button } from '@/components';
import { FaSearch } from "react-icons/fa";

interface Props {
  onSubmit: () => void;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const SearchInput = ({ onSubmit, value, onChange, disabled }: Props) => {
  return (
    <form onSubmit={onSubmit} className="flex items-stretch gap-2">
      <InputText
        id="search"
        value={value}
        onChange={onChange}
        placeholder="Enter product name..."
        disabled={disabled}
      />
      <Button
        type="submit"
        aria-label="Search button"
        className=""
        disabled={disabled}
      >
        <FaSearch className="text-white" aria-label="lens icon" />
      </Button>
    </form>
  )
}
