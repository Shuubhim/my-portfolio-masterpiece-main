import { Code, Brain, Database, Globe, Award, BookOpen, TrendingUp, Users, Target, Rocket, Lightbulb, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming",
      description: "Python, SQL with 3+ years experience",
      gradient: "from-cyan-400 to-blue-500",
      level: "95%"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning & AI", 
      description: "scikit-learn, NLP, Computer Vision, YOLOv8",
      gradient: "from-purple-400 to-pink-500",
      level: "90%"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analysis",
      description: "pandas, NumPy, matplotlib, seaborn",
      gradient: "from-green-400 to-cyan-500",
      level: "85%"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Tools & APIs",
      description: "Git, Jupyter, APIs, OpenCV, Hugging Face",
      gradient: "from-orange-400 to-red-500",
      level: "80%"
    }
  ];

  const stats = [
    { number: "3+", label: "Years Experience", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "15+", label: "Projects Completed", icon: <Target className="w-6 h-6" /> },
    { number: "5+", label: "Technologies", icon: <Code className="w-6 h-6" /> },
    { number: "100+", label: "Problems Solved", icon: <Brain className="w-6 h-6" /> }
  ];

  const achievements = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "AI Innovation",
      description: "Developed multiple AI solutions for real-world problems"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Created efficient solutions for complex data challenges"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Learner",
      description: "Quickly adapt to new technologies and frameworks"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A passionate <span className="text-cyan-400 font-semibold">Junior Data Scientist</span> with 3+ years of experience through academic and freelance projects, 
            specializing in <span className="text-purple-400 font-semibold">machine learning</span>, <span className="text-green-400 font-semibold">statistics</span>, and real-world problem-solving.
            I transform complex data into actionable insights and build intelligent solutions that make a difference.
          </p>
        </div>

        {/* Stats section with enhanced animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 text-center transform hover:rotate-1"
            >
              <div className="text-cyan-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced skills section with better visual hierarchy */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 transform hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className={`text-transparent bg-gradient-to-r ${skill.gradient} bg-clip-text mb-6 transition-transform duration-300 group-hover:scale-110 flex justify-center`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 text-center">
                {skill.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-center mb-4">
                {skill.description}
              </p>
              
              {/* Enhanced skill level bar */}
              <div className="w-full bg-slate-700 rounded-full h-2 mb-2 overflow-hidden">
                <div 
                  className={`h-2 rounded-full bg-gradient-to-r ${skill.gradient} transition-all duration-1000 group-hover:animate-pulse`}
                  style={{ width: skill.level }}
                ></div>
              </div>
              <div className="text-right text-sm text-gray-500">{skill.level}</div>
            </div>
          ))}
        </div>

        {/* Enhanced education and journey section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500 hover:scale-[1.02]">
            <div className="flex items-center mb-8">
              <BookOpen className="w-10 h-10 text-cyan-400 mr-4" />
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6 hover:border-l-8 transition-all duration-300">
                <h4 className="text-xl font-semibold text-cyan-300 mb-2">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-gray-300 mb-1">RDS College, Muzaffarpur – BRABU University</p>
                <p className="text-gray-400 text-sm">2022 – 2025</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6 hover:border-l-8 transition-all duration-300">
                <h4 className="text-xl font-semibold text-purple-300 mb-2">Minor in Artificial Intelligence</h4>
                <p className="text-gray-300 mb-1">IIT Ropar</p>
                <p className="text-gray-400 text-sm">2024 – Present</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500 hover:scale-[1.02]">
            <div className="flex items-center mb-8">
              <Award className="w-10 h-10 text-purple-400 mr-4" />
              <h3 className="text-3xl font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-semibold text-cyan-300 mb-2">Introduction to Machine Learning</h4>
                <p className="text-gray-400">Coursera / IIT</p>
              </div>
              <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-xl p-6 border border-slate-600/50 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-semibold text-purple-300 mb-2">Data Science with Python</h4>
                <p className="text-gray-400">Udemy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Journey section as in the beginning image with effects */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-10 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Brain className="w-10 h-10 text-cyan-400 mr-4 animate-pulse" />
            My Journey in Data Science
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Based in <span className="text-cyan-400 font-semibold">Muzaffarpur, Bihar</span>, I've been passionate about data science and AI for over 3 years. 
                Through <span className="text-purple-400 font-semibold">freelance projects</span> and academic pursuits, I've developed expertise in machine learning, 
                NLP, and computer vision, always focusing on creating solutions that make a real impact.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing my <span className="text-green-400 font-semibold">BCA</span> while simultaneously completing a minor in AI from 
                <span className="text-cyan-400 font-semibold"> IIT Ropar</span>, I believe in continuous learning and staying at the forefront 
                of technological advancement.
              </p>
            </div>
            
            <div className="space-y-4 mt-4 md:mt-0">
              <div className="flex items-center p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></div>
                <span className="text-gray-300">Building ML models for real-world problems</span>
              </div>
              <div className="flex items-center p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-gray-300">Contributing to open-source projects</span>
              </div>
              <div className="flex items-center p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                <span className="text-gray-300">Exploring cutting-edge AI frameworks</span>
              </div>
              <div className="flex items-center p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                <div className="w-3 h-3 bg-orange-400 rounded-full mr-4"></div>
                <span className="text-gray-300">Creating impactful data visualizations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
