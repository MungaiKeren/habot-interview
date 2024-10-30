import React from 'react';
import { Container } from 'react-bootstrap';
import './css/Footer.css';
import FbIcon from '../img/fb.png';
import IgIcon from '../img/ig.png';
import XIcon from '../img/x.png';
import InIcon from '../img/in.png';
import logowhite from "../img/logo-white.png";

function Footer() {
  return (
    <footer>
      <Container className="h-100">
        <div className="row h-100 footer-main-row">
          <div className="col-md-2">
            <img src={logowhite} alt="Logo" className="img-fluid" />
            <p>© R Singhania</p>
          </div>

          <div className="col-md-6 d-flex align-items-start justify-content-between">
            <div>
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>

            <div>
              <h5>Terms</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Data privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Accessibility</a>
                </li>
              </ul>
            </div>

            <div>
              <h5>Related</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Find Buyer</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 text-end">
            <div>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={FbIcon}
                  alt="Facebook"
                  style={{ width: "40px", height: "40px", margin: "0 10px" }}
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={XIcon}
                  alt="Twitter"
                  style={{ width: "40px", height: "40px", margin: "0 10px" }}
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={IgIcon}
                  alt="Instagram"
                  style={{ width: "40px", height: "40px", margin: "0 10px" }}
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={InIcon}
                  alt="LinkedIn"
                  style={{ width: "40px", height: "40px", margin: "0 10px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
