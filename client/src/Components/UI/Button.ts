import styled from 'styled-components';
import { MAIN_COLOR, WHITE } from '../../Constants/colors';

interface ButtonProps {
    variant?: 'normal' | 'big';
}

export const Button = styled.button<ButtonProps>`
    color: ${WHITE};
    border: 0;
    background: ${MAIN_COLOR};
    padding: ${(props) => (props.variant === 'big' ? '10px 20px' : '5px 20px')};
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
