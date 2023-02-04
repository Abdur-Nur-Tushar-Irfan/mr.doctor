import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/dashboard/users')
            .then(res => res.json())
    })
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user,i) => <tr>
                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>Blue</td>
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