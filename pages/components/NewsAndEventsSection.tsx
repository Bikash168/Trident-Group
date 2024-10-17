// components/NewsAndEventsSection.js
import { useEffect, useState } from 'react';

export default function NewsAndEventsSection() {
  const newsAndEvents = [
    {
      title: "Annual Sports Meet 2024",
      description: "Join us for our Annual Sports Meet, where students will showcase their athletic talents.",
      date: "October 28, 2024",
      link: "/events/sports-meet"
    },
    {
      title: "Guest Lecture by Industry Expert",
      description: "A special guest lecture by renowned industry expert Dr. Jane Doe on emerging technologies.",
      date: "November 15, 2024",
      link: "/events/guest-lecture"
    },
    {
      title: "Community Service Camp",
      description: "Participate in our Community Service Camp aimed at making a positive impact in local neighborhoods.",
      date: "December 5, 2024",
      link: "/events/community-service"
    },
    {
      title: "Career Fair 2024",
      description: "Explore job opportunities at our annual Career Fair, featuring top companies and recruiters.",
      date: "January 10, 2025",
      link: "/events/career-fair"
    }
    // Add more news and events as needed
  ];

  const [visibleCards, setVisibleCards] = useState(Array(newsAndEvents.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.news-card');
      cards.forEach((card, index) => {
        const { top, bottom } = card.getBoundingClientRect();
        if (top < window.innerHeight && bottom > 0) {
          setVisibleCards((prev) => {
            const newVisibleCards = [...prev];
            newVisibleCards[index] = true; // Set the card at the current index to visible
            return newVisibleCards;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [newsAndEvents.length]);

  return (
    <section className="py-16 bg-amber-900" id="news-events">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-white font-bold text-center mb-4">News and Events</h2>
        <p className="text-lg text-white text-center mb-8">
          Stay updated with the latest news and upcoming events at the Trident Group of Institutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsAndEvents.map((item, index) => (
            <div
              key={index}
              className={`news-card bg-orange-50 p-6 rounded-lg shadow-lg transition-all duration-500 transform ${
                visibleCards[index] ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
            >
              <h3 className="text-2xl text-[#316b9e] font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-gray-500 mb-4"><strong>Date:</strong> {item.date}</p>
              <a 
                href={item.link} 
                className="bg-blue-400 hover:bg-blue-400 text-white px-4 py-2 rounded-lg text-lg font-semibold transition duration-300"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
