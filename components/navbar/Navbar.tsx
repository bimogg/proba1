"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/Logo"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav 
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl bg-background/50 dark:bg-background/70"
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <div className="flex items-center" style={{ marginLeft: '-1rem' }}>
        <Logo />
      </div>

      <div className="hidden lg:flex items-center" style={{ gap: '2.5rem', marginLeft: 'auto', marginRight: 'auto' }}>
        <Link
          href="#"
          className="text-base font-normal text-foreground hover:text-primary transition-colors whitespace-nowrap"
          style={{ letterSpacing: '0.01em', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 400 }}
        >
          About us
        </Link>
        <Link
          href="#"
          className="text-base font-normal text-foreground hover:text-primary transition-colors whitespace-nowrap"
          style={{ letterSpacing: '0.01em', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 400 }}
        >
          Services
        </Link>
        <Link
          href="#"
          className="text-base font-normal text-foreground hover:text-primary transition-colors whitespace-nowrap"
          style={{ letterSpacing: '0.01em', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 400 }}
        >
          Use Cases
        </Link>
        <Link
          href="#"
          className="text-base font-normal text-foreground hover:text-primary transition-colors whitespace-nowrap"
          style={{ letterSpacing: '0.01em', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 400 }}
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="text-base font-normal text-foreground hover:text-primary transition-colors whitespace-nowrap"
          style={{ letterSpacing: '0.01em', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 400 }}
        >
          Blog
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Link href="#" className="hidden lg:block">
          <button
            className="text-base font-normal text-foreground bg-background border border-foreground rounded-md px-5 py-2.5 h-auto whitespace-nowrap transition-colors hover:opacity-80"
            style={{ 
              letterSpacing: '0.01em', 
              fontFamily: 'var(--font-sans)',
              borderWidth: '1px',
              fontSize: '16px',
              fontWeight: 400
            }}
          >
            Request a quote
          </button>
        </Link>

        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-t lg:hidden">
          <div className="flex flex-col p-4 space-y-2">
            <Link
              href="#"
              className="px-4 py-2 hover:bg-accent rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              About us
            </Link>
            <Link
              href="#"
              className="px-4 py-2 hover:bg-accent rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#"
              className="px-4 py-2 hover:bg-accent rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Use Cases
            </Link>
            <Link
              href="#"
              className="px-4 py-2 hover:bg-accent rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="px-4 py-2 hover:bg-accent rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="#"
              className="px-4 py-2 hover:bg-accent rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request a quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
