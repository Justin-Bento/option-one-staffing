import Footer from "components/Footer";
import Head from "next/head";
import Image from "next/image"
import Link from "next/link"

import Appbar from "../components/Appbar";
import { features } from "./data";

export default function index() {
  return (
    <>
    <Head>
      <title>Option One Staffing Agency</title>
      <meta name="description" content="Discover top-tier staffing solutions tailored to your needs. Option One Staffing Agency connects exceptional talent with leading companies, empowering individuals to thrive in their careers." />
    </Head>
        <Appbar />
      <main className="space-y-48">
        <Hero />
        <Features />
        <CallToAction_Call />
        <Section04 />
        <Section05 />
        <Section06 />
      </main>
      <Footer />
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
            <Link href="#" className="inline-flex items-center gap-2 btn-secondary">
              Learn more <span aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"><path className=" fill-primary-950/50" d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="flow-root max-w-[1400px] mx-auto mt-16 sm:mt-24">
          <div className="container h-[960px] w-full relative p-4 mx-auto -m-2 lg:p-0 rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl ">
            <Image
            fill
              src="https://images.unsplash.com/photo-1684482570533-b97679dd0705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="App screenshot"
              className="object-cover rounded-md shadow-2xl ring-1 ring-gray-900/10"
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

function CallToAction_Call() {
  return (
      <div className="container py-24 mx-auto">
        <div className="relative px-6 py-24 overflow-hidden text-center bg-primary-300 isolate sm:rounded-3xl sm:px-16">
          <h2 className="max-w-2xl mx-auto text-3xl font-bold tracking-tight capitalize text-primary-950 sm:text-4xl">
          Make us your first Option!
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-primary-700">
          Whether you&#39;re looking for a temporary, permanent or administrative staff, we will help you find the right person to fit your clients needs.  


          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
  )

}

function Section04() {
  return (
    <>
      <section className="container p-4 mx-auto lg:p-0" aria-label="hero">
        <h4 className="">Section 04</h4>
      </section>
      {/* End Section 01: Hero */}
    </>
  )
}

function Section05() {
  return (
    <>
      <section className="container p-4 mx-auto lg:p-0" aria-label="hero">
        <h5 className="">Section 05</h5>
      </section>
      {/* End Section 01: Hero */}
    </>
  )
}

function Section06() {
  return (
    <>
      <section className="container p-4 mx-auto lg:p-0" aria-label="hero">
        <h6 className="">Section 06</h6>
      </section>
      {/* End Section 01: Hero */}
    </>
  )
}
