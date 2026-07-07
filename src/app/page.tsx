import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
// import { Services } from '@/components/sections/Services' // hidden for now — redundant with Process; slot reserved for a future Products/Portfolio section
import { Process } from '@/components/sections/Process'
// import { Work } from '@/components/sections/Work' // hidden for now
import { Why } from '@/components/sections/Why'
import { Pricing } from '@/components/sections/Pricing'
import { CtaBand } from '@/components/sections/CtaBand'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      {/* <Services /> hidden for now — redundant with Process; slot reserved for a future Products/Portfolio section */}
      <Process />
      {/* <Work /> hidden for now */}
      <Why />
      <Pricing />
      <CtaBand />
      <Contact />
    </>
  )
}
