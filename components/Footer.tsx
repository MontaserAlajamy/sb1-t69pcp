const Footer = () => {
  return (
    <footer className="bg-background/50 backdrop-blur-sm py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Muntasir Elagami. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer