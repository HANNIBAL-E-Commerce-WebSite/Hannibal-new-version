import React from 'react';
import './footer.css';


interface FooterProps {
    copyrightText?: string; 
    socialLinks: {
      twitterUrl: string;
      instagramUrl: string;
      githubUrl: string;
      facebookUrl: string;
      youtubeUrl: string;
      twitterIcon: string;
      instagramIcon: string;
      githubIcon: string;
      facebookIcon: string;
      className: string;
    };
    contactInfo: {
      email: string;
      phoneNumber: string;
      address: string;
      LocalPhoneIcon:string;
    };
}

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
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">WhatsApp</a></li>
                  <li><a href="#">Github</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>CONTACT</h5>
          <p className="contact">technopark elGhazela</p>
          <p className="contact">hannibal@gmail.com</p>
          <p className="contact">+01 234 567 88</p>
          <p className="contact">+01 234 567 89</p>
        </div>
        <div className="col-md-3">        
          <div className="copyright">
            <p>&copy;2020 Copyright: MDBootstrap.com</p>
          </div>
        </div>
      </div>
    </div>
 </footer>
    );
  };
export default Footer;