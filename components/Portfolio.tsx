"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { motion } from "framer-motion"

const projects = [
  { id: 1, title: "Project 1", category: "Videography", videoUrl: "https://player.vimeo.com/video/76979871" },
  { id: 2, title: "Project 2", category: "Photography", videoUrl: "https://player.vimeo.com/video/76979871" },
  { id: 3, title: "Project 3", category: "Editing", videoUrl: "https://player.vimeo.com/video/76979871" },
  // Add more projects as needed
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
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center text-glow shadow-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.h2>
        <motion.div 
          className="flex justify-center space-x-4 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {['All', 'Videography', 'Photography', 'Editing'].map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className="transition-all duration-300 hover:scale-105"
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
              <Card className="bg-card hover:bg-card/90 transition-colors duration-200 hover:scale-105 transform">
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.category}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full neon-border shadow-primary">View Project</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
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
  )
}

export default Portfolio