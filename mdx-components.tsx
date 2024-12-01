import type { MDXComponents } from 'mdx/types'
import ExternalLink from './components/ExternalLink'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}
