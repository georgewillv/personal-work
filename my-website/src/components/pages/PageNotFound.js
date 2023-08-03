import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import levi from "../../thumbnail_images/confused_levi.jpg";
import Intro from "../Intro.js";

const PageNotFound = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <div className="page-section-Container">
        <Grid container spacing={4} direction="column">
          <Grid>
            <img src={levi} alt="what"></img>
          </Grid>
          <Intro
            Name={"You are trying to enter the void"}
            Description={
              "You've hit the boundaries of my cyberspace. By hitting here it must've been a mistake or you're trying to see if I am a indeed a web developer. While I haven't had this page before, I am continually learning and improving this site"
            }
          />
          <Typography>
            I am still looking for a job. If you're interested in chatting with
            me about employment please go to <a href="/Contact"> Contact</a> and
            connect with me on LinkedIn
          </Typography>
        </Grid>
      </div>
    </Grid>
  );
};

export default PageNotFound;
