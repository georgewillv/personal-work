import { Grid, Rating, Typography } from "@mui/material";
import skills_cloud from "../../thumbnail_images/skills_cloud.jpg";
import Intro from "../Intro.js";

// TODO break apart this component
const Skills = () => {
  return (
    <div className="page-section-Container">
      <Intro
        Name={"Skills"}
        Description={"Where I've spent my experience"}
      ></Intro>

      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={12} sm={5}>
          <div className="ratings">
            <Typography variant="h4">Hard/Technical</Typography>
            <br></br>
            <Grid>
              <Typography component="legend">Python</Typography>
              <Rating
                name="python-rating"
                value={4.5}
                readOnly
                precision={0.5}
                size="large"
              ></Rating>
            </Grid>
            <Grid>
              <Typography component="legend">Web Dev</Typography>
              <Rating
                name="web-rating"
                value={3.5}
                readOnly
                precision={0.5}
                size="large"
              ></Rating>
            </Grid>
            <Grid>
              <Typography component="legend">AI & ML </Typography>
              <Rating
                name="ai-ml-rating"
                value={3.5}
                precision={0.5}
                readOnly
                size="large"
              ></Rating>
            </Grid>
            <Grid>
              <Typography component="legend">Software Engineering</Typography>
              <Rating
                name="swe-rating"
                value={4}
                readOnly
                size="large"
              ></Rating>
            </Grid>
            <Grid>
              <Typography component="legend">React</Typography>
              <Rating
                name="react-rating"
                value={4}
                readOnly
                size="large"
              ></Rating>
            </Grid>
            <Grid>
              <Typography component="legend">Typescript</Typography>
              <Rating
                name="typescript-rating"
                value={3}
                readOnly
                size="large"
              ></Rating>
            </Grid>
            <Grid>
              <Typography component="legend">Git</Typography>
              <Rating
                name="git-rating"
                value={4}
                readOnly
                size="large"
              ></Rating>
            </Grid>
            <Grid>
              <Typography component="legend">Atlassian Suite</Typography>
              <Rating
                name="atlassian-rating"
                value={3}
                readOnly
                size="large"
              ></Rating>
            </Grid>
            <Grid>
              <Typography component="legend">Windows</Typography>
              <Rating
                name="windows-rating"
                value={3}
                readOnly
                size="large"
              ></Rating>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="h4">Soft/Professional</Typography>
          <br></br>
          <Grid>
            <Typography component="legend">Communication</Typography>
            <Rating
              name="communication-rating"
              value={4.5}
              readOnly
              precision={0.5}
              size="large"
            ></Rating>
          </Grid>
          <Grid>
            <Typography component="legend">Leadership</Typography>
            <Rating
              name="leadership-rating"
              value={4}
              readOnly
              precision={0.5}
              size="large"
            ></Rating>
          </Grid>
          <Grid>
            <Typography component="legend">Teamwork</Typography>
            <Rating
              name="teamwork-rating"
              value={5}
              precision={0.5}
              readOnly
              size="large"
            ></Rating>
          </Grid>
          <Grid>
            <Typography component="legend">Accountability</Typography>
            <Rating
              name="accountability-rating"
              value={4}
              readOnly
              size="large"
            ></Rating>
          </Grid>
          <Grid>
            <Typography component="legend">Time Management</Typography>
            <Rating
              name="time-management-rating"
              value={4}
              readOnly
              size="large"
            ></Rating>
          </Grid>
          <Grid>
            <Typography component="legend">Initiative</Typography>
            <Rating
              name="intiative-rating"
              value={4.5}
              readOnly
              precision={0.5}
              size="large"
            ></Rating>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={5} sx={{ objectFit: "contain" }}>
          <img src={skills_cloud} alt="skills-word-cloud" width="100%"></img>
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
