import { Box } from '@chakra-ui/react'
import Link from 'next/link'

const InternalLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <Box
        color="blue.500"
        _hover={{ cursor: 'pointer', textDecoration: 'underline' }}
      >
        {children}
      </Box>
    </Link>
  )
}

export default InternalLink
