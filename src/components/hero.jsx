import { motion } from "framer-motion"
import { Roboto_Condensed } from "next/font/google"
import { ComputerCanvas } from "./computer-canvas"
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
      className="w-full h-screen bg-[#f1f1f1] pt-1"
    >
      <div className="h-[50vh] md:h-max">
        <div className="px-6 flex flex-col gap-16 mt-32 mb-8 md:mt-0 md:mb-0 md:px-14 2xl:px-32 lg:gap-0 lg:items-center lg:flex-row lg:h-[500px] lg:my-20 2xl:h-[700px]">
          {/* {["We Create", "Eye Opening", "Web Applications"].map((text, i) => (
          <div className="masker" key={text}>
            <div className="w-fit flex items-end overflow-hidden">
              {i === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="mr-[1vw] w-[9vw] relative h-[5.7vw] bg-green-400 rounded-lg"
                ></motion.div>
              )}
              <h1 className="uppercase text-[9vw] text-[#212121] leading-[6.7vw] tracking-tight  font-semibold">
                {text}
              </h1>
            </div>
          </div>
        ))} */}
          <div className="flex-1 relative lg:h-max w-full">
            <div className="font-bold md:leading-[90px] relative flex flex-col cursor-default">
              <motion.h1
                initial={{ opacity: 0, y: 90 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                data-text="WEB"
                className="relative glitch uppercase text-5xl text-[#212121] tracking-wide font-semibold lg:text-[7vw] lg:leading-[6vw]"
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
                    className={`relative lg:ml-3 glitch uppercase text-5xl text-[#212121] tracking-normal font-semibold lg:text-[7vw] lg:leading-[6vw] lg:tracking-tighter`}
                    key={i}
                  >
                    {item}
                  </motion.h1>
                ))}
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "110px" }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="h-[20px] w-[110px] bg-[#212121] absolute right-[130px] top-[48%] -translate-y-1/2 hidden lg:block"
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

              <motion.h1
                initial={{ opacity: 0, y: -90 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                data-text="ION"
                className="relative lg:ml-3 glitch uppercase text-5xl text-[#212121] tracking-tighter font-semibold lg:text-[7vw] lg:leading-[6vw]"
              >
                ION
              </motion.h1>
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
        <div className="text-sm lg:text-md flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between px-6 md:px-14 2xl:px-32">
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
