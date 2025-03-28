import { createTheme } from "@mui/material/styles"

const borderRadiusInput = "10px"


export const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: "data-toolpad-color-scheme",
    },
    palette:{
      primary:{
        main: "#C3A1FF",
      }
    },
    colorSchemes: {
        light: {
            palette: {
                background: {
                    default: "#ffffff",
                    paper: "#F9F9FE",
                },
                primary:{
                  main: "#C3A1FF",
                }
            },
        },
        dark: {
            palette: {
                background: {
                    default: "#30334E",
                    paper: "#3D405D",
                },
                primary:{
                  main: "#C3A1FF",
                }
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1111,
            lg: 1650,
        },
    },
    components: {
        // Para TextField
        MuiTextField: {
          styleOverrides: {
            root: {
              "& .MuiOutlinedInput-root": {
                borderRadius: borderRadiusInput,
              },
            },
          },
        },
        // Para OutlinedInput
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: borderRadiusInput,
            },
          },
        },
        // Para FilledInput
        MuiFilledInput: {
          styleOverrides: {
            root: {
              borderRadius: borderRadiusInput,
            },
          },
        },
        // Para Input (variante estándar)
        MuiInput: {
          styleOverrides: {
            root: {
              borderRadius: borderRadiusInput,
            },
          },
        },
        
      },
})