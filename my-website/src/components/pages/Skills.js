import { Grid, Rating, Typography } from "@mui/material";
import skills_cloud from "../../thumbnail_images/skills-cloud.svg";
import Intro from "../Intro.js";

const Skills = () => {
  return (
    <div className="page-section-Container">
      <Intro
        Name={"Skills"}
        Description={"Where I've spent my experience"}
      ></Intro>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <div className="ratings">
            <Typography variant="h4">Technical</Typography>
            <Grid>
              <Typography component="legend">Python</Typography>
              <Rating
                name="python-rating"
                value={4.5}
                readOnly
                precision={0.5}
              ></Rating>
            </Grid>
            <Grid>
              <Typography component="legend">Web Dev</Typography>
              <Rating
                name="web-rating"
                value={3.5}
                readOnly
                precision={0.5}
              ></Rating>
            </Grid>
            <Grid>
              <Typography component="legend">AI & ML </Typography>
              <Rating
                name="windows-rating"
                value={3.5}
                precision={0.5}
                readOnly
              ></Rating>
            </Grid>
            <Grid>
              <Typography component="legend">Software Engineering</Typography>
              <Rating name="swe-rating" value={4} readOnly></Rating>
            </Grid>
            <Grid>
              <Typography component="legend">React</Typography>
              <Rating name="react-rating" value={4} readOnly></Rating>
            </Grid>
            <Grid>
              <Typography component="legend">Typescript</Typography>
              <Rating name="typescript-rating" value={3} readOnly></Rating>
            </Grid>
            <Grid>
              <Typography component="legend">Git</Typography>
              <Rating name="git-rating" value={4} readOnly></Rating>
            </Grid>
            <Grid>
              <Typography component="legend">Atlassian Suite</Typography>
              <Rating name="atlassian-rating" value={3} readOnly></Rating>
            </Grid>
            <Grid>
              <Typography component="legend">Windows</Typography>
              <Rating name="windows-rating" value={3} readOnly></Rating>
            </Grid>
          </div>
        </Grid>
        <Grid item>
          <img
            src={skills_cloud}
            alt="skills-word-cloud"
            width="auto"
            height="auto"
          ></img>
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
