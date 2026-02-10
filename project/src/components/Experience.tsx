import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award } from 'lucide-react';

export default function Experience() {
    const experiences = [
        {
            id: 1,
            title: "Technology Bureau Chairperson",
            company: "Kemakom UPI",
            period: "Mar 2025 - Jan 2026",
            description: "Leading the technology division in the Computer Student Family (Kemakom) at UPI, managing technical projects and infrastructure.",
            achievements: ["Overseeing technology-based initiatives", "Managing division-wide technical workflows", "Coordinating technical team for student events"]
        },
        {
            id: 2,
            title: "Staff of Communication Bureau",
            company: "Kemakom UPI",
            period: "Mar 2024 - Jan 2025",
            description: "Managed internal and external communications, bridging the student organization with stakeholders.",
            achievements: ["Handled official communication channels", "Facilitated organizational transparency", "Managed stakeholder relations for 11 months"]
        },
        {
            id: 3,
            title: "Academic Assistant",
            company: "Universitas Pendidikan Indonesia",
            period: "2024 - 2025",
            description: "Served as a Teaching Assistant for the Basic Database Systems Laboratory, assisting students with practical implementations.",
            achievements: ["Guided students in SQL and Database design", "Evaluated practical assignments and lab progress", "Supported faculty in delivering lab course content"]
        },
        {
            id: 4,
            title: "IoT Project Intern",
            company: "PT Len Industri (Persero)",
            period: "Mar 2021 - Apr 2021",
            description: "Focused on Internet of Things (IoT) development, contributing to industrial-grade technology projects.",
            achievements: ["Developed IoT-based solutions", "Gained deep understanding of integrated systems", "Collaborated on technical projects in a state-owned enterprise environment"]
        },
        {
            id: 5,
            title: "Certifications",
            company: "Various Institutions",
            period: "2021 - 2024",
            description: "Achieved various technical certifications demonstrating competence in web development, design, and embedded systems.",
            achievements: ["Mobile Transport Robot Development (Arduino)", "Bootstrap CSS Framework (Belajar)", "Programming Micro-Skills", "Graphic Design Certification"]
        }
    ];

    return (
        <section id="experience" className="relative py-20 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        WORK <span className="text-accent-violet text-glow">EXPERIENCE</span>
                    </motion.h2>
                </div>

                <div className="space-y-12 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-violet to-transparent hidden md:block"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-obsidian border-2 border-accent-violet rounded-full transform -translate-x-1/2 md:translate-x-[-8px] z-10 hidden md:block">
                                <div className="absolute inset-0 bg-accent-violet animate-ping opacity-75 rounded-full"></div>
                            </div>

                            {/* Content Card */}
                            <div className="w-full md:w-[calc(50%-2rem)]">
                                <div className="bg-glass-low backdrop-blur-md border border-white/5 p-6 rounded-2xl hover:border-accent-violet/30 transition-all duration-300 hover:bg-glass-medium">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                        <div className="hidden sm:flex items-center text-xs text-accent-violet font-mono border border-accent-violet/30 px-2 py-1 rounded">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {exp.period}
                                        </div>
                                    </div>

                                    <div className="text-accent-cyan font-medium mb-2 flex items-center">
                                        <Briefcase className="w-4 h-4 mr-2" />
                                        {exp.company}
                                    </div>

                                    <div className="sm:hidden text-xs text-gray-500 mb-4">{exp.period}</div>

                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {exp.description}
                                    </p>

                                    <div className="space-y-2">
                                        {exp.achievements.map((achievement, i) => (
                                            <div key={i} className="flex items-start text-xs text-gray-300">
                                                <Award className="w-3 h-3 text-accent-violet mr-2 mt-0.5 flex-shrink-0" />
                                                <span>{achievement}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
