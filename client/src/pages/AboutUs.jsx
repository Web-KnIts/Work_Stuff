import React from "react";

const AboutUs = () => {
  return (
    <div className="w-[60%] lg:w-[50%] mx-auto py-10 sm:py-4">
      <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
      <h3 className="text-3xl font-semibold dark:text-white mb-8">
        Welcome to Addi
        <small className="text-3xl font-semibold text-yellow-500 dark:text-gray-400">
          {" "}
          Bikes & Spare Part
        </small>
      </h3>
      <p className="text-[20px] py-6">
      Welcome <strong>Addi Bikes And Spare Part</strong>, your trusted partner for all things related to bicycles and
        bike accessories. Established with a passion for cycling and a
        commitment to quality, we offer a wide range of bicycles and spare parts
        to meet the needs of riders at every level—from beginners to seasoned
        enthusiasts. At Addi Bikes, we understand that your bike is more than
        just a mode of transportation; it's a companion on your adventures, a
        fitness tool, and a source of joy. That's why we ensure every product we
        offer is carefully selected for durability, performance, and value.
        Whether you're in need of a new bike, replacement parts, or essential
        bike accessories, our store is equipped with everything you need to keep
        your ride smooth and safe. Our team is made up of cycling experts who
        are passionate about the sport and dedicated to providing exceptional
        customer service. We take pride in offering personalized advice to help
        you find the perfect bike or part for your specific need
      </p>
      <h4 className="text-lg font-bold">Contact Us :</h4>
      <p>Email</p>
    </div>
  );
};

export default AboutUs;
