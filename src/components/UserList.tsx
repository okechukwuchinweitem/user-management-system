import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from '../reduxManager/userSlice';
import UserCard from './UserCard';
import { RootState, AppDispatch } from '../reduxManager/store';
import { User } from '../types';
import { useNavigate } from 'react-router-dom';

const UserList: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const { user, loading, error } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleAddUser = () => {
        navigate('/add-user');
    };

    const handleEditUser = (id: number) => {
        navigate(`/edit-user/${id}`);
    };

    const handleDeleteUser = (id: number) => {
        dispatch(deleteUser(id));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching users: {error}</div>;
    }

    return (
        <div>
            <h1>User List</h1>
            <button onClick={handleAddUser} className="btn-add">Add User</button>
            <div className="user-list">
                {user.map((user: User) => (
                    <UserCard
                        key={user.id}
                        users={user}
                        onEdit={() => handleEditUser(user.id)}
                        onDelete={() => handleDeleteUser(user.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default UserList;