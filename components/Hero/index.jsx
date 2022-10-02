import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SkilssCard from "../Card";
import React from "react";
import data from "./data.json";
import Modal from "../Modal"

function index() {
  console.log(data);
  const [open, setOpen] = React.useState(false)
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
                  xs: "flex"
                },
                alignItems: {
                  xs: "center"
                }
              }}
            >
              <Box>
                <Typography variant="h4">I'm</Typography>
                <Typography variant="h2" fontWeight={700}>
                  JICK LAMPAGO
                </Typography>
                <Typography variant="h6">A React Web Developer</Typography>
                <Button variant="outlined" onClick={() => setOpen(true)}>About Me</Button>
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
        <Modal status={open} dataOut={(i) => setOpen(false)}/>
      </Container>
    </Box>
  );
}

export default index;
