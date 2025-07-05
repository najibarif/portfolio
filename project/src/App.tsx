import { useState, useEffect } from 'react';
import { 
  Download, Mail, Phone, MapPin, Github, Linkedin, 
  Code, Palette, Zap, Users, 
  Eye, Star, Quote, Menu, X, ArrowUp, Send,
  Briefcase, GraduationCap, CheckCircle, 
  Database, Server, Figma, Monitor, PenTool,
  Lightbulb, Heart, MessageCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 400);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'portfolio', 'experience', 'testimonials', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Gabungan skill untuk Full-Stack Developer
  const skills = [
    { name: 'HTML/CSS', icon: Code, description: 'Markup & styling web modern.' },
    { name: 'JavaScript', icon: Code, description: 'Bahasa utama web interaktif.' },
    { name: 'TypeScript', icon: Code, description: 'JavaScript dengan type safety.' },
    { name: 'React', icon: Code, description: 'Library UI modern berbasis komponen.' },
    { name: 'Next.js', icon: Code, description: 'Framework React untuk SSR & SSG.' },
    { name: 'Node.js', icon: Server, description: 'Backend JavaScript runtime.' },
    { name: 'Express.js', icon: Server, description: 'Framework backend minimalis.' },
    { name: 'REST API', icon: Server, description: 'Desain & konsumsi API.' },
    { name: 'MongoDB', icon: Database, description: 'NoSQL database untuk aplikasi modern.' },
    { name: 'PostgreSQL', icon: Database, description: 'Relational database open-source.' },
    { name: 'Git & GitHub', icon: Github, description: 'Version control & kolaborasi.' },
    { name: 'Figma', icon: Figma, description: 'Desain UI/UX & prototyping.' },
    { name: 'Tailwind CSS', icon: Palette, description: 'Utility-first CSS framework.' },
    { name: 'Docker', icon: Server, description: 'Containerization & deployment.' },
    { name: 'Problem Solving', icon: Zap, description: 'Menyelesaikan masalah teknis & logika.' },
    { name: 'Teamwork', icon: Users, description: 'Kolaborasi tim & komunikasi.' },
    { name: 'Creative Thinking', icon: Lightbulb, description: 'Ide kreatif & inovatif.' },
    { name: 'UI/UX', icon: Palette, description: 'Desain antarmuka & pengalaman pengguna.' },
    { name: 'Communication', icon: MessageCircle, description: 'Komunikasi efektif & presentasi.' },
    { name: 'Testing', icon: CheckCircle, description: 'Unit & integration testing.' },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Redesign",
      category: "UI/UX Design",
      type: "web",
      description: "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Figma", "User Research", "Prototyping", "A/B Testing"],
      liveUrl: "#",
      caseStudyUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: "Mobile Design",
      type: "mobile",
      description: "Mobile app design for healthcare management with intuitive patient dashboard and appointment system.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Figma", "Mobile UI", "User Journey", "Accessibility"],
      liveUrl: "#",
      caseStudyUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      category: "Web Application",
      type: "web",
      description: "Modern dashboard design for SaaS platform with complex data visualization and user management.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Figma", "Data Visualization", "Design System", "React"],
      liveUrl: "#",
      caseStudyUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "Restaurant Branding",
      category: "Brand Identity",
      type: "branding",
      description: "Complete brand identity design including logo, website, and marketing materials for upscale restaurant.",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Illustrator", "Photoshop", "Brand Strategy", "Print Design"],
      liveUrl: "#",
      caseStudyUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Fitness App Interface",
      category: "Mobile Design",
      type: "mobile",
      description: "Motivational fitness app design with gamification elements and social features.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Figma", "Gamification", "Social Features", "Animation"],
      liveUrl: "#",
      caseStudyUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Corporate Website",
      category: "Web Design",
      type: "web",
      description: "Professional corporate website with modern design and seamless user experience.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Figma", "WordPress", "SEO", "Performance"],
      liveUrl: "#",
      caseStudyUrl: "#",
      featured: false
    }
  ];

  const experiences = [
    {
      id: 1,
      title: "Senior Web Designer",
      company: "Digital Creative Studio",
      period: "2022 - Present",
      description: "Leading design projects for major clients, creating user-centered designs and managing design systems.",
      achievements: [
        "Led redesign of 15+ client websites",
        "Increased user engagement by 45%",
        "Established design system framework"
      ]
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Tech Startup Inc.",
      period: "2020 - 2022",
      description: "Designed mobile and web applications with focus on user experience and conversion optimization.",
      achievements: [
        "Improved app conversion rate by 35%",
        "Conducted 50+ user interviews",
        "Designed 3 successful product launches"
      ]
    },
    {
      id: 3,
      title: "Junior Web Designer",
      company: "Creative Agency",
      period: "2019 - 2020",
      description: "Created responsive websites and marketing materials for various clients across different industries.",
      achievements: [
        "Delivered 25+ website projects",
        "Achieved 98% client satisfaction",
        "Mastered responsive design principles"
      ]
    }
  ];

  const certifications = [
    {
      title: "Google UX Design Professional Certificate",
      issuer: "Google",
      year: "2023",
      icon: Palette
    },
    {
      title: "Adobe Certified Expert - Photoshop",
      issuer: "Adobe",
      year: "2022",
      icon: PenTool
    },
    {
      title: "Figma Advanced Certification",
      issuer: "Figma",
      year: "2022",
      icon: Figma
    },
    {
      title: "Frontend Development Bootcamp",
      issuer: "FreeCodeCamp",
      year: "2021",
      icon: Code
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director, TechCorp",
      content: "Alex's design work transformed our user experience completely. The attention to detail and user-centered approach resulted in a 40% increase in conversions.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager, StartupXYZ",
      content: "Working with Alex was a game-changer for our product. The designs are not only beautiful but also highly functional and user-friendly.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      position: "CEO, E-commerce Plus",
      content: "Alex delivered exceptional designs that perfectly captured our brand vision. The project was completed on time and exceeded our expectations.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 4,
      name: "David Kim",
      position: "Lead Developer, AppWorks",
      content: "Alex is a true professional. The collaboration was smooth and the results exceeded our technical and design expectations.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 5,
      name: "Maria Garcia",
      position: "UX Lead, Creative Minds",
      content: "The UI/UX Alex created for our platform was both beautiful and intuitive. Our users love the new experience!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 6,
      name: "John Smith",
      position: "Founder, StartupHub",
      content: "Alex's attention to detail and creative approach helped us launch a product that stands out in the market.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const filterProjects = (filter: string) => {
    if (filter === 'all') return projects;
    return projects.filter(project => project.type === filter);
  };

  const filteredProjects = filterProjects(activeFilter);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">
      {/* Header */}
      <header className="bg-white/90 dark:bg-black/50 backdrop-blur-sm border-b border-gray-200 dark:border-teal-500/20 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-900 dark:text-white font-bold text-xl">Alex Rodriguez</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'experience', label: 'Experience' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors ${
                    activeSection === item.id 
                      ? 'text-teal-600 dark:text-teal-400' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <button
                  onClick={toggleTheme}
                  className="text-gray-400 hover:text-teal-400 transition-colors focus:outline-none"
                  title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                  {theme === 'dark' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M6.34 6.34l-.71-.71" /><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" /></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
                  )}
                </button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-900 dark:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
              <nav className="flex flex-col space-y-4 mt-4">
                {[
                  { id: 'hero', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'portfolio', label: 'Portfolio' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'testimonials', label: 'Testimonials' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Landscape Photo Layout */}
      <section id="hero" className="flex items-center min-h-[calc(100vh-72px)] pt-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
            
            {/* Left Column - Content */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              {/* Status Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-teal-500/10 border border-teal-500/30 dark:bg-teal-500/10 dark:border-teal-500/30 rounded-full">
                <div className="w-2 h-2 bg-teal-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-teal-400 text-sm font-medium uppercase tracking-wide">
                  Available for Projects
                </span>
              </div>

              {/* Main Introduction */}
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Hello, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                    Alex Rodriguez
                  </span>
                </h1>
                
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-600 dark:text-gray-300">
                  Web Designer & <span className="text-teal-400">UI/UX Specialist</span>
                </h2>
                
                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  I create beautiful, user-centered digital experiences that combine aesthetic appeal 
                  with functional design. Passionate about crafting interfaces that users love and 
                  businesses thrive with.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-500/25 text-base lg:text-lg"
                >
                  <Eye className="w-5 h-5" />
                  <span>View My Work</span>
                </button>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-lg transition-all duration-300 text-base lg:text-lg"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Me</span>
                </button>
              </div>


            </div>

            {/* Right Column - Landscape Photo Display */}
            <div className="relative order-1 lg:order-2 flex items-center justify-center h-full">
              {/* Background Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 via-cyan-500/10 to-blue-600/10 rounded-3xl blur-3xl"></div>
                
                {/* Geometric Elements */}
                <div className="absolute top-8 right-8 w-20 h-20 lg:w-32 lg:h-32 border-2 border-teal-400/20 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-lg rotate-45"></div>
                <div className="absolute top-1/4 left-4 w-12 h-12 lg:w-16 lg:h-16 border-2 border-cyan-400/30 rounded-lg rotate-12"></div>
                <div className="absolute bottom-1/4 right-4 w-8 h-8 lg:w-12 lg:h-12 bg-teal-500/20 rounded-full"></div>
              </div>
              
              {/* Photo Container - Landscape Orientation */}
              <div className="relative z-10 w-full max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
                {/* Gradient Border */}
                <div className="bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600 rounded-3xl p-1">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
                    {/* Landscape Photo Display */}
                    <div className="relative aspect-[4/3] w-full">
                      <img
                        src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Alex Rodriguez - Web Designer"
                        className="w-full h-full object-cover rounded-3xl"
                        style={{
                          objectPosition: 'center center'
                        }}
                      />
                      {/* Subtle overlay for better contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent rounded-3xl"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-3 lg:p-4 rounded-xl shadow-lg">
                  <Palette className="w-6 h-6 lg:w-8 lg:h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-2xl p-8">
              <img
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional workspace"
                className="w-full h-auto rounded-xl object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-teal-500 text-white p-4 rounded-xl">
                <Monitor className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                About <span className="text-teal-400">Me</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm a passionate Web Designer with over 4 years of experience creating digital experiences 
                that bridge the gap between beautiful design and functional usability. My approach combines 
                user research, creative design, and technical implementation.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in UI/UX design, responsive web design, and brand identity. I believe that 
                great design should not only look amazing but also solve real problems and create 
                meaningful connections between users and products.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold">São Paulo, Brazil</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Remote Worldwide</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold">alex@example.com</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Let's collaborate</p>
                </div>
              </div>
            </div>

            {/* Download CV Button */}
            <div className="pt-4">
              <button className="flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Full-Stack Developer */}
      <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-sans">
            My <span className="text-teal-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-sans">
            Keahlian utama untuk website portfolio seorang Full-Stack Developer.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            className="pb-12"
          >
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <SwiperSlide key={skill.name} className="flex h-full">
                  <motion.div
                    className="group bg-gray-900/60 dark:bg-gray-800/70 border border-teal-700/40 dark:border-teal-500/30 rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 relative w-full h-full overflow-visible"
                    whileHover={{ y: -6, scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-lg font-semibold text-white font-sans mb-1 text-center">{skill.name}</div>
                    {/* Tooltip/deskripsi */}
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 bottom-2 -mb-2 z-20 px-3 py-2 rounded-lg bg-gray-800 text-gray-100 text-xs font-sans shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 w-56 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      {skill.description}
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </section>

      {/* Portfolio Section with Filter */}
      <section id="portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-teal-400">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Here are some of my recent projects showcasing my skills in web design and user experience.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: 'all', label: 'All Projects' },
              { key: 'web', label: 'Web Design' },
              { key: 'mobile', label: 'Mobile Design' },
              { key: 'branding', label: 'Branding' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 border border-gray-200 dark:border-gray-700 hover:border-teal-500/50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            className="pb-12"
          >
            {filteredProjects.map((project, idx) => (
              <SwiperSlide key={project.id} className="flex h-full">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="group bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all duration-300 flex flex-col w-full h-full"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-400 text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-gray-200 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <a
                        href={project.liveUrl}
                        className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors text-sm"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Project</span>
                      </a>
                      <a
                        href={project.caseStudyUrl}
                        className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-sm"
                      >
                        Case Study
                      </a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>

      {/* Experience & Certifications Section */}
      <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & <span className="text-teal-400">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and achievements that have shaped my expertise in design and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Briefcase className="w-6 h-6 text-teal-400 mr-3" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="relative bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                      <p className="text-teal-400 font-medium">{exp.company}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 text-teal-400 mr-3" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, idx) => {
                const IconComponent = cert.icon;
                return (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: idx * 0.12 }}
                    className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.title}</h4>
                        <p className="text-teal-400">{cert.issuer}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.year}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Clients <span className="text-teal-400">Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Testimonials from clients and partners who have worked with me on various projects.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            className="pb-12"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={testimonial.id} className="flex h-full">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300 flex flex-col items-center w-full h-full"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-teal-400/30 absolute -top-2 -left-2" />
                    <p className="text-gray-600 dark:text-gray-300 italic pl-6">{testimonial.content}</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-auto">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-teal-400 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let's <span className="text-teal-400">Collaborate</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Have an exciting project in mind? I'd love to help bring your digital vision to life. 
              Let's discuss how we can work together.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project, timeline, and budget..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-500/25 text-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-semibold">Email</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">alex@example.com</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-semibold">WhatsApp</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">+55 11 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-semibold">Location</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">São Paulo, Brazil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-black/50 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-900 dark:text-white font-bold text-xl">Alex Rodriguez</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
                Web Designer & UI/UX Specialist passionate about creating beautiful, 
                user-centered digital experiences that make a difference.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { id: 'about', label: 'About' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'portfolio', label: 'Portfolio' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 text-sm"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>Web Design</li>
                <li>UI/UX Design</li>
                <li>Brand Identity</li>
                <li>Consulting</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              &copy; 2024 Alex Rodriguez. All rights reserved. Made with <Heart className="w-4 h-4 inline text-red-500" /> in Brazil.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default App;