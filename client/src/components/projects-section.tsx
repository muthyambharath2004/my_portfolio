import { ExternalLink, Github, Code, Brain, Database, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Connectfolio - Professional Outreach Tool",
      description: "A fully responsive contact form integrated into personal portfolio, enabling visitors, recruiters, and clients to send inquiries and job offers with real-time email delivery.",
      features: [
        "Client-side and server-side validation",
        "Secure backend service with email integration",
        "Spam protection and security measures",
        "Real-time communication system"
      ],
      technologies: ["React", "TypeScript", "Node.js", "Email APIs"],
      icon: <Users className="h-6 w-6" />,
      category: "Web Development"
    },
    {
      title: "AI-Driven Employee Wellbeing Dashboard",
      description: "AI-powered web application enabling employee registration and secure work data integration for mental health monitoring with real-time stress detection.",
      features: [
        "ML models for behavioral pattern analysis",
        "Sentiment analysis for stress detection",
        "Personalized wellness recommendations",
        "Manager dashboards with team health metrics"
      ],
      technologies: ["Python", "Machine Learning", "AI", "Data Analytics"],
      icon: <Brain className="h-6 w-6" />,
      category: "AI/ML"
    }
  ];

  const skills = [
    { name: "Java", level: "Intermediate", category: "Programming" },
    { name: "Python", level: "Intermediate", category: "Programming" },
    { name: "JavaScript", level: "Basic", category: "Programming" },
    { name: "C", level: "Basic", category: "Programming" },
    { name: "HTML & CSS", level: "Intermediate", category: "Web Dev" },
    { name: "Bootstrap", level: "Basic", category: "Web Dev" },
    { name: "MySQL", level: "Intermediate", category: "Database" },
    { name: "DBMS", level: "Intermediate", category: "Database" },
    { name: "GitHub", level: "Intermediate", category: "Tools" },
    { name: "Linux", level: "Basic", category: "Tools" },
    { name: "VS Code", level: "Advanced", category: "Tools" }
  ];

  const certifications = [
    "Java (Basic) - HackerRank",
    "Python (Basic) - HackerRank", 
    "SQL (Intermediate) - HackerRank",
    "Problem Solving (Intermediate) - HackerRank"
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions built with modern technologies, showcasing problem-solving skills and technical expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center text-primary">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Code className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive skill set across programming, web development, and modern tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {["Programming", "Web Dev", "Database", "Tools"].map((category) => (
            <Card key={category} className="p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-center">{category}</h3>
              <div className="space-y-3">
                {skills.filter(skill => skill.category === category).map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 text-sm">{skill.name}</span>
                    <Badge 
                      variant={skill.level === 'Advanced' ? 'default' : skill.level === 'Intermediate' ? 'secondary' : 'outline'}
                      className="text-xs"
                    >
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900">B.Tech in Computer Science and Information Technology</h4>
                <p className="text-primary font-medium">Institute of Aeronautical Engineering</p>
                <p className="text-gray-600">2022 - 2026 (Expected) | CGPA: 7.88</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Intermediate</h4>
                <p className="text-primary font-medium">Sri Chaitanya Jr College, Hyderabad</p>
                <p className="text-gray-600">June 2022 | Percentage: 93.7%</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">SSC</h4>
                <p className="text-primary font-medium">FMHS Group of Institutions, Hyderabad</p>
                <p className="text-gray-600">2020 | CGPA: 10.0</p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {["Leadership", "Problem-Solving", "Critical Thinking", "Teamwork", "Time Management"].map((competency, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {competency}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}