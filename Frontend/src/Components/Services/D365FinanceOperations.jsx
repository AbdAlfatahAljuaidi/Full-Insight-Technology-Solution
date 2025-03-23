import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Image from '../../assets/Micro.png';
import Process from '../../assets/Microsoft_Dynamics365_blog-1170x617.jpg';

const D365FinanceOperations = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
    
      <div className="container mx-auto px-6 py-12 flex-1">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl mx-auto text-gray-800">
          <h1 className="text-5xl font-bold text-[#0078B8] mb-8 text-center">Microsoft D365 Finance & Operations</h1>
          <img src={Image} alt="Microsoft D365 Finance & Operations" className="w-full rounded-lg mb-6" />
          
          <p className="text-lg leading-relaxed mb-6">
            Microsoft Dynamics 365 Finance & Operations is a comprehensive enterprise resource planning (ERP) solution designed to enhance financial visibility, optimize supply chains, and drive business growth. With AI-driven insights and automation, it supports industries such as finance, manufacturing, retail, and supply chain management.
          </p>
          
          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">Why Choose D365 Finance & Operations?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">AI-Driven Insights</h3>
              <p className="text-gray-600">Utilize predictive analytics to optimize financial performance and operations.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Cloud-Based Flexibility</h3>
              <p className="text-gray-600">Access your ERP system from anywhere with secure cloud deployment.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Integrated Finance Management</h3>
              <p className="text-gray-600">Manage budgets, forecasting, and real-time financial insights seamlessly.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Advanced Supply Chain</h3>
              <p className="text-gray-600">Optimize inventory, logistics, and supplier relationships efficiently.</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-semibold text-[#002050] mt-10 mb-6">Industries Benefiting from D365 Finance & Operations</h2>
          <div className="flex flex-wrap gap-4">
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Finance</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Retail</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Manufacturing</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Supply Chain</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Healthcare</span>
          </div>
          
          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">Benefits of Using D365 Finance & Operations</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
            <li>Enhanced financial visibility and forecasting</li>
            <li>Automated business processes for improved efficiency</li>
            <li>Integrated analytics for better decision-making</li>
            <li>Optimized supply chain and inventory management</li>
            <li>Scalability to adapt to business growth</li>
          </ul>
          
          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">Implementation Process</h2>
          <img src={Process} alt="Implementation Process" className="w-full rounded-lg mb-6" />
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-3">
            <li>Business assessment and requirement gathering</li>
            <li>Solution customization and configuration</li>
            <li>Data migration and system integration</li>
            <li>Testing and user training</li>
            <li>Deployment and go-live support</li>
            <li>Ongoing maintenance and optimization</li>
          </ol>
          
          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">Conclusion</h2>
          <p className="text-lg leading-relaxed">
            Microsoft Dynamics 365 Finance & Operations is a powerful ERP solution that helps businesses streamline operations, enhance financial decision-making, and scale efficiently. With its AI-driven analytics, automation, and cloud capabilities, it is the go-to choice for enterprises looking to modernize their business processes.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default D365FinanceOperations;
