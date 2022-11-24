import { MapWrapper } from './Map.style';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MAP_SCROLL_WHEEL, MAP_ZOOM } from './constant';

export const Map = () => {
    return (
        <MapWrapper>
            <MapContainer
                center={[51.505, -0.09]}
                zoom={MAP_ZOOM}
                scrollWheelZoom={MAP_SCROLL_WHEEL}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </MapWrapper>
    );
};
