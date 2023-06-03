import Link from "next/link"

export default function ProjectCard({ href, children }:
    { href: string, children: React.ReactNode }) {
    return (
        <div>
            <h1>This is a project card</h1>
            <Link href={href}>{children}</Link>
        </div>
    )
}