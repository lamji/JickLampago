import { Button, ButtonBase, Container, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {DriveFileMove} from '@mui/icons-material';
import { Box } from "@mui/system";
import SkilssCard from "../Card";
import React from "react";
import data from "./data.json";
import Experience from "../Modal/Experience"
import Modal from "../Modal";
import TemporaryDrawer from "../AppDrawer/Index";


function index() {
  const [open, setOpen] = React.useState(false);
  const [openExp, setOpenExp] = React.useState(false);
  const [drawer, setDrawer] = React.useState(false)
  return (
    <Box sx={{ backgroundImage: "url(/preview.png)" }}>
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "90vh" }}
        >
          <Grid item lg={6} sm={12}>
            <Box
              sx={{
                height: {
                  xs: "100vh",
                },
                display: {
                  lg: "contents",
                  xs: "flex",
                },
                alignItems: {
                  xs: "center",
                },
              }}
            >
              <Box>
                <Typography variant="h4">I'm</Typography>
                <Typography variant="h2" fontWeight={700}>
                  JICK LAMPAGO
                </Typography>
                <Typography variant="h6">A React Web Developer</Typography>
                
                <Box sx={{display: "table-caption"}}>
                  <IconButton
                    aria-label="delete"
                    onClick={() => setOpen(true)}
                    sx={{
                      p:0,
                      "&:focus": {
                        outline: 0,
                        border: 0,
                      },
                      "&:hover": {
                        background: "transparent",
                      },
                    }}
                  >
                    <DriveFileMove />
                    <Typography variant="body2" >About Me</Typography>
                  </IconButton>

                  <IconButton
                    aria-label="delete"
                    onClick={() => setOpenExp(true)}
                    sx={{
                      p:0,
                      "&:focus": {
                        outline: 0,
                        border: 0,
                      },
                      "&:hover": {
                        background: "transparent",
                      },
                    }}
                  >
                    <DriveFileMove />
                    <Typography variant="body2">Experience</Typography>
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} sm={12}>
            <Box sx={{ background: "#dddddd", p: 4, borderRadius: "10px" }}>
              <Typography>Skills</Typography>
              <Grid container gap={1}>
                {data.map((res, index) => {
                  return (
                    <Grid item lg={res.size} sm={12} key={index}>
                      <SkilssCard
                        width={res.width}
                        height={res.height}
                        image={res.logo}
                        label={res.name}
                        color={res.color}
                        bg={res.background}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Modal  status={open} dataOut={(i) => setOpen(false)} />
        <Experience status={openExp} dataOut={(i) => setOpenExp(false)}/>
      </Container>
    </Box>
  );
}

export default index;
