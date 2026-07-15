import Hero from '@/components/Hero'
import About from '@/components/About'
// import Contact from '@/components/Contact'
// import Socials from '@/components/Socials'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-12rem] h-[46rem] w-[96rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.24)_0%,rgba(30,41,59,0)_68%)] blur-3xl" />
        <div className="absolute left-[6%] top-[6rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.15)_0%,rgba(30,41,59,0)_72%)] blur-3xl" />
        <div className="absolute right-[4%] top-[8rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,rgba(30,41,59,0)_72%)] blur-3xl" />
        <div className="absolute inset-x-0 top-[34rem] h-[26rem] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08)_0%,rgba(16,24,40,0)_72%)] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-[20rem] bg-[linear-gradient(to_bottom,rgba(16,24,40,0),rgba(16,24,40,0.75))]" />
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        {/* <Contact />
        <Socials /> */}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none relative z-0 h-0 overflow-visible"
      >
        <div className="absolute inset-x-0 -top-40 h-64 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16)_0%,rgba(30,41,59,0)_70%)] blur-3xl" />
        <div className="absolute left-[10%] -top-24 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,rgba(30,41,59,0)_72%)] blur-3xl" />
        <div className="absolute right-[12%] -top-28 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,rgba(30,41,59,0)_72%)] blur-3xl" />
      </div>
      <Footer />
    </div>
  )
}
