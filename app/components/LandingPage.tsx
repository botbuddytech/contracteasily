import React from 'react';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { StatisticsSection } from './StatisticsSection';
import { WelcomeSection } from './WelcomeSection';
import { TestimonialsSection } from './TestimonialsSection';
import { BlogSection } from './BlogSection';
import { ClientPartnerSection } from './ClientPartnerSection';
import { Footer } from './Footer';

export function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <HeroSection />
      <StatisticsSection />
      <WelcomeSection />
      <TestimonialsSection />
      <BlogSection />
      <ClientPartnerSection />
      <Footer />
    </div>
  );
}
