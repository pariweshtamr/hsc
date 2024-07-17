import localFont from "next/font/local"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import Providers from "@/components/providers"

const uniSans = localFont({
  src: [
    {
      path: "../../public/font/Uni Sans Thin.otf",
      weight: "200",
    },
    {
      path: "../../public/font/Uni Sans Heavy.otf",
      weight: "700",
    },
    {
      path: "../../public/font/uni-sans-heavy.otf",
      weight: "600",
    },
    {
      path: "../../public/font/uni-sans-light.otf",
      weight: "300",
    },
    {
      path: "../../public/font/uni-sans-regular.otf",
      weight: "400",
    },
  ],
  variable: "--font-uni",
})

export const metadata = {
  title: "THS | The Himalayan Sage",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={uniSans.className}>
        <Providers>
          <Navbar />
          <main className="w-full bg-[#f1f1f1]">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
