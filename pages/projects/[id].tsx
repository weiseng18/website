import { Container, Divider, Heading, Text, VStack } from '@chakra-ui/react'
import {
  getAllProjectIds,
  getProjectContent,
  getProjectMetadata,
} from '../../lib/projects'
import InternalLink from '@components/InternalLink'
import ProjectTagContainer from '@components/project/ProjectTagContainer'
import ProjectDeployment from '@components/project/ProjectDeployment'

import path from 'path'
import fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import MDXRemoteWrapper from '@components/mdx/MDXRemoteWrapper'

export default function Project({ projectData, source }) {
  const meta = projectData.meta

  return (
    <Container p={8} maxWidth="80ch">
      <VStack spacing={4} align="start">
        <InternalLink href="/projects">← Back to projects</InternalLink>
        <Heading as="h1" size="xl">
          {meta.title}
        </Heading>
        <Text>Last updated: {meta.lastUpdated}</Text>
        {meta.deployment && <ProjectDeployment deployment={meta.deployment} />}
        <Text>Tech stack: {meta.techStack}</Text>
        {meta.tags.length > 0 && <ProjectTagContainer tags={meta.tags} />}
      </VStack>
      <Divider my={4} />
      <div id="markdown-root">
        <MDXRemoteWrapper source={source} />
      </div>
    </Container>
  )
}

// Fallback
export async function getStaticPaths() {
  const projectIds = getAllProjectIds()
  const paths = projectIds.map((id) => ({
    params: { id },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const id = params.id as string
  const filePath = path.join(process.cwd(), 'projects', id + '.mdx')
  const source = fs.readFileSync(filePath, 'utf8')
  const mdxSource = await serialize(source)

  return {
    props: {
      projectData: getProjectMetadata(id),
      source: mdxSource,
    },
  }
}
