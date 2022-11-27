import { IBikes } from '../../Models/bikes.model';
import { Button } from '../UI/Button';
import { BikeWrapper } from './Bike.style';

export const Bike = ({ bike }: { bike: IBikes }) => (
    <BikeWrapper>
        <h2>{bike.name}</h2>
        <Button>Rent</Button>
    </BikeWrapper>
);
