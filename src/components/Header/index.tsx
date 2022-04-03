import { Box, HStack, Image, Text, Link } from "@chakra-ui/react";

export function Header() {
  return (
    <HStack bg={"preto_absoluto"} ml={20} justify={"space-between"} minH="5vh">
      <Box>
        <Image />
      </Box>
      <Box>
        <Text fontWeight={"bold"} color={"white"}>
          Jogo da Memória
        </Text>
      </Box>
      <Box>
        <Link href="https://github.com/henriquetardivo">
          <Text>Github</Text>
        </Link>
      </Box>
    </HStack>
  );
}
