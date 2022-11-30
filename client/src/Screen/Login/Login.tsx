import { Button } from '../../Components/UI/Button';
import { Input, Label } from '../../Components/UI/Form';
import { H2 } from '../../Components/UI/Typography';
import { FIELD_NAMES } from './constant';
import { LoginBox, LoginBoxInfo, LoginForm } from './Login.style';
import { useLogin } from './useLogin';

export const Login = () => {
    const { loginData, inputHandler, handleKeyPress, loginHandler } = useLogin();
    return (
        <LoginBox>
            <LoginForm>
                <div>
                    <Label htmlFor={FIELD_NAMES.username}>*Username:</Label>
                    <Input
                        type="text"
                        id={FIELD_NAMES.username}
                        name={FIELD_NAMES.username}
                        value={loginData.username}
                        onChange={inputHandler}
                        onKeyDown={handleKeyPress}
                    />
                </div>
                <div>
                    <Label htmlFor={FIELD_NAMES.password}>*Password:</Label>
                    <Input
                        type={FIELD_NAMES.password}
                        id={FIELD_NAMES.password}
                        name={FIELD_NAMES.password}
                        value={loginData.password}
                        onChange={inputHandler}
                        onKeyDown={handleKeyPress}
                    />
                </div>
                <Button onClick={() => loginHandler()} marginTop>
                    Login
                </Button>
            </LoginForm>
            <LoginBoxInfo>
                <H2>Welcome!</H2>
                <p>* Required fields</p>
            </LoginBoxInfo>
        </LoginBox>
    );
};
