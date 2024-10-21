import { useEffect, useState } from 'react';
import styles from '../ProgramsOfferedSection.module.css'; // Ensure the correct path to your CSS module

const programs = [
  {
    title: "Bachelor of Technology (B.Tech)",
    description: "A four-year undergraduate program that prepares students for a successful career in engineering, offering specializations in fields such as Computer Science, Mechanical, Electrical, Civil, and more.",
    duration: "4 Years",
    affiliation: "Biju Patnaik University of Technology (BPUT)",
  },
  {
    title: "Master of Business Administration (MBA)",
    description: "An advanced program designed for aspiring business leaders to enhance their managerial skills, with specializations in Marketing, Finance, Human Resources, Operations, and International Business.",
    duration: "2 Years",
    affiliation: "Biju Patnaik University of Technology (BPUT)",
  },
  {
    title: "Bachelor of Business Administration (BBA)",
    description: "A comprehensive program focusing on fundamental business principles and practices, covering areas such as Accounting, Management, Economics, Marketing, and Organizational Behavior.",
    duration: "3 Years",
    affiliation: "Approved by AICTE and Govt. of Odisha. Affiliated to Utkal University",
  },
  {
    title: "Master of Technology (M.Tech)",
    description: "A practical course that equips students with essential skills in computer science and technology, with options to specialize in Software Engineering, Data Science, Artificial Intelligence, and more.",
    duration: "2 Years",
    affiliation: "Biju Patnaik University of Technology (BPUT)",
  },
  {
    title: "Master in Public Health (MPH)",
    description: "A practical course that equips students with essential skills in public health, including epidemiology, healthcare management, policy-making, and global health challenges.",
    duration: "2 Years",
    affiliation: "Approved by AICTE and Govt. of Odisha. Affiliated to Utkal University",
  },
  {
    title: "Master of Social Work (MSW)",
    description: "A practical course that equips students with essential skills in social work, emphasizing social justice, community organization, mental health, and child welfare.",
    duration: "2 Years",
    affiliation: "Approved by AICTE and Govt. of Odisha. Affiliated to Utkal University",
  },
  {
    title: "Bachelor of Technology (B.Tech) in Biotechnology",
    description: "A program focusing on the applications of biotechnology in various fields, including genetic engineering, molecular biology, bioinformatics, and bioprocess technology.",
    duration: "4 Years",
    affiliation: "Biju Patnaik University of Technology (BPUT)",
  },
  {
    title: "Bachelor of Science (Hons) in Biotechnology",
    description: "A comprehensive program covering the fundamental principles of biotechnology, with a focus on microbiology, genetics, molecular biology, and laboratory techniques.",
    duration: "3 Years",
    affiliation: "Approved by AICTE and Govt. of Odisha. Affiliated to Utkal University",
  },
  {
    title: "M.Sc. Biotechnology",
    description: "An advanced study of biotechnology and its applications, exploring genetic engineering, stem cell research, pharmaceutical development, and industrial microbiology.",
    duration: "2 Years",
    affiliation: "Approved by AICTE and Govt. of Odisha. Affiliated to Utkal University",
  },
  {
    title: "M.Sc. Applied Microbiology",
    description: "Focuses on the applications of microbiology in various industries, including pharmaceuticals, food production, agriculture, and environmental management.",
    duration: "2 Years",
    affiliation: "Approved by AICTE and Govt. of Odisha. Affiliated to Utkal University",
  },
  {
    title: "M.Sc. Bio-Informatics",
    description: "A multidisciplinary approach to understanding biological data, combining computer science, statistics, and biology to analyze and interpret complex datasets.",
    duration: "2 Years",
    affiliation: "Approved by AICTE and Govt. of Odisha. Affiliated to Utkal University",
  },
  {
    title: "M.Sc. Environmental Science in Biotechnology",
    description: "Explores the environmental implications of biotechnology, focusing on sustainable development, bioremediation, environmental policy, and ecosystem management.",
    duration: "2 Years",
    affiliation: "Approved by AICTE and Govt. of Odisha. Affiliated to Utkal University",
  },
];

export default function ProgramsOfferedSection() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start from the first real slide
  const [isTransitioning, setIsTransitioning] = useState(true);

  const totalSlides = programs.length + 2; // Including duplicate slides

  // Function to automatically change the index every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Adjust timing as needed

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex === totalSlides) {
        return 1; // Reset to the first real slide
      }
      return nextIndex;
    });
    setIsTransitioning(true);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setCurrentIndex(programs.length);
    } else if (currentIndex === totalSlides - 1) {
      setCurrentIndex(1);
    }
    setIsTransitioning(false);
  };

  return (
    <section className="py-16 bg-gray-50" id="programs">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-[#316b9e] font-bold text-center mb-4">Programs Offered</h2>
        <div className={`${styles.carousel} overflow-hidden`}>
          <div
            className={`${styles.cardWrapper} flex transition-transform duration-500`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? 'transform 0.5s ease' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            <div className={`${styles.card} min-w-full flex-shrink-0 px-4`}>
              <h3 className="text-2xl text-[#316b9e] font-semibold mb-2">{programs[programs.length - 1].title}</h3>
              <p className="text-gray-700 mb-4">{programs[programs.length - 1].description}</p>
              <p className="text-gray-700"><strong>Duration:</strong> {programs[programs.length - 1].duration}</p>
              <p className="text-gray-700"><strong>Affiliation:</strong> {programs[programs.length - 1].affiliation}</p>
            </div>
            {programs.map((program, index) => (
              <div key={index} className={`${styles.card} min-w-full flex-shrink-0 px-4`}>
                <h3 className="text-2xl text-[#316b9e] font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-700 mb-4">{program.description}</p>
                <p className="text-gray-700"><strong>Duration:</strong> {program.duration}</p>
                <p className="text-gray-700"><strong>Affiliation:</strong> {program.affiliation}</p> {/* Corrected from programs.affiliation */}
              </div>
            ))}
            <div className={`${styles.card} min-w-full flex-shrink-0 px-4`}>
              <h3 className="text-2xl text-[#316b9e] font-semibold mb-2">{programs[0].title}</h3>
              <p className="text-gray-700 mb-4">{programs[0].description}</p>
              <p className="text-gray-700"><strong>Duration:</strong> {programs[0].duration}</p>
              <p className="text-gray-700"><strong>Affiliation:</strong> {programs[0].affiliation}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
