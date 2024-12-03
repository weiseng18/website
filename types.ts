export type ProjectData = {
  id: string
  meta: MDXMetadata
}

export type MDXMetadata = {
  title: string
  lastUpdated: string
  tags: string[]
  techStack: string
  deployment?: DeploymentInfo
}

export type DeploymentInfo = {
  type: string
  url: string
}
