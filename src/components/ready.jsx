import { Roboto_Condensed } from "next/font/google"
import { Eyes } from "./eyes"

const roboto = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const Ready = () => {
  return (
    <section
      data-scroll-section
      data-scroll-speed="-.7"
      data-scroll-offset="100%, -100%"
      className="w-full xl:h-[115vh] bg-[#CDEA67] rounded-t-2xl lg:rounded-none sticky -top-32 flex justify-center items-center py-32 text-[#212121]"
    >
      <div className="flex flex-col items-center h-full relative">
        {["READY", "TO BUILD YOUR", "WEB APP?"].map((word, i) => (
          <h1
            key={i}
            className={`text-[13vw] md:text-[12.5vw] leading-[12vw] md:leading-[10.5vw] font-semibold ${roboto.className}`}
          >
            {word}
          </h1>
        ))}

        <div className="xl:hidden">
          <Eyes className="!relative mt-12 -mb-8" />
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
          <button
            className={`${roboto.className} uppercase rounded-full bg-[#212121] hover:bg-black text-[#f1f1f1] h-14 w-48 px-2 flex justify-center items-center gap-1 group transition-all duration-300 ease-in-out mx-auto mt-12`}
          >
            <span className="flex-[1.5]">START BUILDING</span>
            <div className="flex-[0.5] flex items-center justify-center rounded-full w-10 h-10">
              <div className="w-2.5 h-2.5 text-[#212121] flex items-center justify-center text-[0px] bg-[#f1f1f1] rounded-full group-hover:w-10 group-hover:h-10 group-hover:text-[20px] transition-all duration-300 ease-in-out">
                &#8599;
              </div>
            </div>
          </button>

          <p>OR</p>

          <button
            className={`${roboto.className} uppercase rounded-full bg-transparent border border-[#212121] hover:bg-black text-[#212121] hover:text-[#f1f1f1] h-14 w-48 px-2 flex justify-center items-center gap-1 group transition-all duration-300 ease-in-out mx-auto `}
          >
            <span className="flex-[1.5]">INFO@THS.COM</span>
            <div className="flex-[0.5] flex items-center justify-center rounded-full w-10 h-10">
              <div className="w-2.5 h-2.5 text-[#212121] flex items-center justify-center text-[0px] bg-[#212121] rounded-full group-hover:w-10 group-hover:h-10 group-hover:text-[20px] group-hover:bg-[#f1f1f1] transition-all duration-300 ease-in-out">
                &#8599;
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="hidden xl:block">
        <Eyes />
      </div>
    </section>
  )
}
