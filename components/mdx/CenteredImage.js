import { Flex, Image } from '@chakra-ui/react'

const CenteredImage = ({ src, alt, width }) => (
  <Flex w="100%" justify="center">
    <Image src={src} alt={alt} width={width} />
  </Flex>
)

export default CenteredImage
