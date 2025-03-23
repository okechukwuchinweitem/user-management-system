import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await response.json();
  return data;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = { ...action.payload, id: Date.now() };
      state.users.push(newUser);
      sessionStorage.setItem('users', JSON.stringify(state.users));
    },
    editUser: (state, action) => {
      const { id, updatedUser } = action.payload;
      const index = state.users.findIndex(user => user.id === id);
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...updatedUser };
        sessionStorage.setItem('users', JSON.stringify(state.users));
      }
    },
    deleteUser: (state, action) => {
      const id = action.payload;
      state.users = state.users.filter(user => user.id !== id);
      sessionStorage.setItem('users', JSON.stringify(state.users));
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        sessionStorage.setItem('users', JSON.stringify(action.payload));
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export const { addUser, editUser, deleteUser, setUsers } = userSlice.actions;

export default userSlice.reducer;