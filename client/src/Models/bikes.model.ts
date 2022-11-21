export interface IBikes {
    id: string;
    name: string;
    location: {
        latitude: string;
        longitude: string;
    };
    rented: boolean;
    description: {
        year: number;
        color: string;
    };
}
