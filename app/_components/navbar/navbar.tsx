import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link href='/'>Projects</Link>
            <Link href='/about'>About</Link>
            <Link href='/resume'>Resume</Link>
            <Link href='/fun'>Fun</Link>
        </nav>
    );
}