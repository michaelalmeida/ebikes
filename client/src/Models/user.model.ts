export interface IUser {
    _id: string;
    name: string;
    username: string;
    language: string;
    country: string;
    city: string;
    email: string;
    rental: number;
    renting: boolean;
    date: Date;
}

export interface UserBasicInfo {
    id: string;
    name: string;
    username: string;
    language: string;
}

export interface UserLogin {
    username: string;
    password: string;
}
