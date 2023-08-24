'use client'

import About from "@/components/landing-sections/about"
import Cooperation from "@/components/landing-sections/cooperations"
import Statistic from "@/components/landing-sections/statistic"

export default function Home() {
  
  return (
    <div className="flex flex-col gap-y-10 py-10">
      <About/>
      <Statistic/>
      <Cooperation/>

    </div>
  )
}
