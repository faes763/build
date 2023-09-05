
import About from "@/components/landing-sections/about"
import Cooperation from "@/components/landing-sections/cooperations"
import Question from "@/components/landing-sections/question"
import Reviews from "@/components/landing-sections/ssr/reviews"
import Start from "@/components/landing-sections/start"
import Statistic from "@/components/landing-sections/statistic"

export default function Home() {
  
  return (
    <div id="about" className="flex flex-col gap-y-10  py-10">
      <About/>
      <Statistic/>
      <Cooperation/>
      <Reviews/>
      <Question/>
      <Start/>
    </div>
  )
}
