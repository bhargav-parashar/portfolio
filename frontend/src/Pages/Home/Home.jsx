import React from "react";
import AboutDeveloper from "./About/AboutDeveloper";
import { Box, Stack } from "@mui/material";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <Box>
       <Header />
      <AboutDeveloper />
    </Box>
  );
};

export default Home;
