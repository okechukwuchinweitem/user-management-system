import React from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../reduxManager/userSlice';
import UserForm from '../components/UserForm';
import { useNavigate } from 'react-router-dom';
import { User } from '../types/index'


const AddUser: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddUser = (newUser: User) => {
        dispatch(addUser(newUser));
        navigate('/');
    };

    return (
        <div>
            <h1>Add User</h1>
            <UserForm onSubmit={handleAddUser} />
        </div>
    );
};

export default AddUser;