/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHourglassStart,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; 
import {
  faGithub,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(
  faHourglassStart,
  faLocationDot,
  faUser,
  faGithub,
  faInstagram,
  faLinkedin,
  faFacebook,
);



function Sidebar() {
  return (
    <aside className=''>
      <img src='src\assets\vegeta.jpeg' alt='Profile' />
      <h2>Anurag Shukla</h2>
      <div className="p-2 border-slate-500 border-2 rounded-xl mb-4 shadow-2xl shadow-blue-100">
        <p>Hello, World!</p>
      </div>
      <hr className="text-gray-600" />
      <div className="flex justify-start items-center gap-6 my-4">
        <div className='icons1'>
          <FontAwesomeIcon icon='fa-solid fa-hourglass-start' />
        </div>
        <div>
          <p>AGE</p>
          <h4>26 years old</h4>
        </div>
      </div>
      <div className="flex justify-start items-center my-4 gap-6">
        <div className='icons1'>
          <FontAwesomeIcon icon='fa-solid fa-location-dot' />
        </div>
        <div>
          <p>LOCATION</p>
          <h4>SATNA,(M.P.)</h4>
        </div>
      </div>
      <div className="flex justify-start items-center gap-6 my-4 w-full">
        <div className='icons1 '>
          <FontAwesomeIcon icon='fa-solid fa-user' />
        </div>
        <div className="">
          <p>PERSONALITY TYPE</p>
          <h4>INTJ-T</h4>
        </div>
      </div>
      <div className='socials flex justify-center align-center gap-4 my-4'>
        <a href=''>
          <FontAwesomeIcon icon='fa-brands fa-github' />
        </a>
        <a href=''>
          <FontAwesomeIcon icon='fa-brands fa-linkedin' />
        </a>
        <a href=''>
          <FontAwesomeIcon icon='fa-brands fa-instagram' />
        </a>
        <a href=''>
          <FontAwesomeIcon icon='fa-brands fa-facebook' />
        </a>
      </div>
    </aside>
  );
}
export default Sidebar;
