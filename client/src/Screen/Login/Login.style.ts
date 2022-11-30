import styled from 'styled-components';
import { MAIN_COLOR, WHITE } from '../../Constants/colors';
import { FULL } from '../../Constants/sizes';

export const LoginBox = styled.div`
    display: flex;
    width: 700px;
    height: 400px;
    background: ${WHITE};
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);

    @media screen and (max-width: 800px) {
        width: ${FULL};
        flex-direction: column;
    }
`;

export const LoginForm = styled.div`
    padding: 30px;
    flex-grow: 1;
`;

export const LoginBoxInfo = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${MAIN_COLOR};
    flex-basis: 200px;
    color: ${WHITE};
`;
