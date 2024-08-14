import { Link } from "react-router-dom"
import { SignedIn, SignedOut, SignInButton, UserButton, ClerkLoaded } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import Wrapper from "./Wrapper";

import { useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import AnimatedBackground from "./AnimatedBg";

const TABS = ['Home', 'Contact'];

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

        <div className="flex items-center justify-center gap-3 md:gap-5">
          <div className='flex flex-row'>
            <AnimatedBackground
              defaultValue={TABS[0]}
              className='rounded-sm border dark:bg-zinc-800'
              transition={{
                type: 'spring',
                bounce: 0.2,
                duration: 0.3,
              }}
              enableHover
            >
              {TABS.map((tab, index) => (
                <button
                  key={index}
                  data-id={tab}
                  type='button'
                  className={`px-2 py-0.5 ${scrolled ? 'text-white' : 'text-zinc-600 hover:text-zinc-900'} transition-colors duration-300 dark:text-zinc-400 dark:hover:text-zinc-50`}
                >
                  {tab}
                </button>
              ))}
            </AnimatedBackground>
          </div>

          <ClerkLoaded>
            <SignedOut>
              <SignInButton
                mode="modal"
                signUpFallbackRedirectUrl="/"
                signUpForceRedirectUrl="/"
                signInForceRedirectUrl="/"
              > 
                <Button size="sm" variant="forNavbarLogin" className="text-md font-normal">
                  登入
                </Button>
              </SignInButton>

              <Link to="/create">
                <Button size="forTry" variant="forTryIt" className="text-xl font-light hidden md:block">
                  Try it
                </Button>
              </Link>
            </SignedOut>

            <SignedIn>
              <Link to="/trip">
                <Button variant="forTryIt" size="sm">已計劃</Button>
              </Link>

              <UserButton />
            </SignedIn>
          </ClerkLoaded>
        </div>
      </Wrapper>
    </header>
  )
}

export default Navbar