// pages/news-and-events.tsx
import Head from 'next/head';
import Layout from './components/Layout'; // Import your Layout component
import { useEffect } from 'react';

export default function NewsAndEvents() {
  useEffect(() => {
    // Add smooth scroll behavior for better UX
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <Layout>
      <Head>
        <title>News and Events - Trident Group of Institutions</title>
        <meta name="description" content="Stay updated with the latest news and events at Trident Group of Institutions." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> {/* Change here */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl text-[#316b9e] font-bold text-center mb-8 transition-transform duration-500 transform hover:scale-105 animate-bounce">News and Events</h1>

          <h2 className="text-3xl text-[#316b9e] font-semibold text-center mb-12">Latest Updates and Announcements</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* News Article 1 */}
            <div className="bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <h3 className="text-xl text-[#316b9e] font-semibold mb-2">New Campus Inauguration</h3>
              <p className="text-sm text-gray-700 mb-2">
                We are excited to announce the inauguration of our new campus facility, which will enhance our educational offerings and student experience.
              </p>
              <p className="text-gray-600 mb-1">Date: October 20, 2024</p>
              <a href="#" className="text-blue-600 hover:underline transition-all duration-300 hover:text-[#316b9e]">Read More</a>
            </div>

            {/* News Article 2 */}
            <div className="bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <h3 className="text-xl text-[#316b9e] font-semibold mb-2">Annual Sports Day 2024</h3>
              <p className="text-sm text-gray-700 mb-2">
                Join us for our Annual Sports Day on November 15, where students will showcase their athletic talents and compete in various events.
              </p>
              <p className="text-gray-600 mb-1">Date: November 15, 2024</p>
              <a href="#" className="text-blue-600 hover:underline transition-all duration-300 hover:text-[#316b9e]">Read More</a>
            </div>

            {/* News Article 3 */}
            <div className="bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <h3 className="text-xl text-[#316b9e] font-semibold mb-2">Guest Lecture on AI Innovations</h3>
              <p className="text-sm text-gray-700 mb-2">
                Join us for a guest lecture by renowned AI expert Dr. A. B. Smith on November 25, discussing the latest innovations in artificial intelligence.
              </p>
              <p className="text-gray-600 mb-1">Date: November 25, 2024</p>
              <a href="#" className="text-blue-600 hover:underline transition-all duration-300 hover:text-[#316b9e]">Read More</a>
            </div>

            {/* News Article 4 */}
            <div className="bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <h3 className="text-xl text-[#316b9e] font-semibold mb-2">Research Conference 2024</h3>
              <p className="text-sm text-gray-700 mb-2">
                Our annual research conference will be held on December 10, providing a platform for students and faculty to present their research findings.
              </p>
              <p className="text-gray-600 mb-1">Date: December 10, 2024</p>
              <a href="#" className="text-blue-600 hover:underline transition-all duration-300 hover:text-[#316b9e]">Read More</a>
            </div>

            {/* News Article 5 */}
            <div className="bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <h3 className="text-xl text-[#316b9e] font-semibold mb-2">Community Service Day</h3>
              <p className="text-sm text-gray-700 mb-2">
                We invite all students and faculty to participate in our Community Service Day on January 5, aimed at giving back to our local community.
              </p>
              <p className="text-gray-600 mb-1">Date: January 5, 2025</p>
              <a href="#" className="text-blue-600 hover:underline transition-all duration-300 hover:text-[#316b9e]">Read More</a>
            </div>

            {/* News Article 6 */}
            <div className="bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <h3 className="text-xl text-[#316b9e] font-semibold mb-2">Workshop on Entrepreneurship</h3>
              <p className="text-sm text-gray-700 mb-2">
                Attend our workshop on entrepreneurship on January 15, where industry experts will guide you on starting and managing a successful business.
              </p>
              <p className="text-gray-600 mb-1">Date: January 15, 2025</p>
              <a href="#" className="text-blue-600 hover:underline transition-all duration-300 hover:text-[#316b9e]">Read More</a>
            </div>

            {/* Additional News Article 7 */}
            <div className="bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <h3 className="text-xl text-[#316b9e] font-semibold mb-2">Tech Fest 2024</h3>
              <p className="text-sm text-gray-700 mb-2">
                Join us for Tech Fest 2024 on February 10, featuring workshops, tech talks, and competitions in various fields of technology.
              </p>
              <p className="text-gray-600 mb-1">Date: February 10, 2024</p>
              <a href="#" className="text-blue-600 hover:underline transition-all duration-300 hover:text-[#316b9e]">Read More</a>
            </div>

            {/* Additional News Article 8 */}
            <div className="bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <h3 className="text-xl text-[#316b9e] font-semibold mb-2">International Women’s Day Celebration</h3>
              <p className="text-sm text-gray-700 mb-2">
                Celebrate International Women’s Day with us on March 8, featuring guest speakers and workshops focused on empowerment and equality.
              </p>
              <p className="text-gray-600 mb-1">Date: March 8, 2025</p>
              <a href="#" className="text-blue-600 hover:underline transition-all duration-300 hover:text-[#316b9e]">Read More</a>
            </div>
          </div>

          <h2 className="text-3xl text-[#316b9e] font-semibold text-center mb-12">Upcoming Events</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <h3 className="text-xl text-[#316b9e] font-semibold mb-2">Orientation Program 2024</h3>
              <p className="text-sm text-gray-700 mb-2">
                New students are invited to attend the Orientation Program on August 1, 2024, to learn about the campus and academic resources.
              </p>
              <p className="text-gray-600 mb-1">Date: August 1, 2024</p>
              <a href="#" className="text-blue-600 hover:underline transition-all duration-300 hover:text-[#316b9e]">Read More</a>
            </div>

            {/* Event 2 */}
            <div className="bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <h3 className="text-xl text-[#316b9e] font-semibold mb-2">Career Fair 2024</h3>
              <p className="text-sm text-gray-700 mb-2">
                Join us for the Career Fair on September 15, where students can meet potential employers and explore job opportunities.
              </p>
              <p className="text-gray-600 mb-1">Date: September 15, 2024</p>
              <a href="#" className="text-blue-600 hover:underline transition-all duration-300 hover:text-[#316b9e]">Read More</a>
            </div>

            {/* Event 3 */}
            <div className="bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <h3 className="text-xl text-[#316b9e] font-semibold mb-2">Alumni Meet 2024</h3>
              <p className="text-sm text-gray-700 mb-2">
                Alumni are invited to the annual meet on October 10, where they can reconnect and network with fellow graduates.
              </p>
              <p className="text-gray-600 mb-1">Date: October 10, 2024</p>
              <a href="#" className="text-blue-600 hover:underline transition-all duration-300 hover:text-[#316b9e]">Read More</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
