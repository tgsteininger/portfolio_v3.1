import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function About() {
  return (
    <section id="about" className="bg-[#ffffff] py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="mb-6 text-[28px] font-bold tracking-tight text-[#171717] md:text-[32px]">
            About
          </h2>

          <div className="space-y-4 text-[15px] leading-relaxed text-[#525252]">
            <p>
              I lead design systems and product architecture for organizations navigating
              multi-platform complexity. My work focuses on operational frameworks that
              integrate AI-assisted workflows, token-driven design infrastructure, and
              cross-functional team alignment.
            </p>
            <p>
              I operate at the intersection of design, engineering, and organizational
              structure.
            </p>
          </div>

          <Link
            href="#"
            className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-[#1a7fff] transition-colors hover:text-[#0062e0]"
          >
            Learn More About My Background
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
