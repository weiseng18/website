import { MDXMetadata, ProjectData } from 'types'

import path from 'path'
import * as matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

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
 * Returns all project metadata sorted by last updated
 */
export function getAllProjectMetadataSortedByLastUpdated(): ProjectData[] {
  const projectIds = getAllProjectIds()
  const allProjectMetadata: ProjectData[] = projectIds.map((id) => {
    return {
      id,
      meta: getProjectMetadata(id).meta,
    }
  })
  return allProjectMetadata.sort((a, b) => {
    const timeA = new Date(a.meta.lastUpdated).getTime()
    const timeB = new Date(b.meta.lastUpdated).getTime()
    return timeB - timeA
  })
}

/**
 * Returns content for a particular project
 */
export async function getProjectContent(
  id: string
): Promise<MDXRemoteSerializeResult> {
  const filePath = path.join(process.cwd(), 'projects', id + '.mdx')
  const source = matter.read(filePath).content
  const mdxSource = await serialize(source)
  return mdxSource
}

/**
 * Returns metadata for a particular project
 */
export function getProjectMetadata(id: string): ProjectData {
  const filePath = path.join(process.cwd(), 'projects', id + '.mdx')
  const meta = matter.read(filePath).data as MDXMetadata
  return {
    id,
    meta,
  }
}
