import { Globe, LayoutGrid, Triangle } from "lucide-react"

interface ApproachItemProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ApproachItem({ icon, title, description }: ApproachItemProps) {
  return (
    <div className="flex flex-col">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#e8f2ff] text-[#1a7fff]">
        {icon}
      </div>
      <h3 className="mb-2 text-[15px] font-semibold text-[#171717]">{title}</h3>
      <p className="text-[13px] leading-relaxed text-[#525252]">{description}</p>
    </div>
  )
}

const approaches: ApproachItemProps[] = [
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Map Before Build",
    description:
      "I start with system mapping to understand dependencies, constraints, and decision flows before proposing solutions.",
  },
  {
    icon: <LayoutGrid className="h-5 w-5" />,
    title: "Scale Through Structure",
    description:
      "I build design systems and token architectures that reduce variance and accelerate cross-team collaboration.",
  },
  {
    icon: <Triangle className="h-5 w-5" />,
    title: "Augment Human Judgment",
    description:
      "I integrate AI tooling to reduce repetitive decisions while keeping humans accountable for strategic trade-offs.",
  },
]

interface StatItemProps {
  value: string
  label: string
}

function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="text-center md:text-left">
      <p className="text-[28px] font-bold tracking-tight text-[#171717] md:text-[32px]">
        {value}
      </p>
      <p className="text-[13px] leading-snug text-[#64748b]">{label}</p>
    </div>
  )
}

const stats: StatItemProps[] = [
  { value: "20+", label: "Years designing enterprise systems" },
  { value: "Enterprise", label: "Scaled applications across global teams" },
  { value: "Multi-Disciplinary", label: "Cross-functional product leadership" },
  { value: "AI-Augmented", label: "Workflow automation & decision support" },
]

export function Approach() {
  return (
    <section className="border-t border-[#e5e7eb] bg-[#fafbfc] py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Approach Section */}
        <h2 className="mb-12 text-[28px] font-bold tracking-tight text-[#171717] md:text-[32px]">
          How I Approach Complex Systems
        </h2>

        <div className="mb-20 grid gap-10 md:grid-cols-3 lg:gap-16">
          {approaches.map((approach, index) => (
            <ApproachItem key={index} {...approach} />
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-8 border-t border-[#e5e7eb] pt-12 md:grid-cols-4 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
