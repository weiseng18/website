import type { MDXComponents } from 'mdx/types'
import React from 'react'

// Chakra components
const Box = React.lazy(() =>
  import('@chakra-ui/react').then((mod) => ({ default: mod.Box }))
)

// Custom components
const ExternalLink = React.lazy(() => import('@components/ExternalLink'))
const InternalLink = React.lazy(() => import('@components/InternalLink'))
const CenteredImage = React.lazy(() => import('@components/mdx/CenteredImage'))

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ExternalLink,
    p: (props) => <Box mb={4} {...props} />,
    InternalLink,
    CenteredImage,
    ...components,
  }
}
