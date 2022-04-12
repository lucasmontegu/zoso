import Image from "next/image";
import Link from "next/link";
import { Box, Flex, Heading, Stack, Text, SimpleGrid } from "@chakra-ui/react";
import SocialManager from '../../../public/assets/busy-project-manager-overwhelmed-by-work-social.svg'
import DigitalMarketer from '../../../public/assets/digital-marketing-specialist-giving-a-presentation.svg'
import Photographer from '../../../public/assets/class-topics-and-materials.svg'

export default function Services({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {
  return (
    <Flex
      id="servicios"
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      minW="99vW"
      px={{ base: 0, md: 28 }}
      py={{ base: 0, md: 16 }}
      mb={16}
      pos="relative"
      /* bg="#FAE5DF" */
      {...rest}
    >
      <div className="hero-bg-shape-four"></div>
      <div className="hero-bg-shape-five"></div>
      <Stack
        spacing={4}
        w={{ base: "80%", md: "100%" }}
        align={["center"]}
        pos="relative"
        pb={16}
      >
        <Heading
          as="h1"
          fontSize={{ base: 32, md: 42 }}
          fontWeight="bold"
          py={{ base: 8, md: 16 }}
          color="brand.blackPurple"
          textAlign={["center", "center", "center", "center"]}
          bgGradient='linear(to-l, #201e1f, #05082E)'
          bgClip='text'
        >
          Nuestros Servicios
        </Heading>
        <SimpleGrid width="100%" columns={{ base: 1, md: 3}} spacing={10} gridAutoColumns="auto">
        <Box  p='6'  bg='transparent' className="border-box">
          <Image
              width={350}
              height={300}
              src={SocialManager}
              alt="Community Manager"
            />
          <Text textAlign="center">Community Manager</Text>
        </Box>
        <Box  p='6' bg='transparent' className="border-box">
        <Image
              width={350}
              height={300}
              src={DigitalMarketer}
              alt="Publicidad Digital"
            />
          <Text textAlign="center">Publicidad Digital</Text>
        </Box>
        <Box  p='6' bg='transparent' className="border-box">
        <Image
              width={350}
              height={300}
              src={Photographer}
              alt="Fotografia"
            />
          <Text textAlign="center">Fotografia</Text>
        </Box>

        </SimpleGrid>
      </Stack>
    </Flex>
  );
}