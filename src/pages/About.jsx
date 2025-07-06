import React from 'react'
import { NavBar } from '@/components/ui/navbar'
import { User, Briefcase, FileText, HomeIcon, Paperclip } from 'lucide-react'
import Timeline from '@/components/ui/About-Me'

const About = () => {
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

      {/* -------------------ABOUT SECTION-------------------- */}
      <section className="py-24">
        <div className="text-center mb-24">
          <h1 className="text-5xl font-medium mb-4">About Me</h1>
          <p className="text-lg font-light">Get to know me better</p>
        </div>
        <Timeline />
      </section>
    </div>
  )
}

export default About 