import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleRegister = data => {
        console.log(data)
    }
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full border shadow-2xl" data-theme="halloween">
                   
                    <form onSubmit={handleSubmit(handleRegister)} className="card-body ">
                    <h1 className='text-center text-3xl'>Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" />
                            {errors.name?.type === 'required' && <p className='text-red-700 mt-2'>Name is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Photo</span>
                            </label>
                            <input type="file"  {...register("photo", { required: true })} placeholder="Your Photo" className="input input-bordered" />
                            {errors.photo?.type === 'required' && <p className='text-red-700 mt-2'>Photo is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text"  {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.name?.type === 'required' && <p className='text-red-700 mt-2'>Name is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text"
                                {...register("password",
                                    {
                                        required: true, minLength:
                                        {
                                            value: 6,
                                            message: 'Password must be 6 character'
                                        }
                                    })}
                                placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className='text-red-600 mt-2'>Password is required</p>}
                            <label className="label">
                                <p className="label-text-alt">Already Login? <Link to='/login' className=' link link-hover'>Register</Link> </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn border-none bg-gradient-to-r from-cyan-500 to-blue-500">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;