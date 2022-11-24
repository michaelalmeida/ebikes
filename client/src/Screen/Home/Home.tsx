import { useBikes } from '../../Hooks/useBikes/useBikes';
import { Map } from '../Map';

export const Home = () => {
    const { bikes } = useBikes();

    return <Map bikes={bikes} />;
};
