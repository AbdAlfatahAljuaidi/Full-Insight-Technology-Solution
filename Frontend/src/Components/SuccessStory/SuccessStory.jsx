import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { FaCheckCircle } from 'react-icons/fa';
import image from '../../assets/Deal.jpg';
import { Link } from 'react-router-dom';

const SuccessStory = () => {
  // إدارة النص لكل قصة
  const [storyText, setStoryText] = useState('');

  const changeStoryText = (story) => {
    if (story === 'clientA') {
      setStoryText(
        'Client A reduced operational costs by 30%, enhanced customer satisfaction, and improved overall efficiency by using our ERP system.'
      );
    } else if (story === 'clientB') {
      setStoryText(
        'Client B reduced patient management times by 40%, improved staff efficiency, and enhanced overall care quality using our automation solutions.'
      );
    } else if (story === 'clientC') {
      setStoryText(
        'Client C used our cloud-based ERP system to streamline operations, reduce costs, and scale their retail business efficiently.'
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
  
      <div className="container mx-auto px-6 py-12 flex-1 text-white">
        <div className="bg-white text-gray-800 shadow-2xl rounded-lg p-10 md:p-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#0078B8]">
            Client Success Stories
          </h1>
          <img src={image} alt="" className="w-full h-[60vh]" />
          
          {/* النص على شكل نقاط */}
          <div className="my-10">
            <ul className="list-disc pl-5 text-lg md:text-xl leading-relaxed text-gray-700">
              <li>Impact of modern technologies in improving operational efficiency.</li>
              <li>Tailored services that provide solutions to unique business challenges.</li>
              <li>Achieving measurable results such as cost reduction and increased customer satisfaction.</li>
              <li>Industries transformed through scalable solutions, including manufacturing, healthcare, and retail.</li>
            </ul>
          </div>

          {/* Success Story Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f1f1f1] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <FaCheckCircle className="text-2xl text-[#0078B8]" />
                <h3 className="text-xl font-semibold">Pharmaceutical Industries</h3>
              </div>
              <p className="text-gray-700 mb-4">
              We developed an ERP system for the pharmaceutical company to improve efficiency and streamline key operations like inventory, sales, and finance, enabling better decision-making and business growth.


              </p>
              <button
                className="bg-[#0078B8] text-white px-4 py-2 rounded-lg hover:bg-[#005f7f] transition-all duration-200"
                onClick={() => changeStoryText('clientA')}
              >
                Learn More
              </button>
            </div>

            <div className="bg-[#f1f1f1] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <FaCheckCircle className="text-2xl text-[#0078B8]" />
                <h3 className="text-xl font-semibold">Client B - Streamlined Processes</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Client B, a healthcare provider, enhanced patient management and reduced processing times by 40% using our automation solutions.
              </p>
              <button
                className="bg-[#0078B8] text-white px-4 py-2 rounded-lg hover:bg-[#005f7f] transition-all duration-200"
                onClick={() => changeStoryText('clientB')}
              >
                Learn More
              </button>
            </div>

            <div className="bg-[#f1f1f1] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <FaCheckCircle className="text-2xl text-[#0078B8]" />
                <h3 className="text-xl font-semibold">Client C - Scalable Solutions</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Client C leveraged our cloud-based ERP system to scale its retail business, cutting costs and improving efficiency.
              </p>
              <button
                className="bg-[#0078B8] text-white px-4 py-2 rounded-lg hover:bg-[#005f7f] transition-all duration-200"
                onClick={() => changeStoryText('clientC')}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* عرض النص المتغير */}
          {storyText && (
            <div className="mt-8 p-6 bg-[#f9f9f9] rounded-lg shadow-md text-gray-800">
              <h2 className="text-2xl font-semibold text-[#0078B8] mb-4">Details:</h2>
              <p>{storyText}</p>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-semibold text-[#0078B8] mb-4">Start Your Success Story with Us</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Let us help you transform your business operations with our innovative solutions and services.
            </p>
            <Link to={'/Contact'}>
              <button className="bg-[#0078B8] text-white px-8 py-3 text-lg rounded-full hover:bg-[#005f7f] transition-all duration-200">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuccessStory;
