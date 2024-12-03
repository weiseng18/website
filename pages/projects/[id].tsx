import { Container, Divider, Heading, Text, VStack } from '@chakra-ui/react'
import {
  getAllProjectContent,
  getAllProjectIds,
  getProjectMetadata,
} from '../../lib/projects'
import InternalLink from '@components/InternalLink'
import ProjectTagContainer from '@components/ProjectTagContainer'
import { ProjectData } from 'types'

export default function Project({ projectData }: { projectData: ProjectData }) {
  const project = getAllProjectContent().find(
    (project) => project.id === projectData.id
  )

  const meta = project.meta
  const Content = project.content

  return (
    <Container p={8} maxWidth="80ch">
      <VStack spacing={4} align="start">
        <InternalLink href="/projects">← Back to projects</InternalLink>
        <Heading as="h1" size="xl">
          {meta.title}
        </Heading>
        <Text>Last updated: {meta.lastUpdated}</Text>
        <ProjectTagContainer tags={meta.tags} isOdd={false} />
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
  const projectData = getProjectMetadata(params.id)
  return {
    props: {
      projectData,
    },
  }
}
