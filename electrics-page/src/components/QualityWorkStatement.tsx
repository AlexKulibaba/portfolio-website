import React from 'react';

// You can replace these with actual icons from a library such as react-icons
const CheckIcon = () => <span>✔️</span>; // Placeholder for the check icon
const StarIcon = () => <span>⭐</span>; // Placeholder for the star icon
const GearIcon = () => <span>⚙️</span>; // Placeholder for the gear icon
const ThumbsUpIcon = () => <span>👍</span>; // Placeholder for the thumbs up icon

// A single benefit component
const Benefit = ({ Icon, title, children }) => (
  <div className="text-center p-4">
    <Icon />
    <h3 className="font-bold text-lg mt-2">{title}</h3>
    <p>{children}</p>
  </div>
);

// The QualityWork component that contains all the benefits
const QualityWork = () => (
  <section className="bg-gray-100 p-8">
    <div className="text-center">
      <h2 className="text-2xl font-bold">Quality Work Through Dedication</h2>
      <p className="mt-4 mb-8">
        We know that our clients are looking for quality workmanship at a price that they can afford. By choosing us,
        you are choosing to invest in efficient, innovative, and user-friendly air conditioning solutions for your home
        or business.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Benefit Icon={CheckIcon} title="Comprehensive Service">
        We supply, install, maintain, repair and replace split system and ducted air conditioning units.
      </Benefit>
      <Benefit Icon={StarIcon} title="Excellent Quality Products">
        We only work with the highest quality products and choose top of the range, energy-efficient equipment.
      </Benefit>
      <Benefit Icon={GearIcon} title="Efficient Ducted Systems">
        We’ll make sure that your system provides maximum comfort with low running costs.
      </Benefit>
      <Benefit Icon={ThumbsUpIcon} title="100% Satisfaction Guaranteed">
        Our #1 priority at Tenmen is your happiness. We stand by our services and are confident that we can solve any
        electrical problem.
      </Benefit>
    </div>
    {/* Add certifications logos here */}
    <div className="flex justify-center items-center space-x-4 mt-8">
      {/* Replace these spans with actual images/logos */}
      <span>ARCtick CERTIFIED</span>
      <span>CLEAN ENERGY COUNCIL ACCREDITED INSTALLER ISAAC JAMIESON</span>
      <span>MASTER ELECTRICIANS AUSTRALIA</span>
    </div>
  </section>
);

export default QualityWork;
