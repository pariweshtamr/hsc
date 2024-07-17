"use client"
import { motion } from "framer-motion"
export const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-speed=".03"
      className="w-full xl:h-[53.5vh] bg-[#004D43] py-10 md:py-[104px] rounded-t-2xl z-[1] relative"
    >
      <div className="border-y-[0.5px]  border-[#59827B] text-[#f1f1f1]">
        <div className="flex uppercase overflow-hidden whitespace-nowrap pt-[5vw] pb-[1vw]">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
            className="text-[24vw] leading-[12vw] font-semibold pr-6"
          >
            We are THS
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
            className="text-[24vw] leading-[12vw] font-semibold"
          >
            We are THS
          </motion.h1>
        </div>
      </div>
    </div>
  )
}
