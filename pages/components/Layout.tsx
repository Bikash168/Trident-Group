import { useEffect, useState, ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaBars,
  FaTimes
} from 'react-icons/fa';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white text-gray-900">
      <Head>
        <title>Trident Group of Institutions</title>
      </Head>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        {/* Top Bar Section */}
        <div className="bg-gray-100 text-gray-700 py-2">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8 space-y-2 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
              <span className="flex items-center text-sm">
                <FaMapMarkerAlt className="mr-1" /> Bhubaneswar, India
              </span>
              <span className="flex items-center text-sm">
                <FaPhoneAlt className="mr-1" /> +91 98611 91195
              </span>
              <span className="flex items-center text-sm">
                <FaEnvelope className="mr-1" /> info@trident.ac.in
              </span>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-600" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-blue-500" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-600" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-red-600" />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-green-600" />
              </a>
            </div>
          </div>
        </div>

        {/* New Button Line Menu */}
        <div className="flex flex-wrap justify-start space-x-1 bg-[#316b9e] p-2">
          {['Library', 'Notices', 'Alumni', 'Staff', 'Exam', 'Placement', 'Founder', 'Brochure', 'Sports'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="bg-[#316b9e] text-white px-3 py-1 rounded hover:bg-[#255f8a] text-sm md:text-base">
              {item}
            </Link>
          ))}
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto p-4 flex justify-between items-center">
          <Link href="/" className="flex items-center w-full md:w-auto">
            <img src="/tgi_logo.png" alt="TGI Logo" className="h-10 md:h-12 w-auto" />
          </Link>
          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4 md:space-x-6">
            <ul className="flex space-x-4 md:space-x-6">
              {['About Us', 'Programs', 'News and Events', 'Explore Trident', 'Admissions', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-600">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-100 shadow-lg">
            <ul className="flex flex-col items-center space-y-4 py-4">
              {['About Us', 'Programs', 'News and Events', 'Explore Trident', 'Admissions', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-600" onClick={toggleMenu}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Announcements Section */}
        <div className="bg-[#316b9e] p-2 text-sm text-white overflow-hidden">
          <div className="whitespace-nowrap animate-marquee">
            <span>⭐ Announcement: Upcoming Admission Dates are Now Open!</span>
            <span className="mx-8">⭐ Announcement: Upcoming Admission Dates are Now Open!</span>
          </div>
        </div>

      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg text-[#316b9e] font-bold mb-4">About Us</h3>
            <p className="text-sm">
              Established in 1998, Trident Group of Institutions is a leader in education and research in Odisha.
              With over two decades of operation, it has transformed the lives of more than 20,000 students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg text-[#316b9e] font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Programs', 'News & Events', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-700 block hover:text-blue-600">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trident Group Websites */}
          <div>
            <h3 className="text-lg text-[#316b9e] font-bold mb-4">Trident Group Websites</h3>
            <ul className="space-y-2">
              {[
                { name: 'Trident Academy of Technology', link: 'https://tat.ac.in/' },
                { name: 'Trident Academy of Creative Technology', link: 'https://tact.ac.in/' },
                { name: 'Trident Academy of Professional Studies', link: 'https://taps.ac.in/' },
                { name: 'The DF Group', link: 'https://dfgroup.in/' },
              ].map(({ name, link }) => (
                <li key={name}>
                  <Link href={link} className="text-gray-700 block hover:text-blue-600" target="_blank" rel="noopener noreferrer">{name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg text-[#316b9e] font-bold mb-4">Contact Us</h3>
            <p className="text-sm">Address: Bhubaneswar, Odisha, India</p>
            <p className="text-sm">Phone: +91 98611 91195</p>
            <p className="text-sm">Email: info@trident.ac.in</p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center mt-6 border-t border-gray-300 pt-4">
          <p className="text-sm">© 2024 Trident Group of Institutions. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
