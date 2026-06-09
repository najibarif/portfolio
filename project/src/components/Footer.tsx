import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-obsidian border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex flex-col items-center">
                <div className="flex space-x-6 mb-8">
                    <a href="https://github.com/najibarif" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-cyan hover:text-obsidian transition-all duration-300" aria-label="GitHub">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/naufal-najib-arif-a068a022a/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-violet hover:text-white transition-all duration-300" aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://instagram.com/nnajibba" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-magenta hover:text-white transition-all duration-300" aria-label="Instagram">
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>

                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <span>© 2026 Naufal Najib Arif</span>
                </div>
            </div>
        </footer>
    );
}
