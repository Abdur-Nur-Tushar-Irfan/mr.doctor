import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext)

    const { data: boookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: () => fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())

    })
    return (
        <div>
            <h3 className='mx-5 text-xl font-bold'>My Appointment</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            boookings.map((booking,i) => <tr>
                                <th>{i+1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                            </tr>)

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;