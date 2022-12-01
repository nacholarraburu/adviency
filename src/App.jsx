import {
  VStack,
  List,
  ListItem,
  Heading,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const listaDeRegalos = [
    "Auriculares Sony WH-1000XM4",
    "Caja de Havana 70% Cacao Puro",
    "Asado con la Scaloneta",
  ];
  return (
    <VStack>
      <IconButton
        mt={5}
        ml={8}
        icon={isDark ? <FaSun /> : <FaMoon />}
        isRound="true"
        onClick={toggleColorMode}
      ></IconButton>
      <Heading mt={5} pb={8}>
        Lista de Regalos 2022
      </Heading>
      <Box bg="blue.200" borderRadius="9px">
        <List spacing={3} ml={5} mr={5}>
          {listaDeRegalos.map((regalo) => (
            <ListItem key={regalo}>{regalo}</ListItem>
          ))}
        </List>
      </Box>
    </VStack>
  );
}

export default App;
