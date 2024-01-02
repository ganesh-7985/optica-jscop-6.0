import React from 'react';
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <ul className="social_icon">
        <li><a href="https://twitter.com/krishna_deol?t=j3jfHOIroGxfRakx3YZLDg&s=08"><ion-icon name="logo-twitter"></ion-icon></a></li>
        <li><a href="https://www.linkedin.com/in/krishna-deol-449873251"><ion-icon name="logo-linkedin"></ion-icon></a></li>
        <li><a href="https://instagram.com/krishnadeol5?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"><ion-icon name="logo-instagram"></ion-icon></a></li>
      </ul>

      <ul className="menu">
        <li><a href="particleRing">Home</a></li>
      </ul>
      
      <p className="copyright"> Made with ❤️ Cod3.</p>
    </footer>
  );
};

export default Footer;
