/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFileCircleCheck,
  faGlobe,
  faMobile,
  faMoneyBillTrendUp,
  faArrowDown,
  faArrowUp,
  faIcons,
  faCameraRetro,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
library.add(
  faGlobe,
  faMobile,
  faMoneyBillTrendUp,
  faFileCircleCheck,
  faArrowDown,
  faArrowUp,
  faIcons,
  faCameraRetro
);

function About() {
  let [showMore, setShow] = useState("Show More");
  let [arrow, setArrow] = useState(
    <FontAwesomeIcon icon='fa-solid fa-arrow-down' />
  );
  function showExtra() {
    if (showMore === "Show More") {
      extra.classList.replace("hidden", "block");
      setShow("Show Less");
      setArrow(<FontAwesomeIcon icon='fa-solid fa-arrow-up' />);
    } else {
      extra.classList.replace("block", "hidden");
      setShow("Show More");
      setArrow(<FontAwesomeIcon icon='fa-solid fa-arrow-down' />);
    }
  }
  return (
    <div>
      <h1>About Me</h1>
      <div className='flex items-center justify-center flex-col text-emerald-800 border-2 border-yellow-500 bg-yellow-400 p-4 rounded-xl shadow-2xl '>
        <p>
          Hello there! 👋 My name is Anurag and I'm from Satna, India. As a
          Full-Stack software developer, I specialize in creating visually
          appealing websites, apps and mobile games. My passion for graphic
          design isn't just a hobby, it's a key ingredient in every project I
          work on.
          <span className='hidden' id='extra'>
            Growing up bilingual, I developed a love for languages and I
            currently speak four of them fluently. I believe that this skill has
            given me a unique perspective and allows me to communicate
            effectively with clients from all over the world. One of my
            strengths is adding a personal touch to my projects by adding the
            client's identity and message into the design, creating meaningful
            and beautiful end products that are both eye-catching and
            user-friendly. In my free time, I enjoy exploring my other passions,
            such as photography and music production, which provide me with
            creative outlets. I am also very passionate about Web3 and
            everything related to crypto, NFTs and blockchain technology as I
            believe they have the potential to revolutionize business and online
            interactions. If you have an innovative idea for a project that
            needs to be developed, I would love to hear from you. Your vision
            can be turned into a real product. Don't hesitate to reach out and
            let's start a conversation about your concept. I'm excited to
            collaborate and help bring your ideas to life.
          </span>
        </p>
        <button
          onClick={() => showExtra()}
          className='text-center animate-bounce my-4 text-gray-600'
        >
          {arrow} {"  "}
          {showMore} {"  "}
          {arrow}
        </button>
      </div>
      <div>
        <h2 className='text-center my-4 text-3xl font-black text-green-700'>
          Primary Focus
        </h2>
        <div className='flex justify-around align-center font-bold text-green-500 gap-6 flex-wrap my-6'>
          <div className='w-5/12 flex gap-4 bg-yellow-300 p-6 rounded-2xl border-2 border-yellow-500 shadow-2xl'>
            <FontAwesomeIcon
              icon='fa-solid fa-globe'
              className='text-4xl text-blue-500 mx-1'
            />
            <div>
              <h3 className='text-2xl text-green-700 mb-1'>
                Web Design & Development
              </h3>
              <p>
                Creating attractive, easy-to-use websites that work well for
                businesses and individuals online.
              </p>
            </div>
          </div>
          <div className='w-5/12 flex gap-4 bg-yellow-300 p-6 rounded-2xl border-2 border-yellow-500 shadow-2xl'>
            <FontAwesomeIcon
              icon='fa-solid fa-file-circle-check'
              className='text-4xl text-blue-500 mx-1'
            />
            <div>
              <h3 className='text-2xl text-green-700 mb-1'>
                Full-Stack Solutions
              </h3>
              <p>
                Developing scalable web applications using JavaScript
                Frameworks, SQL Databases, React and Java.
              </p>
            </div>
          </div>
          <div className='w-5/12 flex gap-4 bg-yellow-300 p-6 rounded-2xl border-2 border-yellow-500 shadow-2xl'>
            <FontAwesomeIcon
              icon='fa-solid fa-mobile'
              className='text-4xl text-blue-500 mx-1'
            />
            <div>
              <h3 className='text-2xl text-green-700 mb-1'>
                Responsive Web Design
              </h3>
              <p>
                Creating Responsive pages which can run through a number to
                diffrent devices.
              </p>
            </div>
          </div>
          <div className='w-5/12 flex gap-4 bg-yellow-300 p-6 rounded-2xl border-2 border-yellow-500 shadow-2xl'>
            <FontAwesomeIcon
              icon='fa-solid fa-money-bill-trend-up'
              className='text-4xl text-blue-500 mx-1'
            />
            <div>
              <h3 className='text-2xl text-green-700 mb-1'>Marketing & SEO</h3>
              <p>
                Using SEO and marketing strategies to boost online visibility
                and promote products or services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className='text-center my-4 text-3xl font-black text-green-700'>
          Exploring Creativity
        </h3>
        <div className='flex justify-around align-center font-bold text-green-500 gap-6 flex-wrap my-6'>
          <div className='w-5/12 flex gap-4 bg-yellow-300 p-5 rounded-2xl border-2 border-yellow-500 shadow-2xl'>
            <FontAwesomeIcon
              icon='fa-solid fa-icons'
              className='text-4xl text-blue-500 mx-1'
            />
            <div>
              <h4 className='text-2xl text-green-700 mb-1'>
                Visual Storytelling
              </h4>
              <p>
                Taking and editing photos or videos that tell engaging stories,
                bringing concepts and ideas to life visually.
              </p>
            </div>
          </div>
          <div className='w-5/12 flex gap-4 bg-yellow-300 p-5 shadow-2xl rounded-2xl border-2 border-yellow-500'>
            <FontAwesomeIcon
              icon='fa-solid fa-camera-retro'
              className='text-4xl text-blue-500 mx-1'
            />

            <div>
              <h4 className='text-2xl text-green-700 mb-1'>
                Digital Content Creation
              </h4>
              <p>
                Creating digital elements, such as 3D models, graphics,
                animations, videos and AI-generated content.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=' bg-yellow-300 p-6 rounded-2xl border-2 border-yellow-500 shadow-2xl pb-14'>
        <h2 className='text-center my-4 text-3xl font-black text-green-700'>
          Languages
        </h2>
        <div className='flex justify-around gap-4'>
          <div>
            <h3 className='text-center my-4 text-2xl font-black text-green-700'>
              Coding Languages
            </h3>
            <div>
              <h4 className='font-bold text-2xl text-indigo-700 my-3'>
                JavaScript
              </h4>
              <div className='w-full bg-gray-600 h-2 rounded-xl flex items-center'>
                <div className='bg-green-400 w-10/12 h-full rounded-s-xl barAnime'></div>
                <div className='w-2/12'></div>
              </div>
            </div>
            <div>
              <h4 className='font-bold text-2xl text-indigo-700 my-3'>Java</h4>
              <div className='w-full bg-gray-600 h-2 rounded-xl flex'>
                <div className='bg-green-400 w-9/12 h-full rounded-s-xl barAnime'></div>
                <div className='w-4/12'></div>
              </div>
            </div>
            <div>
              <h4 className='font-bold text-2xl text-indigo-700 my-3'>
                Python
              </h4>
              <div className='w-full bg-gray-600 h-2 rounded-xl flex'>
                <div className='bg-green-400 w-1/3 h-full rounded-s-xl barAnime'></div>
                <div className='w-3/4'></div>
              </div>
            </div>
            <div>
              <h4 className='font-bold text-2xl text-indigo-700 my-3'>CSS</h4>
              <div className='w-full bg-gray-600 h-2 rounded-xl flex'>
                <div className='bg-green-400 max-w-1/3 h-full rounded-s-xl barAnime'></div>
                <div className='w-2/3'></div>
              </div>
            </div>
          </div>
          <div>
            <h3 className='text-center my-4 text-2xl font-black text-green-700'>
              Human Languages
            </h3>
            <div>
              <h4 className='font-bold text-2xl text-indigo-700 my-3'>Hindi</h4>
              <div className='w-full bg-gray-600 h-2 rounded-xl flex items-center'>
                <div className='bg-green-400 w-full h-full rounded-xl barAnime'></div>
              </div>
            </div>
            <div>
              <h4 className='font-bold text-2xl text-indigo-700 my-3'>
                English
              </h4>
              <div className='w-full bg-gray-600 h-2 rounded-xl flex items-center'>
                <div className='bg-green-400 w-10/12 h-full rounded-s-xl barAnime'></div>
                <div className='w-2/12'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='aboutbtm my-6'>
        <h3 className='text-center my-4 text-3xl font-black text-green-700'>
          Development Skills
        </h3>
        <div className='languagesIcons'>
          <img src='https://oktayshakirov.com/assets/images/html.png' alt='' />
          <img src='https://oktayshakirov.com/assets/images/css.png' alt='' />
          <img
            src='https://oktayshakirov.com/assets/images/java-script.png'
            alt=''
          />
          <img src='https://oktayshakirov.com/assets/images/react.png' alt='' />
          <img
            src='https://oktayshakirov.com/assets/images/python.png'
            alt=''
          />
          <img src='https://oktayshakirov.com/assets/images/npm.png' alt='' />
          <img
            src='https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
export default About;
