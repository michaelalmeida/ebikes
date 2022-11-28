import { useQuery, useMutation } from '@tanstack/react-query';
import { getBikes, rentBike } from '../../api/service';
import { RentBike } from '../../Models/bike.model';
import { IBikes } from '../../Models/bikes.model';
import { toast } from 'react-toastify';

export const useBikes = () => {
    const {
        isLoading: fetchBikesIsLoading,
        data: bikes,
        isError: fetchBikesIsError,
    } = useQuery<IBikes[], Error>(['bikes'], getBikes, {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    });

    const {
        mutate: fetchRentBike,
        isLoading: fetchRentBikeIsLoading,
        isError: fetchRentBikeIsError,
        isSuccess: fetchRentBikeIsSuccess,
    } = useMutation(
        ['rentBike'],
        async ({ username, userId, bikeId }: RentBike) =>
            await rentBike({ username, userId, bikeId }),
        {
            onSuccess: () =>
                toast.success('You rented the bike!', {
                    position: toast.POSITION.TOP_CENTER,
                }),
            onError: () =>
                toast.error('Error when trying to rent!', {
                    position: toast.POSITION.TOP_CENTER,
                }),
        }
    );

    return {
        bikes,
        fetchBikesIsLoading,
        fetchBikesIsError,
        fetchRentBike,
        fetchRentBikeIsLoading,
        fetchRentBikeIsError,
        fetchRentBikeIsSuccess,
    };
};
