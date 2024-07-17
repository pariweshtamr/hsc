import { Html, useProgress } from "@react-three/drei"

export const CanvasLoader = () => {
  const { progress } = useProgress()
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="text-3xl text-[#212121] font-[800] mt-[40px]">
        {progress.toFixed(0)}%
      </p>
    </Html>
  )
}
