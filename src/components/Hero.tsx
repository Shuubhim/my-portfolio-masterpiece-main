import { ArrowDown, Github, Linkedin, Mail, Code, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/shubham-resume.pdf'; // Updated to correct PDF file name
    link.download = 'Shubham_Kumar_Resume.pdf'; // Updated to PDF extension
    
    // Show loading toast
    toast({
      title: "Downloading Resume...",
      description: "Your resume download will begin shortly.",
    });

    // Add click event listener to handle errors
    link.onerror = () => {
      toast({
        title: "Download Failed",
        description: "Please contact me directly for my resume.",
        variant: "destructive",
      });
    };

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative">
      {/* Simplified background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Simplified profile section */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-1">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">SK</span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Available
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              Shubham Kumar
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400">Muzaffarpur, Bihar, India</span>
            </div>
          </div>
          
          <div className="mb-8">
            <p className="text-2xl text-cyan-400 font-medium mb-2">Junior Data Scientist</p>
            <p className="text-lg text-gray-400">AI Developer • ML Engineer</p>
          </div>

          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Junior Data Scientist with <span className="text-cyan-400">3+ years</span> of experience in machine learning, 
            NLP, and AI development. Passionate about transforming data into intelligent solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection("projects")}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-base transition-colors duration-200"
            >
              <Code className="w-4 h-4 mr-2" />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection("contact")}
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 text-base transition-colors duration-200"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              onClick={handleResumeDownload}
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 text-base transition-colors duration-200"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Clean social links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://github.com/Shuubhim" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shubham-kumar-b8736232a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:shubhamthakur7779928011@gmail.com"
              className="p-3 text-gray-400 hover:text-purple-400 transition-colors duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <button 
            onClick={() => scrollToSection("about")}
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
