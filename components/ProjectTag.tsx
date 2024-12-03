import { Tag } from '@chakra-ui/react'

const ProjectTag = ({ tag }: { tag: string }) => {
  return (
    <Tag key={tag} py="1" px="4" color="white" bg="gray.500">
      {tag}
    </Tag>
  )
}

export default ProjectTag
