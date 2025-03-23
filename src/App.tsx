import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './reduxManager/store';
import UserList from './components/UserList';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import UserDetails from './pages/UserDetails';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/add-user" element={<AddUser />} />
                    <Route path="/edit-user/:id" element={<EditUser />} />
                    <Route path="/users/:id" element={<UserDetails />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;