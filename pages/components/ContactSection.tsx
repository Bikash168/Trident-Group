// components/ContactSection.js
import { useState, useEffect } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    alert("Thank you for your message!");
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact');
      const { top } = section.getBoundingClientRect();
      if (top < window.innerHeight * 0.8) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      className={`py-16 bg-orange-50 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
      id="contact"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-[#316b9e] font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-lg text-center mb-8">
          Have any questions? We'd love to hear from you!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`bg-amber-900 p-6 rounded-lg shadow-md transition-transform duration-700 ${isVisible ? 'translate-y-0' : 'translate-y-4 opacity-0'}`}>
            <h3 className="text-2xl text-white font-semibold mb-4">Contact Us</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-white mb-1" htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-1" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-1" htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-400 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className={`bg-amber-900 p-6 rounded-lg shadow-md transition-transform duration-700 ${isVisible ? 'translate-y-0' : 'translate-y-4 opacity-0'}`}>
            <h3 className="text-2xl text-white font-semibold mb-4">Contact Information</h3>
            <p className="mb-2 text-white">
              <strong>Phone:</strong> +91 98611 91195
            </p>
            <p className="mb-2 text-white">
              <strong>Email:</strong> info@trident.ac.in
            </p>
            <p className="mb-4 text-white">
              <strong>Address:</strong> Trident Group of Institutions
              F2, Chandaka Industrial Estate,
              Technology Corridor, Infocity Area,
              Chandrasekharpur, Bhubaneswar,
              Odisha. 751024
            </p>
            <h4 className="text-xl font-semibold text-white mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-blue-600 hover:text-blue-700">Facebook</a>
              <a href="https://twitter.com" className="text-blue-600 hover:text-blue-700">Twitter</a>
              <a href="https://instagram.com" className="text-blue-600 hover:text-blue-700">Instagram</a>
              <a href="https://linkedin.com" className="text-blue-600 hover:text-blue-700">LinkedIn</a>
            </div>
          </div>
        </div>
        {/* Optional: Google Map Embed */}
        <div className="mt-12">
          <h3 className="text-2xl text-[#316b9e] font-semibold mb-4">Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31144.175952423004!2d85.83170889999999!3d20.296059999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c7c05d6e1db7%3A0x4190e3de632915c8!2sTrident%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1663601596228!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
