import React from "react";
import { Box, Heading, Text, Button, Stack, Flex, Image, Container, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaLightbulb, FaTools, FaCheckCircle } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={"gray.100"} mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const Index = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
        <Heading fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
          Powering Your World{" "}
          <Text as={"span"} color={"blue.400"}>
            with Innovative Electrical Solutions
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          We are a leading electrical engineering firm dedicated to providing cutting-edge solutions for residential, commercial, and industrial projects. Our team of expert engineers delivers high-quality services to meet your electrical needs.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button rounded={"full"} px={6} colorScheme={"blue"} bg={"blue.400"} _hover={{ bg: "blue.500" }}>
            Get started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={"full"}>
          <Image src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmd8ZW58MHx8fHwxNzExNTc5OTIyfDA&ixlib=rb-4.0.3&q=80&w=1080" />
        </Flex>
      </Stack>

      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature icon={<Icon as={FaLightbulb} w={10} h={10} />} title={"Innovative Designs"} text={"Our creative engineers develop innovative electrical designs tailored to your needs."} />
          <Feature icon={<Icon as={FaTools} w={10} h={10} />} title={"Expert Installation"} text={"Skilled technicians ensure precise and efficient installation of electrical systems."} />
          <Feature icon={<Icon as={FaCheckCircle} w={10} h={10} />} title={"Quality Assurance"} text={"Rigorous testing and quality checks guarantee reliable and safe electrical solutions."} />
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;
