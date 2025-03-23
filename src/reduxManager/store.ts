// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './userSlice';

// const store = configureStore({
//   reducer: {
//     users: userReducer,
//   },
// });

// export default store;




import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;