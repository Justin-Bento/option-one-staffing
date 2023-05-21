import Image from "next/image"
import Link from "next/link"
import { features } from "./data";

export default function index() {
  return (
    <>
    
      <main className="space-y-48">
        <Hero />
        <Features />
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
          <h1 className="text-3xl font-bold leading-10 tracking-tight text-gray-900 capitalize sm:text-4xl lg:text-5xl lg:leading-[4rem]">Your Path to Professional Success Starts Here, unlock your potential! </h1>
          <p className="mt-4 text-base leading-8 text-gray-600 lg:text-lg">Discover top-tier staffing solutions tailored to your needs. Option One Staffing Agency connects exceptional talent with leading companies, empowering individuals to thrive in their careers. Whether you&#39;re a job seeker or an employer seeking exceptional talent, our personalized approach and industry expertise ensure your success. </p>
          <div className="flex flex-col items-center justify-start gap-4 mt-10 md:flex-row md:justify-center gap-x-4">
            <Link
              href="#"
              className="btn-primary"
            >
              Get started
            </Link>
            <Link href="#" className=" btn-secondary">
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

function Features() {
  return (
    <section aria-label="features" className="container px-12 mx-auto">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All-in-one platform</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>
        <dl className="grid grid-cols-1 mx-auto mt-8 text-base leading-7 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className="font-semibold text-gray-900">{feature.name}</dt>
              <dd className="mt-1 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
    </section>
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
