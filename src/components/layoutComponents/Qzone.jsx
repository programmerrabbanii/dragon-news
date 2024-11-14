import React from 'react';
import swimming from "../../assets/swimming.png"
import classs from "../../assets/class.png"
import  play from "../../assets/playground.png"
import bgin from "../../assets/bg.png"

const Qzone = () => {
    return (
        <div>
            
           <div className='bg-gray-100'>
           <h3 className='text-2xl font-semibold mt-10 mb-7 p-5'>Q-Zone</h3>
           <div>
              <img src={swimming} alt="" />
            </div>

            <div>
              <img src={classs} alt="" />
            </div>

            <div>
              <img src={play} alt="" />
            </div>
           </div>
           <div className='mt-5 w-full'>
           <img src={bgin} alt="" />
           </div>
        </div>
    );
};

export default Qzone;