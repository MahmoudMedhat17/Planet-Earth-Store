import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";

const ContactDetails = () => {
  return (
    <div className="lg:flex-1">
      <h3 className="text-3xl font-semibold text-center lg:text-start">Talk To Us</h3>
      <div className="p-8 bg-gray-100 rounded-xl flex flex-col justify-center lg:justify-start items-center lg:items-start space-y-10">
        <div className="flex items-center gap-4">
          <Mail />
          <div>
            <p>EMAIL</p>
            <p className="text-primary">m7moooud.17@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Phone />
          <div>
            <p>PHONE NUMBER</p>
            <p className="text-primary">+201012107269</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <MapPin />
          <div>
            <p>ADDRESS</p>
            <p className="text-primary">El-sheikh-zayed, Giza</p>
          </div>
        </div>
        <div className="text-center space-y-4">
          <h3 className="font-semibold">Follow Us:</h3>
          <div className="flex gap-8">
            <div className="w-10 h-10 cursor-pointer bg-secondary hover:bg-primary hover:duration-300 rounded-full flex justify-center items-center">
              <Facebook className="text-white" />
            </div>
            <div className="w-10 h-10 cursor-pointer bg-secondary hover:bg-primary hover:duration-300 rounded-full flex justify-center items-center">
              <Twitter className="text-white" />
            </div>
            <div className="w-10 h-10 cursor-pointer bg-secondary hover:bg-primary hover:duration-300 rounded-full flex justify-center items-center">
              <Linkedin className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
