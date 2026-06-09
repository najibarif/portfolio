import { useState, useEffect } from 'react';
import { Menu, X, Code, Github, Linkedin } from 'lucide-react';


export default function Navbar({ activeSection, scrollToSection }: { activeSection: string, scrollToSection: (id: string) => void }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-obsidian/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-4">
                <div className="flex items-center justify-between">
                    <button
                        className="flex items-center space-x-2 cursor-pointer group focus:outline-none"
                        onClick={() => scrollToSection('hero')}
                        aria-label="Scroll to top"
                    >
                        <div className="relative w-10 h-10 flex items-center justify-center">
                            <div className="absolute inset-0 bg-accent-cyan/20 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                            <div className="absolute inset-0 bg-accent-violet/20 rounded-lg transform -rotate-12 group-hover:-rotate-45 transition-transform duration-500"></div>
                            <Code className="w-6 h-6 text-accent-cyan relative z-10" />
                        </div>
                        <span className="text-white font-display font-bold text-xl tracking-wider">
                            NNA<span className="text-accent-cyan">.DEV</span>
                        </span>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                aria-current={activeSection === item.id ? 'page' : undefined}
                                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${activeSection === item.id ? 'text-accent-cyan' : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {item.label}
                                <div
                                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-cyan shadow-[0_0_10px_#00F0FF] transition-transform duration-300 origin-center ${
                                        activeSection === item.id ? 'scale-x-100' : 'scale-x-0'
                                    }`}
                                />
                            </button>
                        ))}

                        <div className="h-6 w-px bg-white/10 mx-4"></div>

                        <div className="flex items-center space-x-4">
                            <a href="https://github.com/najibarif" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-cyan transition-colors" aria-label="GitHub Profile">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/naufal-najib-arif-a068a022a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-cyan transition-colors" aria-label="LinkedIn Profile">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isMenuOpen}
                        className="md:hidden text-white"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden bg-obsidian/95 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
            >
                <nav className="flex flex-col p-4 space-y-4">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                scrollToSection(item.id);
                                setIsMenuOpen(false);
                            }}
                            aria-current={activeSection === item.id ? 'page' : undefined}
                            className={`text-left py-2 px-4 rounded-lg transition-colors ${activeSection === item.id
                                ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
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
