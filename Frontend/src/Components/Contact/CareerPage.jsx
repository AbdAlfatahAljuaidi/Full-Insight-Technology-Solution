import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const apiUrl = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL;
import { useTranslation } from 'react-i18next';

const CareerPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: null, // حقل رفع السيرة الذاتية
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }

      const response = await axios.post(`${apiUrl}/submit-career-form`, formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 200) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          resume: null,
          message: '',
        });
        toast.success("Your application has been submitted successfully.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  
  const { t } = useTranslation();

  return (
    <div className="my-16 px-6">
      <h3 className="text-center text-[#0078B8] font-semibold text-lg uppercase">Join Our Team</h3>
      <h1 className="text-center text-3xl font-bold mt-2 text-gray-800">Apply for a Job</h1>
      <h2 className="text-center text-lg text-gray-500 mt-2 mb-8">Fill out the form to apply for a position with us.</h2>

      <div className="max-w-lg mx-auto p-8 bg-white shadow-xl rounded-lg">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder={t('First Name')}
              className="border border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078B8] transition-all duration-300"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder={t('Last Name')}
              className="border border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078B8] transition-all duration-300"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={t('Email')}
            className="border border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078B8] transition-all duration-300"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder={t('Phone')}
            className="border border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078B8] transition-all duration-300"
          />
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            className="border border-gray-300 p-4 w-full rounded-lg bg-gray-100 focus:outline-none transition-all duration-300"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Why do you want to join us?"
            className="border border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078B8] transition-all duration-300 h-40"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-[#0078B8] text-white py-3 rounded-lg hover:bg-[#005f8f] transition ease-in-out duration-300"
          >
            {loading ? ' Sending' : 'Submit Application'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
