import React from "react";

const ContactForm = () => {
  return (
    <div className="mx-auto text-gray-700 bg-slate-200 p-8 rounded-lg shadow-lg w-full max-w-lg h-auto">
      {" "}
      {/* Changed max-w-md to max-w-lg */}
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <form className="space-y-4 sm:space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm sm:text-md font-medium"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="pl-2 mt-1 block w-full h-10 sm:h-12 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-md sm:text-lg"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm sm:text-md font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="pl-2 mt-1 block w-full h-10 sm:h-12 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-md sm:text-lg"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm sm:text-md font-medium"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="pl-2 mt-1 block w-full h-10 sm:h-12 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-md sm:text-lg"
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="block text-sm sm:text-md font-medium"
          >
            Service
          </label>
          <input
            type="text"
            id="service"
            name="service"
            className="pl-2 mt-1 block w-full h-10 sm:h-12 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-md sm:text-lg"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-4 rounded text-md sm:text-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
