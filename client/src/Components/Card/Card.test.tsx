import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('Card', () => {
    const queryClient = new QueryClient();

    test('User should be able to the content of the Card', () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Card>
                    <p>Text for test</p>
                </Card>
            </QueryClientProvider>
        );

        const cardContent = screen.getByText(/text for test/i);
        expect(cardContent).toBeInTheDocument();
    });
});
