import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  header: string
  subheader?: string
  className?: string
}

export function SectionHeader({ header, subheader, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 lg:gap-6 text-center lg:text-left", className)}>
      <h1 className="text-secondary bg-primary px-3 py-1.5 text-2xl lg:text-3xl font-medium rounded-md whitespace-nowrap flex-shrink-0">{header}</h1>
      {subheader && (
        <p className="text-lg lg:text-xl text-foreground leading-relaxed max-w-2xl pt-1.5 text-center lg:text-left">
          {subheader}
        </p>
      )}
    </div>
  )
}

