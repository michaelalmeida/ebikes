import axios from 'axios';
import { IBikes } from '../Models/bikes.model';
import { IUser, UserLogin } from '../Models/user.model';

export const getBikes = (): Promise<IBikes[]> =>
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/bikes`).then((res) => res.data);

export const postLogin = ({ password, username }: UserLogin): Promise<IUser> =>
    axios
        .post(`${process.env.REACT_APP_API_BASE_URL}/login`, {
            password,
            username,
        })
        .then((res) => res.data);

export const postLogout = (): Promise<[]> =>
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/logout`).then((res) => res.data);
