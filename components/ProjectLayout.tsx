import { VStack, Flex, Text, Tag, HStack } from '@chakra-ui/react'
import InternalLink from './InternalLink'
import { ProjectData } from '../types'
import ProjectTagContainer from './ProjectTagContainer'
import ProjectDeployment from './ProjectDeployment'

const ProjectLayout = ({ project }: { project: ProjectData }) => {
  const id = project.id
  const meta = project.meta

  return (
    <VStack
      w="100%"
      alignItems="flex-start"
      key={project.id}
      bg="gray.100"
      p={4}
      spacing={4}
    >
      <Flex w="100%" justifyContent="space-between">
        <InternalLink href={`/projects/${id}`}>
          <Text fontWeight="600">{meta.title}</Text>
        </InternalLink>
        <Text>(Last updated: {meta.lastUpdated})</Text>
      </Flex>
      {meta.deployment && <ProjectDeployment deployment={meta.deployment} />}
      <HStack>
        <Tag bg="blue.200">{meta.techStack}</Tag>
        {meta.tags.length > 0 && <ProjectTagContainer tags={meta.tags} />}
      </HStack>
    </VStack>
  )
}

export default ProjectLayout
