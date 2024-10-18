// pages/about-us.tsx
import Head from 'next/head';
import Layout from './components/Layout'; // Import your Layout component

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us - Trident Group of Institutions</title>
        <meta name="description" content="Learn more about Trident Group of Institutions, our vision, mission, and values." />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Open+Sans:wght@300;400&display=swap" rel="stylesheet" />
      </Head>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#316b9e] text-center mb-6 animate__animated animate__fadeIn">About Us</h1>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-[#316b9e] mb-4 animate__animated animate__fadeIn animate__delay-1s">Welcome to Trident Group of Institutions</h2>
            <p className="text-md text-gray-700 mb-6 animate__animated animate__fadeIn animate__delay-2s transition duration-300 ease-in-out hover:underline">
              At Trident Group of Institutions, we are dedicated to nurturing future leaders and innovators through quality education and holistic development.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-lg mb-10 animate__animated animate__fadeIn animate__delay-3s">
            <h3 className="text-2xl font-semibold text-[#316b9e] mb-3">Our Vision</h3>
            <p className="text-md text-gray-700 mb-4">
              To be a premier institution that empowers individuals through transformative education, fostering skills, creativity, and ethical leadership for a sustainable future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-4s">
              <h3 className="text-2xl font-semibold text-[#316b9e] mb-3">Our Mission</h3>
              <ul className="list-disc list-inside mb-6 text-md text-gray-700 space-y-2">
                <li className="transition duration-300 ease-in-out transform hover:scale-105">Quality Education: To provide high-quality, relevant education that prepares students for successful careers in a rapidly changing world.</li>
                <li className="transition duration-300 ease-in-out transform hover:scale-105">Holistic Development: To foster all-around development through extracurricular activities, leadership programs, and community engagement.</li>
                <li className="transition duration-300 ease-in-out transform hover:scale-105">Research and Innovation: To promote research and innovation that contributes to societal development and addresses global challenges.</li>
                <li className="transition duration-300 ease-in-out transform hover:scale-105">Global Collaboration: To create partnerships with institutions and organizations worldwide to enhance educational opportunities and cultural exchange.</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-4s">
              <h3 className="text-2xl font-semibold text-[#316b9e] mb-3">Our Values</h3>
              <ul className="list-disc list-inside mb-6 text-md text-gray-700 space-y-2">
                <li className="transition duration-300 ease-in-out transform hover:scale-105">Integrity: We uphold the highest standards of integrity and ethics in all our endeavors.</li>
                <li className="transition duration-300 ease-in-out transform hover:scale-105">Excellence: We strive for excellence in teaching, learning, and research.</li>
                <li className="transition duration-300 ease-in-out transform hover:scale-105">Inclusivity: We promote an inclusive environment that values diversity and encourages collaboration.</li>
                <li className="transition duration-300 ease-in-out transform hover:scale-105">Responsibility: We are committed to social responsibility and sustainability, preparing students to contribute positively to society.</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-lg mb-10 animate__animated animate__fadeIn animate__delay-5s">
            <h3 className="text-2xl font-semibold text-[#316b9e] mb-3">Our History</h3>
            <p className="text-md text-gray-700 mb-4">
              Trident Group of Institutions was founded in [Year] with the aim of providing accessible and quality education to students from diverse backgrounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-6s">
              <h3 className="text-2xl font-semibold text-[#316b9e] mb-3">Why Choose Us?</h3>
              <ul className="list-disc list-inside mb-6 text-md text-gray-700 space-y-2">
                <li className="transition duration-300 ease-in-out transform hover:scale-105">Experienced Faculty: Our faculty comprises seasoned educators and industry professionals who bring a wealth of knowledge and experience to the classroom.</li>
                <li className="transition duration-300 ease-in-out transform hover:scale-105">State-of-the-Art Facilities: We offer modern facilities, including well-equipped laboratories, libraries, and collaborative spaces that enhance the learning experience.</li>
                <li className="transition duration-300 ease-in-out transform hover:scale-105">Industry Connections: We maintain strong ties with industries and organizations, providing students with internship opportunities and real-world experience.</li>
                <li className="transition duration-300 ease-in-out transform hover:scale-105">Student Support Services: Our dedicated support services ensure that students receive guidance in academic, personal, and career development.</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-6s">
              <h3 className="text-2xl font-semibold text-[#316b9e] mb-3">Join Us</h3>
              <p className="text-md text-gray-700 mb-6">
                At Trident Group of Institutions, we believe in the potential of every student to achieve greatness. Join us on a journey of learning, growth, and discovery.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-lg mb-10 animate__animated animate__fadeIn animate__delay-7s">
            <h3 className="text-2xl font-semibold text-[#316b9e] mb-3">Contact Information</h3>
            <p className="text-md text-gray-700 mb-4">
              Address: Trident Group of Institutions, F2, Chandaka Industrial Estate, Technology Corridor, Infocity Area, Chandrasekharpur, Bhubaneswar, Odisha, 751024
            </p>
            <p className="text-md text-gray-700 mb-4">Phone: +91 98611 91195</p>
            <p className="text-md text-gray-700 mb-4">
              Email: <a href="mailto:info@trident.ac.in" className="text-blue-600 hover:underline">info@trident.ac.in</a>
            </p>
          </div>

          <div className="text-center mb-10 animate__animated animate__fadeIn animate__delay-8s">
            <h3 className="text-2xl font-semibold text-[#316b9e] mb-4">Follow Us</h3>
            <p className="text-md text-gray-700 mb-4">Stay connected with us on our social media platforms for the latest news and updates!</p>
            <ul className="flex justify-center space-x-4 mb-6">
              <li><a href="https://facebook.com" className="text-blue-600 hover:text-blue-700 transition duration-300">Facebook</a></li>
              <li><a href="https://twitter.com" className="text-blue-600 hover:text-blue-700 transition duration-300">Twitter</a></li>
              <li><a href="https://linkedin.com" className="text-blue-600 hover:text-blue-700 transition duration-300">LinkedIn</a></li>
              <li><a href="https://instagram.com" className="text-blue-600 hover:text-blue-700 transition duration-300">Instagram</a></li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
