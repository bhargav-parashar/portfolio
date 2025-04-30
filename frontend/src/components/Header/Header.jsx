import { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeContext from "../../context/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import {skills} from "../../constants/constants";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  

  return (
    <Box sx={{ flexGrow: 1, zIndex: 10, position: "relative" }}>
      <AppBar position="absolute" elevation={0}>
        <Toolbar sx={{ bgcolor: "primary.badge" }} variant="dense">
          <Box sx={{ flexGrow: 1 }}>
            
          </Box>

          {darkMode ? (
            <Stack direction="row" alignItems="center">
              <Link
                href={skills.resume}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <Typography
                  variant="body1"
                  pr={3}
                  sx={{
                    fontSize: { xs: "2vw", md: "1.2vw" },
                    color: "text.primary",
                    "&:hover": {
                      color: "cyan",
                    },
                  }}
                >
                  Resume
                </Typography>
              </Link>
              <Typography
                variant={"body1"}
                sx={{
                  fontSize: { xs: "2vw", md: "1.2vw" },
                  color: "text.primary",
                }}
              >
                Light
              </Typography>
              <IconButton
                onClick={() => setDarkMode((prev) => !prev)}
                sx={{ transform: "rotate(130deg)", transition: "300ms ease" }}
              >
                <Brightness7Icon
                  sx={{
                    fontSize: "clamp(12px, 1.5vw, 48px)",
                    color: "text.primary",
                  }}
                />
              </IconButton>
            </Stack>
          ) : (
            <Stack direction="row" alignItems="center">
              <Link
               href={skills.resume}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <Typography
                  variant="body1"
                  pr={3}
                  sx={{
                    fontSize: { xs: "2vw", md: "1.2vw" },
                    color: "text.primary",
                    "&:hover": {
                      color: "brown",
                    },
                  }}
                >
                  Resume
                </Typography>
              </Link>
              <Typography
                variant={"body1"}
                sx={{
                  fontSize: { xs: "2vw", md: "1.2vw" },
                  color: "text.primary",
                }}
              >
                Dark
              </Typography>
              <IconButton
                onClick={() => setDarkMode((prev) => !prev)}
                sx={{ transform: "rotate(180deg)", transition: "300ms ease" }}
              >
                <Brightness4Icon
                  sx={{
                    fontSize: "clamp(12px, 1.5vw, 48px)",
                    color: "text.primary",
                  }}
                />
              </IconButton>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
      
    </Box>
  );
};

export default Header;
