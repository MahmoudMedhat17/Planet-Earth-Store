import { Quote } from "lucide-react";
import { customersWords } from "..";

const Customers = () => {
  return (
    <section className="my-10">
      <h2 className="text-xl md:text-4xl font-semibold pb-10">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {customersWords.map((customer, index) => (
          <div className="pt-10" key={index}>
            <div className="space-y-5">
              <Quote />
              <p className="text-accent opacity-70">{customer.desc}</p>
              <img
                src={customer.customerPic}
                alt={customer.customerName}
                className="rounded-full"
              />
              <p className="font-semibold tracking-widest uppercase">
                {customer.customerName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Customers;
