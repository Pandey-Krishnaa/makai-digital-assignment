// @ts-nocheck
"use client";
import React, { useState } from "react";
import { sendEmail } from "../utils/email";
import { FaBullseye } from "react-icons/fa";

function ContactUs() {
  const [data, setData] = useState({ propertyType: 1 });
  const [submitting, setSubmitting] = useState(false);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(data);
    setSubmitting(true);
    if (
      !data ||
      !data.email ||
      !data.name ||
      !data.contact ||
      !data.propertyType ||
      !data.message
    ) {
      setSubmitting(false);
      return alert("all inputs are required");
    }
    try {
      // send email to our company

      await sendEmail({
        to: "krish36pandey@gmail.com",
        subject: `Query for ${data.propertyType} bhk flat - ${data.name}`,
        html: `<h1>Query for ${data.propertyType} bhk flat - ${data.name}</h1>`,
        text: `Query for ${data.propertyType} bhk flat - ${data.name}`,
      });
      //   send email to user
      await sendEmail({
        to: data.email,
        subject: `Thankyou so much for showing your interest, We will get back to you soon`,
        html: `<h1>Thankyou so much for showing your interest, We will get back to you soon</h1>`,
        text: `Thankyou so much for showing your interest, We will get back to you soon`,
      });
      setData({ name: "", email: "", contact: "", message: "" });
      setSubmitting(false);
      alert("message sent");
    } catch (error) {
      console.log(error);
      setSubmitting(false);

      alert("something went wrong");
    }
  };
  return (
    <div className="contactUs" id="contact">
      <h1 className="text-[#fcc100] text-3xl font-bold text-center">
        Contact Us
      </h1>
      <form className="max-w-sm mx-auto" onSubmit={onSubmitHandler}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="John Doe"
            required
            name="name"
            value={data.name || ""}
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="contact"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your Contact Number
          </label>
          <input
            type="text"
            id="contact"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="John Doe"
            required
            value={data.contact || ""}
            name="contact"
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={data.email || ""}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@gmail.com"
            required
            name="email"
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propertyType"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Property Type
          </label>
          <select
            id="propertyType"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            name="propertyType"
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4">4 BHK</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Messsage
          </label>
          <textarea
            id="message"
            value={data.message || ""}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="message"
            required
            name="message"
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          disabled={submitting}
        >
          {submitting ? "submitting" : "submit"}
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
