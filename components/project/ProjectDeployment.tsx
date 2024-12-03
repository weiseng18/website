import { HStack, Text } from '@chakra-ui/react'
import ExternalLink from '../ExternalLink'

const ProjectDeployment = ({ deployment }) => {
  return (
    <HStack spacing={1}>
      <Text>Deployment @</Text>
      <ExternalLink href={deployment.url}>{deployment.type}</ExternalLink>
    </HStack>
  )
}

export default ProjectDeployment
