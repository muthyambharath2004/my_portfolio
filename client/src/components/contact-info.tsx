import { MapPin, Mail, Phone, Twitter, Linkedin, Github, Dribbble } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-gradient-to-br from-primary to-blue-700 p-8 lg:p-12 text-white">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="text-blue-100 mb-8 text-lg leading-relaxed">
        Whether you have a software development project, internship opportunity, or job offer, I'm always excited to connect and discuss how I can contribute to your team.
      </p>
      
      <div className="space-y-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <MapPin className="text-white h-5 w-5" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="font-semibold">Location</h3>
            <p className="text-blue-100">Hyderabad, India</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Mail className="text-white h-5 w-5" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="font-semibold">Email</h3>
            <p className="text-blue-100">muthyambharath2004@gmail.com</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Phone className="text-white h-5 w-5" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="font-semibold">Phone</h3>
            <p className="text-blue-100">+91 9652863799</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-semibold mb-4">Follow Me</h3>
        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200">
            <Twitter className="text-white h-4 w-4" />
          </a>
          <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200">
            <Linkedin className="text-white h-4 w-4" />
          </a>
          <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200">
            <Github className="text-white h-4 w-4" />
          </a>
          <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors duration-200">
            <Dribbble className="text-white h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
