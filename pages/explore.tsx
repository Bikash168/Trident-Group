import React from 'react';
import Layout from './components/Layout';

export default function ExploreTrident() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(../images/your-image.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto text-center text-white py-32">
          <h1 className="text-5xl font-bold mb-4">Explore Trident Group of Institutions</h1>
          <p className="text-lg mb-8">Discover what makes us one of the leading educational institutions in India.</p>
          <a href="#campus-life" className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg">Explore Campus Life</a>
        </div>
      </section>

      {/* Campus Life Section */}
      <section id="campus-life" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Campus Life</h2>
          <p className="text-lg text-gray-600 mb-8">A vibrant campus, modern facilities, and a diverse student community. Experience the best student life.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="../images/your-image1.webp" alt="Hostels" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Hostels</h3>
              <p className="text-gray-600">Comfortable and well-equipped hostels with all the modern amenities for a home-away-from-home experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="../images/your-image2.jpg" alt="Cafeteria" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Cafeteria</h3>
              <p className="text-gray-600">Our multi-cuisine cafeteria serves healthy and delicious meals catering to the diverse tastes of our students.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="../images/your-image3.jpg" alt="Sports" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sports</h3>
              <p className="text-gray-600">State-of-the-art sports facilities, including grounds for cricket, football, tennis courts, and indoor stadiums.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Achievements Section */}
      <section id="achievements" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Student Achievements</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Trident Group of Institutions, we celebrate the accomplishments of our students who consistently excel in various fields. Some of our notable achievements include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="../images/achievement1.jpg" alt="Achievement 1" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">National-Level Engineering Competitions</h3>
              <p className="text-gray-600">Our students have secured top positions in several prestigious engineering contests.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="../images/achievement2.jpg" alt="Achievement 2" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Innovative Projects</h3>
              <p className="text-gray-600">Many students have developed groundbreaking projects that have received recognition at state and national levels.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="../images/your-image12.png" alt="Achievement 3" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Scholarships and Awards</h3>
              <p className="text-gray-600">Our students regularly receive scholarships from renowned organizations for their outstanding performance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="../images/your-image11.jpg" alt="Achievement 4" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Community Engagement</h3>
              <p className="text-gray-600">Our students are involved in numerous community service initiatives, making a positive impact in society.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Events & Celebrations</h2>
          <p className="text-lg text-gray-600 mb-8">Our campus hosts a variety of events throughout the year, from academic conferences to cultural celebrations.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="../images/your-image8.jpg" alt="Annual Fest" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Annual Fest</h3>
              <p className="text-gray-600">Join us for our vibrant annual fest that brings together students, staff, and guests for a memorable celebration.</p>
              <a href="/events/annual-fest" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Learn More</a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="../images/your-image9.jpg" alt="Conferences" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Conferences</h3>
              <p className="text-gray-600">Participate in our academic conferences featuring renowned speakers and cutting-edge research.</p>
              <a href="/events/conferences" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Learn More</a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="../images/your-image10.jpg" alt="Workshops" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Workshops & Seminars</h3>
              <p className="text-gray-600">Attend our hands-on workshops and expert-led seminars to enhance your skills and knowledge.</p>
              <a href="/events/workshops" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">World-Class Facilities</h2>
          <p className="text-lg text-gray-600 mb-8">Our campus is equipped with top-notch facilities, including modern classrooms, labs, libraries, and recreational spaces.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="../images/your-image4.jpg" alt="Library" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Library</h3>
              <p className="text-gray-600">A vast collection of books, journals, and digital resources to support your academic journey.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="../images/your-image6.jpg" alt="Laboratories" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Laboratories</h3>
              <p className="text-gray-600">State-of-the-art labs for engineering, science, and technology programs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="../images/your-image7.jpg" alt="Sports" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sports Facilities</h3>
              <p className="text-gray-600">A range of sports facilities to promote physical fitness and team spirit among students.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
