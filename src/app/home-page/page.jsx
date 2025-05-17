"use client";
import React, { useState } from 'react';

// 
function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { name: "Women's Haircut", price: "R50+" },
    { name: "Men's Haircut", price: "R50+" },
    { name: "Color & Haircut", price: "R150+" },
    { name: "Blowout & Styling", price: "R100+" },
    { name: "Hair Treatment", price: "R250+" },
    { name: "Special Occasion Style", price: "R350+" },
  ];

  const products = [
    {
      name: "Professional Shampoo",
      price: "R50.99",
      description: "Sulfate-free formula for all hair types",
    },
    {
      name: "Leave-in Conditioner",
      price: "R69.99",
      description: "Deep moisturizing treatment",
    },
    {
      name: "Styling Gel",
      price: "R59.99",
      description: "Strong hold with natural shine",
    },
    {
      name: "Hair Oil Treatment",
      price: "R29.99",
      description: "Nourishing oil for damaged hair",
    },
  ];

  const galleryImages = [
    {
      url: "https://ucarecdn.com/a86e05c9-7290-44a5-846b-b3d48e07da4d/-/format/auto/",
      alt: "Professional men's haircut",
    },
    {
      url: "https://ucarecdn.com/4712b785-700f-4a74-a541-6d1f5a046e7b/-/format/auto/",
      alt: "Stylish fade haircut",
    },
  ];

  const hours = [
    { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
    { day: "Saturday", time: "9:00 AM - 5:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f8ff]">
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-[#1a365d] text-3xl font-playfair">
              Linda's Hair Salon
            </h1>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#1a365d]"
              >
                <i
                  className={`fas ${
                    isMenuOpen ? "fa-times" : "fa-bars"
                  } text-2xl`}
                ></i>
              </button>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-[#4a4a4a] hover:text-[#1a365d]"
              >
                Services
              </a>
              <a href="#about" className="text-[#4a4a4a] hover:text-[#1a365d]">
                About
              </a>
              <a
                href="#contact"
                className="text-[#4a4a4a] hover:text-[#1a365d]"
              >
                Contact
              </a>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#services"
                  className="text-[#4a4a4a] hover:text-[#1a365d]"
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-[#4a4a4a] hover:text-[#1a365d]"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-[#4a4a4a] hover:text-[#1a365d]"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="pt-16">
        <div className="bg-[#1a365d] text-white py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-playfair mb-4">
              Welcome to Linda's Hair Salon
            </h2>
            <p className="text-xl font-lato">Where beauty meets expertise</p>
          </div>
        </div>

        <section id="services" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-playfair text-center mb-12 text-[#1a365d]">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-lato text-[#1a365d] mb-2">
                    {service.name}
                  </h3>
                  <p className="text-[#4a4a4a]">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-playfair text-center mb-12 text-[#1a365d]">
              Our Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-playfair text-center mb-12 text-[#1a365d]">
              Hair Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-lato text-[#1a365d] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-[#4a4a4a] mb-2">{product.description}</p>
                  <p className="text-[#1a365d] font-bold">{product.price}</p>
                  <button className="mt-4 bg-[#1a365d] text-white px-4 py-2 rounded hover:bg-[#2a466d] transition-colors w-full">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-playfair text-center mb-8 text-[#1a365d]">
              About Us
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto text-[#4a4a4a] font-lato">
              At Linda's Hair Salon, we believe in creating beautiful,
              personalized looks that enhance your natural beauty. With over 8
              years of experience, our skilled stylists are dedicated to
              providing you with exceptional service in a warm and welcoming
              environment.
            </p>
          </div>
        </section>

        <section id="contact" className="py-16 px-4 bg-[#1a365d] text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-playfair text-center mb-12">
              Contact & Location
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur">
                <h3 className="text-xl font-lato mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <i className="fas fa-map-marker-alt w-6"></i>
                    <span>0993 nzhelele Tshikombani</span>
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-phone w-6"></i>
                    <span>(555) 123-4567</span>
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-envelope w-6"></i>
                    <span>info@lindashairsalon.com</span>
                  </p>
                </div>
              </div>

              <div className="bg-white/10 p-8 rounded-lg backdrop-blur">
                <h3 className="text-xl font-lato mb-4">Business Hours</h3>
                <div className="space-y-4">
                  {hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="font-lato">{schedule.day}</span>
                      <span>{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 p-8 rounded-lg backdrop-blur">
                <h3 className="text-xl font-lato mb-4">Book an Appointment</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 rounded bg-white/20 backdrop-blur border border-white/30 placeholder-white/70"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-2 rounded bg-white/20 backdrop-blur border border-white/30 placeholder-white/70"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full p-2 rounded bg-white/20 backdrop-blur border border-white/30 placeholder-white/70"
                  />
                  <button className="w-full bg-white text-[#1a365d] py-2 rounded hover:bg-white/90 transition-colors">
                    Request Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainComponent;