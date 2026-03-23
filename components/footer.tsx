import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-[#e5e7eb] bg-[#fafbfc] py-8">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-[13px] text-[#64748b]">
            © 2026 Enterprise UX Systems. All rights reserved.
          </p>

          <nav className="flex items-center gap-6">
            <Link
              href="#work"
              className="text-[13px] font-medium text-[#525252] transition-colors hover:text-[#171717]"
            >
              Case Studies
            </Link>
            <Link
              href="#about"
              className="text-[13px] font-medium text-[#525252] transition-colors hover:text-[#171717]"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-[13px] font-medium text-[#525252] transition-colors hover:text-[#171717]"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
