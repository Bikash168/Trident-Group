// pages/programs.tsx
import Head from 'next/head';
import Layout from './components/Layout'; // Import your Layout component
import Link from 'next/link'; // Import Link from Next.js

export default function Library() {
    return (
      <Layout> {/* Use the Layout component */}
        <div className="bg-white text-gray-900">
          <Head>
            <title>Trident Library</title>
          </Head>
    
          {/* Header */}
          <header className="bg-[#316b9e] text-white py-4">
            <div className="container mx-auto text-center">
              <h1 className="text-3xl font-bold">Trident Library</h1>
              <p className="mt-2">Empowering Knowledge and Learning</p>
            </div>
          </header>
    
          {/* Introduction */}
          <section className="container mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4">Welcome to Trident Library</h2>
            <p className="mb-4">
              Trident Library is dedicated to supporting the academic success of our students
              and faculty. We offer a vast collection of resources, a comfortable study environment,
              and various services to enhance your learning experience.
            </p>
            <img src="../images/library_image.jpg" alt="Library Interior" className="w-full h-auto rounded-lg" />
          </section>
    
          {/* Services */}
          <section className="bg-gray-100 py-6">
            <div className="container mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">Services</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Access to a vast collection of books and journals</li>
                <li>Study rooms and collaborative spaces</li>
                <li>Research assistance and workshops</li>
                <li>Online resources and e-books</li>
                <li>Interlibrary loan services</li>
              </ul>
            </div>
          </section>
    
          {/* Resources */}
          <section className="container mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4">Resources</h2>
            <p className="mb-4">
              Explore our wide range of resources, including academic databases, online journals,
              and physical books available in the library.
            </p>
            <Link href="/resources" className="bg-[#316b9e] text-white px-4 py-2 rounded hover:bg-[#255f8a]">
              View All Resources
            </Link>
          </section>
        </div>
      </Layout> // Closing the Layout component
    );
}
