import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';
const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 flex flex-col gap-2">
                <h2 className="mb-2 tex-3xl font-medium">Login With</h2>
                
                    <button className="btn btn-outline btn-info "><FaGoogle />Login with Google</button>
                    <button className="btn btn-outline"><FaGithub />Login with Github</button>
                
            </div>
            <div className="p-4 mb-6">
                <h2 className="mb-8 text-3xl font-medium">Find Us On</h2>
                <a className="p-4 flex text-lg items-center border rounded-t-lg gap-2.5" href=""><FaFacebook />
                    <span>Facebook</span>
                </a>
                <a className="p-4 flex text-lg items-center border-x gap-2.5" href=""><FaTwitter />
                    <span>Twitter</span>
                </a>
                <a className="p-4 flex text-lg items-center border rounded-b-lg gap-2.5" href=""><FaInstagram />
                    <span>Instagram</span>
                </a>
            </div>
            <div className="p-4 space-y-3 mb-6 bg-gray-200">
                <h2 className="text-3xl font-medium">Q Zone</h2>
              <img src={qZone1} alt="" />
              <img src={qZone2} alt="" />
              <img src={qZone3} alt="" />
            </div>
            <div className="bg-gradient-to-r from-[#05001DCC] from-80% text-white text-center  py-12 px-8">
                <h2 className="font-semibold text-3xl mb-5">Create an Amazing Newspaper</h2>
                <h4 className="mb-7">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</h4>
                <button className="btn bg-[#D72050]  text-white ">Learn More</button>
            </div>
        </div>
    );
};

export default RightSideNav;