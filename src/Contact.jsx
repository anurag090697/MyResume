/** @format */
import { useState } from "react";
import fblogo from "./assets/download.png";
import instal from "./assets/insta.png";
import linkedinl from "./assets/linkedin.png";
import githubl from "./assets/github.png";

function Contact() {
  const [copybtn, setCopybtn] = useState("Copy");
  function copyit(e) {
    navigator.clipboard.writeText("anurag090697@gmail.com");
    setCopybtn("Copied");
    setTimeout(() => {
      setCopybtn("Copy");
    }, 2000);
  }
  return (
    <div className='contact text-medium flex flex-col gap-6 items-center justify-center'>
      <h1 className='self-start ml-4 mt-3'>Contact:</h1>
      <div className='text-center mx-auto md:text-2xl text-gray-600 w-full md:w-2/3 bg-green-300/30 p-6 rounded-2xl border-2 border-green-500 shadow-2xl'>
        <h2 className='text-3xl text-gray-100'>Email:</h2>
        <div className='flex flex-wrap items-center justify-center gap-3 lg:mt-2'>
          {" "}
          <p className='text-wrap'>anurag090697@gmail.com</p>
          <button
            id='copybtn'
            className='text-amber-100 bg-rose-500 p-1 rounded-lg w-28 hover:bg-amber-200 border-2 border-rose-500 hover:text-rose-500'
            onClick={() => copyit()}
          >
            {copybtn}
          </button>
        </div>
      </div>
      <div className='text-center mx-auto text-3xl text-gray-100  bg-green-300/30 p-6 rounded-2xl border-2 border-green-500 shadow-2xl'>
        <h2>Socials:</h2>
        <div className='flex w-full items-center justify-center gap-6 mt-2'>
          <a href='https://github.com/anurag090697' target='blank'>
            <img src={githubl} alt='GitHub' className='w-28' />
          </a>
          <a
            href='https://www.linkedin.com/in/anurag-shukla-31b70421b/'
            target='blank'
          >
            <img src={linkedinl} alt='Linkedin' className='w-28' />
          </a>
          <a href='https://www.instagram.com/im__niks/' target='blank'>
            <img src={instal} alt='Instagram' className='w-28' />
          </a>
          <a href='https://www.facebook.com/cool.niks213' target='blank'>
            <img src={fblogo} alt='Facebook' className='w-28' />
          </a>
        </div>
      </div>
      {/* <div className='flex justify-center align-center flex-col gap-8'>
        <h2>Support My Work:</h2>
        <p>
          With every small donation, you contribute to hostings, domains and
          other essential costs. All my work which is made public on GitHub or
          Figma is open source and free for everyone to use.
        </p>
        <a href=''>
          <img
            src='https://oktayshakirov.com/assets/images/paypalme.png'
            alt=''
            className='w-60 rounded-2xl'
          />
        </a>
        <a href=''>
          <img
            src='https://oktayshakirov.com/assets/images/github-sponsors.png'
            alt=''
            className='w-60 rounded-2xl'
          />
        </a>
        <a href=''>
          <img
            src='https://oktayshakirov.com/assets/images/coffee-sponsort.png'
            alt=''
            className='w-60 rounded-2xl'
          />
        </a>
      </div> */}
    </div>
  );
}

export default Contact;
