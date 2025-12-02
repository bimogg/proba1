import * as React from "react"
import { Controller, ControllerProps, FieldPath, FieldValues, useFormContext } from "react-hook-form"
import { cn } from "@/lib/utils"

const Form = React.forwardRef<
  HTMLFormElement,
  React.HTMLAttributes<HTMLFormElement>
>(({ className, ...props }, ref) => (
  <form ref={ref} className={cn("", className)} {...props} />
))
Form.displayName = "Form"

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const FormItemContext = React.createContext<{ id: string } | null>(null)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()
  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
))
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  // Filter out render prop if it exists
  const filteredProps = { ...props }
  if ('render' in filteredProps) {
    delete (filteredProps as any).render
  }
  return <div ref={ref} className={cn("", className)} {...filteredProps} />
})
FormControl.displayName = "FormControl"

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  
  if (!fieldContext || !fieldContext.name) {
    return {
      id: "",
      name: "",
      formItemId: "",
      formDescriptionId: "",
      formMessageId: "",
      error: null,
    }
  }

  let formContext
  try {
    formContext = useFormContext()
  } catch {
    return {
      id: itemContext?.id || "",
      name: fieldContext.name,
      formItemId: `${itemContext?.id || ""}-form-item`,
      formDescriptionId: `${itemContext?.id || ""}-form-item-description`,
      formMessageId: `${itemContext?.id || ""}-form-item-message`,
      error: null,
    }
  }

  const formState = formContext?.formState
  
  const fieldState = formContext && formState
    ? formContext.getFieldState(fieldContext.name, formState)
    : { error: null }

  const id = itemContext?.id || ""

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    error: fieldState?.error || null,
  }
}

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & {
    message?: string
  }
>(({ className, message, ...props }, ref) => {
  try {
    const { error, formMessageId } = useFormField()
    const body = error?.message ? String(error.message) : message

    if (!body) {
      return null
    }

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={cn("text-sm font-medium text-destructive", className)}
        {...props}
      >
        {body}
      </p>
    )
  } catch {
    if (!message) return null
    return (
      <p
        ref={ref}
        className={cn("text-sm font-medium text-destructive", className)}
        {...props}
      >
        {message}
      </p>
    )
  }
})
FormMessage.displayName = "FormMessage"

export { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, useFormField }
