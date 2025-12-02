"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const data = {
  title: "Navigating the digital landscape for success",
  description: "We provide strategic solutions to help organizations expand their online presence and achieve their goals through comprehensive services including search optimization, paid advertising, social engagement, and content strategy.",
  image: "/images/illustrations/hero-illustration.png",
}

export function Hero() {
  return (
    <header className="container px-4 sm:px-6 mx-auto py-6 sm:py-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
      <motion.div 
        className="w-full lg:w-1/2 order-2 lg:order-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="w-full text-4xl md:text-5xl lg:text-6xl font-medium mb-8"
          style={{ 
            letterSpacing: '-0.02em',
            fontFamily: 'var(--font-sans)',
            lineHeight: '1.15',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.2em'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>Navigating the</motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>digital landscape</motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>for success</motion.span>
        </motion.h1>
        <motion.p 
          className="w-full text-base md:text-lg text-foreground mb-10"
          style={{ 
            letterSpacing: '0.01em',
            fontFamily: 'var(--font-sans)',
            lineHeight: '1.6'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {data.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="#">
            <Button 
              size="lg" 
              className="bg-secondary text-white hover:bg-secondary/90 rounded-md px-8 py-4 h-auto font-medium text-lg"
              style={{ 
                letterSpacing: '0.01em',
                fontFamily: 'var(--font-sans)',
                backgroundColor: '#191A23',
                color: '#FFFFFF',
                fontSize: '18px',
                paddingTop: '16px',
                paddingBottom: '16px',
                paddingLeft: '32px',
                paddingRight: '32px'
              }}
            >
              Book a consultation
            </Button>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div 
        className="w-full lg:w-1/2 order-1 lg:order-2 mt-0 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Image
          src={data.image}
          alt="Illustration"
          width={600}
          height={600}
          className="w-full h-auto"
          priority
        />
      </motion.div>
    </header>
  )
}

