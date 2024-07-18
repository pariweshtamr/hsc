import { Eyes } from "./eyes"

export const Fun = () => {
  return (
    <div className="w-full h-screen overflow-hidden hidden lg:block -mt-[50vh]">
      <div
        data-scroll
        data-scroll-speed="-.4"
        className="relative w-full h-full bg-cover bg-gray-200"
      >
        <div className="bg-customWhite absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50%] w-[60%] rounded-2xl">
          <Eyes />
        </div>
      </div>
    </div>
  )
}

// bg-[url('/fun.jpg')]
