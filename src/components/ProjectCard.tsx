import { ExternalLink, Github } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectCard({ title, description, stack, liveUrl, githubUrl }: Props) {
  return (
    <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {stack.map((tech, i) => (
          <span key={i} className="bg-gray-100 text-sm text-gray-700 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a href={liveUrl} target="_blank" className="text-blue-600 hover:underline flex items-center gap-1">
          <ExternalLink size={16} /> Live
        </a>
        <a href={githubUrl} target="_blank" className="text-gray-700 hover:underline flex items-center gap-1">
          <Github size={16} /> Code
        </a>
      </div>
    </div>
  );
}
