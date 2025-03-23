import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../reduxManager/store';
import UserCard from '../components/UserCard';

const UserDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const user = useSelector((state: RootState) => state.users.find(user => user.id === parseInt(id!)));

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div>
            <h1>User Details</h1>
            <UserCard user={user} />
        </div>
    );
};

export default UserDetails;