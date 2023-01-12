import PrimaryButton from "../../../PrimaryButton/PrimaryButton";



const AppointmentOptions = ({ availableAppointment }) => {
    const { name, slots } = availableAppointment

    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl text-center">{name}</h2>
                <p className="text-center">{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p className="text-center">{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <PrimaryButton>Book Now</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;