import styled from 'styled-components';
import { FULL, MAX_WIDTH } from '../../Constants/sizes';

export const Container = styled.div`
    margin: auto;
    display: flex;
    width: ${MAX_WIDTH};
    box-sizing: border-box;
    align-items: center;

    @media (max-width: 1024px) {
        padding: 0 20px;
        width: ${FULL};
    }
`;

export const RightContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;
