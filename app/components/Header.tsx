import React, { useState, useEffect } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close all dropdowns when mobile menu is closed
    if (isMobileMenuOpen) {
      setOpenDropdowns(new Set());
    }
  };

  const toggleDropdown = (dropdownId: string) => {
    setOpenDropdowns(prev => {
      const newSet = new Set(prev);
      if (newSet.has(dropdownId)) {
        newSet.delete(dropdownId);
      } else {
        newSet.add(dropdownId);
      }
      return newSet;
    });
  };

  // Handle window resize and mobile detection
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 992;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false);
        setOpenDropdowns(new Set()); // Close all dropdowns on desktop
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('.menuzord')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

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
              <a
                href="#"
                className={`showhide ${isMobileMenuOpen ? 'active' : ''}`}
                style={{display: isMobile ? 'block' : 'none'}}
                onClick={(e) => {
                  e.preventDefault();
                  toggleMobileMenu();
                }}
              >
                <em></em>
                <em></em>
                <em></em>
              </a>
              <ul
                className={`menuzord-menu menuzord-menu-bg menuzord-menu-right ${isMobileMenuOpen ? 'show' : ''}`}
                style={{
                  display: isMobile ? (isMobileMenuOpen ? 'flex' : 'none') : 'flex'
                }}
              >
                <li className="active">
                  <a href="/" title="Index">HOME</a>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      if (isMobile) {
                        e.preventDefault();
                        toggleDropdown('solutions');
                      }
                    }}
                    className={isMobile ? 'dropdown-toggle' : ''}
                  >
                    SOLUTIONS
                    {isMobile && (
                      <i className={`fa fa-chevron-${openDropdowns.has('solutions') ? 'up' : 'down'}`}></i>
                    )}
                  </a>
                  <ul className={`dropdown ${isMobile && openDropdowns.has('solutions') ? 'mobile-open' : ''}`}>
                    <li><a href="/legal-documents" title="Legal Document Library">Legal Document Library</a></li>
                    <li><a href="/client-reminder" title="Client Reminder System">Client Reminder System</a></li>
                  </ul>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      if (isMobile) {
                        e.preventDefault();
                        toggleDropdown('about');
                      }
                    }}
                    className={isMobile ? 'dropdown-toggle' : ''}
                  >
                    ABOUT
                    {isMobile && (
                      <i className={`fa fa-chevron-${openDropdowns.has('about') ? 'up' : 'down'}`}></i>
                    )}
                  </a>
                  <ul className={`dropdown ${isMobile && openDropdowns.has('about') ? 'mobile-open' : ''}`}>
                    <li><a href="/about" title="About Us">About Us</a></li>
                    <li><a href="/team" title="Our Team">Our Team</a></li>
                  </ul>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      if (isMobile) {
                        e.preventDefault();
                        toggleDropdown('services');
                      }
                    }}
                    className={isMobile ? 'dropdown-toggle' : ''}
                  >
                    SERVICES
                    {isMobile && (
                      <i className={`fa fa-chevron-${openDropdowns.has('services') ? 'up' : 'down'}`}></i>
                    )}
                  </a>
                  <ul className={`dropdown ${isMobile && openDropdowns.has('services') ? 'mobile-open' : ''}`}>
                    <li><a href="/legal-advice" title="Legal Advice">Legal Advice</a></li>
                  </ul>
                </li>
                <li><a href="/blog" title="Blog">BLOG</a></li>
                <li><a href="/contact" title="Contact">CONTACT</a></li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      if (isMobile) {
                        e.preventDefault();
                        toggleDropdown('account');
                      }
                    }}
                    className={isMobile ? 'dropdown-toggle' : ''}
                  >
                    ACCOUNT
                    {isMobile && (
                      <i className={`fa fa-chevron-${openDropdowns.has('account') ? 'up' : 'down'}`}></i>
                    )}
                  </a>
                  <ul className={`dropdown ${isMobile && openDropdowns.has('account') ? 'mobile-open' : ''}`}>
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
