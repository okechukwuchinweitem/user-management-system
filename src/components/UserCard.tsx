import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../reduxManager/userSlice';
import { User } from '../types';

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
  };

  return (
    <div className="border p-4 rounded shadow-md">
      <h3 className="text-lg font-semibold">{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Address: {user.address.street}, {user.address.city}</p>
      <div className="mt-4">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2" 
          onClick={() => onEdit(user)}
        >
          Edit
        </button>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded" 
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;