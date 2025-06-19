import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import Navbar from '../components/Navbar';
import fotoSaya from '../assets/foto-saya.jpg';
import { projects } from '../data/projects';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.classList.remove('theme-dark', 'theme-light');
    document.documentElement.classList.add(`theme-${theme}`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="relative w-full">
      {/* CRT effects */}
      <div className="scanline"></div>
      <div className="crt"></div>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <ParticleBackground />
      
      {/* Hero Section */}
      <section id="home" className="relative w-full flex flex-col md:flex-row items-center justify-between min-h-[80vh] px-4 md:px-16 pt-32 pb-20 gap-8 overflow-hidden" style={{background:'var(--background)'}}>
        <div className="flex-1 flex flex-col justify-center z-10">
          <motion.h1 
            initial={{opacity:0, y:40}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.8}} 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight drop-shadow-lg" 
            style={{color:'var(--text)'}}>
            <span style={{color:'var(--primary)'}}>Hi, I'm</span> <span style={{color:'var(--secondary)'}}>CYBERDEV</span>
          </motion.h1>
          <motion.p 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{delay:0.2, duration:0.8}} 
            className="text-lg md:text-2xl mb-8 max-w-xl" 
            style={{color:'var(--text)'}}>
            Full-stack developer & digital designer passionate about tech-artsy web experiences.
          </motion.p>
          <div className="flex gap-4 mb-8">
            <a href="#about" className="px-6 py-3 rounded-lg font-semibold shadow-lg transition-colors duration-300" style={{background:'var(--primary)', color:'var(--background)'}}>About Me</a>
            <a href="#projects" className="px-6 py-3 rounded-lg font-semibold shadow-lg transition-colors duration-300" style={{background:'var(--secondary)', color:'var(--background)'}}>My Projects</a>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl transition-colors" style={{color:'var(--primary)'}}><Github /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl transition-colors" style={{color:'var(--secondary)'}}><Linkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl transition-colors" style={{color:'var(--accent)'}}><Twitter /></a>
          </div>
        </div>
        <motion.div 
          initial={{scale:0.9, opacity:0}} 
          animate={{scale:1, opacity:1}} 
          transition={{duration:1}} 
          className="flex-1 flex justify-center items-center relative">
          <img src={fotoSaya} alt="Foto Saya" className="w-full max-w-lg h-96 object-cover object-center shadow-2xl rounded-3xl border-4" style={{borderColor:'var(--primary)', background:'var(--background-light)'}} />
          <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl animate-pulse" style={{background:'var(--secondary)', opacity:0.3}}></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-2xl animate-pulse" style={{background:'var(--primary)', opacity:0.2}}></div>
        </motion.div>
      </section>
      
      {/* About Section */}
      <section id="about" className="relative pt-12 pb-20 px-4 md:px-16 flex justify-start items-start" style={{background:'var(--background)'}}>
        <motion.div initial={{opacity:0, x:-40}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.7}} className="w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color:'var(--secondary)'}}>About Me</h2>
          <div className="space-y-4">
            <p className="text-lg md:text-xl" style={{color:'var(--text)'}}>I blend technology and art to create unique digital experiences. With a background in design and development, I love building web apps that are both beautiful and functional.</p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4" style={{color:'var(--primary)'}}>Technical Skills</h3>
            <p className="text-lg md:text-xl" style={{color:'var(--text)'}}>
              Frontend Development: React, TypeScript, Tailwind CSS, HTML5, CSS3, JavaScript<br/>
              Backend Development: Node.js, Express, Python, PHP<br/>
              Database: MySQL, MongoDB, PostgreSQL<br/>
              Tools & Others: Git, Docker, AWS, Figma
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{color:'var(--primary)'}}>What I Do</h3>
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold" style={{background:'var(--primary)', color:'var(--background)'}}><span className="text-2xl">🎨</span> Digital Art</span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold" style={{background:'var(--secondary)', color:'var(--background)'}}><span className="text-2xl">💻</span> Web Development</span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold" style={{background:'var(--accent)', color:'var(--background)'}}><span className="text-2xl">🚀</span> UI/UX Design</span>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="pt-12 pb-24 px-4 md:px-16" style={{background:'var(--background)'}}>
        <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{color:'var(--secondary)', textShadow:'0 2px 8px rgba(0,0,0,0.08)'}}>Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-10 items-stretch">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id} 
              initial={{opacity:0, y:40}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}} 
              transition={{duration:0.7, delay:idx*0.1}} 
              className="card-modern group rounded-3xl shadow-xl p-8 flex flex-col gap-4 transition-transform duration-300 h-full"
              whileHover={{ scale: 1.05, boxShadow: '0 16px 48px 0 #00CFFF44, 0 3px 12px 0 #FF3EC944' }}
              style={{background:'var(--background)', color:'var(--text)'}}
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-2" style={{color:'var(--primary)'}}>{project.title}</h3>
              <div className="flex gap-2 flex-wrap mb-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full text-xs font-semibold" style={{background:'var(--primary)', color:'var(--background)'}}>{tag}</span>
                ))}
              </div>
              <p className="text-lg flex-1 mb-2" style={{color:'var(--text)'}}>{project.description}</p>
              <div className="flex gap-4 mt-2">
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline" style={{color:'var(--secondary)'}}>Live Demo</a>}
                {project.codeUrl && <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline" style={{color:'var(--primary)'}}>GitHub</a>}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-7 pb-24 px-4 md:px-16 flex flex-col items-center" style={{background:'var(--background)'}}>
        <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{color:'var(--secondary)'}}>Contact</h2>
        <p className="text-lg mb-6" style={{color:'var(--text)'}}>Feel free to reach out for collaboration or just to say hi!</p>
        <form className="w-full max-w-lg flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" required />
          <input type="email" placeholder="Your Email" className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" required />
          <textarea placeholder="Your Message" className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" rows={5} required />
          <button type="submit" className="px-6 py-3 rounded-lg font-semibold shadow-lg transition-colors duration-300" style={{background:'var(--primary)', color:'var(--background)'}}>Send Message</button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage; 