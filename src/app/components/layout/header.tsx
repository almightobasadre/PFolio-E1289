import Link from "next/link";
import theme from "../../styles/theme";

export default function Header() {
  return (
    <header
    style={{backgroundColor: theme.colors.primary, color: theme.colors.text,}}
    className="p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          My Portfolio
        </Link>
        <div>
          <Link href="/home" className="mx-2">
            Home
          </Link>
          <Link href="/about" className="mx-2">
            Projects
          </Link>
          <Link href="/about" className="mx-2">
            About
          </Link>
          <Link href="/contact" className="mx-2">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
