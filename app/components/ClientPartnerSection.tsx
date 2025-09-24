import React from 'react';

export function ClientPartnerSection() {
  const partners = [
    {
      id: 1,
      name: "Startup",
      image: "/images/partner/partner1.png",
      alt: "Startup"
    },
    {
      id: 2,
      name: "Calcutta High Court",
      image: "/images/partner/partner2.png",
      alt: "Calcutta High Court"
    },
    {
      id: 3,
      name: "High Court of Delhi",
      image: "/images/partner/partner3.png",
      alt: "High Court of Delhi"
    },
    {
      id: 4,
      name: "Bar Council Of India",
      image: "/images/partner/partner4.png",
      alt: "Bar Council Of India"
    },
    {
      id: 5,
      name: "Ministry of Corporate Affairs",
      image: "/images/partner/partner5.png",
      alt: "Ministry of Corporate Affairs"
    },
    {
      id: 6,
      name: "Micro Small & Medium Enterprises",
      image: "/images/partner/partner6.png",
      alt: "Micro Small & Medium Enterprises"
    }
  ];

  return (
    <section className="section section-padding client-partner-section">
      <div className="container">
        <div className="partner-slider row">
          {partners.map((partner) => (
            <div key={partner.id} className="col">
              <div className="partner">
                <img 
                  src={partner.image} 
                  alt={partner.alt}
                  title={partner.name}
                />
                {/* <span className="hover-content">{partner.name}</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
