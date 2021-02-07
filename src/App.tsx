import { ChakraProvider, theme, CSSReset } from "@chakra-ui/react"
import Home from "./pages/Home";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Home />
    </ChakraProvider>
  )
}

export default App;
