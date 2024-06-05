g"use client";
import { Navigation } from "../components/nav";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/profile-pic.jpg" 
            alt="Mohamed Zidane Marican"
            width={150}
            height={150}
            className="rounded-full mb-4"
          />
          <h1 className="text-4xl font-bold text-white mb-2">Mohamed Zidane Marican</h1>
          <p className="text-xl text-zinc-400 mb-8">
            Robotics Student | Future Engineer | Lifelong Learner
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">About Me</h2>
          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            Hi, I'm Zidane, a passionate Robotics Student enrolled in the Singapore Institute of Technology with a keen
            interest in Industrial design, AI and automation. Currently, am in a degree that will allow me to explore and hone
            my skills in fields such as programming and Systems Engineering.
          </p>

          <h2 className="text-3xl font-semibold text-white mb-6">Skills</h2>
          <ul className="text-lg text-zinc-300 leading-relaxed mb-8 list-disc list-inside">
            <li>Solidworks, Autodesk Inventor, AutoCAD, Fusion360</li>
            <li>Python, C, C++, SPIN</li>
            <li>3D-Printing, Workshop Skills</li>
            <li>ROS, ROS2</li>
            <li>Git, GitHub</li>

          </ul>

          <h2 className="text-3xl font-semibold text-white mb-6">Interests</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Outside of studies and projects, I tend to draw,sketch and/or sculpt in both 2D and 3D; and traditional or digital mediums.
            I like to pick up new hobbies which interests me which ranges from physical activities such as fencing to learning new 
            languages and softwares that may benefit me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
