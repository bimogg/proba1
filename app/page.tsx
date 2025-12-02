import { Navbar } from "@/components/navbar/Navbar"
import { Hero } from "@/components/Hero"
import { Clients } from "@/components/Clients"
import { Services } from "@/components/Services"
import { CaseStudies } from "@/components/CaseStudies"
import { WorkingProcess } from "@/components/WorkingProcess"
import { Team } from "@/components/Team"
import { Testimonials } from "@/components/Testimonials"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

