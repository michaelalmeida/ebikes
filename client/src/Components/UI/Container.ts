import styled from 'styled-components';
import { FULL, MAX_WIDTH } from '../../Constants/sizes';

export const Container = styled.div`
    margin: auto;
    display: flex;
    width: ${MAX_WIDTH};
    box-sizing: border-box;

    @media (max-width: 1024px) {
        width: ${FULL};
    }
`;
