// pages/contact.tsx
import Head from 'next/head';
import Layout from './components/Layout'; // Import your Layout component

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact Us - Trident Group of Institutions</title>
        <meta name="description" content="Get in touch with Trident Group of Institutions for inquiries, support, and feedback." />
      </Head>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl text-[#316b9e] font-bold text-center mb-8 transition transform duration-500 hover:scale-105">Contact Us</h1>

          <h2 className="text-3xl text-[#316b9e] font-semibold text-center mb-12">We'd Love to Hear From You!</h2>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <h3 className="text-xl text-[#316b9e] font-semibold mb-4">Get in Touch</h3>
              <p className="text-sm text-gray-700 mb-4">
                For any inquiries or support, please fill out the form below, and our team will get back to you as soon as possible.
              </p>

              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2 text-sm">Name:</label>
                  <input type="text" id="name" name="name" required className="w-full border rounded-md p-2 text-sm" />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2 text-sm">Email:</label>
                  <input type="email" id="email" name="email" required className="w-full border rounded-md p-2 text-sm" />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2 text-sm">Message:</label>
                  <textarea id="message" name="message" rows={4} required className="w-full border rounded-md p-2 text-sm"></textarea>
                </div>

                <button type="submit" className="bg-[#316b9e] text-white rounded-md py-2 px-4 hover:bg-[#254b7d] transition duration-300 text-sm">
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <h3 className="text-xl text-[#316b9e] font-semibold mb-4">Contact Information</h3>
              <p className="text-sm text-gray-700 mb-4">
                If you prefer to reach us directly, feel free to use the following contact details:
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Address:</strong> Trident Group of Institutions, F2, Chandaka Industrial Estate, Technology Corridor, Infocity Area, Chandrasekharpur, Bhubaneswar, Odisha, 751024
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Phone:</strong> <a href="tel:+919861191195" className="text-blue-600 hover:underline">+91 98611 91195</a>
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:info@trident.ac.in" className="text-blue-600 hover:underline">info@trident.ac.in</a>
              </p>

              <h4 className="text-lg text-[#316b9e] font-semibold mt-6">Follow Us</h4>
              <ul className="flex space-x-4 mt-2">
                <li><a href="https://facebook.com" className="text-blue-600 hover:text-blue-700">Facebook</a></li>
                <li><a href="https://twitter.com" className="text-blue-600 hover:text-blue-700">Twitter</a></li>
                <li><a href="https://instagram.com" className="text-blue-600 hover:text-blue-700">Instagram</a></li>
                <li><a href="https://linkedin.com" className="text-blue-600 hover:text-blue-700">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* FAQs Card */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <h3 className="text-xl text-[#316b9e] font-semibold mb-4">Frequently Asked Questions</h3>
              <ul className="text-sm text-gray-700">
                <li className="mb-2"><strong>Q:</strong> What programs do you offer?</li>
                <li>A: We offer a variety of undergraduate and postgraduate programs in engineering, management, and more.</li>
                <li className="mb-2"><strong>Q:</strong> How can I apply?</li>
                <li>A: You can apply online through our official website.</li>
                <li className="mb-2"><strong>Q:</strong> What are the admission requirements?</li>
                <li>A: Admission requirements vary by program; please check the specific program details.</li>
              </ul>
            </div>

            {/* Services Card */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <h3 className="text-xl text-[#316b9e] font-semibold mb-4">Our Services</h3>
              <ul className="text-sm text-gray-700">
                <li className="mb-2">• Career Counseling</li>
                <li className="mb-2">• Placement Support</li>
                <li className="mb-2">• Skill Development Workshops</li>
                <li>• Industry Partnerships for Internships</li>
              </ul>
              <p className="mt-4 text-sm">For more information on our services, please contact us.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
