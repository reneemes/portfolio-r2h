import "./contact.css";

function Contact() {

  return (
      <section className="contact-page hidden">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <form className="contact-form">
          <section className="name">
            <input 
              type="text" 
              name="name" 
              id="name" 
              placeholder="Name (required)" 
              
            />
          </section>
          <section className="email">
            <input 
              type="text" 
              name="email" 
              id="email" 
              placeholder="Email (required)" 
              
            />
          </section>
          <section className="phone-number">
            <input 
              type="tel" 
              name="phone-number" 
              id="phone-number" 
              placeholder="Phone Number" 
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
          </section>
          <section className="comments">
            <textarea 
              type="text" 
              name="comments" 
              id="comments" 
              placeholder="Please type here... (required)" 
              maxLength="500"
              
            ></textarea>
          </section>

          <section className="submit-button">
            <input type="submit" value="Submit" id="submit-button"/>
          </section>
        </form>
      </div>
    </section>
  )
}

export default Contact;