// components/HeroSection.js
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section 
      className="relative w-full h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('../images/hero-image.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Content */}
      <div 
        className={`relative flex flex-col items-center justify-center h-full text-white text-center px-4 transition-transform duration-700 ${isVisible ? 'translate-y-0' : 'translate-y-10 opacity-0'}`}
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          EMPOWERING MINDS
          <br />
          THROUGH POWER OF EDUCATION
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Join us in shaping the future of education and innovation.
        </p>
        <div className="mt-8">
          <a 
            href="#programs" 
            className="bg-blue-400 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
          >
            Explore Programs
          </a>
          <a 
            href="#about" 
            className="ml-4 bg-transparent border-2 border-white hover:bg-white hover:text-blue-400 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
