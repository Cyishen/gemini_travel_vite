import { Button } from "./ui/button"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Link } from "react-router-dom"

import { DotLottiePlayer } from "@dotlottie/react-player";

const HeroVideoHeader = () => {
  const ref = useRef(null)
  const wordRef = useRef(null)
  const lottieRef = useRef(null);

  const handleHover = () => {
    if (lottieRef.current === null) return;

    lottieRef.current.seek(0);
    lottieRef.current.play();
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: wordRef,
    offset: ['center center', 'end center'],
  });

  const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 0.6])
  const opacityWord = useTransform(scrollYProgress2, [0, 1], [1, 0])

  return (
    <section ref={ref} className="h-[100vh] w-full absolute top-0 z-10">
      <motion.div className="h-full w-full"
        style={{
          scale: scaleVideo,
        }}
      >
        <video 
          id="frameVideo" 
          className="object-cover transition duration-500 w-full h-full" 
          playsInline 
          preload="true"
          muted 
          autoPlay
          loop
        >
          <source src='https://res.cloudinary.com/dsq8f18jf/video/upload/tmxvmcgz1edk7frm6euo.mp4?_s=vp-2.0.2' type="video/mp4"/>
        </video>
      </motion.div>

      <div ref={wordRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[40%] flex justify-center">
        <motion.div className="text-center"
          style={{
            opacity: opacityWord,
          }}
        >
          <motion.h1 
            className="text-6xl font-extrabold text-white mb-6 text-balance tracking-tight flex sm:w-[70vw] justify-center"
            initial={{opacity: 0, y: 75}} 
            animate={{opacity: 1, y: 0}}
            transition={{
              type: "tween",
              duration: 2,
            }}
          >
            輕鬆規劃，立即出發
          </motion.h1>
          <motion.p 
            className="text-sm text-white mb-10"
            initial={{opacity: 0, y: 75}} 
            animate={{opacity: 1, y: 0}}
            transition={{
              type: "tween",
              duration: 2,
              delay: 0.1,
            }}
          >
            您的旅程現在開始
          </motion.p>

          <Link to="/create" onMouseEnter={handleHover}>
            <Button size="lg" variant="forVideo" className="gap-5 w-full sm:w-auto">
              立即出發
              <DotLottiePlayer 
                ref={lottieRef} 
                src="/lottie/airplane.lottie"
                className="w-10 h-10 rotate-90" 
                autoplay 
              />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroVideoHeader