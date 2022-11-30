import React from 'react';
import { MapWrapper } from './Map.style';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MAP_SCROLL_WHEEL, MAP_ZOOM } from './constant';
import { IBikes } from '../../Models/bikes.model';
import { Loading } from '../../Components/Loading';
import { Bike } from '../../Components/Bike';
import L from 'leaflet';

import normalPin from '../../assets/Icon/marker-icon-2x.png';
import grayPin from '../../assets/Icon/gray_marker-icon-2x.png';

interface MapProps {
    bikes?: IBikes[];
}

export const Map = ({ bikes }: MapProps) => {
    console.log(' map rendered ');
    return bikes ? (
        <MapWrapper>
            <MapContainer
                center={[50.90895, 6.941593170166016]}
                zoom={MAP_ZOOM}
                scrollWheelZoom={MAP_SCROLL_WHEEL}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {bikes.map((bike) => (
                    <Marker
                        position={[bike.location.latitude, bike.location.longitude]}
                        key={bike._id}
                        icon={L.icon({
                            iconUrl: bike.rented ? grayPin : normalPin,
                            iconSize: [32, 50],
                            iconAnchor: [16, 25],
                            popupAnchor: [0, 0],
                        })}>
                        <Popup>
                            <Bike bike={bike} />
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </MapWrapper>
    ) : (
        <Loading />
    );
};

export default React.memo(Map);
