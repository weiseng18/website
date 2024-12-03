import { HStack } from '@chakra-ui/react'
import ProjectTag from './ProjectTag'

const ProjectTagContainer = ({ tags }: { tags: string[] }) => {
  return (
    <HStack>
      {tags &&
        tags.length > 0 &&
        tags.map((tag) => <ProjectTag key={tag} tag={tag} />)}
    </HStack>
  )
}

export default ProjectTagContainer
