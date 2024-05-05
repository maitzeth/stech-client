import { FaTimes } from "react-icons/fa";
import { cn } from '@/utils/common';
import { FOCUS_CLASSNAME  } from '@/utils/constants'; 
import { modemStatus } from '@/types/modems';
import { KeysOf, PropsWithClassName } from '@/types/common';

const BASE_CLASSNAME = "rounded-lg inline-flex justify-between items-stretch pl-3 py-2 leading-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-300 text-gray-600";

type StatusType = {
  type: "status";
  status: KeysOf<typeof modemStatus>;
}

type DefaultType = PropsWithClassName<{
  type: "default";
  text: string;
  onClick?: () => void;
}>

type Props = StatusType | DefaultType;

export const Badge = (props: Props) => {
  if (props.type === 'status') {
    const { status } = props;
    return (
      <div className={cn(BASE_CLASSNAME, 'px-8 text-base capitalize', {
        'bg-green-500 text-white': status === modemStatus.active,
        'bg-red-500 text-white': status === modemStatus.suspended,
        'bg-gray-500 text-white': status === modemStatus.provision,
      })}>
        <p className="self-center">{status}</p>
      </div>
    )
  }

  if (props.type === 'default') {
    const { onClick, text } = props;

    return (
      <div
        className={cn(BASE_CLASSNAME, {
          'pr-3': !onClick,
          'p-0 pl-4': onClick
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
  }


  return null;
};
