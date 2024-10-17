// pages/programs.tsx
import Head from 'next/head';
import Layout from './components/Layout'; // Import your Layout component

export default function Programs() {
  return (
    <Layout>
      <Head>
        <title>Programs - Trident Group of Institutions</title>
        <meta name="description" content="Explore the diverse programs offered at Trident Group of Institutions." />
      </Head>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl text-[#316b9e] font-bold text-center mb-8 transition transform duration-500 hover:scale-105">Our Programs</h1>

          <h2 className="text-4xl text-[#316b9e] font-semibold text-center mb-12">Explore Our Diverse Offerings</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program Card 1 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition transform duration-300 hover:scale-105">
              <h3 className="text-2xl text-[#316b9e] font-semibold mb-4">Bachelor of Technology (B.Tech)</h3>
              <p className="text-lg text-gray-700 mb-4">
                The B.Tech program offers comprehensive training in various engineering disciplines, preparing students for innovative careers in technology.
              </p>
              <p className="text-gray-600">Duration: 4 Years</p>
              <p className="text-gray-600">Eligibility: 10+2 with PCM</p>
              <a href="#" className="text-blue-600 hover:underline mt-4 block">Learn More</a>
            </div>

            {/* Program Card 2 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition transform duration-300 hover:scale-105">
              <h3 className="text-2xl text-[#316b9e] font-semibold mb-4">Master of Business Administration (MBA)</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our MBA program equips students with leadership skills and business acumen, ideal for those aspiring to excel in management roles.
              </p>
              <p className="text-gray-600">Duration: 2 Years</p>
              <p className="text-gray-600">Eligibility: Graduation</p>
              <a href="#" className="text-blue-600 hover:underline mt-4 block">Learn More</a>
            </div>

            {/* Program Card 3 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition transform duration-300 hover:scale-105">
              <h3 className="text-2xl text-[#316b9e] font-semibold mb-4">Bachelor of Arts (BA)</h3>
              <p className="text-lg text-gray-700 mb-4">
                The BA program provides a solid foundation in humanities and social sciences, encouraging critical thinking and creativity.
              </p>
              <p className="text-gray-600">Duration: 3 Years</p>
              <p className="text-gray-600">Eligibility: 10+2</p>
              <a href="#" className="text-blue-600 hover:underline mt-4 block">Learn More</a>
            </div>

            {/* Program Card 4 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition transform duration-300 hover:scale-105">
              <h3 className="text-2xl text-[#316b9e] font-semibold mb-4">Master of Science (M.Sc)</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our M.Sc program focuses on advanced scientific concepts and research methodologies, preparing students for impactful careers in science.
              </p>
              <p className="text-gray-600">Duration: 2 Years</p>
              <p className="text-gray-600">Eligibility: Graduation in Science</p>
              <a href="#" className="text-blue-600 hover:underline mt-4 block">Learn More</a>
            </div>

            {/* Program Card 5 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition transform duration-300 hover:scale-105">
              <h3 className="text-2xl text-[#316b9e] font-semibold mb-4">Diploma in Hospitality Management</h3>
              <p className="text-lg text-gray-700 mb-4">
                This diploma program prepares students for dynamic careers in the hospitality industry, focusing on service excellence and management skills.
              </p>
              <p className="text-gray-600">Duration: 1 Year</p>
              <p className="text-gray-600">Eligibility: 10+2</p>
              <a href="#" className="text-blue-600 hover:underline mt-4 block">Learn More</a>
            </div>

            {/* Program Card 6 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition transform duration-300 hover:scale-105">
              <h3 className="text-2xl text-[#316b9e] font-semibold mb-4">Certificate in Digital Marketing</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our digital marketing certificate program offers insights into current trends and tools, preparing students for careers in the digital space.
              </p>
              <p className="text-gray-600">Duration: 6 Months</p>
              <p className="text-gray-600">Eligibility: Graduation</p>
              <a href="#" className="text-blue-600 hover:underline mt-4 block">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
