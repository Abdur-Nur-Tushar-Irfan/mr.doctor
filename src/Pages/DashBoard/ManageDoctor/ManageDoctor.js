import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageDoctor = () => {
    const { data = [] } = useQuery({
        queryKey: ['doctors'],
        queryFn: () => fetch('http://localhost:5000/doctors')
            .then(res => res.json())
    })
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Speciality</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(doctor => <tr>
                            <th>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">

                                    <div>
                                        <div className="font-bold">{doctor.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {doctor.email}
                                <br />

                            </td>
                            <td>{doctor.speciality}</td>
                            <th>
                                <button className="btn border-none btn-xs bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Delete</button>
                            </th>
                        </tr>)

                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageDoctor;