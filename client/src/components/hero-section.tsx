import { Mail, Phone, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Build Something <span className="text-primary">Amazing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Computer Science student passionate about designing and developing innovative projects. Ready to contribute my skills, creativity, and dedication to your next software project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
            <div className="flex items-center">
              <Mail className="text-primary mr-3 h-5 w-5" />
              <span>muthyambharath2004@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="text-primary mr-3 h-5 w-5" />
              <span>+91 9652863799</span>
            </div>
            <div className="flex items-center">
              <Clock className="text-primary mr-3 h-5 w-5" />
              <span>Usually responds within 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
