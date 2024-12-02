import type { MDXComponents } from 'mdx/types'
import React from 'react'

const Box = React.lazy(() =>
  import('@chakra-ui/react').then((mod) => ({ default: mod.Box }))
)
const ExternalLink = React.lazy(() => import('@components/ExternalLink'))

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ExternalLink,
    p: (props) => <Box mb={4} {...props} />,
    ...components,
  }
}
