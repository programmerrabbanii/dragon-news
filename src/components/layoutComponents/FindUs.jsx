import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";



const FindUs = () => {
    return (
        <div>
            <h3 className="font-semibold text-lg mb-5 mt-5">Find Us One</h3>
            <div className="flex flex-col space-y-2">
        <button className="border py-2 px-5 flex gap-2 items-center hover:text-green-500 hover:border-green-500 w-full">
          <CiFacebook className="mr-2" /> Facebook
        </button>
        <button className="border py-2 px-5 flex gap-2 items-center hover:text-green-500 hover:border-green-500 w-full">
          <FaTwitter className="mr-2" />  Twitter
        </button>
        <button className="border py-2 px-5 flex gap-2 items-center hover:text-green-500 hover:border-green-500 w-full">
          <FaInstagram className="mr-2" /> Instagram
        </button>
      </div>
        </div>
    );
};

export default FindUs;