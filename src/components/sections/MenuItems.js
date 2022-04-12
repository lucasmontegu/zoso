import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react"
import Link from 'next/link';

const MenuItems = (props) => {
  const { children, isLast, to = "/", ...rest } = props
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      fontWeight={500}
      fontSize={17}
      letterSpacing={1.2}
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </Text>
  )
}

export default MenuItems