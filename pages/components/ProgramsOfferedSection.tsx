import { useEffect, useState } from 'react';

export default function ProgramsOfferedSection() {
  const programs = [
    {
      title: "Bachelor of Technology (B.Tech)",
      description: "A four-year undergraduate program that prepares students for a successful career in engineering.",
      duration: "4 Years",
      link: "/programs/btech"
    },
    {
      title: "Master of Business Administration (MBA)",
      description: "An advanced program designed for aspiring business leaders to enhance their managerial skills.",
      duration: "2 Years",
      link: "/programs/mba"
    },
    {
      title: "Bachelor of Business Administration (BBA)",
      description: "A comprehensive program focusing on fundamental business principles and practices.",
      duration: "3 Years",
      link: "/programs/bba"
    },
    {
      title: "Diploma in Computer Science",
      description: "A practical course that equips students with essential skills in computer science and technology.",
      duration: "3 Years",
      link: "/programs/diploma-cs"
    }
    // Add more programs as needed
  ];

  const [visibleCards, setVisibleCards] = useState(Array(programs.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.program-card');
      cards.forEach((card, index) => {
        const { top, bottom } = card.getBoundingClientRect();
        if (top < window.innerHeight && bottom > 0) {
          setVisibleCards((prev) => {
            const newVisibleCards = [...prev];
            newVisibleCards[index] = true; // Set the card at the current index to visible
            return newVisibleCards;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [programs.length]);

  return (
    <section className="py-16 bg-gray-50" id="programs">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-[#316b9e] font-bold text-center mb-4">Programs Offered</h2>
        <p className="text-lg text-center text-gray-700 mb-8">
          Explore our diverse range of programs designed to equip students with the skills and knowledge for a successful career.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`program-card bg-white p-6 rounded-lg shadow-lg transition-all duration-500 transform ${
                visibleCards[index] ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
            >
              <h3 className="text-2xl text-[#316b9e] font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-700 mb-4">{program.description}</p>
              <p className="text-gray-700 mb-4"><strong>Duration:</strong> {program.duration}</p>
              <a 
                href={program.link} 
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-lg font-semibold transition duration-300"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
