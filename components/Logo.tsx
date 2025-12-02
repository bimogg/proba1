"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Logo() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-[150px] h-[50px] bg-transparent" />
  }

  return (
    <div className="flex items-center" style={{ fontFamily: 'var(--font-sans)' }}>
    <Image
      src={theme === "dark" ? "/images/logo-dark.png" : "/images/logo.png"}
      alt="Business Platform Logo"
      width={150}
      height={50}
      priority
      className="object-contain"
      style={{ width: "auto", height: "auto" }}
    />
    </div>
  )
}

