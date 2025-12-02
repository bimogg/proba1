"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/Logo"

const formSchema = z.object({
  email: z.string().email(),
})

export function Footer() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted!", values)
  }

  return (
    <footer className="mx-auto container px-6 md:px-8 pt-5 md:pt-10">
      <div className="bg-secondary rounded-0 lg:rounded-t-3xl px-8 md:px-12 lg:px-16 pt-10 pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 pb-10">
          <div className="flex-shrink-0">
            <Image 
              src="/images/logo-dark.png" 
              alt="Business Platform Logo" 
              width={150} 
              height={50} 
              priority
              className="object-contain brightness-0 invert"
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8" style={{ fontFamily: 'var(--font-sans)' }}>
            <Link href="/about" className="text-white hover:text-primary transition-colors text-base underline" style={{ fontSize: '16px', fontWeight: 400 }}>
              About us
            </Link>
            <Link href="/services" className="text-white hover:text-primary transition-colors text-base underline" style={{ fontSize: '16px', fontWeight: 400 }}>
              Services
            </Link>
            <Link href="/use-cases" className="text-white hover:text-primary transition-colors text-base underline" style={{ fontSize: '16px', fontWeight: 400 }}>
              Use Cases
            </Link>
            <Link href="/pricing" className="text-white hover:text-primary transition-colors text-base underline" style={{ fontSize: '16px', fontWeight: 400 }}>
              Pricing
            </Link>
            <Link href="/blog" className="text-white hover:text-primary transition-colors text-base underline" style={{ fontSize: '16px', fontWeight: 400 }}>
              Blog
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button size="icon" className="cursor-pointer rounded-full bg-white border-0 w-12 h-12 p-0 hover:opacity-80">
              <span className="text-secondary font-bold" style={{ fontFamily: 'var(--font-sans)', color: '#191A23', fontSize: '16px' }}>in</span>
            </Button>
            <Button size="icon" className="cursor-pointer rounded-full bg-white border-0 w-12 h-12 p-0 hover:opacity-80">
              <span className="text-secondary font-bold" style={{ fontFamily: 'var(--font-sans)', color: '#191A23', fontSize: '16px' }}>f</span>
            </Button>
            <Button size="icon" className="cursor-pointer rounded-full bg-white border-0 w-12 h-12 p-0 hover:opacity-80">
              <span className="text-secondary font-bold" style={{ fontFamily: 'var(--font-sans)', color: '#191A23', fontSize: '16px' }}>𝕏</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-8 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="flex flex-col gap-4">
              <div className="bg-primary rounded-2xl px-4 py-2 inline-block w-fit">
                <h3 className="text-secondary text-base font-normal" style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 400 }}>
                  Contact us:
                </h3>
              </div>
              <div className="space-y-2 text-white" style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 400 }}>
                <div>Email: contact@businessplatform.com</div>
                <div>Phone: 555-567-8901</div>
                <div>Address: 1234 Main St Moonstone City, Stardust State 12345</div>
              </div>
            </div>
            
            <div className="rounded-2xl p-6 flex flex-col sm:flex-row gap-3 border border-foreground/20 bg-[#2A2A2A]" style={{ backgroundColor: '#2A2A2A', background: '#2A2A2A', backgroundImage: 'none' }}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 flex gap-3 items-center">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input 
                        {...field} 
                        placeholder="Email" 
                        className="bg-white border-foreground/20 text-foreground flex-1"
                        style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', backgroundColor: '#FFFFFF', color: '#191A23' }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="whitespace-nowrap px-6 py-3 rounded-2xl border-0 h-auto"
                style={{ 
                  fontFamily: 'var(--font-sans)', 
                  fontSize: '16px', 
                  fontWeight: 400, 
                  color: '#191A23',
                  backgroundColor: '#B9FF66',
                  minHeight: 'auto'
                }}
              >
                Subscribe to news
              </Button>
            </form>
          </div>
          </div>
          <div className="h-px bg-white w-full"></div>
        </div>

        <Separator className="bg-foreground/20 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white" style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 400 }}>
          <div>
            © 2024 Business Platform. All Rights Reserved.
          </div>
          <Link href="/privacy" className="hover:text-primary transition-colors underline text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

