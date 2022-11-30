import { IBikes } from '../../Models/bikes.model';
import { Button } from '../UI/Button';
import { RightContainer } from '../UI/Container';
import { H2, H4 } from '../UI/Typography';
import { BikeWrapper } from './Bike.style';
import { useBike } from './useBike';

export const Bike = ({ bike }: { bike: IBikes }) => {
    const { rentBikeHandler } = useBike();

    return (
        <BikeWrapper>
            <H2>{bike.name}</H2>
            {bike.rented ? (
                <H4>This Bicycle is already rented</H4>
            ) : (
                <div>
                    <H4>This bike is for rent</H4>
                    <ol>
                        <li>Click on "Rent Bicycle"</li>
                        <li>Bicycle lock will unlock automatically</li>
                        <li>Adjust saddle height</li>
                    </ol>
                </div>
            )}
            <RightContainer>
                <Button
                    variant="big"
                    onClick={() => rentBikeHandler(bike._id, bike.rented, bike.rentedBy)}
                    marginTop>
                    {bike.rented ? 'Return Bicycle' : ' Rent Bicycle'}
                </Button>
            </RightContainer>
        </BikeWrapper>
    );
};
