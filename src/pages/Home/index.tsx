import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { useMemoryGame } from "../../hooks/useMemoryGame";
import Card from "../../components/Card";

export default function Home() {
  const [restart, setRestart] = useState(false);
  const { GenerateMemoryArray } = useMemoryGame();
  const [isLoading, setIsLoading] = useState(true);
  const [MemoriaRandom, setMemoriaRandom] = useState<number[]>([]);

  useEffect(() => {
    setIsLoading(true);
    setMemoriaRandom(GenerateMemoryArray(16));
    setIsLoading(false);
  }, [restart]);

  return (
    <>
      <Header />
      <Flex
        flexDir={"column"}
        align={"center"}
        bg={"preto_claro"}
        minH="92vh"
        justifyContent={"start"}
        sx={{ gridGap: 10 }}
      >
        <Button
          mt={30}
          ml={30}
          colorScheme={"blackAlpha"}
          onClick={() => setRestart(!restart)}
        >
          Recomeçar
        </Button>
        {isLoading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <Grid templateColumns={"repeat(4, 1fr) "} gap={20}>
            {MemoriaRandom.map((memoryNumber, index) => (
              <Card pos={index} id={memoryNumber} />
            ))}
          </Grid>
        )}
      </Flex>
    </>
  );
}
