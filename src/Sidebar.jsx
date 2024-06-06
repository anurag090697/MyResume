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
  faFacebook
);

function Sidebar() {
  return (
    <aside className='text-gray-800'>
      <img
        src='https://media.licdn.com/dms/image/C4E03AQFYua5lDZbOiQ/profile-displayphoto-shrink_800_800/0/1646312747192?e=1723075200&v=beta&t=jiANzcf18ZnrgrJrnqXXHe6U1eb_q7oDk46Llr2NA1A'
        alt='Profile'
      />
      <h2 className='font-black my-3 text-center text-2xl text-gray-600'>
        Anurag Shukla
      </h2>
      <div className='p-2 border-slate-500 border-2 rounded-xl mb-4 shadow-2xl shadow-blue-100 text-emerald-500'>
        <p>Hello, World!</p>
      </div>
      <hr />
      <div className='flex justify-start items-center gap-6 my-4'>
        <div className='icons1'>
          <FontAwesomeIcon icon='fa-solid fa-hourglass-start' />
        </div>
        <div>
          <p>AGE</p>
          <h4>26 years old</h4>
        </div>
      </div>
      <div className='flex justify-start items-center my-4 gap-6'>
        <div className='icons1'>
          <FontAwesomeIcon icon='fa-solid fa-location-dot' />
        </div>
        <div>
          <p>LOCATION</p>
          <h4>SATNA,(M.P.)</h4>
        </div>
      </div>
      <div className='flex justify-start items-center gap-6 my-4 w-full'>
        <div className='icons1 '>
          <FontAwesomeIcon icon='fa-solid fa-user' />
        </div>
        <div className=''>
          <p>PERSONALITY TYPE</p>
          <h4>INTJ-T</h4>
        </div>
      </div>
      <div className='socials flex justify-center align-center gap-4 my-4 '>
        <a href='https://github.com/anurag090697'>
          <FontAwesomeIcon icon='fa-brands fa-github' />
        </a>
        <a href='https://www.linkedin.com/in/anurag-shukla-31b70421b/'>
          <FontAwesomeIcon icon='fa-brands fa-linkedin' />
        </a>
        <a href='https://www.instagram.com/im__niks?igsh=YnQwbnc0YnBoMWt3'>
          <FontAwesomeIcon icon='fa-brands fa-instagram' />
        </a>
        <a href='https://www.facebook.com/cool.niks213?mibextid=ZbWKwL'>
          <FontAwesomeIcon icon='fa-brands fa-facebook' />
        </a>
      </div>
    </aside>
  );
}
export default Sidebar;
