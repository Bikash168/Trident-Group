// components/TestimonialsSection.js
import { useEffect, useState } from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ananya Patra",
      position: "B.Tech Student, 2024",
      text: "Studying at Trident has been a transformative experience. The faculty are incredibly supportive, and the hands-on projects have prepared me for the real world.",
      image: "/images/ananya.jpg"
    },
    {
      name: "Rajesh Kumar",
      position: "M.Tech Student, 2023",
      text: "The research opportunities at Trident are unmatched. I had the chance to work on groundbreaking projects that expanded my knowledge and skills.",
      image: "/images/rajesh.jpg"
    },
    {
      name: "Pooja Sharma",
      position: "Alumna, 2022",
      text: "Trident not only provided me with quality education but also fostered my personal growth. The community here is welcoming and inspiring.",
      image: "/images/pooja.jpg"
    },
    {
      name: "Suresh Mohanty",
      position: "Faculty Member",
      text: "At Trident, we prioritize student engagement and innovative teaching methods. It's rewarding to see our students thrive and make a difference.",
      image: "/images/suresh.jpg"
    }
  ];

  const [visibleTestimonials, setVisibleTestimonials] = useState(Array(testimonials.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const testimonialsElements = document.querySelectorAll('.testimonial-card');
      testimonialsElements.forEach((testimonial, index) => {
        const { top, bottom } = testimonial.getBoundingClientRect();
        if (top < window.innerHeight && bottom > 0) {
          setVisibleTestimonials((prev) => {
            const newVisible = [...prev];
            newVisible[index] = true; // Set the testimonial at the current index to visible
            return newVisible;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-amber-900" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-white font-bold text-center mb-4">What Our Students Say</h2>
        <p className="text-lg text-white text-center mb-8">
          Our students and alumni share their experiences and insights about studying at Trident.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card bg-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform ${
                visibleTestimonials[index] ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl text-[#316b9e] font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h4 className="text-2xl text-white font-bold mb-2">Join Our Community</h4>
          <p className="text-lg mb-4 text-white">
            Discover the opportunities waiting for you at Trident Group of Institutions.
          </p>
          <a 
            href="/apply" 
            className="bg-blue-400 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
