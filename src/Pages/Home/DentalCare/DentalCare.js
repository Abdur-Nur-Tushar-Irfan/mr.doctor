import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../PrimaryButton/PrimaryButton';



const DentalCare = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment}  alt='' className=" md:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl font-bold">Exceptional Dental,<br/>Care On Your Team</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>See Details</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;