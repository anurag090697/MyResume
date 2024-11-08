/** @format */
import pokecards from "../public/poke.png";
import webflix from "../public/webflix.png";
import crpto from "../public/crypto.png";
import phonehunt from "../public/phonehunt.png";
import textworld from "../public/textworld.png";
import sahara from "../public/sahara.png";
import tenques from "../public/10ques.png";
import ropes from "../public/ropes.png";
import geekfoods from "../public/geekfoods.png";
import { FaEye } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";

function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects : </h1>

      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='w-72 flex flex-col items-center justify-between gap-3 '>
          <img src={sahara} alt='' className='rounded-lg' />
          <div className='text-center flex flex-col text-rose-100'>
            <h3>SAHARA.IN</h3>
            <p>Full Stack Ecommerce Platform</p>
          </div>
          <a
            target='blank'
            href='https://sahara-in.vercel.app/login'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-cyan-800'
          >
            Preview{" "}
            <span>
              {" "}
              <FaEye />
            </span>
          </a>
          <a
            href='https://github.com/anurag090697/SAHARA.IN'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-cyan-800'
          >
            GitHub{" "}
            <span>
              {" "}
              <FaGithubAlt />
            </span>
          </a>
        </div>
        <div className='w-72 flex flex-col items-center justify-between gap-3 '>
          <img src={ropes} alt='' className='rounded-lg' />
          <div className='text-center flex flex-col text-rose-100'>
            <h3>ropes</h3>
            <p>FullStack</p>
          </div>
          <a
            href='https://ropes-one.vercel.app/'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-cyan-800'
          >
            Preview{" "}
            <span>
              {" "}
              <FaEye />
            </span>
          </a>
          <a
            href='https://github.com/anurag090697/Ropes'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-cyan-800'
          >
            GitHub{" "}
            <span>
              {" "}
              <FaGithubAlt />
            </span>
          </a>
        </div>
        <div className='w-72 flex flex-col items-center justify-between gap-3 '>
          <img src={tenques} alt='' className='rounded-lg' />
          <div className='text-center flex flex-col text-rose-100'>
            <h3>TenQuestions</h3>
            <p>React</p>
          </div>
          <a
            href='https://ten-questions.vercel.app/?vercelToolbarCode=zROTRt04v2Wqrqk'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-cyan-800'
          >
            Preview{" "}
            <span>
              {" "}
              <FaEye />
            </span>
          </a>
          <a
            href='https://github.com/anurag090697/TenQuestions'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-cyan-800'
          >
            GitHub{" "}
            <span>
              {" "}
              <FaGithubAlt />
            </span>
          </a>
        </div>
        <div className='w-72 flex flex-col items-center justify-between gap-3 '>
          <img src={phonehunt} alt='' className='rounded-lg' />
          <div className='text-center flex flex-col text-rose-100'>
            <h3>PhoneHunt</h3>
            <p>JavaScript</p>
          </div>
          <a
            href='https://anurag090697.github.io/PHONE_HUNT/'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-cyan-800'
          >
            Preview{" "}
            <span>
              {" "}
              <FaEye />
            </span>
          </a>
          <a
            href='https://github.com/anurag090697/PHONE_HUNT'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-cyan-800'
          >
            GitHub{" "}
            <span>
              {" "}
              <FaGithubAlt />
            </span>
          </a>
        </div>
        <div className='w-72 flex flex-col items-center justify-between gap-3 '>
          <img src={textworld} alt='' className='rounded-lg' />
          <div className='text-center flex flex-col text-rose-100'>
            <h3>TextWorld</h3>
            <p>JavaScript</p>
          </div>
          <a
            href='https://text-world-one.vercel.app/'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-cyan-800'
          >
            Preview{" "}
            <span>
              {" "}
              <FaEye />
            </span>
          </a>
          <a
            href='https://github.com/anurag090697/TextWorld'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-cyan-800'
          >
            GitHub{" "}
            <span>
              {" "}
              <FaGithubAlt />
            </span>
          </a>
        </div>
        <div className='w-72 flex flex-col items-center justify-between gap-3 '>
          <img src={geekfoods} alt='' className='rounded-lg' />
          <div className='text-center flex flex-col text-rose-100'>
            <h3>GeekFoods</h3>
            <p>React</p>
          </div>
          <a
            href='https://geek-foods-ruby.vercel.app/'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-cyan-800'
          >
            Preview{" "}
            <span>
              {" "}
              <FaEye />
            </span>
          </a>
          <a
            href='https://github.com/anurag090697/GeekFoods'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-cyan-800'
          >
            GitHub{" "}
            <span>
              {" "}
              <FaGithubAlt />
            </span>
          </a>
        </div>
        <div className='w-72 flex flex-col items-center justify-between gap-3'>
          <img src={crpto} alt='' className='rounded-lg' />
          <div className='text-center flex flex-col text-rose-100'>
            <h3>CRYPTO_SEARCH</h3>
            <p>JavaScript</p>
          </div>
          <a
            href='https://anurag090697.github.io/Crypto_Search/'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-cyan-800'
          >
            Preview{" "}
            <span>
              {" "}
              <FaEye />
            </span>
          </a>
          <a
            href='https://github.com/anurag090697/Crypto_Search'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-cyan-800'
          >
            GitHub{" "}
            <span>
              {" "}
              <FaGithubAlt />
            </span>
          </a>
        </div>
        <div className='w-72 flex flex-col items-center justify-between gap-3'>
          <img src={webflix} alt='' className='rounded-lg' />
          <div className='text-center flex flex-col text-rose-100'>
            <h3>FreshPotato</h3>
            <p>React</p>
          </div>
          <a
            href='https://fresh-potato.vercel.app/'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-cyan-800'
          >
            Preview{" "}
            <span>
              {" "}
              <FaEye />
            </span>
          </a>
          <a
            href='https://github.com/anurag090697/FreshPotato'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-cyan-800'
          >
            GitHub{" "}
            <span>
              {" "}
              <FaGithubAlt />
            </span>
          </a>
        </div>
        <div className='w-72 flex flex-col items-center justify-between gap-3'>
          <img src={pokecards} alt='' className='rounded-lg' />
          <div className='text-center flex flex-col text-rose-100'>
            <h3>POKECARDS</h3>
            <p>Javasrcipt</p>
          </div>
          <a
            href='https://anurag090697.github.io/POKECARDS/'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-cyan-800'
          >
            Preview{" "}
            <span>
              {" "}
              <FaEye />
            </span>
          </a>
          <a
            href='https://github.com/anurag090697/POKECARDS'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-cyan-800'
          >
            GitHub{" "}
            <span>
              {" "}
              <FaGithubAlt />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
