import styled from 'styled-components';

export const MapWrapper = styled.div`
    position: relative;
    overflow: hidden;
    height: calc(100vh - 80px);
    width: 100%;

    .leaflet-container {
        background: #222222;
        height: 100vh;
    }
`;
