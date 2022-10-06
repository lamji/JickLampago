import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box, Container, Grid } from "@mui/material";
import { borderRadius, height, width } from "@mui/system";
import Addtocart from "../Card/Addtocart";
import TemporaryDrawer from "../AppDrawer/Index";
import data from "../../Data/Experience.json";
import CustomArrows from "../Slick";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [drawer, setDrawer] = React.useState(false);
  const [id, setId] = React.useState();
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
        sx={{
          zIndex: 100,
        }}
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
            <Image
              src="/experince.png"
              alt="Picture of the author"
              width={25}
              height={25}
            />
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Experience
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
            <Grid item lg={7} xs={12}>
              <Box
                sx={{
                  zIndex: 2000,
                  height: "364px",
                  overflowY: "scroll",
                  borderRadius: 2,
                  p: 1,
                  backgroundColor: "#ebebeb",
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                }}
              >
                <TemporaryDrawer
                  dataIn={id || 0}
                  status={drawer}
                  dataOut={(i) => setDrawer(i)}
                />
                {/* <Button onClick={() => setDrawer(true)}>add</Button> */}
                {data.map((rs) => {
                  return (
                    <Box key={rs?.id} m={1}>
                      <Addtocart
                        dataIn={rs}
                        dataOut={(i) => {
                          setDrawer(i?.status);
                          setId(i?.id);
                        }}
                      />
                    </Box>
                  );
                })}
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
                    backgroundImage: "url(/job.png)",
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
