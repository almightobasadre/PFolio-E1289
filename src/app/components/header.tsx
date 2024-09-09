import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold">My Portfolio</a>
        </Link>
        <div>
          <Link href="/home">
            <a className="mx-2">Home</a>
          </Link>
          <Link href="/about">
            <a className="mx-2">Projects</a>
          </Link>
          <Link href="/contact">
            <a className="mx-2">About</a>
          </Link>
          <Link href="/contact">
            <a className="mx-2">Contact</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
