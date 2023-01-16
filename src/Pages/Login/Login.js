import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin=data=>{
        console.log(data)
    }
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full border shadow-2xl" data-theme="halloween">
                   
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                    <h1 className='text-center text-3xl'>Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text required:">Email</span>
                            </label>
                            <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email?.type === 'required' && <p className='text-red-700 mt-2'>Email is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text required:">Password</span>
                            </label>
                            <input type="text"  {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                            {errors.email?.type === 'required' && <p className='text-red-700 mt-2'>Password is required</p>}
                            <label className="label">
                                <p className="label-text-alt">Already register? <Link to='/register' className=' link link-hover'>Register</Link> </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn border-none bg-gradient-to-r from-cyan-500 to-blue-500">Login</button>
                        </div>
                        <div className="divider">OR</div>
                        <div className="form-control">
                            <button className="btn btn-outline">CONTINUE WITH GOOGLE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;