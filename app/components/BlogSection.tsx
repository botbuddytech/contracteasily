import React, { useState, useEffect } from 'react';

export function BlogSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const blogs = [
    {
      title: "Understanding Employment Contracts",
      excerpt: "Learn about the key components of employment contracts and how to protect your rights as an employee or employer.",
      image: "/images/bg-team.jpg",
      date: "March 15, 2024",
      slug: "understanding-employment-contracts"
    },
    {
      title: "Rental Agreement Best Practices",
      excerpt: "Essential tips for creating comprehensive rental agreements that protect both landlords and tenants.",
      image: "/images/bg-team.jpg",
      date: "March 10, 2024",
      slug: "rental-agreement-best-practices"
    },
    {
      title: "Business Partnership Agreements",
      excerpt: "Key considerations when drafting partnership agreements to ensure smooth business operations.",
      image: "/images/bg-team.jpg",
      date: "March 5, 2024",
      slug: "business-partnership-agreements"
    },
    {
      title: "Legal Document Templates Guide",
      excerpt: "A comprehensive guide to choosing and customizing legal document templates for your needs.",
      image: "/images/bg-team.jpg",
      date: "February 28, 2024",
      slug: "legal-document-templates-guide"
    },
    {
      title: "Contract Law Fundamentals",
      excerpt: "Essential principles of contract law that every business owner and individual should understand.",
      image: "/images/bg-team.jpg",
      date: "February 20, 2024",
      slug: "contract-law-fundamentals"
    },
    {
      title: "Digital Signature Guidelines",
      excerpt: "Everything you need to know about digital signatures and their legal validity in modern contracts.",
      image: "/images/bg-team.jpg",
      date: "February 15, 2024",
      slug: "digital-signature-guidelines"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxSlides = blogs.length - 3; // Show 3 slides at once
        return prev >= maxSlides ? 0 : prev + 1;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, blogs.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlides = blogs.length - 3; // Show 3 slides at once
      return prev >= maxSlides ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlides = blogs.length - 3; // Show 3 slides at once
      return prev <= 0 ? maxSlides : prev - 1;
    });
  };

  const goToSlide = (index: number) => {
    const maxSlides = blogs.length - 3; // Show 3 slides at once
    setCurrentSlide(Math.min(index, maxSlides));
  };

  return (
    <section className="testimonial-area home-2-testimonial-area pt-5">
      <div className="welcome-title-area">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="Title-area">
                <h2>Our Latest Blogs</h2>
                <p>
                  Follow Contract Easily latest news and articles which focuses exclusively on civil matters, 
                  general civil law for businesses, individuals, and also new updates.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="asset-button btn-text-left text-right top-margin">
                <button 
                  onClick={() => window.location.href = '/blogs'} 
                  type="button" 
                  className="btn btn-default"
                >
                  View All Blogs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-content-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-slider-container">
                {/* Slider Wrapper */}
                <div
                  className="blog-slider-wrapper"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <div
                    className="blog-slider-track"
                    style={{
                      transform: `translateX(-${currentSlide * (100 / blogs.length)}%)`,
                      transition: 'transform 0.5s ease-in-out'
                    }}
                  >
                    {blogs.map((blog, index) => (
                      <div key={index} className="blog-slide">
                        <div className="t-b-details">
                          <div className="t-b-img">
                            <a href={`/blog/${blog.slug}`}>
                              <img
                                src={blog.image}
                                className="img-responsive"
                                alt={blog.title}
                                title={blog.title}
                              />
                            </a>
                          </div>
                          <div className="t-b-content">
                            <h4>
                              <a href={`/blog/${blog.slug}`} title={blog.title}>
                                {blog.title}
                              </a>
                            </h4>
                            <p>{blog.excerpt}</p>
                            <div className="t-b-date">
                              <span>{blog.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    className="blog-slider-nav blog-slider-prev"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                  >
                    <i className="fa fa-chevron-left"></i>
                  </button>
                  <button
                    className="blog-slider-nav blog-slider-next"
                    onClick={nextSlide}
                    aria-label="Next slide"
                  >
                    <i className="fa fa-chevron-right"></i>
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="blog-slider-dots">
                  {Array.from({ length: blogs.length - 2 }, (_, index) => (
                    <button
                      key={index}
                      className={`blog-slider-dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
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
