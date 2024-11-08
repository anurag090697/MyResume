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
      <div className='flex items-center justify-center flex-col text-gray-100 border-2 border-blue-500 bg-sky-400 p-4 rounded-xl shadow-2xl '>
        <p>
          Hello there! 👋 My name is Anurag and I'm from Satna, India. As an
          aspiring Full-Stack Web developer, I specialize in creating visually
          appealing websites. My passion for graphic design isn't just a hobby,
          it's a key ingredient in every project I work on.
          <span className='hidden' id='extra'>
            As a versatile professional with a unique blend of experience in
            agriculture, waste management, entrepreneurship, and web
            development, I bring a multifaceted approach to problem-solving and
            project management. My educational background in BSc Agriculture,
            coupled with practical experience as a branch head in municipal
            waste recycling, has instilled in me a strong sense of environmental
            responsibility and project oversight. This experience in turning
            organic waste into marketable compost demonstrates my ability to
            manage complex processes and see projects through from concept to
            completion. My entrepreneurial journey, including running an
            agricultural irrigation equipment business and a construction
            company, has honed my skills in client relations, project
            management, and adaptability. These experiences have taught me
            valuable lessons in teamwork, leadership, and delivering results
            under pressure. Currently, I'm focusing on web development, with
            proficiency in HTML, CSS, Tailwind, React, JavaScript, and
            intermediate data structures and algorithms using Java. I'm
            particularly interested in creating responsive and user-friendly
            blog-style interfaces. Fluent in Hindi and English, I can
            effectively communicate with diverse teams and clients. In my free
            time, I manage anime-focused social media pages, enjoy online
            gaming, and value time with family and pets. My unique background
            allows me to approach web development projects with a fresh
            perspective, combining technical skills with practical business
            acumen. I'm excited to bring this diverse experience to innovative
            web projects, especially those involving content-driven platforms or
            requiring a blend of technical and business insights.
          </span>
        </p>
        <button
          onClick={() => showExtra()}
          className={`text-center animate-bounce my-4  ${
            showMore === "Show More" ? "text-sky-800" : "text-red-600"
          }`}
        >
          {arrow} {"  "}
          {showMore} {"  "}
          {arrow}
        </button>
      </div>
      <div>
        <h2 className='text-center my-4 text-3xl font-black text-white'>
          Primary Focus
        </h2>
        <div className='flex justify-around align-center font-bold text-cyan-800 gap-6 flex-wrap my-6'>
          <div className=' md:w-5/12 flex gap-4 bg-cyan-400 p-6 rounded-2xl border-2 border-green-500 shadow-2xl'>
            <FontAwesomeIcon
              icon='fa-solid fa-globe'
              className='text-4xl text-blue-500 mx-1'
            />
            <div>
              <h3 className='text-2xl text-white mb-1'>
                Web Design & Development
              </h3>
              <p>
                Creating attractive, easy-to-use websites that work well for
                businesses and individuals online.
              </p>
            </div>
          </div>
          <div className='md:w-5/12 flex gap-4 bg-cyan-400 p-6 rounded-2xl border-2 border-green-500 shadow-2xl'>
            <FontAwesomeIcon
              icon='fa-solid fa-file-circle-check'
              className='text-4xl text-blue-500 mx-1'
            />
            <div>
              <h3 className='text-2xl text-white mb-1'>
                Full-Stack Solutions
              </h3>
              <p>
                Developing scalable web applications using JavaScript
                Frameworks, SQL Databases, React and Java.
              </p>
            </div>
          </div>
          <div className='md:w-5/12 flex gap-4 bg-cyan-400 p-6 rounded-2xl border-2 border-green-500 shadow-2xl'>
            <FontAwesomeIcon
              icon='fa-solid fa-mobile'
              className='text-4xl text-blue-500 mx-1'
            />
            <div>
              <h3 className='text-2xl text-white mb-1'>
                Responsive Web Design
              </h3>
              <p>
                Creating Responsive pages which can run through a number to
                diffrent devices.
              </p>
            </div>
          </div>
          <div className='md:w-5/12 flex gap-4 bg-cyan-400 p-6 rounded-2xl border-2 border-green-500 shadow-2xl'>
            <FontAwesomeIcon
              icon='fa-solid fa-money-bill-trend-up'
              className='text-4xl text-blue-500 mx-1'
            />
            <div>
              <h3 className='text-2xl text-white mb-1'>Marketing & SEO</h3>
              <p>
                Using SEO and marketing strategies to boost online visibility
                and promote products or services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className='text-center my-4 text-3xl font-black text-white'>
          Exploring Creativity
        </h3>
        <div className='flex justify-around align-center font-bold text-green-500 gap-6 flex-wrap my-6'>
          <div className='md:w-5/12 flex gap-4 bg-cyan-400 p-5 rounded-2xl border-2 border-green-500 shadow-2xl'>
            <FontAwesomeIcon
              icon='fa-solid fa-icons'
              className='text-4xl text-blue-500 mx-1'
            />
            <div>
              <h4 className='text-2xl text-white mb-1'>
                Visual Storytelling
              </h4>
              <p>
                Taking and editing photos or videos that tell engaging stories,
                bringing concepts and ideas to life visually.
              </p>
            </div>
          </div>
          <div className='md:w-5/12 flex gap-4 bg-cyan-400 p-5 shadow-2xl rounded-2xl border-2 border-green-500'>
            <FontAwesomeIcon
              icon='fa-solid fa-camera-retro'
              className='text-4xl text-blue-500 mx-1'
            />

            <div>
              <h4 className='text-2xl text-white mb-1'>
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

      <div className=' bg-cyan-400 p-6 rounded-2xl border-2 border-green-500 shadow-2xl pb-14'>
        <h2 className='text-center my-4 text-3xl font-black text-white'>
          Languages
        </h2>
        <div className='flex justify-around gap-4'>
          <div>
            <h3 className='text-center my-4 text-2xl font-black text-white'>
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
            <h3 className='text-center my-4 text-2xl font-black text-white'>
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
        <h3 className='text-center my-4 text-3xl font-black text-gray-100'>
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
          <img src='https://oktayshakirov.com/assets/images/git.png' alt='' />
          <img src='https://oktayshakirov.com/assets/images/node.png' alt='' />
        </div>
      </div>
    </div>
  );
}
export default About;
