import ProjectCard from "./_components/project-card/project-card"

import { cardInfo } from "./_components/project-card/project-card"

const cardData:cardInfo[] = [
    {
        href: '/projects/ailearners',
        heading: 'AI-Learners',
        subheading: 'stuff'
    },
    {
        href: '/projects/jnj',
        heading: 'Johnson & Johnson',
        subheading: 'stuff'
    },
    {
        href: '/projects/meta',
        heading: 'Meta Business Suite',
        subheading: 'stuff'
    }
]

export default function Home() {
    return (
      <main>
        <h1>This is the home page</h1>
        <section>
        {cardData.map((cardInfo) => {
            return (
                <ProjectCard cardInfo={cardInfo}>
                    <h3>{cardInfo.heading}</h3>
                    {cardInfo.subheading}
                </ProjectCard>
            )
        })}
        </section>
      </main>
    )
  }