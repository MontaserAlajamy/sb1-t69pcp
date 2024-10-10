"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

const projects = [
  { id: 1, title: "دعاية برنامج قبس من تراث", category: "Video", videoUrl: "https://player.vimeo.com/video/524883203", thumbnailUrl: "https://i.vimeocdn.com/video/1087008878-4955d1f7341ef0f5f9a26d0f3d0f4a55a7b0cf9a1c1f2c90a7b5b4c2b6f6b6f6_640" },
  { id: 2, title: "برومو مسلسل دموع الرجال", category: "Video", videoUrl: "https://player.vimeo.com/video/524881026", thumbnailUrl: "https://i.vimeocdn.com/video/1087005796-8af4af1e3e3f0b1d8f9f3d8f3d8f3d8f3d8f3d8f3d8f3d8f3d8f3d8f3d8f3d8_640" },
  { id: 3, title: "Varkey (The city of soul)", category: "Video", videoUrl: "https://player.vimeo.com/video/528591162", thumbnailUrl: "https://i.vimeocdn.com/video/1092603655-b96b5db6c8c5a1c8b7d2b7d2b7d2b7d2b7d2b7d2b7d2b7d2b7d2b7d2b7d2b7d2_640" },
  { id: 4, title: "Upgrade Event Promo", category: "Video", videoUrl: "https://player.vimeo.com/video/530106103", thumbnailUrl: "https://i.vimeocdn.com/video/1094859893-1f8eb5f5d5f5d5f5d5f5d5f5d5f5d5f5d5f5d5f5d5f5d5f5d5f5d5f5d5f5d5f5_640" },
  { id: 5, title: "قبس من تراث - الحلقة الأولى", category: "Video", videoUrl: "https://player.vimeo.com/video/530242160", thumbnailUrl: "https://i.vimeocdn.com/video/1095057893-2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f_640" },
  { id: 6, title: "قبس من تراث (سهرة فنية لعيد الفطر)", category: "Video", videoUrl: "https://player.vimeo.com/video/530236368", thumbnailUrl: "https://i.vimeocdn.com/video/1095049893-3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f_640" },
  { id: 7, title: "Cyrene Libya", category: "Video", videoUrl: "https://player.vimeo.com/video/530235068", thumbnailUrl: "https://i.vimeocdn.com/video/1095047893-4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f_640" },
  { id: 8, title: "TV Report Example", category: "Video", videoUrl: "https://player.vimeo.com/video/530234471", thumbnailUrl: "https://i.vimeocdn.com/video/1095046893-5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f_640" },
]

const Portfolio = () => {
  const [filter, setFilter] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    setFilteredProjects(
      filter === 'All' ? projects : projects.filter(project => project.category === filter)
    )
  }, [filter])

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
            Portfolio
          </motion.h2>
          <motion.div 
            className="flex justify-center space-x-4 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {['All', 'Video', 'Photography'].map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className="transition-all duration-300 hover:scale-105 rounded-full px-6 py-2 text-lg"
              >
                {category}
              </Button>
            ))}
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Card className="bg-card/80 hover:bg-card/90 transition-all duration-300 card-hover rounded-2xl overflow-hidden backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="aspect-video mb-4 relative overflow-hidden rounded-xl">
                      <Image
                        src={project.thumbnailUrl}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-5">{project.category}</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full neon-border shadow-primary rounded-full text-lg py-6">View Project</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl rounded-2xl overflow-hidden">
                        <div className="aspect-video">
                          <iframe
                            src={project.videoUrl}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Portfolio