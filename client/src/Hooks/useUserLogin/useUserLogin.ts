import { useContext, useEffect } from 'react';
import { IUser, UserLogin } from '../../Models/user.model';
import { useMutation } from '@tanstack/react-query';
import { postLogout, postLogin } from '../../api/service';
import { UserContext } from '../useUser/useUser';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../Constants/routes';
import userCookie from '../../Helpers/userCookie';

export const useUserLogin = () => {
    const { user, addUser, clearUserContext } = useContext(UserContext);
    const navigate = useNavigate();

    const {
        mutate: fetchUser,
        isLoading: fetchUserIsLoading,
        data: userData,
        isError: fetchUserIsError,
        isSuccess: fetchUserIsSuccess,
    } = useMutation(
        ['login'],
        async ({ username, password }: UserLogin) => await postLogin({ username, password })
    );

    const { mutate: logoutUser, isSuccess: logoutUserIsSuccess } = useMutation(
        ['logout'],
        postLogout
    );

    const saveUserInfo = (user: IUser) => {
        addUser(user);

        userCookie.name = user.name;
        userCookie.userId = user._id;
        userCookie.userName = user.username;
        userCookie.userLanguage = user.language;
    };

    useEffect(() => {
        if (!user.username && fetchUserIsSuccess) {
            saveUserInfo(userData);
            navigate(ROUTES.HOME);
        }
    }, [user.username, fetchUserIsSuccess]);

    useEffect(() => {
        if (logoutUserIsSuccess) {
            userCookie.cleanCookies();
            clearUserContext();
        }
    }, [logoutUserIsSuccess]);

    return { fetchUser, fetchUserIsLoading, fetchUserIsError, logoutUser };
};
