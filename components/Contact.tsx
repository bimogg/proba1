"use client"

import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { SectionHeader } from "@/components/SectionHeader"

const formSchema = z.object({
  type: z.enum(["message", "quote"]),
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(255),
})

const data = {
  header: "Contact Us",
  subheader: "Get in Touch. We're Ready to Explore How We Can Support Your Strategic Objectives.",
  image: "/images/illustrations/form-image.png"
}

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "message",
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted!", values)
  }

  return (
    <section className="mx-auto container px-4 sm:px-6 md:px-8 py-6 sm:py-10">
      <SectionHeader
        header={data.header}
        subheader={data.subheader}
      />

      <div className="contact-gray-section mt-8 sm:mt-12 rounded-3xl flex flex-col lg:flex-row justify-between items-start lg:items-center p-6 sm:p-8 md:p-10 lg:py-0 lg:pe-0 gap-6 sm:gap-8 lg:gap-12" style={{ backgroundColor: '#F3F3F3', background: '#F3F3F3', backgroundImage: 'none' }}>
        <FormProvider {...form}>
          <Form onSubmit={form.handleSubmit(onSubmit)} className="w-full lg:max-w-xl">
          <div className="space-y-4 sm:space-y-5 md:space-y-6 w-full">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:space-x-1"
                    >
                      <FormItem className="flex items-center space-y-0 gap-x-2 sm:gap-x-3">
                        <FormControl>
                          <RadioGroupItem value="message" className="bg-white w-5 h-5 sm:w-4 sm:h-4" />
                        </FormControl>
                        <FormLabel className="font-normal text-base sm:text-lg cursor-pointer" style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 400 }}>Say Hi</FormLabel>
                      </FormItem>

                      <FormItem className="flex items-center space-y-0 gap-x-2 sm:gap-x-3">
                        <FormControl>
                          <RadioGroupItem value="quote" className="bg-white w-5 h-5 sm:w-4 sm:h-4" />
                        </FormControl>
                        <FormLabel className="font-normal text-base sm:text-lg cursor-pointer" style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 400 }}>Get a Quote</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base sm:text-lg" style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 400 }}>Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Name" {...field} className="bg-white text-base sm:text-lg h-12 sm:h-14" style={{ fontFamily: 'var(--font-sans)', fontSize: '16px' }} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base sm:text-lg" style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 400 }}>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} className="bg-white text-base sm:text-lg h-12 sm:h-14" style={{ fontFamily: 'var(--font-sans)', fontSize: '16px' }} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base sm:text-lg" style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 400 }}>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Message"
                      className="bg-white resize-none text-base sm:text-lg"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: '16px' }}
                      rows={6}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="bg-secondary text-secondary-foreground hover:text-primary-foreground mt-6 sm:mt-8 w-full cursor-pointer text-base sm:text-lg h-12 sm:h-14 rounded-md"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 400 }}
          >
            Send Message
          </Button>
        </Form>
        </FormProvider>

        <div className="w-full hidden lg:flex lg:justify-end lg:items-center lg:pr-0">
          <Image
            src={data.image}
            alt="Contact Illustration"
            width={300}
            height={300}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </section>
  )
}
