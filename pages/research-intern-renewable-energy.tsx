import React, { useState } from 'react';
import Layout from './components/Layout';

interface FormData {
  name: string;
  email: string;
  phone: string;
  resume: File | null; // Explicitly set the type for resume
  motivation: string;
}

export default function RenewableEnergyInternshipApplication() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    resume: null,
    motivation: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files ? e.target.files[0] : null,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
          <h2 className="text-4xl text-[#316b9e] font-bold text-center mb-4">Apply for Renewable Energy Internship</h2>
          <p className="text-lg text-center text-gray-700 mb-8">
            Please fill out the form below to apply for the Renewable Energy Research Internship.
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
                  id="message" 
                  name="message" 
                  rows={4} 
                  required 
                  className="w-full border border-gray-300 rounded-md p-2"
                ></textarea>
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
