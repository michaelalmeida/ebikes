import { createContext, useState, useContext } from 'react';
import { IUser } from '../../Models/user.model';
import userCookie from '../../Helpers/userCookie';
import { useMutation } from '@tanstack/react-query';
import { getUser } from '../../api/service';

export type UserContextState = {
    user: IUser;
    setUser: (user: IUser) => void;
    clearUserContext: () => void;
};

export const initialUserValues = {
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
    setUser: () => {},
    clearUserContext: () => {},
};

export const UserContext = createContext<UserContextState>(contextDefaultValues);

export const UserProvider = ({ children }: { children: JSX.Element }) => {
    const [userInfo, setUserInfo] = useState<IUser>(contextDefaultValues.user);

    const setUser = (newUser: IUser) => setUserInfo(newUser);

    const clearUserContext = () => setUserInfo(initialUserValues);

    return (
        <UserContext.Provider
            value={{
                setUser,
                user: userInfo,
                clearUserContext,
            }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const { user, setUser } = useContext(UserContext);

    const userBasicInfo = {
        username: userCookie.userName,
        name: userCookie.name,
        id: userCookie.userId,
        language: userCookie.userLanguage,
    };

    const { mutate: fetchUserData } = useMutation((userId: string) => getUser(userId), {
        onSuccess: (data) => {
            setUser(data);
        },
    });

    return {
        user,
        setUser,
        userBasicInfo,
        fetchUserData,
    };
};
