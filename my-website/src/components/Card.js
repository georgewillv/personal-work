import styled from "@emotion/styled/macro";
import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const DisplayOver = styled.div({
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
  zIndex: 2,
  transition: "background-color 350ms ease",
  backgroundColor: "transparent",
  padding: "20px 20px 0 20px",
  boxSizing: "border-box",
});

const BigTitle = styled.h2({
  fontFamily: "Helvetica",
  color: "white",
  transform: "translate3d(0,5px,0)",
  transition: "transform 350ms ease",
  textAlign: "start",
});

const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease",
});

const SubTitle = styled.h4({
  fontFamily: "Helvetica",
  color: "white",
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
  textAlign: "start",
});

export default function ThumbCard(props) {
  const { backgroundUrl, title, subText, link } = props;
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
      <Card
        variant="outlined"
        sx={{
          minWidth: "25rem",
          maxWidth: "25rem",
          [`:hover ${BigTitle}`]: {
            transform: "translate3d(0,0,0)",
          },
          [`:hover ${DisplayOver}`]: {
            backgroundColor: "rgba(0,0,0,.5)",
          },
          [`:hover ${SubTitle}`]: {
            transform: "translate3d(0,0,0)",
          },
          [`:hover ${Hover}`]: {
            opacity: 1,
          },
        }}
      >
        <CardActionArea>
          <Link to={link}>
            <CardMedia
              component="img"
              image={backgroundUrl}
              sx={{
                minWidth: "15rem",
                maxWidth: "25rem",
                objectFit: "cover",
                height: "383.516px",
                cursor: "pointer",
                //weird way to set the height, must revisit
              }}
            ></CardMedia>
            <DisplayOver>
              <BigTitle>{title}</BigTitle>
              <Hover>
                <SubTitle>{subText}</SubTitle>
              </Hover>
            </DisplayOver>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
