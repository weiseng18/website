import { VStack, Flex, Text, HStack } from '@chakra-ui/react'
import InternalLink from './InternalLink'
import { ProjectData } from '../types'

const ProjectLayout = ({ project }: { project: ProjectData }) => {
  return (
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
  )
}

export default ProjectLayout
