// ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto mt-10 mb-10">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-md">
        <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Type your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#00B377] text-white py-2 px-4 rounded-md hover:bg-[#009664] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
