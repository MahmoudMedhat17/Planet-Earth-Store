import Customers from "@/components/Home/Customers";
import Hero from "@/components/Home/Hero";
import Postcard from "@/components/Home/Postcard";
import Posters from "@/components/Home/Posters";
import Services from "@/components/Home/Services";

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
