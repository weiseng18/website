import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const projectsDirectory = path.join(process.cwd(), 'projects')

export async function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export async function getProjectsDataSortedByStartDate() {
  const fileNames = fs.readdirSync(projectsDirectory)
  const data = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const content = matter(fileContents)

    // Only extract metadata
    return {
      id,
      ...content.data,
    }
  })

  // Sort projects by dateStart
  return data.sort((a, b) => {
    if (a.dateStart < b.dateStart) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getProjectData(id) {
  const fullPath = path.join(projectsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const content = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(content.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...content.data,
  }
}
