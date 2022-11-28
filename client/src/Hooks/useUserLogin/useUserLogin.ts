import { useCallback, useContext, useEffect } from 'react';
import { UserLogin } from '../../Models/user.model';
import { useMutation } from '@tanstack/react-query';
import { userLogout, userLogin } from '../../api/service';
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
        async ({ username, password }: UserLogin) => await userLogin({ username, password })
    );

    const { mutate: logoutUser, isSuccess: logoutUserIsSuccess } = useMutation(
        ['logout'],
        userLogout
    );

    const saveUserInfo = useCallback(() => {
        if (userData) {
            addUser(userData);
            userCookie.name = userData.name;
            userCookie.userId = userData._id;
            userCookie.userName = userData.username;
            userCookie.userLanguage = userData.language;
        }
    }, [userData, addUser]);

    useEffect(() => {
        if (!user.username && fetchUserIsSuccess) {
            saveUserInfo();
            navigate(ROUTES.HOME);
        }
    }, [user.username, fetchUserIsSuccess, navigate, saveUserInfo]);

    useEffect(() => {
        if (logoutUserIsSuccess) {
            userCookie.cleanCookies();
            clearUserContext();
        }
    }, [logoutUserIsSuccess, clearUserContext]);

    return { fetchUser, fetchUserIsLoading, fetchUserIsError, logoutUser };
};
