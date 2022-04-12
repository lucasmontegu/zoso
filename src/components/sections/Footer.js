import React from "react";
import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import Image from 'next/image';
import Logo from "../../../public/zoso-logo.svg"

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box width="100%">
      <Container
        as={Stack}
        maxW="100%"
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Image
          src={Logo}
          width={120}
          height={40}
          alt="Zoso Marketing Logo"
        />
        <Text textAlign="center">© { new Date().getFullYear() } Zoso Marketing. Todos los derechos reservados.</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Instagram"} href={"#"}>
            <BsInstagram />
          </SocialButton>
          <SocialButton label={"Linkedin"} href={"#"}>
            <BsLinkedin />
          </SocialButton>
          <SocialButton label={"Facebook"} href={"#"}>
            <BsFacebook />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
