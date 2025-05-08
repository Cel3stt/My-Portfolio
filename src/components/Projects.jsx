// import {
//   CardHoverReveal,
//   CardHoverRevealContent,
//   CardHoverRevealMain,
// } from "./ui/animated-cards";

// import Project1 from '@/assets/images/Project-1.png'
// import Project2 from '@/assets/images/Project-2.png'
// import Project3 from '@/assets/images/Project-3.png'

// export const Projects = () => (
//  <div className="w-full">
//      <div className="flex flex-col justify-center gap-4 space-y-4 py-20 px-4 md:px-8 lg:px-12">

// <div className="flex flex-row items-center mx-auto gap-3">

//     {/* --------------------PROJECT 1 -------------------------*/}
// <div className="">
//       <CardHoverReveal className="h-[400px] w-[500px] rounded-xl">
//         <CardHoverRevealMain>
//           <img
//             width={1077}
//             height={400}
//             alt="product image"
//             src={Project1}
//             className="inline-block size-full max-h-full max-w-full object-cover align-middle"
//           />
//         </CardHoverRevealMain>

//         <CardHoverRevealContent className="space-y-4 rounded-2xl bg-zinc-900/75 text-zinc-50">
//           <div className="space-y-2">
//             <h3 className="text-sm text-opacity-60">Services</h3>
//             <div className="flex flex-wrap gap-2 ">
//               <div className=" rounded-full bg-zinc-800 px-2 py-1">
//                 <p className=" text-xs leading-normal">Branding</p>
//               </div>
//               <div className=" rounded-full bg-zinc-800 px-2 py-1">
//                 <p className=" text-xs leading-normal">UI UX</p>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <h3 className=" text-sm text-opacity-60">Stack</h3>
//             <div className="flex flex-wrap gap-2 ">
//               <div className=" rounded-full bg-[hsl(18,56%,32%)] px-2 py-1">
//                 <p className=" text-xs leading-normal">Figma</p>
//               </div>
//               <div className=" rounded-full bg-[hsl(18,56%,32%)] px-2 py-1">
//                 <p className=" text-xs leading-normal">Webflow</p>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <h3 className=" text-sm text-opacity-60">Profile</h3>
//             {/* tag */}
//             <div className="flex flex-wrap gap-2 ">
//               <p className="text-sm text-card">
//                 Comprehensive platform designed for an agency, Creating
//                 professional and business-oriented brand.
//               </p>
//             </div>
//           </div>
//         </CardHoverRevealContent>
//       </CardHoverReveal>
// </div>

//     {/* --------------------PROJECT 2 -------------------------*/}
//     <div className="">
//       <CardHoverReveal className="h-[400px] w-[500px] rounded-xl">
//         <CardHoverRevealMain>
//           <img
//             width={1077}
//             height={400}
//             alt="product image"
//             src={Project2}
//             className="inline-block size-full max-h-full max-w-full object-cover align-middle"
//           />
//         </CardHoverRevealMain>

//         <CardHoverRevealContent className="space-y-4 rounded-2xl bg-zinc-900/75 text-zinc-50">
//           <div className="space-y-2">
//             <h3 className="text-sm text-opacity-60">Services</h3>
//             <div className="flex flex-wrap gap-2 ">
//               <div className=" rounded-full bg-zinc-800 px-2 py-1">
//                 <p className=" text-xs leading-normal">Branding</p>
//               </div>
//               <div className=" rounded-full bg-zinc-800 px-2 py-1">
//                 <p className=" text-xs leading-normal">UI UX</p>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <h3 className=" text-sm text-opacity-60">Stack</h3>
//             <div className="flex flex-wrap gap-2 ">
//               <div className=" rounded-full bg-[hsl(18,56%,32%)] px-2 py-1">
//                 <p className=" text-xs leading-normal">Figma</p>
//               </div>
//               <div className=" rounded-full bg-[hsl(18,56%,32%)] px-2 py-1">
//                 <p className=" text-xs leading-normal">Webflow</p>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <h3 className=" text-sm text-opacity-60">Profile</h3>
//             {/* tag */}
//             <div className="flex flex-wrap gap-2 ">
//               <p className="text-sm text-card">
//                 Comprehensive platform designed for an agency, Creating
//                 professional and business-oriented brand.
//               </p>
//             </div>
//           </div>
//         </CardHoverRevealContent>
//       </CardHoverReveal>
//     </div>
// </div>

// <div className="flex flex-row items-center mx-auto gap-3">

//     {/* --------------------PROJECT 3 -------------------------*/}
//     <div className="">
//       <CardHoverReveal className="h-[400px] w-[500px] rounded-xl">
//         <CardHoverRevealMain>
//           <img
//             width={1077}
//             height={400}
//             alt="product image"
//             src="https://images.unsplash.com/photo-1636247499734-893da2bcfc1c?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             className="inline-block size-full max-h-full max-w-full object-cover align-middle"
//           />
//         </CardHoverRevealMain>

//         <CardHoverRevealContent className="space-y-4 rounded-2xl bg-zinc-900/75 text-zinc-50">
//           <div className="space-y-2">
//             <h3 className="text-sm text-opacity-60">Services</h3>
//             <div className="flex flex-wrap gap-2 ">
//               <div className=" rounded-full bg-zinc-800 px-2 py-1">
//                 <p className=" text-xs leading-normal">Branding</p>
//               </div>
//               <div className=" rounded-full bg-zinc-800 px-2 py-1">
//                 <p className=" text-xs leading-normal">UI UX</p>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <h3 className=" text-sm text-opacity-60">Stack</h3>
//             <div className="flex flex-wrap gap-2 ">
//               <div className=" rounded-full bg-[hsl(18,56%,32%)] px-2 py-1">
//                 <p className=" text-xs leading-normal">Figma</p>
//               </div>
//               <div className=" rounded-full bg-[hsl(18,56%,32%)] px-2 py-1">
//                 <p className=" text-xs leading-normal">Webflow</p>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <h3 className=" text-sm text-opacity-60">Profile</h3>
//             {/* tag */}
//             <div className="flex flex-wrap gap-2 ">
//               <p className="text-sm text-card">
//                 Comprehensive platform designed for an agency, Creating
//                 professional and business-oriented brand.
//               </p>
//             </div>
//           </div>
//         </CardHoverRevealContent>
//       </CardHoverReveal>
//     </div>

//     <div className="">
//       <CardHoverReveal className="h-[400px] w-[500px] rounded-xl">
//         <CardHoverRevealMain>
//           <img
//             width={1077}
//             height={400}
//             alt="product image"
//             src={Project3}
//             className="inline-block size-full max-h-full max-w-full object-cover align-middle"
//           />
//         </CardHoverRevealMain>

//         <CardHoverRevealContent className="space-y-4 rounded-2xl bg-zinc-900/75 text-zinc-50">
//           <div className="space-y-2">
//             <h3 className="text-sm text-opacity-60">Services</h3>
//             <div className="flex flex-wrap gap-2 ">
//               <div className=" rounded-full bg-zinc-800 px-2 py-1">
//                 <p className=" text-xs leading-normal">Branding</p>
//               </div>
//               <div className=" rounded-full bg-zinc-800 px-2 py-1">
//                 <p className=" text-xs leading-normal">UI UX</p>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <h3 className=" text-sm text-opacity-60">Stack</h3>
//             <div className="flex flex-wrap gap-2 ">
//               <div className=" rounded-full bg-[hsl(18,56%,32%)] px-2 py-1">
//                 <p className=" text-xs leading-normal">Figma</p>
//               </div>
//               <div className=" rounded-full bg-[hsl(18,56%,32%)] px-2 py-1">
//                 <p className=" text-xs leading-normal">Webflow</p>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <h3 className=" text-sm text-opacity-60">Profile</h3>
//             {/* tag */}
//             <div className="flex flex-wrap gap-2 ">
//               <p className="text-sm text-card">
//                 Comprehensive platform designed for an agency, Creating
//                 professional and business-oriented brand.
//               </p>
//             </div>
//           </div>
//         </CardHoverRevealContent>
//       </CardHoverReveal>
//     </div>
// </div>

//   </div>
//  </div>
// );

"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { Badge } from "./ui/badge";

export function Projects() {
  return (
   <div className="w-full">
     <div className="flex flex-row gap-2 items-center justify-center ">

{/* --------------------PROJECT 1 -------------------------*/}
<div>
<PinContainer
  title="Explore project"
  href="https://www.codifylms.me/"
>
  <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[25rem] bg-gradient-to-b from-pink-800/50 to-slate-800/0 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
    {/* Header */}
    <div className="flex items-center space-x-4 text-white">
      <div className="flex justify-between gap-2 items-center">
        <div className="size-3 rounded-full bg-pink-300 animate-pulse" />
        <div className="text-xs ">Full Stack</div>
      </div>

      <div className="flex justify-between gap-2 items-center">
        <div className="size-3 rounded-full bg-pink-300 animate-pulse" />
        <div className="text-xs">My Role: Frontend</div>
      </div>
    </div>

    {/* Content */}
    <div className="flex-1 mt-4 space-y-4">
      <div className="text-2xl font-bold text-slate-100">
        CODIFY
      </div>

      <div className="text-sm font-normal text-slate-100">
      Gamified LMS for coding education with live video, code battles, and a built-in IDE.
      Built as a full-stack platform — I handled the frontend UI and interactions.
      </div>



      {/* Stats Grid */}
      <div className="flex-col flex space-y-2 mt-5">
    

        <div className="space-x-3">
        <Badge variant="outline"className="text-base border-violet-300 border-1 font-normal text-violet-300 ">MongoDB</Badge>
        <Badge variant="outline"className="text-base border-violet-300 border-1 font-normal text-violet-300 ">Express</Badge>
       </div>

       <div className="space-x-3">
       <Badge variant="outline"className="text-base border-rose-200 border-1 font-normal text-rose-200 ">React</Badge>
       <Badge variant="outline"className="text-base border-rose-200 border-1 font-normal text-rose-200 ">Node</Badge>
       </div>

     
        
       
          
      </div>

      {/* Animated Waves */}
      <div className="relative h-20 overflow-hidden">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute w-full h-20"
            style={{
              background: `linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)`,
              animation: `wave ${2 + i * 0.5}s ease-in-out infinite`,
              opacity: 0.3 / i,
              transform: `translateY(${i * 10}px)`,
            }}
          />
        ))}
      </div>

      {/* Footer */}
        <div className="text-pink-400 text-sm font-medium">
          View Project →
        </div>

 
      
    </div>
  </div>
</PinContainer>

<style jsx>{`
  @keyframes wave {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`}</style>
</div>




{/* --------------------PROJECT 2 -------------------------*/}
<div>
<PinContainer
  title="Explore project"
  href="https://titaniumiphone.netlify.app/"
>
  <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[25rem] bg-gradient-to-b from-pink-800/50 to-slate-800/0 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
    {/* Header */}
    <div className="flex items-center space-x-4 text-white">
      <div className="flex justify-between gap-2 items-center">
        <div className="size-3 rounded-full bg-pink-300 animate-pulse" />
        <div className="text-xs ">Frontend</div>
      </div>

   
    </div>

    {/* Content */}
    <div className="flex-1 mt-4 space-y-4">
      <div className="text-2xl font-bold text-slate-100">
       IPhone 15 web clone
      </div>

      <div className="text-sm font-normal text-slate-100">
      A responsive front-end clone of Apple’s iPhone 15 product page with smooth scroll effects and UI transitions.
      </div>



      {/* Stats Grid */}
      <div className="flex-col flex space-y-2 mt-5">
    

        <div className="space-x-3">
        <Badge variant="outline"className="text-base border-violet-300 border-1 font-normal text-violet-300 ">CSS</Badge>
        <Badge variant="outline"className="text-base border-rose-200 border-1 font-normal text-rose-200 ">React</Badge>
       </div>
       

       
     
        
       
          
      </div>

      {/* Animated Waves */}
      <div className="relative h-20 overflow-hidden">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute w-full h-20"
            style={{
              background: `linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)`,
              animation: `wave ${2 + i * 0.5}s ease-in-out infinite`,
              opacity: 0.3 / i,
              transform: `translateY(${i * 10}px)`,
            }}
          />
        ))}
      </div>

      {/* Footer */}
        <div className="text-pink-400 text-sm font-medium">
          View Project →
        </div>

 
      
    </div>
  </div>
</PinContainer>

<style jsx>{`
  @keyframes wave {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`}</style>
</div>



{/* --------------------PROJECT 3 -------------------------*/}
<div>
<PinContainer
  title="Explore project"
  href="https://socmedwebsite.netlify.app/"
>
  <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[25rem] bg-gradient-to-b from-pink-800/50 to-slate-800/0 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
    {/* Header */}
    <div className="flex items-center space-x-4 text-white">
      <div className="flex justify-between gap-2 items-center">
        <div className="size-3 rounded-full bg-pink-300 animate-pulse" />
        <div className="text-xs ">Frontend</div>
      </div>

  
    </div>

    {/* Content */}
    <div className="flex-1 mt-4 space-y-4">
      <div className="text-2xl font-bold text-slate-100">
      MomoTalk
      </div>

      <div className="text-sm font-normal text-slate-100">
      Responsive Static Social Media Website With Theme Customization Using HTML CSS & JavaScript. 
      </div>



      {/* Stats Grid */}
      <div className="flex-col flex space-y-2 mt-5">
    

    
       <div className="space-x-3">
       <Badge variant="outline"className="text-base border-rose-200 border-1 font-normal text-rose-200 ">HTML</Badge>
       <Badge variant="outline"className="text-base border-rose-200 border-1 font-normal text-rose-200 ">CSS</Badge>
       <Badge variant="outline"className="text-base border-rose-200 border-1 font-normal text-rose-200 ">Javascript</Badge>
       </div>

     
        
       
          
      </div>

      {/* Animated Waves */}
      <div className="relative h-20 overflow-hidden">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute w-full h-20"
            style={{
              background: `linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)`,
              animation: `wave ${2 + i * 0.5}s ease-in-out infinite`,
              opacity: 0.3 / i,
              transform: `translateY(${i * 10}px)`,
            }}
          />
        ))}
      </div>

      {/* Footer */}
        <div className="text-pink-400 text-sm font-medium">
          View Project →
        </div>

 
      
    </div>
  </div>
</PinContainer>

<style jsx>{`
  @keyframes wave {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`}</style>
</div>
</div>
   </div>
  );
}
