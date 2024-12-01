import { Container, Divider, Heading, Text, VStack } from '@chakra-ui/react'
import {
  getAllProjectIds,
  getProjectData,
  getProjectsContent,
} from '../../lib/projects'
import InternalLink from '../../components/InternalLink'
import ProjectTagContainer from '../../components/ProjectTagContainer'

export default function Project({ projectData }) {
  const project = getProjectsContent().find(
    (project) => project.id === projectData.id
  )
  const Content = project.content

  return (
    <Container p={8}>
      <VStack spacing={4} align="start">
        <InternalLink href="/projects">← Back to projects</InternalLink>
        <Heading as="h1" size="xl">
          {projectData.title}
        </Heading>
        <Text>Last updated: {projectData.lastUpdated}</Text>
        <ProjectTagContainer tags={projectData.tags} isOdd={false} />
      </VStack>
      <Divider my={4} />
      <div id="markdown-root">
        <Content />
      </div>
    </Container>
  )
}

// Fallback
export async function getStaticPaths() {
  const projectIds = getAllProjectIds()
  const paths = projectIds.map((id) => ({
    params: { id },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const projectData = getProjectData(params.id)
  return {
    props: {
      projectData,
    },
  }
}
