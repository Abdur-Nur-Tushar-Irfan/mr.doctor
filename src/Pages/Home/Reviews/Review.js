import React from 'react';

const Review = ({ reviewData }) => {
    const { name, description, img } = reviewData
    return (
        <div className="card bg-base-100 shadow-xl mt-6">
            <div className="card-body">
                <p>{description}</p>
                <div className='flex items-center mt-3'>
                   
                    <div className="avatar mr-4">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div className=''>
                        <h3>{name}</h3> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;