import { Container, Heading, VStack } from '@chakra-ui/react'
import { getAllProjectIds, getProjectData } from '../../lib/projects'
import Link from 'next/link'

export default function Project({ projectData }) {
  return (
    <Container p={8}>
      <VStack spacing={4} align="start">
        <Link href="/projects">← Back to projects</Link>
        <Heading as="h1" size="xl">
          {projectData.title}
        </Heading>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </VStack>
    </Container>
  )
}

// Fallback
export async function getStaticPaths() {
  const paths = await getAllProjectIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id)
  return {
    props: {
      projectData,
    },
  }
}
