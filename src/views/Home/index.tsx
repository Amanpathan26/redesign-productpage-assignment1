import React, { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
import InfoSection from './components/InfoSection';
import FeaturesGrid from './components/FeaturesGrid';
import ThemeProvider from '@/components/template/Theme';

const Home: React.FC = () => {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const FqRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const hcf = document.querySelector(".hcf-profile");
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop > lastScrollTop) {
        hcf?.classList.add("hcf-profile-fixed");
      } else {
        hcf?.classList.remove("hcf-profile-fixed");
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className='relative'>
        <HeroSection
          scrollToSection={scrollToSection}
          featuresRef={FqRef}
          contactRef={contactRef}
          aboutRef={aboutRef}
        />
        <div className='relative'>
          <FeaturesGrid />
        </div>
        <div className='relative' ref={aboutRef}>
          <InfoSection />
        </div>
        <div className='relative' ref={FqRef}>
          <HomeFAQs />
        </div>
        <div className='relative' ref={contactRef}>
          <ContactForm />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
