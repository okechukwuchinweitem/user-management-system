# User Management System

## Overview

This **User Management System** is a React-based application that allows admins to fetch, view, add, edit, and delete user data. The application utilizes **Redux Toolkit** for global state management and React Router for navigation. The user data is initially fetched from an external API (`https://jsonplaceholder.typicode.com/users`) and subsequently managed locally in Redux with session storage for persistence.

## Features

- Fetch and display users from an API (only once per session).
- Store user data in Redux Toolkit and persist in session storage.
- View user details.
- Add new users with dynamically generated IDs.
- Edit existing users.
- Delete users.
- Navigation using React Router.
- Handles API errors gracefully.

## Tech Stack

- **React**: Frontend UI library
- **Redux Toolkit**: State management
- **React Hook Form & Zod**: Form handling & validation
- **Tailwind**: Ui design
- **React Router**: Client-side routing
- **TypeScript**: Type safety

## Installation & Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Okpara202/user-management-system.git
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
4. **Open in Browser:**
   The application will be available at `http://localhost:5173/`

## Implementation Details

### 1. Redux Store Setup

Inside the **reduxManager** folder, there are two main files: **store.ts** and **userSlice.ts**.

- **store.ts**: Configures the Redux store and integrates the `userSlice`.
- **userSlice.ts**:
  - **Session Storage Persistence**: Users are loaded from session storage to prevent unnecessary API requests.
  - **Initial State**: Holds a list of users, a loading state, and an error state.
  - **Async Thunks**:
    - `fetchUsers` - Fetches user data from the API on initial load and stores it in session storage.
  - **Actions**:
    - `addUser` - Adds a new user with a dynamically generated ID and updates session storage.
    - `editUser` - Updates user details in Redux and session storage.
    - `deleteUser` - Removes a user from Redux and session storage.
  - **Error Handling**:
    - If `fetchUsers` fails, an error state is set and displayed in the UI.

### 2. Displaying Users

- **user.tsx**:

  - Fetches and displays users in a table.
  - Uses `useEffect` to dispatch `fetchUsers()` on mount.
  - Checks session storage before making API calls.
  - Displays a loading state while fetching.
  - Clicking on a user shows detailed info.

- **UserCard.tsx**:
  - Displays user details, including name, email, and address.
  - Allows you edit or delete the user.

### 3. CRUD Functionality

- **editUser.tsx and addUser.tsx**:

  - Used for adding and editing users.
  - Prefilled data when editing.
  - Uses React Hook Form and Zod for validation.

- **Add Button**:

  - Adds/creates a new user

- **Edit Button**:

  - Prefills the form with user data for editing.

- **Delete Button**:
  - Removes the user from Redux and updates session storage.

### 4. Navigation & Routing

Routes:

- `/` → List of users (Landing page).
- `/users/:id` → User details page.
- `/add-user` → Add user form.
- `/edit-user/:id` → Edit user form.

## How It Works

1. **Users are fetched from the API on the first visit** and stored in both Redux and session storage.
2. **Subsequent interactions (add, edit, delete) update the Redux state and session storage**.
3. **The app does not re-fetch users from the API unless the session is cleared**.
4. **Error handling ensures a smooth user experience in case of API failures**.
5. **React Router manages navigation between pages**.

## Future Improvements

- Integrate a backend for persistent user management.
- Add authentication and authorization.

## License

This project is licensed under the MIT License.







<!-- User Management System

Build a User Management System in React that fetches user data from an API, stores it in Redux Toolkit, and allows users to view, add, update, and delete users.

Requirements: 

1. Implementing Redux for Global State Management:

Create a Redux store (store.ts).

Create a userSlice.ts inside store/:

Initial state: Store a list of users.
Async thunks to fetch, add, update, and delete users.
Reducers for handling state updates.
Fetch the initial data from "https://jsonplaceholder.typicode.com/users"


2. Displaying Users

UserList.tsx: Fetch users using useEffect and dispatch(fetchUsers()).
UserCard.tsx: Display user details (name, email, address).
Show a loading state while fetching.

3. Implementing Add, Edit, and Delete Functionality

UserForm.tsx: Form to add/edit user.
Edit Button: Prefill form with user data.
Delete Button: Remove user from Redux state

4. Navigation & Routing

/users → Show list of users.
/users/:id → Show user details.
/add-user → Form to add a new user.
/edit-user/:id → Form to edit a user.

Note: The provided API link should only be used to fetch the initial data. The add, update, and delete features should be managed locally within Redux Toolkit, so there is no need for POST, PUT or DELETE requests to the provided API. -->