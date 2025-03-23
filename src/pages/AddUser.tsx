import React from 'react';
import UserForm from '../components/UserForm';
import { useDispatch } from 'react-redux';
import { addUser } from '../reduxManager/userSlice';

const AddUser: React.FC = () => {
    const dispatch = useDispatch();

    const handleAddUser = (userData: any) => {
        dispatch(addUser(userData));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Add New User</h1>
            <UserForm onSubmit={handleAddUser} />
        </div>
    );
};

export default AddUser;