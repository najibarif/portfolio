import { useState, useEffect, useRef } from 'react';
import { Send, Mail, MapPin, Github, Linkedin, Instagram, MessageSquare } from 'lucide-react';

const socials = [
  { href: 'https://github.com/najibarif', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/naufal-najib-arif-a068a022a/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://instagram.com/nnajibba', icon: Instagram, label: 'Instagram' },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pairs: [React.RefObject<HTMLDivElement | null>][] = [
      [headerRef],
      [leftRef],
      [rightRef],
    ];
    const observers = pairs.map(([ref]) => {
      if (!ref.current) return null;
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) ref.current?.classList.add('is-visible');
      }, { threshold: 0.15 });
      obs.observe(ref.current);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 bg-neutral-50 dark:bg-transparent transition-colors duration-300 overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 text-neutral-500 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="text-neutral-400 font-bold">05.</span>
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-[clamp(30px,4vw,48px)] font-medium leading-[1.1] tracking-[-0.022em] text-neutral-900 dark:text-white mb-4">
            Let's Connect.
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-md mx-auto text-[15px] leading-relaxed">
            Have a project in mind or want to collaborate? I'm always open to new opportunities and ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* ── Left: Info ── */}
          <div ref={leftRef} className="reveal-left lg:col-span-2 space-y-8">

            {/* Contact details */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email Me', value: 'naufalnajib52@gmail.com', href: 'mailto:naufalnajib52@gmail.com' },
                { icon: MapPin, label: 'Location', value: 'Bandung, Indonesia', href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 flex items-center justify-center transition-all duration-300 flex-shrink-0 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-700 shadow-sm">
                    <Icon className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-neutral-900 dark:text-white font-medium text-[15px]">{label}</div>
                    {href ? (
                      <a href={href} className="text-neutral-500 dark:text-neutral-400 text-sm hover:text-neutral-900 dark:hover:text-white transition-colors">{value}</a>
                    ) : (
                      <div className="text-neutral-500 dark:text-neutral-400 text-sm">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-neutral-200 dark:bg-white/10" />

            {/* Socials */}
            <div>
              <div className="text-xs text-neutral-400 font-medium uppercase tracking-wider mb-4">Find Me Online</div>
              <div className="flex gap-3">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-white/10 rounded-xl p-4 flex items-center gap-3 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <div>
                <div className="text-neutral-900 dark:text-white text-sm font-medium">Currently Available</div>
                <div className="text-neutral-500 dark:text-neutral-400 text-xs">Open to freelance & collaboration</div>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div ref={rightRef} className="reveal-right lg:col-span-3">
            <div className="bg-white dark:bg-[#1a1b1e] border border-neutral-200 dark:border-white/10 p-8 rounded-2xl shadow-sm clean-border relative overflow-hidden">
              
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    { id: 'name',    label: 'Your Name',    type: 'text',  placeholder: 'John Doe',               autocomplete: 'name' },
                    { id: 'email',   label: 'Your Email',   type: 'email', placeholder: 'john@example.com',        autocomplete: 'email' },
                  ].map(({ id, label, type, placeholder, autocomplete }) => (
                    <div key={id} className="space-y-1.5">
                      <label htmlFor={id} className="text-xs text-neutral-500 dark:text-neutral-400 font-medium tracking-wider uppercase">
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        required
                        autoComplete={autocomplete}
                        value={formState[id as 'name' | 'email']}
                        onChange={(e) => setFormState({ ...formState, [id]: e.target.value })}
                        placeholder={placeholder}
                        className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white placeholder-neutral-400 text-sm transition-all duration-300 outline-none focus:bg-white dark:focus:bg-neutral-800 focus:border-neutral-400 dark:focus:border-neutral-500 focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-500"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs text-neutral-500 dark:text-neutral-400 font-medium tracking-wider uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white placeholder-neutral-400 text-sm transition-all duration-300 outline-none resize-none focus:bg-white dark:focus:bg-neutral-800 focus:border-neutral-400 dark:focus:border-neutral-500 focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-500"
                  />
                </div>

                {isSuccess && (
                  <div role="status" className="p-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-xl text-emerald-700 dark:text-emerald-400 text-sm font-medium flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Message sent! I'll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-neutral-900 dark:disabled:hover:bg-white"
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? 'animate-bounce' : ''}`} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
