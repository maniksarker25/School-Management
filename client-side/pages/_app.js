import Layout from "@/src/component/core/layout/Layout";

import { Provider } from "react-redux";
import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { store } from "@/src/redux/store"; 
const theme = extendTheme({
	breakpoints: {
		base: "320px",
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
	},
	colors: {
		primaryColor: {
			900: "#01A2A6",
		},
		secondaryColor: {
			900: "#F36371",
		},
	},
  breakpoints: {
    base: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  color: {
    primaryColor: {
      900: "#01A2A6",
    },
  },
  space:{
    1: '70px'
  }
});

export default function App({ Component, pageProps }) {
  return (
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
		</Provider>
  );
}
