import HookForm from "../../hook/HookForm";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Link
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

export default function Contact() {
  return (
    <Container
      id="contacto"
      /* className="bg-gradiant" */
      bg="transparent"
      rounded="lg"
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
      mb={16}
    >
      <Flex width="100%">
        <Box
          className="bg-gradiant"
          maxW="full"
          width="100%"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
          as="div"
        >
          <Box p={4} as="div">
            <Wrap as="div" w="100%" spacing={{ base: 20, sm: 3, md: 5, lg: 20 }} justifyContent="space-between" >
              <WrapItem as="div" w={{ base: "100%", md: "30%"}}>
                <Box>
                  <Heading color="#05082e">Contacto</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="#05082e">
                    Cuentanos como podemos ayudarte
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="white"
                        _hover={{ border: "2px solid white" }}
                        leftIcon={<MdPhone color="white" size="20px" />}
                      >
                        +91-988888888
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="white"
                        _hover={{ border: "2px solid white" }}
                        leftIcon={<MdEmail color="white" size="20px" />}
                      >
                        hello@abc.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="white"
                        _hover={{ border: "2px solid white" }}
                        leftIcon={<MdLocationOn color="white" size="20px" />}
                      >
                        Karnavati, India
                      </Button>
                    </VStack>
                  </Box>
                  {/* <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsGithub size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsDiscord size="28px" />}
                      />
                    </HStack> */}
                </Box>
              </WrapItem>
              <WrapItem as="div" w={{ base: "100%", md: "50%"}}>
                <Box bg="white" borderRadius="lg" w="100%">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Nombre y Apellido</FormLabel>
                        <InputGroup borderColor="#05082e">
                          <InputLeftElement
                            pointerEvents="none"
                            // eslint-disable-next-line react/no-children-prop
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#05082e">
                          <InputLeftElement
                            pointerEvents="none"
                            // eslint-disable-next-line react/no-children-prop
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mensaje</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="Mensaje"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#05082e"
                          color="white"
                          _hover={{}}
                        >
                          Enviar
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
