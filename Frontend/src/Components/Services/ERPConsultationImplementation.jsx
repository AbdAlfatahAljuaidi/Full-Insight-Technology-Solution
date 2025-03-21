import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Image from '../../assets/Main1.jpg';
import Process from '../../assets/ERP.png';

const ERPConsultationImplementation = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
   
      <div className="container mx-auto px-6 py-12 flex-1">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl mx-auto text-gray-800">
          <h1 className="text-5xl font-bold text-[#0078B8] mb-8 text-center">ERP Consultation & Implementation: A Complete Guide</h1>
          <img src={Image} alt="ERP Consultation and Implementation" className="w-full rounded-lg mb-6" />
          
          <p className="text-lg leading-relaxed mb-6">
            ERP consultation and implementation services help businesses streamline operations, optimize processes, and improve efficiency. Expert consultants guide companies through the selection, customization, and deployment of ERP solutions tailored to their needs.
          </p>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">Why Choose ERP Consultation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Expert Guidance</h3>
              <p className="text-gray-600">Experienced professionals help you select and implement the best ERP solution.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Customized Solutions</h3>
              <p className="text-gray-600">ERP systems tailored to your business requirements and industry standards.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Seamless Integration</h3>
              <p className="text-gray-600">Ensure smooth integration with existing tools and workflows.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Long-Term Support</h3>
              <p className="text-gray-600">Ongoing maintenance and optimization for sustained success.</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">Industries Benefiting from ERP Consultation</h2>
          <div className="flex flex-wrap gap-4">
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Manufacturing</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Healthcare</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Retail</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Finance</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Logistics</span>
          </div>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">Benefits of ERP Consultation</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
            <li>Enhanced business process efficiency</li>
            <li>Cost-effective ERP implementation</li>
            <li>Improved data accuracy and reporting</li>
            <li>Better decision-making with real-time insights</li>
            <li>Seamless cross-department collaboration</li>
          </ul>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">ERP Implementation Process</h2>
          <img src={Process} alt="ERP Implementation Process" className="w-full rounded-lg mb-6" />
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-3">
            <li>Business needs assessment</li>
            <li>ERP selection and customization</li>
            <li>System configuration and data migration</li>
            <li>Testing and validation</li>
            <li>Employee training and deployment</li>
            <li>Post-implementation support</li>
          </ol>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">Conclusion</h2>
          <p className="text-lg leading-relaxed">
            ERP consultation and implementation services provide businesses with the expertise needed to successfully deploy and maintain an ERP system. With the right approach, companies can improve efficiency, reduce costs, and achieve long-term success.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ERPConsultationImplementation;