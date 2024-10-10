import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Footer />
    </main>
  )
}