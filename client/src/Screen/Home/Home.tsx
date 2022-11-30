import { useEffect } from 'react';
import { BikeProvider } from '../../Hooks/useBike';
import { useBikes } from '../../Hooks/useBikes/useBikes';
import { useUser } from '../../Hooks/useUser/useUser';
import { Map } from '../Map';

export const Home = () => {
    const { bikes, fetchBikesIsError } = useBikes();

    const { fetchUserData, userBasicInfo } = useUser();

    useEffect(() => {
        console.log('userBasicInfo', userBasicInfo);
        if (userBasicInfo.id) {
            fetchUserData(userBasicInfo.id);
        }
    }, []);

    if (fetchBikesIsError) {
        return <p>There is no bike available, I'll try to load again in few seconds</p>;
    }

    return (
        <BikeProvider>
            <Map bikes={bikes} />
        </BikeProvider>
    );
};
