import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom"
import './rootLayout.css'

import { ClerkProvider } from '@clerk/clerk-react'
import { zhTW } from "@clerk/localizations";


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const RootLayout = () => {
  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY} 
      localization={zhTW}
    >
      <div className="rootLayout">
        <Navbar />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </ClerkProvider>
  )
}

export default RootLayout