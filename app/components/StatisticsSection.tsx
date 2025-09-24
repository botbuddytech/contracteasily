import React, { useState, useEffect, useRef } from 'react';

export function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const targets = [500, 10000, 50, 25000];
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targets.map(target => target / steps);

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounters(prev =>
        prev.map((_, index) =>
          Math.min(Math.floor(increment[index] * currentStep), targets[index])
        )
      );

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, duration / steps);
  };
  const stats = [
    {
      iconClass: 'fa fa-file-alt',
      number: '500',
      label: 'Legal Documents'
    },
    {
      iconClass: 'fa fa-users',
      number: '10,000',
      label: 'Happy Clients'
    },
    {
      iconClass: 'fa fa-briefcase',
      number: '50',
      label: 'Expert Lawyers'
    },
    {
      iconClass: 'fa fa-edit',
      number: '25,000',
      label: 'Documents Created'
    }
  ];

  return (
    <div ref={sectionRef} className="countdown mt-5">
      <div className="container-fluid">
        <div className="countdown-inner clearfix">
          {stats.map((stat, index) => (
            <div key={index} className="col-xs-12 col-sm-6 col-md-3 no-padding">
              <div className="countdown-content">
                <h2>
                  <span className="counter">
                    {isVisible ? counters[index].toLocaleString() : '0'}
                  </span>+
                </h2>
                <p>{stat.label}</p>
              </div>
              <div className="countdown-icon">
                <i className={stat.iconClass}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
