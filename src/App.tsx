import AppRouter from '@/routes';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  );
}

export default App
