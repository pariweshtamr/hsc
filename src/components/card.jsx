import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
export const Card = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`h-[40vh] lg:h-[75vh] flex flex-col gap-3 lg:gap-0 w-full relative ${
        isHovered ? "z-10" : "z-0"
      }`}
    >
      <div className="flex-[0.13]">
        <div className="uppercase flex items-center gap-2">
          <span className="h-2.5 w-2.5 bg-customBlack rounded-full"></span>
          <span>{project?.title}</span>
        </div>
      </div>
      <Link
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href={"/"}
        className={`flex-[2] rounded-lg flex items-center justify-center hover:scale-95 transition-all duration-500 ease-in-out relative group`}
        style={{ background: project.bg }}
      >
        <div className="flex items-center justify-center">
          <Image
            alt="project-img"
            src={project.cover}
            width={400}
            height={400}
            className="rounded-xl group-hover:scale-110 transition-all duration-500 ease-in-out"
          />
        </div>
        <motion.h1
          initial={{ y: "50%", x: "-50%" }}
          animate={
            isHovered
              ? { y: "-50%", x: "-50%", opacity: 1 }
              : { y: "50%", opacity: 0 }
          }
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
          className="absolute left-1/2 text-primaryDark -translate-x-1/2 top-24 text-5xl font-semibold lg:text-7xl"
        >
          {project?.title}
        </motion.h1>
      </Link>
      <div className="flex-[0.2] flex items-center gap-3">
        {project.techs.map((item) => (
          <div
            className="rounded-full border border-customBlack uppercase px-2.5 py-1 text-sm hover:bg-customBlack hover:text-customWhite cursor-pointer transition-all duration-300 ease-in-out"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
