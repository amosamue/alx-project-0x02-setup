// components/layout/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">My App</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/home">/home</Link>
        <Link href="/about">/about</Link>
      </nav>
    </header>
  );
}
