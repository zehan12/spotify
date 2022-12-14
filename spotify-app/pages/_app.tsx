import React from 'react'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import "reset-css"
import "../styles/login.css"
import PlayerLayout from '../components/PlayerLayout'
import { CookiesProvider } from 'react-cookie';

const theme = extendTheme({
  colors: {
    gray: {
      100: '#F5f5f5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#909090',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    }
  },
  components: {
    Button: {
      variants: {
        link: {
          ':focus': {
            outline: 'none',
            boxShadow: 'none',
          }
        }
      }
    }
  }
})

const MyApp = ({ Component, pageProps }) => {
  return (
    <CookiesProvider>
    <ChakraProvider theme={theme}>
      {
        Component.authPage ? (
          <Component {...pageProps} />
        ) : <PlayerLayout>
          <Component {...pageProps} />
        </PlayerLayout>
      }
    </ChakraProvider>
    </CookiesProvider>
  )
}

export default MyApp
