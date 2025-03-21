import React from 'react';
import image from '../../assets/choose-1.jpg';

const Choose = () => {
  return (
    <section className="choose flex flex-col lg:flex-row items-center gap-12 mt-28 w-11/12 mx-auto">
      {/* Image Section */}
      <div className="choose-1 w-full lg:w-5/12">
        <img
          src={image}
          alt="Why Choose Us"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text and Buttons Section */}
      <div className="choose-2 w-full lg:w-7/12 text-center lg:text-left">
        <h3 className="text-[#0078B8] text-lg font-bold uppercase tracking-wide">
          Why Choose Us?
        </h3>
        <h1 className="text-2xl md:text-4xl font-bold mt-4 leading-snug">
        Unlock Your Business Potential with FITS
        </h1>
        <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
        Maximize Your Investment: As certified Microsoft and Epicor partners, we ensure you get the most out of your ERP investment.
Streamline Operations: Our tailored solutions and expert implementation drive efficiency and optimize your business processes.
Gain a Competitive Edge: Leverage the power of leading ERP platforms to improve decision-making and stay ahead of the competition.
Experience Peace of Mind: Our comprehensive support and proactive approach ensure your ERP system runs smoothly, allowing you to focus on your core business.
Partnership You Can Trust: We are committed to your success, providing transparent communication and building lasting relationships.
        </p>

        {/* Buttons */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Speed of Operation',
            'High Quality',
            'Customizability',
            'Easy Integration',
            'Excellent Support',
            'Powerful Analytics',
          ].map((text, index) => (
            <button
              key={index}
              className="hover-effect w-full text-left p-4 bg-white border-l-4 border-[#0078B8] shadow-md transition-all duration-300 ease-in-out hover:text-white hover:bg-[#0078B8] rounded-lg"
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;