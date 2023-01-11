import React from 'react';
import doctors from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-20'
        style={{
            background:`url(${appointment})`
        }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctors} alt='' className="lg:w-1/2 rounded-lg shadow-2xl -mt-32" />
                    <div>
                        <p className='text-accent'>Appointment</p>
                        <h1 className="text-3xl font-bold text-white">Make an Appointment today</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;