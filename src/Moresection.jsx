/** @format */
import extension from "../public/extension.png";
import { FaGithubAlt, FaInstagram } from "react-icons/fa";
import omniverse from "../public/omni.jpg";
function Moresection() {
  return (
    <div className='morediv'>
      <h1>More Projects</h1>
      <div className='flex flex-wrap items-start justify-evenly gap-4'>
        <div className='w-72 flex flex-col items-center justify-between gap-3 bg-indigo-950/40 p-3 rounded-xl'>
          <img src={extension} alt='' className='rounded-lg' />
          {/* <a
            href='https://geek-foods-ruby.vercel.app/'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-cyan-800'
          >
            Preview{" "}
            <span>
              {" "}
              <FaEye />
            </span>
          </a> */}
          <a
            href='https://github.com/anurag090697/Music_player_Extension'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-cyan-800'
          >
            GitHub{" "}
            <span>
              {" "}
              <FaGithubAlt />
            </span>
          </a>
          <p className='text-white text-center'>
            I created a chrome extension using javascript. This Chrome extension
            allows users to play their favorite music seamlessly while browsing
            the web.
          </p>
        </div>
        <div className='w-72 flex flex-col items-center justify-between gap-3 bg-indigo-950/40 p-3 rounded-xl'>
          <img src={omniverse} alt='' />
          <a
            href='https://github.com/anurag090697/Music_player_Extension'
            className='flex items-center gap-2 font-medium text-xl bg-black/40 w-full justify-center rounded-xl border py-1 border-indigo-700 hover:bg-lime-300/90 hover:text-rose-800'
          >
            Instagram{" "}
            <span>
              {" "}
              <FaInstagram />
            </span>
          </a>
          <p className='text-amber-400'>
            I'm a big anime fan and I like to watch anime in my free time. I
            also created a page where I post edited content from the shows I
            watch.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Moresection;
