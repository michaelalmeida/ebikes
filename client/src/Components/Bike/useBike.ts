import { useUser } from '../../Hooks/useUser/useUser';
import { toast } from 'react-toastify';
import { useBikes } from '../../Hooks/useBikes/useBikes';

export const useBike = () => {
    const { userBasicInfo } = useUser();
    const { fetchRentBike, fetchBikesIsError } = useBikes();

    const rentBikeHandler = (bikeId: string) => {
        if (!userBasicInfo.username) {
            toast.error('You need to be logged to rent a bike !', {
                position: toast.POSITION.TOP_CENTER,
            });

            return;
        }

        fetchRentBike({ bikeId, username: userBasicInfo.username, userId: userBasicInfo.id });
    };

    return {
        rentBikeHandler,
    };
};
