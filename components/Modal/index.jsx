import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box, Container, Grid } from "@mui/material";
import { borderRadius, height, width } from "@mui/system";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const [open, setOpen] = React.useState(false);

  const { status, dataOut, dataIn } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    dataOut(false);
  };

  React.useEffect(() => {
    setOpen(status);
  }, [status]);

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          position="static"
          elevation={0}
          sx={{ background: "transparent", color: "black" }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Close
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="xl">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            gap={2}
            sx={{
              mt: 1,
              height: "90vh",
            }}
          >
            <Grid item lg={6} xs={12}>
              <Box>
                <Typography variant="h5" fontWeight={700}>
                  About Me
                </Typography>
                <Box sx={{ border: "2px solid gray" }}></Box>
                <Typography variant="body2" mt={3}>
                  <Box component="span" sx={{ marginLeft: "50px" }}></Box>My
                  name is Jick T Lampago, a front-end software engineer
                  specialized in React.Js. I graduated in Cataingan Polytechnic
                  Institute as Associated in Computer Technology and taking my
                  mastery in web development by joining a bootcamp in Zuitt
                  Institute.
                </Typography>
                <Typography variant="body2" mt={3}>
                  <Box component="span" sx={{ marginLeft: "50px" }}></Box> I've
                  been working as a front-end software back in 2017 by using
                  html, css, Vanilla Js. 2020 when I started using React.js as a
                  front-end library in creating responsive UI in all of my
                  poject based contract and work as fulltime React Developer and I'm always curious to learn more about new technologies and creative coding
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={3} xs={12}>
              <Box
                sx={{
                  background: "gray",
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
                  height: "350px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    background: "#6a3636",
                    borderRadius: "73% 27% 12% 88% / 59% 26% 74% 41%",
                    height: "300px",
                    width: "300px",
                    backgroundImage: "url(/DP.png)",
                    backgroundSize: "cover",
                  }}
                ></Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Dialog>
    </div>
  );
}
