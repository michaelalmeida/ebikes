import axios from 'axios';
import { IBikes } from '../Models/bikes.model';

export const getBikes = (): Promise<IBikes[]> =>
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/bikes`).then((res) => res.data);
