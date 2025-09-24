import React, { useState, useEffect } from 'react';

export function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "Create professional legal documents in minutes with our expert-crafted templates and using AI";

  useEffect(() => {
    if (isTyping && currentIndex < fullText.length) {
      // Variable typing speed for more natural effect
      const char = fullText[currentIndex];
      let delay = 50; // Base delay

      // Slower after punctuation
      if (char === ' ') delay = 100;
      if (char === ',') delay = 200;
      if (char === '.') delay = 300;

      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (currentIndex >= fullText.length) {
      setIsTyping(false);
      // Optional: restart animation after a pause
      setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
        setIsTyping(true);
      }, 4000); // Wait 4 seconds before restarting
    }
  }, [currentIndex, isTyping, fullText]);
  return (
    <div className="rev_slider_wrapper">
      <div id="slider1" className="rev_slider" data-version="5.0">
        <div className="slider-item" data-transition="parallaxtoright">
          {/* Main Background Image */}
          <div
            className="rev-slidebg"
            style={{
              backgroundImage: 'url(/images/bg-team.jpg)',
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100vh',
              position: 'relative'
            }}
          >
            {/* Dark Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1
            }}></div>

            {/* Content Layers */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'white',
              zIndex: 2,
              width: '90%',
              maxWidth: '800px'
            }}>
              <h1 style={{
                fontSize: '48px',
                fontWeight: 'bold',
                marginBottom: '20px',
                fontFamily: 'Raleway, sans-serif',
                lineHeight: '1.2'
              }}>
                Create Legal Agreements Easily 
              </h1>

              <p style={{
                fontSize: '18px',
                marginBottom: '40px',
                fontFamily: 'Open Sans, sans-serif',
                lineHeight: '1.6',
                textAlign: 'center',
                width: '100%',
                margin: '0 auto 40px auto',
                minHeight: '50px' // Prevent layout shift during typing
              }}>
                <span className={`typewriter-text ${!isTyping ? 'complete' : ''}`}>
                  {displayText}
                  <span className="typewriter-cursor">|</span>
                </span>
              </p>

              {/* Search Bar */}
              <div style={{
                marginBottom: '30px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <div className="hero-search-container">
                  <input
                    type="text"
                    placeholder="Search legal documents..."
                    className="hero-search-input"
                  />
                  <button className="hero-search-btn">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>

              <div style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '40px'
              }}>
                <button
                  className="btn btn-default"
                  style={{
                    padding: '15px 30px',
                    fontSize: '16px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    background: 'transparent',
                    border: '2px solid white',
                    color: 'white'
                  }}
                >
                  Most Used Legal Drafts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
