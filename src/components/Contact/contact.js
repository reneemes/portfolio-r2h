import "./contact.css";
import { useState } from "react";

function Contact() {
  const [text, setText] = useState("");

  return (
    <section className="contact">
      <div className="contact__greeting">

        <div className="contact-top">
          <h1 className="contact__title">Get in Touch</h1>
        </div>

        <div className="contact-btm-lft">
          <p className="contact__message">
            If you would like to see more of my work, collaborate, or connect, leave me a note!
            I'd love to hear from you.
          </p>
        </div>

        <div className="middle-line"></div>

        <div className="contact-btm-rt">
          <div className="stamp"></div>
          {/* <p>
            _________
            _________
            _________
          </p> */}
          <div className="address-lines-container">
            <hr className="address-lines"></hr>
            <hr className="address-lines"></hr>
            <hr className="address-lines"></hr>
            <hr className="address-lines"></hr>
          </div>
        </div>

      </div>
      <form className="contact__form">

        <div className="contact__field">
          <label className="contact__field--label" for="name">Enter Your Name <span className="required-id">*</span></label>
          <input
            className="contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>

        <div className="contact__field">
          <label className="contact__field--label" for="email">Enter Your Email <span className="required-id">*</span></label>
          <input
            className="contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="contact__field">
          <label className="contact__field--label" for="phone">Enter Your Phone Number</label>
          <input
            className="contact__input"
            type="tel"
            name="phone"
            id="phone"
            placeholder="123-456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>

        <div className="contact__field">
          <label className="contact__field--label" for="comments">Enter Your Message <span className="required-id">*</span></label>
          <textarea
            className="contact__textarea"
            name="comments"
            id="comments"
            placeholder="Enter message here..."
            maxLength="500"
            onChange={(e) => setText(e.target.value)}
            required
          />
          <span className="contact__textarea--count">{text.length} / 500</span>
        </div>

        <div className="contact__actions">
          <input
            className="contact__submit"
            type="submit"
            value="Submit"
          />
        </div>
      </form>

    </section>
  )
}

export default Contact;