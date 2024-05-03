import { Card, Button } from '@/components';
import { ModemResponse } from '@/types/modems';
import { ROUTES } from '@/routes/routes';

interface Props {
  id: ModemResponse['id'];
  name: ModemResponse['name'];
  description: ModemResponse['description'];
}

export const ModemCard = ({ description, id, name }: Props) => {
  return (
    <Card className="space-y-4">
      <header>
        <h2 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight text-gray-900">{name}</h2>
      </header>
      <p className="line-clamp-3 text-sm">{description}</p>
      <footer className="flex">
        <Button type="router" to={`${ROUTES.modems}/${id}`} className="w-full">
          Learn more
        </Button>
      </footer>
    </Card>
  );
};
