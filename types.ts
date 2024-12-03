export type ProjectData = {
  id: string
  meta: MDXMetadata
}

export type ProjectContent = {
  id: string
  meta: MDXMetadata
  content: () => JSX.Element
}

export type MDXMetadata = {
  title: string
  lastUpdated: string
  tags: string[]
}
