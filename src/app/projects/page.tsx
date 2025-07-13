'use client'

import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard'

export default function Projects(){
  return(
    <section className="max-w-5xl mx-auto px-4 py-16" id="projects">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  )
}
