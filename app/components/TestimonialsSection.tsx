import React from 'react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      designation: "Business Owner",
      content: "Contract Easily made it so simple to create professional agreements. The templates are comprehensive and easy to customize.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      designation: "Freelancer",
      content: "I've been using Contract Easily for all my client agreements. It saves me hours of work and ensures I don't miss important clauses.",
      rating: 5
    },
    {
      name: "Amit Patel",
      designation: "Startup Founder",
      content: "The legal expertise behind these templates is evident. Contract Easily has been instrumental in our business operations.",
      rating: 5
    }
  ];

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

      <div className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonial-slider">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-item">
                    <div className="owl-testimonial-content home-3-testimonial-slider">
                      <div className="testimonial-content">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
