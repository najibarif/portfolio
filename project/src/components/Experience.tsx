import { Briefcase, Calendar, Award, History } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: 'Technology Bureau Chairperson',
    company: 'Kemakom UPI',
    period: 'Mar 2025 – Jan 2026',
    description: 'Leading the technology division of the Computer Student Family (Kemakom) at UPI — managing technical projects and infrastructure.',
    achievements: ['Overseeing technology-based initiatives', 'Managing division-wide technical workflows', 'Coordinating technical team for student events'],
  },
  {
    id: 2,
    title: 'Staff of Communication Bureau',
    company: 'Kemakom UPI',
    period: 'Mar 2024 – Jan 2025',
    description: 'Managed internal and external communications, bridging the student organization with its stakeholders.',
    achievements: ['Handled official communication channels', 'Facilitated organizational transparency', 'Managed stakeholder relations for 11 months'],
  },
  {
    id: 3,
    title: 'Academic Assistant',
    company: 'Universitas Pendidikan Indonesia',
    period: '2024 – 2025',
    description: 'Teaching Assistant for the Basic Database Systems Laboratory — assisting students with practical SQL implementations.',
    achievements: ['Guided students in SQL and Database design', 'Evaluated practical assignments and lab progress', 'Supported faculty in delivering lab course content'],
  },
  {
    id: 4,
    title: 'IoT Project Intern',
    company: 'PT Len Industri (Persero)',
    period: 'Mar 2021 – Apr 2021',
    description: 'Focused on IoT development at a leading state-owned enterprise, contributing to industrial-grade technology projects.',
    achievements: ['Developed IoT-based solutions', 'Gained deep understanding of integrated systems', 'Collaborated on technical projects in an enterprise environment'],
  },
  {
    id: 5,
    title: 'Certifications',
    company: 'Various Institutions',
    period: '2021 – 2024',
    description: 'Achieved multiple technical certifications demonstrating competence in web development, design, and embedded systems.',
    achievements: ['Mobile Transport Robot Development (Arduino)', 'Bootstrap CSS Framework (Belajar)', 'Programming Micro-Skills', 'Graphic Design Certification'],
  },
];

export default function Experience() {

  return (
    <section id="experience" className="relative py-24 bg-white dark:bg-transparent transition-colors duration-300 overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-neutral-500 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="text-neutral-400 font-bold">04.</span>
            <History className="w-3.5 h-3.5" />
            Career Timeline
          </div>
          <h2 className="text-[clamp(30px,4vw,48px)] font-medium leading-[1.1] tracking-[-0.022em] text-neutral-900 dark:text-white mb-4">
            Experience.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-0 w-px bg-neutral-200 dark:bg-white/10 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isRight = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, type: "spring", bounce: 0 }}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start ${isRight ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-white dark:bg-[#0f1011] border-[3px] border-neutral-300 dark:border-neutral-600 -translate-x-1/2 z-10 flex items-center justify-center mt-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-500 dark:bg-neutral-400" />
                  </div>

                  {/* Card */}
                  <div className="w-full md:w-[calc(50%-2.5rem)] pl-16 md:pl-0">
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="bg-white dark:bg-neutral-900/50 backdrop-blur-md clean-border p-6 rounded-2xl hover:shadow-xl dark:hover:bg-neutral-800 transition-colors duration-300 group cursor-default"
                    >

                      {/* Card header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <h3 className="text-[17px] font-medium text-neutral-900 dark:text-white leading-tight">{exp.title}</h3>
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 bg-neutral-200/50 dark:bg-neutral-800 px-2.5 py-1 rounded-md border border-neutral-200 dark:border-white/5 flex-shrink-0">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </div>
                      </div>

                      {/* Company */}
                      <div className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                        <Briefcase className="w-4 h-4 text-neutral-400" />
                        {exp.company}
                      </div>

                      <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-5 leading-relaxed">{exp.description}</p>

                      {/* Achievements */}
                      <div className="space-y-2.5">
                        {exp.achievements.map((a, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-300">
                            <Award className="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0" />
                            <span>{a}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
