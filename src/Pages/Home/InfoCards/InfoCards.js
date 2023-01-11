import React from 'react';
import icon1 from '../../../assets/icons/clock.svg'
import icon2 from '../../../assets/icons/marker.svg'
import icon3 from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData=[
        {
            id:1,
            name:'Opening Hour',
            Description:'Open 9:00am to 5:00pm everyday',
            icon: icon1,
            bgClass:'bg-primary'

        },
        {
            id:2,
            name:'Our Location',
            Description:'Open 9:00am to 5:00pm everyday',
            icon: icon2,
            bgClass:'bg-accent'

        },
        {
            id:3,
            name:'Contact us',
            Description:'Open 9:00am to 5:00pm everyday',
            icon: icon3,
            bgClass:'bg-primary'

        },
    ]
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                cardData.map(card=><InfoCard
                key={card.id}
                card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;