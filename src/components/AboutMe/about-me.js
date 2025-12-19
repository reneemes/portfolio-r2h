import "./about-me.css";
import TypingIntro from "../TypingAnimation/typing";

function AboutMe() {

  return (
    <section className="about-me">
      {/* <h1 className="about-me__name">Renee Messersmith</h1> */}
      <div className="typing-sec">
        <TypingIntro/>
      </div>
      <figure className="about-me__slideshow-container slideshow-container">
        <div className="slideshow">
        <img src="/assets/headshot.jpg" alt="Photo of Renee" className="renee-photo slideshow-photo"/>
        <img src="/assets/photo2.jpg" alt="Travel photo" className="travel-photo slideshow-photo"/>
        <img src="/assets/photo1.jpg" alt="Renee's dog Scout" className="scout-photo slideshow-photo"/>
        </div>
        </figure>
      <section className="about-me-sec">
        <h2 className="about-me-sec__title">ABOUT ME</h2>
        <p className="about-me-sec__bio">My career journey began with a passion for problem-solving, 
          which has driven me to excel in diverse roles—whether I’m ensuring smooth 
          operations as a flight attendant, piloting unmanned systems, or managing teams 
          in high-pressure environments. With a background in unmanned vehicle system operations, 
          I enjoy tackling complex technical challenges and ensuring precision in everything I do. 
          As a communications specialist, I honed my ability to formulate clear and impactful messages, 
          while my experience as a flight attendant has strengthened my leadership and crisis 
          management skills. No matter the industry or task, I’m committed to delivering high-quality 
          results, always looking for opportunities to grow and apply my versatile skill set to new challenges.
        </p>
      </section>

       <section className='skills-section' id='skills'>
        <h2 className='skills-section'>SKILLS</h2>
        <div className='skills'>
          <div className='languages'>
            <h2>Programming Languages</h2>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt='JavaScript'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt='TypeScript'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt='HTML'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt='CSS'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" alt='Ruby'/>
          </div>
          <div className='frameworks'>
            <h2>Frameworks</h2>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt='React'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" alt='Cypress'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt='Tailwind CSS'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg" alt='Rails'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rspec/rspec-original.svg" alt='RSpec'/>
          </div>
          <div className='tools'>
            <h2>Tools</h2>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt='Postman'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg" alt='PostgreSQL'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" alt='Git'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-plain-wordmark.svg" alt='Heroku'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg" alt='Vercel'/>
          </div>
        </div>
      </section>
    </section>
  )
}

export default AboutMe;