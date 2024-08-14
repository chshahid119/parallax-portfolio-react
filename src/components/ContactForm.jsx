import React, { useState } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Add your form submission logic here
    }
  };

    return (
      <div className='w-full h-full flex items-center justify-center bg-white p-24'>
    <div className="w-[40%] mx-auto mt-12 ">
      <h1 className="text-5xl font-bold mb-6 text-center">contact.</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded h-32"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <div className="flex justify-between items-center">
          <div className='flex items-center justify-between gap-5'>
            <span className="mr-2">info@mysite.com</span>
                            <div className='flex items-center justify-between'>
                                <a href="#" className="mr-2"><FaFacebookF className='text-2xl'/></a>



            <a href="#" className="mr-2"><FaPinterestP className='text-2xl'/></a>
            <a href="#"><FaInstagram className='text-2xl'/></a>
             </div>
          </div>
          <button type="submit" className="bg-black text-white px-4 py-2 rounded">
            Send
          </button>
        </div>
      </form>
            </div>
            </div>
  );
};

export default ContactForm;
