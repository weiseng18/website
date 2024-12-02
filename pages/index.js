import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import MainContainer from '@components/MainContainer'
import ExternalLink from '@components/ExternalLink'

const SocialLink = ({ href, src, children }) => (
  <HStack spacing={2}>
    <Image src={src} boxSize="20px" />
    <ExternalLink href={href} useExternalIcon={false}>
      {children}
    </ExternalLink>
  </HStack>
)

export default function Index() {
  return (
    <MainContainer page="index">
      <VStack w="100%" justifyContent="center" spacing={8}>
        <Text>Hi there!</Text>
        <SocialLink href="https://github.com/weiseng18" src="github.svg">
          Github
        </SocialLink>
      </VStack>
    </MainContainer>
  )
}
