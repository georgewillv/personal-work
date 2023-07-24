import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import fma from "../../thumbnail_images/fma_reaching_out.png";
import Intro from "../Intro.js";

const Contact = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <div className="page-section-Container">
        <Intro
          Name={"Contact Me"}
          Description={
            "Sometimes, reaching out and taking someone's hand is the beginning of a journey. At other times, it is allowing another to take yours."
          }
        />
        <Grid>
          <img src={fma} alt="reaching-out"></img>
        </Grid>
        <br></br>
        <br></br>
        <br></br>
        <Typography>
          Please reach out via{" "}
          <a href="https://www.linkedin.com/in/georgewillv/">LinkedIn</a>. I
          will not disclose my personal contact information here due to
          potential spam.{" "}
        </Typography>
      </div>
    </Grid>
  );
};

export default Contact;
