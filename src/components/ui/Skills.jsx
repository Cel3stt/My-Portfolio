"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { AnimatedText } from "./animated-underline-text-one"

// Placeholder logos for development - replace with actual logos
const logoPlaceholders = {
  Figma: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  React: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "Tailwind": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  CSS: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  HTML: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  JavaScript: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
  Illustrator: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
  Photoshop: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
  GitHub: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  VSCode: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
  Vite: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
  shadcn: "/placeholder.svg?height=80&width=80", // No public logo available
  Bootstrap: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
}

// SkillCard Component
const SkillCard = ({ skill }) => {
  const [showMessage, setShowMessage] = useState(false)

  // Use placeholder logos for development
  const logoSrc = logoPlaceholders[skill.name] || "/placeholder.svg?height=80&width=80"

  return (
    <motion.div
      className="relative"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      onMouseEnter={() => setShowMessage(true)}
      onMouseLeave={() => setShowMessage(false)}
    >
      {/* Speech bubble */}
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 10 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 z-10 bg-white px-4 py-2 rounded-2xl border-none shadow-none "
          >
            <p className="text-sm text-foreground text-center">{skill.message}</p>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 "></div>
          </motion.div>
        )}
     

      <Card className="w-30 h-auto bg-white/90 rounded-2xl flex flex-col items-center shadow-none border-none justify-center p-6 relative overflow-hidden transition-all duration-300  hover:scale-105">
        <div className="flex flex-col items-center gap-4">
          {/* Logo */}
          <div className="relative w-14 h-14 flex items-center justify-center">
            <img
              src={logoSrc || "/placeholder.svg"}
              alt={`${skill.name} logo`}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-base font-medium text-foreground mt-2">{skill.name}</h3>
        </div>

       
      </Card>
    </motion.div>
  )
}

// Main SkillShowcase Component
const SkillShowcase = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 100)
  }, [])

  const skills = [
    {
      id: 1,
      name: "Figma",
      message: "I design with love!",
      offset: 0,
    },
    {
      id: 2,
      name: "React",
      message: "Building UI magic!",
      offset: 0,
    },
    {
      id: 3,
      name: "Tailwind",
      message: "Styling made easy!",
      offset: 0,
    },
    {
      id: 4,
      name: "CSS",
      message: "I make things pretty!",
      offset: 0,
    },
    {
      id: 5,
      name: "HTML",
      message: "Building blocks of web!",
      offset: 0,
    },
    {
      id: 6,
      name: "JavaScript",
      message: "Making websites alive!",
      offset: 0,
    },
    {
      id: 7,
      name: "Illustrator",
      message: "Vector art is fun!",
      offset: 0,
    },
    {
      id: 8,
      name: "Photoshop",
      message: "Photo magic!",
      offset: 0,
    },
    {
      id: 9,
      name: "GitHub",
      message: "Version control!",
      offset: 0,
    },
    {
      id: 10,
      name: "VSCode",
      message: "Coding in style!",
      offset: 0,
    },
    {
      id: 11,
      name: "Vite",
      message: "Super fast builds!",
      offset: 0,
    },
    {
      id: 12,
      name: "shadcn",
      message: "Beautiful components!",
      offset: 0,
    },
    {
      id: 13,
      name: "Bootstrap",
      message: "Responsive design!",
      offset: 0,
    },
  ]

  return (
    <div className="relative min-h-screen ">
      <div
        className={`max-w-6xl mx-auto rounded-lg bg-[#fef8fc] px-4 py-12 transition-all duration-1000 ease-out  `}
      >
        <div className="text-center mb-16">
             <AnimatedText  text="Skills & Tools"
                subtext="My toolbox for creating amazing things"
                subtextClassName="text-lg font-light mb-4"
                textClassName="text-5xl font-medium mb-2"
                underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
                underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
                underlineDuration={1.5} 
                />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{ marginTop: `${skill.offset}px` }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillShowcase
