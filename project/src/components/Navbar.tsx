import { useState, useEffect } from 'react';
import { Menu, X, Code, Github, Linkedin, Moon, Sun } from 'lucide-react';

export default function Navbar({ activeSection, scrollToSection }: { activeSection: string; scrollToSection: (id: string) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check initial theme
    if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero',       label: 'Home' },
    { id: 'about',      label: 'About' },
    { id: 'skills',     label: 'Skills' },
    { id: 'portfolio',  label: 'Portfolio' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact',    label: 'Contact' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#0f1011]/80 backdrop-blur-lg border-b border-neutral-200 dark:border-white/5 shadow-sm'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <button
            className="flex items-center gap-2 cursor-pointer group focus:outline-none"
            onClick={() => scrollToSection('hero')}
            aria-label="Scroll to top"
          >
            <div className="relative w-8 h-8 flex items-center justify-center bg-neutral-900 dark:bg-white rounded-lg clean-border transition-colors shadow-md group-hover:bg-neutral-800 dark:group-hover:bg-neutral-200">
              <Code className="w-4 h-4 text-white dark:text-neutral-900" />
            </div>
            <span className="text-neutral-900 dark:text-white font-medium tracking-tight">
              najib.dev
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            <div className="flex items-center bg-neutral-100 dark:bg-neutral-900 rounded-full p-1 border border-neutral-200 dark:border-white/5 mr-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  className={`relative text-[13px] font-medium tracking-wide transition-all duration-300 px-4 py-1.5 rounded-full ${
                    activeSection === item.id 
                      ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm' 
                      : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              <button 
                onClick={toggleTheme}
                className="p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <a href="https://github.com/najibarif" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/naufal-najib-arif-a068a022a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </nav>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 text-neutral-500 dark:text-neutral-400"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              className="w-9 h-9 flex items-center justify-center border border-neutral-200 dark:border-white/10 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="bg-white/95 dark:bg-[#0f1011]/95 backdrop-blur-xl border-t border-neutral-200 dark:border-white/10 flex flex-col p-4 gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { scrollToSection(item.id); setIsMenuOpen(false); }}
              aria-current={activeSection === item.id ? 'page' : undefined}
              className={`text-left py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                  : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
