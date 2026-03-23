import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative bg-[#f3f4f6] pt-[72px]">
      {/* Background geometric decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-right corner decoration */}
        <div className="absolute -right-20 -top-20 h-[400px] w-[400px] opacity-20">
          <svg viewBox="0 0 400 400" fill="none" className="h-full w-full">
            <rect x="100" y="50" width="200" height="150" fill="#1a7fff" opacity="0.3" />
            <rect x="150" y="100" width="150" height="100" fill="#00bcd4" opacity="0.4" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Content */}
          <div className="max-w-xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#64748b]">
              Enterprise Product UX
            </p>
            <h1 className="mb-6 text-[32px] font-bold leading-[1.15] tracking-tight text-[#171717] md:text-[40px] lg:text-[44px]">
              Complex systems don&apos;t fail from lack of features.{" "}
              <span className="block">They fail from lack of structure.</span>
            </h1>
            <p className="mb-8 text-[16px] leading-relaxed text-[#525252]">
              I architect enterprise systems that bring clarity, alignment, and operational
              intelligence to high-stakes workflows.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="h-10 rounded-md bg-[#1a7fff] px-5 text-[14px] font-medium text-white hover:bg-[#0062e0]"
              >
                <Link href="#work">View Case Studies</Link>
              </Button>
              <Link
                href="#about"
                className="text-[14px] font-medium text-[#171717] transition-colors hover:text-[#525252]"
              >
                About
              </Link>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative h-[280px] w-full max-w-[400px] md:h-[320px] lg:h-[360px]">
              {/* Isometric 3D composition */}
              <svg
                viewBox="0 0 400 360"
                fill="none"
                className="h-full w-full"
                aria-hidden="true"
              >
                {/* Back layer - large block */}
                <g transform="translate(120, 40)">
                  <path
                    d="M0 60 L100 0 L200 60 L200 180 L100 240 L0 180 Z"
                    fill="#e5e7eb"
                    stroke="#d1d5db"
                    strokeWidth="1"
                  />
                  <path
                    d="M0 60 L100 120 L100 240 L0 180 Z"
                    fill="#d1d5db"
                  />
                  <path
                    d="M100 120 L200 60 L200 180 L100 240 Z"
                    fill="#f3f4f6"
                  />
                  <path
                    d="M0 60 L100 0 L200 60 L100 120 Z"
                    fill="#fafafa"
                  />
                </g>

                {/* Middle layer - medium block */}
                <g transform="translate(80, 100)">
                  <path
                    d="M0 50 L80 0 L160 50 L160 130 L80 180 L0 130 Z"
                    fill="#cbd5e1"
                    stroke="#94a3b8"
                    strokeWidth="1"
                  />
                  <path
                    d="M0 50 L80 100 L80 180 L0 130 Z"
                    fill="#94a3b8"
                  />
                  <path
                    d="M80 100 L160 50 L160 130 L80 180 Z"
                    fill="#e2e8f0"
                  />
                  <path
                    d="M0 50 L80 0 L160 50 L80 100 Z"
                    fill="#f1f5f9"
                  />
                </g>

                {/* Front layer - small highlighted block */}
                <g transform="translate(160, 160)">
                  <path
                    d="M0 40 L60 0 L120 40 L120 100 L60 140 L0 100 Z"
                    fill="#1a7fff"
                    stroke="#0062e0"
                    strokeWidth="1"
                  />
                  <path
                    d="M0 40 L60 80 L60 140 L0 100 Z"
                    fill="#0062e0"
                  />
                  <path
                    d="M60 80 L120 40 L120 100 L60 140 Z"
                    fill="#3b82f6"
                  />
                  <path
                    d="M0 40 L60 0 L120 40 L60 80 Z"
                    fill="#60a5fa"
                  />
                </g>

                {/* Connector lines */}
                <line x1="200" y1="140" x2="220" y2="200" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                <line x1="160" y1="180" x2="160" y2="160" stroke="#1a7fff" strokeWidth="1" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
