import { Briefcase } from "lucide-react";
import { Package } from "lucide-react";
import { HandHeart } from "lucide-react";

const Services = () => {
  //   const servicesInfo = [
  //     {
  //       icon: <Briefcase />,
  //       title: "Secure Payment",
  //       desc: "All our payments our SSL secured",
  //     },
  //     {
  //       icon: <Package />,
  //       title: "Delivered With Care",
  //       desc: "Super fast shipping to your door",
  //     },
  //     {
  //       icon: <HandHeart />,
  //       title: "Excellent Service",
  //       desc: "Live chat and phone support",
  //     },
  //   ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start px-10 md:px-6 space-y-4 md:space-y-0 gap-4">
        <div className="p-2 bg-primary rounded-full">
          <Briefcase className="text-white" />
        </div>
        <div className="text-center md:text-start">
          <p className="uppercase tracking-widest text-sm font-medium">
            Secure Payment
          </p>
          <p className="opacity-70">All our payments our SSL secured</p>
        </div>
      </div>
      <hr className="text-gray-300 md:hidden" />
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start px-10 md:px-6 space-y-4 md:space-y-0 gap-4">
        <div className="p-2 bg-primary rounded-full">
          <Package className="text-white" />
        </div>
        <div className="text-center md:text-start">
          <p className="uppercase tracking-widest text-sm font-medium">
            Delivered With Care
          </p>
          <p className="opacity-70">Super fast shipping to your door</p>
        </div>
      </div>
      <hr className="text-gray-300 md:hidden" />

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start px-10 md:px-6 space-y-4 md:space-y-0 gap-4">
        <div className="p-2 bg-primary rounded-full">
          <HandHeart className="text-white" />
        </div>
        <div className="text-center md:text-start">
          <p className="uppercase tracking-widest text-sm font-medium">
            Excellent Service
          </p>
          <p className="opacity-70">Live chat and phone support</p>
        </div>
      </div>
      <hr className="text-gray-300 md:hidden" />
    </section>
  );
};

export default Services;
