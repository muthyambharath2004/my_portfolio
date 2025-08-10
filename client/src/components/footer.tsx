import { Twitter, Linkedin, Github, Dribbble } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Your Team</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              I'm passionate about software development and eager to contribute to innovative projects. Let's discuss how I can help your organization grow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                <Dribbble className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Projects</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Skills</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Resume</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Java & Python</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Database Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">AI/ML Projects</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} Muthyam Bharath Kumar. All rights reserved. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
