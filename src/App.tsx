import AppRouter from '@/routes';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Footer, Container, ScreenLoading } from '@/components';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <main className={`flex flex-col min-h-screen bg-gray-100`}>
          <Header />
            <Suspense fallback={<ScreenLoading />}>
              <Container as="div" className="py-8">
                <AppRouter />
              </Container>
            </Suspense>
          <Footer />
        </main>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
