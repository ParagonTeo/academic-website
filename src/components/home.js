import { Box, Button, Grid2, Link, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Projects");
  };

    const handleButtonClick2 = () => {
        window.open(`${process.env.PUBLIC_URL}/Copy of TannerOwensResume.pdf`);

  };

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
      <img
        src={`${process.env.PUBLIC_URL}/IMG_0076.jpeg`}
        alt="Rectangle"
        style={{
          position: "absolute",
          width: "204px",
          height: "204px",
          top: "59px",
          left: "70px",
        }}
      />

      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          width: "468px",
          top: "71px",
          left: "316px",
          fontFamily: "Inter, Helvetica",
          fontWeight: "600",
          fontStyle: "italic",
          color: "black",
        }}
      >
        Tanner Reed <br />
        ”The GOAT” Owens
      </Typography>

      <Box
        sx={{
          position: "absolute",
          width: "581px",
          height: "265px",
          top: "25px",
          left: "949px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            width: "468px",
            top: 0,
            left: "113px",
            fontFamily: "Inter, Helvetica",
            fontStyle: "italic",
            color: "black",
          }}
        >
          About Me
        </Typography>

        <Typography
          variant="body1"
          sx={{
            position: "absolute",
            width: "467px",
            height: "175px",
            top: "90px",
            left: 0,
            fontFamily: "Roboto, Helvetica",
            fontSize: "32px",
            fontWeight: "400",
            textAlign: "center",
            color: "black",
          }}
        >
          I am a Texas Tech computer science student. I have worked with
          multiple programming languages, and quite efficient with C++.
        </Typography>
      </Box>

      <Typography
        variant="body1"
        sx={{
          position: "absolute",
          width: "467px",
          height: "175px",
          top: "313px",
          left: "949px",
          fontFamily: "Roboto, Helvetica",
          fontSize: "32px",
          fontWeight: "400",
          textAlign: "center",
          color: "black",
        }}
      >
        Majoring in Computer Science
        <br />
        Interested in AI and Applied Programming Interfaces.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          position: "absolute",
          width: "467px",
          height: "175px",
          top: "510px",
          left: "949px",
          fontFamily: "Roboto, Helvetica",
          fontSize: "32px",
          fontWeight: "400",
          textAlign: "center",
          color: "black",
        }}
      >
        My career goals are to make money, and work in something I enjoy.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          position: "absolute",
          width: "467px",
          height: "175px",
          top: "707px",
          left: "949px",
          fontFamily: "Roboto, Helvetica",
          fontSize: "32px",
          fontWeight: "400",
          textAlign: "center",
          color: "black",
        }}
      >
        Software Programming, Intro to AI, HCI.
      </Typography>

      <Box
        sx={{
          position: "absolute",
          width: "832px",
          height: "82px",
          top: "282px",
          left: "-37px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            position: "absolute",
            width: "418px",
            height: "80px",
            top: "0.5px",
            left: 0,
            fontFamily: "Roboto, Helvetica",
            fontSize: "32px",
            fontWeight: "400",
            textAlign: "center",
            color: "black",
          }}
        >
          “Quirky Little Fella” <br />
          -Mom
        </Typography>

        <Typography
          variant="body1"
          sx={{
            position: "absolute",
            width: "418px",
            height: "80px",
            top: 0,
            left: "414px",
            fontFamily: "Roboto, Helvetica",
            fontSize: "32px",
            fontWeight: "400",
            textAlign: "center",
            color: "black",
          }}
        >
          <span>
            tanneowe@ttu.edu
            <br />
          </span>

          <Link
            href="https://github.com/ParagonTeo"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{
              fontFamily: "Roboto, Helvetica",
              fontSize: "32px",
              fontWeight: "400",
              textAlign: "center",
              color: "black",
            }}
          >
            GitHub: ParagonTeo
          </Link>
        </Typography>
      </Box>

      <Grid2
        container
        spacing={2}
        sx={{ position: "absolute", top: "512px", left: "70px" }}
      >
        <Grid2 item>
          <Button
            variant="contained"
            sx={{
              width: "156px",
              height: "83px",
              backgroundColor: "rgba(44, 44, 44, 1)",
              color: "rgba(245, 245, 245, 1)",
              borderRadius: "8px",
              textTransform: "none",
            }}
            onClick={(handleButtonClick)}
          >
            Projects
          </Button>
        </Grid2>
        <Grid2 item>
          <Button
            variant="contained"
            sx={{
              width: "156px",
              height: "83px",
              backgroundColor: "rgba(44, 44, 44, 1)",
              color: "rgba(245, 245, 245, 1)",
              borderRadius: "8px",
              textTransform: "none",
            }}
            onClick={(handleButtonClick2)}
          >
            Resume
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Home;
