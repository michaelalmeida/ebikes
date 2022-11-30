import { render, screen } from '@testing-library/react';
import { Bike } from './Bike';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('Bike', () => {
    const queryClient = new QueryClient();

    const bikeProps = {
        location: {
            latitude: 50.9084605211349,
            longitude: 6.949631930793494,
        },
        _id: '6386642c41f08d6776c7e964',
        name: 'Bike ECO Cologne II',
        rented: false,
        description: {
            year: 2021,
            color: '#EEEEEE',
        },
        rentedBy: '',
    };

    test('User should be able to see bike information', () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Bike bike={bikeProps} />
            </QueryClientProvider>
        );

        const title = screen.getByRole('heading', { name: /bike eco cologne ii/i });
        expect(title).toBeInTheDocument();

        const rentButton = screen.getByRole('button', { name: /rent bicycle/i });
        expect(rentButton).toBeInTheDocument();
    });
});
