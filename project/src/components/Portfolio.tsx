import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Code } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "Look For Job",
            category: "Full-Stack Web",
            type: "web",
            description: "A comprehensive job search platform with advanced filtering and real-time scraping capabilities.",
            image: "lookforjob.png",
            technologies: ["React", "Laravel", "MySQL", "Scraping"],
            liveUrl: "https://look-for-job.vercel.app/",
            caseStudyUrl: "https://github.com/najibarif/lookforjob.git",
            featured: true
        },
        {
            id: 2,
            title: "MY UMKM",
            category: "E-Commerce",
            type: "web",
            description: "A digital ecosystem for MSMEs to manage products and connect with customers effectively.",
            image: "myumkm.png",
            technologies: ["Next.js", "Node.js", "PostgreSQL"],
            liveUrl: "https://myumkm.vercel.app/",
            caseStudyUrl: "https://github.com/najibarif/myumkm-v2",
            featured: true
        },
        {
            id: 3,
            title: "Linear Search Visual",
            category: "Algorithm Visualizer",
            type: "web",
            description: "An interactive educational tool to visualize the linear search algorithm step-by-step.",
            image: "linearsearch.png",
            technologies: ["React", "Framer Motion", "Algorithms"],
            liveUrl: "https://linear-search-visual.vercel.app/",
            caseStudyUrl: "https://github.com/najibarif/linear-search-visualization.git",
            featured: true
        }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.type === activeFilter);

    const filters = [
        { key: 'all', label: 'All Projects' },
        { key: 'web', label: 'Web App' },
        { key: 'landing', label: 'Landing Page' },
        { key: 'mobile', label: 'Mobile App' },
        { key: 'branding', label: 'Branding' }
    ];

    return (
        <section id="portfolio" className="relative py-20 bg-charcoal/30">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-violet/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        FEATURED <span className="text-accent-cyan text-glow">PROJECTS</span>
                    </motion.h2>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {filters.map((filter) => (
                            <button
                                key={filter.key}
                                onClick={() => setActiveFilter(filter.key)}
                                aria-pressed={activeFilter === filter.key}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeFilter === filter.key
                                    ? 'bg-accent-cyan/20 border-accent-cyan text-accent-cyan shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Swiper
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        className="pb-16 !px-4"
                    >
                        {filteredProjects.map((project) => (
                            <SwiperSlide key={project.id} className="h-full pt-4 pb-4">
                                <div className="group h-full bg-obsidian border border-white/10 rounded-2xl overflow-hidden hover:border-accent-cyan/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] flex flex-col">
                                    {/* Image Container */}
                                    <div className="relative overflow-hidden h-64">
                                        <img
                                            src={project.image.includes('http') ? project.image.replace('w=800', 'w=600') : project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80"></div>

                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-accent-cyan text-xs font-bold uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="mt-auto">
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.technologies.slice(0, 3).map((tech) => (
                                                    <span key={tech} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded border border-white/10">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                                <a
                                                    href={project.liveUrl}
                                                    className="flex items-center gap-2 text-white hover:text-accent-cyan transition-colors text-sm font-medium"
                                                >
                                                    <Eye className="w-4 h-4" /> View Live
                                                </a>
                                                <a
                                                    href={project.caseStudyUrl}
                                                    className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm"
                                                >
                                                    <Code className="w-4 h-4" /> Code
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
}
