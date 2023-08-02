import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   col: {},
//   card: {
//     marginBottom: theme.spacing(2),
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   },
//   backgroundImage: {
//     backgroundPosition: "center",
//     backgroundSize: "cover",
//     height: "225px",
//     width: "100%",
//     position: "relative",
//     bottom: theme.spacing(6),
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//   },
//   title: {
//     fontSize: "28px",
//     fontWeight: "bold",
//   },
//   linkStyle: {
//     textDecoration: "none",
//   },
// }));

export default function ThumbCard(props) {
  const { backgroundUrl, title, subText, link } = props;
  //   const classes = useStyles();
  //   return (
  //     <div class="col">
  //       <div class="card shadow-sm">
  //         <Card>
  //           <Link to={`url(${link}`} style={classes.linkStyle}></Link>
  //           <Grid
  //             sx={{
  //               backgroundImage: `url(${backgroundUrl})`,
  //             }}
  //           >
  //             <Typography variant="h5">{title}</Typography>
  //           </Grid>
  //           <div class="card-body">
  //             <p class="card-text">{subText}</p>
  //             <div class="d-flex justify-content-between align-items-center"></div>
  //           </div>
  //         </Card>
  //       </div>
  //     </div>
  //   );

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      justifyItems="space-between"
    >
      <Typography variant="h5">{title}</Typography>
      <Card variant="outlined" sx={{ minWidth: "25rem", maxWidth: "25rem" }}>
        <Link to={link}>
          <CardMedia component="img" image={backgroundUrl} />
          <CardContent>
            <Typography>{subText}</Typography>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  );
}
