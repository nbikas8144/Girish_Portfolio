function Contact() {
  return (
    <section id="contact" className="section contact-section">

      <div className="container">

        <div className="section-heading">
          <p>Let's Connect</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-container">

          <div className="contact-info">

            <h3>Let's work together</h3>

            <p>
              I'm interested in opportunities where I can apply my
              development skills and continue learning new technologies.
            </p>

            <div className="contact-item">
              <strong>Email</strong>
              <a href="mailto:nbikas961@gmail.com">
                nbikas961@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <strong>Phone</strong>
              <a href="tel:+918144647004">
                +91 8144647004
              </a>
            </div>

            <div className="contact-item">
              <strong>Location</strong>
              <span>Bhubaneswar, Odisha</span>
            </div>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit" className="btn primary-btn">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;