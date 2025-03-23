import React from 'react';
import { User } from '../types';

interface UserCardProps {
    users: User;
    onEdit: () => void;
    onDelete: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ users, onEdit, onDelete }) => {
    return (
        <div className="user-card">
            <h2>{users.name}</h2>
            <p>{users.email}</p>
            <p>{users.address.street}, {users.address.city}</p>
            <button onClick={onEdit} className="btn-edit">Edit</button>
            <button onClick={onDelete} className="btn-delete">Delete</button>
        </div>
    );
};

export default UserCard;