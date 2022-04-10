import { Box, HStack, Image, Text, Link } from "@chakra-ui/react";
const logo_memory = require("../../assets/logo_memory.png");

export function Header() {
  return (
    <HStack
      bg={"preto_absoluto"}
      p={"15px"}
      justify={"space-between"}
      minH="5vh"
    >
      <Box>
        <Image src={logo_memory} h={10} w={10} alt={"logo"} />
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
