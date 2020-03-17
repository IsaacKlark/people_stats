import React from 'react';

const HomeFooter = () => {
  return (
    <footer className="footer" id="footer">
      <section className="footer__contact">
        <p className="footer__contact-p">
          If you need custom services or Need more? <a href="#">&#8194;Contact us</a>
        </p>
        <form className="footer__form">
          <input type="email" placeholder="Enter your email" />
          <button type="button">Subscribe</button>
        </form>
      </section>
      <section className="footer__bottom">
        <p className="footer__bottom-AppCo">AppCo</p>
        <p>All rights reserved by ThemeTags</p>
        <p>Copyrights © 2019.</p>
      </section>
    </footer>
  );
}

export default HomeFooter;