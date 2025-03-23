import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, AppDispatch } from '../reduxManager/store';
import { fetchUsers } from '../reduxManager/userSlice';

const UserDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch: AppDispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.user.find(user => user.id === Number(id)));

    useEffect(() => {
        if (!user) {
            dispatch(fetchUsers());
        }
    }, [dispatch, user]);

    if (!user) {
        return <p>User not found</p>;
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.address.street}, {user.address.city}</p>
        </div>
    );
};

export default UserDetails;