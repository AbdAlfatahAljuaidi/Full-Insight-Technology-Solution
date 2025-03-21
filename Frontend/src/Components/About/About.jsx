import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { FaUsers, FaChartLine, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col text-white">
     
      <div className="container mx-auto px-8 py-20 flex-1">
        {/* About Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#0078B8]">About Us</h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-black">
            We are a team of passionate professionals dedicated to transforming businesses through innovative
            technology solutions. Our mission is to empower organizations to achieve operational excellence and drive
            sustainable growth in an ever-evolving market landscape.
          </p>
        </div>

        {/* Our Vision Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="bg-[#1f2937] p-8 rounded-xl shadow-xl text-center hover:bg-[#2d3748] transition-all duration-300">
            <FaChartLine className="text-4xl mb-4 text-[#0078B8]" />
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To be the global leader in delivering cutting-edge solutions that drive business transformation.
            </p>
          </div>
          <div className="bg-[#1f2937] p-8 rounded-xl shadow-xl text-center hover:bg-[#2d3748] transition-all duration-300">
            <FaUsers className="text-4xl mb-4 text-[#0078B8]" />
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-300">
              A diverse team of experts, from technology innovators to industry specialists, working together to
              deliver excellence.
            </p>
          </div>
          <div className="bg-[#1f2937] p-8 rounded-xl shadow-xl text-center hover:bg-[#2d3748] transition-all duration-300">
            <FaCog className="text-4xl mb-4 text-[#0078B8]" />
            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <p className="text-gray-300">
              We focus on continuous innovation, agility, and customer-centric solutions to drive real business value.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4 text-[#0078B8]">Our Story</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-black">
          We start by thoroughly understanding your goals and requirements, establishing a strong foundation for the project. Then, our team collaborates to develop detailed strategies that ensure smooth execution and the best possible outcomes. Finally, we deliver high-quality, innovative solutions that are perfectly aligned with your vision, driving success and achieving your objectives.
          </p>
        </div>

        {/* Key Milestones */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-[#0078B8]">Our Key Milestones</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="bg-[#2d3748] p-6 rounded-xl shadow-xl text-center max-w-xs hover:bg-[#1f2937] transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">2015</h3>
              <p className="text-gray-300">Launched our first product and served over 100 clients worldwide.</p>
            </div>
            <div className="bg-[#2d3748] p-6 rounded-xl shadow-xl text-center max-w-xs hover:bg-[#1f2937] transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">2018</h3>
              <p className="text-gray-300">Expanded to three new international markets and grew our team by 50%.</p>
            </div>
            <div className="bg-[#2d3748] p-6 rounded-xl shadow-xl text-center max-w-xs hover:bg-[#1f2937] transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">2022</h3>
              <p className="text-gray-300">Achieved milestone of serving 500+ clients across various industries.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold mb-6 text-[#0078B8]">Join Us in Shaping the Future</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-black">
            Whether you're a potential client or a future team member, we’re always excited to connect with like-minded
            individuals and organizations who share our passion for growth and transformation.
          </p>
          <Link to={'/Contact'}>
          <button className="bg-[#0078B8] text-white px-8 py-3 rounded-full text-lg hover:bg-[#286280] transition-all duration-300">
            Get in Touch
          </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
