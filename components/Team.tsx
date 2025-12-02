import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/SectionHeader"

const data = {
  header: "Team",
  subheader: "Get to know the talented professionals who drive our strategic initiatives and deliver exceptional results.",
  cards: [
    {
      avatar: "/images/members/1.png",
      name: "Alexandra Martinez",
      major: "CEO & Founder",
      bio: "Over a decade of expertise in strategic planning and digital transformation. Specialized in search optimization, paid advertising, and content development."
    },
    {
      avatar: "/images/members/2.png",
      name: "James Chen",
      major: "Director of Operations",
      bio: "Extensive background in program management and organizational leadership. Known for exceptional coordination abilities and effective stakeholder communication."
    },
    {
      avatar: "/images/members/3.png",
      name: "Rachel Thompson",
      major: "Senior SEO Specialist",
      bio: "Five years focused on search optimization and content development. Advanced skills in term research and technical optimization techniques."
    },
    {
      avatar: "/images/members/4.png",
      name: "Daniel Park",
      major: "PPC Manager",
      bio: "Three years dedicated to paid advertising campaigns. Expertise in managing initiatives and analyzing performance data to drive improvements."
    },
    {
      avatar: "/images/members/5.png",
      name: "Olivia Garcia",
      major: "Social Media Specialist",
      bio: "Four years developing social engagement strategies. Skilled in content planning, metric evaluation, and community building across platforms."
    },
    {
      avatar: "/images/members/6.png",
      name: "Nathan Lee",
      major: "Content Creator",
      bio: "Two years crafting engaging written materials. Proficient in developing compelling, search-optimized content tailored to diverse industry needs."
    },
  ]
}

export function Team() {
  return (
    <section className="mx-auto container px-6 py-10">
      <SectionHeader
        header={data.header}
        subheader={data.subheader}
      />

      <div className="pt-10 pb-5 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.cards.map((member) => (
          <Card
            key={member.name}
            className="shadow-3xl rounded-2xl border border-foreground/10 h-full"
          >
            <CardContent className="p-6 flex flex-col h-full relative">
              <div className="absolute top-6 right-6">
                <div className="w-8 h-8 bg-secondary rounded-md flex items-center justify-center">
                  <span className="text-primary text-xs font-bold">in</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-4">
                <Image 
                  src={member.avatar} 
                  alt={member.name} 
                  width={100} 
                  height={100} 
                  className="rounded-lg object-cover flex-shrink-0"
                  style={{ width: "auto", height: "auto" }} 
                />
                <div className="flex-1">
                  <CardTitle className="text-xl lg:text-2xl font-bold mb-1">{member.name}</CardTitle>
                  <CardDescription className="text-base font-normal">{member.major}</CardDescription>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="my-3 h-px bg-foreground w-full"></div>
                <p className="text-sm text-foreground leading-relaxed flex-1">{member.bio}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center lg:justify-end items-center">
        <Button size="lg" className="w-fit bg-secondary text-secondary-foreground hover:text-primary-foreground dark:bg-muted dark:hover:bg-primary">
          See all team
        </Button>
      </div>
    </section>
  )
}

