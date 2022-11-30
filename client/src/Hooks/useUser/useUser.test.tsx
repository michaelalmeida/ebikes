import { initialUserValues, useUser } from './useUser';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react';

describe('useUser', () => {
    const queryClient = new QueryClient();

    test('Should render the correct initial state', () => {
        const { result } = renderHook(() => useUser(), {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        });

        expect(result.current.user).toStrictEqual(initialUserValues);
        expect(result.current.userBasicInfo).toStrictEqual({
            id: undefined,
            language: undefined,
            name: undefined,
            username: undefined,
        });
    });
});
