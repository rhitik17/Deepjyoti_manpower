import React, { useState } from "react";
import Button from "../Button";

const ContactForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // State to manage errors
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {

      console.log("Form submitted successfully:", formData);
    
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-12 w-full max-lg:px-6">
      {/* First Name and Last Name */}
      <div className="flex flex-col md:flex-row justify-between max-xl:gap-x-8 max-md:space-y-6">
        <div className="flex flex-col lg:gap-4 md:w-6/12 xl:w-5/12">
          <label className="text-lg font-medium text-black tracking-tight">
            First Name
          </label>
          <input
            className="border-b border-black/40 p-2 "
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && <p className="text-red-600">{errors.firstName}</p>}
        </div>
        <div className="flex flex-col lg:gap-4 md:w-6/12 xl:w-5/12">
          <label className="text-lg font-medium text-black tracking-tight">
            Last Name
          </label>
          <input
            className="border-b border-black/40 p-2 "
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && <p className="text-red-600">{errors.lastName}</p>}
        </div>
      </div>

      {/* Email and Phone */}
      <div className="flex flex-col md:flex-row justify-between max-xl:gap-x-8 max-md:space-y-6">
        <div className="flex flex-col gap-4 md:w-6/12 xl:w-5/12">
          <label className="text-lg font-medium text-black">
            Email
          </label>
          <input
            className="border-b border-black/40 p-2 "
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="text-red-600">{errors.email}</p>}
        </div>
        <div className="flex flex-col gap-4 md:w-6/12 xl:w-5/12">
          <label className="text-lg font-medium text-black tracking-tight">
            Phone
          </label>
          <input
            className="border-b border-black/40 p-2 "
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {errors.phone && <p className="text-red-600">{errors.phone}</p>}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-4">
        <label className="text-lg font-semibold text-black">
          Message
        </label>
        <textarea
          className="border-b border-black/40 p-2 "
          rows="4"
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        {errors.message && <p className="text-red-600">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-12">
        <Button
          label="Send Message"
          size="medium"
          rounded="medium"
        />
      </div>
    </form>
  );
};

export default ContactForm;
