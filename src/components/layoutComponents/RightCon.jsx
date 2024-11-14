import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import FindUs from "./FindUs";
import Qzone from "./Qzone";


const RightCon = () => {
    return (
        <div>
            <h3 className="font-semibold text-lg pb-5 ">Login With</h3>
            <div>
                <button className="border py-2 px-5 flex gap-2 items-center hover:text-green-500 hover:border-green-500 mb-2 w-full"> <FaGoogle></FaGoogle>Login With Google</button>

                <button className="border py-2 px-5 flex gap-2 items-center hover:text-green-500 hover:border-green-500 w-full"> <FaGithub></FaGithub>Login With GitHub</button>
            </div>
            <FindUs></FindUs>
            <Qzone></Qzone>

            
        </div>
    );
};

export default RightCon;