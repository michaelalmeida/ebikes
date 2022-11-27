import { Routes } from '../src/Routes/';
import GlobalStyle from './GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from './Hooks/useUser/useUser';
import { CookiesProvider } from 'react-cookie';

function App() {
    const queryClient = new QueryClient();

    return (
        <CookiesProvider>
            <UserProvider>
                <QueryClientProvider client={queryClient}>
                    <GlobalStyle />
                    <Routes />
                </QueryClientProvider>
            </UserProvider>
        </CookiesProvider>
    );
}

export default App;
