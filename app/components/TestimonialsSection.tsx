import React, { useState, useEffect } from 'react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      designation: "Business Owner",
      content: "Contract Easily made it so simple to create professional agreements. The templates are comprehensive and easy to customize.",
      rating: 5,
      videoId: "X8PkkPiOOe4", // Replace with actual client video ID
      videoTitle: "Rajesh Kumar - Business Owner Testimonial"
    },
    {
      name: "Priya Sharma",
      designation: "Freelancer",
      content: "I've been using Contract Easily for all my client agreements. It saves me hours of work and ensures I don't miss important clauses.",
      rating: 5,
      videoId: "X8PkkPiOOe4", // Replace with actual client video ID
      videoTitle: "Priya Sharma - Freelancer Testimonial"
    },
    {
      name: "Amit Patel",
      designation: "Startup Founder",
      content: "The legal expertise behind these templates is evident. Contract Easily has been instrumental in our business operations.",
      rating: 5,
      videoId: "X8PkkPiOOe4", // Replace with actual client video ID
      videoTitle: "Amit Patel - Startup Founder Testimonial"
    },
    {
      name: "Sneha Gupta",
      designation: "Legal Consultant",
      content: "The quality of legal documents is outstanding. Contract Easily has streamlined my practice and improved client satisfaction.",
      rating: 5,
      videoId: "X8PkkPiOOe4", // Replace with actual client video ID
      videoTitle: "Sneha Gupta - Legal Consultant Testimonial"
    },
    {
      name: "Vikram Singh",
      designation: "Real Estate Developer",
      content: "From property agreements to vendor contracts, Contract Easily covers all our legal documentation needs efficiently.",
      rating: 5,
      videoId: "X8PkkPiOOe4", // Replace with actual client video ID
      videoTitle: "Vikram Singh - Real Estate Developer Testimonial"
    },
    {
      name: "Anita Desai",
      designation: "HR Manager",
      content: "Employment contracts and HR policies are now so much easier to create. The templates are legally sound and comprehensive.",
      rating: 5,
      videoId: "X8PkkPiOOe4", // Replace with actual client video ID
      videoTitle: "Anita Desai - HR Manager Testimonial"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="contact-us home-3-contact-us">
      <div className="welcome-title-area">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="Title-area contact-title">
                <h3>People Say</h3>
                <h2>Clients Testimonials</h2>
                <p>
                  See what our clients say about us, we have been known for doing what we says, 
                  aiming to bring favourable results for its customers as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-slider-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonial-slider-container">
                {/* Slider Wrapper */}
                <div className="testimonial-slider-wrapper">
                  <div
                    className="testimonial-slides"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                      <div key={slideIndex} className="testimonial-slide-group">
                        {testimonials
                          .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                          .map((testimonial, cardIndex) => (
                            <div key={slideIndex * cardsPerSlide + cardIndex} className="testimonial-card">
                              <div className="testimonial-content">
                                {/* Individual Client Video */}
                                <div className="testimonial-video">
                                  <div className="video-wrapper">
                                    <iframe
                                      src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                                      title={testimonial.videoTitle}
                                      style={{ border: 'none' }}
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                    ></iframe>
                                  </div>
                                </div>

                                {/* Testimonial Text */}
                                <div className="testimonial-text">
                                  <p>"{testimonial.content}"</p>
                                  <div className="testimonial-author">
                                    <h4>{testimonial.name}</h4>
                                    <span>{testimonial.designation}</span>
                                    <div className="rating">
                                      {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="star">⭐</span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button className="slider-nav prev" onClick={prevSlide}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className="slider-nav next" onClick={nextSlide}>
                  <i className="fas fa-chevron-right"></i>
                </button>

                {/* Dots Indicator */}
                <div className="slider-dots">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
