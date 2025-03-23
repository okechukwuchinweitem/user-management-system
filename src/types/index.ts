export interface User {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        city: string;
        zipcode: string;
    };
}

export interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
}