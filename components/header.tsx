"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#ffffff] transition-all duration-300 ease-out ${
        isScrolled
          ? "h-14 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
          : "h-[72px]"
      }`}
    >
      <div className="mx-auto h-full max-w-[1200px] px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          {/* Brand Lockup */}
          <Link
            href="/"
            className="font-[var(--font-fira-sans)] text-[15px] font-semibold tracking-tight text-[#171717]"
            style={{ fontFamily: "var(--font-fira-sans), 'Fira Sans', sans-serif" }}
          >
            Steininger UX
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-[14px] font-medium text-[#525252] transition-colors hover:text-[#171717] focus:outline-none">
                Case Studies
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="#" className="cursor-pointer">Supply Chain Governance</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#" className="cursor-pointer">Pharmacy Workflow</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#" className="cursor-pointer">Broadcast Platform</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="#about"
              className="text-[14px] font-medium text-[#525252] transition-colors hover:text-[#171717]"
            >
              About
            </Link>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="#"
              className="text-[14px] font-medium text-[#525252] transition-colors hover:text-[#171717]"
            >
              Resume
            </Link>
            <Button
              asChild
              className="h-9 rounded-md bg-[#1a7fff] px-4 text-[14px] font-medium text-white hover:bg-[#0062e0]"
            >
              <Link href="#contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5 text-[#525252]" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-[#ffffff] p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex h-14 items-center justify-between border-b border-[#e5e7eb] px-6">
                <span
                  className="text-[15px] font-semibold text-[#171717]"
                  style={{ fontFamily: "var(--font-fira-sans), 'Fira Sans', sans-serif" }}
                >
                  Menu
                </span>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <X className="h-4 w-4 text-[#525252]" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col p-6">
                <Link
                  href="#"
                  className="border-b border-[#e5e7eb] py-3 text-[15px] font-medium text-[#171717]"
                >
                  Case Studies
                </Link>
                <Link
                  href="#about"
                  className="border-b border-[#e5e7eb] py-3 text-[15px] font-medium text-[#171717]"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="border-b border-[#e5e7eb] py-3 text-[15px] font-medium text-[#171717]"
                >
                  Resume
                </Link>
                <Button
                  asChild
                  className="mt-6 h-10 w-full rounded-md bg-[#1a7fff] text-[14px] font-medium text-white hover:bg-[#0062e0]"
                >
                  <Link href="#contact">Contact</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
