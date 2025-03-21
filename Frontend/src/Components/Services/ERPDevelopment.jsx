import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Image from '../../assets/Microsoft_Dynamics365_blog-1170x617.jpg'; // يمكنك استبدالها بالصورة المناسبة
import Process from '../../assets/epicor_cover.jpeg'; // يمكنك استبدالها بالصورة المناسبة

const ERPDevelopment = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
 
      <div className="container mx-auto px-6 py-12 flex-1">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl mx-auto text-gray-800">
          <h1 className="text-5xl font-bold text-[#0078B8] mb-8 text-center">ERP Development</h1>
          <img src={Image} alt="ERP Development" className="w-full rounded-lg mb-6" />
          
          <p className="text-lg leading-relaxed mb-6">
            ERP Development is an essential aspect of modern business management. ERP systems integrate core business processes such as finance, HR, supply chain, and inventory management into a single cohesive system, improving data visibility and decision-making.
          </p>
          
          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">Why Choose ERP Development?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Streamlined Business Processes</h3>
              <p className="text-gray-600">Unify all business operations into a single platform, reducing complexity and inefficiency.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Real-Time Data & Analytics</h3>
              <p className="text-gray-600">Access up-to-date information and make informed decisions with real-time data analytics.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Improved Collaboration</h3>
              <p className="text-gray-600">Enhance cross-departmental communication and collaboration through shared data and workflows.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Cost Reduction</h3>
              <p className="text-gray-600">Reduce operational costs by automating tasks and optimizing resource allocation.</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-semibold text-[#002050] mt-10 mb-6">Industries Benefiting from ERP Development</h2>
          <div className="flex flex-wrap gap-4">
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Manufacturing</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Retail</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Healthcare</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Finance</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Education</span>
          </div>
          
          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">Benefits of ERP Development</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
            <li>Centralized data management and access</li>
            <li>Improved reporting and business insights</li>
            <li>Enhanced scalability for business growth</li>
            <li>Streamlined compliance and regulatory reporting</li>
            <li>Increased productivity with automated processes</li>
          </ul>
          
          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">ERP Development Process</h2>
          <img src={Process} alt="ERP Development Process" className="w-full rounded-lg mb-6" />
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-3">
            <li>Business needs assessment and requirement gathering</li>
            <li>ERP system customization and integration</li>
            <li>Data migration and system testing</li>
            <li>Training employees and end-users</li>
            <li>Deployment and post-launch support</li>
            <li>Continuous updates and optimization</li>
          </ol>
          
          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">Conclusion</h2>
          <p className="text-lg leading-relaxed">
            ERP development is an investment in streamlining business operations and ensuring long-term scalability. By choosing an ERP system, companies can automate workflows, improve decision-making, and stay competitive in an ever-changing market.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ERPDevelopment;
