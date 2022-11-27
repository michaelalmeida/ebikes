import { createContext, useState, useContext } from 'react';
import { IUser } from '../../Models/user.model';

export type UserContextState = {
    user: IUser;
    addUser: (user: IUser) => void;
    clearUserContext: () => void;
};

const initialUserValues = {
    _id: '',
    name: '',
    username: '',
    language: '',
    country: '',
    city: '',
    email: '',
    rental: 0,
    renting: false,
    date: new Date(),
};

const contextDefaultValues: UserContextState = {
    user: initialUserValues,
    addUser: () => {},
    clearUserContext: () => {},
};

export const UserContext = createContext<UserContextState>(contextDefaultValues);

export const UserProvider = ({ children }: { children: JSX.Element }) => {
    const [userInfo, setUserInfo] = useState<IUser>(contextDefaultValues.user);

    const addUser = (newUser: IUser) => setUserInfo(newUser);

    const clearUserContext = () => setUserInfo(initialUserValues);

    return (
        <UserContext.Provider
            value={{
                addUser,
                user: userInfo,
                clearUserContext,
            }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const { user, addUser } = useContext(UserContext);

    return {
        user,
        addUser,
    };
};
