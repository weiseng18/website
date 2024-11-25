import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'

import '../styles/github-markdown.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  )
}
