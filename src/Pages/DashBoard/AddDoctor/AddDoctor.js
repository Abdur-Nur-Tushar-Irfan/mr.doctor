import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleAddDoctor = data => {
        console.log(data)

    }
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full border shadow-2xl">
                    <form onSubmit={handleSubmit(handleAddDoctor)} className="card-body">
                        <h1 className='text-center text-3xl font-bold'>Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text required:">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" />
                            {errors.name?.type === 'required' && <p className='text-red-700 mt-2'>Name is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text required:">Email</span>
                            </label>
                            <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email?.type === 'required' && <p className='text-red-700 mt-2'>Email is required</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn border-none bg-gradient-to-r from-cyan-500 to-blue-500">Add Doctor</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;