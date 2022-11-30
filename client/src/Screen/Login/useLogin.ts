import React, { useState, KeyboardEvent } from 'react';
import { toast } from 'react-toastify';
import { useUserLogin } from '../../Hooks/useUserLogin/useUserLogin';

export const useLogin = () => {
    const { fetchUser } = useUserLogin();

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const loginHandler = () => {
        if (Object.values(loginData).includes('')) {
            toast.error('Fill all the required fields', {
                position: toast.POSITION.TOP_CENTER,
            });
            return;
        }

        fetchUser(loginData);
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            loginHandler();
        }
    };

    return {
        inputHandler,
        loginData,
        loginHandler,
        handleKeyPress,
    };
};
