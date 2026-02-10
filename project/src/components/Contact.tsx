import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic can be added here
    };

    return (
        <section id="contact" className="relative py-20 overflow-hidden bg-charcoal/50">
            <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                LET'S <span className="text-accent-cyan">CONNECT</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                                Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-6 group">
                                <div className="w-14 h-14 bg-obsidian border border-white/10 rounded-xl flex items-center justify-center group-hover:border-accent-cyan/50 transition-colors shadow-lg">
                                    <Mail className="w-6 h-6 text-accent-cyan" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-lg">Email Me</div>
                                    <div className="text-gray-400">naufalnajib52@gmail.com</div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6 group">
                                <div className="w-14 h-14 bg-obsidian border border-white/10 rounded-xl flex items-center justify-center group-hover:border-accent-violet/50 transition-colors shadow-lg">
                                    <MapPin className="w-6 h-6 text-accent-violet" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-lg">Location</div>
                                    <div className="text-gray-400">Bandung, Indonesia</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-obsidian border border-white/10 p-8 rounded-3xl shadow-2xl relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-violet/5 rounded-3xl pointer-events-none"></div>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm text-gray-400 font-medium ml-1">Your Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm text-gray-400 font-medium ml-1">Your Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-accent-violet/50 focus:ring-1 focus:ring-accent-violet/50 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm text-gray-400 font-medium ml-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-bold py-4 rounded-xl shadow-lg shadow-accent-cyan/20 hover:shadow-accent-cyan/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <Send className="w-5 h-5" />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
