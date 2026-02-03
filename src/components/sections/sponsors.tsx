"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Sponsors() {
    return (
        <section id="sponsors" className="py-24 bg-black relative overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-[0.1em] uppercase">
                        <span className="text-neon-cyan">Sponsor</span>
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Powering the future of blockchain innovation.
                    </p>
                </motion.div>

                {/* Algorand - Exclusive Sponsor */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <div className="relative group max-w-2xl w-full">
                        {/* Cyberpunk Glowing Border */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse-slow"></div>
                        
                        {/* Main Sponsor Card */}
                        <div className="relative bg-zinc-900/80 border-2 border-neon-cyan/40 rounded-2xl p-12 hover:border-neon-cyan transition-all duration-500 backdrop-blur-xl">
                            {/* Corner Accents */}
                            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-neon-cyan/60" />
                            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-neon-cyan/60" />
                            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-neon-cyan/60" />
                            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-neon-cyan/60" />
                            
                            {/* Title Sponsor Badge */}
                            <div className="text-center mb-8">
                                <div className="inline-block px-6 py-2 bg-neon-magenta/20 border border-neon-magenta/40 rounded-full">
                                    <span className="text-neon-magenta font-mono text-sm font-bold uppercase tracking-wider">
                                        Title Sponsor
                                    </span>
                                </div>
                            </div>
                            
                            {/* Algorand Logo/Text */}
                            <div className="text-center mb-8 overflow-visible">
                                <h3 className="text-4xl sm:text-6xl md:text-8xl font-black text-transparent bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text mb-4 font-mono tracking-tight sm:tracking-wider whitespace-nowrap overflow-visible">
                                    ALGORAND
                                </h3>
                                <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto rounded-full"></div>
                            </div>
                            
                            {/* Description */}
                            <div className="text-center">
                                <p className="text-zinc-300 text-lg md:text-xl font-mono leading-relaxed">
                                    Blockchain technology partner powering the future of 
                                    <span className="text-neon-cyan font-bold"> decentralized innovation</span>
                                </p>
                            </div>
                            
                            {/* Cyberpunk Grid Pattern */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none rounded-2xl"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
