function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div>
          <h3>Girish<span>.</span></h3>

          <p>
            Aspiring Full Stack / MERN Developer
          </p>
        </div>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Girish Nayak. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;