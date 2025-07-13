'use client'

import { section } from "framer-motion/client"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import Link from 'next/link'

export default function Contact(){
  return(
    <section className="max-w-3xl mx-auto px-4 py-16 text-center" id="contact">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="text-gray-600 mb-8">
        Let’s connect! Whether you have an opportunity, a project idea, or just want to say hello —
        feel free to reach out.
      </p>

      <div className="flex justify-center gap-6 mb-6 flex-wrap">
        <Link href="mailto:your.amirbaig070@gmail.com" className="text-gray-700 hover:text-blue-600">
          <Mail size={28} />
        </Link>
        <Link href="https://github.com/amir070baig" target="_blank" className="text-gray-700 hover:text-black">
          <Github size={28} />
        </Link>
        <Link href="www.linkedin.com/in/mohd-amir-baig-394243369" target="_blank" className="text-gray-700 hover:text-blue-600">
          <Linkedin size={28} />
        </Link>
        <Link href="/resume.pdf" target="_blank" className="text-gray-700 hover:text-green-700">
          <FileText size={28} />
        </Link>

        <Link
        href="/resume.pdf"
        download
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Download Resume
      </Link>
      </div>
    </section>
  )
}