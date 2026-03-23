import { Header } from "@/components/header"
import { Hero } from "@/components/sections/hero"
import { SelectedWork } from "@/components/sections/selected-work"
import { Approach } from "@/components/sections/approach"
import { About } from "@/components/sections/about"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SelectedWork />
        <Approach />
        <About />
      </main>
      <Footer />
    </div>
  )
}
