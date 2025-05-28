import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Facebook, Database, MessageCircle, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/Shuubhim",
      color: "hover:bg-gray-800",
      description: "View my code"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/shubham-kumar-b8736232a/",
      color: "hover:bg-blue-600",
      description: "Let's connect"
    },
    {
      name: "Kaggle",
      icon: <Database className="w-6 h-6" />,
      url: "https://www.kaggle.com/one8thakur",
      color: "hover:bg-blue-500",
      description: "Check my notebooks"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      url: "https://x.com/shuuubh_im",
      color: "hover:bg-sky-500",
      description: "Follow me"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/im.07_21_18/",
      color: "hover:bg-pink-600",
      description: "See my life"
    },
    {
      name: "Discord",
      icon: <MessageSquare className="w-6 h-6" />,
      url: "https://discord.com/users/shubham180",
      color: "hover:bg-indigo-600",
      description: "Chat with me"
    }
  ];

  const contactInfo = [
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      url: "mailto:shubhamthakur7779928011@gmail.com",
      detail: "shubhamthakur7779928011@gmail.com",
      color: "hover:bg-red-500",
      description: "Send me an email"
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-6 h-6" />,
      url: "https://wa.me/917654499378",
      detail: "+91 7654499378",
      color: "hover:bg-green-500",
      description: "Send me a message"
    },
    {
      name: "Location",
      icon: <MapPin className="w-6 h-6" />,
      url: "#",
      detail: "Muzaffarpur, Bihar, India",
      color: "hover:bg-blue-500",
      description: "My current location"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-pink-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to turn ideas into reality? Whether you have a project in mind, a collaboration opportunity, or just want to chat about data science, feel free to reach out. I'm always excited to discuss new challenges and innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-gray-400">
            <span className="px-3 py-1 bg-slate-700/50 rounded-full text-sm">#Collaboration🤝</span>
            <span className="px-3 py-1 bg-slate-700/50 rounded-full text-sm">#Innovation💡</span>
            <span className="px-3 py-1 bg-slate-700/50 rounded-full text-sm">#Growth📈</span>
            <span className="px-3 py-1 bg-slate-700/50 rounded-full text-sm">#Opportunities✨</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 h-full">
            <div className="flex items-center mb-8">
               <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-3 rounded-xl mr-4 animate-pulse">
                 <User className="w-8 h-8 text-cyan-400" />
               </div>
               <h3 className="text-3xl font-bold text-white">Get In Touch</h3>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.url !== '#' ? item.url : undefined}
                  target={item.url !== '#' ? '_blank' : undefined}
                  rel={item.url !== '#' ? 'noopener noreferrer' : undefined}
                  className={`flex items-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/30 transition-all duration-300 hover:border-cyan-500/30 hover:scale-[1.02] group h-[72px]`}
                >
                  <div className={`mr-4 text-cyan-400 transition-transform duration-300 group-hover:scale-110`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">{item.name}</h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 break-all">{item.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 h-full">
             <div className="flex items-center mb-8">
               <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-xl mr-4 animate-pulse delay-300">
                 <MessageCircle className="w-8 h-8 text-purple-400" />
               </div>
               <h3 className="text-3xl font-bold text-white">Connect on Social Media</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {socialLinks.map((link, index) => (
                 <a 
                    key={index} 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/30 transition-all duration-300 hover:border-purple-500/30 hover:scale-105 group text-center h-[120px]`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 transition-transform duration-300 group-hover:scale-110`}>
                       <div className={`text-purple-400 ${link.color.replace('hover:bg', 'text')}`}>{link.icon}</div>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-1">{link.name}</h4>
                    <p className="text-gray-400 text-sm break-words">{link.description}</p>
                  </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
