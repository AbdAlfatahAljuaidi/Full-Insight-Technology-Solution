import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Image from '../../assets/epicor_cover.jpeg'
import Process from '../../assets/ERP.png'


const Epicor = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
    
      <div className="container mx-auto px-6 py-12 flex-1">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl mx-auto text-gray-800">
          <h1 className="text-5xl font-bold text-[#0078B8] mb-8 text-center">Epicor ERP: A Comprehensive Overview</h1>
          <img src={Image} alt="Epicor ERP" className="w-full rounded-lg mb-6" />
          
          <p className="text-lg leading-relaxed mb-6">
            Epicor ERP is a cutting-edge enterprise resource planning system designed to enhance business operations, 
            drive efficiency, and provide real-time insights. Tailored for industries such as manufacturing, 
            distribution, retail, and services, Epicor offers a scalable and flexible solution to meet diverse business needs.
          </p>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">Why Choose Epicor ERP?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">User-Friendly Interface</h3>
              <p className="text-gray-600">Modern and intuitive UI that simplifies navigation and enhances user experience.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">AI & Automation</h3>
              <p className="text-gray-600">Leverage artificial intelligence for predictive analytics and automated workflows.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Cloud & On-Premise</h3>
              <p className="text-gray-600">Flexible deployment options that adapt to your business infrastructure.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Industry-Specific Solutions</h3>
              <p className="text-gray-600">Customizable solutions designed for manufacturing, retail, and more.</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">Industries Benefiting from Epicor ERP</h2>
          <div className="flex flex-wrap gap-4">
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Manufacturing</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Retail</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Distribution</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Automotive</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Healthcare</span>
          </div>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">Benefits of Using Epicor ERP</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
            <li>Improved operational efficiency and productivity</li>
            <li>Enhanced decision-making through data-driven insights</li>
            <li>Streamlined supply chain and inventory management</li>
            <li>Better customer relationship management</li>
            <li>Cost reduction through automation and process optimization</li>
          </ul>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">Implementation Process</h2>
          <img src={Process} alt="Implementation Process" className="w-full rounded-lg mb-6" />
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-3">
            <li>Assessment of business requirements</li>
            <li>Customization and configuration</li>
            <li>Data migration and system integration</li>
            <li>Testing and quality assurance</li>
            <li>User training and deployment</li>
            <li>Ongoing support and system optimization</li>
          </ol>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">Conclusion</h2>
          <p className="text-lg leading-relaxed">
            Epicor ERP is a robust and dynamic solution that helps businesses optimize operations and remain competitive in a rapidly evolving market.
            With advanced technology, industry-specific solutions, and flexible deployment options, Epicor ERP is the ideal choice for businesses looking to enhance efficiency and growth.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Epicor;