import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Projects = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      sx={{
        background: "linear-gradient(180deg, rgb(255,225,0) 0%, rgb(206,124,30) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ position: "absolute", top: 40, left: 20 }}
      >
        <Grid item xs={4}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Inter', Helvetica",
              fontWeight: "bold",
              fontStyle: "italic",
              color: "black",
              fontSize: "5rem",
            }}
          >
            Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Roboto, Helvetica",
              fontSize: "32px",
              fontWeight: 400,
              lineHeight: "40px",
              color: "black",
            }}
          >
            Super Mario AI
            <br />
            Time: 2 months
            <br /> <br />
            Description: Trained an AI agent using deep learning algorithms to
            play the game efficiently.
            <br />
            <br />
            Accomplishments: Still undergoing the project.
            <br />
            <br />
            Technology: OpenAI gym, Anaconda.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Roboto, Helvetica",
              fontSize: "32px",
              fontWeight: 400,
              lineHeight: "40px",
              color: "black",
            }}
          >
            Recursive Descent Parser
            <br />
            Time: 1 month
            <br />
            <br />
            Description: Created a RDP with given grammar, and eventually
            created a Syntactic Analyzer.
            <br />
            <br />
            Accomplishments: Could run given code in the grammar language
            provided.
            <br />
            <br />
            Technology: C++
            <br />
            <br />
            Challenges: Ran into Tokenization issues that required heavy
            debugging.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Roboto, Helvetica",
              fontSize: "32px",
              fontWeight: 400,
              lineHeight: "40px",
              color: "black",
            }}
          >
            Verilog Calculator (16 - bit)
            <br />
            Time: 1 month
            <br />
            <br />
            Description: A 16 bit calculator coded in Verilog that could perform
            basic PEMDAS calculations, could only go up to the number 64. Meant
            to be applied to a breadboard simple circuit with displays.
            <br />
            <br />
            Technology: Verilog
            <br />
            <br />
            Challenges: Learning Verilog
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
