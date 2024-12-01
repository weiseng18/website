import { Tag } from '@chakra-ui/react'

const ProjectTag = ({ tag, isOdd }: { tag: string; isOdd: boolean }) => {
  let tagBgColor, tagTextColor
  if (isOdd) {
    tagBgColor = 'gray.200'
    tagTextColor = 'gray.600'
  } else {
    tagBgColor = 'gray.500'
    tagTextColor = 'white'
  }
  return (
    <Tag key={tag} py="1" px="4" color={tagTextColor} bg={tagBgColor}>
      {tag}
    </Tag>
  )
}

export default ProjectTag
