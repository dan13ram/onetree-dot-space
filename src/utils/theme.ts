import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    defaultColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: `"BagnardSans", serif`,
    body: `"Bagnard", serif`,
    mono: `"Kode Mono", monospace`,
  },
  styles: {
    global: {
      "html, body": {
        bg: "aliceBlue.500",
        color: "black.500",
      },
      body: {
        pl: { base: "0", md: "6rem" },
        pb: { base: "5rem", md: "0" },
      },
    },
  },
  colors: {
    darkGreen: {
      DEFAULT: "#024f47",
      100: "#00100e",
      200: "#01201d",
      300: "#01302b",
      400: "#024039",
      500: "#024f47",
      600: "#04a393",
      700: "#06f7df",
      800: "#58fbea",
      900: "#abfdf5",
    },
    mayaBlue: {
      DEFAULT: "#7cc6fe",
      100: "#012b4b",
      200: "#025595",
      300: "#0280e0",
      400: "#31a5fd",
      500: "#7cc6fe",
      600: "#96d1fe",
      700: "#b0dcfe",
      800: "#cae8fe",
      900: "#e5f3ff",
    },
    aliceBlue: {
      DEFAULT: "#f4faff",
      100: "#003764",
      200: "#006ec8",
      300: "#2da0ff",
      400: "#91cdff",
      500: "#f4faff",
      600: "#f7fbff",
      700: "#f9fcff",
      800: "#fbfdff",
      900: "#fdfeff",
    },
    asparagus: {
      DEFAULT: "#698f3f",
      100: "#151c0c",
      200: "#293919",
      300: "#3e5525",
      400: "#537132",
      500: "#698f3f",
      600: "#86b455",
      700: "#a4c77f",
      800: "#c3daaa",
      900: "#e1ecd4",
    },
    black: {
      DEFAULT: "#08090a",
      100: "#020202",
      200: "#040405",
      300: "#050607",
      400: "#070809",
      500: "#08090a",
      600: "#353b42",
      700: "#606c78",
      800: "#929da8",
      900: "#c9ced3",
    },
  },
});
