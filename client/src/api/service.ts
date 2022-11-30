import axios from 'axios';
import { RentBike, ReturnBike } from '../Models/bike.model';
import { IBikes } from '../Models/bikes.model';
import { IUser, UserLogin } from '../Models/user.model';

export const getBikes = (): Promise<IBikes[]> =>
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/bikes`).then((res) => res.data);

export const userLogin = ({ password, username }: UserLogin): Promise<IUser> =>
    axios
        .post(`${process.env.REACT_APP_API_BASE_URL}/login`, {
            password,
            username,
        })
        .then((res) => res.data);

export const userLogout = (): Promise<[]> =>
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/logout`).then((res) => res.data);

export const rentBike = ({ bikeId, userId, username }: RentBike) =>
    axios.patch(`${process.env.REACT_APP_API_BASE_URL}/bike/rent`, {
        bikeId,
        userId,
        username,
    });

export const returnBike = ({ bikeId, userId }: ReturnBike) =>
    axios.patch(`${process.env.REACT_APP_API_BASE_URL}/bike/return`, {
        bikeId,
        userId,
    });
