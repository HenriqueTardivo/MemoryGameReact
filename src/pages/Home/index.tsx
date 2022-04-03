import { Button, Flex, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import useMemoryGame from "../../hooks/useMemoryGame";

export default function Home() {
  const [restart, setRestart] = useState(false);
  const { MemoriaRandom, GenerateMemoryArray } = useMemoryGame();

  useEffect(() => {
    GenerateMemoryArray(16);
  }, []);

  console.log(MemoriaRandom);

  return (
    <>
      <Header />
      <Flex bg={"preto_claro"} minH="95vh">
        <Button
          mt={30}
          ml={30}
          colorScheme={"blackAlpha"}
          onClick={() => setRestart(!restart)}
        >
          Recomeçar
        </Button>

        <Grid templateColumns={"repeat(4, 1fr) "}></Grid>
      </Flex>
    </>
  );
}
