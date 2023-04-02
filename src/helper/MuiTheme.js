import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const MuiTheme = ({ children }) => {
  const color = { green: "#04c582" };
  const theme = createTheme({
    palette: {
      primary: {
        main: color.green,
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiTheme;
