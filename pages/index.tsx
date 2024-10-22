import { useEffect, useState, ReactNode } from 'react';
import Head from 'next/head';
import HeroSection from '../pages/components/HeroSection';
import AboutSection from '../pages/components/AboutSection';
import ProgramsOfferedSection from '../pages/components/ProgramsOfferedSection';
import NewsAndEventsSection from '../pages/components/NewsAndEventsSection';
import ResearchSection from '../pages/components/ResearchSection';
import TestimonialsSection from '../pages/components/TestimonialsSection';
import ContactSection from '../pages/components/ContactSection';
import Layout from '../pages/components/Layout'; // Imported layout
import AnimationSection from './components/AnimationSection';

interface MainLayoutProps {
  children: ReactNode; // Explicitly typing children as ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures components render only on the client
  }, []);

  if (!mounted) {
    return null; // Prevents rendering on the server
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Trident Group of Institutions</title>
      </Head>
      
      {/* Render the imported Layout component */}
      <Layout>
        <HeroSection />
        <AboutSection />
        <AnimationSection />
        <ProgramsOfferedSection />
        <NewsAndEventsSection />
        <ResearchSection />
        <TestimonialsSection />
        <ContactSection />
       
        {children} {/* Render any additional content passed as children */}
      </Layout>

      {/* Add some spacing and styling to the layout */}
      <style jsx>{`
        @media (max-width: 768px) {
          /* Adjust text sizes for smaller screens */
          h1 {
            font-size: 1.75rem; /* Smaller heading for mobile */
          }
          p {
            font-size: 0.875rem; /* Smaller paragraph text */
          }
          /* Additional adjustments can go here */
        }
      `}</style>
    </div>
  );
}
