
import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="main-footer">
      <Container>
        <Row className="footer-row">

          {/* Company Logo and Introduction */}
          <Col md={3} sm={6} xs={12} className="box">
            <div className="logo company-brand">
              <div className="brand-icon">
                <svg
                  viewBox="0 0 64 64"
                  role="img"
                  aria-label="AapkaMart company logo"
                >
                  <path
                    d="M12 51V27L32 12L52 27V51H39V37H25V51Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M28 51V40H36V51"
                    fill="#56c8ff"
                  />
                  <path
                    d="M8 53H56"
                    stroke="#56c8ff"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <h1>AapkaMart</h1>
                <span className="brand-subtitle">
                  TECH SOLUTIONS PVT. LTD.
                </span>
              </div>
            </div>

            <p className="footer-description">
              Your trusted shopping destination. Explore quality
              products and enjoy a convenient shopping experience
              with AapkaMart.
            </p>
          </Col>

          {/* About Us */}
          <Col md={2} sm={6} xs={12} className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>

          {/* Customer Care */}
          <Col md={2} sm={6} xs={12} className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Track Your Order</li>
              <li>Corporate & Bulk Purchasing</li>
              <li>Returns & Refunds</li>
            </ul>
          </Col>

          {/* Headquarters */}
          <Col md={2} sm={6} xs={12} className="box">
            <h2>Headquarters</h2>

            <div className="footer-contact-item">
              <span className="footer-icon">
                <ion-icon name="business-outline"></ion-icon>
              </span>

              <p>
                Flat No. 402, 4th Floor,
                Scindia House, Outer Circle,
                Connaught Place,
                New Delhi – 110001,
                Delhi, India.
              </p>
            </div>
          </Col>

          {/* Contact Us */}
          <Col md={3} sm={6} xs={12} className="box">
            <h2>Contact Us</h2>

            <div className="footer-contact-item">
              <span className="footer-icon">
                <ion-icon name="mail-outline"></ion-icon>
              </span>

              <div>
                <h3>Email</h3>
                <a href="mailto:Aapka.help@gmail.com">
                  Aapka.help@gmail.com
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <span className="footer-icon">
                <ion-icon name="call-outline"></ion-icon>
              </span>

              <div>
                <h3>Phone</h3>
                <a href="tel:+911123456000">
                  +91 1123 456 000
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <span className="footer-icon">
                <ion-icon name="location-outline"></ion-icon>
              </span>

              <div>
                <h3>Company</h3>
                <p>AapkaMart Tech Solutions Pvt. Ltd.</p>
              </div>
            </div>
          </Col>

        </Row>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} AapkaMart.
            All rights reserved.
          </p>
          <p>Designed for a better shopping experience.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
