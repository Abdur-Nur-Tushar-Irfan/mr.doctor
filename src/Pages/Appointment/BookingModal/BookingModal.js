import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate,setTreatment }) => {
    const { name, slots } = treatment
    const date = format(selectedDate, 'PP')
    const handleBooking=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const slot=form.slot.value;
        const phone=form.phone.value;
        
        const booking={
            date,
            name,
            email,
            slot,
            phone
        }
        setTreatment(null)
        console.log(booking)
    }

    return (
        <div>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 mt-10 gap-3'>
                        <input type="text" disabled value={date} className="input input-bordered" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots?.map(slot=><option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered" />
                        <input name='phone' type="phone" placeholder="Your Phone" className="input input-bordered" />
                        <input type='submit' value='Submit' className="border-none btn bg-gradient-to-r from-cyan-500 to-blue-500" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookingModal;