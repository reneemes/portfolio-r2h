import "./contact.css";

function Contact() {

  return (
      <section className="contact">
      <div className="contact__container">
        <h1 className="contact__title">Contact Me</h1>

        <form className="contact__form">

          <div className="contact__field">
            <label for="name">Name</label>
            <input
              className="contact__input"
              type="text"
              name="name"
              id="name"
              placeholder="Name (required)"
              required
            />
          </div>

          <div className="contact__field">
            <input
              className="contact__input"
              type="email"
              name="email"
              id="email"
              placeholder="Email (required)"
              required
            />
          </div>

          <div className="contact__field">
            <input
              className="contact__input"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>

          <div className="contact__field">
            <textarea
              className="contact__textarea"
              name="comments"
              id="comments"
              placeholder="Please type here... (required)"
              maxLength="500"
              required
            />
          </div>

          <div className="contact__actions">
            <input
              className="contact__submit"
              type="submit"
              value="Submit"
            />
          </div>

        </form>
      </div>
    </section>
  )
}

export default Contact;