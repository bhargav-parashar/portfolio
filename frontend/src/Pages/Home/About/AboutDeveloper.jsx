import React from "react";
import { Box, Stack, Paper } from "@mui/material";
import Badge from "./Badge";
import Information from "./Information";

const AboutDeveloper = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        overflow: "clip",
        height: "100%",
        bgcolor: "primary.boxBg",
        paddingX: "5%",
      }}
    >
      <Stack  pt={8} direction={{ xs: "column", lg: "row" }} height="100vh">
        <Box
          flex={{ xs: "", lg: 1 }}
          overflow={{ xs: "", lg: "hidden" }}
          pr={{ xs: 0, lg: 2 }}
          display={{xs:'none',lg:'block'}}
         
        >
          <Badge />
        </Box>
        <Box overflow={{xs:'auto', lg:''}} flex={{ xs: "", lg: 3 }}>
          <Box   mb={2} display={{xs:'block',lg:'none'}} >
        <Badge />
        </Box>
          <Information />
        </Box>
      </Stack>
    </Paper>
  );
};

export default AboutDeveloper;
