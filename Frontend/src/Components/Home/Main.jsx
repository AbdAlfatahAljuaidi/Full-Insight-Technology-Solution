import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

import EpicorImage from '../../assets/ERP.png';
import MicrosoftImage from '../../assets/Microsoft_Dynamics365_blog-1170x617.jpg';
import Main3 from '../../assets/Image 1 .jpeg';
import Epicor from '../../assets/OIP.jpeg';
import Epicor4 from '../../assets/Business-Central-Circle-of-Products.jpg';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <Swiper
            className="w-full"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            effect="fade"
            grabCursor={true} 
            keyboard={{ enabled: true }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: true, pauseOnHover: true }}
        >
            {/* Epicor Slide */}
            <SwiperSlide>
                <div className="relative w-full h-[87vh]">
                    <img className="object-cover w-full h-full" src={Epicor} alt="Epicor ERP" />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                        <div className="text-center">
                            <h1 className="text-white text-xl">STREAMLINE YOUR BUSINESS OPERATIONS</h1>
                            <h2 className="text-white text-5xl font-bold mt-3">Epicor ERP Solutions</h2>
                            <h1 className="text-white text-xl mt-6">
                                Manage your operations seamlessly, from procurement to production and sales.
                            </h1>
                            <Link to={'/contact'} >
                            <button className="mt-4 bg-[#0078B8] text-white rounded-lg px-9 py-3 hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300">
                                Learn More
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            {/* Microsoft Slide */}
            <SwiperSlide>
                <div className="relative w-full h-[87vh]">
                    <img className="object-cover w-full h-full" src={MicrosoftImage} alt="Microsoft Cloud" />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                        <div className="text-center">
                        <h1 className="text-white text-xl">TRANSFORM YOUR BUSINESS WITH INNOVATIVE TECHNOLOGIES</h1>
<h2 className="text-white text-5xl font-bold mt-3">Harness the Potential of Microsoft Solutions</h2>
<h1 className="text-white text-xl mt-6">
    Optimize your operations, improve collaboration, and drive growth with Microsoft cloud solutions.
</h1>

                            <Link to={'/contact'} >
                            <button className="mt-4 bg-[#0078B8] text-white rounded-lg px-9 py-3 hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300">
                                Learn More
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            {/* Third Slide - Original */}
            <SwiperSlide>
                <div className="relative w-full h-[87vh]">
                    <img className="object-cover w-full h-full" src={Main3} alt="Slide 3" />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                        <div className="text-center">
                            <h1 className="text-white text-xl">SECURE IT SOLUTION SERVICE.</h1>
                            <h2 className="text-white text-5xl font-bold mt-3">Collaboration enhances knowledge</h2>
                            <h1 className="text-white text-xl mt-6">
                                We provide the best collaboration for universities.
                            </h1>
                            <Link to={'/contact'} >
                            <button className="mt-4 bg-[#0078B8] text-white rounded-lg px-9 py-3 hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300">
                                Learn More
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>




              {/* Fourth Slide - Original */}
              <SwiperSlide>
                <div className="relative w-full h-[87vh]">
                    <img className="object-cover w-full h-full" src={Epicor4} alt="Slide 3" />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                        <div className="text-center">
                        <h1 className="text-white text-xl">REVOLUTIONIZE YOUR BUSINESS WITH BUSINESS CENTRAL</h1>
<h2 className="text-white text-5xl font-bold mt-3">Unlock the Power of Business Central</h2>
<h1 className="text-white text-xl mt-6">
    Streamline your operations with Business Central.
</h1>

                            <Link to={'/contact'} >
                            <button className="mt-4 bg-[#0078B8] text-white rounded-lg px-9 py-3 hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300">
                                Learn More
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Main;
