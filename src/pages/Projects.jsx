import React from 'react'
import { NavBar } from '@/components/ui/navbar'
import { User, Briefcase, FileText, HomeIcon, Paperclip } from 'lucide-react'
import { Projects } from '@/components/Projects'
import { AnimatedText } from '@/components/ui/animated-underline-text-one'

const ProjectsPage = () => {
  const navItems = [
    { name: 'Home', url: '/', icon: HomeIcon },
    { name: 'About', url: '/about', icon: User },
    { name: 'Projects', url: '/projects', icon: Briefcase },
    { name: 'Contact', url: '/contact', icon: FileText },
    { name: 'Resume', url: '/Celest_Jerez_Resume.pdf', icon: Paperclip, download: true },
  ]

  return (
    <div className="">
      {/* -------------------NAVBAR-------------------- */}
      <NavBar items={navItems} />

      {/* -------------------PROJECTS SECTION-------------------- */}
      <section className="py-24">
        <div className="text-center mb-24">
          <AnimatedText
            text="Projects"
            textClassName="text-5xl font-medium"
            underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
            underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
            underlineDuration={1.5}
          />
        </div>
        <Projects />
      </section>
    </div>
  )
}

export default ProjectsPage 