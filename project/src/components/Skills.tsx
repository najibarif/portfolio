import { Server, Github, Palette, Zap, Users } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Palette,
    skills: [
      { name: 'React', tag: 'Primary' },
      { name: 'TypeScript', tag: '' },
      { name: 'Next.js', tag: '' },
      { name: 'Tailwind CSS', tag: 'Primary' },
      { name: 'Bootstrap', tag: 'Certified' },
    ],
  },
  {
    title: 'Backend & DB',
    icon: Server,
    skills: [
      { name: 'Laravel', tag: '' },
      { name: 'Node.js', tag: '' },
      { name: 'Express.js', tag: '' },
      { name: 'MySQL', tag: 'Primary' },
      { name: 'PostgreSQL', tag: '' },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: Github,
    skills: [
      { name: 'Git', tag: '' },
      { name: 'GitHub', tag: 'Primary' },
      { name: 'IoT / Arduino', tag: 'Certified' },
      { name: 'Testing', tag: '' },
      { name: 'Architecture Design', tag: 'Certified' },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Communication', tag: '' },
      { name: 'Problem Solving', tag: '' },
      { name: 'Team Leadership', tag: '' },
      { name: 'Academic Assistance', tag: 'TA' },
    ],
  },
];

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0, duration: 0.8 } },
  };

  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-neutral-50 dark:bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-neutral-500 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="text-neutral-400 font-bold">02.</span>
            <Zap className="w-3.5 h-3.5" />
            Technical Arsenal
          </div>
          <h2 className="text-[clamp(30px,4vw,48px)] font-medium leading-[1.1] tracking-[-0.022em] text-neutral-900 dark:text-white mb-4">
            My Capabilities.
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto text-[15px] leading-relaxed">
            A comprehensive toolkit for building modern, scalable digital solutions — from pixel-perfect UIs to robust backend architectures.
          </p>
        </motion.div>

        {/* Skill Category Grid (Bento style) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass-panel p-5 sm:p-8 rounded-2xl flex flex-col dark:hover:bg-neutral-800 transition-colors duration-300 group cursor-default bg-white"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5 sm:mb-8">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800/50 flex items-center justify-center border border-neutral-200 dark:border-white/5">
                    <Icon className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
                  </div>
                  <h3 className="text-lg font-medium tracking-tight text-neutral-900 dark:text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center whitespace-nowrap rounded-lg px-3 py-1.5 text-[13.5px] font-medium transition-colors duration-150 ease-in-out bg-neutral-100 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 clean-border"
                    >
                      {skill.name}
                      {skill.tag && (
                        <span className="ml-2 text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 bg-neutral-200 dark:bg-neutral-800 px-1.5 py-0.5 rounded border border-neutral-300 dark:border-white/5">
                          {skill.tag}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

