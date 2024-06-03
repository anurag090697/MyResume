/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFileCircleCheck,
  faGlobe,
  faMobile,
  faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";
library.add(faGlobe, faMobile, faMoneyBillTrendUp, faFileCircleCheck);

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div>
        <p>
          Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a
          Full-Stack software developer, I specialize in creating visually
          appealing websites, apps and mobile games. My passion for graphic
          design isn't just a hobby, it's a key ingredient in every project I
          work on. Growing up bilingual, I developed a love for languages and I
          currently speak four of them fluently. I believe that this skill has
          given me a unique perspective and allows me to communicate effectively
          with clients from all over the world. One of my strengths is adding a
          personal touch to my projects by adding the client's identity and
          message into the design, creating meaningful and beautiful end
          products that are both eye-catching and user-friendly. In my free
          time, I enjoy exploring my other passions, such as photography and
          music production, which provide me with creative outlets. I am also
          very passionate about Web3 and everything related to crypto, NFTs and
          blockchain technology as I believe they have the potential to
          revolutionize business and online interactions. If you have an
          innovative idea for a project that needs to be developed, I would love
          to hear from you. Your vision can be turned into a real product. Don't
          hesitate to reach out and let's start a conversation about your
          concept. I'm excited to collaborate and help bring your ideas to life.
        </p>
        <button>Show More</button>
      </div>
      <div>
        <h2>Primary Focus</h2>
        <div>
          <FontAwesomeIcon icon='fa-solid fa-globe' />
          <div>
            <h3>Web Design & Development</h3>
            <p>
              Creating attractive, easy-to-use websites that work well for
              businesses and individuals online.
            </p>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon='fa-solid fa-file-circle-check' />
          <div>
            <h3>Full-Stack Solutions</h3>
            <p>
              Developing scalable web applications using JavaScript Frameworks,
              SQL Databases, React and Java.
            </p>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon='fa-solid fa-mobile' />
          <div>
            <h3>Responsive Web Design</h3>
            <p>
              Creating Responsive pages which can run through a number to
              diffrent devices.
            </p>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon='fa-solid fa-money-bill-trend-up' />
          <div>
            <h3>Marketing & SEO</h3>
            <p>
              Using SEO and marketing strategies to boost online visibility and
              promote products or services.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3>Exploring Creativity</h3>
        <div>
          <div>
            <h4>Visual Storytelling</h4>
            <p>
              Taking and editing photos or videos that tell engaging stories,
              bringing concepts and ideas to life visually.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h4>Digital Content Creation</h4>
            <p>
              Creating digital elements, such as 3D models, graphics,
              animations, videos and AI-generated content.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3>Languages</h3>
        <div>
          <div>
            <h4>JavaScript</h4>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
