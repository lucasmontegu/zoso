// importing the required chakra libraries
import { theme as chakraTheme } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

// declare a variable for fonts and set our fonts. I am using Inter with various backups but you can use `Times New Roman`. Note we can set different fonts for the body and heading.
const fonts = {
  ...chakraTheme.fonts,
  heading: 'Cooper Lt BT',
  body: 'Campton Book',
}

const colors = {
  ...chakraTheme.colors,
  colors: {
    brand: {
      white: "#FEF8F6",
      lightPastelPink: "#FAE5DF",
      pastelPink: "#F5CAC2",
      coral: "#ED7966",
      purple: "#303179",
      darkPurple: "#141850",
      blackPurple: "#05082E",
      dark: "#201e1f"
    }
  }
}

const overrides = {
  fonts,
  colors
}

// declare a variable for our theme and pass our overrides in the e`xtendTheme` method from chakra
const customTheme = extendTheme(overrides)

// export our theme
export default customTheme