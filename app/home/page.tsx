import ProjectCard from "./_components/project-card"

export default function Home() {
    return (
      <main>
        <h1>This is the home page</h1>
        <ProjectCard href='/projects/ailearners'>ai-learners</ProjectCard>
        <ProjectCard href='/projects/jnj'>Johnson & Johnson</ProjectCard>
        <ProjectCard href='/projects/meta'>Meta Business Suite</ProjectCard>
      </main>
    )
  }
  