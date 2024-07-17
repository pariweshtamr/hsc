import Image from "next/image"
import { Roboto_Condensed } from "next/font/google"

const roboto = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
})
export const Footer = () => {
  return (
    <footer
      data-sroll-section
      data-scroll
      data-scroll-speed=".1"
      className="z-20 rounded-2xl h-full md:h-screen w-full px-6 md:px-14 2xl:px-32 pb-6 text-[#212121] bg-[#f1f1f1] py-20 flex flex-col justify-between overscroll-none"
    >
      <div className="flex flex-col lg:flex-row">
        <div className={`flex-1 flex flex-col justify-between`}>
          <div>
            <h1 className="text-6xl leading-[54px] lg:text-[9vw] uppercase lg:leading-[6.5vw] font-bold">
              Eye-
            </h1>
            <h1 className="text-6xl leading-[54px] lg:text-[9vw] uppercase lg:leading-[6.5vw] font-bold">
              Opening
            </h1>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-10">
          <h1 className="hidden lg:block text-[8.2vw] uppercase leading-[6.5vw] font-bold">
            Web Applications
          </h1>
          <h1 className="lg:hidden text-6xl leading-[54px] lg:text-[9vw] uppercase lg:leading-[6.5vw] font-bold">
            Web Apps
          </h1>

          <div className="flex items-center justify-between">
            <div className="flex-1 flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <h5>Socials:</h5>
                <ul className="font-light flex flex-col gap-1">
                  <li className="underline underline-offset-4">Instagram</li>
                  <li className="underline underline-offset-4">Facebook</li>
                  <li className="underline underline-offset-4">Linkedin</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h5>Location:</h5>
                <ul className="font-light flex flex-col gap-1">
                  <li className="underline underline-offset-4">
                    123 George St
                  </li>
                  <li className="underline underline-offset-4">
                    Sydney, NSW Australia
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h5>Email:</h5>
                <ul className="font-light flex flex-col gap-1">
                  <li className="underline underline-offset-4">
                    info@email.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 flex items-start h-full lg:items-center justify-center">
              <div className="flex flex-col gap-3">
                <h5 className="">Menu:</h5>
                <ul className="font-light flex flex-col gap-1">
                  <li className="underline underline-offset-4">Home</li>
                  <li className="underline underline-offset-4">Services</li>
                  <li className="underline underline-offset-4">Our work</li>
                  <li className="underline underline-offset-4">About us</li>
                  <li className="underline underline-offset-4">Contact us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-4 flex flex-col gap-20 md:flex-row md:items-center md:justify-between">
        <Image src={"/logo.png"} width={200} height={200} alt="LOGO" />

        <p className="text-gray-400">
          &copy; THS 2024.{" "}
          <span className="underline underline-offset-4">Legal Terms</span>{" "}
        </p>
      </div>
    </footer>
  )
}
