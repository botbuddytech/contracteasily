import React from 'react';

export function Header() {
  return (
    <>
      {/* Full Page Search */}
      <div className="full-page-search">
        <form action="#">
          <input type="text" name="googlesearch" placeholder="Type Words Then Press Enter To Search" />
          <input type="submit" id="searchsubmit" value="Search" />
        </form>
        <div className="sr-overlay"></div>
      </div>

      <header className="header-area navbar-fixed-top">
        {/* Top Header */}
        <div className="top-header bg-dark">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 text-center">
                <div>
                  <p className="text-white">
                    Welcome To Contract Easily!
                    <span> (Create Legal Agreements Easily)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Row */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="header-contact-top">
                <ul>
                  <li><span>Phone :</span> +91-9669664421  </li>
                  <li><span>Available :</span> 11:00 am - 6:00 pm (IST)</li>
                  <li><span>Email :</span> contracteasily@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container custom-header">
          <div className="row">
            <div id="menuzord" className="menuzord">
              <a href="/" className="menuzord-brand" title="Index">
                <img
                  src="/images/horse_new.png"
                  width="35"
                  height="51"
                  alt="Contract Easily Logo"
                  title="Contract Easily Logo"
                />
                Contract Easily
              </a>

              <ul className="menuzord-menu menuzord-menu-bg menuzord-menu-right">
                <li className="active"><a href="/" title="Index">HOME</a></li>
                <li>
                  <a href="#">SOLUTIONS</a>
                  <ul className="dropdown">
                    <li><a href="/agreements" title="Legal Document Library">Legal Document Library</a></li>
                    <li><a href="/client-reminder" title="Client Reminder System">Client Reminder System</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">ABOUT</a>
                  <ul className="dropdown">
                    <li><a href="/about" title="About Us">About Us</a></li>
                    <li><a href="/team" title="Our Team">Our Team</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">SERVICES</a>
                  <ul className="dropdown">
                    <li><a href="/legal-advice" title="Legal Advice">Legal Advice</a></li>
                  </ul>
                </li>
                <li><a href="/blog" title="Blog">BLOG</a></li>
                <li><a href="/contact" title="Contact">CONTACT</a></li>
                <li>
                  <a href="#">ACCOUNT</a>
                  <ul className="dropdown">
                    <li><a href="/signup" title="SIGN UP">SIGN UP</a></li>
                    <li><a href="/login" title="LOGIN">LOGIN</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
