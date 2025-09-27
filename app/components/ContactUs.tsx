import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function ContactUs() {
  const [formData, setFormData] = useState({
    ticketId: '',
    reason: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [showTicketTracker, setShowTicketTracker] = useState(false);
  const [ticketStatus, setTicketStatus] = useState('');

  const contactReasons = [
    'General Inquiry',
    'Technical Support',
    'Legal Document Help',
    'Account Issues',
    'Billing Questions',
    'Feature Request',
    'Bug Report',
    'Partnership Inquiry',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        ticketId: '',
        reason: '',
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTrackTicket = async () => {
    if (!formData.ticketId.trim()) {
      setTicketStatus('error');
      return;
    }

    setIsSubmitting(true);
    setTicketStatus('');

    try {
      // Simulate ticket tracking
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate different ticket statuses
      const statuses = [
        'Open - Your ticket is being reviewed by our support team.',
        'In Progress - Our team is working on resolving your issue.',
        'Pending Customer Response - We are waiting for additional information from you.',
        'Resolved - Your issue has been resolved. Please let us know if you need further assistance.',
        'Closed - This ticket has been closed. Please create a new ticket if you have additional questions.'
      ];
      
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      setTicketStatus(randomStatus);
    } catch (error) {
      setTicketStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-us-page">
      <Header />
      
      {/* Page Header */}
      <section className="page-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-padding">
                <div className="page-title-content text-center">
                  <h1>Contact Us</h1>
                  <p>Get in touch with our legal experts and support team</p>
                </div>
                <div className="breadcrumbs text-center">
                  <ul className="page-breadcrumbs">
                    <li><a href="/" title="Home">Home</a></li>
                    <li><a href="#" title="Current Page">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content-section">
        <div className="container">
          <div className="row">
            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="contact-form-wrapper">
                <div className="section-title">
                  <h2>Send us a Message</h2>
                  <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>

                {submitStatus === 'success' && (
                  <div className="alert alert-success">
                    <i className="fa fa-check-circle"></i>
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="alert alert-error">
                    <i className="fa fa-exclamation-circle"></i>
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="ticketId">Customer Ticket ID (Optional)</label>
                      <div className="ticket-input-group">
                        <input
                          type="text"
                          id="ticketId"
                          name="ticketId"
                          value={formData.ticketId}
                          onChange={handleInputChange}
                          placeholder="Enter your ticket ID if you have one"
                          className="form-control"
                        />
                        <button
                          type="button"
                          onClick={handleTrackTicket}
                          disabled={isSubmitting || !formData.ticketId.trim()}
                          className="btn btn-outline-primary btn-track-ticket"
                        >
                          {isSubmitting ? (
                            <i className="fa fa-spinner fa-spin"></i>
                          ) : (
                            <i className="fa fa-search"></i>
                          )}
                          Track
                        </button>
                      </div>
                      {ticketStatus && (
                        <div className={`ticket-status ${ticketStatus === 'error' ? 'error' : 'success'}`}>
                          <i className={`fa ${ticketStatus === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}`}></i>
                          {ticketStatus === 'error' ? 'Please enter a valid ticket ID to track.' : ticketStatus}
                        </div>
                      )}
                    </div>
                    
                    <div className="form-group col-md-6">
                      <label htmlFor="reason">Reason for Contact *</label>
                      <select
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleInputChange}
                        required
                        className="form-control"
                      >
                        <option value="">Select a reason</option>
                        {contactReasons.map((reason, index) => (
                          <option key={index} value={reason}>{reason}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                        className="form-control"
                      />
                    </div>
                    
                    <div className="form-group col-md-6">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email address"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your phone number"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Please describe your inquiry or issue in detail..."
                      className="form-control"
                    ></textarea>
                  </div>

                  <div className="form-submit">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary btn-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fa fa-spinner fa-spin"></i> Sending...
                        </>
                      ) : (
                        <>
                          <i className="fa fa-paper-plane"></i> Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-lg-4">
              <div className="contact-info-wrapper">
                <div className="contact-info">
                  <h3>Get in Touch</h3>
                  <p>We're here to help with all your legal document needs.</p>
                  
                  <div className="contact-details">
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="fa fa-map-marker"></i>
                      </div>
                      <div className="contact-text">
                        <h4>Address</h4>
                        <p>India</p>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="fa fa-phone"></i>
                      </div>
                      <div className="contact-text">
                        <h4>Phone</h4>
                        <p>+91-9669664421</p>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="fa fa-envelope"></i>
                      </div>
                      <div className="contact-text">
                        <h4>Email</h4>
                        <p>contracteasily@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="response-time">
                    <h4>Response Time</h4>
                    <p>We typically respond within 24 hours during business days.</p>
                  </div>

                  <div className="social-links">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                      <a href="https://www.facebook.com/profile.php?id=100063910427989" target="_blank" rel="noopener noreferrer" title="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://www.instagram.com/contracteasily/?hl=en" target="_blank" rel="noopener noreferrer" title="Instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/70979994/admin/dashboard/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
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
