"use client"
import { About } from "@/components/about"
import { Featured } from "@/components/featured"
import { Footer } from "@/components/footer"
import { Fun } from "@/components/fun"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Ready } from "@/components/ready"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"

const LandingPage = () => {
  const scrollRef = useRef()
  const scrollInstanceRef = useRef(null)
  const [locomotiveScroll, setLocomotiveScroll] = useState(null)
  const { isOpen } = useSelector((state) => state.menu)

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("locomotive-scroll").then((module) => {
        setLocomotiveScroll(() => module.default)
      })
    }
  }, [])

  useEffect(() => {
    if (locomotiveScroll) {
      scrollInstanceRef.current = new locomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      })
      return () => {
        if (scrollInstanceRef.current) scrollInstanceRef.current.destroy()
      }
    }
  }, [locomotiveScroll])

  useEffect(() => {
    if (scrollInstanceRef.current) {
      if (isOpen) {
        document.body.classList.add("no-scroll")
        scrollInstanceRef.current.stop()
      } else {
        document.body.classList.remove("no-scroll")
        scrollInstanceRef.current.start()
      }
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll")
      if (scrollInstanceRef.current) {
        scrollInstanceRef.current.start()
      }
    }
  }, [isOpen])

  return (
    <div ref={scrollRef} data-scroll-container>
      <Hero />
      <Marquee />
      <About />
      <Fun />
      <Featured />
      <Ready />
      <Footer />
    </div>
  )
}
export default LandingPage
