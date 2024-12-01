// returns an array of file names without the .mdx extension
export function getAllProjectIds() {
  const requireMdx = require.context('../projects', true, /\.*$/)
  return requireMdx
    .keys()
    .map((fileName) => fileName.substr(2).replace(/\.mdx$/, ''))
}

export function getProjectData(id) {
  const { meta } = require('../projects/' + id + '.mdx')
  return {
    id,
    ...meta,
  }
}

export function getProjectsContent() {
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
