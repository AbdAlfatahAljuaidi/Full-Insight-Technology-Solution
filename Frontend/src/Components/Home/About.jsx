import React from 'react';
import { FaLightbulb, FaGlobe, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import { SiWebflow } from 'react-icons/si';
import { Link } from 'react-router-dom';

import md1 from '../../assets/md1.png'
import md2 from '../../assets/md2.png'
import epicor from '../../assets/epicor-logo.svg'



import {
  Bars3Icon,
  XMarkIcon,
  ServerStackIcon,
  CloudIcon,
  PhoneIcon,
  AcademicCapIcon,
  UsersIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  BriefcaseIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

import { IoServer } from 'react-icons/io5';


const About = () => {
  
  return (
    <section className="about py-28  min-h-screen flex justify-center items-center">
      <div className="container px-4 text-center">
        <h3 className="text-[#0078B8] font-semibold text-xl mb-6">What we provide</h3>
        <h1 className="font-extrabold text-4xl text-gray-900 mb-12">ERP Solutions</h1>

        {/* First row of cards */}
        <div className="cards flex flex-wrap justify-center gap-8">
          <div className="card p-6 bg-white shadow-lg rounded-lg border-r-4 border-transparent w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:transform hover:scale-105 transition-all duration-300">
            <div className="icon-container flex justify-center items-center mb-4 transition-transform duration-500 transform hover:rotate-360">
              <img src={epicor} className="text-6xl text-[#0078B8] mt-5 w-52  " />
            </div>
            <h1 className="text-xl font-semibold mb-2">Epicor ERP</h1>
            <h4 className="text-sm mb-4 text-gray-600">
            An ERP system to boost efficiency, manage employees and payroll, provide financial reports, control inventory, enhance productivity, and support strategic decisions with analytics.
            </h4>
            {/* Creative 'Read more' button */}
         <Link to={'/Epicor-ERP'} >  <a  className="readmore inline-block font-semibold py-2 px-6 bg-gradient-to-r from-main to-gray-300 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-2xl">
              Read More
            </a></Link> 
          </div>

          <div className="card p-6 bg-white shadow-lg rounded-lg border-r-4 border-transparent w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:transform hover:scale-105 transition-all duration-300">
            <div className="icon-container flex justify-center items-center mb-4 transition-transform duration-500 transform hover:rotate-360">
              <img src={md1} className="text-4xl text-[#0078B8]  w-52" />
            </div>
            <h1 className="text-xl font-semibold mb-2">Microsoft D365 Finance and Operation </h1>
            <h4 className="text-sm mb-4 text-gray-600">
            A solution to streamline finance, operations, inventory, payroll, and support decision-making with real-time insights.
            </h4>
            {/* Creative 'Read more' button */}
            <Link to={'/D365FinanceOperations'}>
            <a  className="readmore inline-block text-indigo-600 font-semibold py-2 px-6 bg-gradient-to-r from-main to-gray-300 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-2xl">
              Read More
            </a>
            </Link>
          </div>

          <div className="card p-6 bg-white shadow-lg rounded-lg border-r-4 border-transparent w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:transform hover:scale-105 transition-all duration-300">
            <div className="icon-container flex justify-center items-center mb-4 transition-transform duration-500 transform hover:rotate-360">
              <img src={md2} className="text-4xl text-[#0078B8]  w-52" />
            </div>
            <h1 className="text-xl font-semibold mb-2">Microsoft D365 Business Central</h1>
            <h4 className="text-sm mb-4 text-gray-600">
            Microsoft D365 Business Central is an all-in-one solution that streamlines finance, sales, customer service, and inventory management with real-time insights for better decision-making.
            </h4>
            {/* Creative 'Read more' button */}
            <Link to={'/D365BusinessCentral'}>
            <a href="#" className="readmore inline-block text-indigo-600 font-semibold py-2 px-6 bg-gradient-to-r from-main to-gray-300 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-2xl">
              Read More
            </a>
            </Link>
          </div>
        </div>

        {/* Second row of cards */}
        <div className="cards flex flex-wrap justify-center gap-8 mt-12">
          <div className="card p-6 bg-white shadow-lg rounded-lg border-r-4 border-transparent w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:transform hover:scale-105 transition-all duration-300">
            <div className="icon-container flex justify-center items-center mb-4 transition-transform duration-500 transform hover:rotate-360">
              <ShieldCheckIcon className="text-xl text-[#0078B8] w-20" />
            </div>
            <h1 className="text-xl font-semibold mb-2">ERP For Pharamcetual Industries </h1>
            <h4 className="text-sm mb-4 text-gray-600">
            ERP for pharmaceutical industries optimizes inventory, production, regulatory compliance, and financial management, improving efficiency, accuracy, and decision-making across operations.

            </h4>
            {/* Creative 'Read more' button */}
            <Link to={'/ERPPharmaIndustries'}>
            <a href="#" className="readmore inline-block text-indigo-600 font-semibold py-2 px-6 bg-gradient-to-r from-main to-gray-300 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-2xl">
              Read More
            </a>
            </Link>
          </div>

          <div className="card p-6 bg-white shadow-lg rounded-lg border-r-4 border-transparent w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:transform hover:scale-105 transition-all duration-300">
            <div className="icon-container flex justify-center items-center mb-4 transition-transform duration-500 transform hover:rotate-360">
              <BriefcaseIcon className="text-4xl text-[#0078B8]  w-20" />
            </div>
            <h1 className="text-xl font-semibold mb-2">ERP Consultation and Implementation</h1>
            <h4 className="text-sm mb-4 text-gray-600">
            ERP consultation and implementation services help businesses select, customize, and integrate ERP systems to improve operations and efficiency.
            </h4>
            {/* Creative 'Read more' button */}
            <Link to={'/ERPConsultationImplementation'}>
            <a href="#" className="readmore inline-block text-indigo-600 font-semibold py-2 px-6 bg-gradient-to-r from-main to-gray-300 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-2xl">
              Read More
            </a>
            </Link>
          </div>

          <div className="card p-6 bg-white shadow-lg rounded-lg border-r-4 border-transparent w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:transform hover:scale-105 transition-all duration-300">
            <div className="icon-container flex justify-center items-center mb-4 transition-transform duration-500 transform hover:rotate-360">
              <GlobeAltIcon className="text-4xl text-[#0078B8]  w-20" />
            </div>
            <h1 className="text-xl font-semibold mb-2">ERP Development</h1>
            <h4 className="text-sm mb-4 text-gray-600">
            ERP development involves designing and customizing ERP systems to meet business needs, streamline operations, and enhance efficiency and scalability.
            </h4>
            {/* Creative 'Read more' button */}
            <Link to={'/ERPDevelopment'}>
            <a href="#" className="readmore inline-block text-indigo-600 font-semibold py-2 px-6 bg-gradient-to-r from-main to-gray-300 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-2xl">
              Read More
            </a>
            </Link>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default About;
