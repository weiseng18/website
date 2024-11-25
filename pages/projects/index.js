import { Text, VStack } from '@chakra-ui/react'
import MainContainer from '../../components/MainContainer'
import { getAllProjectIds } from '../../lib/projects'
import Link from 'next/link'

export default function Projects({ projectIds }) {
  return (
    <MainContainer page="projects">
      <Text>List of projects and links:</Text>
      <VStack align="start" mt={2}>
        {projectIds.map((id) => (
          <Link key={id} href={`/projects/${id}`}>
            {id}
          </Link>
        ))}
      </VStack>
    </MainContainer>
  )
}

export async function getStaticProps() {
  const res = await getAllProjectIds()
  return {
    props: {
      projectIds: res.map((r) => r.params.id),
    },
  }
}
