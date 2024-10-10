"use client"

import { useState } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'admin@elagami.tech'
        }),
      })

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      })
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
            Get in Touch
          </motion.h2>
          <motion.form 
            onSubmit={handleSubmit} 
            className="max-w-lg mx-auto space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-card/50 border-primary/50 focus:border-primary transition-colors duration-300 rounded-full text-lg py-6 px-6"
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-card/50 border-primary/50 focus:border-primary transition-colors duration-300 rounded-full text-lg py-6 px-6"
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-card/50 border-primary/50 focus:border-primary transition-colors duration-300 rounded-3xl text-lg py-4 px-6 min-h-[200px]"
            />
            <Button 
              type="submit" 
              className="w-full neon-border shadow-primary hover:bg-primary/90 transition-all duration-300 rounded-full text-lg py-6"
            >
              Send Message
            </Button>
          </motion.form>
        </div>
      </section>
      <Footer />
    </main>
  )
}