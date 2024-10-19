import { useEffect, useState } from 'react';
import styles from '../ProgramsOfferedSection.module.css'; // Ensure the correct path to your CSS module

const programs = [
  {
    title: "Bachelor of Technology (B.Tech)",
    description: "A four-year undergraduate program that prepares students for a successful career in engineering.",
    duration: "4 Years",
   
  },
  {
    title: "Master of Business Administration (MBA)",
    description: "An advanced program designed for aspiring business leaders to enhance their managerial skills.",
    duration: "2 Years",
   
  },
  {
    title: "Bachelor of Business Administration (BBA)",
    description: "A comprehensive program focusing on fundamental business principles and practices.",
    duration: "3 Years",
   
  },
  {
    title: "Master of Technology (M.Tech)",
    description: "A practical course that equips students with essential skills in computer science and technology.",
    duration: "2 Years",
    
  },
  {
    title: "Master in Public Health (MPH)",
    description: "A practical course that equips students with essential skills in computer science and technology.",
    duration: "2 Years",
    
  },
  {
    title: "Master of Social Work (MSW)",
    description: "A practical course that equips students with essential skills in computer science and technology.",
    duration: "2 Years",
    
  },
  {
    title: "Bachelor of Technology (B.Tech) in Biotechnology",
    description: "A practical course that equips students with essential skills in computer science and technology.",
    duration: "2 Years",
    
  },
  {
    title: "Bachelor of Science (Hons) in Biotechnology",
    description: "A practical course that equips students with essential skills in computer science and technology.",
    duration: "2 Years",
    
  },
  {
    title: "M.Sc. Biotechnology",
    description: "A practical course that equips students with essential skills in computer science and technology.",
    duration: "2 Years",
    
  },
  {
    title: "M.Sc. Applied Microbiology",
    description: "A practical course that equips students with essential skills in computer science and technology.",
    duration: "2 Years",
    
  },
  {
    title: "M.Sc. Bio-Informatics",
    description: "A practical course that equips students with essential skills in computer science and technology.",
    duration: "2 Years",
    
  },
  {
    title: "M.Sc. Environmental Science in Biotechnology",
    description: "A practical course that equips students with essential skills in computer science and technology.",
    duration: "2 Years",
    
  }
];

export default function ProgramsOfferedSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to automatically change the index every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % programs.length);
    }, 3000); // Change the time as needed (3000ms = 3 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);


  return (
    <section className="py-16 bg-gray-50" id="programs">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-[#316b9e] font-bold text-center mb-4">Programs Offered</h2>
        <div className={`${styles.carousel} overflow-hidden`}>
          <div className={`${styles.cardWrapper} flex transition-transform duration-500`} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {programs.map((program, index) => (
              <div key={index} className={`${styles.card} min-w-full flex-shrink-0`}>
                <h3 className="text-2xl text-[#316b9e] font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-700 mb-4">{program.description}</p>
                <p className="text-gray-700 mb-4"><strong>Duration:</strong> {program.duration}</p>
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
