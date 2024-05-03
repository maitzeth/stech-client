import { ModemCard } from './ModemCard';
import { ModemResponse } from '@/types/modems';

interface Props {
  data: {
    id: ModemResponse['id'],
    name: ModemResponse['name'],
    description: ModemResponse['description'],
  }[];
}

export const ModemsRenderer = ({ data }: Props) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((modem) => {
        return (
          <ModemCard
            key={modem.id}
            id={modem.id}
            title={modem.name}
            description={modem.description}
          />
        );
      })}
    </section>
  );
}
