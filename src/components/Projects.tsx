import { ExternalLink, Github, Brain, MessageSquare, TrendingUp, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "WhatsApp Chat Analyzer",
      description: "A comprehensive WhatsApp chat data analysis tool built with Python, leveraging Streamlit, Pandas, and Matplotlib to visualize and analyze chat data. Features include message statistics, activity timelines, user engagement analysis, word clouds, and emoji analysis.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tags: ["Python", "Streamlit", "Data Analysis", "Visualization"],
      github: "https://github.com/Shuubhim/Whatsapp-Chat-Analyzer",
      demo: "https://whatsapp-chat-analyzer-shuubhim.streamlit.app/",
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      title: "StockPulse",
      description: "AI-powered system that analyzes Twitter and news sentiment to forecast short-term stock market trends using advanced machine learning algorithms. Features real-time data processing, sentiment analysis, and predictive modeling.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
      tags: ["Python", "Machine Learning", "NLP", "Data Analysis"],
      github: "https://github.com/Shuubhim/StockPulse",
      demo: "https://stockpulse-demo.streamlit.app/",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Space Explorer AI",
      description: "Interactive AI assistant that provides real-time narration of Moon and Mars data using GPT APIs and astronomy databases. Features include celestial object tracking, space mission information, and educational content.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=300&fit=crop",
      tags: ["Python", "GPT API", "Astronomy", "AI"],
      github: "https://github.com/Shuubhim/SpaceExplorerAI",
      demo: "https://space-explorer-ai.streamlit.app/",
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Vision Systems",
      description: "Advanced computer vision systems featuring real-time object detection and face recognition using pretrained YOLOv8 models and OpenCV processing. Includes features like motion tracking and object classification.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500&h=300&fit=crop",
      tags: ["Python", "OpenCV", "YOLOv8", "Computer Vision"],
      github: "https://github.com/Shuubhim/VisionSystems",
      demo: "https://vision-systems-demo.streamlit.app/",
      icon: <Eye className="w-5 h-5" />
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my notable projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/30 transition-all duration-500 transform hover:scale-[1.02] flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  {project.icon}
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-500/10 rounded-full text-purple-400 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors duration-200"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors duration-200"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
