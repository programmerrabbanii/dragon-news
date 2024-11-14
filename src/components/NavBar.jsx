import React from 'react';
import user from "../assets/user.png"
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className='flex justify-between items-center mt-6'>
            <div></div>
            <div>
                <ul className='flex'>
                   <li className='ml-3 text-lg'><Link> Home</Link></li> 
                   <li className='ml-3 text-lg'><Link> About</Link></li>
                   <li className='ml-3 text-lg'><Link> Career</Link></li>
                    
                    
                </ul>
            </div>
            <div className="flex gap-2">
                <img src={user} alt="" />
                <button className='btn rounded-none bg-black  text-white'>Login</button>
            </div>
        </div>
    );
};

export default NavBar;