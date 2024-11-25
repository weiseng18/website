import { Spinner } from '@chakra-ui/react'
import MainContainer from '../components/MainContainer'

export default function Index() {
  return (
    <MainContainer page="index">
      <h1>Hello World!</h1>
      <Spinner />
    </MainContainer>
  )
}
