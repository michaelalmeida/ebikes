import { useUser } from '../useUser/useUser';
import { toast } from 'react-toastify';
import { useBikes } from '../useBikes/useBikes';
import { IBikes } from '../../Models/bikes.model';
import { createContext, useContext, useState } from 'react';

export type BikeContextState = {
    bike: IBikes;
    addBike: (bike: IBikes) => void;
    clearBikeContext: () => void;
};

const initialBikeValues = {
    _id: '',
    name: '',
    location: {
        latitude: 0,
        longitude: 0,
    },
    rented: false,
    description: {
        year: 2022,
        color: '',
    },
    rentedBy: '',
};

const contextDefaultValues: BikeContextState = {
    bike: initialBikeValues,
    addBike: () => {},
    clearBikeContext: () => {},
};

export const BikeContext = createContext<BikeContextState>(contextDefaultValues);

export const BikeProvider = ({ children }: { children: JSX.Element }) => {
    const [bike, setBike] = useState<IBikes>(contextDefaultValues.bike);

    const addBike = (newBike: IBikes) => setBike(newBike);

    const clearBikeContext = () => setBike(initialBikeValues);

    return (
        <BikeContext.Provider
            value={{
                addBike,
                bike,
                clearBikeContext,
            }}>
            {children}
        </BikeContext.Provider>
    );
};

export const useBike = () => {
    const { userBasicInfo } = useUser();
    const { fetchRentBike, fetchReturnBike } = useBikes();
    const { bike, clearBikeContext } = useContext(BikeContext);

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
        bike,
        rentBikeHandler,
        clearBikeContext,
    };
};
