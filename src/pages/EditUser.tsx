import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import UserForm from '../components/UserForm';
import { fetchUsers, editUser } from '../reduxManager/userSlice';
import { RootState } from '../types';

const EditUser: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.users.find(user => user.id === Number(id)));

    useEffect(() => {
        if (!user) {
            dispatch(fetchUsers());
        }
    }, [dispatch, user]);

    const handleEditUser = (updatedUser: any) => {
        dispatch(editUser(updatedUser));
        navigate('/users');
    };

    return (
        <div>
            {user ? (
                <UserForm initialData={user} onSubmit={handleEditUser} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default EditUser;