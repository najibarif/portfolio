import { useEffect, useState } from 'react';
import { ArrowRight, Code, Server, Database, Cpu, Terminal } from 'lucide-react';

const roles = [
  'Full-Stack Developer',
  'UI/UX Enthusiast',
  'React Engineer',
  'Problem Solver',
];

export default function Hero({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  /* Typewriter logic */
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative flex items-center pt-16 md:pt-24 pb-10 overflow-hidden bg-grid-pattern">
      
      {/* ── Background Subtle Gradients ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-transparent z-10" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-neutral-200/50 dark:bg-accent-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-neutral-300/50 dark:bg-accent-violet/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ── Left: Text Content ── */}
          <div className="space-y-8">
            
            {/* Main heading */}
            <div className="space-y-4">
              <div className="lp-hero-in font-mono text-neutral-500 dark:text-neutral-400 text-sm tracking-widest flex items-center gap-2 [animation-delay:0.1s]">
                <Terminal className="w-4 h-4" />
                <span>najib.dev@portfolio:~$</span>
                <span className="text-neutral-800 dark:text-neutral-200">whoami</span>
              </div>

              <h1 className="lp-hero-in text-[clamp(44px,6.5vw,72px)] font-medium leading-[1.06] tracking-[-0.022em] text-balance text-neutral-900 dark:text-white [animation-delay:0.2s]">
                Naufal Najib
                <span className="block text-neutral-500 dark:text-neutral-400">Arif.</span>
              </h1>

              {/* Typewriter role */}
              <div className="lp-hero-in flex items-center gap-2 h-8 [animation-delay:0.3s]">
                <span className="text-neutral-400 dark:text-neutral-500 text-lg">{'>'}</span>
                <span className="text-xl text-neutral-800 dark:text-neutral-300 font-mono font-medium min-w-[2px]">
                  {displayText}
                </span>
                <span className="w-2.5 h-5 bg-neutral-800 dark:bg-neutral-300 animate-pulse ml-0.5" />
              </div>

              <p className="lp-hero-in text-[clamp(15px,1.6vw,19px)] font-medium leading-[1.5] tracking-[-0.012em] text-neutral-500 dark:text-neutral-400 max-w-xl mt-6 [animation-delay:0.4s]">
                Building immersive, high-performance web applications that merge aesthetic precision with robust engineering. CS Education student at UPI Bandung.
              </p>
            </div>

            {/* CTAs */}
            <div className="lp-hero-in flex flex-col sm:flex-row gap-4 pt-2 [animation-delay:0.5s]">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="inline-flex h-11 cursor-pointer items-center justify-center rounded-full bg-neutral-900 dark:bg-white px-6 text-[15px] font-medium text-white dark:text-neutral-900 transition hover:bg-neutral-800 dark:hover:bg-neutral-200 active:scale-[0.97]"
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex h-11 cursor-pointer items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800/50 px-6 text-[15px] font-medium text-neutral-900 dark:text-white transition hover:bg-neutral-200 dark:hover:bg-neutral-800 active:scale-[0.97]"
              >
                Start Collaboration
              </button>
            </div>

            {/* Feature badges */}
            <div className="lp-hero-in flex flex-wrap items-center gap-5 pt-4 [animation-delay:0.6s]">
              {[
                { icon: Code, label: 'Clean Code' },
                { icon: Server, label: 'Robust API' },
                { icon: Database, label: 'Scalable DB' },
                { icon: Cpu, label: 'IoT Ready' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-sm font-medium">
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Visual Element ── */}
          <div className="relative hidden lg:block lp-hero-in [animation-delay:0.4s]">
            <div className="relative w-full aspect-square max-w-[420px] mx-auto group">
              
              {/* Back Accent */}
              <div className="absolute inset-0 rounded-[2.5rem_6rem_2.5rem_2.5rem] bg-neutral-200 dark:bg-white/5 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
              
              {/* Clean Profile Image Container */}
              <div className="absolute inset-0 rounded-[2.5rem_6rem_2.5rem_2.5rem] overflow-hidden clean-border bg-neutral-100 dark:bg-neutral-900 shadow-xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2">
                <img
                  src="/urang.webp"
                  alt="Naufal Najib Arif"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-top scale-[1.15] transition-transform duration-700 group-hover:scale-[1.25]"
                />
                
                {/* Subtle gradient overlay at bottom for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>


            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

