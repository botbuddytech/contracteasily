import React from 'react';

export function Footer() {
  return (
    <footer className="footer-area">
      <div className="footer-head"></div>
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="f-first-content f-all-h2">
                <div className="f-content-img">
                  <a href="/" title="Index Link in Logo Footer">
                    <img
                      src="/images/fotter-horse_new.png"
                      alt="Contract Easily Footer Logo"
                      title="Contract Easily Footer Logo"
                    />
                  </a>
                </div>
                <p>
                  Contract Easily is a legal app perfectly suited legal advisers and offices,
                  lawyers, attorneys, counsels, advocates and other legal and law related services.
                </p>

                {/* Social Media Icons */}
                <div className="social-icons-container">
                  <a href="https://www.facebook.com/profile.php?id=100063910427989" className="social-icon" target="_blank" title="Contract Easily Facebook Link">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/contracteasily/?hl=en" className="social-icon" target="_blank" title="Contract Easily Instagram Link">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/70979994/admin/dashboard/" className="social-icon" target="_blank" title="Contract Easily LinkedIn Link">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>


              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="f-second-content f-all-h2">
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="/" title="Home">Home</a></li>
                  <li><a href="/agreements" title="Legal Document Library">Legal Document Library</a></li>
                  <li><a href="/about" title="About Us">About Us</a></li>
                  <li><a href="/contact" title="Contact Us">Contact Us</a></li>
                  <li><a href="/blog" title="Blog">Blog</a></li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="f-third-content f-all-h2">
                <h3>Contact Info</h3>
                <div className="f-contact-details">
                  <div className="f-contact-icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div className="f-contact-text">
                    <p>India</p>
                  </div>
                </div>
                <div className="f-contact-details">
                  <div className="f-contact-icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="f-contact-text">
                    <p>+91-9669664421</p>
                  </div>
                </div>
                <div className="f-contact-details">
                  <div className="f-contact-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="f-contact-text">
                    <p>contracteasily@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom clearfix">
          <div className="f-bottom-left-text">
            <p>
              Contract Easily © All Rights Reserved. Powered By{' '}
              <span>
                <a href="https://botbuddy.in/" target="_blank" title="Bracketline PVT LTD">
                  Bot Buddy LLP
                </a>
              </span>
            </p>
          </div>
          <div className="f-bottom-right-text">
            <ul>
              <li><a href="/blog" title="All Blogs">Blogs</a></li>
              <li><a href="/faq" title="FREQUENTLY ASKED QUESTIONS">FAQs</a></li>
              <li><a href="/disclaimer" title="Disclaimer">Disclaimer</a></li>
              <li><a href="/privacy" title="Privacy Policy">Privacy Policy</a></li>
              <li><a href="/terms" title="Terms And Conditions">Terms And Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
