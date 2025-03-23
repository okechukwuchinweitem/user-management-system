import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../reduxManager/userSlice';
import UserCard from './UserCard';

const UserList = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching users: {error}</div>;
    }

    return (
        <div>
            <h1>User List</h1>
            <div className="user-list">
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default UserList;