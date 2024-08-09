import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ShowVideo = () => {
  const ref = useRef(null)
  const videoRef = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end']
  })

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    const video = videoRef.current;

    gsap.to('#frameVideo', {
      scrollTrigger: {
        trigger: '#frameVideo',
        toggleActions: 'restart none restart restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        video.play();
      }
    })
  }, []);

  const scaleX = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  
  return (
    <section ref={ref} className="bg-black">
      <motion.div className="w-full md:w-[80%] flex justify-center mx-auto py-10 relative"
        style={{
          scaleX: scaleX,
          transformPerspective: "800px",
        }}
      >
        <video 
          id="frameVideo" 
          className="object-cover transition duration-500 md:rounded-2xl" 
          playsInline 
          preload="none"
          muted 
          autoPlay
          ref={videoRef}
        >
          <source src='https://res.cloudinary.com/dsq8f18jf/video/upload/oefa1shczaodq7merknu.mp4?_s=vp-2.0.2' type="video/mp4" />
        </video>
      </motion.div>
    </section>
  )
}

export default ShowVideo