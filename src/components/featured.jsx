import { projects } from "@/constants/data"
import { Card } from "./card"

export const Featured = () => {
  return (
    <section
      className="w-full -mt-12 pb-24 lg:py-32"
      data-scroll
      data-scroll-speed="0"
      data-scroll-offset="0%,-100%"
    >
      <div className="w-full">
        <h1 className="text-4xl lg:text-7xl px-6 md:px-14 2xl:px-32 border-b pb-10">
          Featured Projects
        </h1>

        <div className="w-full px-6 md:px-14 2xl:px-32 grid grid-cols-1 md:grid-cols-2 pt-12 pb-16 md:gap-x-6 gap-y-12">
          {projects.map((project, i) => (
            <Card project={project} index={i} key={project.id} />
          ))}
        </div>

        <button className="uppercase rounded-full bg-[#212121] hover:bg-black text-[#f1f1f1] h-14 w-60 px-2 flex justify-center items-center gap-2 group transition-all duration-300 ease-in-out mx-auto">
          <span className="flex-[1.5]">View all projects</span>
          <div className="flex-[0.5] flex items-center justify-center rounded-full w-10 h-10 ">
            <div className="w-2.5 h-2.5 text-[#212121] flex items-center justify-center text-[0px] bg-[#f1f1f1] rounded-full group-hover:w-10 group-hover:h-10 group-hover:text-[20px] transition-all duration-300 ease-in-out">
              &#8599;
            </div>
          </div>
        </button>
      </div>
    </section>
  )
}
