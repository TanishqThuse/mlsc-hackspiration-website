"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const eligibilityCriteria = [
  "Open to students and developers across India.",
  "Participants must register in teams of 2–4 members.",
  "Inter-department, inter college teams allowed.",
  "Each participant may be part of only one team.",
  "All projects must be built on the Algorand blockchain."
]

export function Eligibility() {
  return (
    <section id="eligibility" className="py-24 bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Eligibility <span className="text-neon-cyan">Criteria</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Make sure you meet these requirements before registering
          </p>
        </motion.div>

        {/* Criteria List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {eligibilityCriteria.map((criterion, index) => (
            <motion.div
              key={criterion}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="flex items-start gap-4 p-6 rounded-lg bg-zinc-900/50 border border-white/10 hover:border-neon-cyan/50 transition-colors group"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors">
                <Check className="h-4 w-4 text-neon-cyan" />
              </div>
              <p className="text-zinc-300 text-lg leading-relaxed">
                {criterion}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
