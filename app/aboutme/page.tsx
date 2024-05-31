"use client";
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
            alt="Your Name"
            width={150}
            height={150}
            className="rounded-full mb-4"
          />
          <h1 className="text-4xl font-bold text-white mb-2">Your Name</h1>
          <p className="text-xl text-zinc-400 mb-8">
            Software Developer | Tech Enthusiast | Lifelong Learner
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">About Me</h2>
          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            Hi, I'm Your Name, a passionate software developer with a keen
            interest in web development, AI, and automation. With a background
            in [Your Background], I have honed my skills in various programming
            languages and frameworks. My journey in tech started with [Brief
            Origin Story] and has led me to work on exciting projects such as
            [Project Highlights].
          </p>

          <h2 className="text-3xl font-semibold text-white mb-6">Skills</h2>
          <ul className="text-lg text-zinc-300 leading-relaxed mb-8 list-disc list-inside">
            <li>JavaScript, TypeScript, React, Next.js</li>
            <li>Python, Django, Flask</li>
            <li>Node.js, Express</li>
            <li>HTML, CSS, Tailwind CSS</li>
            <li>Git, GitHub, CI/CD</li>
            <li>SQL, NoSQL Databases</li>
          </ul>

          <h2 className="text-3xl font-semibold text-white mb-6">Interests</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Outside of coding, I enjoy exploring the latest tech trends,
            participating in hackathons, and contributing to open-source
            projects. When I'm not in front of a computer screen, you can find
            me hiking, reading, or experimenting with new recipes in the
            kitchen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
