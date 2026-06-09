import { motion } from 'framer-motion';
import { Download, MapPin, Mail } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="relative py-20 overflow-hidden bg-charcoal/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image/Visual Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative max-w-md mx-auto lg:mx-0 group cursor-pointer"
                    >
                        {/* Interactive Offset Back-Frame */}
                        <div className="absolute -inset-2 border-2 border-accent-cyan/30 rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:border-accent-cyan/60 transition-all duration-500 -z-10 shadow-[0_0_15px_rgba(0,240,255,0.05)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.2)]"></div>

                        <div className="relative rounded-2xl p-1 bg-gradient-to-br from-accent-cyan via-accent-violet to-accent-magenta overflow-hidden">
                            <div className="bg-obsidian rounded-2xl overflow-hidden relative">
                                <img
                                    src="urang.webp"
                                    alt="Naufal Najib Arif - Portrait in the About Me section"
                                    width={400}
                                    height={400}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-auto object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
                                
                                {/* Cyber Hologram Scanner Line */}
                                <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent shadow-[0_0_10px_#00F0FF] animate-scanner pointer-events-none"></div>
                                
                                {/* HUD Corner Brackets */}
                                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-accent-cyan/70 rounded-tl pointer-events-none"></div>
                                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-accent-cyan/70 rounded-tr pointer-events-none"></div>
                                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-accent-cyan/70 rounded-bl pointer-events-none"></div>
                                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-accent-cyan/70 rounded-br pointer-events-none"></div>
                            </div>
                        </div>
                        {/* Decor elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-cyan/10 rounded-full blur-xl -z-20"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-violet/10 rounded-full blur-xl -z-20"></div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-violet">ME</span>
                        </h2>

                        <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                            <p>
                                I am a <span className="text-accent-cyan">Computer Science Education</span> student at Universitas Pendidikan Indonesia (2023-2027) with a strong foundation in technical engineering from SMKN 1 Katapang. I am passionate about building modern, responsive, and robust web applications.
                            </p>
                            <p>
                                With expertise in <span className="text-accent-cyan">Full-Stack Development</span> and <span className="text-accent-cyan">Educational Technology</span>, I enjoy turning complex problems into elegant solutions. I am active in the Kemakom UPI organization, currently serving as the Technology Bureau Chairperson.
                            </p>
                        </div>

                        {/* Sleek achievements/stats grid */}
                        <div className="grid grid-cols-3 gap-4 py-4">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-accent-cyan/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all group">
                                <div className="text-2xl md:text-3xl font-display font-bold text-accent-cyan group-hover:scale-105 transition-transform">3+</div>
                                <div className="text-[10px] md:text-xs text-gray-400 font-mono uppercase tracking-wider mt-1">Years of Code</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-accent-violet/50 hover:shadow-[0_0_15px_rgba(112,0,255,0.1)] transition-all group">
                                <div className="text-2xl md:text-3xl font-display font-bold text-violet-400 group-hover:scale-105 transition-transform">10+</div>
                                <div className="text-[10px] md:text-xs text-gray-400 font-mono uppercase tracking-wider mt-1">Projects</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-accent-magenta/50 hover:shadow-[0_0_15px_rgba(255,0,60,0.1)] transition-all group">
                                <div className="text-2xl md:text-3xl font-display font-bold text-accent-magenta group-hover:scale-105 transition-transform">1st</div>
                                <div className="text-[10px] md:text-xs text-gray-400 font-mono uppercase tracking-wider mt-1">Tech Chair</div>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-white/10">
                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-accent-cyan/10 rounded-xl flex items-center justify-center border border-accent-cyan/20 group-hover:border-accent-cyan/50 transition-colors">
                                    <MapPin className="w-6 h-6 text-accent-cyan" />
                                </div>
                                <div>
                                    <p className="text-white font-bold">Location</p>
                                    <p className="text-gray-400 text-sm">Bandung, Indonesia</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-accent-violet/10 rounded-xl flex items-center justify-center border border-accent-violet/20 group-hover:border-accent-violet/50 transition-colors">
                                    <Mail className="w-6 h-6 text-accent-violet" />
                                </div>
                                <div>
                                    <p className="text-white font-bold">Email</p>
                                    <p className="text-gray-400 text-sm">naufalnajib52@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <a
                                href="#"
                                download="Naufal_Najib_Arif_Resume.pdf"
                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-bold py-3 px-8 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transform hover:-translate-y-1"
                            >
                                <Download className="w-5 h-5" />
                                <span>Download Resume</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
