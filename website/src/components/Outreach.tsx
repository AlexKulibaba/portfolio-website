import React from "react";

const Outreach = () => {
  return (
    <div className="container mx-auto px-6 flex flex-wrap justify-between">
      <div className="w-1/2 h-auto  p-8">
        <h2 className="text-3xl font-bold mb-2 text-left">Get in Touch</h2>
        <h2 className="text-3xl font-bold mb-6 text-left">
          alex.kulibaba@icloud.com
        </h2>
        <h2 className="text-2xl mb-2 text-left">0493 824 029</h2>
        <h2 className="text-2xl mb-2 text-left">
          624 702-730 Harris Street 2007 Sydney
        </h2>
      </div>
      <div className="mx-auto text-gray-900 p-8 rounded-lg w-full max-w-lg h-auto">
        {" "}
        {/* Changed max-w-md to max-w-lg */}
        {/* <h2 className="text-3xl font-bold mb-6 text-left">Contact Me</h2> */}
        <form className="space-y-4 sm:space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm sm:text-md font-medium"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="pl-2 mt-1 block w-full h-10 sm:h-12 rounded-md border-gray-900 border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-md sm:text-lg"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm sm:text-md font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="pl-2 mt-1 block w-full h-10 sm:h-12 rounded-md border-gray-900 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-md sm:text-lg"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm sm:text-md font-medium"
            >
              Your Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="pl-2 mt-1 block w-full h-10 sm:h-12 rounded-md border-gray-900 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-md sm:text-lg"
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="block text-sm sm:text-md font-medium"
            >
              Service Required
            </label>
            <input
              type="text"
              id="service"
              name="service"
              className="pl-2 mt-1 block w-full h-10 sm:h-12 rounded-md border-gray-900 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-md sm:text-lg"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-4 rounded text-md sm:text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Outreach;
