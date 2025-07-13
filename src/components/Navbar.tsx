import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-lg font-bold">Amir.dev</Link>
      <div className="space-x-4">
        <Link href="#about" scroll={true}>About</Link>
        <Link href="#projects" scroll={true}>Projects</Link>
        <Link href="#contact" scroll={true}>Contact</Link>
      </div>
    </nav>
  );
}
