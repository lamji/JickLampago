import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, IconButton, Typography } from "@mui/material";
import data from "../../Data/Experience.json";

export default function TemporaryDrawer(props) {
  const { status, dataOut, dataIn } = props;
  const [status2, setStatus2] = React.useState(false);
  console.log(dataIn);
  const res = data.filter((rs) => rs?.id === dataIn);
  console.log(res);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    dataOut(false);
  };

  React.useEffect(() => {
    setStatus2(status);
  }, [status]);
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 350,
        zIndex: 3000,
        p: 5,
        background: "#413F42",
        color: "white",
        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <IconButton
        aria-label="delete"
        onClick={() =>
          dataOut({
            status: true,
            id: 1,
          })
        }
        sx={{
          p: 0,
          color: "#EC994B",
          "&:focus": {
            outline: 0,
            border: 0,
          },
          "&:hover": {
            background: "transparent",
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      <Typography
        variant="h6"
        sx={{
          color: "#EC994B",
          mt: 1,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Work Experience Details
      </Typography>
      <Box
        sx={{
          background: "#EC994B",
          color: "black",
          borderRadius: 10,
          p: 1,
          px: 4,
          fontSize: "12px",
        }}
      >
        <Typography variant="body2" fontSize={11} textAlign="center">
          {res?.[0]?.year}
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography
          variant="body2"
          mt={1}
          sx={{
            color: "white",
          }}
        >
          Company: {res?.[0]?.company}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "white",
          }}
        >
          Position: {res?.[0]?.position}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "white",
            fontWeight: 700,
            color: "#EC994B",
          }}
        >
          PROJECT THAT I INVOLVED:
        </Typography>
        <Box sx={{ display: "block" }}>
          {res?.[0]?.project.map((rs, idx) => (
            <Box key={idx}>
              <Typography variant="body2" fontSize={12}>
                - {rs}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography
          variant="body2"
          mt={1}
          sx={{
            color: "white",
            fontWeight: 700,
            color: "#EC994B",
          }}
        >
          Description:
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "white",
            fontSize: "11px",
            fontStyle: "italic",
          }}
        >
          {res?.[0]?.discription}
        </Typography>
        <Typography
          variant="body2"
          mt={1}
          sx={{
            color: "#EC994B",
            fontWeight: 700,
          }}
        >
          Technology:
        </Typography>
        <Grid container spacing={1} >
          {res?.[0]?.tech.map((rs) => (
            <Grid item xs={6}>
            <Typography
              variant="body2"
              sx={{
                background: "#112B3C",
                borderRadius: 10,
                p: 1,
                px: 2,
                fontSize: "12px",
              }}
            >
              {rs}
            </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer anchor={anchor} open={status2}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
