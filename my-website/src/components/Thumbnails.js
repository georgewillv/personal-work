import { Box, Grid } from "@mui/material";
import anime_pc from "../thumbnail_images/anime_pc.jpg";
import kakashi from "../thumbnail_images/kakashi_sensei.jpg";
import one_piece_map from "../thumbnail_images/one_piece_map.png";
import skill_tree from "../thumbnail_images/skill_tree1.jpg";
import tanjiro_smile from "../thumbnail_images/tanjiro_smile.jpg";
import ua_school from "../thumbnail_images/ua_school.jpg";
import ThumbCard from "./Card";

const Thumbnails = () => {
  return (
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
              backgroundUrl={tanjiro_smile}
              title={"About Me"}
              subText={"Interests Hobbies and Philosophies"}
              link={"/AboutMe"}
            />
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <ThumbCard
              backgroundUrl={one_piece_map}
              title={"Career Journey"}
              subText="Timeline of where I've worked and notable projects"
              link={"/CareerJourney"}
            />
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <ThumbCard
              backgroundUrl={ua_school}
              title={"Education"}
              subText="Where I studied and what I learned"
              link={"/Education"}
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
              backgroundUrl={kakashi}
              title={"Mentors"}
              subText={"Astounding people who made an impact in my life"}
              link={"/Mentors"}
            />
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <ThumbCard
              backgroundUrl={skill_tree}
              title={"Skills"}
              subText="Where I've invested my IRL EXP"
              link={"/Skills"}
            />
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <ThumbCard
              backgroundUrl={anime_pc}
              title={"Contact Me"}
              subText="Click for related contact information"
              link={"/Contact"}
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Thumbnails;
