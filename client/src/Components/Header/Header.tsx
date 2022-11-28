import { Link } from 'react-router-dom';

import { Container } from '../UI/Container';
import { H2 } from '../UI/Typography';
import { HeaderWrapper, Menu } from './Header.style';
import { Button } from '../UI/Button';
import { ROUTES } from '../../Constants/routes';
import { useUserLogin } from '../../Hooks/useUserLogin/useUserLogin';
import { useUser } from '../../Hooks/useUser/useUser';

export const Header = () => {
    const { logoutUser } = useUserLogin();
    const { userBasicInfo } = useUser();

    return (
        <HeaderWrapper>
            <Container>
                <Link to={ROUTES.HOME}>
                    <H2>eBike</H2>
                </Link>
                <Menu>
                    {userBasicInfo.username ? (
                        <span>
                            Welcome {userBasicInfo.username},{' '}
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
