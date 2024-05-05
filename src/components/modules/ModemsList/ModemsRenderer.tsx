import { ModemCard } from './ModemCard';
import { ModemResponse } from '@/types/modems';
import Skeleton from 'react-loading-skeleton';
import { EmptySearch } from '@/components';

interface Props {
  data: {
    id: ModemResponse['id'],
    name: ModemResponse['name'],
    description: ModemResponse['description'],
  }[] | undefined;
  isLoading: boolean;
}

export const ModemsRenderer = ({ data, isLoading }: Props) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {isLoading && (
        <>
          {[...Array(6).keys()].map((_, index) => {
            return (
              <Skeleton key={`loading-skeleton-${index}`} height={250} />
            )
          })}
        </>
      )}

      {data && (
        <>
          {data.length > 0 ? data.map((modem) => {
            return (
              <ModemCard
                key={modem.id}
                id={modem.id}
                name={modem.name}
                description={modem.description}
              />
            );
          }) : <EmptySearch />}
        </>
      )}
    </section>
  );
}
