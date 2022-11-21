import axios from 'axios';
import { IBikes } from '../Models/bikes.model';

interface IGetBikes {
    data: IBikes[];
}

export const getBikes = (): Promise<IGetBikes> =>
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/bikes`).then((res) => res.data);
