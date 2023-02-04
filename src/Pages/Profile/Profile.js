import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext)

    const { data: users = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: () => fetch(`http://localhost:5000/users?email=${user?.email}`)
            .then(res => res.json())
    })
    return (
        <div className=''>
            {
                users?.map(user => <div className="hero" style={{ backgroundImage: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUXDU5-tt0lhqUWw0gHx4MSErjGiN5-8aKahkNnOrXyvpAFoaS1I_o5mlSeCVSS9nH-uM&usqp=CAU` }}>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                       
                        <div className="card flex-shrink-0 w-full max-w-sm border shadow-2xl bg-base-100">
                            <div className="card-body">
                                <h1 className='text-2xl text-center'>My Profile</h1><hr></hr>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input value={user?.name} type="text" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input value={user?.email} type="text" placeholder="Email" className="input input-bordered" />
                                   
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>)
            }


        </div>
    );
};

export default Profile;