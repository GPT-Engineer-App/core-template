import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">新しいアプリへようこそ</Heading>
        <Text fontSize="lg">これは最低限の機能を備えたアプリケーションです。ここから素晴らしい機能を作り始めましょう！</Text>
        <Button leftIcon={<FaEdit />} colorScheme="teal" size="lg">
          始める
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;