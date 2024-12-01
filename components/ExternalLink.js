import { Flex, Link, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const ExternalLink = ({ href, children, useExternalIcon = true }) => {
  if (useExternalIcon)
    return (
      <Link color="blue.500" href={href} isExternal>
        <Flex alignItems="center">
          <Text fontSize="md" fontWeight="400">
            {children}
          </Text>
          <ExternalLinkIcon mx="4px" />
        </Flex>
      </Link>
    )
  else
    return (
      <Link color="blue.500" href={href} isExternal>
        {children}
      </Link>
    )
}

export default ExternalLink
