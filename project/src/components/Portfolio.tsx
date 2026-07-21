import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Github, ExternalLink, Layers } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Look For Job',
    category: 'Full-Stack Web',
    type: 'web',
    description: 'A comprehensive job search platform with advanced filtering and real-time scraping capabilities.',
    image: 'lookforjob.webp',
    technologies: ['React', 'Laravel', 'MySQL', 'Scraping'],
    liveUrl: 'https://look-for-job.vercel.app/',
    codeUrl: 'https://github.com/najibarif/lookforjob.git',
  },
  {
    id: 2,
    title: 'MY UMKM',
    category: 'E-Commerce',
    type: 'web',
    description: 'A digital ecosystem for MSMEs to manage products and connect with customers effectively.',
    image: 'myumkm.webp',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://myumkm.vercel.app/',
    codeUrl: 'https://github.com/najibarif/myumkm-v2',
  },
  {
    id: 3,
    title: 'Linear Search Visual',
    category: 'Algorithm Visualizer',
    type: 'web',
    description: 'An interactive educational tool to visualize the linear search algorithm step-by-step.',
    image: 'linearsearch.webp',
    technologies: ['React', 'Framer Motion', 'Algorithms'],
    liveUrl: 'https://linear-search-visual.vercel.app/',
    codeUrl: 'https://github.com/najibarif/linear-search-visualization.git',
  },
  {
    id: 4,
    title: 'LearnJS',
    category: 'Interactive Web',
    type: 'web',
    description: 'An interactive platform for learning JavaScript, featuring live code execution and quizzes.',
    image: 'ngodingjs.webp',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://ngoding-js.vercel.app/',
    codeUrl: 'https://github.com/najibarif/ngoding-js',
  },
  {
    id: 5,
    title: 'English Final Test Prep',
    category: 'Education Portal',
    type: 'web',
    description: 'An English exam prep platform with interactive quizzes, reading, and listening exercises.',
    image: 'finaltestprep.webp',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Web Audio API'],
    liveUrl: 'https://final-test-prep.vercel.app/',
    codeUrl: 'https://github.com/najibarif/final-test-prep',
  },
];

const filters = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web App' },
  { key: 'landing', label: 'Landing Page' },
  { key: 'mobile', label: 'Mobile App' },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('is-visible'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="reveal group relative bg-white dark:bg-[#1a1b1e] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col card-hover-clean clean-border"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden h-[220px] flex-shrink-0 bg-neutral-100 dark:bg-neutral-800">
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            width={960}
            height={540}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category badge */}
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-white/90 dark:bg-neutral-900/90 text-neutral-900 dark:text-white backdrop-blur-md border border-neutral-200 dark:border-white/10 shadow-sm">
            {project.category}
          </span>

          {/* Live / Code buttons — appear on hover */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live: ${project.title}`}
              className="w-8 h-8 bg-white dark:bg-neutral-800 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white transition-colors shadow-sm z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Code: ${project.title}`}
              className="w-8 h-8 bg-white dark:bg-neutral-800 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white transition-colors shadow-sm z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col gap-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1" />
          </div>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed line-clamp-2 flex-1">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-white/5 mt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800/60 text-neutral-600 dark:text-neutral-400 text-xs font-medium rounded-md border border-neutral-200/60 dark:border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Full card link */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title}`}
          className="absolute inset-0 z-10"
        />
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const headerRef = useRef<HTMLDivElement>(null);

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.type === activeFilter);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.classList.add('is-visible');
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="portfolio" className="relative py-24 bg-neutral-100 dark:bg-[#0f1011] transition-colors duration-300 overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 text-neutral-500 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="text-neutral-400 font-bold">03.</span>
            <Layers className="w-3.5 h-3.5" />
            Selected Work
          </div>
          <h2 className="text-[clamp(30px,4vw,48px)] font-medium leading-[1.1] tracking-[-0.022em] text-neutral-900 dark:text-white mb-4">
            Featured Projects.
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto text-[15px] leading-relaxed">
            A curated collection of projects that showcase my full-stack capabilities, from frontend interactions to backend architecture.
          </p>

          {/* Filter pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                aria-pressed={activeFilter === f.key}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === f.key
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-transparent shadow-md'
                    : 'bg-white dark:bg-neutral-800/50 border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-neutral-500 dark:text-neutral-400 py-20 font-mono text-sm bg-white/50 dark:bg-neutral-900/50 rounded-2xl clean-border">
              No projects match this filter yet — coming soon.
            </div>
          )}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/najibarif"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-full text-[15px] font-medium transition-all shadow-sm"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
