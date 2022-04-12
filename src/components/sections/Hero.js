import PropTypes from "prop-types";
import Image from "next/image";
import { Box, Button, Flex, Heading, Stack, Text, Link } from "@chakra-ui/react";
import HeroImage from "../../../public/assets/busy-project-manager-overwhelmed-by-work.svg";

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {
  return (
    <Flex
      id="inicio"
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      pos="relative"
      {...rest}
    >
      <div className="hero-bg-shape-one"></div>
      <div className="hero-bg-shape-two"></div>
      <div className="hero-bg-shape-three"></div>
      <Stack
        spacing={4}
        w={{ base: "80%", md: "50%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          fontSize={{ base: 32, md: 48 }}
          fontWeight="bold"
          color="brand.blackPurple"
          textAlign={["center", "center", "left", "left"]}
          bgGradient="linear(to-l, #201e1f, #05082E)"
          bgClip="text"
        >
          {title}
        </Heading>
        <Text
          as="h4"
          fontSize={{ base: 18, md: 21 }}
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Text>

        <Link href="#servicios">
        <Button
          type="button"
          href="#contact"
          borderRadius="8px"
          style={{"marginTop": "24px", "backgroundColor": "#141850", "color": "#FEF8F6", "padding": "10px 20px"}}
          lineHeight="1"
          width="280px"
          fontSize={18}
          heigth="32px"
          size="md"
        >
          {ctaText}
        </Button>
        </Link>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Image
          src={image}
          width="640"
          height="537"
          alt="Header Image Zoso"
          className="shadow"
        />
      </Box>
    </Flex>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.any,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
};

Hero.defaultProps = {
  title: "Ayudamos Al Crecimiento De Tu Negocio.",
  subtitle:
    "Como agencia de marketing digital, nos esforzamos por comprender primero los objetivos comerciales de nuestros clientes y luego todas las decisiones se toman con ellos.",
  image: HeroImage,
  ctaText: "Hablemos",
};
