"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CyberpunkButton } from "@/components/ui/cyberpunk-button"
import { ChevronDown } from "lucide-react"

const faqs2 = [
  {
    category: "GENERAL",
    data: [
      {
        question: "Is Hackpiration'26 an offline event?",
        answer:
          "Yes. Hackpiration'26 is a fully offline, in-person hackathon conducted at the VIT Pune campus. All shortlisted teams must be present on-site.",
      },
      {
        question: "Who is eligible to participate?",
        answer:
          "Hackpiration'26 is open to students and developers across India. Participants must register in teams, and inter-department as well as inter-college teams are allowed.",
      },
      {
        question: "What are the hackathon dates?",
        answer:
          "The hackathon will be held on 14th and 15th February 2026 at VIT Pune campus.",
      },
    ],
  },
  {
    category: "REGISTRATION",
    data: [
      {
        question: "Is there any registration or participation fee?",
        answer:
          "No. Registration and participation are completely free for all shortlisted teams.",
      },
      {
        question: "What is the team size?",
        answer:
          "Each team must consist of 2 to 4 members. Solo participation is not allowed. Each participant may be part of only one team.",
      },
      {
        question: "Can team members be from different colleges?",
        answer:
          "Yes. Inter-college and inter-department teams are allowed. Team members can be from different colleges or universities.",
      },
      {
        question: "How do I register for the hackathon?",
        answer:
          "You can register for Hackpiration'26 through the Unstop platform. Click on the 'Register Now' button on our website to be redirected to the registration page.",
      },
    ],
  },
  {
    category: "TECHNICAL REQUIREMENTS",
    data: [
      {
        question: "What is the technology focus for this hackathon?",
        answer:
          "All projects must be built on the Algorand blockchain. Participants should familiarize themselves with Algorand development tools and resources.",
      },
      {
        question: "What should participants bring to the venue?",
        answer:
          "Participants should bring their laptops, chargers, and any required hardware. Internet access and workspace will be provided at the venue.",
      },
    ],
  },
  {
    category: "TRAVEL & EXPENSES",
    data: [
      {
        question: "Are travel or accommodation expenses reimbursed?",
        answer:
          "No. Travel and accommodation expenses are not reimbursed. Participants must make their own arrangements.",
      },
    ],
  },
  {
    category: "SUPPORT",
    data: [
      {
        question: "Will mentorship be provided during the hackathon?",
        answer:
          "Yes. Mentors will be available throughout the hackathon to guide teams on technical, design, and product-related challenges.",
      },
    ],
  },
  {
    category: "OWNERSHIP & RULES",
    data: [
      {
        question: "Who owns the intellectual property of the project?",
        answer:
          "All intellectual property rights remain with the participating teams. Organizers and sponsors will not claim ownership.",
      },
    ],
  },
]

export function FAQ() {
  const [visibleCount, setVisibleCount] = useState(2)

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, faqs2.length))
  }

  return (
    <section
      id="faq"
      className="py-24 bg-zinc-950 border-t border-zinc-800"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked{" "}
            <span className="text-neon-purple">Questions</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Got questions? We've got answers!
          </p>
        </motion.div>

        {/* FAQ List */}
        <Accordion type="single" collapsible className="space-y-2">
          {faqs2.slice(0, visibleCount).map((faqGroup, groupIndex) => (
            <div key={groupIndex}>
              <div className="mb-1 text-lg font-mono tracking-widest text-neon-cyan py-4" key={groupIndex}>
                [{faqGroup.category}]
              </div>
              {faqGroup.data.map((faq, index) => (
                <AccordionItem
                  key={`faq-${groupIndex}-${index}`}
                  value={`faq-${groupIndex}-${index}`}
                  className="px-5 py-1 border border-zinc-800 overflow-hidden mb-2"
                >
                  <AccordionTrigger className="text-left text-white hover:text-neon-cyan hover:no-underline text-lg" key={`trigger-${groupIndex}-${index}`}>
                    <p className="me-2">
                      {faq.question}
                    </p>
                  </AccordionTrigger>

                  <AccordionContent className="text-zinc-400 leading-relaxed text-lg user-select-all" key={`content-${groupIndex}-${index}`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
          ))}
        </Accordion>

        {visibleCount < faqs2.length && (
          <div className="mt-12 flex justify-center">
            <CyberpunkButton
              onClick={handleLoadMore}
              variant="secondary"
            >
              LOAD MORE
              <ChevronDown className="ml-2 h-4 w-4" />
            </CyberpunkButton>
          </div>
        )}

        {/* Contact */}
        <div className="mt-12 text-center">
          <p className="text-zinc-400">
            Still have questions? Reach out at{" "}
            <a
              href="mailto:mlsc@vit.edu"
              className="text-neon-cyan hover:underline"
            >
              mlsc@vit.edu
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
