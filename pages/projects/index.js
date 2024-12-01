import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import MainContainer from '../../components/MainContainer'
import { getProjectsDataSortedByStartDate } from '../../lib/projects'
import InternalLink from '../../components/InternalLink'

export default function Projects({ projectsData }) {
  return (
    <MainContainer page="projects">
      <Text>List of projects and links (sorted descending by start date):</Text>
      <VStack align="start" py={8}>
        {projectsData.map((project) => (
          <VStack w="100%" alignItems="flex-start" key={project.id}>
            <Flex w="100%" justifyContent="space-between">
              <InternalLink href={`/projects/${project.id}`}>
                <Text fontWeight="600">{project.title}</Text>
              </InternalLink>
              <Text>(Last updated: {project.lastUpdated})</Text>
            </Flex>
            <HStack>
              {project.tags.map((tag) => (
                <Text
                  key={tag}
                  borderRadius="25px"
                  py="1"
                  px="4"
                  color="white"
                  bgColor="gray.600"
                >
                  {tag}
                </Text>
              ))}
            </HStack>
          </VStack>
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
