import { Text, VStack } from '@chakra-ui/react'
import MainContainer from '@components/MainContainer'
import { getAllProjectMetadataSortedByLastUpdated } from '../../lib/projects'
import ProjectLayout from '@components/ProjectLayout'

export default function Projects({ projectsData }) {
  return (
    <MainContainer page="projects">
      <Text>List of projects and links (sorted descending by start date):</Text>
      <VStack align="start" py={8}>
        {projectsData.map((project) => (
          <ProjectLayout key={project.id} project={project} />
        ))}
      </VStack>
    </MainContainer>
  )
}

export async function getStaticProps() {
  const projectsData = await getAllProjectMetadataSortedByLastUpdated()
  return {
    props: {
      projectsData,
    },
  }
}
