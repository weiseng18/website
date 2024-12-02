import type { MDXComponents } from 'mdx/types'
import React from 'react'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const ExternalLink = React.lazy(() => import('@components/ExternalLink'))
  return {
    a: ExternalLink,
    ...components,
  }
}
