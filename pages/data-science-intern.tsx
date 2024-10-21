import React, { useState, ChangeEvent, FormEvent } from 'react';
import Layout from './components/Layout'; 

export default function DataScienceInternshipApplication() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null, // Explicitly typing as File or null
    motivation: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files ? e.target.files[0] : null, // Handle file input properly
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic goes here
    // For example, you can send the data to a server or API

    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="py-16 bg-white" id="internship-application">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-[#316b9e] font-bold text-center mb-4">Apply for Data Science Internship</h2>
          <p className="text-lg text-center text-gray-700 mb-8">
            Please fill out the form below to apply for the Data Science Research Internship.
          </p>

          {submitted ? (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg text-center mb-8">
              Thank you for your application! We will review your details and get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border rounded-lg w-full py-2 px-3 text-gray-700"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border rounded-lg w-full py-2 px-3 text-gray-700"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border rounded-lg w-full py-2 px-3 text-gray-700"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Upload Resume:</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  required
                  accept=".pdf, .doc, .docx"
                  className="border rounded-lg w-full py-2 px-3 text-gray-700"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Motivation Statement:</label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="border rounded-lg w-full py-2 px-3 text-gray-700"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
