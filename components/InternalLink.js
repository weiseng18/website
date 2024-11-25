import { Box } from '@chakra-ui/react'
import Link from 'next/link'

const InternalLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <Box _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
        {children}
      </Box>
    </Link>
  )
}

export default InternalLink
