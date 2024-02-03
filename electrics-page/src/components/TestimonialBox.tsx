import React from "react";

// Define the types for the props
type TestimonialProps = {
  text: string;
  author: string;
  date: string;
};

const TestimonialBox: React.FC<TestimonialProps> = ({ text, author, date }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <p className="italic">"{text}"</p>
      <div className="flex justify-between items-center mt-4">
        <span className="font-bold">{author}</span>
        <span className="text-sm text-gray-600">{date}</span>
      </div>
      <div className="text-yellow-500 text-lg mt-2">
        ★★★★★ {/* Display 5 star icons */}
      </div>
    </div>
  );
};

export default TestimonialBox;
