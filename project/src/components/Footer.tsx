import { Github, Linkedin, Instagram, Code } from 'lucide-react';

const socials = [
  { href: 'https://github.com/najibarif',      icon: Github,    label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/naufal-najib-arif-a068a022a/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://instagram.com/nnajibba',    icon: Instagram, label: 'Instagram' },
];

const quickLinks = ['About', 'Skills', 'Portfolio', 'Experience', 'Contact'];

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-[#0f1011] border-t border-neutral-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 flex items-center justify-center bg-neutral-900 dark:bg-white rounded-lg clean-border transition-colors shadow-md group-hover:bg-neutral-800 dark:group-hover:bg-neutral-200">
                <Code className="w-4 h-4 text-white dark:text-neutral-900" />
              </div>
              <span className="font-medium text-neutral-900 dark:text-white tracking-tight">
                najib.dev
              </span>
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed max-w-xs">
              Full-Stack Developer based in Bandung, Indonesia. Building digital realities with clean code and great UX.
            </p>
            <div className="flex gap-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-xs text-neutral-400 dark:text-neutral-500 font-mono tracking-widest uppercase mb-4">Quick Links</div>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <div className="text-xs text-neutral-400 dark:text-neutral-500 font-mono tracking-widest uppercase mb-4">Contact</div>
            <div className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
              <div>naufalnajib52@gmail.com</div>
              <div>Bandung, Indonesia</div>
              <div className="flex items-center gap-2 mt-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 text-xs font-medium">Available for hire</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 dark:text-neutral-400">
          <span>
            © {new Date().getFullYear()}{' '}
            <a 
              href="https://instagram.com/nnajibba" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white underline underline-offset-2 transition-colors"
            >
              @nnajibba
            </a>
            . All rights reserved.
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            Built with React & Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}
