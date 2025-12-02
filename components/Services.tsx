"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/SectionHeader"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

const data = {
  header: "Services",
  subheader: "We provide comprehensive solutions designed to support organizations in expanding their digital footprint and achieving measurable results. Our offerings encompass:",
  image: "/images/illustrations/service-image.png",
  services: [
    {
      cardClass: "bg-muted dark:bg-muted-foreground",
      titleClass: "bg-primary dark:text-secondary",
      title: ["Search engine", "optimization"],
      linkButtonClass: "bg-secondary text-primary hover:bg-secondary hover:text-primary",
      linkTextClass: "dark:text-secondary",
      image: "/images/illustrations/image-1.png",
    },
    {
      cardClass: "bg-primary",
      titleClass: "bg-muted",
      title: ["Pay-per-click", "advertising"],
      linkButtonClass: "bg-secondary text-primary hover:bg-secondary hover:text-primary",
      linkTextClass: "dark:text-secondary",
      image: "/images/illustrations/image-2.png",
    },
    {
      cardClass: "bg-secondary",
      titleClass: "bg-muted dark:bg-muted-foreground dark:text-secondary",
      title: ["Social Media", "Marketing"],
      linkButtonClass: "bg-muted dark:bg-primary text-secondary hover:bg-secondary hover:text-primary dark:hover:text-secondary",
      linkTextClass: "text-muted dark:text-muted-foreground",
      image: "/images/illustrations/image-3.png",
    },
    {
      cardClass: "bg-muted dark:bg-muted-foreground",
      titleClass: "bg-primary dark:text-secondary",
      title: ["Email", "Marketing"],
      linkButtonClass: "bg-secondary text-primary hover:bg-secondary hover:text-primary",
      linkTextClass: "dark:text-secondary",
      image: "/images/illustrations/image-4.png",
    },
    {
      cardClass: "bg-primary",
      titleClass: "bg-secondary text-muted dark:text-foreground",
      title: ["Content", "Creation"],
      linkButtonClass: "bg-secondary text-primary hover:bg-secondary hover:text-primary",
      linkTextClass: "dark:text-secondary",
      image: "/images/illustrations/image-5.png",
    },
    {
      cardClass: "bg-secondary",
      titleClass: "bg-primary dark:text-secondary",
      title: ["Analytics &", "Tracking"],
      linkButtonClass: "bg-muted dark:bg-primary text-secondary hover:bg-secondary hover:text-primary dark:hover:text-secondary",
      linkTextClass: "text-muted dark:text-muted-foreground",
      image: "/images/illustrations/image-6.png",
    },
  ]
}

export function Services() {
  return (
    <section className="mx-auto container px-4 sm:px-6 py-6 sm:py-10">
      <SectionHeader
        header={data.header}
        subheader={data.subheader}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {data.services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className={cn(
                "shadow-3xl rounded-2xl border border-foreground/10",
                service.cardClass,
                "h-[280px]"
              )}
            >
            <CardContent className="flex flex-col justify-between p-6 w-full h-full">
              <div className="flex items-start gap-4 w-full">
                <div className="w-1/2 flex flex-col">
                  <h3 className="text-2xl lg:text-3xl leading-snug font-medium">
                    {Array.isArray(service.title) ? (
                      <>
                        <span className={cn("px-2 py-1 rounded-md inline-block", service.titleClass)}>
                          {service.title[0]}
                        </span>
                        <br />
                        <span className={cn("px-2 py-1 rounded-md inline-block", service.titleClass)}>
                          {service.title[1]}
                        </span>
                      </>
                    ) : (
                      <span className={cn("px-2 py-1 rounded-md inline-block", service.titleClass)}>
                        {service.title}
                      </span>
                    )}
                  </h3>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                  <Image
                    src={service.image}
                    alt={Array.isArray(service.title) ? service.title.join(" ") : service.title}
                    width={180}
                    height={180}
                    className="object-contain"
                    style={{ width: "auto", height: "auto", maxHeight: "140px" }}
                  />
                </div>
              </div>
              
              <div className="mt-auto">
                <Link href="#" className="flex items-center gap-2 w-fit group">
                  <Button size="icon" className={cn("rounded-full cursor-pointer h-10 w-10", service.linkButtonClass)}>
                    <ArrowUpRight className="h-5 w-5" />
                  </Button>
                  <span className={cn("font-normal text-base", service.linkTextClass)}>Learn more</span>
                </Link>
              </div>
            </CardContent>
          </Card>
          </motion.div>
        ))}
      </div>

      <div 
        className="services-gray-section flex flex-col lg:flex-row items-center rounded-3xl my-8 sm:my-12 px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 lg:py-12"
        style={{ 
          backgroundColor: '#F3F3F3',
          background: '#F3F3F3',
          backgroundImage: 'none'
        }}
      >
        <div className="left flex flex-col gap-4 sm:gap-5 flex-1 w-full lg:w-auto">
          <h3 className="font-medium text-2xl sm:text-3xl lg:text-4xl text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>Let&apos;s make things happen</h3>
          <p className="w-full md:w-2/3 text-sm sm:text-base lg:text-lg text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>Reach out today to discover how our strategic solutions can drive growth and deliver measurable outcomes for your organization.</p>
          <Button size="lg" className="w-full sm:w-fit rounded-md px-8 py-4 h-auto font-normal border border-foreground/20 text-lg" style={{ fontFamily: 'var(--font-sans)', backgroundColor: '#191A23', color: '#FFFFFF', fontSize: '18px', fontWeight: 400, paddingTop: '16px', paddingBottom: '16px', paddingLeft: '32px', paddingRight: '32px' }}>
            Get your free proposal
          </Button>
        </div>
        <div className="w-full lg:w-2/4 mt-6 lg:mt-0 lg:hidden flex-shrink-0 flex justify-center">
          <Image src={data.image} alt="Service Image" width={300} height={300} className="object-contain" style={{ width: "auto", height: "auto", maxWidth: "100%" }} />
        </div>
        <div className="w-2/4 hidden lg:block flex-shrink-0 flex justify-end">
          <Image src={data.image} alt="Service Image" width={400} height={400} className="object-contain" style={{ width: "auto", height: "auto", maxWidth: "100%" }} />
        </div>
      </div>
    </section>
  )
}

