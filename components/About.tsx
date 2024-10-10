"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Edit, Film, Tv } from 'lucide-react'
import { motion } from "framer-motion"

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center text-glow shadow-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Card className="bg-card hover:bg-card/90 transition-all duration-300 hover:scale-105 transform">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-glow shadow-secondary">Professional Summary</h3>
                <p className="text-muted-foreground mb-4">
                  A highly skilled and adaptable Video Editor and Producer with a passion for crafting captivating video content across diverse platforms. Possesses a Bachelor's degree in Computer Science and leverages this foundation to master industry-standard editing software.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="neon-border shadow-accent">Adobe Creative Suite</Badge>
                  <Badge variant="secondary" className="neon-border shadow-accent">Final Cut Pro</Badge>
                  <Badge variant="secondary" className="neon-border shadow-accent">DaVinci Resolve</Badge>
                  <Badge variant="secondary" className="neon-border shadow-accent">Color Grading</Badge>
                  <Badge variant="secondary" className="neon-border shadow-accent">Chroma Keying</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="bg-card hover:bg-card/90 transition-all duration-300 hover:scale-105 transform">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-glow shadow-secondary">Skills & Expertise</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Camera className="mr-2 h-5 w-5 text-primary" />
                    <span>Professional-grade video production</span>
                  </li>
                  <li className="flex items-center">
                    <Edit className="mr-2 h-5 w-5 text-primary" />
                    <span>Advanced editing techniques</span>
                  </li>
                  <li className="flex items-center">
                    <Film className="mr-2 h-5 w-5 text-primary" />
                    <span>Social media video formats</span>
                  </li>
                  <li className="flex items-center">
                    <Tv className="mr-2 h-5 w-5 text-primary" />
                    <span>TV production experience</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About