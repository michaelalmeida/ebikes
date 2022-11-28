import { useBikes } from '../../Hooks/useBikes/useBikes';
import { Map } from '../Map';

export const Home = () => {
    const { bikes, fetchBikesIsError } = useBikes();

    if (fetchBikesIsError) {
        return <p>There is no bike available, I'll try to load again in few seconds</p>;
    }

    return <Map bikes={bikes} />;
};
