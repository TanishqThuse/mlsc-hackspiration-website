"use client"

import { motion, useReducedMotion } from "framer-motion"
import { CyberpunkButton } from "@/components/ui/cyberpunk-button"
import { ArrowRight, Terminal, Code2, Cpu, MapPin } from "lucide-react"
import { StaggeredText, ScrollScale } from "@/components/ui/scroll-animations"

import { Countdown } from "@/components/sections/countdown"
import { HyperText } from "@/components/ui/hyper-text"
import { SOCIAL_LINKS } from "@/lib/constants"

export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-12">
      {/* 3D Background - Moved to global layout */}
      <div className="absolute inset-0 z-0 opacity-60">
        {/* RobotScene is now global */}
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/50" />
      <div className="scanline" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center flex-1 flex flex-col items-center justify-between">

        {/* Spacer */}
        <div className="h-24" />

        <div
          className="flex flex-col items-center"
        >
          <div className="relative z-10 text-center mb-18"
          >
            {/* FREE ENTRY Badge */}
            <motion.div
              initial={shouldReduceMotion ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.5
              }}
              className="inline-block mb-6"
            >
              <div className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple rounded-full blur-lg opacity-75 group-hover:opacity-100 ${shouldReduceMotion ? '' : 'animate-pulse-slow'}`} />
                <div className="relative px-8 py-3 bg-black rounded-full border-2 border-neon-cyan shadow-[0_0_25px_rgba(0,229,255,0.5)] hover:shadow-[0_0_40px_rgba(0,229,255,0.8)] transition-all duration-300">
                  <motion.span
                    animate={shouldReduceMotion ? {} : {
                      textShadow: [
                        "0 0 10px #00E5FF, 0 0 20px #00E5FF",
                        "0 0 15px #FF2D95, 0 0 30px #FF2D95",
                        "0 0 10px #7C7CFF, 0 0 20px #7C7CFF",
                        "0 0 10px #00E5FF, 0 0 20px #00E5FF"
                      ]
                    }}
                    transition={shouldReduceMotion ? undefined : {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-2xl md:text-3xl font-black tracking-widest text-white uppercase"
                    style={shouldReduceMotion ? { textShadow: "0 0 10px #00E5FF, 0 0 20px #00E5FF" } : undefined}
                  >
                    ⚡ FREE ENTRY ⚡
                  </motion.span>
                </div>
              </div>
            </motion.div>
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-black text-white mb-6 tracking-tighter relative">
              <span className="absolute -inset-1 blur-2xl bg-neon-cyan/20 rounded-full pointer-events-none" />
              <HyperText text="HACKSPIRATION" className="relative z-10" />
              <span className="text-neon-cyan relative z-10"> x </span>
              <span className="text-neon-magenta relative z-10">ALGORAND</span>
            </h1>
            {/* Chips */}
            <div className="flex flex-row gap-3 items-center justify-center mt-5 mb-9">
              <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900 rounded-md backdrop-blur-md group">
                <span className="text-neon-purple font-[family-name:var(--font-orbitron)] font-bold tracking-wider text-xs">
                  14–15 FEBRUARY 2026
                </span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900 rounded-md backdrop-blur-md group">
                <span className="text-neon-magenta font-[family-name:var(--font-orbitron)] font-bold tracking-wider text-xs">
                  HYBRID HACKATHON
                </span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900 rounded-md backdrop-blur-md group">
                <span className="text-neon-cyan font-[family-name:var(--font-orbitron)] font-bold tracking-wider text-xs">
                  VIT Pune
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className="
      px-6 py-3
      rounded-xl
      bg-white/10 dark:bg-black/20
      backdrop-blur-md
      border border-white/10
      shadow-lg
    "
              >
                <StaggeredText

                  text="A hybrid hackathon featuring an online round on 14th February and an offline finale on 15th February"
                  delay={0.01}
                  staggerDelay={0.01}
                  className="text-md md:text-lg font-mono justify-center"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="w-full flex-row mb-6 items-center justify-center">
          <div className="flex flex-col md:gap-8 gap-5 sm:flex-row items-center justify-center">
            <a
              href="https://unstop.com/o/mjrhY8O?lb=OSIZMkR&utm_medium=Share&utm_source=mlscvitpune&utm_campaign=Online_coding_challenge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CyberpunkButton
                variant="primary"
                className="md:text-lg text-xs md:py-5 md:px-12 sm:py-4 sm:px-8"
              >
                REGISTER NOW
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-md border-[#0073e6]">
                  <img
                    src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
                    alt="Unstop"
                    className="h-5 w-auto"
                  />
                </div>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </CyberpunkButton>
            </a>

            <a
              href={SOCIAL_LINKS.DISCORD}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CyberpunkButton
                variant="secondary"
                className="md:text-lg text-xs md:py-5 md:px-12 sm:py-4 sm:px-8"
              >
                <Terminal className="h-5 w-5 mr-2" />
                JOIN DISCORD
              </CyberpunkButton>
            </a>
          </div>

          <div className="w-full mb-12">
            <Countdown />
          </div>
        </div>
      </div>
    </section>
  )
}
