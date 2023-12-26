import React from 'react';

const ContactUs = () => {
  return (
    <div className="sm:mt-14 lg:mt-0 py-5 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-3 mb-lg-5">
          <span className="text-gray-500">Let's Talk</span>
          <h2 className="text-4xl font-bold mb-3">Contact Us</h2>
          <p className="text-lg">Thank you for choosing Shoppy. We look forward to serving you and making your shopping experience delightful!</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 md:mr-4">
            <form>
              <div className="mb-4">
                <input className="w-full px-4 py-3 bg-gray-100 rounded" placeholder="Full name" type="text"/>
              </div>
              <div className="mb-4">
                <input className="w-full px-4 py-3 bg-gray-100 rounded" placeholder="Email address" type="email"/>
              </div>
              <div className="mb-4">
                <textarea className="w-full px-4 py-3 bg-gray-100 rounded" placeholder="Your message" rows="5"></textarea>
              </div>
              <div className="w-full md:w-1/2">
                <button className="w-full px-4 py-2 bg-[#00B377] text-white rounded" type="submit">Send message</button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2 sm:mt-4 ">
            <div className="mt-4 md:mt-0"><img alt="Map" className="w-full h-auto" src="https://freefrontend.dev/assets/map-img-1.png"/></div>
            <div className="mt-3">
              <p className="text-gray-700">Shoppy Store, India.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
