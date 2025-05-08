import { Hero } from '@/components/ui/animated-hero'
import { NavBar } from '@/components/ui/navbar'
import React from 'react'
import {  User, Briefcase, FileText, HomeIcon, Paperclip } from 'lucide-react'
import { Projects } from '@/components/Projects'
import { AnimatedText } from '@/components/ui/animated-underline-text-one'
import { BrandsGrid } from '@/components/ui/brands'
import SkillShowcase from '@/components/ui/Skills'
import ContactMe from '@/components/ui/Contact'
import Timeline from '@/components/ui/About-Me'



const Home = () => {
    const navItems = [
        { name: 'Home', url: '#', icon: HomeIcon },

        { name: 'About', url: '#', icon: User },
        { name: 'Projects', url: '#', icon: Briefcase },
        { name: 'Contact', url: '#', icon: FileText },
        { name: 'Resume', url: '/Celest_Jerez_Resume.pdf', icon: Paperclip, download: true },


      ]


      const AboutMe = [
        {
          quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
          name: "Sarah Chen",
          designation: "Product Manager at TechFlow",
          src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
          name: "Michael Rodriguez",
          designation: "CTO at InnovateSphere",
          src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
          name: "Emily Watson",
          designation: "Operations Director at CloudScale",
          src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ]

    
const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=640&q=75"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Running out of content
        </div>
      ),
    },
  ];


  "use client";


const brands = [
  {
    name: "loops",
    logo: "https://assets.rapidui.dev/brands/loops.svg",
  },
  {
    name: "pwc",
    logo: "https://assets.rapidui.dev/brands/pwc.svg",
  },
  {
    name: "resend",
    logo: "https://assets.rapidui.dev/brands/resend.svg",
  },
  {
    name: "udio",
    logo: "https://assets.rapidui.dev/brands/udio.svg",
  },
  {
    name: "krea",
    logo: "https://assets.rapidui.dev/brands/krea.svg",
  },
  {
    name: "gopuff",
    logo: "https://assets.rapidui.dev/brands/gopuff.svg",
  },
];


return (
    <div className="">
      {/* -------------------THEME TOGGLE (Optional, Insert Here)-------------------- */}
  
      {/* -------------------NAVBAR-------------------- */}
      <NavBar items={navItems} />
  
      {/* -------------------HERO SECTION-------------------- */}
      <section className="py-24">
        <Hero />
      </section>
  
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
  
      {/* -------------------SKILLS SECTION-------------------- */}
      <section className="py-24">
        <SkillShowcase />
      </section>

   

      <section className="py-24">
        <div className="text-center ">
          <AnimatedText
            text="Let's Connect"
            subtext="I would love to hear from you!"
            subtextClassName="text-lg font-light mb-4"
            textClassName="text-5xl font-medium"
            underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
            underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
            underlineDuration={1.5}
          />
        </div>
        <ContactMe/> 
      </section>
  
  
      {/* -------------------TIMELINE / STICKY SCROLL SECTION-------------------- */}
      <section className="py-24">
        <Timeline/>
      </section>

  
      {/* -------------------FOOTER (Optional)-------------------- */}
      {/* Add Footer here if needed */}
    </div>
  )
  
}

export default Home
