import { Routes } from '../src/Routes/';
import GlobalStyle from './GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <Routes />
        </QueryClientProvider>
    );
}

export default App;
