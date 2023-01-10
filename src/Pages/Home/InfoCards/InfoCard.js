import React from 'react';

const InfoCard = ({ card }) => {
    const { name, Description, icon, bgClass } = card
    return (
        <div>
            <div className={`card card-side bg-base-100 shadow-xl ${bgClass} text-white p-4`}>
                <figure><img src={icon} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{Description}.</p>
                   
                </div>
            </div>

        </div>
    );
};

export default InfoCard;