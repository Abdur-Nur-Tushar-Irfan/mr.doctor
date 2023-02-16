import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate=useNavigate()
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey)
    const { data: appointmentsServices = [] } = useQuery({
        queryKey: ['appointsmentServices'],
        queryFn: () => fetch('http://localhost:5000/appointmentsServices')
            .then(res => res.json())

    })
    const handleAddDoctor = data => {
        const image = data.image[0]
        const formdata = new FormData();
        formdata.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formdata
        })
            .then(res => res.json())
            .then(img => {
                console.log(img.data.url)
                const doctors={
                    name:data.name,
                    email:data.email,
                    speciality:data.speciality,
                    image:img.data.url

                }
                fetch(`http://localhost:5000/doctors`,{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(doctors)
                    
                })
                .then(res=>res.json())
                .then(result=>{
                    console.log(result)
                    toast.success(`${data.name} succesfully added`)
                    navigate('/dashboard/manageDoctor')
                })
            })

    }
    return (

        <div>
            <h1 className='text-center text-3xl font-bold'>Add a Doctor</h1>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full border shadow-2xl">
                        <form onSubmit={handleSubmit(handleAddDoctor)} className="card-body">

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
                            <label className="label">
                                <span className="label-text required:">Speciality</span>
                            </label>
                            <div className="form-control">

                                <select
                                    {...register('speciality')}

                                    className="select select-bordered w-full max-w-xs">

                                    {
                                        appointmentsServices?.map(appointmentsService => <option>{appointmentsService?.name}</option>)
                                    }


                                </select>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text required:">Photo</span>
                                </label>
                                <input type="file" {...register("image", { required: true })} placeholder="Image" className="input input-bordered" />
                                {errors.image?.type === 'required' && <p className='text-red-700 mt-2'>Image is required</p>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn border-none bg-gradient-to-r from-cyan-500 to-blue-500">Add Doctor</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddDoctor;