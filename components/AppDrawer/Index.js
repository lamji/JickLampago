import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from "@mui/material";
import { textAlign } from "@mui/system";

export default function TemporaryDrawer(props) {
  const { status, dataOut } = props;
  const [status2, setStatus2] = React.useState(false);
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
        <CloseIcon />
      <Typography
        variant="h6"
        sx={{
          color: "#EC994B",
          mt: 5,
          fontWeight: 700,
        }}
      >
      
        Work Experience Details
      </Typography>
      <Box mt={5}>
        <Typography
          variant="body2"
          sx={{
            color: "#EC994B",
            fontWeight: 700,
          }}
        >
          Technology:{" "}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography
            variant="body2"
            sx={{
              background: "#112B3C",
              borderRadius: 10,
              p: 1,
              px: 4,
              mt: 1
            }}
          >
            React.js
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={status2}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
