import Wrapper from "./Wrapper"
import { Star } from 'lucide-react'
import { Button } from "./ui/button"
import { Link } from "react-router-dom"

import { useRef } from "react"
import { DotLottiePlayer } from "@dotlottie/react-player";
import { airplaneAmi } from "@/lib"

const Hero = () => {
  const ref = useRef(null)

  const handleHover = () => {
    if (ref.current === null) return;

    ref.current.seek(0);
    ref.current.play();
  };

  return (
    <>
      <section className="mt-[100vh]">
        <Wrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:pt-24'>
          {/* LEFT */}
          <div className='col-span-2'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
              <h1 className='text-center text-balance tracking-tight !leading-tight font-bold text-5xl md:text-6xl'>
                輕鬆規劃，
                <span className='px-2 text-blue-400'>
                  立即出發
                </span>
                。
              </h1>

              <p className='mt-8 text-lg text-zinc-500 lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap '>
              Now there’s way to plan your trip, Use AI to create your itinerary.
              </p>
            </div>

            <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
              <div className='flex -space-x-4'>
                <img
                  className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover'
                  src='/users/user-6.jpeg'
                  alt='user image'
                />
                <img
                  className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover'
                  src='/users/user-5.jpeg'
                  alt='user image'
                />
                <img
                  className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover'
                  src='/users/haein.jpeg'
                  alt='user image'
                />
                <img
                  className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover'
                  src='/users/user-2.jpeg'
                  alt='user image'
                />
                <img
                  className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover'
                  src='/users/user-7.jpeg'
                  alt='user image'
                />
              </div>

              <div className='flex flex-col justify-between items-center sm:items-start'>
                <div className='flex gap-0.5'>
                  <Star className='h-4 w-4 text-star-2 fill-star-2' />
                  <Star className='h-4 w-4 text-star-2 fill-star-2' />
                  <Star className='h-4 w-4 text-star-2 fill-star-2' />
                  <Star className='h-4 w-4 text-star-2 fill-star-2' />
                  <Star className='h-4 w-4 text-star-2 fill-star-2' />
                </div>

                <p>
                  <span className='font-semibold'>more than million</span> people use
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <div className="flex w-full sm:w-[50%] mt-20">
              <Link 
                onMouseEnter={handleHover} 
                to="/create" 
                className="flex w-full"
              >
                <Button size="lg" className="gap-5 w-full">
                  立即出發
                  <DotLottiePlayer 
                    ref={ref} 
                    src={airplaneAmi}
                    className="w-10 h-10 rotate-90" 
                    autoplay 
                  />
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-span-1">
            <div className="flex items-center justify-center mt-10 sm:mt-0">
              <img src="/landing.png" alt="" width='200px' />
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  )
}

export default Hero