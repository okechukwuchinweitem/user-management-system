import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addUser, editUser } from '../reduxManager/userSlice';
import { User } from '../types';

interface UserFormProps {
  existingUser?: User;
  isEditMode?: boolean;
}

const UserForm: React.FC<UserFormProps> = ({ existingUser, isEditMode }) => {
  const { register, handleSubmit, setValue } = useForm<User>();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isEditMode && existingUser) {
      setValue('name', existingUser.name);
      setValue('email', existingUser.email);
      setValue('address', existingUser.address);
    }
  }, [isEditMode, existingUser, setValue]);

  const onSubmit = (data: User) => {
    if (isEditMode && existingUser) {
      dispatch(editUser({ ...existingUser, ...data }));
    } else {
      dispatch(addUser(data));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="user-form">
      <div>
        <label>Name:</label>
        <input type="text" {...register('name', { required: true })} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" {...register('email', { required: true })} />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" {...register('address', { required: true })} />
      </div>
      <button type="submit">{isEditMode ? 'Update User' : 'Add User'}</button>
    </form>
  );
};

export default UserForm;