import { Container } from '@chakra-ui/react'
import Navbar from './Navbar'

const MainContainer = ({ page, children }) => {
  return (
    <Container p={8}>
      <Navbar page={page} />
      {children}
    </Container>
  )
}

export default MainContainer
