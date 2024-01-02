import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>About Us</h5>
            <ul>
              <li>Hannibal story</li>
              <li>Team</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Media Links</h5>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">WhatsApp</a>
              </li>
              <li>
                <a href="#">Github</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>CONTACT</h5>
            <p className="contact">Technopark ElGhazela</p>
            <p className="contact">contact@hannibal.tn</p>
            <p className="contact">+216 234 567 88</p>
            <p className="contact">+216 234 567 89</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 Copyright">
        <div className="copyright Copyright">
          <p>&copy;2024 Copyright Hannibal Market</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
