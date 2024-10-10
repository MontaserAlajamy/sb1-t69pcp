"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm' : ''}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-bold text-primary glitch-effect" data-text="ME">ME</h1>
        </Link>
        <nav className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/">
            <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-transparent transition-colors duration-300">Home</Button>
          </Link>
          <Link href="/portfolio">
            <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-transparent transition-colors duration-300">Portfolio</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-transparent transition-colors duration-300">About</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-transparent transition-colors duration-300">Contact</Button>
          </Link>
        </nav>
        <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
    </header>
  )
}

export default Header