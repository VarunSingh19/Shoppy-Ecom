import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="container mx-auto my-10 p-8 bg-white shadow-lg">
      <h1 className="text-4xl font-semibold mb-6 text-[#00B377]">About Us :</h1>
      <p className="text-lg mb-6">
        Welcome to Shoppy, your one-stop destination for all your shopping needs. We are passionate about providing you with the best online shopping experience, offering a wide range of high-quality products at competitive prices.
      </p>

      <p className="text-lg mb-6">
        At Shoppy, we believe in making your shopping journey enjoyable and convenient. Our user-friendly website allows you to browse through a diverse collection of products, from fashion and electronics to home decor and more.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-[#00B377]">Our Mission</h2>
      <p className="text-lg mb-6">
        Our mission is to deliver exceptional value to our customers by offering a curated selection of products that combine quality, style, and affordability. We strive to create a seamless and secure online shopping experience for you.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-[#00B377]">Contact Us</h2>
      <div className="flex items-center space-x-4 mb-6">
        <FaPhoneAlt className="text-2xl text-[#00B377]" />
        <span className="text-lg">Customer Support: +1 (123) 456-7890</span>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <FaEnvelope className="text-2xl text-[#00B377]" />
        <span className="text-lg">Email: support@shoppy.com</span>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <FaMapMarkerAlt className="text-2xl text-[#00B377]" />
        <span className="text-lg">Address: 123 Shoppy Street, India.</span>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-[#00B377]">Visit Our Store</h2>
      <p className="text-lg mb-6">
        If you prefer the in-person shopping experience, feel free to visit our physical store. Our friendly staff will be happy to assist you and provide personalized recommendations.
      </p>

      <p className="text-lg mb-6">
        Thank you for choosing Shoppy. We look forward to serving you and making your shopping experience delightful!
      </p>
    </div>
  );
};

export default AboutUs;
