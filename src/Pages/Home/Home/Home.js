import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import DentalCare from '../DentalCare/DentalCare';
import MakeAppointment from '../MakeAppointmnent/MakeAppointment';
import Reviews from '../Reviews/Reviews';



const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Reviews></Reviews>
            
        </div>
    );
};

export default Home;