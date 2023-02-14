import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey=process.env.REACT_APP_imgbb_key;
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const form = location.state?.from.pathname || '/'
    //FOR HANDLE REGISTER
    const handleRegister = data => {
        console.log(data.image)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                saveUser(data.name, data.email)
                toast.success('Succesfully Registered')
                handleUpdateUserProfile(data.name)

            })
            .catch(error => console.error(error))
    }
    //FOR UPDATE USER
    const handleUpdateUserProfile = (name, email) => {
        const profile = {
            displayName: name,
            email
        }
        updateUserProfile(profile)
            .then(() => {

            })
            .catch(error => {
                console.error(error)
            })
    }
    const saveUser = (name, email) => {
        const user = { name, email }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                getUserToken(email)
            })

    }
    const getUserToken = (email) => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                    navigate('/')
                }
            })
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full border shadow-2xl">

                    <form onSubmit={handleSubmit(handleRegister)} className="card-body ">
                        <h1 className='text-center text-3xl font-bold'>Register</h1>
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
                            <input type="password"
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
                            {errors.password && <p className='text-red-600 mt-2'>{errors.password.message}</p>}
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