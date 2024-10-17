// pages/news-and-events.tsx
import Head from 'next/head';
import Layout from './components/Layout'; // Import your Layout component

export default function NewsAndEvents() {
  return (
    <Layout>
      <Head>
        <title>News and Events - Trident Group of Institutions</title>
        <meta name="description" content="Stay updated with the latest news and events at Trident Group of Institutions." />
      </Head>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl text-[#316b9e] font-bold text-center mb-8 transition transform duration-500 hover:scale-105">News and Events</h1>

          <h2 className="text-4xl text-[#316b9e] font-semibold text-center mb-12">Latest Updates and Announcements</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* News Article 1 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition transform duration-300 hover:scale-105">
              <h3 className="text-2xl text-[#316b9e] font-semibold mb-4">New Campus Inauguration</h3>
              <p className="text-lg text-gray-700 mb-4">
                We are excited to announce the inauguration of our new campus facility, which will enhance our educational offerings and student experience.
              </p>
              <p className="text-gray-600 mb-2">Date: October 20, 2024</p>
              <a href="#" className="text-blue-600 hover:underline mt-4 block">Read More</a>
            </div>

            {/* News Article 2 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition transform duration-300 hover:scale-105">
              <h3 className="text-2xl text-[#316b9e] font-semibold mb-4">Annual Sports Day 2024</h3>
              <p className="text-lg text-gray-700 mb-4">
                Join us for our Annual Sports Day on November 15, where students will showcase their athletic talents and compete in various events.
              </p>
              <p className="text-gray-600 mb-2">Date: November 15, 2024</p>
              <a href="#" className="text-blue-600 hover:underline mt-4 block">Read More</a>
            </div>

            {/* News Article 3 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition transform duration-300 hover:scale-105">
              <h3 className="text-2xl text-[#316b9e] font-semibold mb-4">Guest Lecture on AI Innovations</h3>
              <p className="text-lg text-gray-700 mb-4">
                Join us for a guest lecture by renowned AI expert Dr. A. B. Smith on November 25, discussing the latest innovations in artificial intelligence.
              </p>
              <p className="text-gray-600 mb-2">Date: November 25, 2024</p>
              <a href="#" className="text-blue-600 hover:underline mt-4 block">Read More</a>
            </div>

            {/* News Article 4 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition transform duration-300 hover:scale-105">
              <h3 className="text-2xl text-[#316b9e] font-semibold mb-4">Research Conference 2024</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our annual research conference will be held on December 10, providing a platform for students and faculty to present their research findings.
              </p>
              <p className="text-gray-600 mb-2">Date: December 10, 2024</p>
              <a href="#" className="text-blue-600 hover:underline mt-4 block">Read More</a>
            </div>

            {/* News Article 5 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition transform duration-300 hover:scale-105">
              <h3 className="text-2xl text-[#316b9e] font-semibold mb-4">Community Service Day</h3>
              <p className="text-lg text-gray-700 mb-4">
                We invite all students and faculty to participate in our Community Service Day on January 5, aimed at giving back to our local community.
              </p>
              <p className="text-gray-600 mb-2">Date: January 5, 2025</p>
              <a href="#" className="text-blue-600 hover:underline mt-4 block">Read More</a>
            </div>

            {/* News Article 6 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition transform duration-300 hover:scale-105">
              <h3 className="text-2xl text-[#316b9e] font-semibold mb-4">Workshop on Entrepreneurship</h3>
              <p className="text-lg text-gray-700 mb-4">
                Attend our workshop on entrepreneurship on January 15, where industry experts will guide you on starting and managing a successful business.
              </p>
              <p className="text-gray-600 mb-2">Date: January 15, 2025</p>
              <a href="#" className="text-blue-600 hover:underline mt-4 block">Read More</a>
            </div>
          </div>

          <h2 className="text-4xl text-[#316b9e] font-semibold text-center mb-12">Upcoming Events</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition transform duration-300 hover:scale-105">
              <h3 className="text-2xl text-[#316b9e] font-semibold mb-4">Orientation Program 2024</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our Orientation Program for new students will take place on August 1, 2024. Get ready for an exciting start to your academic journey!
              </p>
              <p className="text-gray-600 mb-2">Date: August 1, 2024</p>
              <a href="#" className="text-blue-600 hover:underline mt-4 block">Learn More</a>
            </div>

            {/* Event 2 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition transform duration-300 hover:scale-105">
              <h3 className="text-2xl text-[#316b9e] font-semibold mb-4">Annual Cultural Fest</h3>
              <p className="text-lg text-gray-700 mb-4">
                Join us for our Annual Cultural Fest on February 20, where students showcase their talents in music, dance, and drama.
              </p>
              <p className="text-gray-600 mb-2">Date: February 20, 2025</p>
              <a href="#" className="text-blue-600 hover:underline mt-4 block">Learn More</a>
            </div>

            {/* Event 3 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition transform duration-300 hover:scale-105">
              <h3 className="text-2xl text-[#316b9e] font-semibold mb-4">Industry Visit: Local Companies</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our students will visit local companies to learn about real-world applications of their studies on March 5, 2025.
              </p>
              <p className="text-gray-600 mb-2">Date: March 5, 2025</p>
              <a href="#" className="text-blue-600 hover:underline mt-4 block">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
