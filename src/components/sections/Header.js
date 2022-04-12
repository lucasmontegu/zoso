import React, { useState } from 'react'
import { Box, Flex, Button } from "@chakra-ui/react"
import MenuItems from './MenuItems';
import Logo from "../../../public/zoso-logo.svg"
import { BiMenuAltRight, BiX } from "react-icons/bi";
import Image from 'next/image';

const Header = (props) => {
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Flex align="center">
        <Image
          src={Logo}
          width={120}
          height={40}
          alt="Zoso Marketing Logo"
        />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <BiX color='#05082E' size={24} /> : <BiMenuAltRight color='#05082E' size={24}/>}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="#inicio">Inicio</MenuItems>
          <MenuItems to="#servicios">Servicios </MenuItems>
          <MenuItems to="#contacto">Contacto </MenuItems>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header