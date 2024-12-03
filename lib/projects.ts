import { ProjectData } from 'types'

/**
 * Returns all project IDs
 */
export function getAllProjectIds(): string[] {
  // match ./***.mdx
  const requireMdx = require.context('../projects', true, /\.\/.*.mdx$/)
  return requireMdx
    .keys()
    .map((fileName) => fileName.substr(2).replace(/\.mdx$/, ''))
}

/**
 * Returns metadata for a particular project
 * @param id project ID
 */
export function getProjectMetadata(id: string): ProjectData {
  const { meta } = require('../projects/' + id + '.mdx')
  return {
    id,
    ...meta,
  }
}

/**
 * Returns all project content
 */
export function getAllProjectContent() {
  const projectIds = getAllProjectIds()
  return projectIds.map((id) => {
    const { meta, default: content } = require('../projects/' + id + '.mdx')
    return {
      id,
      data: meta,
      content,
    }
  })
}

/**
 * Returns all project metadata sorted by last updated
 */
export function getAllProjectMetadataSortedByLastUpdated(): ProjectData[] {
  const allProjectMetadata: ProjectData[] = getAllProjectContent().map(
    (project) => {
      return {
        id: project.id,
        ...project.data,
      }
    }
  )
  return allProjectMetadata.sort((a, b) => {
    const timeA = new Date(a.lastUpdated).getTime()
    const timeB = new Date(b.lastUpdated).getTime()
    return timeB - timeA
  })
}
