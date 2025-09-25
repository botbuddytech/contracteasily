import React, { useState, useEffect, useRef } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Chatbot } from './Chatbot';

interface AgreementPageProps {
  agreementData: {
    title: string;
    category: string;
    description: string;
    videoUrl: string;
    overview: string;
    keyFeatures: string[];
    stepByStepGuide: string[];
    importantClauses: string[];
    faqs: { question: string; answer: string }[];
    relatedAgreements: { title: string; url: string }[];
    iframeUrl: string;
  };
}

export function AgreementPage({ agreementData }: AgreementPageProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const [isSticky, setIsSticky] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [tocWidth, setTocWidth] = useState(0);
  const tocRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tocContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (tocRef.current && tocContainerRef.current && window.innerWidth > 992) {
        const tocContainer = tocContainerRef.current;
        const tocElement = tocRef.current;

        // Get the container's position and dimensions
        const containerRect = tocContainer.getBoundingClientRect();
        const containerTop = containerRect.top + window.pageYOffset;

        // Header height (adjust based on your header)
        const headerHeight = 80;
        const stickyOffset = headerHeight + 40; // Increased offset for better spacing

        // Calculate when to make sticky
        const scrollTop = window.pageYOffset;
        const shouldBeSticky = scrollTop > (containerTop - stickyOffset);

        // Calculate bottom boundary (end of content area)
        const contentArea = document.querySelector('.agreement-content-area');
        const contentBottom = contentArea ?
          contentArea.getBoundingClientRect().top + window.pageYOffset + contentArea.offsetHeight - 100 :
          Infinity;

        const tocHeight = tocElement.offsetHeight;
        const maxStickyPosition = contentBottom - tocHeight - stickyOffset;
        const shouldStopSticky = scrollTop > maxStickyPosition;

        setIsSticky(shouldBeSticky && !shouldStopSticky);

        // Update width for sticky positioning
        if (shouldBeSticky && !shouldStopSticky) {
          setTocWidth(containerRect.width);
        }
      } else {
        setIsSticky(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setIsSticky(false);
      }
      handleScroll(); // Recalculate on resize
    };

    // Initial calculation
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const handleSectionTracking = () => {
      const sections = ['overview', 'key-features', 'step-guide', 'important-clauses', 'preview', 'faq'];
      const scrollPosition = window.pageYOffset + 150; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleSectionTracking);
    handleSectionTracking(); // Initial call

    return () => window.removeEventListener('scroll', handleSectionTracking);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="agreement-page">
      <Header />

      {/* Page Title Section */}
      <section className="page-title-area attorney-page-title-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-padding">
                <div className="page-title-content text-center">
                  <h1>{agreementData.title}</h1>
                  <p className="agreement-description">{agreementData.description}</p>
                </div>
                <div className="breadcrumbs text-center">
                  <ul className="page-breadcrumbs">
                    <li><a href="/">Home</a></li>
                    <li><a href="/agreements">Agreements</a></li>
                    <li><a href={`/agreements/${agreementData.category.toLowerCase()}`}>{agreementData.category}</a></li>
                    <li>{agreementData.title}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Action Section */}
      <section className="agreement-hero-actions">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="hero-action-buttons">
                <button className="btn btn-primary btn-lg" onClick={() => scrollToSection('preview')}>
                  <i className="fa fa-eye"></i> View Agreement
                </button>
                <button className="btn btn-default btn-lg">
                  <i className="fa fa-download"></i> Download Now
                </button>
                <button className="btn btn-default btn-lg">
                  <i className="fa fa-robot"></i> AI Assistant
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="agreement-video-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6 mx-auto">
              <div className="video-container">
                <div className="video-wrapper">
                  <iframe 
                    src={agreementData.videoUrl}
                    title={`${agreementData.title} Explanation Video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-caption">
                  <h3>Understanding {agreementData.title}</h3>
                  <p>Watch this comprehensive guide to understand all aspects of this agreement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="agreement-content-area">
        <div className="container">
          <div className="row">
            {/* Table of Contents - Sticky */}
            <div className="col-md-3" ref={tocContainerRef}>
              {/* Placeholder to prevent content jump when sticky */}
              {isSticky && <div style={{ height: `${tocRef.current?.offsetHeight || 0}px` }} />}
              <div
                ref={tocRef}
                className={`table-of-contents ${isSticky ? 'sticky' : ''}`}
                style={isSticky ? { width: `${tocWidth}px` } : {}}
              >
                <h4>Table of Contents</h4>
                <ul className="toc-list">
                  <li>
                    <a 
                      href="#overview" 
                      className={activeSection === 'overview' ? 'active' : ''}
                      onClick={(e) => { e.preventDefault(); scrollToSection('overview'); }}
                    >
                      Overview
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#key-features" 
                      className={activeSection === 'key-features' ? 'active' : ''}
                      onClick={(e) => { e.preventDefault(); scrollToSection('key-features'); }}
                    >
                      Key Features
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#step-guide" 
                      className={activeSection === 'step-guide' ? 'active' : ''}
                      onClick={(e) => { e.preventDefault(); scrollToSection('step-guide'); }}
                    >
                      Step-by-Step Guide
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#important-clauses" 
                      className={activeSection === 'important-clauses' ? 'active' : ''}
                      onClick={(e) => { e.preventDefault(); scrollToSection('important-clauses'); }}
                    >
                      Important Clauses
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#preview" 
                      className={activeSection === 'preview' ? 'active' : ''}
                      onClick={(e) => { e.preventDefault(); scrollToSection('preview'); }}
                    >
                      Agreement Preview
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#faq" 
                      className={activeSection === 'faq' ? 'active' : ''}
                      onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Content Area */}
            <div className="col-md-9">
              <div ref={contentRef} className="agreement-content">
                
                {/* Overview Section */}
                <section id="overview" className="content-section">
                  <h2>Overview</h2>
                  <div className="content-text">
                    <p>{agreementData.overview}</p>
                  </div>
                </section>

                {/* Key Features Section */}
                <section id="key-features" className="content-section">
                  <h2>Key Features</h2>
                  <div className="content-text">
                    <ul className="feature-list">
                      {agreementData.keyFeatures.map((feature, index) => (
                        <li key={index}>
                          <i className="fa fa-check-circle"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* Step-by-Step Guide Section */}
                <section id="step-guide" className="content-section">
                  <h2>Step-by-Step Guide</h2>
                  <div className="content-text">
                    <ol className="step-list">
                      {agreementData.stepByStepGuide.map((step, index) => (
                        <li key={index}>
                          <span className="step-number">{index + 1}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </section>

                {/* Important Clauses Section */}
                <section id="important-clauses" className="content-section">
                  <h2>Important Clauses</h2>
                  <div className="content-text">
                    <div className="clauses-grid">
                      {agreementData.importantClauses.map((clause, index) => (
                        <div key={index} className="clause-item">
                          <div className="clause-icon">
                            <i className="fa fa-gavel"></i>
                          </div>
                          <div className="clause-content">
                            <p>{clause}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Agreement Preview Section */}
                <section id="preview" className="content-section">
                  <h2>Agreement Preview</h2>
                  <div className="content-text">
                    <p>Review the complete agreement document below. This is a secure, view-only preview.</p>
                    <div className="iframe-container">
                      <iframe 
                        src={agreementData.iframeUrl}
                        title={`${agreementData.title} Preview`}
                        className="agreement-iframe"
                        sandbox="allow-same-origin"
                      ></iframe>
                    </div>
                    <div className="preview-actions">
                      <button className="btn btn-primary">
                        <i className="fa fa-download"></i> Download Word
                      </button>
                      <button className="btn btn-primary">
                        <i className="fa fa-file-pdf"></i> Download PDF
                      </button>
                      <button className="btn btn-default">
                        <i className="fa fa-robot"></i> AI Assistant
                      </button>
                      <button className="btn btn-default">
                        <i className="fa fa-user-tie"></i> Lawyer Help
                      </button>
                    </div>
                  </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="content-section">
                  <h2>Frequently Asked Questions</h2>
                  <div className="content-text">
                    <div className="faq-container">
                      {agreementData.faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${openFaqIndex === index ? 'active' : ''}`}>
                          <div
                            className="faq-question"
                            onClick={() => toggleFaq(index)}
                          >
                            <h4>{faq.question}</h4>
                            <i className="fa fa-chevron-down"></i>
                          </div>
                          {openFaqIndex === index && (
                            <div className="faq-answer">
                              <p>{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Agreements Section */}
      <section className="related-agreements-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-title text-center">Related Agreements</h2>
              <div className="related-agreements-grid">
                {agreementData.relatedAgreements.map((agreement, index) => (
                  <div key={index} className="related-agreement-card">
                    <div className="card-content">
                      <h4>{agreement.title}</h4>
                      <a href={agreement.url} className="btn btn-default btn-sm">
                        View Agreement <i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
}
