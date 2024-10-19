// pages/programs.tsx
import Head from 'next/head';
import Layout from './components/Layout'; // Import your Layout component
import { useEffect } from 'react';

export default function Programs() {
  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Open+Sans:wght@300;400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Programs - Trident Group of Institutions</title>
        <meta name="description" content="Explore the diverse programs offered at Trident Group of Institutions." />
      </Head>

      <section className="py-16 bg-gradient-to-b from-[#f0f4f8] to-[#ffffff]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl text-[#316b9e] font-bold text-center mb-8 transition transform duration-500 hover:scale-105 animate__animated animate__fadeIn">Our Programs</h1>

          <h2 className="text-3xl text-[#316b9e] font-semibold text-center mb-12 animate__animated animate__fadeIn">Explore Our Diverse Offerings</h2>

          {/* Engineering Courses */}
          <div className="mb-16">
            <h3 className="text-3xl text-[#316b9e] font-semibold text-center mb-8">Engineering Courses</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Bachelor of Technology (B.Tech) Card */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-4 transition transform duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs">
                <h3 className="text-lg text-[#316b9e] font-semibold mb-2">Bachelor of Technology (B.Tech)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  The B.Tech program offers comprehensive training in various engineering disciplines, preparing students for innovative careers in technology.
                </p>
                <p className="text-sm text-gray-700 mb-2"><strong>Streams Offered:</strong></p>
                <ul className="list-disc ml-5 text-sm text-gray-700 mb-2">
                  <li>Biotechnology</li>
                  <li>Civil Engineering</li>
                  <li>Computer Science and Engineering</li>
                  <li>Computer Science and Engineering (Artificial Intelligence and Machine Learning)</li>
                  <li>Computer Science and Engineering (Data Science)</li>
                  <li>Computer Science and Technology</li>
                  <li>Computer Science and Information Technology</li>
                  <li>Electrical and Electronics Engineering</li>
                  <li>Electronics and Telecommunication Engineering</li>
                  <li>Electronics Engineering (VLSI Design Technology)</li>
                  <li>Mechanical Engineering</li>
                </ul>
                <p className="text-sm text-gray-700 mb-2"><strong>Key Skills:</strong> Engineering fundamentals, software development, problem-solving.</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Affiliation:</strong> Biju Patnaik University of Technology (BPUT)</p>
                <p className="text-gray-600">Duration: 4 Years | Eligibility: 10+2 with PCM</p>
              </div>

              {/* Master of Technology (M.Tech) Card */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-4 transition transform duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs">
                <h3 className="text-lg text-[#316b9e] font-semibold mb-2">Master of Technology (M.Tech)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  M.Tech offers advanced study in specific engineering areas, focusing on cutting-edge technologies and research.
                </p>
                <p className="text-sm text-gray-700 mb-2"><strong>Streams Offered:</strong></p>
                <ul className="list-disc ml-5 text-sm text-gray-700 mb-2">
                  <li>Computer Science and Engineering</li>
                  <li>Electronics and Telecommunication Engineering</li>
                  <li>Computer Science and Engineering (Artificial Intelligence and Machine Learning)</li>
                  <li>Data Science</li>
                  <li>Electronics Engineering (VLSI Design)</li>
                  <li>Electric Vehicle Technology</li>
                  <li>Energy and Environmental Engineering</li>
                  <li>Environmental Engineering</li>
                </ul>
                <p className="text-sm text-gray-700 mb-2"><strong>Affiliation:</strong> Biju Patnaik University of Technology (BPUT)</p>
                <p className="text-gray-600">Duration: 2 Years | Eligibility: B.Tech/B.E</p>
              </div>
            </div>
          </div>

          {/* Management Courses */}
          <div className="mb-16">
            <h3 className="text-3xl text-[#316b9e] font-semibold text-center mb-8">Management Courses</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {/* MBA Program */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-4 transition transform duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs">
                <h3 className="text-lg text-[#316b9e] font-semibold mb-2">Master of Business Administration (MBA)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Our MBA program prepares students for leadership roles in business with a focus on strategic thinking, management, and specialized skills.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Specializations:</strong> HR Management, Finance Management, Marketing Management, Systems Management, International Business, Sustainability Management, IEV (Innovation, Entrepreneurship and Venture Development), and Environmental Management.
                </p>
                <p className="text-sm text-gray-700 mb-2"><strong>Affiliation:</strong> Approved by AICTE and Affiliated to Biju Patnaik University of Technology (BPUT)</p>
                <p className="text-gray-600">Duration: 2 Years | Eligibility: Graduation</p>
              </div>

              {/* BBA Program */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-4 transition transform duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs">
                <h3 className="text-lg text-[#316b9e] font-semibold mb-2">Bachelor of Business Administration (BBA)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  The BBA program focuses on developing foundational skills in business, management, and leadership to prepare students for the corporate world.
                </p>
                <p className="text-sm text-gray-700 mb-2"><strong>Affiliation:</strong> Approved by AICTE and Govt. of Odisha. Affiliated to Utkal University</p>
                <p className="text-gray-600">Duration: 3 Years | Eligibility: 10+2</p>
              </div>
            </div>
          </div>

          {/* Biotechnology and Health Science Courses */}
          <div className="mb-16">
            <h3 className="text-3xl text-[#316b9e] font-semibold text-center mb-8">Biotechnology Courses</h3>
            <div className="flex flex-wrap justify-center gap-8">

              {/* UG Courses */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-4 transition transform duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs">
                <h3 className="text-lg text-[#316b9e] font-semibold mb-2">Bachelor of Technology (B.Tech) in Biotechnology</h3>
                <p className="text-sm text-gray-700 mb-2">
                  This program offers comprehensive training in biotechnology, covering genetic engineering, molecular biology, and bioprocessing technologies.
                </p>
                <p className="text-sm text-gray-700 mb-2"><strong>Affiliation:</strong> Approved by AICTE and Affiliated to Biju Patnaik University of Technology (BPUT)</p>
                <p className="text-gray-600">Duration: 4 Years | Eligibility: 10+2 (Science)</p>
              </div>

              <div className="bg-gray-100 rounded-lg shadow-lg p-4 transition transform duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs">
                <h3 className="text-lg text-[#316b9e] font-semibold mb-2">Bachelor of Science (Hons) in Biotechnology</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Focused on research in biotechnology, this course covers various aspects of biotechnology and its applications.
                </p>
                <p className="text-sm text-gray-700 mb-2"><strong>Affiliation:</strong> Approved by AICTE and affiliated to Utkal University</p>
                <p className="text-gray-600">Duration: 3 Years | Eligibility: 10+2 (Science)</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl text-[#316b9e] font-semibold text-center mb-8">Postgraduate Biotechnology Courses</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {/* M.Sc. Biotechnology */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-4 transition transform duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs">
                <h3 className="text-lg text-[#316b9e] font-semibold mb-2">M.Sc. Biotechnology</h3>
                <p className="text-sm text-gray-700 mb-2">
                  This program delves deep into biotechnological applications, focusing on research and development in the biotech field.
                </p>
                <p className="text-sm text-gray-700 mb-2"><strong>Affiliation:</strong> Approved by AICTE and affiliated to Utkal University</p>
                <p className="text-gray-600">Duration: 2 Years | Eligibility: Graduation in Science</p>
              </div>

              {/* M.Sc. Applied Microbiology */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-4 transition transform duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs">
                <h3 className="text-lg text-[#316b9e] font-semibold mb-2">M.Sc. Applied Microbiology</h3>
                <p className="text-sm text-gray-700 mb-2">
                  This course emphasizes microbial applications in various industries, focusing on practical and theoretical knowledge.
                </p>
                <p className="text-sm text-gray-700 mb-2"><strong>Affiliation:</strong> Approved by AICTE and affiliated to Utkal University</p>
                <p className="text-gray-600">Duration: 2 Years | Eligibility: Graduation in Science</p>
              </div>

              {/* M.Sc. Bio-Informatics */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-4 transition transform duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs">
                <h3 className="text-lg text-[#316b9e] font-semibold mb-2">M.Sc. Bio-Informatics</h3>
                <p className="text-sm text-gray-700 mb-2">
                  This interdisciplinary program merges biology with computer science, focusing on data analysis and computational methods in biology.
                </p>
                <p className="text-sm text-gray-700 mb-2"><strong>Affiliation:</strong> Approved by AICTE and affiliated to Utkal University</p>
                <p className="text-gray-600">Duration: 2 Years | Eligibility: Graduation in Science</p>
              </div>

              {/* M.Sc. Environmental Science in Biotechnology */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-4 transition transform duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs">
                <h3 className="text-lg text-[#316b9e] font-semibold mb-2">M.Sc. Environmental Science in Biotechnology</h3>
                <p className="text-sm text-gray-700 mb-2">
                  This program focuses on the intersection of environmental science and biotechnology, addressing ecological challenges through biotech solutions.
                </p>
                <p className="text-sm text-gray-700 mb-2"><strong>Affiliation:</strong> Approved by AICTE and affiliated to Utkal University</p>
                <p className="text-gray-600">Duration: 2 Years | Eligibility: Graduation in Science</p>
              </div>
            </div>
          </div>

          {/* Social Work/Public Health Courses */}
          <div className="mb-16">
            <h3 className="text-3xl text-[#316b9e] font-semibold text-center mb-8">Social Work/Public Health Courses</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Master of Social Work (MSW) Card */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-4 transition transform duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs">
                <h3 className="text-lg text-[#316b9e] font-semibold mb-2">Master of Social Work (MSW)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  The MSW program equips students with the skills needed to engage in community service and address social issues effectively.
                </p>
                <p className="text-sm text-gray-700 mb-2"><strong>Affiliation:</strong> Approved by AICTE and affiliated to Utkal University</p>
                <p className="text-gray-600">Duration: 2 Years | Eligibility: Graduation in any discipline</p>
              </div>

              {/* Master in Public Health (MPH) Card */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-4 transition transform duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs">
                <h3 className="text-lg text-[#316b9e] font-semibold mb-2">Master in Public Health (MPH)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  The MPH program equips students with the knowledge and skills to address public health challenges, focusing on community health improvement.
                </p>
                <p className="text-sm text-gray-700 mb-2"><strong>Affiliation:</strong> Approved by AICTE and affiliated to Utkal University</p>
                <p className="text-gray-600">Duration: 2 Years | Eligibility: Graduation in relevant field</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
