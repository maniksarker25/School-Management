import Layout from "@/src/component/core/layout/Layout";
import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  color:{
    primaryColor:{
      900: '#01A2A6'
    }
  }
})
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
      <Component {...pageProps} />

      </Layout>
    </ChakraProvider>
  );
}
