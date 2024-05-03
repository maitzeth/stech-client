import { Navbar } from '@/components';

export const Header = () => {
  return (
    <header className="p-10 bg-gray-200 h-60 flex items-center justify-between">
      <h1 className="text-4xl font-bold tracking-wider">Discover Modemtify</h1>
      <Navbar />
    </header>
  );
};
