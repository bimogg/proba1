"use client"

import { Separator } from "@/components/ui/separator"
import { SectionHeader } from "@/components/SectionHeader"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

const data = [
  {
    id: "01",
    title: "Consultation",
    text: "In our first meeting, we explore your organizational objectives, ideal customer profile, and existing initiatives. This foundation enables us to customize our approach to align precisely with your specific needs.",
  },
  {
    id: "02",
    title: "Research and Strategy Development",
    text: "We conduct thorough analysis of your market position, competitive landscape, and opportunities. Based on these insights, we craft a tailored strategic framework designed to achieve your defined outcomes.",
  },
  {
    id: "03",
    title: "Implementation",
    text: "Our team executes the developed strategy with precision, deploying tools and tactics across selected channels. We ensure seamless integration and maintain quality standards throughout the process.",
  },
  {
    id: "04",
    title: "Monitoring and Optimization",
    text: "We continuously track performance metrics and analyze results to identify improvement opportunities. Regular adjustments are made to enhance effectiveness and maximize return on investment.",
  },
  {
    id: "05",
    title: "Reporting and Communication",
    text: "Transparent reporting keeps you informed of progress and outcomes. We provide regular updates with clear insights and actionable recommendations to support decision-making.",
  },
  {
    id: "06",
    title: "Continual Improvement",
    text: "We maintain an iterative approach, refining strategies based on performance data and evolving market conditions. This ensures sustained growth and adaptation to changing requirements.",
  },
]

export function WorkingProcess() {
  const [openValue, setOpenValue] = useState<string | null>(null)

  return (
    <section className="container mx-auto px-6">
      <SectionHeader
        header="Our Working Process"
        subheader="A Structured Approach to Realizing Your Organizational Objectives Through Strategic Planning and Execution"
      />

      <div className="py-10">
        <div className="gap-20 space-y-4">
          {data.map((process, index) => {
            const value = `${process.title}-${index + 1}`
            const isOpen = openValue === value

            return (
              <div
                key={process.id}
                className={`rounded-xl px-10 py-8 shadow-3xl border border-foreground/10 ${
                  isOpen ? 'bg-primary' : 'bg-[#F3F3F3]'
                }`}
              >
                <button
                  className="flex w-full items-center justify-between pb-2"
                  onClick={() => setOpenValue(isOpen ? null : value)}
                  type="button"
                >
                  <div className="px-4 flex items-center justify-start gap-3 lg:gap-4">
                    <span className="font-bold text-2xl lg:text-3xl text-foreground">0{index + 1}</span>
                    <Separator orientation="vertical" className="h-6 bg-foreground/20" />
                    <span className="text-lg lg:text-xl font-medium text-foreground">{process.title}</span>
                  </div>

                  <div className="rounded-full border border-foreground/20 bg-white w-9 h-9 flex items-center justify-center">
                    {isOpen ? (
                      <Minus className="h-5 w-5 text-foreground" />
                    ) : (
                      <Plus className="h-5 w-5 text-foreground" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <>
                    <div className="my-6 h-px bg-foreground w-full"></div>
                    <div className="text-base lg:text-lg text-foreground leading-relaxed pb-2">
                      {process.text}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

