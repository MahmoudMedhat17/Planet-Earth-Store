import { Quote } from "lucide-react";

const Customers = () => {
  const customersWords = [
    {
      desc: "Fast shipping and excellent customer service. The product was even better than expected. I will definitely be a returning customer.",
      customerPic: "/customerOne.jpeg",
      customerName: "Jennifer Lewis",
    },
    {
      desc: "Great user experience on your website. I found exactly what I was looking for at a great price. I will definitely be telling my friends.",
      customerPic: "/customerTwo.jpeg",
      customerName: "Alicia Heart",
    },
    {
      desc: "Thank you for the excellent shopping experience. It arrived quickly and was exactly as described. I will definitely be shopping with you again in the future.",
      customerPic: "/customerThree.jpeg",
      customerName: "Juan Carlos",
    },
  ];

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
