import * as React from "react"
import { cn } from "@/lib/utils"

interface RadioGroupContextValue {
  value?: string
  onValueChange?: (value: string) => void
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | undefined>(undefined)

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  onValueChange?: (value: string) => void
  value?: string
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, onValueChange, value, children, ...props }, ref) => {
    // Exclude onValueChange and value from props passed to div to avoid React warning
    const divProps = { ...props }
    delete (divProps as any).onValueChange
    delete (divProps as any).value
    
    return (
      <RadioGroupContext.Provider value={{ value, onValueChange }}>
        <div
          className={cn("grid gap-2", className)}
          {...divProps}
          ref={ref}
          role="radiogroup"
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    )
  }
)
RadioGroup.displayName = "RadioGroup"

const RadioGroupItem = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { value: string }
>(({ className, value: itemValue, ...props }, ref) => {
  const context = React.useContext(RadioGroupContext)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (context?.onValueChange) {
      context.onValueChange(e.target.value)
    }
    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <input
      type="radio"
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      value={itemValue}
      checked={context?.value === itemValue}
      onChange={handleChange}
      {...props}
    />
  )
})
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }

