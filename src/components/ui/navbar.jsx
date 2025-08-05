import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
export function NavBar({
  items,
  className
}) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  const handleNavClick = (item) => {
    setActiveTab(item.name)
    
    // Handle smooth scrolling for anchor links
    if (item.url.startsWith('#')) {
      const element = document.querySelector(item.url)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const handleScroll = () => {
      const sections = items.filter(item => item.url.startsWith('#'))
      const scrollPosition = window.scrollY + 200 // Increased offset for better detection

      let currentSection = sections[0]?.name || 'Home'

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i]
        const element = document.querySelector(section.url)
        
        if (element) {
          const sectionTop = element.offsetTop
          const sectionBottom = sectionTop + element.offsetHeight
          
          // Check if scroll position is within this section
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section.name
            break
          }
          // If we're past all sections, use the last one
          else if (scrollPosition >= sectionTop) {
            currentSection = section.name
          }
        }
      }

      setActiveTab(currentSection)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [items])

  return (
    (<div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className
      )}>
      <div
        className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
       {items.map((item) => {
  const Icon = item.icon;
  const isActive = activeTab === item.name;

  const commonClasses = cn(
    "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
    "text-foreground/80 hover:text-primary",
    isActive && "bg-muted text-primary"
  );

  const content = (
    <>
      <span className="hidden md:inline">{item.name}</span>
      <span className="md:hidden">
        <Icon size={18} strokeWidth={2.5} />
      </span>
      {isActive && (
        <motion.div
          layoutId="lamp"
          className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
          initial={false}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
            <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
            <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
            <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
          </div>
        </motion.div>
      )}
    </>
  );

  return item.download ? (
    <a
      key={item.name}
      href={item.url}
      download
      className={commonClasses}
      onClick={() => setActiveTab(item.name)}
    >
      {content}
    </a>
  ) : (
    <a
      key={item.name}
      href={item.url}
      className={commonClasses}
      onClick={(e) => {
        e.preventDefault()
        handleNavClick(item)
      }}
    >
      {content}
    </a>
  );
})}

      </div>
    </div>)
  );
}
