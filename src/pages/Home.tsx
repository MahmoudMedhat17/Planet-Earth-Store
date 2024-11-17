import Customers from "@/components/Customers";
import Hero from "@/components/Hero";
import Postcard from "@/components/Postcard";
import Posters from "@/components/Posters";

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
    </div>
  );
};

export default Home;
