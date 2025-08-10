import { Github, Linkedin, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-900">Muthyam Bharath Kumar</span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-8">
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">About</a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Work</a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Experience</a>
                <a href="#" className="text-primary font-medium">Contact</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="ml-4 text-gray-600 hover:text-primary transition-colors duration-200">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-primary transition-colors duration-200">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
