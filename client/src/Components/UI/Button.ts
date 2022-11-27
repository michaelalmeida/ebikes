import styled from 'styled-components';
import { MAIN_COLOR, WHITE } from '../../Constants/colors';

export const Button = styled.button`
    color: ${WHITE};
    border: 0;
    background: ${MAIN_COLOR};
    padding: 5px 20px;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
    transition: 1s;
    border-radius: 5px;

    &:hover {
        color: ${WHITE};
        background: ${MAIN_COLOR};
    }

    @media screen and (max-width: 800px) {
        padding: 10px;
    }
`;
