"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AccordionContextValue {
  value: string | null
  onValueChange: (value: string | null) => void
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined)

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    type?: "single"
    collapsible?: boolean
  }
>(({ className, type = "single", collapsible = false, children, ...props }, ref) => {
  const [value, setValue] = React.useState<string | null>(null)

  const onValueChange = React.useCallback((newValue: string | null) => {
    if (type === "single") {
      if (collapsible && value === newValue) {
        setValue(null)
      } else {
        setValue(newValue)
      }
    }
  }, [type, collapsible, value])

  return (
    <AccordionContext.Provider value={{ value, onValueChange }}>
      <div ref={ref} className={cn("", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
})
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value: itemValue, children, ...props }, ref) => {
  const context = React.useContext(AccordionContext)
  if (!context) throw new Error("AccordionItem must be used within Accordion")
  
  const isOpen = context.value === itemValue

  return (
    <div
      ref={ref}
      className={cn("", className)}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    >
      {children}
    </div>
  )
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn("flex w-full items-center justify-between", className)}
      {...props}
    >
      {children}
    </button>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(AccordionContext)
  if (!context) throw new Error("AccordionContent must be used within Accordion")
  
  const isOpen = context.value !== null

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden transition-all",
        isOpen ? "animate-accordion-down" : "animate-accordion-up",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

