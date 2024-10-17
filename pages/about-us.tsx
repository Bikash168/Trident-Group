// pages/about-us.tsx
import Head from 'next/head';
import Layout from './components/Layout'; // Import your Layout component

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us - Trident Group of Institutions</title>
        <meta name="description" content="Learn more about Trident Group of Institutions, our vision, mission, and values." />
      </Head>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl text-[#316b9e] font-bold text-center mb-8 transition transform duration-500 hover:scale-105">About Us</h1>

          <h2 className="text-4xl text-[#316b9e] font-semibold mb-4 transition transform duration-500 hover:scale-105">Welcome to Trident Group of Institutions</h2>
          <p className="text-lg text-gray-700 mb-8 transition duration-300 ease-in-out hover:underline">
            At Trident Group of Institutions, we are dedicated to nurturing future leaders and innovators through quality education and holistic development. Established with a vision to create a world-class learning environment, our institutions encompass a diverse range of programs and disciplines, ensuring that every student receives the support and guidance they need to excel.
          </p>

          <h3 className="text-3xl text-[#316b9e] font-semibold mb-4 transition transform duration-500 hover:scale-105">Our Vision</h3>
          <p className="text-lg text-gray-700 mb-8 transition duration-300 ease-in-out hover:underline">
            To be a premier institution that empowers individuals through transformative education, fostering skills, creativity, and ethical leadership for a sustainable future.
          </p>

          <h3 className="text-3xl text-[#316b9e] font-semibold mb-4 transition transform duration-500 hover:scale-105">Our Mission</h3>
          <ul className="list-disc list-inside mb-8 text-lg text-gray-700 space-y-2">
            <li className="transition transform duration-300 hover:scale-105">Quality Education: To provide high-quality, relevant education that prepares students for successful careers in a rapidly changing world.</li>
            <li className="transition transform duration-300 hover:scale-105">Holistic Development: To foster all-around development through extracurricular activities, leadership programs, and community engagement.</li>
            <li className="transition transform duration-300 hover:scale-105">Research and Innovation: To promote research and innovation that contributes to societal development and addresses global challenges.</li>
            <li className="transition transform duration-300 hover:scale-105">Global Collaboration: To create partnerships with institutions and organizations worldwide to enhance educational opportunities and cultural exchange.</li>
          </ul>

          <h3 className="text-3xl text-[#316b9e] font-semibold mb-4 transition transform duration-500 hover:scale-105">Our Values</h3>
          <ul className="list-disc list-inside mb-8 text-lg text-gray-700 space-y-2">
            <li className="transition transform duration-300 hover:scale-105">Integrity: We uphold the highest standards of integrity and ethics in all our endeavors.</li>
            <li className="transition transform duration-300 hover:scale-105">Excellence: We strive for excellence in teaching, learning, and research.</li>
            <li className="transition transform duration-300 hover:scale-105">Inclusivity: We promote an inclusive environment that values diversity and encourages collaboration.</li>
            <li className="transition transform duration-300 hover:scale-105">Responsibility: We are committed to social responsibility and sustainability, preparing students to contribute positively to society.</li>
          </ul>

          <h3 className="text-3xl text-[#316b9e] font-semibold mb-4 transition transform duration-500 hover:scale-105">Our History</h3>
          <p className="text-lg text-gray-700 mb-8 transition duration-300 ease-in-out hover:underline">
            Trident Group of Institutions was founded in [Year] with the aim of providing accessible and quality education to students from diverse backgrounds. Over the years, we have grown into a well-respected educational hub, offering a wide range of undergraduate and postgraduate programs across various fields, including Engineering, Management, Information Technology, Arts and Sciences, and Hospitality.
          </p>

          <h3 className="text-3xl text-[#316b9e] font-semibold mb-4 transition transform duration-500 hover:scale-105">Why Choose Us?</h3>
          <ul className="list-disc list-inside mb-8 text-lg text-gray-700 space-y-2">
            <li className="transition transform duration-300 hover:scale-105">Experienced Faculty: Our faculty comprises seasoned educators and industry professionals who bring a wealth of knowledge and experience to the classroom.</li>
            <li className="transition transform duration-300 hover:scale-105">State-of-the-Art Facilities: We offer modern facilities, including well-equipped laboratories, libraries, and collaborative spaces that enhance the learning experience.</li>
            <li className="transition transform duration-300 hover:scale-105">Industry Connections: We maintain strong ties with industries and organizations, providing students with internship opportunities and real-world experience.</li>
            <li className="transition transform duration-300 hover:scale-105">Student Support Services: Our dedicated support services ensure that students receive guidance in academic, personal, and career development.</li>
          </ul>

          <h3 className="text-3xl text-[#316b9e] font-semibold mb-4 transition transform duration-500 hover:scale-105">Join Us</h3>
          <p className="text-lg text-gray-700 mb-8 transition duration-300 ease-in-out hover:underline">
            At Trident Group of Institutions, we believe in the potential of every student to achieve greatness. Join us on a journey of learning, growth, and discovery. Together, we can shape the future and create a positive impact on society.
          </p>

          <h3 className="text-3xl text-[#316b9e] font-semibold mb-4 transition transform duration-500 hover:scale-105">Contact Information</h3>
          <p className="text-lg text-gray-700 mb-4 transition duration-300 ease-in-out hover:underline">
            Address: Trident Group of Institutions, F2, Chandaka Industrial Estate, Technology Corridor, Infocity Area, Chandrasekharpur, Bhubaneswar, Odisha, 751024
          </p>
          <p className="text-lg text-gray-700 mb-4 transition duration-300 ease-in-out hover:underline">
            Phone: +91 98611 91195
          </p>
          <p className="text-lg text-gray-700 mb-4 transition duration-300 ease-in-out hover:underline">
            Email: <a href="mailto:info@trident.ac.in" className="text-blue-600 hover:underline">info@trident.ac.in</a>
          </p>

          <h3 className="text-3xl text-[#316b9e] font-semibold mb-4 transition transform duration-500 hover:scale-105">Follow Us</h3>
          <p className="text-lg text-gray-700 mb-4 transition duration-300 ease-in-out hover:underline">Stay connected with us on our social media platforms for the latest news and updates!</p>
          <ul className="flex space-x-4 mb-8">
            <li><a href="https://facebook.com" className="text-blue-600 hover:text-blue-700 transition duration-300">Facebook</a></li>
            <li><a href="https://twitter.com" className="text-blue-600 hover:text-blue-700 transition duration-300">Twitter</a></li>
            <li><a href="https://instagram.com" className="text-blue-600 hover:text-blue-700 transition duration-300">Instagram</a></li>
            <li><a href="https://linkedin.com" className="text-blue-600 hover:text-blue-700 transition duration-300">LinkedIn</a></li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
