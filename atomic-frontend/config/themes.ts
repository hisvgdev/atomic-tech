import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      // primary content size
      sizes: {},
      fonts: {
        heading: { value: "var(--font-montserrat)" },
        body: { value: "var(--font-montserrat)" },
      },
      // priamry font size
      fontSizes: {
        default: { value: "1rem" },
        sm: { value: "0.875rem" },
        lessMd: { value: "1.125rem" },
        md: { value: "1.25rem" },
        lg: { value: "1.375rem" },
        xl: { value: "1.75rem" },
        middleXl: { value: "2rem" },
        "2xl": { value: "3.125rem" },
        "3xl": { value: "3rem" },
        "5xl": { value: "5rem" },
        "6xl": { value: "5.625rem" },
      },
      // priamry font weights
      fontWeights: {
        light: { value: "300" },
        normal: { value: "400" },
        medium: { value: "500" },
        bold: { value: "800" }
      },
      // colors
      colors: {
        light: { value: "#FFFFFF" },
        dark: { value: "#000000" },
        secondaryDark: { value: "#232323" },
        thirtaryDark: { value: '#383838' },
      }
    },
    semanticTokens: {
      colors: {
        colorMode: {
          value: { base: '{colors.light}', _dark: '{colors.dark}' },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)