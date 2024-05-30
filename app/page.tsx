import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "About Me", href: "#about-me" }, // Added About Me section
  { name: "Downloadables", href: "#downloadables" } // Added Downloadables section
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Zidane.
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          I'm a Robotics Student from the Singapore Institute of Technology and this is my ePortfolio. Feel free to explore! 
        </h2>
      </div>
      
      <section id="about-me" className="my-16 text-center animate-fade-in">
        <h2 className="text-2xl text-zinc-500 mb-4">About Me</h2>
        <p className="text-sm text-zinc-500">
          Hello! My name is Zidane, and I am a passionate Robotics Student from the Singapore Institute of Technology. I have a deep interest in automation, control systems, and the integration of hardware and software to create innovative solutions. This ePortfolio showcases some of my projects and achievements. Thank you for visiting!
        </p>
      </section>

      <section id="downloadables" className="my-16 text-center animate-fade-in">
        <h2 className="text-2xl text-zinc-500 mb-4">Downloadables</h2>
        <p className="text-sm text-zinc-500">
          Below are some resources and documents related to my projects and research. Feel free to download and explore them.
        </p>
        <ul className="list-disc list-inside text-zinc-500 mt-4">
          <li><a href="/files/resume.pdf" className="text-zinc-500 hover:text-zinc-300">Resume</a></li>
          <li><a href="/files/project_report.pdf" className="text-zinc-500 hover:text-zinc-300">Project Report</a></li>
          <li><a href="/files/research_paper.pdf" className="text-zinc-500 hover:text-zinc-300">Research Paper</a></li>
        </ul>
      </section>
    </div>
  );
}
