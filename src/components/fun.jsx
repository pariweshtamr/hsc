import { Eyes } from "./eyes"

export const Fun = () => {
  return (
    <div className="w-full h-screen overflow-hidden hidden lg:block -mt-[50vh]">
      <div
        data-scroll
        data-scroll-speed="-.4"
        className="relative w-full h-full bg-cover bg-[url('/fun.jpg')]"
      >
        <Eyes />
      </div>
    </div>
  )
}
