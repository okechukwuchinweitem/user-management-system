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
    user: User[];
    loading: boolean;
    error: string | null;
}

export const api: string = "https://jsonplaceholder.typicode.com/users";