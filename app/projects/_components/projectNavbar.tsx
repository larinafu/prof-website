import Link from "next/link";

export default function ProjectNavbar() {
    return <nav>
        <span>Projects:</span>
        <Link href='/projects/ailearners'>AI-Learners</Link>
        <Link href="/projects/meta">Meta</Link>
        <Link href="/projects/jnj">Johnson & Johnson</Link>
    </nav>;
}