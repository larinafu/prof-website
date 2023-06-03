import ProjectNavbar from "./_components/projectNavbar"

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