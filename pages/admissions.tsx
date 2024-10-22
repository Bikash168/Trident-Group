import Head from 'next/head';
import Layout from './components/Layout';

export default function Admissions() {
  return (
    <>
      <Layout>
        <Head>
          <title>Admissions | Trident Group of Institutions</title>
          <meta
            name="description"
            content="Join us at Trident Group of Institutions for a transformative educational experience."
          />
        </Head>

        {/* Header Section */}
        <header className="bg-[#316b9e] text-white p-12 text-center">
          <h1 className="text-5xl font-bold fade-section">Admissions</h1>
          <p className="mt-4 text-lg fade-section max-w-3xl mx-auto">
            Join us at Trident Group of Institutions for a transformative educational experience that shapes your future.
          </p>
        </header>

        {/* Eligibility Criteria Section */}
        <section className="p-12 bg-gray-50 flex flex-col items-center fade-section">
          <h2 className="text-4xl font-semibold text-[#316b9e] text-center">Eligibility Criteria</h2>
          <ul className="list-disc mt-6 text-gray-700 text-center max-w-xl space-y-2">
            <li>B.Tech: 10+2 with PCM/PCB</li>
            <li>M.Tech: B.Tech in relevant field</li>
            <li>MBA: Graduation in any discipline</li>
            <li>BBA: 10+2 in any stream</li>
          </ul>
        </section>

        {/* Admission Process Section */}
        <section className="p-12 bg-white flex flex-col items-center fade-section">
          <h2 className="text-4xl font-semibold text-[#316b9e] text-center">Admission Process</h2>
          <ol className="list-decimal mt-6 text-gray-700 text-center max-w-2xl space-y-2">
            <li>Fill out the online application form.</li>
            <li>Submit required documents.</li>
            <li>Pay the application fee.</li>
            <li>Attend the entrance examination/interview (if applicable).</li>
            <li>Check admission results on our website.</li>
          </ol>
          <a
            href="application-form-link"
            className="mt-6 bg-[#316b9e] text-white py-3 px-8 rounded-lg shadow-lg hover:bg-[#25537b] transition duration-300 ease-in-out transform hover:scale-105"
          >
            Apply Now
          </a>
        </section>

        {/* Important Dates Section */}
        <section className="p-12 bg-gray-50 flex flex-col items-center fade-section">
          <h2 className="text-4xl font-semibold text-[#316b9e] text-center">Important Dates</h2>
          <table className="mt-6 w-full max-w-3xl text-center border-collapse border border-gray-300 text-gray-700">
            <thead>
              <tr className="bg-[#316b9e] text-white">
                <th className="border p-4">Event</th>
                <th className="border p-4">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-4">Application Start Date</td>
                <td className="border p-4">January 1, 2024</td>
              </tr>
              <tr>
                <td className="border p-4">Application End Date</td>
                <td className="border p-4">March 31, 2024</td>
              </tr>
              <tr>
                <td className="border p-4">Entrance Exam Date</td>
                <td className="border p-4">April 15, 2024</td>
              </tr>
              <tr>
                <td className="border p-4">Results Announcement</td>
                <td className="border p-4">April 30, 2024</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Scholarships and Financial Aid Section */}
        <section className="p-12 bg-white flex flex-col items-center fade-section">
          <h2 className="text-4xl font-semibold text-[#316b9e] text-center">Scholarships and Financial Aid</h2>
          <p className="mt-6 text-gray-700 text-center max-w-3xl">
            We offer various scholarships based on merit and need. For more information, please contact our admissions office or visit our scholarships page.
          </p>
        </section>

        {/* Contact Us Section */}
        <section className="p-12 bg-gray-50 flex flex-col items-center fade-section">
          <h2 className="text-4xl font-semibold text-[#316b9e] text-center">Contact Us</h2>
          <p className="mt-6 text-gray-700 text-center">For any queries regarding admissions, please reach out to us:</p>
          <p className="text-gray-800">Email: admissions@trident.ac.in</p>
          <p className="text-gray-800">Phone: +91-XXXXXXXXXX</p>
          <form className="mt-6 w-full max-w-2xl flex flex-col items-center space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded w-full"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded w-full"
              required
            />
            <textarea
              placeholder="Your Message"
              className="p-3 border border-gray-300 rounded w-full"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#316b9e] text-white py-3 px-8 rounded-lg shadow-lg hover:bg-[#25537b] transition duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Global Styles */}
        <style jsx global>{`
  html,
  :host {
      -webkit-text-size-adjust: 100%;
      text-size-adjust: 100%;
  }

  body {
      margin: 0;
      padding: 0;
      background-color: #ffffff;
      color: black;
      font-family: 'Arial', sans-serif;
      min-height: 100%;
  }

  * {
      box-sizing: border-box;
  }
`}</style>
      </Layout>
    </>
  );
}
