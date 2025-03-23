import React from 'react';
import { useForm } from 'react-hook-form';
import { User } from '../types/index'


interface UserFormProps {
    initialData?: User;
    onSubmit: (data: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ initialData, onSubmit }) => {
    const { register, handleSubmit, reset } = useForm<User>({
        defaultValues: initialData,
    });

    React.useEffect(() => {
        reset(initialData);
    }, [initialData, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="user-form">
            <div className="form-group">
                <label>Name</label>
                <input placeholder="Okechukwu Ferdinand" required {...register('name')} />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input placeholder="example@mail.com" required {...register('email')} />
            </div>
            <div className="form-group">
                <label>Street</label>
                <input placeholder="San-Silo" required {...register('address.street')} />
            </div>
            <div className="form-group">
                <label>City</label>
                <input placeholder="Emene" required {...register('address.city')} />
            </div>
            <button type="submit" className="btn-submit">Add User</button>
        </form>
    );
};

export default UserForm;