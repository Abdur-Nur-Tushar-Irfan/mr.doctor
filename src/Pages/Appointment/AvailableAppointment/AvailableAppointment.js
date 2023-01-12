import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptions from '../AppointmentOptions/AppointmentOptions';

const AvailableAppointment = ({selectedDate}) => {
    const [availableAppointments,setAvailableAppoints]=useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setAvailableAppoints(data))
    },[])
    return (
        <div className='mt-16'>
            <p className='text-center font-bold text-accent'>Available Appointment on {format(selectedDate, 'PP')} </p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    availableAppointments.map(availableAppointment=><AppointmentOptions
                      key={availableAppointment.id}
                      availableAppointment={availableAppointment}
                    >
                    </AppointmentOptions>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;