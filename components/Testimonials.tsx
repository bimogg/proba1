"use client"

import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SectionHeader } from "@/components/SectionHeader"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const data = [
  {
    id: 1,
    review: "Our collaboration over the past year has delivered remarkable results, with substantial growth in our digital presence and lead generation. The team demonstrates exceptional professionalism, quick response times, and genuine commitment to achieving our business objectives. Any organization seeking to expand their digital footprint would benefit from their expertise.",
    author: "Sarah Johnson",
    major: "Head of Marketing at TechVentures",
  },
  {
    id: 2,
    review: "Our collaboration over the past year has delivered remarkable results, with substantial growth in our digital presence and lead generation. The team demonstrates exceptional professionalism, quick response times, and genuine commitment to achieving our business objectives. Any organization seeking to expand their digital footprint would benefit from their expertise.",
    author: "Michael Chen",
    major: "Business Development Lead at InnovateCo",
  },
  {
    id: 3,
    review: "Our collaboration over the past year has delivered remarkable results, with substantial growth in our digital presence and lead generation. The team demonstrates exceptional professionalism, quick response times, and genuine commitment to achieving our business objectives. Any organization seeking to expand their digital footprint would benefit from their expertise.",
    author: "Emily Rodriguez",
    major: "Director of Growth at ScaleUp Solutions",
  },
  {
    id: 4,
    review: "Our collaboration over the past year has delivered remarkable results, with substantial growth in our digital presence and lead generation. The team demonstrates exceptional professionalism, quick response times, and genuine commitment to achieving our business objectives. Any organization seeking to expand their digital footprint would benefit from their expertise.",
    author: "David Thompson",
    major: "VP of Strategy at Global Enterprises",
  },
  {
    id: 5,
    review: "Our collaboration over the past year has delivered remarkable results, with substantial growth in our digital presence and lead generation. The team demonstrates exceptional professionalism, quick response times, and genuine commitment to achieving our business objectives. Any organization seeking to expand their digital footprint would benefit from their expertise.",
    author: "Lisa Anderson",
    major: "Chief Marketing Officer at NextGen Industries",
  },
]

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const canScrollPrev = api?.canScrollPrev() ?? false
  const canScrollNext = api?.canScrollNext() ?? false

  return (
    <section className="container mx-auto px-8 py-10">
      <SectionHeader
        header="Testimonials"
        subheader="Discover What Our Partners Say: Explore Client Feedback Highlighting Our Strategic Solutions and Impact"
      />

      <div className="bg-secondary dark:bg-muted py-12 my-12 rounded-3xl">
        <Carousel
          setApi={setApi}
          opts={{ loop: true }}
          className="w-full"
        >
          <CarouselContent className="px-6 md:px-0 -ml-4 md:-ml-6">
            {data.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="basis-full md:basis-1/2 pl-4 md:pl-6">
                <div className="bg-secondary border-4 border-primary rounded-2xl relative p-6 pb-8">
                  <div className="text-[#F3F3F3] mb-6 text-base leading-relaxed">
                    <span>&quot;{testimonial.review}&quot;</span>
                  </div>

                  <div className="text-primary text-lg font-bold mb-1">{testimonial.author}</div>
                  <div className="text-[#F3F3F3] text-sm">
                    {testimonial.major}
                  </div>
                  
                  <div className="absolute -bottom-3 left-8">
                    <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-primary"></div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-8 flex items-center justify-center gap-4 md:gap-10">
            <Button
              variant="secondary"
              size="icon"
              disabled={!canScrollPrev}
              onClick={() => api?.scrollPrev()}
            >
              <ArrowLeft className="h-5 w-5 dark:group-hover:text-primary cursor-pointer" />
            </Button>

            <div className="space-x-2 hidden md:flex">
              {Array.from({ length: count }).map((_, index) => (
                <Button
                  key={index}
                  variant="secondary"
                  size="icon"
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "p-0 w-8 h-8 rounded-full border-2",
                    current === index + 1 && "bg-white border-white",
                    current !== index + 1 && "bg-transparent border-white/50"
                  )}
                >
                </Button>
              ))}
            </div>

            <Button
              variant="secondary"
              size="icon"
              disabled={!canScrollNext}
              onClick={() => api?.scrollNext()}
            >
              <ArrowRight className="h-5 w-5 dark:group-hover:text-primary cursor-pointer" />
            </Button>
          </div>
        </Carousel>
      </div>
    </section>
  )
}

