import { useQuery, useMutation } from '@tanstack/react-query';
import { getBikes, rentBike, returnBike } from '../../api/service';
import { RentBike, ReturnBike } from '../../Models/bike.model';
import { IBikes } from '../../Models/bikes.model';
import { toast } from 'react-toastify';

export const useBikes = () => {
    const {
        isLoading: fetchBikesIsLoading,
        data: bikes,
        isError: fetchBikesIsError,
        refetch: refetchBikes,
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
            onSuccess: () => {
                toast.success('You rented the bike!', {
                    position: toast.POSITION.TOP_CENTER,
                });

                refetchBikes();
            },
            onError: () =>
                toast.error('Error when trying to rent!', {
                    position: toast.POSITION.TOP_CENTER,
                }),
        }
    );

    const { mutate: fetchReturnBike } = useMutation(
        ['returnBike'],
        async ({ userId, bikeId }: ReturnBike) => await returnBike({ userId, bikeId }),
        {
            onSuccess: () => {
                toast.success('You returned the bike!', {
                    position: toast.POSITION.TOP_CENTER,
                });

                refetchBikes();
            },
            onError: () =>
                toast.error('Error when trying to return!', {
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
        fetchReturnBike,
        refetchBikes,
    };
};
