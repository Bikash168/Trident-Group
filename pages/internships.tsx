import React from 'react';
import Layout from './components/Layout'; 

export default function InternshipsPage() {
  const internships = [
    {
      title: "Research Intern - Renewable Energy",
      description: "Assist in ongoing research projects related to renewable energy sources and sustainability.",
      requirements: "Students pursuing a degree in Environmental Science or Engineering.",
      duration: "6 months",
      applicationLink: "/research-intern-renewable-energy"
    },
    {
      title: "Data Science Intern",
      description: "Work with data analytics teams to analyze and visualize research data.",
      requirements: "Students studying Data Science, Statistics, or related fields.",
      duration: "3 months",
      applicationLink: "/data-science-intern"
    },
    {
      title: "AI Research Intern",
      description: "Contribute to AI-driven projects in healthcare and environmental studies.",
      requirements: "Background in Artificial Intelligence or Computer Science.",
      duration: "4 months",
      applicationLink: "/apply/ai-research-intern"
    },
    {
      title: "Environmental Studies Intern",
      description: "Participate in field studies and contribute to environmental conservation efforts.",
      requirements: "Students in Environmental Studies or related disciplines.",
      duration: "2 months",
      applicationLink: "/apply/environmental-studies-intern"
    }
  ];

  return (
    <Layout>
    <section className="py-16 bg-white" id="internships">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-[#316b9e] font-bold text-center mb-4">Research Internships</h2>
        <p className="text-lg text-center text-gray-700 mb-8">
          Explore internship opportunities that allow you to gain hands-on experience in research and development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform duration-500"
            >
              <h3 className="text-xl text-[#316b9e] font-semibold mb-2">{internship.title}</h3>
              <p className="text-gray-700 mb-4">{internship.description}</p>
              <p className="text-gray-500 mb-2"><strong>Requirements:</strong> {internship.requirements}</p>
              <p className="text-gray-500 mb-4"><strong>Duration:</strong> {internship.duration}</p>
              <a 
                href={internship.applicationLink} 
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-lg font-semibold transition duration-300"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Layout>
  );
}
