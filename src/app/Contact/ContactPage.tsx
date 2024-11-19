import ContactDetails from "./ContactDetails";
import Form from "./Form";

const ContactPage = () => {
  return (
    <section className="mt-12 px-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-3xl font-semibold">Get In Touch</h3>
          <Form />
        </div>
        <ContactDetails />
      </div>
    </section>
  );
};

export default ContactPage;
