import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignOut = () => {
        logOut()
            .then(result => {
                toast.success('Logged Out')
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='home'>Home</Link></li>
                            <li><Link to='appointment'>Appointment</Link></li>
                            {user?.displayName ?
                                <>
                                    <li><Link to='/dashboard'>DashBoard</Link></li>
                                    <li><button className='btn border-none bg-gradient-to-r from-cyan-500 to-blue-500 text-white' onClick={handleSignOut}>Sign Out</button></li>

                                </>
                                : <li><Link to='login' className='btn border-none bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Sign In</Link></li>}

                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">MR.DOCTOR</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='home'>Home</Link></li>
                        <li><Link to='appointment'>Appointment</Link></li>
                        {user?.displayName ?
                            <>
                                <li><Link to='/dashboard'>DashBoard</Link></li>
                                <li><button className='btn border-none bg-gradient-to-r from-cyan-500 to-blue-500 text-white' onClick={handleSignOut}>Sign Out</button></li>

                            </>
                            : <li ><Link to='login' className='btn border-none bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Sign In</Link></li>}

                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Header;