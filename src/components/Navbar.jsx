import { Link } from "react-router-dom"
import { SignedIn, SignedOut, SignInButton, UserButton, ClerkLoaded } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import Wrapper from "./Wrapper";

import { useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"


const Navbar = () => {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0 && !scrolled) {
      setScrolled(true)
    } else if(latest === 0) {
      setScrolled(false)
    }
  })

  return (
    <header className={`sticky top-0 border-b border-[#fdf7efb3] z-20 ${scrolled ? 'bg-black text-white' : 'bg-transparent text-black'}`}>
      <Wrapper className="flex items-center justify-between">
        <Link to="/" className="logo">
          Trip
        </Link>

        <div className="flex items-center justify-center gap-5">
          <ClerkLoaded>
            <SignedOut>
              <SignInButton
                mode="modal"
                signUpFallbackRedirectUrl="/create"
                signUpForceRedirectUrl="/create"
              > 
                <Button size="sm" variant="forNavbarLogin" className="text-md font-normal">
                  登入
                </Button>
              </SignInButton>

              <Link to="/create">
                <Button size="forTry" variant="forTryIt" className="text-xl font-light">
                  Try it
                </Button>
              </Link>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </ClerkLoaded>
        </div>
      </Wrapper>
    </header>
  )
}

export default Navbar