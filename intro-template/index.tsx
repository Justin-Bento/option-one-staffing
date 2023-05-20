import Image from "next/image"
import Link from "next/link"

export default function index() {
  return (
    <>
      <main className="space-y-16">
        <Hero />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
      </main>
    </>
  )
}

function Hero() {
  return (
    <>
      <section className="text-left md:text-center" aria-label="hero">
        <div className="w-full p-4 lg:p-0 lg:w-[90ch] leading-[1.2] mx-auto">
          <h1 className="text-4xl font-bold tracking-wide text-gray-900 capitalize lg:leading-[1.4] lg:text-5xl">Your Path to Professional Success Starts Here, unlock your potential! </h1>
          <p className="mt-4 text-base leading-8 text-gray-600 lg:text-lg">Discover top-tier staffing solutions tailored to your needs. Option One Staffing Agency connects exceptional talent with leading companies, empowering individuals to thrive in their careers. Whether you&#39;re a job seeker or an employer seeking exceptional talent, our personalized approach and industry expertise ensure your success. </p>
          <div className="flex flex-col items-center justify-start gap-4 mt-10 md:flex-row md:justify-center gap-x-4">
            <Link
              href="#"
              className="rounded-md bg-blue-600  tracking-wider px-3.5 py-2.5 w-full md:w-auto text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get started
            </Link>
            <Link href="#" className="w-full md:w-auto px-3.5 py-2.5 text-sm font-semibold leading-6 text-gray-900 transition-all rounded bg-gray-50 hover:bg-gray-100">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="flow-root max-w-[1400px] mx-auto mt-16 sm:mt-24">
              <div className="p-2 -m-2 rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="https://images.unsplash.com/photo-1684482570533-b97679dd0705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>

   
             </section>
      {/* End Section 01: Hero */}
    </>
  )
}

function Section02() {
  return (
    <>
      <section className="" aria-label="hero">
        <h1 className="">Section 02</h1>
      </section>
      {/* End Section 01: Hero */}
    </>
  )
}

function Section03() {
  return (
    <>
      <section className="" aria-label="hero">
        <h1 className="">Section 03</h1>
      </section>
      {/* End Section 01: Hero */}
    </>
  )
}

function Section04() {
  return (
    <>
      <section className="" aria-label="hero">
        <h1 className="">Section 04</h1>
      </section>
      {/* End Section 01: Hero */}
    </>
  )
}

function Section05() {
  return (
    <>
      <section className="" aria-label="hero">
        <h1 className="">Section 05</h1>
      </section>
      {/* End Section 01: Hero */}
    </>
  )
}

function Section06() {
  return (
    <>
      <section className="" aria-label="hero">
        <h1 className="">Section 06</h1>
      </section>
      {/* End Section 01: Hero */}
    </>
  )
}
