'use client';

import { motion } from 'framer-motion';
import { Github, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-white to-slate-100">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
      >
        Mohd Amir Baig
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl text-gray-600 max-w-xl mb-6"
      >
        I build fast, scalable, and elegant websites using Next.js, React, and modern web technologies.
      </motion.p>

      <div className="flex gap-4">
        <Link href="mailto:your-email@example.com" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Contact Me
        </Link>
        <Link href="/resume.pdf" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300" target="_blank">
          <FileText className="inline-block mr-2" size={18} />
          Resume
        </Link>
        <Link href="https://github.com/amir070baig" target="_blank" className="text-gray-600 hover:text-black">
          <Github size={28} />
        </Link>
      </div>
    </section>
  );
}
