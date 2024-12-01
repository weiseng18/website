import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const InternalLink = ({ href, children }) => {
  return (
    <Link
      as={NextLink}
      href={href}
      color="blue.500"
      _hover={{ cursor: 'pointer', textDecoration: 'underline' }}
    >
      {children}
    </Link>
  )
}

export default InternalLink
