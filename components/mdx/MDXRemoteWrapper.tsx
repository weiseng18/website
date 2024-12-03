import { Box } from '@chakra-ui/react'
import ExternalLink from '@components/ExternalLink'
import InternalLink from '@components/InternalLink'
import CenteredImage from '@components/mdx/CenteredImage'
import { MDXRemote } from 'next-mdx-remote'

const MDXRemoteWrapper = ({ source }) => {
  return (
    <MDXRemote
      {...source}
      components={{
        a: ExternalLink,
        p: (props) => <Box mb={4} {...props} />,
        InternalLink,
        CenteredImage,
      }}
    />
  )
}

export default MDXRemoteWrapper
