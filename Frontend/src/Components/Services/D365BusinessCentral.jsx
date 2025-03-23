import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Image from '../../assets/Image 1 .jpeg';
import Process from '../../assets/Business-Central-Circle-of-Products.jpg';
import Central from '../../assets/Central.png';


const D365BusinessCentral = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
   
      <div className="container mx-auto px-6 py-12 flex-1">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl mx-auto text-gray-800">
          <h1 className="text-5xl font-bold text-[#0078B8] mb-8 text-center">Microsoft D365 Business Central: A Comprehensive Overview</h1>
          <img src={Central} alt="Microsoft D365 Business Central" className="w-full rounded-lg mb-6" />
          
          <p className="text-lg leading-relaxed mb-6">
            Microsoft Dynamics 365 Business Central is an all-in-one business management solution designed for small and medium-sized enterprises (SMEs). It enables businesses to streamline operations, enhance decision-making, and improve financial visibility through AI-driven insights and automation.
          </p>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">Why Choose Business Central?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Scalability</h3>
              <p className="text-gray-600">Designed to grow with your business, offering flexibility and adaptability.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Seamless Integration</h3>
              <p className="text-gray-600">Integrates effortlessly with Microsoft 365 and other cloud applications.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">AI & Automation</h3>
              <p className="text-gray-600">Leverage AI-powered insights for improved forecasting and efficiency.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Cloud-Based Solution</h3>
              <p className="text-gray-600">Access data from anywhere with secure cloud hosting.</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">Industries Benefiting from Business Central</h2>
          <div className="flex flex-wrap gap-4">
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Retail</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Manufacturing</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Financial Services</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Healthcare</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Professional Services</span>
          </div>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">Benefits of Using Business Central</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
            <li>Improved financial management and reporting</li>
            <li>Streamlined supply chain and inventory control</li>
            <li>Enhanced customer relationship management</li>
            <li>Seamless collaboration across departments</li>
            <li>Reduced costs through automation and optimization</li>
          </ul>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">Implementation Process</h2>
          <img src={Process} alt="Implementation Process" className="w-full rounded-lg mb-6" />
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-3">
            <li>Business assessment and requirement gathering</li>
            <li>Customization and configuration</li>
            <li>Data migration and integration</li>
            <li>Testing and quality assurance</li>
            <li>User training and system deployment</li>
            <li>Ongoing support and optimization</li>
          </ol>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">Conclusion</h2>
          <p className="text-lg leading-relaxed">
            Microsoft Dynamics 365 Business Central is a powerful and user-friendly ERP solution tailored for small and medium businesses. With its cloud-based capabilities, seamless integration, and AI-driven insights, it helps organizations streamline their operations and achieve sustainable growth.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default D365BusinessCentral;
