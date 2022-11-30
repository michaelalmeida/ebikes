import { useCallback, useContext, useEffect } from 'react';
import { UserLogin } from '../../Models/user.model';
import { useMutation } from '@tanstack/react-query';
import { userLogout, userLogin } from '../../api/service';
import { UserContext } from '../useUser/useUser';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../Constants/routes';
import userCookie from '../../Helpers/userCookie';
import { toast } from 'react-toastify';

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
        async ({ username, password }: UserLogin) => await userLogin({ username, password }),
        {
            onError: () =>
                toast.error('Wrong username or password', {
                    position: toast.POSITION.TOP_CENTER,
                }),
        }
    );

    const { mutate: logoutUser } = useMutation(['logout'], userLogout, {
        onSuccess: () => {
            userCookie.cleanCookies();
            clearUserContext();
        },
    });

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

    return { fetchUser, fetchUserIsLoading, fetchUserIsError, logoutUser };
};
