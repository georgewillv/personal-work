/* eslint-disable no-lone-blocks */
import { Box, Grid } from "@mui/material";
import adam from "../../thumbnail_images/adam.png";
import joe from "../../thumbnail_images/apple_joe.jpg";
import dakota from "../../thumbnail_images/dakota1.jpg";
import jeff from "../../thumbnail_images/jeff.jpg";
import versaggi from "../../thumbnail_images/profversaggi_avatar-normal.png";
import ThumbCard from "../Card.js";
import Intro from "../Intro.js";

const Mentors = () => {
  return (
    <div className="page-section-Container">
      <Intro
        Name={"Mentors"}
        Description={
          "Better than a thousand days of diligent study is one day with a great teacher."
        }
      ></Intro>

      <Grid
        container
        // spacing={12}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ flexGrow: 1, backgroundColor: "#f1f1f1", paddingBottom: "32px" }}
        rowSpacing={4}
      >
        <Grid
          item
          container
          spacing={6}
          direction="row"
          alignContent="center"
          justifyItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Box>
              <ThumbCard
                backgroundUrl={versaggi}
                title={"Matthew Versaggi"}
                subText={
                  "was instrumental in educating me in wide aspects of life; from attitude, fitness, and general wellbeing to all thing technology, Matt has remained a huge influence to me and many others."
                }
                link={"http://www.matt-versaggi.com/resume/"}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <ThumbCard
                backgroundUrl={jeff}
                title={"Jeff Arnold"}
                subText="was my boss as an intern. Once I was a fulltime employee 
                he'd constantly encourage me to foster new ideas. He is always 
                concerned about others and brings happiness into any room he's in."
                link={"https://www.linkedin.com/in/jeff-arnold-a0720ba/"}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <ThumbCard
                backgroundUrl={dakota}
                title={"Dakota O'Dell "}
                subText="was my lead engineer and would always explain things with
                  patience, intelligence and kindness. He is what developers
                  should strive to become"
                link={"https://www.linkedin.com/in/dakotaodell/"}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid
          item
          container
          spacing={6}
          direction="row"
          alignContent="center"
          justifyItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Box>
              <ThumbCard
                backgroundUrl={adam}
                title={"Adam Blacke"}
                subText="is another man who's influenced me in all aspects of life. 
                He continuously gives advice one can only obtain from experience. I'm grateful I was able to influence him to
                start lifting weights again."
                link={"https://www.linkedin.com/in/adamblacke/"}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <ThumbCard
                backgroundUrl={joe}
                title={"Joe Saperstein"}
                subText="is a front end developer God and is very good at coaxing
                  the correct way to do things out of me. I know most of my
                  React knowledge thanks to his support."
                link={"https://www.linkedin.com/in/joseph-s-1ab1a262/"}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

{
  /* <div class="col">
            <div>
              <br></br>
              <br></br>
            </div>
            <div class="card shadow-sm">
              <Link to="/Skills" style={linkStyle}>
              <div
                style={{
                  backgroundImage: `url(${"test"})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "225px",
                  width: "100%",
                }}
              >
                <text
                  style={{
                    position: "relative",
                    bottom: "50px",
                    fontSize: "28px",
                  }}
                >
                  Joe Saperstein
                </text>
              </div>
              </Link>

              <div class="card-body">
                <p class="card-text">
                  Joe is a front end developer God and is a very good at coaxing
                  the correct way to do things out of me. I know most of my
                  React knowledge thanks to his support.
                </p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div> */
}
{
  /* <div class="col">
            <div>
              <br></br>
              <br></br>
            </div>
            <div class="card shadow-sm">
              <Link to="/Mentors" style={linkStyle}>
              <div
                style={{
                  backgroundImage: `url(${"test"})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "225px",
                  width: "100%",
                }}
              >
                <text
                  style={{
                    position: "relative",
                    bottom: "50px",
                    fontSize: "28px",
                  }}
                >
                  Adam Blacke
                </text>
              </div>
              </Link>

              <div class="card-body">
                <p class="card-text">
                  Astounding people who made an impact in my life
                </p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div> */
}
{
  /* </div>
      </div>
    </div>
  ); */
}

export default Mentors;
