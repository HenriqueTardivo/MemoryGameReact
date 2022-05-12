import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMemoryGame } from "../../hooks/useMemoryGame";
import ListaOptions from "../../assets/ListaOptions.json";

export interface CardProps {
  pos: number;
  id: number;
}

export default function Card({ pos, id }: CardProps) {
  const { choosenNumber, pickNumber, correctNumbers } = useMemoryGame();
  const [flagState, setFlagState] = useState<string>("hidden");
  // states: playing, correct, hidden

  function getEmoji(index: number) {
    return ListaOptions.at(index);
  }

  useEffect(() => {
    if (correctNumbers && correctNumbers.indexOf(id) >= 0) {
      setFlagState("correct");
    } else if (
      choosenNumber &&
      choosenNumber.findIndex((number) => {
        return number.pos === pos;
      }) >= 0
    ) {
      setFlagState("playing");
    } else {
      setFlagState("hidden");
    }
  }, [correctNumbers, choosenNumber, flagState]);

  return (
    <Box
      as="button"
      bg={flagState === "correct" ? "verde" : "preto_meio"}
      border="1px"
      borderRadius={"10"}
      w={40}
      onClick={() => {
        if (flagState !== "correct") {
          setFlagState("playing");
          pickNumber({ pos, id });
        }
      }}
    >
      <Text fontSize="4xl">{flagState === "hidden" ? "?" : getEmoji(id)}</Text>
    </Box>
  );
}
