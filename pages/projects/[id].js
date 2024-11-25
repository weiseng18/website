import { Container, Heading, VStack } from '@chakra-ui/react'
import { getAllProjectIds, getProjectData } from '../../lib/projects'
import InternalLink from '../../components/InternalLink'

export default function Project({ projectData }) {
  return (
    <Container p={8}>
      <VStack spacing={4} align="start">
        <InternalLink href="/projects">← Back to projects</InternalLink>
        <Heading as="h1" size="xl">
          {projectData.title}
        </Heading>
      </VStack>
      <div
        id="markdown-root"
        dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
      />
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
