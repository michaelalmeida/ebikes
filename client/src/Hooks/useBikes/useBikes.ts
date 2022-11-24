import { useQuery } from '@tanstack/react-query';
import { getBikes } from '../../api/service';
import { IBikes } from '../../Models/bikes.model';

export const useBikes = () => {
    const { isLoading, data, isError } = useQuery<IBikes[], Error>(['bikes'], getBikes);

    return {
        bikes: data,
        isLoading,
        isError,
    };
};
