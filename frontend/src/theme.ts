import { createTheme } from "@mui/material";

export const theme = createTheme({
   typography: {
      button: {
         textTransform: "none",
      },
   },
   palette: {
      primary: {
         main: "#FF7144",
         light: "#FF7144",
         dark: "#FF7144",
      },
      secondary: {
         main: "#F29727",
         light: "#F29727",
         dark: "#F29727",
      },
      success: {
         main: "#22A699",
         light: "#22A699",
         dark: "#22A699",
      },
      warning: {
         main: "#F2BE22",
         light: "#F2BE22",
         dark: "#F2BE22",
      },
      error: {
         main: "#DB445C",
         light: "#DB445C",
         dark: "#DB445C",
      },
   },
});
