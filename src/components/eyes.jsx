"use client"

import { useEffect, useState } from "react"

export const Eyes = ({ className }) => {
  const [rotate, setRotate] = useState(0)
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX
      let mouseY = e.clientY

      //   calculate the angle for rotation
      let deltaX = mouseX - window.innerWidth / 2
      let deltaY = mouseY - window.innerHeight / 2

      let angleInRadiance = Math.atan2(deltaY, deltaX)
      let angleInDegrees = angleInRadiance * (180 / Math.PI)
      setRotate(angleInDegrees - 180)

      // Calculate the position for the pupil movement
      const eyeRadius = (12 * window.innerWidth) / 100 / 2 // 12vw converted to px radius
      const maxPupilMovement = eyeRadius - (62 * eyeRadius) / 100 // Remaining space for pupil movement

      const distanceX = deltaX / window.innerWidth
      const distanceY = deltaY / window.innerHeight

      const pupilX = Math.max(
        Math.min(distanceX * maxPupilMovement, maxPupilMovement),
        -maxPupilMovement
      )
      const pupilY = Math.max(
        Math.min(distanceY * maxPupilMovement, maxPupilMovement),
        -maxPupilMovement
      )

      setPupilPosition({ x: pupilX, y: pupilY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])
  return (
    <div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10 ${className} `}
    >
      {[...Array(2)].map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-[#f1f1f1]"
        >
          <div
            className="relative flex items-center justify-center w-[62%] h-[62%] rounded-full bg-[#212121]"
            style={{
              transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
            }}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 line w-full h-10"
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
            >
              <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#f1f1f1]"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
