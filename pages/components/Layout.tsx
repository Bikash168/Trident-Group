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
import { FaXTwitter } from 'react-icons/fa6';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Hamburger menu state

  useEffect(() => {
    setMounted(true); // Ensures components render only on the client
  }, []);

  if (!mounted) {
    return null; // Prevents rendering on the server
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle hamburger menu state
  };

  return (
    <div className="bg-white text-gray-900">
      <Head>
        <title>Trident Group of Institutions</title>
      </Head>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        {/* Top Bar Section */}
        <div className="bg-gray-100 text-gray-700 text-xs md:text-sm py-2">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8 space-y-2 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-x-4">
              <span className="flex items-center">
                <FaMapMarkerAlt className="mr-1" /> Bhubaneswar, India
              </span>
              <span className="flex items-center">
                <FaPhoneAlt className="mr-1" /> +91 98611 91195
              </span>
              <span className="flex items-center">
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

        {/* Main Navigation */}
        <div className="container mx-auto p-4 flex justify-between items-center">
          <Link href="/" className="flex items-center w-full md:w-auto">
            <div className="space-x-3">
              <img src="/tgi_logo.png" alt="TGI Logo" className="h-10 md:h-12 w-auto" />
            </div>
          </Link>
          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <ul className="flex space-x-4 md:space-x-6">
              <li>
                <Link href="/about-us" className="hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-blue-600">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/news-and-events" className="hover:text-blue-600">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-100 shadow-lg">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link href="/about-us" className="hover:text-blue-600" onClick={toggleMenu}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-blue-600" onClick={toggleMenu}>
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/news-and-events" className="hover:text-blue-600" onClick={toggleMenu}>
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              <li><Link href="/index" className="text-gray-700 block hover:text-blue-600">Home</Link></li>
              <li><Link href="/about-us" className="text-gray-700 block hover:text-blue-600">About Us</Link></li>
              <li><Link href="/programs" className="text-gray-700 block hover:text-blue-600">Programs</Link></li>
              <li><Link href="/news-and-events" className="text-gray-700 block hover:text-blue-600">News & Events</Link></li>
              <li><Link href="/contact" className="text-gray-700 block hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>

          {/* Trident Group Websites */}
          <div>
            <h3 className="text-lg text-[#316b9e] font-bold mb-4">Trident Group Websites</h3>
            <ul className="space-y-2">
              <li><Link href="https://tat.ac.in/" className="text-gray-700 block hover:text-blue-600">Trident Academy of Technology</Link></li>
              <li><Link href="https://tact.ac.in/" className="text-gray-700 block hover:text-blue-600">Trident Academy of Creative Technology</Link></li>
              <li><a href="https://taps.ac.in/" className="text-gray-700 block hover:text-blue-600">Trident Academy of Professional Studies</a></li>
              <li><a href="https://dfgroup.in/" className="text-gray-700 block hover:text-blue-600">The DF Group</a></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg text-[#316b9e] font-bold mb-4">Contact Us</h3>
            <address>
              Trident Group of Institutions,
              <br />F2, Chandaka Industrial Estate,
              <br />Technology Corridor, Infocity Area,
              <br />Chandrasekharpur, Bhubaneswar,
              <br />Odisha. 751024<br />

              <br /><FaPhoneAlt className="inline-block mr-2" /> +91 98611 91195 <br />
              <br /><FaEnvelope className="inline-block mr-2" /> info@trident.ac.in
            </address>
          </div>
        </div>

        <div className="text-center mt-8">
          <p>&copy; 2024 Trident Group of Institutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
