import Link from "next/link"

export const About = () => {
  return (
    <div
      data-scroll
      data-scroll-speed=".2"
      data-scroll-offset="0, 100%"
      className="w-full pt-16 md:py-32 bg-[#CDEA67] rounded-2xl text-[#212121] font-medium z-20 relative -mt-[15vh]"
    >
      <div className="px-6 md:px-14 2xl:px-32 pb-12">
        <h1 className="text-3xl lg:text-[3.52vw] lg:leading-[3.55vw] md:w-[80%]">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
          great peo­ple.
        </h1>
      </div>

      <div className="border-y-[0.5px] border-[#212121] py-6 pb-24 flex flex-col gap-6 lg:gap-0 lg:flex-row px-6 md:px-14 2xl:px-32 lg:pb-32">
        <div className="flex-1 text-lg lg:text-[15px]">
          <p>What you can expect:</p>
        </div>
        <div className="flex-1 flex flex-col gap-6 lg:flex-row justify-between font-light">
          <div className="flex flex-col flex-1 gap-10 text-lg lg:text-[15px]">
            <p>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="flex-1 flex flex-col lg:items-center justify-end">
            <div className="flex flex-col gap-4  text-lg lg:text-[15px]">
              <h5 className="font-normal">Socials:</h5>
              <ul className="flex flex-col gap-1">
                <li className="">
                  <Link href={"/"} className="underline underline-offset-4">
                    Instagram
                  </Link>
                </li>
                <li className="">
                  <Link href={"/"} className="underline underline-offset-4">
                    Facebook
                  </Link>
                </li>
                <li className="">
                  <Link href={"/"} className="underline underline-offset-4">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 flex flex-col lg:flex-row px-6 md:px-14 2xl:px-32 h-[50vh]">
        <div className="flex-[0.7] md:flex-1">
          <h2 className="text-3xl lg:text-[3.52vw] lg:leading-[3.55vw] mb-6">
            Our approach:
          </h2>
          <button className="uppercase rounded-full bg-[#212121] hover:bg-black text-[#f1f1f1] h-14 w-[186px] px-2 flex justify-center items-center gap-2 group transition-all duration-300 ease-in-out">
            <span className="flex-[1.5]">Read more</span>
            <div className="flex-[0.5] flex items-center justify-center rounded-full w-10 h-10 ">
              <div className="w-2.5 h-2.5 text-[#212121] flex items-center justify-center text-[0px] bg-[#f1f1f1] rounded-full group-hover:w-full group-hover:h-full group-hover:text-[20px] transition-all duration-300 ease-in-out">
                &#8599;
              </div>
            </div>
          </button>
        </div>
        <div className="flex-1 bg-[#9bac5d] rounded-xl lg:h-[480px]"></div>
      </div>
    </div>
  )
}
