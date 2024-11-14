import React, { useContext } from 'react';
import userImg from "../assets/user.png"
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
const NavBar = () => {
    const {user,logOutUser}=useContext(AuthContext)
    return (
        <div className='flex justify-between items-center mt-6'>
            <div>{user && user.email}</div>
            <div>
                <ul className='flex'>
                   <li className='ml-3 text-lg'><Link> Home</Link></li> 
                   <li className='ml-3 text-lg'><Link> About</Link></li>
                   <li className='ml-3 text-lg'><Link> Career</Link></li>
                    
                    
                </ul> 
            </div>
            <div className="flex gap-2">
                <img src={userImg} alt="" />
                {
                    user && user?.email ? <button onClick={logOutUser} className='btn rounded-none bg-black  text-white'>Log Out</button> : <Link to="/auth/login" className='btn rounded-none bg-black  text-white'>Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;