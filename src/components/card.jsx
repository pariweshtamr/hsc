import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
export const Card = ({ card, index }) => {
  const positionClass =
    index % 2 === 0
      ? "xl:left-full left-1/2"
      : "xl:right-1/2 xl:-translate-x-1/2"
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`h-[40vh] lg:h-[75vh] flex flex-col gap-3 lg:gap-0 w-full relative ${
        isHovered ? "z-10" : "z-0"
      }`}
    >
      <div className="flex-[0.13]">
        <div className="uppercase flex items-center gap-2">
          <span className="h-2.5 w-2.5 bg-[#212121] rounded-full"></span>
          <span>NAN2024</span>
        </div>
      </div>
      <button className="flex-[2] bg-gray-200 rounded-lg hover:scale-95 transition-all duration-500 ease-in-out relative">
        <div></div>
        <Link href={"/"} className={`flex justify-center items-center`}>
          <motion.h1
            initial={{ y: "50%", x: "-50%" }}
            animate={
              isHovered
                ? index % 2 === 0
                  ? { y: "-50%", x: "-50%", opacity: 1 }
                  : { y: "-50%", x: "-50%", opacity: 1 }
                : { y: "50%", opacity: 0 }
            }
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
            className={`absolute top-1/2 -translate-y-1/2 ${positionClass} text-[#CDEA67] font-['Test_Founders_Grotesk_X-Condensed'] text-5xl font-medium lg:text-9xl`}
          >
            NAN2024
          </motion.h1>
        </Link>
      </button>
      <div className="flex-[0.2] flex items-center gap-3">
        <div className="rounded-full border border-[#212121] uppercase px-2.5 py-1 text-sm">
          Next
        </div>
        <div className="rounded-full border border-[#212121] uppercase px-2.5 py-1 text-sm">
          Next
        </div>
        <div className="rounded-full border border-[#212121] uppercase px-2.5 py-1 text-sm">
          Next
        </div>
      </div>
    </div>
  )
}
