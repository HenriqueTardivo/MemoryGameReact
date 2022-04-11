import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useMemoryGame from "../../hooks/useMemoryGame";
import ListaOptions from "../../assets/ListaOptions.json";

interface CardProps {
  id: number;
}

export default function Card({ id }: CardProps) {
  const { choosenNumber, pickNumber, correctNumbers, hidePlaying } =
    useMemoryGame();
  const [flagState, setFlagState] = useState<string>("hidden");
  function getEmoji(index: number) {
    return ListaOptions.at(index);
  }

  // states: playing, correct, incorrect
  console.log(flagState);

  useEffect(() => {
    correctNumbers?.indexOf(id)
      ? setFlagState("correct")
      : setFlagState("hidden");
  }, [correctNumbers, hidePlaying]);

  return (
    <Box
      as="button"
      bg={"preto_meio"}
      border="1px"
      borderRadius={"10"}
      w={40}
      onClick={() => {
        if (flagState !== "correct") {
          pickNumber(id);
          setFlagState("playing");
        }
      }}
    >
      <Text fontSize="4xl">{flagState === "hidden" ? "?" : getEmoji(id)}</Text>
    </Box>
  );
}
