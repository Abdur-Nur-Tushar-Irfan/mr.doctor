import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const Reviews = () => {
    const reviewsData=[
        {
            _id:1,
            name:'Wilson Henry',
            img:people1,
            description:'Covid-19 was called due to man made called corona virus.It is an infectious diesease which is spread all over the word.'
        },
        {
            _id:2,
            name:'Wilson Henry',
            img:people1,
            description:'Covid-19 was called due to man made called corona virus.It is an infectious diesease which is spread all over the word.'
        },
        {
            _id:3,
            name:'Wilson Henry',
            img:people1,
            description:'Covid-19 was called due to man made called corona virus.It is an infectious diesease which is spread all over the word.'
        },
    ]
    return (
        <div className='mt-10'>
            <div className='flex justify-between'>
                <div>
                    <h5 className='text-accent font-bold'>Testominial</h5>
                    <p className='text-3xl'>What Our Patients Says</p>
                </div>
                <div>
                    <figure><img className='w-20' src={quote} alt='' /></figure>
                </div>

            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviewsData.map(reviewData=><Review
                    key={reviewData._id}
                    reviewData={reviewData}
                    
                    ></Review>)
                }

            </div>

        </div>
    );
};

export default Reviews;