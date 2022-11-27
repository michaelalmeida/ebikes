import React, { useState } from 'react';
import { Button } from '../../Components/UI/Button';
import { useUserLogin } from '../../Hooks/useUserLogin/useUserLogin';
import { LoginBox, LoginBoxInfo, LoginForm } from './Login.style';

export const Login = () => {
    const { fetchUser } = useUserLogin();

    const FIELD_NAMES = {
        username: 'username',
        password: 'password',
    };

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const loginHandler = () => {
        if (Object.values(loginData).includes('')) {
            return;
        }

        fetchUser(loginData);
    };

    return (
        <LoginBox>
            <LoginForm>
                <div>
                    <label htmlFor={FIELD_NAMES.username}>Username:</label>
                    <input
                        type="text"
                        id={FIELD_NAMES.username}
                        name={FIELD_NAMES.username}
                        value={loginData.username}
                        onChange={inputHandler}
                    />
                </div>
                <div>
                    <label htmlFor={FIELD_NAMES.password}>Password:</label>
                    <input
                        type={FIELD_NAMES.password}
                        id={FIELD_NAMES.password}
                        name={FIELD_NAMES.password}
                        value={loginData.password}
                        onChange={inputHandler}
                    />
                </div>
                <Button onClick={() => loginHandler()}>Login</Button>
            </LoginForm>
            <LoginBoxInfo>TEste</LoginBoxInfo>
        </LoginBox>
    );
};
