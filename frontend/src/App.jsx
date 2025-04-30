import { useState, useMemo } from "react";
import Home from "./Pages/Home/Home";
import { createTheme, ThemeProvider } from "@mui/material";
import { darkTheme } from "./Themes/DarkTheme";
import { lightTheme } from "./Themes/LightTheme";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = useMemo(
    () => (darkMode ? createTheme(darkTheme()) : createTheme(lightTheme())),
    [darkMode]
  );
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
