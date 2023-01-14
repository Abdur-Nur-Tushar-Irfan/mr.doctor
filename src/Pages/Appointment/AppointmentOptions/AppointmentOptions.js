const AppointmentOptions = ({ availableAppointment,setTreatment }) => {
    const { name, slots } = availableAppointment
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl text-center">{name}</h2>
                <p className="text-center">{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p className="text-center">{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label onClick={()=>setTreatment(availableAppointment)} htmlFor="Booking-modal" className="border-none btn bg-gradient-to-r from-cyan-500 to-blue-500">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;