import "../../../src/styles.css";
// import uofm from "../../thumbnail_images/UofM.png";
import { Box, Grid, Typography } from "@mui/material";
import fiji from "../../thumbnail_images/Phi_Gamma_Delta_Crest.png";
import diploma from "../../thumbnail_images/diploma.jpg";
import Intro from "../Intro.js";

const Education = () => {
  return (
    <div className="page-section-Container">
      <Intro
        Name={"Education"}
        Description={
          "It is the mark of an educated mind to entertain a thought without accepting it"
        }
      ></Intro>
      <Grid
        container
        spacing={6}
        alignContent="center"
        justifyItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} sm={5}>
          <Box>
            <Typography variant="h4">
              University of Minnesota - Twin Cities CSE
            </Typography>
            <Typography variant="h6">
              Bachelors of Science - Computer Science
            </Typography>
            <img
              src={diploma}
              alt="my-diploma"
              style={{ width: "100%", height: "auto" }}
            ></img>
            <br></br>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box>
            <Typography variant="h4">Other Involvements:</Typography>
            <Typography variant="h6">
              Recording Secretary of Phi Gamma Delta Mu Sigma Chapter
            </Typography>
            <img
              src={fiji}
              alt="fiji"
              style={{ maxWidth: "70%", height: "auto", maxHeight: "500px" }}
            ></img>
            <br></br>
            <Typography variant="h6">
              Responsible for disciplinary action and communication delivery of
              90 active members.
            </Typography>
            <Typography variant="h6">
              Worked on incorporating realistic Academic Goal Setting and Time
              Management Skills into the pledging process.
            </Typography>
            <Typography variant="h6">
              Established philanthropic tradition of the “Phi Gamma Delta Casino
              Night” where students, friends, and families can come and play
              casino games at McNamara Alumni Center in support of cancer
              research.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Education;
