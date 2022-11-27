import { Link } from 'react-router-dom';

import { Container } from '../UI/Container';
import { H2 } from '../UI/Typography';
import { HeaderWrapper, Menu } from './Header.style';
import { Button } from '../UI/Button';
import { ROUTES } from '../../Constants/routes';
import userCookie from '../../Helpers/userCookie';
import { useUserLogin } from '../../Hooks/useUserLogin/useUserLogin';

export const Header = () => {
    const { logoutUser } = useUserLogin();

    return (
        <HeaderWrapper>
            <Container>
                <Link to={ROUTES.HOME}>
                    <H2>eBike</H2>
                </Link>
                <Menu>
                    {userCookie.userName ? (
                        <span>
                            Welcome {userCookie.userName},{' '}
                            <Button onClick={() => logoutUser()}>Logout</Button>
                        </span>
                    ) : (
                        <Link to={ROUTES.LOGIN}>
                            <Button>Login</Button>
                        </Link>
                    )}
                </Menu>
            </Container>
        </HeaderWrapper>
    );
};
