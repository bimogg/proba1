import Link from "next/link"
import { SectionHeader } from "@/components/SectionHeader"
import { ArrowUpRight } from "lucide-react"

const data = {
  header: "Case Studies",
  subheader: "Discover Real-World Examples Demonstrating Our Strategic Solutions and Measurable Impact",
  cards: [
    {
      title: "A regional dining establishment saw a 50% boost in web visitors and 25% revenue growth after we launched a focused paid advertising initiative.",
    },
    {
      title: "A B2B technology firm achieved first-page search rankings for critical terms and experienced a 200% surge in organic visitor volume through our optimization approach.",
    },
    {
      title: "A nationwide retail brand expanded their social audience by 25% and realized a 20% uptick in e-commerce revenue following our engagement campaign.",
    },
  ]
}

export function CaseStudies() {
  return (
    <section className="mx-auto container px-6 py-10">
      <SectionHeader
        header={data.header}
        subheader={data.subheader}
      />

      <div className="my-12 flex flex-col lg:flex-row items-stretch bg-secondary rounded-3xl p-10 lg:p-12 lg:divide-x divide-[#F3F3F3]/20 gap-0">
        {data.cards.map((card, index) => (
          <div key={index} className="w-full lg:w-1/3 px-0 lg:px-8 first:lg:pl-0 last:lg:pr-0 flex flex-col justify-between min-h-[200px]">
            <p className="text-[#F3F3F3] text-base lg:text-lg leading-relaxed mb-6">{card.title}</p>
            <Link href="#" className="flex items-center gap-2 text-primary w-fit group">
              <span className="font-normal text-base">Learn more</span>
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

