import React from 'react';

export function WelcomeSection() {
  return (
    <section className="welcome-area">
      <div className="welcome-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="Title-area">
                <h1>Welcome To Contract Easily</h1>
                <p>Use Online Agreement Templates to Create Contract in Minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-6 mx-auto">
            <div className="welcome-video-container text-center">
              <div className="video-wrapper">
                {/* YouTube Video Embed - Replace with your video URL */}
                <iframe
                  src="https://www.youtube.com/embed/X8PkkPiOOe4?start=20"
                  title="Contract Easily Demo Video"
                  style={{ border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Alternative: Direct Video File */}
                {/*
                <video controls>
                  <source src="/videos/contract-easily-demo.mp4" type="video/mp4" />
                  <source src="/videos/contract-easily-demo.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="asset-button text-center">
          <button
            onClick={() => window.location.href = '/agreements'}
            type="button"
            className="btn btn-default"
          >
            Explore List
          </button>
        </div>
      </div>
    </section>
  );
}
