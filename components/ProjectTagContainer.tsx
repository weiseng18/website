import { HStack } from '@chakra-ui/react'
import ProjectTag from './ProjectTag'

const ProjectTagContainer = ({ tags, isOdd }) => {
  return (
    <HStack>
      {tags &&
        tags.length > 0 &&
        tags.map((tag) => <ProjectTag key={tag} tag={tag} isOdd={isOdd} />)}
    </HStack>
  )
}

export default ProjectTagContainer
