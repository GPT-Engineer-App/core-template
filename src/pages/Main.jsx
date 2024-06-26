import { Container, Heading, Text } from "@chakra-ui/react";

const Main = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading as="h1" size="2xl">Main Screen</Heading>
      <Text fontSize="lg">This is the main screen of the application.</Text>
    </Container>
  );
};

export default Main;