import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Sun, Moon, Menu, X } from 'lucide-react';
import { Link as ScrollLinkImport } from 'react-scroll';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const ScrollLink = ScrollLinkImport as any;

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' }
];

const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-16 py-4 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      style={{
        background: 'var(--navbar-bg)',
        color: 'var(--navbar-text)',
        borderBottom: '1.5px solid var(--primary)',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Terminal size={32} className="mr-2" style={{ color: 'var(--primary)' }} />
          <span className="font-title text-2xl md:text-3xl font-bold tracking-widest">
            CYBER<span style={{ color: 'var(--secondary)' }}>DEV</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="font-title text-lg font-semibold cursor-pointer hover:text-primary transition-colors"
            >
              {item.name}
            </ScrollLink>
          ))}
          <button
            onClick={onToggleTheme}
            className="ml-4 p-2 rounded-lg transition-colors duration-300"
            style={{
              background: 'var(--background-light)',
              border: '1px solid var(--primary)',
              color: 'var(--primary)',
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg transition-colors duration-300"
            style={{
              background: 'var(--background-light)',
              border: '1px solid var(--primary)',
              color: 'var(--primary)',
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X size={24} style={{ color: 'var(--primary)' }} />
            ) : (
              <Menu size={24} style={{ color: 'var(--primary)' }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-4 mt-2"
            style={{ background: 'var(--navbar-bg)' }}
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="font-title text-lg font-semibold cursor-pointer hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;