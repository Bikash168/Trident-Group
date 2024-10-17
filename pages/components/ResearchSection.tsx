// components/ResearchSection.js
import { useEffect, useState } from 'react';

export default function ResearchSection() {
  const researchAreas = [
    { title: "Renewable Energy", description: "Innovative solutions for sustainable energy." },
    { title: "Artificial Intelligence", description: "Cutting-edge research in AI and machine learning." },
    { title: "Environmental Studies", description: "Research focused on environmental conservation." },
    { title: "Data Science", description: "Data-driven decision-making and analysis." }
  ];

  const featuredProjects = [
    {
      title: "Project SolarX",
      description: "A project aimed at developing advanced solar energy technologies.",
      facultyLead: "Dr. John Smith",
      link: "/research/solar-x"
    },
    {
      title: "AI for Health",
      description: "Utilizing AI to improve healthcare outcomes and patient monitoring.",
      facultyLead: "Dr. Jane Doe",
      link: "/research/ai-for-health"
    },
    {
      title: "Eco-Friendly Materials",
      description: "Researching sustainable materials for construction and packaging.",
      facultyLead: "Prof. Alice Johnson",
      link: "/research/eco-friendly-materials"
    },
    {
      title: "Data Analytics for Business",
      description: "Leveraging data analytics to drive business innovation.",
      facultyLead: "Dr. Mark Lee",
      link: "/research/data-analytics"
    }
  ];

  const [visibleAreas, setVisibleAreas] = useState(Array(researchAreas.length).fill(false));
  const [visibleProjects, setVisibleProjects] = useState(Array(featuredProjects.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const areas = document.querySelectorAll('.research-area');
      const projects = document.querySelectorAll('.featured-project');
      
      areas.forEach((area, index) => {
        const { top, bottom } = area.getBoundingClientRect();
        if (top < window.innerHeight && bottom > 0) {
          setVisibleAreas((prev) => {
            const newVisibleAreas = [...prev];
            newVisibleAreas[index] = true; // Set the area at the current index to visible
            return newVisibleAreas;
          });
        }
      });

      projects.forEach((project, index) => {
        const { top, bottom } = project.getBoundingClientRect();
        if (top < window.innerHeight && bottom > 0) {
          setVisibleProjects((prev) => {
            const newVisibleProjects = [...prev];
            newVisibleProjects[index] = true; // Set the project at the current index to visible
            return newVisibleProjects;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [researchAreas.length, featuredProjects.length]);

  return (
    <section className="py-16 bg-orange-50" id="research">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-[#316b9e] font-bold text-center mb-4">Research at Trident</h2>
        <p className="text-lg text-center mb-8">
          Our research initiatives focus on solving real-world challenges through innovation and collaboration.
        </p>
        
        {/* Research Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className={`research-area bg-amber-900 p-6 rounded-lg shadow-md transition-transform duration-500 transform ${
                visibleAreas[index] ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
            >
              <h3 className="text-white text-2xl font-semibold mb-2">{area.title}</h3>
              <p className="text-white">{area.description}</p>
            </div>
          ))}
        </div>
  
        <h3 className="text-3xl text-[#316b9e] font-bold text-center mb-4">Featured Research Projects</h3>
        
        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`featured-project bg-amber-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform ${
                visibleProjects[index] ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
            >
              <h4 className="text-xl text-white font-semibold mb-2">{project.title}</h4>
              <p className="text-white mb-4">{project.description}</p>
              <p className="text-white mb-4"><strong>Faculty Lead:</strong> {project.facultyLead}</p>
              <a 
                href={project.link} 
                className="bg-blue-400 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-lg font-semibold transition duration-300"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
  
        <div className="mt-12 text-center">
          <h4 className="text-2xl text-[#316b9e] font-bold mb-2">Get Involved in Research</h4>
          <p className="text-lg mb-4">
            Explore opportunities for internships and student projects in our research labs.
          </p>
          <a 
            href="/research/internships" 
            className="bg-blue-400 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
          >
            View Research Opportunities
          </a>
        </div>
      </div>
    </section>
  );
}
