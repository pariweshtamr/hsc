"use client"
import store from "@/store"
import { useEffect, useState } from "react"
import { Provider } from "react-redux"

const Providers = ({ children }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [mounted])

  if (!mounted) return null

  return <Provider store={store}>{children}</Provider>
}

export default Providers
