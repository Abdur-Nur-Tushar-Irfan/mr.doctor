import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/dashboard/users')
            .then(res => res.json())
    })

    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successFull.')
                    refetch()
                }
            })

    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs border-none bg-gradient-to-r from-cyan-500 to-blue-500'>Make Admin</button>}</td>
                                <td><button className='btn btn-xs border-none bg-gradient-to-r from-green-400 to-red-500 hover:from-pink-500 hover:to-yellow-500'>Delete</button></td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default AllUsers;