import { ChakraProvider } from '@chakra-ui/react';
import { CookiesProvider } from 'react-cookie';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import QueryClientConfig from './constants/query-client.constant';
import Theme from './constants/theme';
import { AuthProvider } from './contexts/auth.context';
import ApplicationRoutes from './pages';

function App() {
  const queryClient = new QueryClient(QueryClientConfig);

  return (
    <QueryClientProvider client={queryClient} contextSharing>
      <AuthProvider>
        <CookiesProvider>
          <ChakraProvider theme={Theme}>
            <Hydrate>
              <BrowserRouter>
                <ApplicationRoutes />
              </BrowserRouter>
            </Hydrate>
          </ChakraProvider>
        </CookiesProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
