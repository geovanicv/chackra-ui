import { Button } from "@chakra-ui/button"
import { Checkbox } from "@chakra-ui/checkbox"
import { useColorMode } from "@chakra-ui/color-mode"
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Input } from "@chakra-ui/input"
import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/layout"

const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button onClick={toggleColorMode} variant="ghost">
      {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

const Home = () => {
  return (
    <Flex minHeight="100vh" alignItems="center" justifyContent="center">
      <Box 
        borderWidth={1} 
        p={4} 
        width="full"
        maxWidth='500px'
        borderRadius={4}
        boxShadow="lg"
      >
        <Box textAlign="right">
          <ThemeSelector />
        </Box>
        <Box textAlign="center">
          <Heading my={4}>Fazer login na sua conta</Heading>
          <Text>Ou <Link color="teal.500">comece grátis por 14 dias</Link></Text>
        </Box>

        <Box as="form" my={8}>
            <FormControl mb={4}>
              <FormLabel>E-mail</FormLabel>
              <Input type="email" placeholder="Digite seu endereço de e-mail"/>
            </FormControl>
            <FormControl>
              <FormLabel>Senha</FormLabel>
              <Input type="password" placeholder="Digite a sua senha"/>
            </FormControl>

            <Stack mt={4} direction="row" justify="space-between">
              <Checkbox>Lembrar-me</Checkbox>
              <Link color="teal.500">Esqueceu sua senha?</Link>
            </Stack>

            <Button w="full" colorScheme="teal" my={4}>Entrar</Button>
        </Box>
      </Box>
    </Flex>

  )
}

export default Home