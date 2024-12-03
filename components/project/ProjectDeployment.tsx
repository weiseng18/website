import { HStack, Text } from '@chakra-ui/react'
import ExternalLink from '../ExternalLink'
import { DeploymentInfo } from 'types'

const ProjectDeployment = ({ deployment }: { deployment: DeploymentInfo }) => {
  return (
    <HStack spacing={1}>
      <Text>Deployment @</Text>
      <ExternalLink href={deployment.url}>{deployment.type}</ExternalLink>
    </HStack>
  )
}

export default ProjectDeployment
