import { useEffect, useState } from 'react';
import { Download, MapPin, Mail, GraduationCap, Building } from 'lucide-react';
import { motion } from 'framer-motion';

function useCountUp(target: number, duration = 1800, trigger: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);

  return count;
}

function StatCard({
  value,
  suffix,
  label,
  trigger,
}: {
  value: number;
  suffix?: string;
  label: string;
  trigger: boolean;
}) {
  const count = useCountUp(value, 1800, trigger);

  return (
    <div className="bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-white/10 rounded-2xl p-5 text-center hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300 shadow-sm flex flex-col justify-center items-center h-full clean-border">
      <div className="text-3xl font-medium text-neutral-900 dark:text-white tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium uppercase tracking-wider mt-2">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  const [statsVisible, setStatsVisible] = useState(false);

  return (
    <section id="about" className="relative py-24 bg-neutral-100 dark:bg-[#0f1011] transition-colors duration-300 overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          onViewportEnter={() => setStatsVisible(true)}
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >

          {/* ── Image Column ── */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0 }}
            className="relative max-w-md mx-auto lg:mx-0 group cursor-default w-full"
          >
            
            <div className="relative rounded-3xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 shadow-sm aspect-[4/5] w-full max-w-[400px] mx-auto clean-border">
              <img
                src="urang.webp"
                alt="Naufal Najib Arif"
                width={400}
                height={500}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

              {/* Name overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-white/20 dark:border-white/10 flex flex-col justify-center items-center text-center">
                  <div className="text-[15px] font-medium text-neutral-900 dark:text-white">Naufal Najib Arif</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Full-Stack Developer</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Text Column ── */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-neutral-500 text-xs font-mono tracking-widest uppercase mb-4">
                <span className="text-neutral-400 font-bold">01.</span>
                <span className="w-4 h-px bg-neutral-400" />
                About Me
              </div>

              <h2 className="text-[clamp(30px,4vw,48px)] font-medium leading-[1.1] tracking-[-0.022em] text-neutral-900 dark:text-white mb-6">
                Building digital experiences with purpose.
              </h2>

              <div className="space-y-4 text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                <p>
                  I am a{' '}
                  <span className="text-neutral-900 dark:text-white font-medium">Computer Science Education</span>{' '}
                  student at Universitas Pendidikan Indonesia (2023–2027) with a strong foundation in technical engineering from SMKN 1 Katapang.
                </p>
                <p>
                  With expertise in{' '}
                  <span className="text-neutral-900 dark:text-white font-medium">Full-Stack Development</span> and{' '}
                  <span className="text-neutral-900 dark:text-white font-medium">Educational Technology</span>, I turn complex problems into elegant, scalable solutions. Currently serving as{' '}
                  <span className="text-neutral-900 dark:text-white font-medium">Technology Bureau Chairperson</span> at Kemakom UPI.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 py-2">
              <StatCard value={3}  suffix="+" label="Years Code"   trigger={statsVisible} />
              <StatCard value={10} suffix="+" label="Projects" trigger={statsVisible} />
            </div>



            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-200 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white dark:bg-neutral-800 rounded-xl flex items-center justify-center border border-neutral-200 dark:border-white/10 flex-shrink-0 shadow-sm">
                  <MapPin className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                </div>
                <div>
                  <p className="text-neutral-900 dark:text-white font-medium text-sm">Location</p>
                  <p className="text-neutral-500 dark:text-neutral-400 text-xs">Bandung, Indonesia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white dark:bg-neutral-800 rounded-xl flex items-center justify-center border border-neutral-200 dark:border-white/10 flex-shrink-0 shadow-sm">
                  <Mail className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                </div>
                <div>
                  <p className="text-neutral-900 dark:text-white font-medium text-sm">Email</p>
                  <p className="text-neutral-500 dark:text-neutral-400 text-xs">naufalnajib52@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white dark:bg-neutral-800 rounded-xl flex items-center justify-center border border-neutral-200 dark:border-white/10 flex-shrink-0 shadow-sm">
                  <GraduationCap className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                </div>
                <div>
                  <p className="text-neutral-900 dark:text-white font-medium text-sm">Education</p>
                  <p className="text-neutral-500 dark:text-neutral-400 text-xs">UPI Bandung (2023–2027)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white dark:bg-neutral-800 rounded-xl flex items-center justify-center border border-neutral-200 dark:border-white/10 flex-shrink-0 shadow-sm">
                  <Building className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                </div>
                <div>
                  <p className="text-neutral-900 dark:text-white font-medium text-sm">Organization</p>
                  <p className="text-neutral-500 dark:text-neutral-400 text-xs">Kemakom UPI — Tech Chair</p>
                </div>
              </div>
            </div>

            {/* Download CTA */}
            <div className="pt-4">
              <a
                href="#"
                download="Naufal_Najib_Arif_Resume.pdf"
                className="inline-flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium py-3 px-6 rounded-full transition-all hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:-translate-y-0.5 shadow-sm"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
