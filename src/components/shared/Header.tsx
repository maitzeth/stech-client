import { Navbar } from '@/components';

export const Header = () => {
  return (
    <header className="p-10 bg-gray-200 lg:h-60 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
      <h1 className="text-2xl lg:text-4xl font-bold tracking-wider">Discover Modemtify</h1>
      <Navbar />
    </header>
  );
};
