import Layout from "@/src/component/core/layout/Layout";

import { Provider } from "react-redux";
import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { store } from "@/src/redux/store";
const theme = extendTheme({
  color:{
    primaryColor:{
      900: '#01A2A6'
    }
  }
})


export default function App({ Component, pageProps }) {
  return (
		<Provider store={store}>
			<ChakraProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
		</Provider>
  );
}
