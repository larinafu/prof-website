import ProjectNavbar from "../_components/project-navbar/project-navbar"

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <ProjectNavbar></ProjectNavbar>
            {children}
        </>
    )
}