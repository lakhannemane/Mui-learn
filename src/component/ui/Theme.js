import { createTheme } from "@mui/material";

const arcblue = "#0b72b9";
const arcOrange = "#ffba60";

const theme = createTheme({
  palette: {
    common: {
      blue: `${arcblue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcblue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    h3: {
      fontWeight: 300,
    },
  },
});

export default theme;
