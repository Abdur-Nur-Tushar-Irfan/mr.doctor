import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment,refetch }) => {
    const { name:treatmentName, slots } = treatment
    const { user } = useContext(AuthContext)
    const date = format(selectedDate, 'PP')
    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment:treatmentName,
            name,
            email,
            slot,
            phone
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTreatment(null)
                toast.success('bookings confirmed')
                refetch();
            })
    }
    return (
        <div>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 mt-10 gap-3'>
                        <input type="text" disabled value={date} className="input input-bordered" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots?.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input disabled name='name' value={user?.displayName} type="text" placeholder="Your Name" className="input input-bordered" />
                        <input disabled name='email' value={user?.email} type="email" placeholder="Email" className="input input-bordered" />
                        <input name='phone' type="phone" placeholder="Your Phone" className="input input-bordered" />
                        <input type='submit' value='Submit' className="border-none btn bg-gradient-to-r from-cyan-500 to-blue-500" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookingModal;