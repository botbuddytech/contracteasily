import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function ClientReminderSystem() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    interests: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const complianceAreas = [
    'Banking Laws & Regulations',
    'Income Tax Compliance',
    'GST Filing & Returns',
    'TDS Deduction & Filing',
    'State-specific Compliances',
    'Business Registration',
    'Annual Compliance',
    'Audit Requirements'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(item => item !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="client-reminder-page">
      <Header />
      
      {/* Page Header */}
      <section className="page-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-padding">
                <div className="page-title-content text-center">
                  <h1>Client Reminder Bot</h1>
                  <p>AI-Powered WhatsApp Reminders for Business Compliance</p>
                </div>
                <div className="breadcrumbs text-center">
                  <ul className="page-breadcrumbs">
                    <li><a href="/" title="Home">Home</a></li>
                    <li><a href="/legal-documents" title="Solutions">Solutions</a></li>
                    <li><a href="#" title="Current Page">Client Reminder Bot</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="hero-section bg-gradient-primary py-5">
        <div className="container">
          <div className="row align-items-center min-vh-50">
            <div className="col-12">
              <div className="hero-content text-white text-center">
                <h1 className="display-4 fw-bold mb-4">
                  <br></br>
                  AI-Powered Business Compliance Reminders
                </h1>
                <p className="lead mb-4">
                  Get free WhatsApp reminders and AI insights on your business transactions, 
                  banking laws, income tax, GST, TDS, and state-specific compliances.
                </p>
                <div className="d-flex align-items-center mb-4 justify-content-center">
                  <i className="fab fa-whatsapp fa-2x me-3 text-success"></i>
                  <div>
                    <h5 className="mb-1">100% Free WhatsApp Subscription</h5>
                    <p className="mb-0 text-light">No hidden charges, no premium tiers</p>
                  </div>
                </div>
                <div className="hero-features">
                  <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-3">
                      <div className="feature-item d-flex align-items-center mb-3 justify-content-center text-white p-3 rounded" 
                           style={{
                             background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
                             boxShadow: '0 0 20px rgba(255, 193, 7, 0.3), 0 0 40px rgba(255, 193, 7, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                             border: '1px solid rgba(255, 193, 7, 0.2)',
                             cursor: 'pointer',
                             transition: 'all 0.3s ease'
                           }}
                           onMouseEnter={(e) => {
                             e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 193, 7, 0.5), 0 0 60px rgba(255, 193, 7, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                             e.currentTarget.querySelector('span').style.color = '#ffc107';
                           }}
                           onMouseLeave={(e) => {
                             e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 193, 7, 0.3), 0 0 40px rgba(255, 193, 7, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                             e.currentTarget.querySelector('span').style.color = 'white';
                           }}>
                        <i className="fas fa-robot text-warning me-3" style={{textShadow: '0 0 10px rgba(255, 193, 7, 0.5)'}}></i>
                        <span className="fw-semibold">AI-Powered Insights</span>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="feature-item d-flex align-items-center mb-3 justify-content-center text-white p-3 rounded" 
                           style={{
                             background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
                             boxShadow: '0 0 20px rgba(23, 162, 184, 0.3), 0 0 40px rgba(23, 162, 184, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                             border: '1px solid rgba(23, 162, 184, 0.2)',
                             cursor: 'pointer',
                             transition: 'all 0.3s ease'
                           }}
                           onMouseEnter={(e) => {
                             e.currentTarget.style.boxShadow = '0 0 30px rgba(23, 162, 184, 0.5), 0 0 60px rgba(23, 162, 184, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                             e.currentTarget.querySelector('span').style.color = '#17a2b8';
                           }}
                           onMouseLeave={(e) => {
                             e.currentTarget.style.boxShadow = '0 0 20px rgba(23, 162, 184, 0.3), 0 0 40px rgba(23, 162, 184, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                             e.currentTarget.querySelector('span').style.color = 'white';
                           }}>
                        <i className="fas fa-calendar-alt text-info me-3" style={{textShadow: '0 0 10px rgba(23, 162, 184, 0.5)'}}></i>
                        <span className="fw-semibold">Smart Reminders</span>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="feature-item d-flex align-items-center mb-3 justify-content-center text-white p-3 rounded" 
                           style={{
                             background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
                             boxShadow: '0 0 20px rgba(40, 167, 69, 0.3), 0 0 40px rgba(40, 167, 69, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                             border: '1px solid rgba(40, 167, 69, 0.2)',
                             cursor: 'pointer',
                             transition: 'all 0.3s ease'
                           }}
                           onMouseEnter={(e) => {
                             e.currentTarget.style.boxShadow = '0 0 30px rgba(40, 167, 69, 0.5), 0 0 60px rgba(40, 167, 69, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                             e.currentTarget.querySelector('span').style.color = '#28a745';
                           }}
                           onMouseLeave={(e) => {
                             e.currentTarget.style.boxShadow = '0 0 20px rgba(40, 167, 69, 0.3), 0 0 40px rgba(40, 167, 69, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                             e.currentTarget.querySelector('span').style.color = 'white';
                           }}>
                        <i className="fas fa-shield-alt text-success me-3" style={{textShadow: '0 0 10px rgba(40, 167, 69, 0.5)'}}></i>
                        <span className="fw-semibold">Compliance Tracking</span>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="feature-item d-flex align-items-center mb-3 justify-content-center text-white p-3 rounded" 
                           style={{
                             background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
                             boxShadow: '0 0 20px rgba(0, 123, 255, 0.3), 0 0 40px rgba(0, 123, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                             border: '1px solid rgba(0, 123, 255, 0.2)',
                             cursor: 'pointer',
                             transition: 'all 0.3s ease'
                           }}
                           onMouseEnter={(e) => {
                             e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 123, 255, 0.5), 0 0 60px rgba(0, 123, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                             e.currentTarget.querySelector('span').style.color = '#007bff';
                           }}
                           onMouseLeave={(e) => {
                             e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 123, 255, 0.3), 0 0 40px rgba(0, 123, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                             e.currentTarget.querySelector('span').style.color = 'white';
                           }}>
                        <i className="fas fa-mobile-alt text-primary me-3" style={{textShadow: '0 0 10px rgba(0, 123, 255, 0.5)'}}></i>
                        <span className="fw-semibold">WhatsApp Delivery</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Video Section */}
      <section className="intro-video-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="h1 mb-4 fw-bold text-dark">
                  <span className="text-danger">Stop Losing Money</span> on Compliance Mistakes
                </h2>
                <p className="lead text-muted">
                  Watch how our AI-driven analysis helps businesses save lakhs of rupees in penalties
                </p>
              </div>
              <div className="video-container mb-5">
                <div className="video-wrapper position-relative" style={{paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '10px'}}>
                  <div 
                       style={{
                         position: 'absolute',
                         top: '0',
                         left: '0',
                         width: '100%',
                         height: '100%',
                         background: 'linear-gradient(45deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7))',
                         borderRadius: '10px',
                         cursor: 'pointer',
                         zIndex: 2,
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center'
                       }}
                       onClick={(e) => {
                         const overlay = e.currentTarget;
                         const iframe = overlay.nextElementSibling;
                         if (iframe) {
                           iframe.style.display = 'block';
                           overlay.style.display = 'none';
                         }
                       }}>
                    <div style={{
                      textAlign: 'center',
                      color: 'white',
                      maxWidth: '400px',
                      padding: '20px'
                    }}>
                      <div 
                           style={{
                             width: '80px',
                             height: '80px',
                             borderRadius: '50%',
                             background: 'linear-gradient(45deg, #ffc107, #ff8c00)',
                             display: 'flex',
                             alignItems: 'center',
                             justifyContent: 'center',
                             margin: '0 auto 20px auto',
                             boxShadow: '0 0 20px rgba(255, 193, 7, 0.5)',
                             transition: 'all 0.3s ease'
                           }}
                           onMouseEnter={(e) => {
                             e.currentTarget.style.transform = 'scale(1.1)';
                             e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 193, 7, 0.8)';
                           }}
                           onMouseLeave={(e) => {
                             e.currentTarget.style.transform = 'scale(1)';
                             e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 193, 7, 0.5)';
                           }}>
                        <i className="fas fa-play fa-2x" style={{color: 'white'}}></i>
                      </div>
                      <h4 style={{
                        fontWeight: 'bold',
                        marginBottom: '15px',
                        fontSize: '1.5rem'
                      }}>Watch Our Success Stories</h4>
                      <p style={{
                        margin: '0',
                        fontSize: '1.1rem',
                        lineHeight: '1.4'
                      }}>See how businesses save ₹50L+ annually with our AI compliance system</p>
                    </div>
                  </div>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example&autoplay=0&mute=1&controls=1&showinfo=0&rel=0&modestbranding=1"
                    title="Client Reminder Bot Success Stories"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      borderRadius: '10px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                      display: 'none'
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section - Indian Business Compliance Challenges */}
      <section className="analytics-section py-5" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="h1 mb-4 fw-bold text-dark">
                  <span className="text-danger">₹2.8 Crore</span> Average Annual Losses
                </h2>
                <p className="lead text-muted">
                  Real compliance challenges faced by Indian businesses in 2024
                </p>
              </div>
              
              {/* GST Compliance Analytics */}
              <div className="analytics-category mb-5">
                <div className="category-header text-center mb-4">
                  <h3 className="h2 fw-bold text-primary mb-3">
                    <i className="fas fa-receipt me-3"></i>GST Compliance Challenges
                  </h3>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6 mb-4">
                    <div className="analytics-card bg-white p-3 rounded-3 shadow-sm text-center h-100" style={{borderLeft: '4px solid #dc3545'}}>
                      <div className="analytics-icon mb-3">
                        <i className="fas fa-exclamation-triangle fa-2x text-danger"></i>
                      </div>
                      <h5 className="fw-bold text-dark mb-2">Late Filing Penalties</h5>
                      <div className="analytics-number h3 fw-bold text-danger mb-2">₹25,000</div>
                      <p className="text-muted small mb-1">Per return per month</p>
                      <div className="analytics-stats" style={{marginBottom: '0', paddingBottom: '0'}}>
                        <span className="badge bg-danger">2.3M+ businesses affected</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-4">
                    <div className="analytics-card bg-white p-3 rounded-3 shadow-sm text-center h-100" style={{borderLeft: '4px solid #fd7e14'}}>
                      <div className="analytics-icon mb-3">
                        <i className="fas fa-ban fa-2x text-warning"></i>
                      </div>
                      <h5 className="fw-bold text-dark mb-2">Input Tax Credit Loss</h5>
                      <div className="analytics-number h3 fw-bold text-warning mb-2">₹1.2L</div>
                      <p className="text-muted small mb-1">Average per business</p>
                      <div className="analytics-stats" style={{marginBottom: '0', paddingBottom: '0'}}>
                        <span className="badge bg-warning">15% of ITC lost</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-4">
                    <div className="analytics-card bg-white p-3 rounded-3 shadow-sm text-center h-100" style={{borderLeft: '4px solid #6f42c1'}}>
                      <div className="analytics-icon mb-3">
                        <i className="fas fa-search fa-2x text-purple"></i>
                      </div>
                      <h5 className="fw-bold text-dark mb-2">GST Scrutiny Notices</h5>
                      <div className="analytics-number h3 fw-bold text-purple mb-2">₹3.5L</div>
                      <p className="text-muted small mb-1">Average demand</p>
                      <div className="analytics-stats" style={{marginBottom: '0', paddingBottom: '0'}}>
                        <span className="badge bg-purple">45% increase YoY</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-4">
                    <div className="analytics-card bg-white p-3 rounded-3 shadow-sm text-center h-100" style={{borderLeft: '4px solid #20c997'}}>
                      <div className="analytics-icon mb-3">
                        <i className="fas fa-clock fa-2x text-success"></i>
                      </div>
                      <h5 className="fw-bold text-dark mb-2">Interest on Late Payment</h5>
                      <div className="analytics-number h3 fw-bold text-success mb-2">18%</div>
                      <p className="text-muted small mb-1">Annual interest rate</p>
                      <div className="analytics-stats" style={{marginBottom: '0', paddingBottom: '0'}}>
                        <span className="badge bg-success">Compounding daily</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Income Tax & TDS Analytics */}
              <div className="analytics-category mb-5">
                <div className="category-header text-center mb-4">
                  <h3 className="h2 fw-bold text-primary mb-3">
                    <i className="fas fa-file-invoice-dollar me-3"></i>Income Tax & TDS Challenges
                  </h3>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="analytics-card bg-white p-3 rounded-3 shadow-sm text-center h-100" style={{borderLeft: '4px solid #dc3545'}}>
                      <div className="analytics-icon mb-3">
                        <i className="fas fa-gavel fa-2x text-danger"></i>
                      </div>
                      <h5 className="fw-bold text-dark mb-2">Income Tax Scrutiny</h5>
                      <div className="analytics-number h3 fw-bold text-danger mb-2">₹8.5L</div>
                      <p className="text-muted small mb-1">Average demand</p>
                      <div className="analytics-stats" style={{marginBottom: '0', paddingBottom: '0'}}>
                        <span className="badge bg-danger">1.2M+ cases pending</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="analytics-card bg-white p-3 rounded-3 shadow-sm text-center h-100" style={{borderLeft: '4px solid #fd7e14'}}>
                      <div className="analytics-icon mb-3">
                        <i className="fas fa-percentage fa-2x text-warning"></i>
                      </div>
                      <h5 className="fw-bold text-dark mb-2">TDS Penalties</h5>
                      <div className="analytics-number h3 fw-bold text-warning mb-2">₹10,000</div>
                      <p className="text-muted small mb-1">Per missed deduction</p>
                      <div className="analytics-stats" style={{marginBottom: '0', paddingBottom: '0'}}>
                        <span className="badge bg-warning">3.8M+ notices issued</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="analytics-card bg-white p-3 rounded-3 shadow-sm text-center h-100" style={{borderLeft: '4px solid #6f42c1'}}>
                      <div className="analytics-icon mb-3">
                        <i className="fas fa-file-alt fa-2x text-purple"></i>
                      </div>
                      <h5 className="fw-bold text-dark mb-2">Mismatched Returns</h5>
                      <div className="analytics-number h3 fw-bold text-purple mb-2">₹2.1L</div>
                      <p className="text-muted small mb-1">Average penalty</p>
                      <div className="analytics-stats" style={{marginBottom: '0', paddingBottom: '0'}}>
                        <span className="badge bg-purple">67% of businesses affected</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Labor & Statutory Compliance */}
              <div className="analytics-category mb-5">
                <div className="category-header text-center mb-4">
                  <h3 className="h2 fw-bold text-primary mb-3">
                    <i className="fas fa-users me-3"></i>Labor & Statutory Compliance
                  </h3>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6 mb-4">
                    <div className="analytics-card bg-white p-3 rounded-3 shadow-sm text-center h-100" style={{borderLeft: '4px solid #dc3545'}}>
                      <div className="analytics-icon mb-3">
                        <i className="fas fa-shield-alt fa-2x text-danger"></i>
                      </div>
                      <h5 className="fw-bold text-dark mb-2">ESI Penalties</h5>
                      <div className="analytics-number h3 fw-bold text-danger mb-2">₹25,000</div>
                      <p className="text-muted small mb-1">Per month delay</p>
                      <div className="analytics-stats" style={{marginBottom: '0', paddingBottom: '0'}}>
                        <span className="badge bg-danger">₹1.2Cr+ collected</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-4">
                    <div className="analytics-card bg-white p-3 rounded-3 shadow-sm text-center h-100" style={{borderLeft: '4px solid #fd7e14'}}>
                      <div className="analytics-icon mb-3">
                        <i className="fas fa-piggy-bank fa-2x text-warning"></i>
                      </div>
                      <h5 className="fw-bold text-dark mb-2">EPF Late Filing</h5>
                      <div className="analytics-number h3 fw-bold text-warning mb-2">₹1,000</div>
                      <p className="text-muted small mb-1">Per employee per month</p>
                      <div className="analytics-stats" style={{marginBottom: '0', paddingBottom: '0'}}>
                        <span className="badge bg-warning">2.8M+ defaults</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-4">
                    <div className="analytics-card bg-white p-3 rounded-3 shadow-sm text-center h-100" style={{borderLeft: '4px solid #6f42c1'}}>
                      <div className="analytics-icon mb-3">
                        <i className="fas fa-id-card fa-2x text-purple"></i>
                      </div>
                      <h5 className="fw-bold text-dark mb-2">Professional Tax</h5>
                      <div className="analytics-number h3 fw-bold text-purple mb-2">₹2,500</div>
                      <p className="text-muted small mb-1">Per month penalty</p>
                      <div className="analytics-stats" style={{marginBottom: '0', paddingBottom: '0'}}>
                        <span className="badge bg-purple">State-wise variations</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-4">
                    <div className="analytics-card bg-white p-3 rounded-3 shadow-sm text-center h-100" style={{borderLeft: '4px solid #20c997'}}>
                      <div className="analytics-icon mb-3">
                        <i className="fas fa-certificate fa-2x text-success"></i>
                      </div>
                      <h5 className="fw-bold text-dark mb-2">License Renewals</h5>
                      <div className="analytics-number h3 fw-bold text-success mb-2">₹50,000</div>
                      <p className="text-muted small mb-1">Average penalty</p>
                      <div className="analytics-stats" style={{marginBottom: '0', paddingBottom: '0'}}>
                        <span className="badge bg-success">Business closure risk</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Statistics */}
              <div className="text-center">
                <div className="summary-stats bg-white p-5 rounded-3 shadow-lg d-inline-block">
                  <h3 className="fw-bold text-dark mb-4">
                    <i className="fas fa-chart-line text-primary me-2"></i>
                    Total Impact on Indian Businesses
                  </h3>
                  <div className="row text-center">
                    <div className="col-md-4 mb-3">
                      <div
                        className="stat-item bg-white p-4 rounded-3 h-100 border"
                        style={{
                          borderColor: '#e9ecef',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                          transition: 'transform .2s ease, box-shadow .2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.08)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
                        }}
                      >
                        <div className="stat-number display-4 fw-bold text-dark mb-1" style={{fontSize: '2.25rem', letterSpacing: '-0.5px'}}>₹2.8 Cr</div>
                        <div className="stat-label text-muted">Average Annual Loss</div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div
                        className="stat-item bg-white p-4 rounded-3 h-100 border"
                        style={{
                          borderColor: '#e9ecef',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                          transition: 'transform .2s ease, box-shadow .2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.08)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
                        }}
                      >
                        <div className="stat-number display-4 fw-bold text-dark mb-1" style={{fontSize: '2.25rem', letterSpacing: '-0.5px'}}>₹15.2 Cr</div>
                        <div className="stat-label text-muted">Total Penalties Collected</div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div
                        className="stat-item bg-white p-4 rounded-3 h-100 border"
                        style={{
                          borderColor: '#e9ecef',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                          transition: 'transform .2s ease, box-shadow .2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.08)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
                        }}
                      >
                        <div className="stat-number display-4 fw-bold text-dark mb-1" style={{fontSize: '2.25rem', letterSpacing: '-0.5px'}}>8.5M+</div>
                        <div className="stat-label text-muted">Notices Issued Annually</div>
                      </div>
                    </div>
                  </div>
                  <div className="alert alert-warning mt-4 text-center mx-auto d-flex flex-column align-items-center justify-content-center" style={{maxWidth: "800px"}}>
                    <h5 className="mb-2 text-center"><i className="fas fa-exclamation-triangle me-2"></i>Critical Insight</h5>
                    <p className="mb-0 fw-bold text-center">67% of Indian businesses face compliance penalties due to missed deadlines and incorrect filings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Rates & AI Analysis */}
      <section className="success-rates-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="h1 mb-4 fw-bold text-dark">
                  Our <span className="text-success">AI-Driven Success</span> in Numbers
                </h2>
                <p className="lead text-muted">
                  Legal expertise meets AI technology to protect your business
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="success-card bg-white p-5 rounded-3 shadow-lg h-100">
                    <div className="text-center mb-4">
                      <i className="fas fa-brain fa-4x text-primary mb-3"></i>
                      <h3 className="fw-bold">AI-Powered Analysis</h3>
                    </div>
                    <ul className="list-unstyled">
                      <li className="mb-3 d-flex align-items-center">
                        <i className="fas fa-check-circle text-success me-3"></i>
                        <span><strong>Real-time transaction monitoring</strong> from your accounting software</span>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <i className="fas fa-check-circle text-success me-3"></i>
                        <span><strong>Bank statement analysis</strong> for compliance gaps</span>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <i className="fas fa-check-circle text-success me-3"></i>
                        <span><strong>Email integration</strong> for department notices tracking</span>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <i className="fas fa-check-circle text-success me-3"></i>
                        <span><strong>Predictive compliance alerts</strong> before penalties occur</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="success-stats text-white p-5 rounded-3 h-100" style={{backgroundColor: '#d5aa6d'}}>
                    <h3 className="text-white mb-4 text-center fw-bold">Our Success Metrics</h3>
                    <div className="row text-center">
                      <div className="col-6 mb-3">
                        <div className="metric-card bg-white p-3 rounded-3 border" style={{borderColor: '#e9ecef'}}>
                          <div className="stat-number h3 fw-bold text-black mb-1">99.7%</div>
                          <div className="stat-label text-black small">Compliance Rate</div>
                        </div>
                      </div>
                      <div className="col-6 mb-3">
                        <div className="metric-card bg-white p-3 rounded-3 border" style={{borderColor: '#e9ecef'}}>
                          <div className="stat-number h3 fw-bold text-black mb-1">₹2.5Cr+</div>
                          <div className="stat-label text-black small">Penalties Saved</div>
                        </div>
                      </div>
                      <div className="col-6 mb-3">
                        <div className="metric-card bg-white p-3 rounded-3 border" style={{borderColor: '#e9ecef'}}>
                          <div className="stat-number h3 fw-bold text-black mb-1">15,000+</div>
                          <div className="stat-label text-black small">Businesses Protected</div>
                        </div>
                      </div>
                      <div className="col-6 mb-3">
                        <div className="metric-card bg-white p-3 rounded-3 border" style={{borderColor: '#e9ecef'}}>
                          <div className="stat-number h3 fw-bold text-black mb-1">24/7</div>
                          <div className="stat-label text-black small">AI Monitoring</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="integration-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="h1 mb-4 fw-bold text-dark">
                  <span className="text-primary">Seamless Integration</span> with Your Business Tools
                </h2>
                <p className="lead text-muted">
                  Connect your existing software and let our AI analyze everything
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="integration-card bg-white p-4 rounded-3 shadow text-center h-100">
                    <i className="fab fa-tally fa-3x text-primary mb-3"></i>
                    <h5 className="fw-bold">Tally Integration</h5>
                    <p className="text-muted">Direct sync with Tally ERP for real-time data analysis</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="integration-card bg-white p-4 rounded-3 shadow text-center h-100">
                    <i className="fas fa-university fa-3x text-success mb-3"></i>
                    <h5 className="fw-bold">Banking APIs</h5>
                    <p className="text-muted">Connect with 50+ banks for transaction monitoring</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="integration-card bg-white p-4 rounded-3 shadow text-center h-100">
                    <i className="fas fa-envelope fa-3x text-warning mb-3"></i>
                    <h5 className="fw-bold">Email Integration</h5>
                    <p className="text-muted">Monitor department notices and compliance emails</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="integration-card bg-white p-4 rounded-3 shadow text-center h-100">
                    <i className="fas fa-calculator fa-3x text-info mb-3"></i>
                    <h5 className="fw-bold">QuickBooks</h5>
                    <p className="text-muted">Seamless integration with QuickBooks accounting</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="integration-card bg-white p-4 rounded-3 shadow text-center h-100">
                    <i className="fas fa-cloud fa-3x text-secondary mb-3"></i>
                    <h5 className="fw-bold">Zoho Books</h5>
                    <p className="text-muted">Cloud-based accounting software integration</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="integration-card bg-white p-4 rounded-3 shadow text-center h-100">
                    <i className="fas fa-mobile-alt fa-3x text-primary mb-3"></i>
                    <h5 className="fw-bold">WhatsApp Business</h5>
                    <p className="text-muted">Direct notifications and insights via WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="h1 mb-4 fw-bold text-dark">Why Choose Our Reminder Bot?</h2>
              <p className="lead text-muted">
                Stay compliant and never miss important deadlines with our intelligent reminder system.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="feature-card h-100 p-4 border rounded-3 shadow-sm text-center bg-white">
                <div className="feature-icon mb-3">
                  <i className="fas fa-brain fa-3x text-primary"></i>
                </div>
                <h4 className="fw-bold">AI-Powered Analysis</h4>
                <p className="text-muted">
                  Our AI analyzes your business patterns and provides personalized insights 
                  on compliance requirements and optimization opportunities.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="feature-card h-100 p-4 border rounded-3 shadow-sm text-center bg-white">
                <div className="feature-icon mb-3">
                  <i className="fas fa-bell fa-3x text-warning"></i>
                </div>
                <h4 className="fw-bold">Smart Reminders</h4>
                <p className="text-muted">
                  Get timely reminders for all your compliance deadlines including 
                  GST filing, TDS returns, income tax, and state-specific requirements.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="feature-card h-100 p-4 border rounded-3 shadow-sm text-center bg-white">
                <div className="feature-icon mb-3">
                  <i className="fab fa-whatsapp fa-3x text-success"></i>
                </div>
                <h4 className="fw-bold">WhatsApp Delivery</h4>
                <p className="text-muted">
                  Receive all reminders and insights directly on WhatsApp. 
                  No need to check emails or download additional apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="subscription-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="subscription-card bg-white p-5 rounded-3 shadow-lg">
                <div className="text-center mb-4">
                  <h2 className="h1 mb-3 fw-bold text-dark">Subscribe to Free WhatsApp Reminders</h2>
                  <p className="lead text-muted">
                    Join thousands of businesses who stay compliant with our free reminder bot.
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">Full Name *</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="phone" className="form-label">WhatsApp Number *</label>
                        <input
                          type="tel"
                          className="form-control form-control-lg"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 9876543210"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">Email Address *</label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="businessType" className="form-label">Business Type *</label>
                        <select
                          className="form-select form-select-lg"
                          id="businessType"
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select Business Type</option>
                          <option value="sole-proprietorship">Sole Proprietorship</option>
                          <option value="partnership">Partnership</option>
                          <option value="llp">Limited Liability Partnership (LLP)</option>
                          <option value="private-limited">Private Limited Company</option>
                          <option value="public-limited">Public Limited Company</option>
                          <option value="one-person-company">One Person Company (OPC)</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="form-label">Areas of Interest (Select all that apply)</label>
                      <div className="row">
                        {complianceAreas.map((area, index) => (
                          <div key={index} className="col-md-6 mb-2">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`interest-${index}`}
                                checked={formData.interests.includes(area)}
                                onChange={() => handleInterestToggle(area)}
                              />
                              <label className="form-check-label" htmlFor={`interest-${index}`}>
                                {area}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-lg px-5"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Subscribing...
                          </>
                        ) : (
                          <>
                            <i className="fab fa-whatsapp me-2"></i>
                            Subscribe to WhatsApp Reminders
                          </>
                        )}
                      </button>
                      <p className="text-muted mt-3 small">
                        <i className="fas fa-lock me-1"></i>
                        Your information is secure and will never be shared with third parties.
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="text-center">
                    <div className="success-icon mb-4">
                      <i className="fas fa-check-circle fa-5x text-success"></i>
                    </div>
                    <h3 className="text-success mb-3">Subscription Successful!</h3>
                    <p className="lead mb-4">
                      Thank you for subscribing! You'll start receiving AI-powered compliance 
                      reminders and insights from our bot on WhatsApp within 24 hours.
                    </p>
                    <div className="alert alert-info">
                      <i className="fab fa-whatsapp me-2"></i>
                      <strong>Next Steps:</strong> Save our WhatsApp number (+91-9669664421) 
                      to your contacts to receive reminders.
                    </div>
                    <button 
                      className="btn btn-outline-primary"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          businessType: '',
                          interests: []
                        });
                      }}
                    >
                      Subscribe Another Number
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="h1 mb-4 fw-bold text-dark">What You'll Get</h2>
                <p className="lead text-muted">Comprehensive protection for your business compliance</p>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="benefit-card bg-white p-4 rounded-3 shadow" style={{minHeight: '100%', overflow: 'hidden'}}>
                    <h3 className="fw-bold mb-4 text-center">Key Benefits</h3>
                    <div className="benefit-list" style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                      <div className="benefit-item d-flex align-items-start mb-3">
                        <div className="benefit-icon me-3">
                          <i className="fas fa-calendar-check fa-2x text-primary"></i>
                        </div>
                        <div>
                          <h5 className="fw-bold">Deadline Reminders</h5>
                          <p className="text-muted mb-0">
                            Never miss important compliance deadlines with timely WhatsApp notifications.
                          </p>
                        </div>
                      </div>
                      <div className="benefit-item d-flex align-items-start mb-3">
                        <div className="benefit-icon me-3">
                          <i className="fas fa-chart-line fa-2x text-success"></i>
                        </div>
                        <div>
                          <h5 className="fw-bold">Business Insights</h5>
                          <p className="text-muted mb-0">
                            Get AI-powered insights on optimizing your tax savings and compliance costs.
                          </p>
                        </div>
                      </div>
                      <div className="benefit-item d-flex align-items-start mb-3">
                        <div className="benefit-icon me-3">
                          <i className="fas fa-gavel fa-2x text-warning"></i>
                        </div>
                        <div>
                          <h5 className="fw-bold">Legal Updates</h5>
                          <p className="text-muted mb-0">
                            Stay updated with the latest changes in tax laws and compliance requirements.
                          </p>
                        </div>
                      </div>
                      <div className="benefit-item d-flex align-items-start mb-3">
                        <div className="benefit-icon me-3">
                          <i className="fas fa-shield-alt fa-2x text-info"></i>
                        </div>
                        <div>
                          <h5 className="fw-bold">Penalty Prevention</h5>
                          <p className="text-muted mb-0">
                            Avoid costly penalties by staying on top of all your compliance requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="stats-card text-white p-5 rounded-3 text-center h-100" style={{backgroundColor: '#d5aa6d'}}>
                    <h3 className="text-white mb-4 fw-bold">Trusted by Businesses</h3>
                    <div className="row text-center">
                      <div className="col-6 mb-3">
                        <div className="metric-card bg-white p-3 rounded-3 border" style={{borderColor: '#e9ecef'}}>
                          <div className="stat-number h3 fw-bold text-black mb-1">15,000+</div>
                          <div className="stat-label text-black small">Active Subscribers</div>
                        </div>
                      </div>
                      <div className="col-6 mb-3">
                        <div className="metric-card bg-white p-3 rounded-3 border" style={{borderColor: '#e9ecef'}}>
                          <div className="stat-number h3 fw-bold text-black mb-1">99.7%</div>
                          <div className="stat-label text-black small">Compliance Rate</div>
                        </div>
                      </div>
                      <div className="col-6 mb-3">
                        <div className="metric-card bg-white p-3 rounded-3 border" style={{borderColor: '#e9ecef'}}>
                          <div className="stat-number h3 fw-bold text-black mb-1">₹2.5Cr+</div>
                          <div className="stat-label text-black small">Penalties Saved</div>
                        </div>
                      </div>
                      <div className="col-6 mb-3">
                        <div className="metric-card bg-white p-3 rounded-3 border" style={{borderColor: '#e9ecef'}}>
                          <div className="stat-number h3 fw-bold text-black mb-1">24/7</div>
                          <div className="stat-label text-black small">AI Monitoring</div>
                        </div>
                      </div>
                      <div className="col-6 mb-3">
                        <div className="metric-card bg-white p-3 rounded-3 border" style={{borderColor: '#e9ecef'}}>
                          <div className="stat-number h3 fw-bold text-black mb-1">Free Bot</div>
                          <div className="stat-label text-black small">Ask anything</div>
                        </div>
                      </div>
                      <div className="col-6 mb-3">
                        <div className="metric-card bg-white p-3 rounded-3 border" style={{borderColor: '#e9ecef'}}>
                          <div className="stat-number h3 fw-bold text-black mb-1">Personalised</div>
                          <div className="stat-label text-black small">Ask specific</div>
                        </div>
                      </div>
                      <div className="col-6 mb-3">
                        <div className="metric-card bg-white p-3 rounded-3 border" style={{borderColor: '#e9ecef'}}>
                          <div className="stat-number h3 fw-bold text-black mb-1">Stay Calm</div>
                          <div className="stat-label text-black small">AI driven</div>
                        </div>
                      </div>
                      <div className="col-6 mb-3">
                        <div className="metric-card bg-white p-3 rounded-3 border" style={{borderColor: '#e9ecef'}}>
                          <div className="stat-number h3 fw-bold text-black mb-1">Pan- India</div>
                          <div className="stat-label text-black small">All laws</div>
                        </div>
                      </div>
                      <div className="col-6 mb-3">
                        <div className="metric-card bg-white p-3 rounded-3 border" style={{borderColor: '#e9ecef'}}>
                          <div className="stat-number h3 fw-bold text-black mb-1">Lawyers</div>
                          <div className="stat-label text-black small">Ready with AI</div>
                        </div>
                      </div>
                      <div className="col-6 mb-3">
                        <div className="metric-card bg-white p-3 rounded-3 border" style={{borderColor: '#e9ecef'}}>
                          <div className="stat-number h3 fw-bold text-black mb-1">CAs & CS</div>
                          <div className="stat-label text-black small">Ready with AI</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Not Sure Section */}
      <section className="still-not-sure-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center">
                <div className="not-sure-card bg-white p-5 rounded-3 shadow-lg">
                  <div className="mb-4">
                    <i className="fab fa-whatsapp fa-4x text-success mb-3"></i>
                    <h2 className="h1 mb-4 fw-bold text-dark">
                      Still Not Sure? 
                      <span className="text-primary">Talk to our WhatsApp AI Bot</span> and then decide!
                    </h2>
                    <p className="lead text-muted mb-4">
                      Get instant answers to all your compliance questions. Our AI bot understands your business 
                      and provides personalized guidance before you make any commitment.
                    </p>
                  </div>
                  
                  <div className="row mb-4">
                    <div className="col-md-4 mb-3">
                      <div className="feature-highlight text-center p-3">
                        <i className="fas fa-comments fa-2x text-primary mb-2"></i>
                        <h5 className="fw-bold">Instant Chat</h5>
                        <p className="text-muted small mb-0">Get immediate responses to your questions</p>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="feature-highlight text-center p-3">
                        <i className="fas fa-brain fa-2x text-success mb-2"></i>
                        <h5 className="fw-bold">AI-Powered</h5>
                        <p className="text-muted small mb-0">Smart analysis of your specific needs</p>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="feature-highlight text-center p-3">
                        <i className="fas fa-clock fa-2x text-warning mb-2"></i>
                        <h5 className="fw-bold">24/7 Available</h5>
                        <p className="text-muted small mb-0">Chat anytime, anywhere</p>
                      </div>
                    </div>
                  </div>

                  <div className="whatsapp-cta">
                    <a 
                      href="https://wa.me/919669664421?text=Hi! I'd like to learn more about your compliance reminder service." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-success btn-lg px-5 py-3 rounded-pill"
                      style={{
                        background: 'linear-gradient(45deg, #25D366, #128C7E)',
                        border: 'none',
                        boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
                      }}
                    >
                      <i className="fab fa-whatsapp me-2"></i>
                      Start Chatting with Our AI Bot
                    </a>
                    <p className="text-muted mt-3 small">
                      <i className="fas fa-shield-alt me-1"></i>
                      No commitment required • Free consultation • Instant responses
                    </p>
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
