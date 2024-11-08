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
import dp from "../public/dp.jpg";
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
    <aside className='text-lime-300 w-full md:w-2/3 md:place-self-center xl:w-fit xl:fixed left-16 top-16 py-6 px-8 font-medium shadow-xl shadow-slate-950 rounded-xl bg-gradient-to-br from-sky-800 via-slate-400 to-sky-700'>
      <img
        className='w-40 h-40 rounded-xl mx-auto object-cover'
        src={dp}
        alt='Profile'
      />
      <h2 className='font-black my-3 text-center text-2xl text-lime-400'>
        Anurag Shukla
      </h2>

      <p className='animetext p-2 border-slate-500 border-2 rounded-xl mb-4 shadow-2xl shadow-blue-100 text-amber-200'>
        Hello, World!
      </p>

      <hr className='border-lime-700' />
      <div className='flex justify-start items-center gap-6 my-4 shadow-md shadow-slate-600 border border-green-400 rounded-xl px-3'>
        <div className='text-gray-500 text-3xl'>
          <FontAwesomeIcon icon='fa-solid fa-hourglass-start' />
        </div>
        <div>
          <p>AGE</p>
          <h4>26 years old</h4>
        </div>
      </div>
      <div className='flex justify-start items-center my-4 gap-6 shadow-md shadow-slate-600 border border-green-400 rounded-xl px-3'>
        <div className='text-indigo-700 text-3xl'>
          <FontAwesomeIcon icon='fa-solid fa-location-dot' />
        </div>
        <div>
          <p>LOCATION</p>
          <h4>SATNA,(M.P.)</h4>
        </div>
      </div>
      <div className='flex justify-start items-center gap-6 my-4 shadow-md shadow-slate-600 border border-green-400 rounded-xl px-3'>
        <div className='text-amber-200 text-3xl'>
          <FontAwesomeIcon icon='fa-solid fa-user' />
        </div>
        <div className=''>
          <p>PERSONALITY TYPE</p>
          <h4>INTJ-T</h4>
        </div>
      </div>
      <div className='socials flex justify-center align-center gap-4 mt-6 mb-2 bg-slate-800 p-2 rounded-xl'>
        <a href='https://github.com/anurag090697'>
          <FontAwesomeIcon
            icon='fa-brands fa-github'
            className='text-gray-200 hover:text-indigo-500 text-3xl'
          />
        </a>
        <a href='https://www.linkedin.com/in/anurag-shukla-31b70421b/'>
          <FontAwesomeIcon
            icon='fa-brands fa-linkedin'
            className='text-indigo-500 hover:text-blue-800 text-3xl'
          />
        </a>
        <a href='https://www.instagram.com/im__niks?igsh=YnQwbnc0YnBoMWt3'>
          <FontAwesomeIcon
            icon='fa-brands fa-instagram'
            className='text-rose-500 hover:text-rose-800 text-3xl'
          />
        </a>
        <a href='https://www.facebook.com/cool.niks213?mibextid=ZbWKwL'>
          <FontAwesomeIcon
            icon='fa-brands fa-facebook'
            className='text-cyan-500 bg-white rounded-full hover:text-blue-600 text-3xl'
          />
        </a>
      </div>
    </aside>
  );
}
export default Sidebar;
