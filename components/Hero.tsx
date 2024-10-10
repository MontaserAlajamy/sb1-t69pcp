"use client"

import { useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from 'next/link'

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-futuristic-city-12957-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-center bg-background/30 backdrop-blur-sm p-12 rounded-3xl">
        <motion.h1 
          className="text-7xl font-bold mb-6 text-glow shadow-primary glitch-effect" 
          data-text="Muntasir Elagami"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Muntasir Elagami
        </motion.h1>
        <motion.p 
          className="text-4xl mb-6 text-glow shadow-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Video Editor
        </motion.p>
        <motion.p 
          className="text-2xl mb-10 text-glow shadow-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Crafting cinematic experiences, one frame at a time
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link href="/portfolio">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 neon-border shadow-primary rounded-full px-10 py-6 text-xl">
              View Portfolio
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero