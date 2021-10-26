import React from "react";

const Footer = () => (
  <div className="footer">
    <span> contact us via: </span>
    <nav>
      <a href="https://web.facebook.com/Sabes007" className="footer__link">
        <span>
          <i className="fab fa-facebook"></i>
        </span>
        facebook
      </a>
      <a href="https://wa.link/0vilvz" className="footer__link">
        <span>
          <i className="fab fa-whatsapp"></i>
        </span>
        whatsapp
      </a>
      <a href="https://github.com/psalmseen" className="footer__link">
        <span>
          <i className="fab fa-github"></i>
        </span>
        github
      </a>
      <a href="mailto:samsonoyebamiji02@gmail.com" className="footer__link">
        <span>
          <i className="far fa-envelope"></i>
        </span>
        mail
      </a>
      <a href="tel:+2348102545216" className="footer__link">
        <span>
          <i className="fas fa-phone"></i>
        </span>
        phone
      </a>
    </nav>
  </div>
);

export default Footer;
