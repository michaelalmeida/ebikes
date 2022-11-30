import { useUser } from '../../Hooks/useUser/useUser';
import { toast } from 'react-toastify';
import { useBikes } from '../../Hooks/useBikes/useBikes';

export const useBike = () => {
    const { userBasicInfo } = useUser();
    const { fetchRentBike, fetchReturnBike } = useBikes();

    const rentBikeHandler = (bikeId: string, isRented: boolean, rentedBy: string) => {
        if (!userBasicInfo.username) {
            toast.error('You need to be logged to rent or return a bike', {
                position: toast.POSITION.TOP_CENTER,
            });

            return;
        }

        if (isRented && userBasicInfo.id !== rentedBy) {
            toast.error('You can only return a bike that was rented by you', {
                position: toast.POSITION.TOP_CENTER,
            });

            return;
        }

        if (isRented) {
            fetchReturnBike({ bikeId, userId: userBasicInfo.id });
        } else {
            fetchRentBike({ bikeId, username: userBasicInfo.username, userId: userBasicInfo.id });
        }
    };

    return {
        rentBikeHandler,
    };
};
