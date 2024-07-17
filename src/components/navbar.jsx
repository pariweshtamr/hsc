"use client"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { BiMenuAltRight } from "react-icons/bi"
import { Roboto_Condensed } from "next/font/google"
import { LuX } from "react-icons/lu"
import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "@/redux/menu-slice"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

const roboto = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
})

const links = [
  {
    path: "/",
    name: "Main page",
    number: "00",
  },
  {
    path: "/about",
    name: "About Us",
    number: "01",
  },
  {
    path: "/work",
    name: "Our Work",
    number: "02",
  },
  {
    path: "/services",
    name: "Services",
    number: "03",
  },
  {
    path: "/contact",
    name: "Contact Us",
    number: "04",
  },
]
export const Navbar = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [scrollYPosition, setScrollYPosition] = useState(0)
  const [showNavbar, setShowNavbar] = useState(true)
  const [top, setTop] = useState(true)
  const { isOpen } = useSelector((state) => state.menu)

  const handleClick = (path) => {
    router.push(path)
    dispatch(toggleMenu())
  }

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY

        if (currentScrollY === 0) {
          setTop(true)
        } else {
          setTop(false)
        }

        if (currentScrollY > scrollYPosition) {
          // scrolling down
          setShowNavbar(false)
        } else {
          // scrolling up
          setShowNavbar(true)
        }
        setScrollYPosition(currentScrollY)
      }
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [scrollYPosition])

  return (
    <header
      className={`navbar fixed z-[800] w-full px-6 md:px-14 2xl:px-32 py-6 flex justify-between ${
        !showNavbar && !top && !isOpen && "-translate-y-full"
      } ${showNavbar && !top && !isOpen && "top-0 backdrop-blur-md"}`}
    >
      <div className="w-full flex justify-between mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center"
        >
          <Image alt="logo" src={"/logo.png"} width={100} height={100} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`${roboto.className} font-bold text-md flex items-center gap-5`}
        >
          <Link href={"/"}>FAQs</Link>
          <button
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => dispatch(toggleMenu())}
          >
            <span>MENU</span>
            <BiMenuAltRight className="w-7 h-7" />
          </button>
        </motion.div>

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              className="fixed left-0 top-0 right-0 bottom-0 bg-[#121212] z-[999] !overflow-y-hidden px- md:px-14 2xl:px-32"
            >
              <div className="w-full flex items-center gap-8 h-screen mx-auto  max-w-screen-2xl">
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute top-8 left-14 cursor-pointer"
                  onClick={() => dispatch(toggleMenu())}
                >
                  <div className="w-24 relative">
                    <Image
                      src={"/logo_light.png"}
                      width={200}
                      height={200}
                      alt="secondary-logo"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute top-8 right-14 cursor-pointer"
                  onClick={() => dispatch(toggleMenu())}
                >
                  <LuX className={"w-7 h-7 !text-white"} />
                </motion.div>
                <motion.h1
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-black text-[300px] font-[700]"
                >
                  MENU
                </motion.h1>
                <div
                  className={`${roboto.className} tracking-wider text-white text-3xl font-bold mb-20`}
                >
                  <div className="flex flex-col gap-5 mx-6">
                    {links.map((link, i) => (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + i * 0.1,
                          ease: "easeInOut",
                        }}
                        onClick={() => handleClick(link.path)}
                        className="flex items-center gap-[100px] hover:pr-5 hover:transition-all transition-all"
                        key={link.number}
                      >
                        <span className="text-xs -rotate-90">
                          {link.number}
                        </span>
                        <span className="hover:cursor-pointer">
                          {link.name}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
