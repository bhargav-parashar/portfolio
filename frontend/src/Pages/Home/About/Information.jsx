import React from "react";
import { Box } from "@mui/material";
import Skills from "../Skills/Skills";
import ProjectSection from "../Projects/ProjectSection";
import Intro from "./Intro";
import Certifications from "../Certifications/Certifications";
import Education from "../Education/Education";

const Information = () => {
  return (
    <Box
      px={1}
      sx={{
        width: "100%",
        height: "100%",
        overflowX: "clip",
        overflowY: {xs:'', lg:'auto'} ,

        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(136, 136, 136, 0.2)",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(136, 136, 136, 0.2) transparent",
      }}
    >
      <Intro />
      <Skills />
      <ProjectSection />
      <Certifications />
      <Education/>
    </Box>
  );
};

export default Information;
