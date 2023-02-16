import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';

const DashboardLayOut = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-gradient-to-r from-cyan-500 to-blue-500 text-base-content">
                        <li className='text-white'><Link to='/dashboard'>My Appointment</Link></li>
                        <li className='text-white'><Link to='/dashboard/allusers'>All Users</Link></li>
                        <li className='text-white'><Link to='/dashboard/adddoctor'>Add a Doctor</Link></li>
                        <li className='text-white'><Link to='/dashboard/manageDoctor'>Manages Doctor</Link></li>
                     
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayOut;