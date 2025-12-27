import "./about-me.css";
import TypingIntro from "../TypingAnimation/typing";

function AboutMe() {

  return (
    <section className="about">
      
      {/* Typing Animation */}
      <div className="about__typing">
        <TypingIntro/>
      </div>

      <div className="lg-sizing">
        {/* Slideshow */}
        <figure className="about__slideshow">
          <div className="about__slides">
            <img src="/assets/headshot.jpg" alt="Photo of Renee" className="about__photo" id="photo1"/>
            <img src="/assets/photo2.jpg" alt="Headshot" className="about__photo" id="photo2"/>
            <img src="/assets/photo1.jpg" alt="Mountain" className="about__photo" id="photo3"/>
          </div>
        </figure>

        {/* Bio */}
        <section className="about__content">
          <h2 className="about__title">ABOUT ME</h2>
          <p className="about__bio">My career journey began with a passion for problem-solving, 
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
      </div>

      {/* Skills */}
       <section className='skills'>
        <h2 className='skills__title'>SKILLS</h2>

        <div className='skills__groups'>
          <div className='skills__group skills__group--languages'>
            <h2 className="skills__group-title">Programming Languages</h2>
            <img className="skills__icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt='JavaScript'/>
            <img className="skills__icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt='TypeScript'/>
            <img className="skills__icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt='HTML'/>
            <img className="skills__icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt='CSS'/>
            <img className="skills__icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" alt='Ruby'/>
          </div>
          <div className='skills__group skills__group--frameworks'>
            <h2 className="skills__group-title">Frameworks</h2>
            <img className="skills__icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt='React'/>
            <img className="skills__icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" alt='Cypress'/>
            <img className="skills__icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt='Tailwind CSS'/>
            <img className="skills__icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg" alt='Rails'/>
            <img className="skills__icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rspec/rspec-original.svg" alt='RSpec'/>
          </div>
          <div className='skills__group skills__group--tools'>
            <h2 className="skills__group-title">Tools</h2>
            <img className="skills__icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt='Postman'/>
            <img className="skills__icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg" alt='PostgreSQL'/>
            <img className="skills__icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" alt='Git'/>
            <img className="skills__icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-plain-wordmark.svg" alt='Heroku'/>
            <img className="skills__icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg" alt='Vercel'/>
          </div>
        </div>
      </section>
    </section>
  )
}

export default AboutMe;