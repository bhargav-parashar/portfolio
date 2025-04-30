import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { skills } from "../../../constants/constants";
import Launch from "@mui/icons-material/Launch";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import SchoolIcon from "@mui/icons-material/School";

const Education = () => {
  return (
    <Box  pb={4}>
      <Box
        mt={2}
       
        sx={{
          width: "100",
        }}
      >
        <Typography textAlign="justify" variant="h6">
          EDUCATION
        </Typography>
        {skills.education.map((item) => (
          <Box
            key={item.id}
            p={1}
            mt={2}
            sx={{
              bgcolor: "primary.box",
              width: "100%",
              borderRadius: "0.6rem",
            }}
          >
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Stack gap={3} direction="row" alignItems="center">
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ width: "10%" }}
                >
                  <SchoolIcon sx={{ fontSize: "2.5rem" }} />
                </Stack>
                <Stack
                  sx={{ width: "90%" }}
                  direction="column"
                  alignItems="flex-start"
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ width: "100%" }}
                  >
                    <Typography color="" textAlign="justify" variant="body1">
                      {item.source}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap={1}
                  >
                    <CalendarTodayOutlinedIcon
                      sx={{ fontSize: "1rem", color: "text.subHeader" }}
                    />
                    <Typography
                      color="text.subHeader"
                      textAlign="justify"
                      variant="caption"
                    >
                      {item.duration}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap={1}
                  >
                    <SchoolOutlinedIcon
                      sx={{ fontSize: "1rem", color: "text.subHeader" }}
                    />
                    <Typography
                      color="text.subHeader"
                      textAlign="justify"
                      variant="caption"
                    >
                      {item.label}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap={1}
                  >
                    <FmdGoodOutlinedIcon
                      sx={{ fontSize: "1rem", color: "text.subHeader" }}
                    />
                    <Typography
                      color="text.subHeader"
                      textAlign="justify"
                      variant="caption"
                    >
                      {item.location}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>

            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Stack
                sx={{ height: "100%" }}
                gap={2}
                direction="row"
                alignItems="center"
              >
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ width: "10%" }}
                >
                  <SchoolIcon sx={{ fontSize: "2rem" }} />
                </Stack>

                <Box
                  sx={{
                    height: "100%",
                    width: "65%",
                  }}
                >
                  <Typography color="" textAlign="left" variant="body2">
                    {item.source}
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    gap={1}
                  >
                    <CalendarTodayOutlinedIcon
                      sx={{ fontSize: "1rem", color: "text.subHeader" }}
                    />
                    <Typography
                      color="text.subHeader"
                      textAlign="left"
                      variant="caption"
                    >
                      {item.duration}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    gap={1}
                  >
                    <SchoolOutlinedIcon
                      sx={{ fontSize: "1rem", color: "text.subHeader" }}
                    />
                    <Typography
                      color="text.subHeader"
                      textAlign="left"
                      variant="caption"
                    >
                      {item.label}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    gap={1}
                  >
                    <FmdGoodOutlinedIcon
                      sx={{ fontSize: "1rem", color: "text.subHeader" }}
                    />
                    <Typography
                      color="text.subHeader"
                      textAlign="left"
                      variant="caption"
                    >
                      {item.location}
                    </Typography>
                  </Stack>
                </Box>

                <Box sx={{ width: "25%" }}></Box>
              </Stack>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Education;
