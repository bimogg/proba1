import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const data = {
  title: "Navigating the digital landscape for success",
  description: "We provide strategic solutions to help organizations expand their online presence and achieve their goals through comprehensive services including search optimization, paid advertising, social engagement, and content strategy.",
  image: "/images/illustrations/hero-illustration.png",
}

export function Hero() {
  return (
    <header className="container px-4 sm:px-6 mx-auto py-6 sm:py-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
      <div className="w-full lg:w-1/2 order-2 lg:order-1">
        <h1 
          className="w-full text-4xl md:text-5xl lg:text-6xl font-medium mb-8"
          style={{ 
            letterSpacing: '-0.02em',
            fontFamily: 'var(--font-sans)',
            lineHeight: '1.15',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.2em'
          }}
        >
          <span>Navigating the</span>
          <span>digital landscape</span>
          <span>for success</span>
        </h1>
        <p 
          className="w-full text-base md:text-lg text-foreground mb-10"
          style={{ 
            letterSpacing: '0.01em',
            fontFamily: 'var(--font-sans)',
            lineHeight: '1.6'
          }}
        >
          {data.description}
        </p>
        <div>
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
        </div>
      </div>
      <div className="w-full lg:w-1/2 order-1 lg:order-2 mt-0 lg:mt-0">
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

