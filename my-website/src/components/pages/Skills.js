import skills_cloud from "../../thumbnail_images/skills-cloud.svg";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Intro from "../Intro.js";

const Skills = () => {
  return (
    <div className="page-section-Container">
      <Intro
        Name={"Skills"}
        Description={"Where I've spent my experience"}
      ></Intro>
      <div className="skills-rating-content-section">
        <div className="ratings">
          <div>
            <Typography component="legend">Python</Typography>
            <Rating
              name="python-rating"
              value={4.5}
              readOnly
              precision={0.5}
            ></Rating>
          </div>
          <div>
            <Typography component="legend">Web Dev</Typography>
            <Rating
              name="web-rating"
              value={3.5}
              readOnly
              precision={0.5}
            ></Rating>
          </div>
          <div>
            <Typography component="legend">Software Engineering</Typography>
            <Rating name="swe-rating" value={4} readOnly></Rating>
          </div>
          <div>
            <Typography component="legend">React</Typography>
            <Rating name="react-rating" value={4} readOnly></Rating>
          </div>
          <div>
            <Typography component="legend">Typescript</Typography>
            <Rating name="typescript-rating" value={3} readOnly></Rating>
          </div>
          <div>
            <Typography component="legend">Git</Typography>
            <Rating name="git-rating" value={4} readOnly></Rating>
          </div>
          <div>
            <Typography component="legend">Atlassian Suite</Typography>
            <Rating name="atlassian-rating" value={3} readOnly></Rating>
          </div>
          <div>
            <Typography component="legend">Windows</Typography>
            <Rating name="windows-rating" value={3} readOnly></Rating>
          </div>
        </div>
        <img src={skills_cloud} alt="skills-word-cloud"></img>
      </div>
    </div>
  );
};

export default Skills;
