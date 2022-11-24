export interface IBikes {
    _id: string;
    name: string;
    location: {
        latitude: number;
        longitude: number;
    };
    rented: boolean;
    description: {
        year: number;
        color: string;
    };
}
