import { Grid } from "@mui/material";
import Data from "../../constants.js";
import Intro from "../Intro.js";
import Thumbnails from "../Thumbnails.js";
const HomePage = () => (
  <main>
    <Grid container spacing={0} justifyItems="center">
      {/* <Header dark={true}>{Data.Name}</Header> */}
      <Intro Name={Data.Name} Description={Data.Description} />
      <Thumbnails />
    </Grid>
  </main>
);

export default HomePage;
