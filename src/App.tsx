import { ChakraProvider } from "@chakra-ui/react";
import { MemoryProvider } from "./hooks/useMemoryGame";
import Home from "./pages/Home";
import theme from "./theme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <MemoryProvider>
        <Home />
      </MemoryProvider>
    </ChakraProvider>
  );
}
