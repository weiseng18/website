import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import MainContainer from '../../components/MainContainer'
import { getProjectsDataSortedByStartDate } from '../../lib/projects'
import InternalLink from '../../components/InternalLink'

export default function Projects({ projectsData }) {
  return (
    <MainContainer page="projects">
      <Text>List of projects and links (sorted descending by start date):</Text>
      <VStack align="start" py={2}>
        {projectsData.map((project) => (
          <Box w="100%" pt={4} key={project.id}>
            <HStack spacing={1}>
              <InternalLink href={`/projects/${project.id}`}>
                <Text fontWeight="600">{project.title}</Text>
              </InternalLink>
              <Text>(Last updated: {project.lastUpdated})</Text>
            </HStack>
          </Box>
        ))}
      </VStack>
    </MainContainer>
  )
}

export async function getStaticProps() {
  const projectsData = await getProjectsDataSortedByStartDate()
  return {
    props: {
      projectsData,
    },
  }
}
