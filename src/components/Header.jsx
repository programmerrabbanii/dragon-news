import React, { useEffect, useState } from 'react';
import headeLogo from "../assets/logo.png"
import moment from 'moment';
const Header = () => {
    
    const [currentTime, setCurrentTime] = useState(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
        }, 1000); 

        return () => clearInterval(intervalId); 
    }, []);

    return (
       <div className='flex flex-col justify-center items-center  mt-5'>
         <div>
         <img src={headeLogo} alt="" />
         <h3 className='text-center mt-2 text-base text-gray-500'>Journalism Without Fear or Favour</h3>

         <p className='text-center mt-2 text-gray-600'>{currentTime}</p>
        </div>
       </div>
    );
};

export default Header;