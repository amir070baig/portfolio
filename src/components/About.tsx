'use client'

import { section } from 'framer-motion/client';
import { FileCode, Flame, Globe, Code2, BadgeCheck, Braces, GitBranch } from 'lucide-react';

function Tech({ name, icon: Icon }: { name: string; icon?: React.ElementType }) {
  return (
    <div className="bg-white border rounded-xl py-4 px-2 shadow hover:shadow-md transition flex flex-col items-center gap-2">
      {Icon && <Icon className="text-blue-500" size={24} />}
      <p className="text-sm text-gray-800 font-medium">{name}</p>
    </div>
  );
}

export default function About(){
  return(
    <section className="max-w-4xl mx-auto py-16 px-4" id='about'>
      <h2 className="text-3xl font-bold mb-6 text-center">About me</h2>
      <p className="text-gray-700 text-lg leading-7 mb-6">I'm <strong>Mohd Amir Baig</strong>, a passionate web developer with a focus on fast, and scalable web applications. I specialize in technologies like <strong>React</strong>,
        <strong> Next.js</strong>, <strong>Tailwind CSS</strong>, <strong>TypeScript</strong>, and
        <strong> Firebase</strong>. I've built real-world projects like an eCommerce store and a tour
        booking website, and I’m actively looking for opportunities to contribute to professional teams.</p>

        <p className="text-gray-700 text-lg leading-7 mb-10">
          My goal is to solve real-world problems using web technologies and continuously grow as a full-stack
        developer.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-center">Tech Stack</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
          <Tech name='React' icon={FileCode} />
          <Tech name="Next.js" icon={Globe} />
          <Tech name="TypeScript" icon={Code2} />
          <Tech name="Tailwind CSS" icon={BadgeCheck} />
          <Tech name="Redux Toolkit" icon={Braces} />
          <Tech name="Firebase" icon={Flame} />
          <Tech name="Git & GitHub" icon={GitBranch} />
          <Tech name="Vercel" icon={Globe} />
        </div>
    </section>
  )
}