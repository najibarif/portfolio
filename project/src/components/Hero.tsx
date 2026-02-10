import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Server } from 'lucide-react';

export default function Hero({ scrollToSection }: { scrollToSection: (id: string) => void }) {
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-cyber-grid bg-[length:50px_50px] opacity-20"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-violet/20 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-accent-cyan/30 rounded-full backdrop-blur-sm">
                            <span className="w-2 h-2 bg-accent-cyan rounded-full mr-3 animate-pulse"></span>
                            <span className="text-accent-cyan text-xs font-display tracking-widest uppercase">
                                System Online
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight text-white">
                                CRAFTING
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-accent-violet">
                                    DIGITAL REALITY
                                </span>
                            </h1>

                            <p className="text-lg text-gray-400 max-w-xl leading-relaxed border-l-2 border-accent-cyan/50 pl-6">
                                I'm Naufal Najib Arif, a Full-Stack Developer specializing in building immersive, high-performance web applications that merge aesthetic precision with robust engineering.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => scrollToSection('portfolio')}
                                className="group relative px-8 py-4 bg-accent-cyan text-obsidian font-bold rounded-lg overflow-hidden transition-all hover:scale-105"
                            >
                                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                <span className="relative flex items-center">
                                    View Projects <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>

                            <button
                                onClick={() => scrollToSection('contact')}
                                className="px-8 py-4 bg-transparent border border-accent-cyan/30 text-accent-cyan font-bold rounded-lg hover:bg-accent-cyan/10 transition-all hover:border-accent-cyan"
                            >
                                Start Collaboration
                            </button>
                        </div>

                        <div className="flex items-center gap-6 pt-4 text-gray-400">
                            <div className="flex items-center gap-2">
                                <Code className="w-5 h-5 text-accent-violet" />
                                <span className="text-sm">Clean Code</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Server className="w-5 h-5 text-accent-cyan" />
                                <span className="text-sm">Robust API</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Database className="w-5 h-5 text-accent-magenta" />
                                <span className="text-sm">Scalable</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                            {/* Rotating Rings */}
                            <div className="absolute inset-0 border border-accent-cyan/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-8 border border-accent-violet/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                            <div className="absolute inset-16 border border-accent-magenta/20 rounded-full animate-[spin_20s_linear_infinite]"></div>

                            {/* Central Image container */}
                            <div className="absolute inset-24 rounded-full overflow-hidden border-2 border-accent-cyan/50 shadow-[0_0_50px_rgba(0,240,255,0.2)]">
                                <img
                                    src="/urang.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
                            </div>

                            {/* Floating Cards */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-0 bg-glass-medium backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg"
                            >
                                <Code className="w-8 h-8 text-accent-cyan mb-2" />
                                <div className="text-xs text-gray-400">Stack</div>
                                <div className="font-bold text-white">Full-Stack</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 left-0 bg-glass-medium backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg"
                            >
                                <Server className="w-8 h-8 text-accent-magenta mb-2" />
                                <div className="text-xs text-gray-400">Focus</div>
                                <div className="font-bold text-white">Scalable Solutions</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
