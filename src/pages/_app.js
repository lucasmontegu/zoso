import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import customTheme from './theme.js';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
