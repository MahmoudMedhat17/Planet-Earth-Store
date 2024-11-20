import ContactDetails from "./ContactDetails";
import ContactForm from "@/app/Contact/ContactForm";

const ContactPage = () => {
  return (
    <section className="mt-12 px-6">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex flex-col justify-center items-center lg:flex-1">
          <h3 className="text-3xl font-semibold mb-4 lg:mb-0">Get In Touch</h3>
          <ContactForm />
        </div>
        <ContactDetails />
      </div>
    </section>
  );
};

export default ContactPage;
