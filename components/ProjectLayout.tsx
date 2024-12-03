import { VStack, Flex, Text } from '@chakra-ui/react'
import InternalLink from './InternalLink'
import { ProjectData } from '../types'
import ProjectTagContainer from './ProjectTagContainer'

const ProjectLayout = ({
  project,
  isOdd,
}: {
  project: ProjectData
  isOdd: boolean
}) => {
  const bgColor = isOdd ? 'white' : 'gray.100'

  const id = project.id
  const meta = project.meta

  return (
    <VStack
      w="100%"
      alignItems="flex-start"
      key={project.id}
      bg={bgColor}
      p={4}
      spacing={4}
    >
      <Flex w="100%" justifyContent="space-between">
        <InternalLink href={`/projects/${id}`}>
          <Text fontWeight="600">{meta.title}</Text>
        </InternalLink>
        <Text>(Last updated: {meta.lastUpdated})</Text>
      </Flex>
      <Text>{meta.techStack}</Text>
      {meta.tags.length > 0 && (
        <ProjectTagContainer tags={meta.tags} isOdd={isOdd} />
      )}
    </VStack>
  )
}

export default ProjectLayout
