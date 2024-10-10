"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Edit, Film, Tv } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
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
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <section className="flex-grow py-24 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-5xl font-bold mb-12 text-center text-glow shadow-primary"
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
              <Card className="bg-card/80 hover:bg-card/90 transition-all duration-300 hover:scale-105 transform rounded-2xl overflow-hidden backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-semibold mb-6 text-glow shadow-secondary">Professional Summary</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    A highly skilled and adaptable Video Editor and Producer with a passion for crafting captivating video content across diverse platforms. Possesses a Bachelor's degree in Computer Science and leverages this foundation to master industry-standard editing software.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="neon-border shadow-accent text-lg py-2 px-4 rounded-full">Adobe Creative Suite</Badge>
                    <Badge variant="secondary" className="neon-border shadow-accent text-lg py-2 px-4 rounded-full">Final Cut Pro</Badge>
                    <Badge variant="secondary" className="neon-border shadow-accent text-lg py-2 px-4 rounded-full">DaVinci Resolve</Badge>
                    <Badge variant="secondary" className="neon-border shadow-accent text-lg py-2 px-4 rounded-full">Color Grading</Badge>
                    <Badge variant="secondary" className="neon-border shadow-accent text-lg py-2 px-4 rounded-full">Chroma Keying</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="bg-card/80 hover:bg-card/90 transition-all duration-300 hover:scale-105 transform rounded-2xl overflow-hidden backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-semibold mb-6 text-glow shadow-secondary">Skills & Expertise</h3>
                  <ul className="space-y-6">
                    <li className="flex items-center text-lg">
                      <Camera className="mr-4 h-8 w-8 text-primary" />
                      <span>Professional-grade video production</span>
                    </li>
                    <li className="flex items-center text-lg">
                      <Edit className="mr-4 h-8 w-8 text-primary" />
                      <span>Advanced editing techniques</span>
                    </li>
                    <li className="flex items-center text-lg">
                      <Film className="mr-4 h-8 w-8 text-primary" />
                      <span>Social media video formats</span>
                    </li>
                    <li className="flex items-center text-lg">
                      <Tv className="mr-4 h-8 w-8 text-primary" />
                      <span>TV production experience</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}