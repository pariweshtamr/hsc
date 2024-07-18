import { motion } from "framer-motion"
import { Roboto_Condensed } from "next/font/google"
import { ComputerCanvas } from "./computer-canvas"
import { BiLogoFacebook, BiLogoInstagram, BiPhoneCall } from "react-icons/bi"
import { PiCode } from "react-icons/pi"

const roboto = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const Hero = () => {
  const getTransition = (i) => {
    switch (i) {
      case 0:
        return { delay: 1.6, duration: 0.5 }
      case 1:
        return { delay: 1.1, duration: 0.5 }
      case 2:
        return { delay: 0, duration: 0.5 }
      case 3:
        return { delay: 1.3, duration: 0.5 }
      case 4:
        return { delay: 0.8, duration: 0.5 }
      case 5:
        return { delay: 0.5, duration: 0.5 }
      default:
        return { delay: 1.4, duration: 0.5 }
    }
  }
  return (
    <div
      data-scroll
      data-scroll-speed="-.7"
      data-scroll-ignore-fold
      className="w-full h-screen bg-[#f1f1f1] pt-1 relative"
    >
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5, ease: "easeIn" }}
        className="absolute w-14 h-40 bg-[#ee4747] right-0 top-[15%] -translate-y-1/2 text-customWhite flex flex-col items-center justify-between py-4"
      >
        <h5 className="font-semibold text-2xl">S.</h5>
        <div className="flex flex-col gap-3 text-xl">
          <BiLogoFacebook />
          <BiLogoInstagram />
          <BiPhoneCall />
        </div>
      </motion.div>
      <div className="h-[50vh] md:h-max">
        <div className="px-6 flex flex-col gap-16 mt-32 mb-8 md:mt-0 md:mb-0 md:px-14 2xl:px-32 lg:gap-0 lg:items-center lg:flex-row lg:h-[500px] lg:my-20 2xl:h-[700px]">
          <div className="flex-1 relative lg:h-max w-full">
            <div className="font-bold md:leading-[90px] relative flex flex-col cursor-default">
              <motion.h1
                initial={{ opacity: 0, y: 90 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                data-text="WEB"
                className="relative glitch uppercase text-5xl text-[#212121] tracking-normal font-semibold lg:text-[7vw] lg:leading-[6vw]"
              >
                WEB
              </motion.h1>
              <div className="flex">
                {["P", "R", "O", "D", "U", "C", "T"].map((item, i) => (
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={getTransition(i)}
                    data-text={item}
                    className={`relative lg:ml-3 glitch uppercase text-5xl text-[#212121] tracking-normal font-semibold lg:text-[7vw] lg:leading-[6vw] lg:tracking-[-0.1em]`}
                    key={i}
                  >
                    {item}
                  </motion.h1>
                ))}
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100px" }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="h-[20px] w-[100px] bg-[#212121] absolute right-[170px] top-[48%] -translate-y-1/2 hidden lg:block"
                />
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "50px" }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="h-[10px] bg-[#212121] absolute left-[185px] top-[48%] -translate-y-1/2 md:hidden"
                />
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100px" }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="h-[20px] w-[100px] bg-[#212121] absolute right-[-38px] top-[46%] -translate-y-1/2 hidden md:block lg:hidden"
                />
              </div>

              <div className="flex items-start">
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "6vw", opacity: 1 }}
                  transition={{
                    // ease: [0.76, 0, 0.24, 1],
                    duration: 0.5,
                    delay: 2.5,
                  }}
                  className="w-[6vw] flex items-center justify-center relative h-[5vw] bg-accentBright rounded-lg"
                >
                  <PiCode className="text-5xl text-primaryDark font-bold" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: -90 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  data-text="ION"
                  className="relative lg:ml-3 glitch uppercase text-5xl text-[#212121] tracking-normal font-semibold lg:text-[7vw] lg:leading-[6vw]"
                >
                  ION
                </motion.h1>
              </div>
            </div>

            <div className="absolute right-0 lg:right-[80px] bottom-6 lg:bottom-[16px]">
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="h-[1.5px] w-[80px] lg:w-[100px] bg-black ms-auto mb-2 md:mb-4"
              ></motion.div>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                className={`${roboto.className} font-bold text-[9px] md:text-[12px] text-right absolute right-0 w-[200px] md:static md:w-full`}
              >
                CREATORS OF EXCELLENT WEB APPLICATIONS
              </motion.p>
            </div>
          </div>

          <div className="flex-1 h-full hidden xl:block">
            <ComputerCanvas />
          </div>
        </div>
      </div>

      <div className="border-t-[1px] border-[#B2B2B2] py-4">
        <div className="text-sm lg:text-md xl:text-lg flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between px-6 md:px-14 2xl:px-32">
          <p className="tracking-tight">For start up companies</p>

          <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:items-center">
            <p>From scratch to production</p>
            <div className="flex items-center gap-1 lg:ml-72 group cursor-pointer">
              <button
                type="button"
                className="border border-[#212121] rounded-full py-1 px-3 uppercase text-[14px] font-medium group-hover:bg-[#212121] group-hover:text-[#f1f1f1]"
              >
                <span>START THE PROJECT</span>
              </button>
              <button
                type="button"
                className="rounded-full flex items-center justify-center p-3.5 border border-[#212121] w-5 h-5 group-hover:bg-black group-hover:text-[#f1f1f1]"
              >
                &#8599;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
