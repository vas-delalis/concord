import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from 'routes';
import { queryClient } from 'lib/react-query';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
