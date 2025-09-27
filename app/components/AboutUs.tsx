import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function AboutUs() {
  return (
    <div className="about-us-page">
      <Header />
      
      {/* Page Header */}
      <section className="page-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-padding">
                <div className="page-title-content text-center">
                  <h1>About Us</h1>
                  <p>Expert legal drafting solutions powered by technology</p>
                </div>
                <div className="breadcrumbs text-center">
                  <ul className="page-breadcrumbs">
                    <li><a href="/" title="Home">Home</a></li>
                    <li><a href="#" title="Current Page">About Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="about-content">
                <div className="section-title text-center">
                  <h2>CONTRACT EASILY</h2>
                  <h3>Legal Experts & Technology Innovators</h3>
                </div>
                
                <div className="about-description">
                  <p>
                    We are a team of experienced lawyers and legal experts who have been revolutionizing 
                    the legal industry since 2020. Our mission is to bridge the gap between traditional 
                    legal practice and modern technology, making legal services more accessible, efficient, 
                    and affordable for everyone.
                  </p>
                  
                  <p>
                    As experts in drafting legal documents, we understand the complexities and nuances 
                    of legal language. Our team of qualified lawyers brings years of experience in 
                    various areas of law, ensuring that every document we help create meets the highest 
                    standards of legal accuracy and compliance.
                  </p>
                  
                  <p>
                    We believe that technology should enhance, not replace, the expertise of qualified 
                    legal professionals. That's why we've combined the precision of AI-powered drafting 
                    with the wisdom of experienced lawyers to create a platform that delivers both 
                    efficiency and reliability.
                  </p>
                </div>

                <div className="about-features">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="feature-item">
                        <div className="feature-icon">
                          <i className="fa fa-gavel"></i>
                        </div>
                        <div className="feature-content">
                          <h4>Expert Legal Drafting</h4>
                          <p>Our team of qualified lawyers ensures every document meets legal standards and requirements.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="feature-item">
                        <div className="feature-icon">
                          <i className="fa fa-robot"></i>
                        </div>
                        <div className="feature-content">
                          <h4>AI-Powered Technology</h4>
                          <p>Advanced AI technology streamlines the document creation process while maintaining legal accuracy.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="feature-item">
                        <div className="feature-icon">
                          <i className="fa fa-users"></i>
                        </div>
                        <div className="feature-content">
                          <h4>Experienced Team</h4>
                          <p>Our team of lawyers has been serving clients since 2020 with expertise in various legal domains.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="feature-item">
                        <div className="feature-icon">
                          <i className="fa fa-lightbulb"></i>
                        </div>
                        <div className="feature-content">
                          <h4>Innovation Focus</h4>
                          <p>We continuously innovate to solve legal challenges with cutting-edge technology solutions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mission-statement">
                  <h3>Our Mission</h3>
                  <p>
                    To democratize access to quality legal services by combining the expertise of 
                    qualified lawyers with the efficiency of modern technology. We strive to make 
                    legal document creation accessible, affordable, and reliable for individuals and 
                    businesses alike.
                  </p>
                </div>

                <div className="contact-cta text-center">
                  <h3>Ready to Experience Legal Innovation?</h3>
                  <p>Join thousands of satisfied clients who trust us with their legal document needs.</p>
                  <div className="cta-buttons">
                    <a href="/legal-documents" className="btn btn-primary">Explore Our Library</a>
                    <a href="/contact" className="btn btn-outline-primary">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
