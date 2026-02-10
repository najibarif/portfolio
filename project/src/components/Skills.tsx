import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import {
    Code, Server, Database, Github, Palette, Zap, Users,
    Lightbulb, MessageCircle, CheckCircle
} from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Skills() {
    const skills = [
        { name: 'GitHub', icon: Github, description: 'Version control & collaboration (Primary).' },
        { name: 'Git', icon: Github, description: 'Distributed version control system.' },
        { name: 'MySQL', icon: Database, description: 'Relational database management (Primary).' },
        { name: 'JavaScript', icon: Code, description: 'Bahasa utama web interaktif.' },
        { name: 'TypeScript', icon: Code, description: 'JavaScript dengan type safety.' },
        { name: 'React', icon: Code, description: 'Library UI modern berbasis komponen.' },
        { name: 'Next.js', icon: Code, description: 'Framework React untuk SSR & SSG.' },
        { name: 'Node.js', icon: Server, description: 'Backend JavaScript runtime.' },
        { name: 'Express.js', icon: Server, description: 'Framework backend minimalis.' },
        { name: 'Bootstrap', icon: Palette, description: 'CSS Framework (Certified).' },
        { name: 'IoT Development', icon: Zap, description: 'Arduino & Embedded Systems.' },
        { name: 'Architecture Design', icon: Lightbulb, description: 'Perancangan sistem (Certified).' },
        { name: 'Problem Solving', icon: Zap, description: 'Logika & Algoritma Dasar.' },
        { name: 'Communication', icon: MessageCircle, description: 'Bureau Communication Experience.' },
        { name: 'Testing', icon: CheckCircle, description: 'Unit & integration testing.' },
        { name: 'Academic Asst.', icon: Users, description: 'Database Lab Assistant.' },
    ];

    return (
        <section id="skills" className="relative py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        MY <span className="text-accent-cyan text-glow">SKILLS</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        A comprehensive toolkit for building modern, scalable digital solutions.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <Swiper
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        className="pb-16"
                    >
                        {skills.map((skill) => {
                            const IconComponent = skill.icon;
                            return (
                                <SwiperSlide key={skill.name} className="h-full pt-4 pb-4">
                                    <div className="group relative bg-glass-low backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-glass-medium hover:border-accent-cyan/30 transition-all duration-300 h-full">

                                        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/0 to-accent-violet/0 group-hover:from-accent-cyan/10 group-hover:to-accent-violet/10 rounded-2xl transition-all duration-500"></div>

                                        <div className="relative flex flex-col items-center text-center">
                                            <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-accent-cyan/50 group-hover:scale-110 transition-all duration-300">
                                                <IconComponent className="w-8 h-8 text-accent-cyan group-hover:text-white transition-colors" />
                                            </div>

                                            <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                                            <p className="text-gray-400 text-sm">{skill.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
}
