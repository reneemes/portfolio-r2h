import "./about-me.css";

function AboutMe() {

  return (
    <section>
      <h1>Renee Messersmith</h1>
      <figure className="slideshow-container">
        <div className="slideshow">
          <img src="assets/headshot.jpg" alt="Photo of Renee" className="renee-photo slideshow-photo"/>
          <img src="assets/travel.jpg" alt="Travel photo" className="travel-photo slideshow-photo"/>
          <img src="assets/scout.jpg" alt="Renee's dog Scout" className="scout-photo slideshow-photo"/>
        </div>
      </figure>
      <h2 className="about-me-title">About Me</h2>
      <p className="about-me">My career journey began with a passion for problem-solving, 
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
  )
}

export default AboutMe;