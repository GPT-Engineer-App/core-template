import { Container, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Main = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading as="h1" size="2xl">メイン画面</Heading> {/* Translated to Japanese */}
      <Text fontSize="lg">これはアプリケーションのメイン画面です。</Text> {/* Translated to Japanese */}
      <Button colorScheme="teal" size="lg" mt={4} onClick={() => navigate('/')}>
        戻る {/* Translated to Japanese */}
      </Button>
    </Container>
  );
};

export default Main;