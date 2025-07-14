
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'

function App() {

  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box as="main" flexGrow={1} bg="lightgray">
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  )
}

export default App
