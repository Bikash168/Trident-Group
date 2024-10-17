// components/AboutSection.js
import { useEffect, useState } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();

        // Check if the section is in view
        if (top < window.innerHeight && bottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="py-16 bg-orange-50" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-[#316b9e] font-bold text-center mb-4">About Us</h2>
        <p className="text-lg text-center mb-8">
          Trident Group of Institutions is committed to empowering students through quality education, innovative teaching methods, and a nurturing environment.
        </p>
        <div className={`flex flex-col md:flex-row items-center transition-transform duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Text Content */}
          <div className="md:w-1/2 md:pr-8">
            <h3 className="text-2xl text-[#316b9e] font-semibold mb-4">Our Vision</h3>
            <p className="mb-4">
              Our mission is to provide a holistic education that fosters critical thinking, creativity, and personal growth. We aim to prepare our students for the challenges of tomorrow and instill in them the values of integrity and excellence.
            </p>
            <p className="mb-4">
              With state-of-the-art facilities, experienced faculty, and a vibrant campus life, we strive to create a supportive community where students can thrive academically and personally.
            </p>
            <a href="#programs" className="bg-blue-400 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
              Learn More About Our Programs
            </a>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="/images/path-to-about-image.jpg" alt="About Trident Group" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
