"use client";

import Customers from "@/components/HomePage/Customers";
import Hero from "@/components/HomePage/Hero";
import Postcard from "@/components/HomePage/Postcard";
import Posters from "@/components/HomePage/Posters";
import Services from "@/components/HomePage/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="px-10 md:px-20">
        <Posters />
        <hr className="text-gray-300" />
        <Customers />
      </div>
      <Postcard />
      <Services />
    </div>
  );
};

export default Home;
