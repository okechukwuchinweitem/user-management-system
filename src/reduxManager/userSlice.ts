import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, UserState } from '../types/index';
import { api } from '../types/index';

// Load users from session storage
const loadUsersFromSessionStorage = (): User[] => {
    const users = sessionStorage.getItem("users");
    return users ? JSON.parse(users) : [];
};

const initialState: UserState = {
    loading: false,
    user: loadUsersFromSessionStorage(),
    error: null,
};

// Async Action to fetch users from API
export const fetchUsers = createAsyncThunk<User[]>('users/fetchUsers', async () => {
    const res = await axios.get<User[]>(api);
    return res.data;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<Omit<User, "id">>) => {
            const newUser: User = { ...action.payload, id: Date.now() + Math.random() * 1000 };
            state.user.push(newUser);
            sessionStorage.setItem('users', JSON.stringify(state.user));
        },
        editUser: (state, action: PayloadAction<User>) => {
            const index = state.user.findIndex((user) => user.id === action.payload.id);
            if (index !== -1) {
                state.user[index] = { ...action.payload };
                sessionStorage.setItem('users', JSON.stringify(state.user));
            }
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            state.user = state.user.filter((user) => user.id !== action.payload);
            sessionStorage.setItem('users', JSON.stringify(state.user));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.loading = false;
                state.error = null;
                state.user = action.payload;
                sessionStorage.setItem('users', JSON.stringify(state.user));
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch users';
            });
    },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;