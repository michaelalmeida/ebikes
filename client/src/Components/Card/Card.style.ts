import styled from 'styled-components';
import { FULL } from '../../Constants/sizes';

export const CardWrapper = styled.div`
    position: absolute;
    right: 30px;
    bottom: 30px;
    display: flex;
    width: 300px;
    padding: 10px 0;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    background: rgba(255, 255, 255, 0.9);
    flex-direction: column;
    z-index: 99999;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);

    p {
        margin: 0;
    }

    @media screen and (max-width: 1024px) {
        width: ${FULL};
        width: 100%;
        bottom: 0;
        right: 0;
        border-radius: 0;
    }
`;
