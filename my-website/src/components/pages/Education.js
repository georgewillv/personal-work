import "../../../src/styles.css";
// import uofm from "../../thumbnail_images/UofM.png";
import { Grid, Typography } from "@mui/material";
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
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <div className="college-diploma-container">
            <Typography variant="h4">
              University of Minnesota - Twin Cities CSE
            </Typography>
            <Typography>Bachelors of Science - Computer Science</Typography>
            <div className="education-images">
              <img src={diploma} alt="my-diploma"></img>
            </div>
            <br></br>
          </div>
        </Grid>
        <br></br>
        <Grid item></Grid>
        <Grid item>
          <div className="other-achievements">
            <Typography variant="h4">Other Involvements:</Typography>
            <div className="college-achievements">
              <Typography variant="h6">
                Recording Secretary of Phi Gamma Delta Mu Sigma Chapter
              </Typography>
              <img src={fiji} alt="fiji"></img>
              <br></br>
              <Typography>
                Responsible for disciplinary action and communication delivery
                of 90 active members.
              </Typography>
              <Typography>
                Worked on incorporating realistic Academic Goal Setting and Time
                Management Skills into the pledging process.
              </Typography>
              <Typography>
                Established philanthropic tradition of the “Phi Gamma Delta
                Casino Night” where students, friends, and families can come and
                play casino games at McNamara Alumni Center in support of cancer
                research.
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Education;
