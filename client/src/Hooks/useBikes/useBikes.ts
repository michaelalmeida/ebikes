import { useQuery, useMutation } from '@tanstack/react-query';
import { getBikes, rentBike, returnBike } from '../../api/service';
import { RentBike, ReturnBike } from '../../Models/bike.model';
import { IBikes } from '../../Models/bikes.model';
import { toast } from 'react-toastify';
import { useUser } from '../useUser/useUser';
import { BikeContext } from '../useBike/useBike';
import { useContext } from 'react';

export const useBikes = () => {
    const { setUser, user } = useUser();
    const { addBike, clearBikeContext } = useContext(BikeContext);

    const {
        isLoading: fetchBikesIsLoading,
        data: bikes,
        isError: fetchBikesIsError,
        refetch: refetchBikes,
    } = useQuery<IBikes[], Error>(['bikes'], getBikes, {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
        retry: 10,
    });

    const {
        mutate: fetchRentBike,
        isLoading: fetchRentBikeIsLoading,
        isError: fetchRentBikeIsError,
        isSuccess: fetchRentBikeIsSuccess,
    } = useMutation(
        ['rentBike'],
        ({ username, userId, bikeId }: RentBike) => rentBike({ username, userId, bikeId }),
        {
            onSuccess: (newBike: IBikes) => {
                toast.success('You rented the bike!', {
                    position: toast.POSITION.TOP_CENTER,
                });

                setUser({ ...user, renting: true });
                addBike(newBike);
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
        ({ userId, bikeId }: ReturnBike) => returnBike({ userId, bikeId }),
        {
            onSuccess: () => {
                toast.success('You returned the bike!', {
                    position: toast.POSITION.TOP_CENTER,
                });

                setUser({ ...user, renting: false });
                clearBikeContext();
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
