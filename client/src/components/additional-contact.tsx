import { Calendar, MessageCircle, Linkedin, ArrowRight } from "lucide-react";

export default function AdditionalContact() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Connect</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prefer a different communication method? Here are some alternative ways to get in touch.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
            <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-primary text-2xl h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Schedule a Call</h3>
            <p className="text-gray-600 mb-4">Book a 30-minute consultation to discuss your project in detail.</p>
            <a href="#" className="inline-flex items-center text-primary hover:text-blue-700 font-medium transition-colors duration-200">
              Schedule Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
            <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="text-primary text-2xl h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">Quick questions? Send me a message on WhatsApp for faster response.</p>
            <a href="#" className="inline-flex items-center text-primary hover:text-blue-700 font-medium transition-colors duration-200">
              Chat on WhatsApp
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
            <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Linkedin className="text-primary text-2xl h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">LinkedIn</h3>
            <p className="text-gray-600 mb-4">Connect with me professionally and stay updated with my latest work.</p>
            <a href="#" className="inline-flex items-center text-primary hover:text-blue-700 font-medium transition-colors duration-200">
              Connect on LinkedIn
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
