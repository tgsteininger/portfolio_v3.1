import Link from "next/link"

interface ProjectCardProps {
  tags: string[]
  title: string
  client: string
  description: string
  metrics: { value: string; label: string; positive?: boolean }[]
}

function ProjectCard({ tags, title, client, description, metrics }: ProjectCardProps) {
  return (
    <article className="group flex flex-col rounded-lg border border-[#e5e7eb] bg-[#ffffff] p-6 transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
      {/* Thumbnail placeholder */}
      <div className="mb-4 aspect-[16/10] w-full rounded-md bg-[#f3f4f6]" />

      {/* Tags */}
      <div className="mb-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#f3f4f6] px-2.5 py-1 text-[11px] font-medium text-[#64748b]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title & Client */}
      <h3 className="mb-1 text-[16px] font-semibold leading-snug text-[#171717]">
        {title}
      </h3>
      <p className="mb-3 text-[13px] font-medium text-[#1a7fff]">{client}</p>

      {/* Description */}
      <p className="mb-4 flex-1 text-[13px] leading-relaxed text-[#525252]">
        {description}
      </p>

      {/* Metrics */}
      <div className="space-y-1.5 border-t border-[#e5e7eb] pt-4">
        {metrics.map((metric, index) => (
          <p key={index} className="text-[12px] leading-snug">
            <span className={`font-semibold ${metric.positive !== false ? "text-[#1a7fff]" : "text-[#525252]"}`}>
              {metric.positive !== false ? "↑ " : "↓ "}
              {metric.value}
            </span>{" "}
            <span className="text-[#64748b]">{metric.label}</span>
          </p>
        ))}
      </div>
    </article>
  )
}

const projects: ProjectCardProps[] = [
  {
    tags: ["Supply Chain Systems", "Enterprise CMS", "AI-Assisted Localization"],
    title: "Global Supply Chain Governance System",
    client: "Coca-Cola",
    description:
      "Enterprise Survey & Benchmarking CMS for global bottling operations. Replaced fragmented Excel and manual publishing workflows with modular content architecture and role-based governance.",
    metrics: [
      { value: "52% reduction in content turnaround time", label: "" },
      { value: "Centralized visibility across global performance metrics", label: "", positive: true },
    ],
  },
  {
    tags: ["Healthcare UX", "Clinical Workflow", "Design System Expansion"],
    title: "Pharmacy Data Review Workflow Redesign",
    client: "Walgreens",
    description:
      "Modernized high-volume prescription verification workflows with keyboard-first navigation, inline exception handling, and contextual data comparison.",
    metrics: [
      { value: "20% faster task completion", label: "" },
      { value: "25% clarification errors", label: "", positive: false },
    ],
  },
  {
    tags: ["Enterprise SaaS", "Real-Time Systems", "Modular UX Architecture"],
    title: "Enterprise Broadcast Collaboration Platform",
    client: "HashiPlatform",
    description:
      "Re-architected a legacy webcasting system into a modular broadcast platform with role-based backstage control, multi-camera support, and real-time engagement tooling.",
    metrics: [
      { value: "27% improvement in live production efficiency", label: "" },
      { value: "Reduced setup friction during global executive broadcasts", label: "", positive: true },
    ],
  },
]

export function SelectedWork() {
  return (
    <section id="work" className="bg-[#ffffff] py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <h2 className="mb-12 text-[28px] font-bold tracking-tight text-[#171717] md:text-[32px]">
          Selected Work
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
