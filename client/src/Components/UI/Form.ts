import styled from 'styled-components';
import { MAIN_COLOR, WHITE } from '../../Constants/colors';
import { FULL } from '../../Constants/sizes';

export const Label = styled.label`
    padding: 10px 0;
    display: block;
`;

export const Input = styled.input`
    width: ${FULL};
    border: 0;
    background: ${WHITE};
    padding: 10px;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
    transition: 1s;
    border-radius: 5px;
    border: 2px solid ${MAIN_COLOR};
    box-sizing: border-box;
`;
