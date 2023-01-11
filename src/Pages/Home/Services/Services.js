import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const serviceData=[
        {
            id:1,
            name:'Fluoride Treatment',
            description:'Its our Fluoride Treatment.We provide better treatment for this.',
            img:fluoride
        },
        {
            id:1,
            name:'Cavity Filling',
            description:'Its our Cavity Treatment.We provide better treatment for this.',
            img:cavity
        },
        {
            id:1,
            name:'Teeth Whitening',
            description:'Its our Whitening Treatment.We provide better treatment for this.',
            img:whitening
        },
    ]
    return (
        <div className='mt-5'>
            <div  className='text-center'>
                <h3 className='text-2xl'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    serviceData.map(service=><Service
                    key={service.id}
                    service={service}
                    
                    ></Service>)

                }

            </div>
            
        </div>
    );
};

export default Services;