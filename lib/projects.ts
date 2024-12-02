// returns an array of file names without the .mdx extension
export function getAllProjectIds() {
  // match ./***.mdx
  const requireMdx = require.context('../projects', true, /\.\/.*.mdx$/)
  return requireMdx
    .keys()
    .map((fileName) => fileName.substr(2).replace(/\.mdx$/, ''))
}

export function getProjectMetadata(id) {
  const { meta } = require('../projects/' + id + '.mdx')
  return {
    id,
    ...meta,
  }
}

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

export function getAllProjectMetadataSortedByLastUpdated() {
  const allProjectMetadata = getAllProjectContent().map((project) => {
    return {
      id: project.id,
      ...project.data,
    }
  })
  return allProjectMetadata.sort((a, b) => {
    const timeA = new Date(a.lastUpdated).getTime()
    const timeB = new Date(b.lastUpdated).getTime()
    return timeB - timeA
  })
}
