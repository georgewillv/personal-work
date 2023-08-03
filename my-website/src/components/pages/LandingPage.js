import { Divider, Grid, Typography } from "@mui/material";
import LandingPageHeader from "../LandingPageHeader";

const LandingPage = () => (
  <main>
    <LandingPageHeader />
    <Grid container spacing={0} justifyItems="center">
      {/* <Intro Name={Data.Name} Description={Data.Description} /> */}
      <Grid
        container
        // spacing={12}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ flexGrow: 1, backgroundColor: "#f1f1f1" }}
        // rowSpacing={4}
      >
        <Typography variant="h3">
          Hi! Nice to meet you! My name is George Williams V
        </Typography>
        <Typography variant="h4">
          Currently residing in Aurora, Colorado, I'm a passionate Python and
          React dev who loves building technologies.
        </Typography>
        <Divider></Divider>
      </Grid>
    </Grid>
  </main>
);

export default LandingPage;
