import { Container } from './Container';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 rounded-tl-3xl rounded-tr-3xl mt-auto">
      <Container as="div" className="flex justify-between items-center">
        <p className="text-lg uppercase font-bold text-white">
          Modemfity
        </p>
        <p className="text-sm text-white">
          All right reserved &copy; {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
};
