import { FaTimes } from "react-icons/fa";
import { cn } from '@/utils/common';
import {  FOCUS_CLASSNAME  } from '@/utils/constants'; 

interface Props {
  text: string;
  onClick?: () => void;
}

export const Badge = ({ text, onClick }: Props) => {
  return (
    <div
      className={cn("rounded-lg inline-flex justify-between items-stretch pl-3 leading-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-300 text-gray-600", {
        'pr-3': !onClick
      })}
    >
      <p className="self-center">{text}</p>
      {onClick && (
        <button
          type="button"
          onClick={onClick}
          className={cn("bg-red-500 rounded-tr-lg  rounded-br-lg px-2 ml-3", FOCUS_CLASSNAME)}
          aria-label="remove badge"
        >
          <FaTimes className="text-white" />
        </button>
      )}
    </div>
  );
};
