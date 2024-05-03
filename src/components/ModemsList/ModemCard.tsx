import React from 'react';
import { Card } from '@/components';

interface Props {
  title: string;
  description: string;
  id: string;
}

export const ModemCard = ({ description, id, title }: Props) => {
  return (
    <Card className="space-y-4">
      <header>
        <h2 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight text-gray-900">{title}</h2>
      </header>
      <p className="line-clamp-3 text-sm">{description}</p>
      <footer className="flex">
        <button type="button" className="w-full whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-black text-white">Learn more</button>
      </footer>
    </Card>
  );
};
